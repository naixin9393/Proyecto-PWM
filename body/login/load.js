import {loadTemplate, replaceBody} from '/loadingFunctions.js';

export async function loadLoginBody() {
    let page = await loadTemplate('/body/login/login.html');
    page.querySelector('.landscape-image').src = '/images/sample.jpg';

    let formContainer = page.querySelector('.form-container');
    await loadLoginForm(formContainer);
    replaceBody(page);
}

async function loadLoginForm(formContainer) {
    let loginForm = await loadTemplate('/body/login/form.html');
    loadTitle(loginForm, 'Login');
    loadButton(loginForm, 'Login');

    let question = loginForm.querySelector('.question-text');
    question.textContent = 'Don\'t have an account?';
    question.addEventListener('click', async function() {
        await loadRegisterForm(formContainer);
    });
    await loadUsernameTextField(loginForm);
    await loadPasswordTextField(loginForm, 'Password');

    if (formContainer.firstChild !== null) {
        formContainer.replaceChild(loginForm, formContainer.firstChild);
    } else {
        formContainer.appendChild(loginForm);
    }

}

async function loadRegisterForm(formContainer) {
    let registerForm = await loadTemplate('/body/login/form.html');
    loadTitle(registerForm, 'Register');
    loadButton(registerForm, 'Register');

    let question = registerForm.querySelector('.question-text');
    question.textContent = 'Already have an account?';

    question.addEventListener('click', async function() {
        await loadLoginForm(formContainer);
    });

    await loadUsernameTextField(registerForm);
    await loadPasswordTextField(registerForm, 'Password');
    await loadPasswordTextField(registerForm, 'Confirm password');

    if (formContainer.firstChild !== null) {
        formContainer.replaceChild(registerForm, formContainer.firstChild);
    } else {
        formContainer.appendChild(registerForm);
    }
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
    let button = document.createElement('button');
    button.className = 'form-button';
    button.textContent = text;
    loginForm.querySelector('.button-container').appendChild(button);
}
