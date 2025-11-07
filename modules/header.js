(() => {
  const { model, modules } = window.onlinepngtoolsGlobal;

  modules.header = {
    render: (container) => {
      const { name } = model.config.data;
      crel(container, crel("h1", name));
    },
  };
})();
