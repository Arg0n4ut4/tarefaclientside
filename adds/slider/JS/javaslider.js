let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 6000);

function nextImage() {
    // Verifica qual radio está checked no momento
    for (let i = 1; i <= 4; i++) {
        if (document.getElementById("radio" + i).checked) {
            count = i;
            break;
        }
    }

    // Incrementa o contador para a próxima imagem
    count++;
    if (count > 4) {
        count = 1; // Volta para a primeira imagem se passar da última
    }

    // Define o próximo radio como checked
    document.getElementById("radio" + count).checked = true;
}
