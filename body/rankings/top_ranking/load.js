import {loadTemplate, replaceBody} from '/loadingFunctions.js';
document.addEventListener('DOMContentLoaded', async function() {
    await loadTopRankingBody();
});

export async function loadTopRankingBody() {
    let topRankingPage = await loadTemplate('/body/rankings/top_ranking/top_ranking.html');
    replaceBody(topRankingPage);
}
