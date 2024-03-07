import { loadTemplate, replaceBody } from '../../../loadingFunctions.js';

export async function loadTopRankingBody() {
    let topRankingPage = await loadTemplate('/body/rankings/top_ranking/top_ranking.html');
    replaceBody(topRankingPage);
}
