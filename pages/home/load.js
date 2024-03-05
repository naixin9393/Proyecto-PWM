import { loadTop } from '/pages/home/top/load.js';
import { loadTemplate} from '/loadingFunctions.js';

document.addEventListener('DOMContentLoaded', async function() {
    let homePage = await loadTemplate('/pages/home/home.html');
    await loadTops(homePage);
    document.getElementById('app').appendChild(homePage);
});

async function loadTops(homePage) {
    let topsSection = homePage.querySelector('#tops-section');
    topsSection.appendChild(await loadTop('series'));
    topsSection.appendChild(await loadTop('musics'))
}
