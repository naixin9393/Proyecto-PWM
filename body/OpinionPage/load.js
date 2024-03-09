import { loadTemplate, replaceBody } from "/loadingFunctions.js";
import {loadEditOpinionBody} from "../EditOpinion/Actions.js";

export async function loadOpinionBody() {
    let opinion = await loadTemplate('./body/OpinionPage/OpinionPage.html');

    let EditButton  = opinion.querySelector('#Button_Edit');
    EditButton.addEventListener('click', function () {
        loadEditOpinionBody();
    })
    replaceBody(opinion);
}
/*
document.addEventListener("DOMContentLoaded",function(){
        var EditButton = document.getElementById('Button_Edit');
        if(EditButton){
            EditButton.addEventListener('click', function(){
                window.location.href='/body/EditOpinion/EditOpinionPage.html';
            });
        }
    });
*/