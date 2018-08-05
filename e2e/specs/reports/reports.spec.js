import {ReportPage} from "../../pageobjects/report.page";
import {SuiteNames} from "../../suites/suitenames";
import Page from "../../pageobjects/page";

describe(SuiteNames.e2eSuite, () => {

    it('Navigate To Report Page and Verify Added Budget and Perform Other Necessary Verifications', () => {
        Page.openBaserUrl('budget')
        ReportPage.navigateToReports
        browser.waitForVisible('a[href=\'/reports/inflow-outflow\']')
        expect(Page.elementText('a[href=\'/reports/inflow-outflow\']')).toContain('Inflow vs Outflow')

    });

    it('Test Spend By Category - Negative Failing Test', () => {
        Page.openBaserUrl('budget')
        ReportPage.navigateToReports
        browser.waitForVisible('a[href=\'/reports/spending\']')
        Page.clickElement('a[href=\'/reports/spending\']')
        expect(Page.elementText('span.components-Legend-styles-value')).toContain('$2,301.00')
    });
});