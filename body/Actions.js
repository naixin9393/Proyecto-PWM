
    document.addEventListener("DOMContentLoaded", function(){
        document.addEventListener("DOMContentLoaded", function(){
            var savedText = localStorage.getItem("savedText");
            var savedSelection= localStorage.getItem("savedSelection");
            
            var savedopinionarea= document.getElementById("Opinion_Text_Area");
            if(savedopinionarea){
                savedopinionarea.value = savedText;
            }
        });

        var MisTopsButton = document.getElementById('Button_Discover');
        if(MisTopsButton){
            MisTopsButton.addEventListener('click', function(){
                window.location.href='discover_page.html';
            });
        }
    
        var DiscoverButton = document.getElementById('Button_Mis_Tops');
        if(DiscoverButton){
            DiscoverButton.addEventListener('click', function(){
                window.location.href='tops.html';
            });
        }

        var RankingsButton = document.getElementById('Button_Rankings');
        if(RankingsButton){
            RankingsButton.addEventListener('click', function(){
                window.location.href='my_rankings_page.html';
            });
        }
        
        var LoginButton = document.getElementById('Button_Log_in');
        if(LoginButton){
            LoginButton.addEventListener('click', function(){
                window.location.href='prueba.html';
            });
        }
    });
    
    document.addEventListener("DOMContentLoaded",function(){
        var EditButton = document.getElementById('Button_Edit');
        if(EditButton){
            EditButton.addEventListener('click', function(){
                window.location.href='EditOpinionPage.html';
            });
        }
    });
    
    document.addEventListener("DOMContentLoaded", function(){
        var DoneButton = document.getElementById('Button_Done');
        if(DoneButton){
            DoneButton.addEventListener('click', function(){
                safeText();
                window.location.href="OpinionPage.html"
            });
        }

        function safeText(){
            var edited_text = document.getElementById("Edit_Opinion_Text_Area");
            var opinion_text= document.getElementById("Opinion_Text_Area");
            if(edited_text && opinion_text){
                opinion_text.value = edited_text.value;
            }
            /* var safe_selection = document.getElementById("Select_Button").value*/
            if(opinion_text){
                localStorage.setItem("savedText", opinion_text.value);
                alert("Text saved successfully")
            }
            
            /*localStorage.setITem("savedSelection", Select_Button);*/
            
        }
        
        //Show saved text 
        var savedText = localStorage.getItem("savedText");
        if(savedText){
            var opinion_text = document.getElementById("Opinion_Text_Area");
            if(opinion_text){
                /* opinion_text.value = savedText;*/
            }
        }
    });







