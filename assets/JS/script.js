pesos = document.getElementById('pesos');
monedas = document.getElementById('monedas');
buscar = document.getElementById('buscar');
mostrar = document.getElementById('mostrar');

async function mindicador() {
    try {
        const res = await fetch("https://mindicador.cl/api/");
        const data = await res.json();
        console.log(data);

        const dolar = `${data.dolar.valor}`;
    
        const euro = `${data.euro.valor}`;


        buscar.addEventListener('click', convertir);

        function convertir() {
            let notAString = Number(pesos.value);
            if (monedas.value === 'USD') {
                mostrar.innerHTML = `Resultado: $${(notAString / dolar).toFixed(2)}.`;
            } else if (monedas.value === 'EUR') {
                mostrar.innerHTML = `Resultado: €${(notAString / euro).toFixed(2)}.`;
            } else if (monedas.value === 'choice') {
                mostrar.innerHTML = 'Por favor, seleccione una moneda.';
            }

        }

    } catch (error) {
        console.log('Hubo un error: ', error);
        mostrar.innerHTML = 'Hubo un error en la carga de datos. Disculpe las molestias.';
    }
}


mindicador();

