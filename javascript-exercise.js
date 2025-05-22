const divContainer=document.querySelector("#mainTextContent");

let isClicked = true;

let show = function(){
  if(isClicked){
    divContainer.style.display="flex";
    isClicked=false;}
    else{
    divContainer.style.display="flex";
    isClicked=true;
    }
}

