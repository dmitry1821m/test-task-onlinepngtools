(() => {
  const { ui } = globalThis.onlinepngtoolsGlobal;

  // prettier-ignore
  ui.Select = (className, name, options) => (
    crel("select", { class: className, name },
      options.map((option) => {
        const optionAttributes = { value: option.value };

        if (option.selected) {
          optionAttributes.selected = option.selected;
        }

        return crel("option", optionAttributes,
          option.label
        )
      })
    )
  );
})();
