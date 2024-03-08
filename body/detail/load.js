import {loadTemplate, replaceBody} from '/loadingFunctions.js';

export async function loadDetailBody() {
    let page = await loadTemplate('/body/detail/detail.html');

    loadDetailContainer(page);
    //loadReviews

    replaceBody(page);
}

function loadDetailContainer(page) {
    let detailSection = page.querySelector('#detail');
    detailSection.querySelector('#detail-image').src = '/images/sample.jpg';

    loadButtonContainer(detailSection);
    loadInformationContainer(detailSection);
}

function loadButtonContainer(detailSection) {
    let buttonContainer = detailSection.querySelector('#detail-button-container');

    let score = document.createElement('label');
    score.textContent = 'Score: 5⭐';
    score.id = 'detail-score';

    let addButton = document.createElement('button');
    addButton.textContent = 'Add to my ranking';
    addButton.id = 'detail-add-button';

    buttonContainer.appendChild(score);
    buttonContainer.appendChild(addButton);
}

function loadInformationContainer(detailSection) {
    let summaryContainer = detailSection.querySelector('#detail-summary-container');
    loadSynopsis(summaryContainer);
    loadInformation(summaryContainer);
    loadAvailable(summaryContainer);
}

function loadSynopsis(summaryContainer) {
    let synopsis = summaryContainer.querySelector('#synopsis-container');

    let title = document.createElement('h2');
    title.textContent = 'Synopsis';

    let textArea = document.createElement('textarea');
    textArea.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    textArea.id = 'textarea-synopsis';
    textArea.readOnly = true;

    synopsis.appendChild(title);
    synopsis.appendChild(textArea);
}

function loadInformation(summaryContainer) {
    let information = summaryContainer.querySelector('#information-container');

    let title = document.createElement('h2');
    title.textContent = 'Information';

    let informationList = document.createElement('ul');
    let informationItems = ['Type: book', 'Author: author', 'Release date: date', 'Genre: genre'];
    for (let item of informationItems) {
        let listItem = document.createElement('li');
        listItem.textContent = item;
        informationList.appendChild(listItem);
    }

    information.appendChild(title);
    information.appendChild(informationList);
}

function loadAvailable(summaryContainer) {
    let available = summaryContainer.querySelector('#available-container');

    let title = document.createElement('h2');
    title.textContent = 'Available at';

    let availableList = document.createElement('ul');
    availableList.id = 'available-list';
    let availableItems = ['youtube.png', 'amazon.png', 'netflix.png', 'spotify.png'];
    for (let item of availableItems) {
        let listItem = document.createElement('li');
        let image = document.createElement('img');
        image.src = `/images/${item}`;
        image.className = 'available-image';

        listItem.appendChild(image);
        availableList.appendChild(listItem);
    }

    available.appendChild(title);
    available.appendChild(availableList);
}
