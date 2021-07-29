onload = () => {
    document.getElementById('registrar').onclick = () => {
        var nome = document.getElementById('nome').value;
        var sobrenome = document.getElementById('sobrenome').value;
        var login = document.getElementById('login').value;
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;
        var confirmar_senha = document.getElementById('confirmar_senha').value;
        var telefone = document.getElementById('telefone').value;

        if (nome == "") {
            alert("Nome não informado")

            nome.focus();
            return;
        }

        if (sobrenome == "") {
            alert("Nome não informado")

            sobrenome.focus();
            return;
        }

        if (login == "") {
            alert("Nome não informado")

            login.focus();
            return;
        }

        if (email == "") {
            alert("Nome não informado")

            email.focus();
            return;
        }

        if (senha == "") {
            alert("Nome não informado")

            senha.focus();
            return;
        }

        if (confirmar_senha == "") {
            alert("Nome não informado")

            confimar_senha.focus();
            return;
        }

        if (telefone == "") {
            alert("Nome não informado")

            telefone.focus();
            return;
        }

        alert("Registro feito com sucesso!!!");
    };
}