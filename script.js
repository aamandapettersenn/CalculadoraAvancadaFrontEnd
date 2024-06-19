function calcular() {
    var homens = parseInt(document.getElementById('homens').value) || 0;
    var mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    var criancas = parseInt(document.getElementById('criancas').value) || 0;

    var carneBovina = homens * 0.5 + mulheres * 0.3 + criancas * 0.2; // Em quilogramas
    var frango = homens * 0.2 + mulheres * 0.2 + criancas * 0.1; // Em quilogramas
    var linguica = homens * 0.2 + mulheres * 0.2 + criancas * 0.2; // Em quilogramas
    var refrigerante = homens * 0.3 + mulheres * 0.4 + criancas * 0.2; // Em litros (devido a erro de cálculo)
    var cerveja = homens * 0.8 + mulheres * 0.5; // Em litros (devido a erro de cálculo)

    document.getElementById('resultado').innerHTML = `
        <p>Quantidade de itens a serem comprados:</p>
        <ul>
            <li>${carneBovina.toFixed(1)}kg de carne bovina</li>
            <li>${frango.toFixed(1)}kg de frango</li>
            <li>${linguica.toFixed(1)}kg de linguiça</li>
            <li>${refrigerante.toFixed(1)}l de refrigerante</li>
            <li>${cerveja.toFixed(1)}l de cerveja</li>
        </ul>
    `;
}