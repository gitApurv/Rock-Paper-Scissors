var comps ;

var yourScore =0 ;
var compScore =0 ;

var youselected ;
var compSelected ;

var result;

document.querySelector("input").addEventListener("keypress" , (event) => {
    if(event.key==="Enter")
    {
        setName();
    }
});

function setName(){

    var name = document.querySelector("input").value ;
    document.querySelector(".name").style.visibility = "hidden" ;
    document.querySelector(".you > h2").innerHTML = name ;
    document.querySelector(".yourName").innerHTML = name ;
    
}

var m = document.querySelector("#imgy");
var n =document.querySelector("#imgc");

function clicked(s){
    youselected = s ;
    compSelected = compSelect();
   
    if(youselected==="rock" && compSelected==="rock"){  
        result="Draw";
    } else if(youselected==="paper" && compSelected==="paper"){
        result="Draw";
    } else if(youselected==="scissor" && compSelected==="scissor"){
        result="Draw";
    } else if(youselected==="rock" && compSelected==="paper"){
        result="Lose";  
    } else if(youselected==="rock" && compSelected==="scissor"){
        result="Win";
    } else if(youselected==="paper" && compSelected==="rock"){
        result="Win";
    } else if(youselected==="paper" && compSelected==="scissor"){
        result="Lose";
    } else if(youselected==="scissor" && compSelected==="rock"){
        result="Lose";
    } else if(youselected==="scissor" && compSelected==="paper"){
        result="Win";
    }
   
    updateImages(youselected , compSelected);
    updateScore(result);
    display(result);

}


function updateImages(a, b){
   
    if(a==="rock"){
    m.setAttribute("src" , "./images/rock-you.png");
   }
   else if(a==="paper"){
    m.setAttribute("src" , "./images/paper-you.png");
   }
   else if(a==="scissor"){
    m.setAttribute("src" , "./images/scissors-you.png");
   }
   if(b==="rock"){
    n.setAttribute("src" , "./images/rock-comp.png");
   }
   else if(b==="paper"){
    n.setAttribute("src" , "./images/paper-comp.png");
   }
   else if(b==="scissor"){
    n.setAttribute("src" , "./images/scissors-comp.png");
   }

}

function compSelect(){

    var comp = Math.floor(Math.random()*3)+1;

    switch(comp){
        case 1:{
            comps = "rock";
            break;
        }
        case 2:{
            comps = "paper";
            break;
        }
        case 3:{
            comps = "scissor"
        }
    }

    return comps ;

}

function updateScore(s)
{

    if(s=="Win"){
        yourScore++;
    }
    else if(s=="Lose"){
        compScore++;
    }

    document.querySelector(".yourScore").innerHTML = yourScore;
    document.querySelector(".compScore").innerHTML = compScore;
    
}

function display(s)
{

    document.querySelector(".result").innerHTML = s ;
    document.querySelector(".result").style.visibility = "visible" ;

}