(async () => {
  const { model, modules } = globalThis.onlinepngtoolsGlobal;
  const { Examples, Header, Options } = modules;

  await model.config.fetch();

  const { options, setOptionParameters } = Options();

  // prettier-ignore
  crel(document.querySelector("#main"),
    Header(),
    options,
    Examples(setOptionParameters),
  )
})();
