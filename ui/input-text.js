(() => {
  const { ui } = window.onlinepngtoolsGlobal;

  // prettier-ignore
  ui.text = (className, name, value) => (
    crel("input", { class: className, type: 'text', name, value })
  );
})();
