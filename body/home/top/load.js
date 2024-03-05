import { loadTemplate, fetchJson } from '/loadingFunctions.js';

export async function loadTop(category) {
    let top = await loadTemplate('/body/home/top/top.html');
    top.querySelector('.top-title').textContent = 'Top ' + category;

    let topItems = await fetchJson(`/body/home/data/${category}.json`);
    for (let item of topItems) {
        await loadTopItem(item, top);
    }
    return top;
}

async function loadTopItem(item, topSection) {
    let topItem = await loadTemplate('/body/home/top/top-item.html')
    topItem.querySelector('.image').src = item.image;
    topItem.querySelector('.top-item-title').textContent = item.name;
    topSection.querySelector('.horizontal-scroll-view').appendChild(topItem);
}
