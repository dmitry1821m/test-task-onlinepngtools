(() => {
  const { model, modules } = globalThis.onlinepngtoolsGlobal;

  modules.Examples = (setOptionParameters) => {
    const { examples } = model.config.data;
    const testButton = crel("button", { class: "examples--test-button", type: "button" }, "Test");

    testButton.addEventListener('click', () => {
      setOptionParameters(examples[0].options)
    });

    return crel("div", { class: "examples" }, testButton);
  };
})();
