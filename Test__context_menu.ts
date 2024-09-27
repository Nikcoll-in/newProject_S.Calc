import { browser, element, by, ElementFinder, protractor } from "Protractor";

describe("Mouse Action Demonstration in Protractor", function () {
  it("Test to handle click mouse action in Protractor", async function () {
    debugger;
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(15000);

    browser.get("http://the-internet.herokuapp.com/context_menu");
    let box = element(by.id("hot-spot"));

    browser.actions().click(box, protractor.Button.RIGHT).perform();

    let alertDialog = browser.switchTo().alert();
    expect(await alertDialog.getText()).toEqual("You selected a context menu");
    alertDialog.accept();
  });
});
