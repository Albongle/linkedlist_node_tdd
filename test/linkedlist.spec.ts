import Linkedlist from '../src/modules/linkedlist/linkedlist';

describe('linkedlist', () => {
    it('Al instanciar una linkedlist el firstNode deberia ser undefined', () => {
        const linkedlist: Linkedlist<number> = new Linkedlist();

        expect(linkedlist.firstNode).toBeUndefined();
    });

    it('Al consultar la cantidad de elementos de una linkedlist vacia se espera obtener 0 (cero)', () => {
        const linkedlist: Linkedlist<number> = new Linkedlist();
        const expectValue = 0;

        const count = linkedlist.CountElements;

        expect(count).toEqual(expectValue);
    });

    it('Al Agregar un elemento a la linkedlist se espera que la cantidad de elementos sea igual a 1 (uno)', () => {
        const linkedlist: Linkedlist<number> = new Linkedlist();
        const expectValue = 1;
        const element = 99;

        linkedlist.addElement(element);

        const count = linkedlist.CountElements;

        expect(count).toEqual(expectValue);
    });

    it('Al Agregar mas de un elemento a la linkedlist se espera que la cantidad de elementos sea igual a la cantidad de elementos agregados', () => {
        const linkedlist: Linkedlist<number> = new Linkedlist();
        const countElements = 5;

        let i = 0;

        for (i; i < countElements; i++) {
            linkedlist.addElement(i);
        }

        const count = linkedlist.CountElements;

        expect(count).toEqual(i);
    });
    it('Al enviar un array de elementos, se espera que se agregguen 1 a 1 a la linkedlist', () => {
        const linkedlist: Linkedlist<number> = new Linkedlist();
        const countElementsExpected = 4;
        linkedlist.addElement([100, 900, 1999, 2023]);

        const count = linkedlist.CountElements;

        expect(count).toEqual(countElementsExpected);
    });

    it('Al pedir un elemento por indice de la linkedlist, si el indice esta por fuera de los rangos permitidos, se espera obtener una error', () => {
        const linkedlist: Linkedlist<number> = new Linkedlist();
        const index = 1;
        expect(() => linkedlist.getElementByIndex(index)).toThrowError('index out of range');
    });

    it('Al pedir un elemento por indice de la linkedlist, si el indice esta dentro del rango permitidos, se espera obtener el valor almacenado', () => {
        const linkedlist: Linkedlist<number> = new Linkedlist();
        const index = 1;
        const elementExpect = 1;
        const countElements = 5;
        let i = 0;

        for (i; i < countElements; i++) {
            linkedlist.addElement(i);
        }

        const element: number = linkedlist.getElementByIndex(index);

        expect(element).toEqual(elementExpect);
    });

    it('Al enviar un elemento al metodo indexOf de la linkedlist si este no se encuentra se espera obtener -1', () => {
        const linkedlist: Linkedlist<number> = new Linkedlist();
        const indexExpected = -1;
        const elementToFind = 2021;
        linkedlist.addElement([100, 900, 1999, 2023]);

        const index = linkedlist.indexOf((e) => e === elementToFind);

        expect(index).toEqual(indexExpected);
    });

    it('Al enviar un elemento al metodo indexOf de la linkedlist si se encuentra se espera obtener la posicion que ocupa', () => {
        const linkedlist: Linkedlist<number> = new Linkedlist();
        const indexExpected = 2;
        const elementToFind = 1999;
        linkedlist.addElement([100, 900, 1999, 2023]);

        const index = linkedlist.indexOf((e) => e === elementToFind);

        expect(index).toEqual(indexExpected);
    });

    it('Al llamar al metodo find de una linkedlist se debera obtener el primer elemento que coincida con el criterio de busqueda', () => {
        const linkedlist: Linkedlist<number> = new Linkedlist();
        const elementFindExpected = 1999;
        const elementToFind = 1999;
        linkedlist.addElement([100, 900, 1999, 2023]);

        const element = linkedlist.find((e) => e === elementToFind);

        expect(element).toEqual(elementFindExpected);
    });

    it('Al llamar al metodo find de una linkedlist se debera undefined si no hay coincidencia con el criterio de busqueda establecido', () => {
        const linkedlist: Linkedlist<number> = new Linkedlist();
        const elementToFind = 2000;
        linkedlist.addElement([100, 900, 1999, 2023]);

        const element = linkedlist.find((e) => e === elementToFind);

        expect(element).toBeUndefined();
    });
});
