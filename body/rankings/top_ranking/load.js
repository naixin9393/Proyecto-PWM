import {fetchJson, loadTemplate, replaceBody} from '../../../loadingFunctions.js';



export async function loadTopRankingBody(topName) {
    let topRankingPage = await loadTemplate('/body/rankings/top_ranking/top_ranking.html');
    await replaceBody(topRankingPage);
    document.getElementById('top_name').innerText = topName;
    addTopEntries(getJson(topName))
}
async function addTopEntries(url) {
    try {
        let entries = await fetchJson(url);

        if (entries && entries.length > 0) {
            for (const e of entries) {
                let entryHtml = await fetch('/body/rankings/top_ranking/top_entry.html');
                let contentHTML = await entryHtml.text();
                const newEntry = document.createRange().createContextualFragment(contentHTML);
                newEntry.querySelector('.entry_name').innerHTML = e.name;
                newEntry.querySelector('.entry_author').innerHTML = e.author;
                newEntry.querySelector('.points').innerHTML = e.value;
                document.querySelector(".scroller").appendChild(newEntry);
            }
        } else {
            document.querySelector(".scroller").innerHTML = 'There are no entries';
        }
    } catch (error) {
        console.error('Error al obtener datos:', error);
        document.querySelector(".scroller").innerHTML = 'Error';
    }
}

function getJson(topName) {
    if (topName.toLowerCase().includes('books')) return '/body/rankings/data/books.json';
    if (topName.toLowerCase().includes('songs')) return '/body/rankings/data/songs.json';
    if (topName.toLowerCase().includes('films')) return '/body/rankings/data/films.json';
}