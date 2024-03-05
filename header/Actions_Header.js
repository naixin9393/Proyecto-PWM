document.addEventListener("DOMContentLoaded", function(){
    var DiscoverButton = document.getElementById('Button_Discover');
    DiscoverButton.addEventListener('click', function(){
        window.location.assign('discover_page.html');
    })

    var RankingsButton = document.getElementById('Button_Rankings');
    RankingsButton.addEventListener('click', function(){
        window.location.href='/header/Prueba_Header.html';
    })
})



