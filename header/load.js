import { loadTemplate } from '../loadingFunctions.js';
import { loadHomeBody } from '../body/home/load.js';
import { loadLoginBody } from '../body/login/load.js';
import { loadDiscoverBody } from '../body/rankings/discover/load.js';
import { loadMyRankingsBody } from '../body/rankings/my_rankings/load.js';

export async function loadHeader() {
        let header = await loadTemplate('/header/Header.html');
        document.getElementById('header').appendChild(header);
        loadButtonsActions();
    }

function loadButtonsActions() {
    document.getElementById('Button_Log_in').addEventListener('click', async function() {
        await loadLoginBody();
    });

    document.getElementById('Button_Mis_Tops').addEventListener('click', async function() {
        await loadHomeBody();
    });

    document.getElementById('Button_Discover').addEventListener('click', async function() {
        await loadDiscoverBody();
    });

    document.getElementById('Button_Rankings').addEventListener('click', async function() {
        await loadMyRankingsBody();
    });
}
