onload = () => {
    document.getElementById("Cadastrar").onclick = validarCadastro;
};

const validarCadastro = () => {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var login = document.getElementById("login").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmar_senha = document.getElementById("confirmar_senha").value;
    var telefone = document.getElementById("telefone").value;

    if (nome == "") {
        alert("Preencha o campo nome!!!");
    } else if (sobrenome == "") {
        alert("preencha o campo sobrenome!!!");
    } else if (login == "") {
        alert("preencha o campo login!!!")
    } else if (email ==  "") {
        alert("preencha o campo email!!!")
    } else if (senha == "") {
        alert("preencha o campo senha!!!")
    } else if (confirmar_senha == "") {
        alert("preencha o campo confirmar senha!!!")
    } else if (telefone == "") {
        alert("preencha o campo telefone!!!")
    } else {
        alert("Cadastro feito com sucesso!!!")
    }
        
};