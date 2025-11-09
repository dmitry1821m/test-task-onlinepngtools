(() => {
  const { model, modules } = globalThis.onlinepngtoolsGlobal;

  modules.Header = () => {
    const { name } = model.config.data;
    return crel("h1", name);
  };
})();
