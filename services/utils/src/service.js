const getService = id => window[`service-${id}`];

const registry = async host => {
  const res = await fetch(`${host}/manifest.json`);
  const manifest = await res.json();
  const id = `${manifest.name}-${manifest.id}`;
  const src = `${host}${manifest["main.js"]}`;

  const service = getService(id);

  if (!service)
    window[`service-${id}`] = {
      id,
      src,
      container: `container-${id}`,
      render: null,
      unmount: null
    };

  return getService(id);
};

const load = ({ id, onRender, onUnmount }) => {
  const service = getService(id);

  if (service) {
    service.render = onRender;
    service.unmount = onUnmount;
  } else {
    onRender();
  }
};

const append = (service, onload) => {
  const script = document.createElement("script");
  script.id = service.id;
  script.crossOrigin = "";
  script.src = service.src;
  script.onload = onload;
  document.head.appendChild(script);
};

const render = (id, history) => {
  const service = getService(id);

  service && service.render
    ? service.render(service.container, history)
    : append(service, () => service.render(service.container, history));
};

const unmount = id => {
  const service = getService(id);
  if (service) service.unmount(service.container);
};

export default {
  registry,
  load,
  append,
  render,
  unmount
};
