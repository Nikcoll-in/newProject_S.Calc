describe("Broken images", function () {
  let browser = require("protractor").browser;
  let element = require("protractor").element;
  let by = require("protractor").by;

  it("Test for broken images", function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.get("http://the-internet.herokuapp.com/broken_images");

    let imagesBrokenCount = browser.executeScript(`
  let elms = document.querySelectorAll("img");
  return [].filter.call(elms, e => e.offsetHeight > 1 && e.naturalHeight <= 1).length;`);
    expect(imagesBrokenCount).toEqual(2);
  });
});
