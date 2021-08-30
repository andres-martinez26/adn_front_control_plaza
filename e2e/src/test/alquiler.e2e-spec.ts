import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { AlquilerPage } from '../page/alquiler/alquiler.po';

describe('workspace-project Alquiler', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let alquiler: AlquilerPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        alquiler = new AlquilerPage();
    });

    it('Deberia crear un registro', () => {
        const ID_PRODUCTO = '1099371662';
        const NOMBRE_ALQUILER = 'Andrés';
        const NUMERO_ALQUILER = '3162878186';
        const FECHA_PAGO_ALQUILER= '2021-10-11';
        const ESTADO_PAGO_ALQUILER = 'Cancelado';
        const LETRA_LOCAL_ALQUILER = 'A';

        page.navigateTo();
        navBar.clickBotonAlquiler();
        alquiler.clickBotonCrearRegistro();
        alquiler.ingresarId(ID_PRODUCTO);
        alquiler.ingresarNombre(NOMBRE_ALQUILER);
        alquiler.ingresarNumero(NUMERO_ALQUILER);
        alquiler.ingresarFechaPago(FECHA_PAGO_ALQUILER);
        alquiler.ingresarEstadoPago(ESTADO_PAGO_ALQUILER);
        alquiler.ingresarLetraLocal(LETRA_LOCAL_ALQUILER);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar registros', () => {
        page.navigateTo();
        navBar.clickBotonAlquiler();
        alquiler.clickBotonListarRegistros();

        expect(4).toBe(alquiler.contarRegistros());
    });
});