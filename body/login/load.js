import { loadTemplate } from '/loadingFunctions.js';

document.addEventListener('DOMContentLoaded', async function() {
    let loginPage = await loadTemplate('/body/login/login.html');
    loginPage.querySelector('.landscape-image').src = '/images/sample.jpg';
    let loginForm = await loadLoginForm();
    loginPage.querySelector('.login-form').appendChild(loginForm);
    document.getElementById('app').appendChild(loginPage);
});

async function loadLoginForm() {
    let loginForm = await loadTemplate('/body/login/login-form.html');
    loadTitle(loginForm);
    loadLoginButton(loginForm);
    await loadUsernameTextField(loginForm);
    await loadPasswordTextField(loginForm);
    return loginForm;
}

function loadTitle(loginForm) {
    let title = loginForm.querySelector('.login-title');
    title.textContent = 'Login';
}

async function loadUsernameTextField(loginForm) {
    let input = await loadTemplate('/body/login/input/input.html');
    input.querySelector('.text-field').placeholder = 'Username';
    input.querySelector('.text-field-icon').src = '/images/username.png';
    loginForm.querySelector('.input-container').appendChild(input);
}

async function loadPasswordTextField(loginForm) {
    let input = await loadTemplate('/body/login/input/input.html');
    input.querySelector('.text-field').placeholder = 'Password';
    input.querySelector('.text-field').type = 'password';
    input.querySelector('.text-field-icon').src = '/images/password.png';
    loginForm.querySelector('.input-container').appendChild(input);
}

function loadLoginButton(loginForm) {
    let loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    loginForm.appendChild(loginButton);
}
