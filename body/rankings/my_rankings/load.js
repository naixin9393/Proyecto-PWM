import {fetchJson, loadTemplate, replaceBody} from '../../../loadingFunctions.js';
import { loadTopRankingBody } from "/body/rankings/top_ranking/load.js";


export async function loadMyRankingsBody() {
    let myRankingsPage = await loadTemplate('/body/rankings/my_rankings/my_rankings_page.html');
    await replaceBody(myRankingsPage);
    await prepareYourTopsCategories('/body/rankings/my_rankings/my_rankings_category_data.json');
    prepareLinks();
}
function prepareLinks(){
    var categories = document.getElementsByClassName("your_tops_category");
    for (let i = 0; i < categories.length; i++) {
        categories.item(i).addEventListener('click',
            async function () {
                await loadTopRankingBody(categories.item(i).querySelector('h1').innerText);
            });
    }
}

async function prepareYourTopsCategories(url) {
    try {
        let entries = (await fetchJson(url)).titles;

        if (entries && entries.length > 0) {
            for (const e of entries) {
                let entryHtml = await fetch('/body/rankings/my_rankings/my_rankings_category.html');
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

