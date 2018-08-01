
import {SuiteNames} from "../../suites/suitenames";
import Page from "../../pageobjects/page";

describe(SuiteNames.e2eSuite, () => {

    it('Open Home Page of Budge App and Verify Report and Budge Link', () => {
        Page.openBaserUrl('budget')
        expect(browser.getText('a.components-Header-style-selected')).toContain('Budget')
        expect(browser.getText('#root > main > div > a:nth-child(2)')).toContain('Reports')
    });
});