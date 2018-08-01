import {ReportPage} from "../../pageobjects/report.page";
import {SuiteNames} from "../../suites/suitenames";
import Page from "../../pageobjects/page";

describe(SuiteNames.e2eSuite, () => {

    it('Open Home Page of Budge App and Verify Report and Budge Link', () => {
        Page.openBaserUrl('budget')
        ReportPage.navigateToReports
        browser.waitForVisible('a[href=\'/reports/inflow-outflow\']')
        expect(browser.getText('a[href=\'/reports/inflow-outflow\']')).toContain('Inflow vs Outflow')
    });
});