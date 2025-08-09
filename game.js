const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function jugar() {
    console.log("Adivina el número correcto entre 1 y 100.");

    const numeroCorrecto = Math.floor(Math.random() * 100) + 1;

    function preguntarNumero() {
        rl.question("Numero: ", (input) => {
            const intento = parseInt(input);
            if (isNaN(intento) || intento < 1 || intento > 100) {
                console.log(" Es un numero entre el 1 y el 100, pdj");
                preguntarNumero();
                return;
            }
            if (intento === numeroCorrecto) {
                console.log("EPAAAAA");
                jugarDeNuevo();
            } else {
                const diferencia = Math.abs(numeroCorrecto - intento);
                if (diferencia <= 10) {
                    console.log("Vas biiienn, caliente.");
                } else {
                    console.log("NaH, pero re lejos, frioooo.");
                }
                preguntarNumero();
            }
        });
    }

    function jugarDeNuevo() {
        rl.question("¿Otro? (Y/N): ", (respuesta) => {
            if (respuesta.toUpperCase() === 'Y') {
                jugar();
            } else if (respuesta.toUpperCase() === 'N') {
                console.log("BUENAAAAAAAAAAAA");
                rl.close();
            } else {
                console.log("Tas pdj?");
                jugarDeNuevo();
            }
        });
    }

    preguntarNumero();
}

jugar();
