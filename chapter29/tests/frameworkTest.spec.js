describe("Jasmine Test Environment", function () {
    it("is working", function () { return expect(true).toBe(true); });
    it("test numeric value", function () { return expect(12).toBeGreaterThan(10); });
    it("test string value", function () { return expect("London").toMatch("^Lon"); });
});
