(async () => {
  const { model, modules } = globalThis.onlinepngtoolsGlobal;
  const { Header, Options } = modules;

  await model.config.fetch();

  crel(document.querySelector("#main"), Header(), Options())
})();
