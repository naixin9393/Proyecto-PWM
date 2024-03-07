import { loadTemplate } from '../loadingFunctions.js';

export async function loadFooter(){
    let footer = await loadTemplate('/footer/Footer.html');
    document.getElementById('footer').appendChild(footer);
}
