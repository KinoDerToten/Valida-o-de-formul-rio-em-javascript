onload = () => {
    document.getElementById("registrar").onclick = validarRegistro;
}

const validarRegistro = () => {

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let login = document.getElementById("login").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmar_senha = document.getElementById("confirmar_senha").value;
    let telefone = document.getElementById("telefone").value;

    if (nome == "") {
        alert('Necessário preencher o campo nome');
        document.getElementById("nome").focus();
    } else if (sobrenome == "") {
        alert('Necessário preencher o campo sobrenome');
        document.getElementById("sobrenome").focus();
    } else if (login == "") {
        alert('Necessário preencher o campo login');
        document.getElementById("login").focus();
    } else if (email == "") {
        alert('Necessário preencher o campo email');
        document.getElementById("email").focus();
    } else if (senha == "") {
        alert('Necessário preencher o campo senha');
        document.getElementById("senha").focus();
    } else if (confirmar_senha == "") {
        alert('Necessário preencher o campo confirmar senha');
        document.getElementById("confirmar_senha").focus();
    } else if (telefone == "") {
        alert('Necessário preencher o campo telefone');
        document.getElementById("telefone").focus();
    } else {
        alert('Registro feito com sucesso!!!');
    }
}