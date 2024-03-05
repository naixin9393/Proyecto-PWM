import { loadTemplate} from '/loadingFunctions.js';

document.addEventListener('DOMContentLoaded', async function() {
    let footer = await loadTemplate('/footer/Footer.html');
    document.getElementById('footer').appendChild(footer);
});
