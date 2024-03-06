document.addEventListener("DOMContentLoaded",function(){
        var EditButton = document.getElementById('Button_Edit');
        if(EditButton){
            EditButton.addEventListener('click', function(){
                window.location.href='EditOpinionPage.html';
            });
        }
    });
