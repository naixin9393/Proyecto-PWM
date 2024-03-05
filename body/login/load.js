import {loadTemplate, replaceBody} from '/loadingFunctions.js';

export async function loadLoginBody() {
    let page = await loadTemplate('/body/login/login.html');
    page.querySelector('.landscape-image').src = '/images/sample.jpg';
    let form = await loadLoginForm();
    page.querySelector('.login-form').appendChild(form);
    replaceBody(page);
}

async function loadLoginForm() {
    let loginForm = await loadTemplate('/body/login/form.html');
    loadTitle(loginForm, 'Login');
    loadButton(loginForm, 'Login');
    await loadUsernameTextField(loginForm);
    await loadPasswordTextField(loginForm, 'Password');
    return loginForm;
}

async function loadRegisterForm() {
    let registerForm = await loadTemplate('/body/login/form.html');
    loadTitle(registerForm, 'Register');
    loadButton(registerForm, 'Register');
    await loadUsernameTextField(registerForm);
    await loadPasswordTextField(registerForm, 'Password');
    await loadPasswordTextField(registerForm, 'Confirm password');
    return registerForm;
}

function loadTitle(loginForm, text) {
    let title = loginForm.querySelector('.login-title');
    title.textContent = text;
}

async function loadUsernameTextField(loginForm) {
    let input = await loadTemplate('/body/login/input/input.html');
    input.querySelector('.text-field').placeholder = 'Username';
    input.querySelector('.text-field-icon').src = '/images/username.png';
    loginForm.querySelector('.input-container').appendChild(input);
}

async function loadPasswordTextField(loginForm, text) {
    let input = await loadTemplate('/body/login/input/input.html');
    input.querySelector('.text-field').placeholder = text;
    input.querySelector('.text-field').type = 'password';
    input.querySelector('.text-field-icon').src = '/images/password.png';
    loginForm.querySelector('.input-container').appendChild(input);
}

function loadButton(loginForm, text) {
    let loginButton = document.createElement('button');
    loginButton.textContent = text;
    loginForm.appendChild(loginButton);
}
