import { loadTemplate, replaceBody } from "/loadingFunctions.js";

export async function loadOpinionBody() {
    let opinion = await loadTemplate('./body/OpinionPage/OpinionPage.html');
    replaceBody(opinion);
}
/*
document.addEventListener("DOMContentLoaded",function(){
        var EditButton = document.getElementById('Button_Edit');
        if(EditButton){
            EditButton.addEventListener('click', function(){
                window.location.href='EditOpinionPage.html';
            });
        }
    });
*/