import { loadTop } from '/body/home/top/load.js';
import {loadTemplate, replaceBody} from '/loadingFunctions.js';


document.addEventListener('DOMContentLoaded', async function() {
    await loadHomeBody();
});

export async function loadHomeBody() {
    let homePage = await loadTemplate('/body/home/home.html');
    await loadTops(homePage);
    replaceBody(homePage);
}

async function loadTops(homePage) {
    let topsSection = homePage.querySelector('#tops-section');
    topsSection.appendChild(await loadTop('series'));
    topsSection.appendChild(await loadTop('musics'))
    topsSection.appendChild(await loadTop('movies'))
}
