(() => {
  const { elementPublicApi, model, modules, ui } = globalThis.onlinepngtoolsGlobal;

  modules.Options = () => {
    const { InputRadio, InputText, Select } = ui;
    const { options: optionsData } = model.config.data;
    const controlledElements = {};

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
                  controlledElements[button.name] = (
                    Select("options--parameter-item", button.name, button.values)
                  )
                : '',
                button.type === "radio" ?
                  controlledElements[button.name] = (
                    InputRadio("options--parameter-item", `option-${index}`, button.value, button.label)
                  )
                : '',
                button.type === "text" ?
                  controlledElements[button.name] = (
                    InputText("options--parameter-item", button.name, button.value)
                  )
                : '',
              )
            ))
          ),
        )
      ))
    );

    options[elementPublicApi] = {
      setOptionParameters: (optionsData) => {
        console.log(
          "Apply new parameters to controlled elements",
          { optionsData, controlledElements },
        );
      }
    }

    return options;
  };
})();
