//importamos el archivo
const Spiderman = require('./../app/spiderman')

// agrega una prueba de unidad en jest que este fallando, crea el archivo spiderman.test.js

describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
        // Aqui escribimos el codigo que queremos usar tal cual
        // Quiero poder instanciar un objeto Spiderman con esta informacion
        const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield",2, "Sony")

/*
        const resultOfSomething = 1 + 2
        expect(resultOfSomething).toBe(18);
*/

// Validamos que este codigo funcione de la forma esperada
expect(andrewGarfield.name).toBe("Spiderman Sony")
expect(andrewGarfield.age).toBe(31)
expect(andrewGarfield.actor).toBe("Andrew Garfield")
expect(andrewGarfield.movies).toBe(2)
expect(andrewGarfield.studio).toBe("Sony")
    });
})

// agregamos una prueba mas para verificar como trabaja el codigo
test('2) Use the method getInfo()', () =>{ 
    const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, 
    "Marvel")
    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
})