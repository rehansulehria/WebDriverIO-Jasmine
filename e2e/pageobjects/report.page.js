import Page from "./page";

export class ReportPage extends Page {

    static get navigateToReports() {
        Page.clickElement('#root > main > div > a:nth-child(2)')
    }
}