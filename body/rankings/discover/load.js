import {fetchJson, loadTemplate, replaceBody} from '../../../loadingFunctions.js';
import { loadTopRankingBody } from '../top_ranking/load.js';


export async function loadDiscoverBody() {
    let discoverPage = await loadTemplate('/body/rankings/discover/discover-page.html');
    await replaceBody(discoverPage);
    await prepareButtons('/body/rankings/discover/discover-category-data.json');
    prepareLinks();
}

async function prepareButtons(url) {
    try {
        let entries = (await fetchJson(url)).titles;

        if (entries && entries.length > 0) {
            for (const e of entries) {
                let entryHtml = await fetch('/body/rankings/discover/discover-category.html');
                let contentHTML = await entryHtml.text();
                const newEntry = document.createRange().createContextualFragment(contentHTML);
                newEntry.querySelector('h1').innerHTML = e;
                document.querySelector(".row").appendChild(newEntry);
            }
        } else {
            document.querySelector(".row").innerHTML = 'There are no entries';
        }
    } catch (error) {
        console.error('Error al obtener datos:', error);
        document.querySelector(".row").innerHTML = 'Error';
    }
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

