function ajustarValor(valor) {
    valor = valor.replace("R$ ", "").replace(".", "").replace(",", ".");
    return parseFloat(valor) || 0; // Retorna 0 se o valor não for um número
}

function calcularTotais() {
    const BRSoftware = ajustarValor(document.getElementById('BRSoftware').value);
    const BRComplementares = ajustarValor(document.getElementById('BRComplementares').value);
    const BRPMax = ajustarValor(document.getElementById('BRPMax').value);
    const BRTelefone = ajustarValor(document.getElementById('BRTelefone').value);
    const BRRS = ajustarValor(document.getElementById('BRRS').value);
    const BRHuntingOutsourcing = ajustarValor(document.getElementById('BRHuntingOutsourcing').value);
    const BRAlcance = ajustarValor(document.getElementById('BRAlcance').value);
    const BRVideoDezembro = ajustarValor(document.getElementById('BRVideoDezembro').value);

    // Calcula os totais
    const BRDisplay = BRAlcance + BRVideoDezembro;
    const BR_Fábrica = BRSoftware + BRComplementares + BRPMax + BRTelefone;
    const BR_RS = BRHuntingOutsourcing + BRRS;

    // Exibindo os resultados
    document.getElementById('resultados').innerHTML = `
        <p>Total [BR] Fábrica: R$ ${BR_Fábrica.toFixed(2)}</p>
        <p>Total [BR] Hunting e Outsourcing: R$ ${BR_RS.toFixed(2)}</p>
        <p>Total [BR] Display: R$ ${BRDisplay.toFixed(2)}</p>
    `;
}