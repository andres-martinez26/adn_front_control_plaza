import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-home/app-navbar/nav/a[0]'));
    linkAlquiler = element(by.xpath('/html/body/app-home/app-navbar/nav/a[1]'));

    async clickBotonAlquiler() {
        await this.linkAlquiler.click();
    }
}
