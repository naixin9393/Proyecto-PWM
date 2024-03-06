
    document.addEventListener("DOMContentLoaded", function(){
    
        var MisTopsButton = document.getElementById('Button_Discover');
        if(MisTopsButton){
            MisTopsButton.addEventListener('click', function(){
                window.location.href='../body/discover_page.html';
            });
        }
    
        var DiscoverButton = document.getElementById('Button_Mis_Tops');
        if(DiscoverButton){
            DiscoverButton.addEventListener('click', function(){
                window.location.href='../body/tops.html';
            });
        }

        var RankingsButton = document.getElementById('Button_Rankings');
        if(RankingsButton){
            RankingsButton.addEventListener('click', function(){
                window.location.href='../body/my_rankings_page.html';
            });
        }
         var LoginButton = document.getElementById('Button_Log_in');
        if(LoginButton){
            LoginButton.addEventListener('click', function(){
                window.location.href='../login/login.html';
            });
        }
    });
