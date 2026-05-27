//display
let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let num3=document.getElementById("num3");
//numbers
let dote=document.getElementById("dote");
let zero=document.getElementById("zero");
let one=document.getElementById("one");
let tow=document.getElementById("tow");
let three=document.getElementById("three");
let four=document.getElementById("four");
let fife=document.getElementById("fife");
let sex=document.getElementById("sex");
let seven=document.getElementById("seven");
let eight=document.getElementById("eight");
let nine=document.getElementById("nine");
//+-/*
let plus=document.getElementById("plus");
let maynas=document.getElementById("maynas");   
let darb=document.getElementById("multebcation");
let obelus=document.getElementById("obelus");
let root =document.getElementById("root");
let percent=document.getElementById("percent");
let equal=document.getElementById("equal");
let clear=document.getElementById("clear");
let delate=document.getElementById("delate");

//functions of numbers
dote.onclick=function(){
    num1.innerHTML+=".";
}


zero.onclick=function(){
    
    num1.innerHTML+=0
}


one.onclick=function(){
    
    num1.innerHTML+=1
}

tow.onclick=function(){
    
    num1.innerHTML+=2
}


three.onclick=function(){
    
    num1.innerHTML+=3
}


four.onclick=function(){
    
    num1.innerHTML+=4
}

fife.onclick=function(){
    
    num1.innerHTML+=5
}

sex.onclick=function(){
    
    num1.innerHTML+=6
}

seven.onclick=function(){
    
    num1.innerHTML+=7
}

eight.onclick=function(){
    
    num1.innerHTML+=8
}

nine.onclick=function(){
    
    num1.innerHTML+=9
}

//functions of+-/**

clear.onclick = function(){
    
    num1.innerHTML="";
    num2.innerHTML="";
    num3.innerHTML="";
    
}
delate.onclick = function(){
    if(num1.innerHTML!=""){
  num1.innerHTML = num1.innerHTML.slice(0, -1);
    }
    else if(num1.innerHTML==""&&num2.innerHTML!=""&&num3.innerHTML!=""){
        num2.innerHTML=""
        num1.innerHTML=num3.innerHTML
        num3.innerHTML=""
    }
}

root.onclick = function(){
    if(num1.innerHTML!=""&&num2.innerHTML==""&&num3.innerHTML==""){
  num1.innerHTML = Math.sqrt(eval(num1.innerHTML));
}

}
plus.onclick=function(){
    if(num1.innerHTML!=""&&num2.innerHTML==""&&num3.innerHTML==""){
    num3.innerHTML=num1.innerHTML;
    num1.innerHTML="";
    num2.innerHTML="+"
    }
    
else if(num1.innerHTML!=""&&num2.innerHTML!=""&&num3.innerHTML!=""){
        calc2();
        num2.innerHTML="+"
}
    }



maynas.onclick=function(){
    if(num1.innerHTML!=""&&num2.innerHTML==""&&num3.innerHTML==""){
    num3.innerHTML=num1.innerHTML;
    num1.innerHTML="";
    num2.innerHTML="-"
    }
    else if(num1.innerHTML!=""&&num2.innerHTML!=""&&num3.innerHTML!=""){
        calc2();
        num2.innerHTML="-"
        
    }
    
}




darb.onclick=function(){
    if(num1.innerHTML!=""&&num2.innerHTML==""&&num3.innerHTML==""){
    num3.innerHTML=num1.innerHTML;
    num1.innerHTML="";
    num2.innerHTML="*"
    }
    else if(num1.innerHTML!=""&&num2.innerHTML!=""&&num3.innerHTML!=""){
        calc2();
        num2.innerHTML="*"
        
    }
    
}


obelus.onclick=function(){
    if(num1.innerHTML!=""&&num2.innerHTML==""&&num3.innerHTML==""){
        num3.innerHTML=num1.innerHTML;
        num1.innerHTML="";
        num2.innerHTML="/"
    }
    else if(num1.innerHTML!=""&&num2.innerHTML!=""&&num3.innerHTML!=""){
        calc2();
        num2.innerHTML="/"
        
    }
    
    
    
}

equal.onclick = function(){
  if(num2.innerHTML == "+"){
    num1.innerHTML = eval(num3.innerHTML + "+" + num1.innerHTML);
    num3.innerHTML = "";
    num2.innerHTML = "";
  }
    else if(num2.innerHTML == "-"){
        
        num1.innerHTML = eval(num3.innerHTML +"-" +num1.innerHTML);
    num3.innerHTML = "";
    num2.innerHTML = "";
    }
    
    else if(num2.innerHTML == "*"){
        
        num1.innerHTML = eval(num3.innerHTML +"*" +num1.innerHTML);
    num3.innerHTML = "";
    num2.innerHTML = "";
    }
    
    
    else if(num2.innerHTML == "/"&&num1.innerHTML!="0"&&num3.innerHTML!="0"){
        
        num1.innerHTML = eval(num3.innerHTML +"/" +num1.innerHTML);
    num3.innerHTML = "";
    num2.innerHTML = "";
    }
    else if(num2.innerHTML == "/"&&num1.innerHTML=="0"&&num3.innerHTML!="0"){
        num1.innerHTML=" error"
    }
    else if(num2.innerHTML == "/"&&num1.innerHTML!="0"&&num3.innerHTML=="0"){
        num1.innerHTML=" error"
    }
    else if(num2.innerHTML == "/"&&num1.innerHTML=="0"&&num3.innerHTML=="0"){
        num1.innerHTML=" error"
    }
    
    
  
}

percent.onclick=function(){
    num1.innerHTML=num1.innerHTML/100
    
}
    
    


function calc2(){
    
    if(num2.innerHTML == "+"){
    num3.innerHTML = +num3.innerHTML  +  + num1.innerHTML;
    num1.innerHTML = "";
    num2.innerHTML = "";
  }
    else if(num2.innerHTML == "-"){
        
        num3.innerHTML = +num3.innerHTML  -  +num1.innerHTML;
    num1.innerHTML = "";
    num2.innerHTML = "";
    }
    
    else if(num2.innerHTML == "*"){
        
        num3.innerHTML =+ num3.innerHTML  *  +num1.innerHTML;
    num1.innerHTML = "";
    num2.innerHTML = "";
    }
    
    
    else if(num2.innerHTML == "/"){
        
        num3.innerHTML =+ num3.innerHTML   /  +num1.innerHTML;
    num1.innerHTML = "";
    num2.innerHTML = "";
    }
    else if(num1==0&&num3==0){
        num1.innerHTML=" error"
    }
    
    
    
    
    
}