import {loadTemplate, replaceBody} from '/loadingFunctions.js';
import { loadTopRankingBody } from "/body/rankings/top_ranking/load.js";

document.addEventListener('DOMContentLoaded', async function() {
    await loadDiscoverBody();
});

export async function loadDiscoverBody() {
    let discoverPage = await loadTemplate('/body/rankings/discover/discover_page.html');
    await prepareLinks(discoverPage);
    replaceBody(discoverPage);
}
async function prepareLinks(discoverPage) {
    var categories = document.getElementsByClassName("discovery_category");
    for (let i = 0; i < categories.length; i++) {
        categories.item(i).addEventListener('click',
            async function () {
                await loadTopRankingBody();
            });
    }
}

