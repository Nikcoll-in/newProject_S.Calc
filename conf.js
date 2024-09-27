exports.config = {
  framework: "jasmine",
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: [
    //"./src/page-object/home-spec.ts",
    "./home.page.ts",
  ],
};