module.exports = {
    plugins: [
      {
        name: 'removeAttrs',
        params: {
          attrs: '(class|style)'  // Removes all `class` and `style` attributes
        }
      }
    ]
  };
  