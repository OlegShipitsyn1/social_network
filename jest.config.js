module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testMatch: [
    "(/__tests__/.*|(.|/)(test|spec)).(jsx?|tsx?)$",
    "**/components/**/*.spec.[jt]s?(x)",
  ],
};
