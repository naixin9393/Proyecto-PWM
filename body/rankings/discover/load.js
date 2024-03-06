import {loadTemplate, replaceBody} from '/loadingFunctions.js';
document.addEventListener('DOMContentLoaded', async function() {
    await loadDiscoverBody();
});

export async function loadDiscoverBody() {
    let discoverPage = await loadTemplate('/body/rankings/discover/discover_page.html');
    replaceBody(discoverPage);
}
