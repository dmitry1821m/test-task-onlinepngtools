(() => {
  const { model, modules, ui } = globalThis.onlinepngtoolsGlobal;

  modules.Options = () => {
    const { InputRadio, InputText, Select } = ui;
    const { options: optionsData } = model.config.data;

    // prettier-ignore
    const options = crel("div", { class: "options" },
      ...optionsData.map((option, index) => (
        crel("div", { class: "options--group" },
          crel("p", option.group),
          crel("div", { class: "options--parameters" },
            ...option.buttons.map((button) => (
              crel("div", { class: "options--parameter" },
                button.comment ?
                  crel("p", button.comment)
                : '',
                button.type === "list" ?
                  Select("options--parameter-item", button.name, button.values)
                : '',
                button.type === "radio" ?
                  InputRadio("options--parameter-item", `option-${index}`, button.value, button.label)
                : '',
                button.type === "text" ?
                  InputText("options--parameter-item", button.name, button.value)
                : '',
              )
            ))
          ),
        )
      ))
    );

    const setOptionParameters = (...args) => {
      alert(JSON.stringify(args));
    };

    return { options, setOptionParameters }
  };
})();
