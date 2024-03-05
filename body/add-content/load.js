import {loadTemplate, replaceBody, fetchJson} from '/loadingFunctions.js';

loadLoginBody();

export async function loadLoginBody() {
    let page = await loadTemplate('/body/add-content/add-content.html');
    loadTitle(page, 'Add Book/Movie/Series');
    page.querySelector('.landscape-image').src = '/images/sample.jpg';
    let form = await loadForm();
    page.querySelector('.add-content-form').appendChild(form);
    replaceBody(page);
}

async function loadForm() {
    let form = await loadTemplate('/body/add-content/form.html');
    await loadComboBox(form, 'content');
    await loadComboBox(form, 'author');
    loadReviewField(form);
    await loadComboBox(form, 'score');
    loadButtonContainer(form);
    return form;
}

function loadTitle(page, text) {
    let title = page.querySelector('.add-content-title');
    title.textContent = text;
}

async function loadComboBox(form, data) {
    let items = await fetchJson(`/body/add-content/data/${data}.json`);
    let comboBoxTemplate = await loadTemplate('/body/add-content/combo-box/combo-box.html');
    let comboBox = comboBoxTemplate.querySelector('.combo-box');
    for (let item of items) {
        let option = document.createElement('option');
        option.value = item.name;
        option.textContent = item.name;
        comboBox.appendChild(option);
    }
    form.querySelector('.input-container').appendChild(comboBox);
}

function loadReviewField(form) {
    let review = document.createElement('textarea');
    review.placeholder = 'Write a review';
    review.id = 'add-content-review-textarea';
    form.querySelector('.input-container').appendChild(review);
}

function loadButtonContainer(form) {
    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    let cancelButton = document.createElement('button');
    cancelButton.id = 'add-content-cancel-button';
    cancelButton.textContent = 'Cancel';

    let addToRankingButton = document.createElement('button');
    addToRankingButton.id = 'add-content-add-to-ranking-button';
    addToRankingButton.textContent = 'Add to your ranking';

    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(addToRankingButton);
    form.querySelector('.button-container').appendChild(buttonContainer);
}
