function charge_entries() {
    var entries = document.getElementsByClassName("scroller");
    for (let i = 0; i < entries.length; i++) {
        entries.item(i).innerHTML =
            "<img src=\"/sample.jpg\" class=\"imagen\">\n" +
            "<div class=\"entry_descriptor\">\n" +
            "    <h1>Cancion {i}</h1>\n" +
            "    <h2>Autor {i}</h2>\n" +
            "</div>\n" +
            "<p class=\"points\">5/10</p>";
    }
}

