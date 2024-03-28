import { loadTop } from "./top/load.js";
import { loadTemplate, replaceBody } from "../../loadingFunctions.js";
import { loadWelcome } from "./welcome/load.js";

function loadCarousels() {
	document.querySelectorAll('.carousel').forEach(function(carousel) {
		var prevControl = carousel.querySelector('.carousel-control-prev');
		var nextControl = carousel.querySelector('.carousel-control-next');

		$('.carousel').carousel();
		prevControl.addEventListener('click', function() {
			$(carousel).carousel('prev');
		});

		nextControl.addEventListener('click', function() {
			$(carousel).carousel('next');
		});
	})
}

export async function loadHomeBody() {
    let homePage = await loadTemplate('/body/home/home.html');
    await loadWelcome(homePage);
    await loadTops(homePage);
    replaceBody(homePage);
	loadCarousels();
}

async function loadTops(homePage) {
    let topsSection = homePage.querySelector('#tops-section');
    let bestRatedTextContainer = homePage.querySelector('#best-rated-text-container');
    let bestRatedText = document.createElement('h1');
    bestRatedText.textContent = 'Best rated';
    bestRatedText.id = 'best-rated-text';
    bestRatedTextContainer.appendChild(bestRatedText);
    topsSection.appendChild(await loadTop('series'));
    topsSection.appendChild(await loadTop('musics'))
    topsSection.appendChild(await loadTop('movies'))
}
