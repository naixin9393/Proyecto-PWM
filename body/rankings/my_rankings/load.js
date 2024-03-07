import {loadTemplate, replaceBody} from '../../../loadingFunctions.js';

export async function loadMyRankingsBody() {
    let myRankingsPage = await loadTemplate('/body/rankings/my_rankings/my_rankings_page.html');
    replaceBody(myRankingsPage);
}
