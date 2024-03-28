import { loadTemplate, fetchJson } from "../../../loadingFunctions.js";
import { loadDetailBody } from "../../detail/load.js";

export async function loadTop(category) {
    let top = await loadTemplate('/body/home/top/top.html');
    top.querySelector('.top-title').textContent = 'Top ' + category;

    let topItems = await fetchJson(`/body/home/data/${category}.json`);
    for (let item of topItems) {
        await loadTopItem(item, top);
    }
	await loadTopCarousel(top, topItems);
    return top;
}

async function loadTopItem(item, topSection) {
    let topItem = await loadTemplate('/body/home/top/top-item.html')
    topItem.querySelector('.image').src = item.image;
    topItem.querySelector('.top-item-title').textContent = item.name;

    topItem.querySelector('.image').addEventListener('click', async function() {
        loadDetailBody();
    });
    topSection.querySelector('.horizontal-scroll-view').appendChild(topItem);
}

async function loadTopCarousel(top, topCarouselList) {
	for (const item of topCarouselList) {
		const index = topCarouselList.indexOf(item);
		let topCarouselItem = await loadTemplate('/body/home/top/top-carousel-item.html');
		topCarouselItem.querySelector('.carousel-item-text').textContent = item.name;
		if (index === 0) {
			topCarouselItem.querySelector('.carousel-item').classList.add('active');
		}
		topCarouselItem.querySelector('.image').addEventListener('click', async function() {
			loadDetailBody();
		});
		top.querySelector('.carousel-inner').appendChild(topCarouselItem);
	}
}
