import {loadTemplate, replaceBody} from '../../../loadingFunctions.js';
import { loadTopRankingBody } from "/body/rankings/top_ranking/load.js";


export async function loadMyRankingsBody() {
    let myRankingsPage = await loadTemplate('/body/rankings/my_rankings/my_rankings_page.html');
    await replaceBody(myRankingsPage);
    prepareLinks();
}
function prepareLinks(){
    var categories = document.getElementsByClassName("your_tops_category");
    for (let i = 0; i < categories.length; i++) {
        categories.item(i).addEventListener('click',
            async function () {
                await loadTopRankingBody();
            });
    }
}

