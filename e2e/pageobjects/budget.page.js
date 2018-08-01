
import Page from "./page";

export  class BudgetPage extends Page {

    static get addItem() {
        Page.clickElement('select[name=\'categoryId\']')
        Page.clickElement(`option[value='1']`)
        Page.setInputValue('input[name=\'description\']', 'test description')
        Page.setInputValue('input[name=\'value\']', '100')
        Page.clickElement('button[type=\'submit\']')
    }
}



