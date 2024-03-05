import { loadTemplate } from '/loadingFunctions.js';
import { loadLoginBody } from "/body/login/load.js";
import { loadHomeBody } from "/body/home/load.js";

document.addEventListener('DOMContentLoaded', async function() {
        let header = await loadTemplate('/header/Header.html');
        document.getElementById('header').appendChild(header);
        loadButtonsActions();
    }
);

function loadButtonsActions() {
    document.getElementById('Button_Log_in').addEventListener('click', async function() {
        await loadLoginBody();
    });

    document.getElementById('Button_Mis_Tops').addEventListener('click', async function() {
        await loadHomeBody();
    });
}
