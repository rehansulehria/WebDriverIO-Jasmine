import {BudgetPage} from "../../pageobjects/budget.page";
import {SuiteNames} from "../../suites/suitenames";
import Page from "../../pageobjects/page";

describe(SuiteNames.e2eSuite, () => {

    it('User Adds A New Budget Item', () => {
        Page.openBaserUrl('budget')
        BudgetPage.addItem
        expect(Page.elementText('td:nth-child(1) > div.components-BudgetGridRow-style-cellContent'))
            .toContain('Groceries')
        expect(Page.elementText('tr:nth-child(7) > td.components-BudgetGridRow-style-neg > div.components-BudgetGridRow-style-cellContent'))
            .toContain('-$100.00')
        expect(Page.elementText('div.components-Balance-style-balanceAmount.components-Balance-style-neg'))
            .toContain('$4,688.07')
    });
});