(() => {
  const { model, modules, ui } = window.onlinepngtoolsGlobal;

  modules.options = {
    render: (container) => {
      const { options } = model.config.data;

      // prettier-ignore
      crel(container,
        crel("div", { class: "options" },
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
                      ui.list("options--button-list", button.name, button.values)
                    : '',
                    button.type === "radio" ?
                      ui.radio("options--button-radio", `option-${index}`, button.value, button.label)
                    : '',
                    button.type === "text" ?
                      ui.text("options--button-text", button.name, button.value)
                    : '',
                  )
                ))
              ),
            )
          ))
        )
      );
    },
  };
})();
