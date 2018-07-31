import {BudgetPage} from "../../pageobjects/reports.page";
import {SuiteNames} from "../../suites/suitenames";
import Page from "../../pageobjects/page";

describe(SuiteNames.e2eSuite, () => {

    it('User Adds A New Budget Item', () => {
        Page.openBaserUrl('budget')
        BudgetPage.addItem
    });
});