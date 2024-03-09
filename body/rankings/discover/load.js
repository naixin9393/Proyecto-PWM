import { loadTemplate, replaceBody } from '../../../loadingFunctions.js';
import { loadTopRankingBody } from '../top_ranking/load.js';

export async function loadDiscoverBody() {
    let discoverPage = await loadTemplate('/body/rankings/discover/discover_page.html');
    await replaceBody(discoverPage);
    prepareLinks();
}
function prepareLinks() {
    var categories = document.getElementsByClassName("discovery_category");
    for (let i = 0; i < categories.length; i++) {
        categories.item(i).addEventListener('click',
            async function () {
                await loadTopRankingBody(categories.item(i).querySelector('h1').innerText);
            });
    }
}

