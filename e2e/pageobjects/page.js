export default class Page {
    constructor() {
        this.title = '';
    }

    static openBaserUrl(path) {
        return browser.url(path);
    }

    static visible(elem) {
        return browser.waitForVisible(elem)
    }

    static elementText(elem) {
        return browser.getText(elem)
    }

    static setInputValue(elem, value) {
        this.visible(elem)
        return browser.setValue(elem, value)
    }

    static clickElement(elem) {
        this.visible(elem)
        return browser.click(elem)
    }
}