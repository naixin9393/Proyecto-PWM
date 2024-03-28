import { loadTemplate, replaceBody } from "/loadingFunctions.js";
import { loadSignUpBody } from "../sign-up/load.js";

export async function loadLoginBody() {
    let page = await loadTemplate('/body/login/login.html');

    await loadLoginQuestion(page);
    replaceBody(page);
}

function loadLoginQuestion(page) {
    let question = page.querySelector('.question-text');
    question.addEventListener('click', async function() {
		loadSignUpBody();
    });
}
