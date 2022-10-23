describe("add_remove_elements", function () {
  let browser = require("protractor").browser;
  let element = require("protractor").element;
  let by = require("protractor").by;

  it("Test to clicking to the Add/Delete Buttons", function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.get("http://the-internet.herokuapp.com/add_remove_elements/");

    let addButton = element(by.buttonText("Add Element"));
    expect(addButton.getText()).toContain("Add Element");

    addButton.click().then(() => {
      let deleteButton = element(by.buttonText("Delete"));
      expect(deleteButton.getText()).toContain("Delete");

      deleteButton.click().then(() => {
        expect(deleteButton.isPresent()).toBeFalsy();
      });
    });
  });
});
