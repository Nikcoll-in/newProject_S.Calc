(() => {
  let browser = require("protractor").browser;
  let element = require("protractor").element;
  let by = require("protractor").by;

  describe("Protractor Demo App", function () {
    let firstNumber = element(by.model("first"));
    let secondNumber = element(by.model("second"));
    let goButton = element(by.id("gobutton"));
    let latestResult = element(by.binding("latest"));

    beforeEach(function () {
      browser.get("http://juliemr.github.io/protractor-demo/");
    });

    it("should have a title", function () {
      expect(browser.getTitle()).toEqual("Super Calculator");
    });

    it("should add one and two", function () {
      firstNumber.sendKeys(13);
      secondNumber.sendKeys(100);

      goButton.click();

      expect(latestResult.getText()).toEqual("113");
    });
  });
})();
