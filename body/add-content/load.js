import { loadTemplate, replaceBody } from "../../loadingFunctions.js";
import { loadDetailBody } from "../detail/load.js";

export async function loadAddContentBody() {
    let page = await loadTemplate('/body/add-content/add-content.html');
    let form = await loadForm();
    page.querySelector('.add-content-form').appendChild(form);
    replaceBody(page);
}

async function loadForm() {
    let form = await loadTemplate('/body/add-content/form.html');
    loadButtonAction(form);
    loadComboBox(form);
    return form;
}

function loadComboBox(form) {
    let select = form.querySelector('#add-content-score-select');
    for (let i = 1; i < 6; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i + " ⭐";
        select.appendChild(option);
    }
}

function loadButtonAction(form) {
    let cancelButton = form.querySelector('#add-content-cancel-button');
    cancelButton.addEventListener('click', function() {
        loadDetailBody();
    });
}
