const calculate = document.getElementById('calcular');

function calcularValor() {
    const name = document.getElementById('name').value;
    const N = document.getElementById('N').value;
    const J = document.getElementById('J').value;
    const M = document.getElementById('M').value;
    const R = document.getElementById('resultado');
    const juros = J / 100;
    if (name !== '' && N !== '' && J !== '' && M !== '') {

        const valorFuturo = (N * ((1 + juros) ** M - 1) / juros).toFixed(2);

        R.textContent = `Olá, ${name}!, se voce aplicar R$${N}, a taxa de juros de ${J}% ao mes,
                                durante ${M} meses, acumulara uma poupanca de R$${valorFuturo}`;


    } else {
        result.textContent =


        R.textContent = '';
    }
}

calculate.addEventListener('click', calcularValor);