const registry = ({ serviceId, onRender, onUnmount }) => {
  if (window[serviceId]) {
    window[`render${serviceId}`] = onRender;
    window[`unmount${serviceId}`] = onUnmount;
  } else {
    onRender();
  }
};

const load = async host => {
  const serviceManifest = await fetch(`${host}/manifest.json`).json();
  const serviceSrc = `${host}${serviceManifest["main.js"]}`;
  const serviceId = `${serviceManifest.name}-${serviceManifest.id}`;

  return { serviceId, serviceSrc };
};

const append = (serviceId, serviceSrc, onload) => {
  const script = document.createElement("script");
  script.id = serviceId;
  script.crossOrigin = "";
  script.src = serviceSrc;
  script.onload = onload;
  document.head.appendChild(script);
};

const render = (serviceId, serviceSrc, history) => {
  const render = window[`render${serviceId}`];

  window[serviceId]
    ? render(serviceId, history)
    : append(serviceId, serviceSrc, () => render(serviceId, history));
};

const unmount = serviceId => {
  const unmount = window[`unmount${serviceId}`];
  unmount(serviceId);
};

export default {
  registry,
  load,
  append,
  render,
  unmount
};
