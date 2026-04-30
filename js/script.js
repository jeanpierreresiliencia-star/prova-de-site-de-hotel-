function cadastroHospedesOk(event) {
    event.preventDefault();

    const campos = document.querySelectorAll("input, textarea");

    let camposVazios = [];

    campos.forEach((campo) => {
        if (campo.value.trim() === "") {
            camposVazios.push(campo);
        }
    });

    if (camposVazios.length > 0) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    alert("Cadastro realizado com sucesso!");

    window.location.href = "hospedes.html";
    window.location.reload(true);
}

function cadastroReservasOk(event) {
    event.preventDefault();

    const campos = document.querySelectorAll("input, textarea, select");

    let camposVazios = [];

    campos.forEach((campo) => {
        if (campo.value.trim() === "") {
            camposVazios.push(campo);
        }
    });

    if (camposVazios.length > 0) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    alert("Cadastro realizado com sucesso!");

    window.location.href = "reservas.html";
    window.location.reload(true);
}

document.addEventListener("DOMContentLoaded", function () {

    var rgElement = document.getElementById('rg');
    if (rgElement) {
        IMask(rgElement, { mask: '00000000-0' });
    }

    var cnpjElement = document.getElementById('cnpj');
    if (cnpjElement) {
        IMask(cnpjElement, { mask: '00.000.000/0000-00' });
    }

    var cpfElement = document.getElementById('cpf');
    if (cpfElement) {
        IMask(cpfElement, { mask: '000.000.000-00' });
    }

    var telefoneMask = IMask(document.getElementById('telefone'), {
        mask: [
            { mask: '(00) 0000-0000' },
            { mask: '(00) 00000-0000' }
        ]
    });

});