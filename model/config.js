(() => {
  const { mocks, model } = window.onlinepngtoolsGlobal;

  model.config = {
    data: undefined,
    fetch: async () => {
      return (model.config.data = JSON.parse(mocks.config));
    },
  };
})();
