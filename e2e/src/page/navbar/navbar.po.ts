import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/mat-toolbar/mat-toolbar-row/nav/a[1]'));
    linkAlquiler = element(by.xpath('/html/body/app-root/app-navbar/mat-toolbar/mat-toolbar-row/nav/a[2]'));

    async clickBotonAlquiler() {
        await this.linkAlquiler.click();
    }
}
