const getSelected = (data, pathname) => {
  let selection = {};

  data.forEach(item => {
    const isSelection =
      item.path === pathname || pathname.indexOf(item.path) !== -1;

    if (isSelection) selection = { ...item };
    if (item.data) getSelected(item.data, pathname);
  });

  return selection;
};

export default { getSelected };
