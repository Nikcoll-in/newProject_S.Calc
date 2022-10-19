exports.config = {
  framework: "jasmine", //Type of Framework used
  directConnect: true,
  specs: ["./home.page.ts"], //Name of the Specfile
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json"),
    }); // Relative path of tsconfig.json file
  },
  onComplete() {
    //global test tear-down goes here
  },
};
