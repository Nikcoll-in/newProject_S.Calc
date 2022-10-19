describe("Google Search", function () {
    it("should work", function () {
        browser.get("https://rfcx.org/");
        //element(by.name("q")).sendKeys("webdriver");
        //element(by.name("btnG")).click();
        expect(browser.getTitle()).toEqual("Rainforest Connection | Home");
    });
});
//# sourceMappingURL=home.page.js.map