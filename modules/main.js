(async () => {
  const { model, modules } = window.onlinepngtoolsGlobal;
  const { header, options } = modules;
  const container = document.querySelector("#main");

  await model.config.fetch();

  header.render(container);
  options.render(container);
})();
