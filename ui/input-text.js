(() => {
  const { ui } = globalThis.onlinepngtoolsGlobal;

  // prettier-ignore
  ui.InputText = (className, name, value) => (
    crel("input", { class: className, type: 'text', name, value })
  );
})();
