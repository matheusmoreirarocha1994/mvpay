function entrar() {
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de verificação de login (apenas para exemplo)
    if (username === '1' && password === '1') {
        alert('Login bem-sucedido!');
        // Redireciona para a tela principal
        window.location.href = '/mvpay/principal/index.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
})};


document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
