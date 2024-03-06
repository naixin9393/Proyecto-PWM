
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
                /*opinion_text.value = edited_text.value;*/
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
                /*opinion_text.value = savedText;*/
            }
        }
    });
