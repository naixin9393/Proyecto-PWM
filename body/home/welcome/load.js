import { loadTemplate } from '../../../loadingFunctions.js';
import { loadLoginBody } from '../../login/load.js';

export async function loadWelcome(homePage) {
    let welcome = await loadTemplate('/body/home/welcome/welcome.html');
    welcome.querySelector('#home-welcome-button').addEventListener('click', async function() {
        await loadLoginBody();
    });

    homePage.querySelector('#home-welcome-section').appendChild(welcome);
}