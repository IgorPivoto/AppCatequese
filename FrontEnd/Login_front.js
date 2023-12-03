function ValidarDados()
{
    const usuario = document.getElementById("Usuário").value;
    const email = document.getElementById("Email").value;
    const senha = document.getElementById("Senha").value;

    const mensagemErro = document.getElementById("mensagemErro");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    mensagemErro.textContent = '';
    mensagemSucesso.textContent = '';
    
    if (usuario.trim() === '') {
        mensagemErro.textContent = 'Por favor, preencha o campo de usuário.';
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
    mensagemSucesso.textContent = 'Dados validados com sucesso!';
    console.log(usuario);
    console.log(email);
    console.log(senha);
    setTimeout(function () {
        window.location.href = 'Menu.html';  // Substitua 'nova-pagina.html' pelo caminho da sua nova página
    }, 1000);  // Tempo em milissegundos (2 segundos neste exemplo)
}
function ValidarEmail(email) {
    // Expressão regular simples para verificar o formato do e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
