(async () => {
  const { elementPublicApi, model, modules } = globalThis.onlinepngtoolsGlobal;
  const { Examples, Header, Options } = modules;

  await model.config.fetch();

  const options = Options();
  const { setOptionParameters } = options[elementPublicApi];

  // prettier-ignore
  crel(document.querySelector("#main"),
    Header(),
    options,
    Examples(setOptionParameters),
  )
})();
