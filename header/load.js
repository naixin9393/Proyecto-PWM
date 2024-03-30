import { loadTemplate } from "../loadingFunctions.js";
import { loadHomeBody } from "../body/home/load.js";
import { loadLoginBody } from "../body/login/load.js";
import { loadDiscoverBody } from "../body/rankings/discover/load.js";
import { loadMyRankingsBody } from "../body/rankings/my_rankings/load.js";
import { loadProfileBody } from "../body/Profile/load.js";
import { loadOpinionBody } from "../body/opinionPage/load.js";

export async function loadHeader() {
        let header = await loadTemplate('/header/Header.html');
        document.getElementById('header').appendChild(header);
        document.querySelector('.dropdown-menu').style.display = 'none';
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

    document.getElementById('Button_Profile').addEventListener('click', async function() {
        await loadProfileBody();
    });

    document.getElementById('Button_Opinion').addEventListener('click', async function() {
        await loadOpinionBody();
    });

    loadMenuToggle();
    loadSmallButtonsActions();
}

function loadSmallButtonsActions(){
    document.getElementById('login_small_button').addEventListener('click', async function() {
        await loadLoginBody();
    });

    document.getElementById('mistops_small_button').addEventListener('click', async function() {
        await loadHomeBody();
    });

    document.getElementById('discover_small_button').addEventListener('click', async function() {
        await loadDiscoverBody();
    });

    document.getElementById('ranking_small_button').addEventListener('click', async function() {
        await loadMyRankingsBody();
    });

    document.getElementById('profile_small_button').addEventListener('click', async function() {
        await loadProfileBody();
    });

    document.getElementById('opinion_small_button').addEventListener('click', async function() {
        await loadOpinionBody();
    });
}

function loadMenuToggle(){
    document.querySelector('#menu-button').addEventListener('click', async function() {
        let dropdown_menu= document.querySelector(".dropdown-menu")
           if(dropdown_menu.style.display === 'none'){
               dropdown_menu.style.display = 'block';
           }else{
               dropdown_menu.style.display = 'none';
           }
    });
}
