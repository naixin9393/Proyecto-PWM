import {loadTemplate, replaceBody} from '/loadingFunctions.js';
document.addEventListener('DOMContentLoaded', async function() {
    await loadMyRankingsBody();
});

export async function loadMyRankingsBody() {
    let myRankingsPage = await loadTemplate('/body/rankings/my_rankings/my_rankings_page.html');
    replaceBody(myRankingsPage);
}
