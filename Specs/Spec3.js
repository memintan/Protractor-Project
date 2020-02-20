var actions = browser.actions();  // actions class 
var googlePage = require("../Pages/GooglePage.js")
var TestData = require("../Resources/TestData1.json");

describe("Test Group 3", () => {
    it("Search Apple on google website", () => {
               //input[@name="q"]
        //var SearchBox = element(by.xpath(" //input[@name='q']"));
            googlePage.SearchBox.sendKeys("Apple");
            actions.sendKeys(protractor.Key.ENTER).perform();
    });
    
});