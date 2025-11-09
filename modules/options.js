(() => {
  const { model, modules, ui } = globalThis.onlinepngtoolsGlobal;

  modules.Options = () => {
    const { InputRadio, InputText, Select } = ui;
    const { options } = model.config.data;

    // prettier-ignore
    return crel("div", { class: "options" },
      ...options.map((option, index) => (
        crel("div", { class: "options--option" },
          crel("p", option.group),
          crel("div", { class: "options--buttons" },
            ...option.buttons.map((button) => (
              crel("div", { class: "options--button" },
                button.comment ?
                  crel("p", button.comment)
                : '',
                button.type === "list" ?
                  Select("options--button-item", button.name, button.values)
                : '',
                button.type === "radio" ?
                  InputRadio("options--button-item", `option-${index}`, button.value, button.label)
                : '',
                button.type === "text" ?
                  InputText("options--button-item", button.name, button.value)
                : '',
              )
            ))
          ),
        )
      ))
    );
  };
})();
