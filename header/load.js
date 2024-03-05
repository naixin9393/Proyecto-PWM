import { loadTemplate} from '/loadingFunctions.js';

document.addEventListener('DOMContentLoaded', async function() {
    let header = await loadTemplate('/header/Header.html');
    document.getElementById('header').appendChild(header);
});
