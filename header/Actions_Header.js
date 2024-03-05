document.addEventListener("DOMContentLoaded", function(){
    
    var MisTopsButton = document.getElementById('Button_Mis_Tops');
    MisTopsButton.addEventListener('click', function(){
        window.location.assign('my_tops_page.html');
    })

    var DiscoverButton = document.getElementById('Button_Discover');
    DiscoverButton.addEventListener('click', function(){
        window.location.assign('discover_page.html');
    })

    var RankingsButton = document.getElementById('Button_Rankings');
    RankingsButton.addEventListener('click', function(){
        window.location.href='/header/Prueba_Header.html';
    })

    var LoginButton = document.getElementById('Button_Log_in');
    LoginButton.addEventListener('click', function(){
        window.location.href='/header/Prueba_Header.html';
    });

})



