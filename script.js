document.getElementById('openPopupBtn').addEventListener('click', function() {
    var popup = window.open('popup.html', 'janela', 'width=400, height=500, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no');

    popup.onload = function() {
        popup.document.getElementById('calculateBtn').addEventListener('click', function() {
            var nota1 = parseFloat(popup.document.getElementById('nota1').value);
            var nota2 = parseFloat(popup.document.getElementById('nota2').value);
            var nota3 = parseFloat(popup.document.getElementById('nota3').value);

            var soma = nota1 + nota2 + nota3;
            var media = soma / 3;

            window.opener.document.getElementById('result').innerHTML = `
                <p>Soma das Notas: ${soma}</p>
                <p>Média das Notas: ${media.toFixed(2)}</p>
            `;

            popup.close();
        });
    };
});
