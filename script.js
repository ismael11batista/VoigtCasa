document.addEventListener("DOMContentLoaded", function () {
    // Exemplo de código JavaScript para adicionar interatividade, se necessário.
    console.log("Página carregada com sucesso!");

    // Selecionando os botões pelo ID
    const calendarBtn = document.getElementById('calendarBtn');
    const notesBtn = document.getElementById('notesBtn');
    const textFormatterBtn = document.getElementById('textFormatterBtn');
    const CustoGoogleAdsBtn = document.getElementById('CustoGoogleAdsBtn');
    const TextosPadraoBtn = document.getElementById('TextosPadraoBtn');


    // Adicionando eventos de clique que redirecionam para as páginas correspondentes
    calendarBtn.addEventListener('click', function () {
        window.location.href = 'calendar/calendario.html';
    });

    notesBtn.addEventListener('click', function () {
        window.location.href = 'notes/notes.html';
    });

    textFormatterBtn.addEventListener('click', function () {
        window.location.href = 'formatador/formatador.html';
    });

    CustoGoogleAdsBtn.addEventListener('click', function () {
        window.location.href = 'googleads/googleads.html';
    });

    TextosPadraoBtn.addEventListener('click', function () {
        window.location.href = 'textospadrao/standard.html';
    });

    LinkedinBtn.addEventListener('click', function () {
        window.location.href = 'linkedin/index.html';
    });

    OutboundBtn.addEventListener('click', function () {
        window.location.href = 'outboundtext/index.html';
    });
});