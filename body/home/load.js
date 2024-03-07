import { loadTop } from './top/load.js';
import {loadTemplate, replaceBody} from '../../loadingFunctions.js';
import {loadWelcome} from './welcome/load.js';

document.addEventListener('DOMContentLoaded', async function() {
    await loadHomeBody();
});

export async function loadHomeBody() {
    let homePage = await loadTemplate('/body/home/home.html');
    await loadWelcome(homePage);
    await loadTops(homePage);
    replaceBody(homePage);
}

async function loadTops(homePage) {
    let topsSection = homePage.querySelector('#tops-section');
    let bestRatedTextContainer = homePage.querySelector('#best-rated-text-container');
    let bestRatedText = document.createElement('p');
    bestRatedText.textContent = 'Best rated';
    bestRatedText.id = 'best-rated-text';
    bestRatedTextContainer.appendChild(bestRatedText);
    topsSection.appendChild(await loadTop('series'));
    topsSection.appendChild(await loadTop('musics'))
    topsSection.appendChild(await loadTop('movies'))
}
