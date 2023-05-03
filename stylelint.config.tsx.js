module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-styled-components"],
  plugins: ["stylelint-order"],
  processors: ["stylelint-processor-styled-components"],
  rules: {
    "order/order": ["custom-properties", "declarations"],
    "order/properties-alphabetical-order": true,
  },
};
