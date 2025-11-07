(() => {
  const { ui } = window.onlinepngtoolsGlobal;

  // prettier-ignore
  ui.radio = (className, name, checked, label) => {
    const inputAttributes = { type: "radio", name };

    if (checked) {
      inputAttributes.checked = checked;
    }

    return crel("label", { class: `ui-input-radio ${className}` },
      crel("input", inputAttributes),
      label
    )
  };
})();
