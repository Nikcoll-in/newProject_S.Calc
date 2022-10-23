import { browser, element, by, ElementFinder, protractor } from "Protractor";

describe("Basic Login", function () {
  it("Test to Login using Protractor", async function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    let loggin = `admin`;
    let password = `admin`;

    browser.get(
      `http://${loggin}:${password}@the-internet.herokuapp.com/basic_auth`
    );
    let successText = element(by.xpath("//p"));
    expect(await successText.getText()).toBe(
      "Congratulations! You must have the proper credentials."
    );
  });
});
