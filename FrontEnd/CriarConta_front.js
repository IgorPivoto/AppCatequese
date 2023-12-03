function CriarConta() {
    const nome = document.getElementById("Nome").value;
    const email = document.getElementById("Email").value;
    const senha = document.getElementById("Senha").value;
    const confirmarSenha = document.getElementById("ConfirmarSenha").value;

    document.getElementById("mensagemSucesso").textContent = '';
    document.getElementById("mensagemErro").textContent = '';

    if (nome.trim() === '') {
        mensagemErro.textContent = 'Por favor, preencha o campo de Nome.';
        return;
    }
    if (email.trim() === '' || !ValidarEmail(email)) {
        mensagemErro.textContent = 'Por favor, insira um e-mail válido.';
        return;
    }

    if (senha.trim() === '' || senha.length < 8) {
        mensagemErro.textContent = 'A senha deve ter pelo menos 8 caracteres.';
        return;
    }

    if (senha !== confirmarSenha) {
        document.getElementById("mensagemErro").textContent = 'A senha e a confirmação de senha não correspondem.';
        return;
    }

    // Simular criação de conta (você deve implementar sua lógica de criação de conta aqui)

    document.getElementById("mensagemSucesso").textContent = 'Conta criada com sucesso! Faça login para continuar.';

    document.getElementById("Nome").value = '';
    document.getElementById("Email").value = '';
    document.getElementById("Senha").value = '';
    document.getElementById("ConfirmarSenha").value = '';
}
function ValidarEmail(email) {
    // Expressão regular simples para verificar o formato do e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
