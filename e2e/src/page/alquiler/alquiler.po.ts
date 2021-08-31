import { by, element } from 'protractor';

export class AlquilerPage {
    private linkCrearAlquiler = element(by.id('linkCrearAlquiler'));
    private linkListarAlquiler = element(by.id('linkListarAlquiler'));
    private inputIdAlquiler = element(by.id('id'));
    private inputNombreAlquiler = element(by.id('nombre'));
    private inputNumeroAlquiler = element(by.id('numero'));
    private inputFechaPagoAlquiler = element(by.id('fechaPago'));
    private inputEstadoPagoAlquiler = element(by.id('estadoPago'));
    private inputLetraLocalAlquiler = element(by.id('letraLocal'));
    private buttonCrearAlquiler = element(by.id('crearAlquiler'));
    private listarAlquiler = element.all(by.css('table tbody tr'));

    async clickBotonCrearRegistro() {
        await this.linkCrearAlquiler.click();
    }

    async clickBotonListarRegistros() {
        await this.linkListarAlquiler.click();
    }

    async ingresarId(idAlquiler) {
        await this.inputIdAlquiler.sendKeys(idAlquiler);
    }

    async ingresarNombre(nombreAlquiler) {
        await this.inputNombreAlquiler.sendKeys(nombreAlquiler);
    }

    async ingresarNumero(numeroAlquiler) {
        await this.inputNumeroAlquiler.sendKeys(numeroAlquiler);
    }

    async ingresarFechaPago(fechaPagoAlquiler) {
        await this.inputFechaPagoAlquiler.sendKeys(fechaPagoAlquiler);
    }

    async ingresarEstadoPago(estadoPagoAlquiler) {
        await this.inputEstadoPagoAlquiler.sendKeys(estadoPagoAlquiler);
    }

    async ingresarLetraLocal(letraLocalAlquiler) {
        await this.inputLetraLocalAlquiler.sendKeys(letraLocalAlquiler);
    }

    async clickBotonCrearAlquiler(){
        await this.buttonCrearAlquiler.click();
    }

    async contarRegistros() {
        return this.listarAlquiler.count();
    }
}
