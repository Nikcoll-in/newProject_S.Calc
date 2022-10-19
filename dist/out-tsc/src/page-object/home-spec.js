describe("Google Search", function () {
    it("should work", function () {
        browser.get("http://www.google.com");
        element(by.name("q")).sendKeys("webdriver");
        element(by.name("btnG")).click();
        expect(browser.getTitle()).toEqual("webdriver - Google Search");
    });
});
//# sourceMappingURL=home-spec.js.map