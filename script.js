var t,p,r;


 function calsi(){
    t=document.getElementById("t").value;
    var tt=document.getElementById("timet").value;
    var tr=document.getElementById("timer").value;
    p=document.getElementById("p").value;
    r=document.getElementById("r").value;
    if(tt!=tr){
        if(tt=='m' && tr=='y'){
            t=t/12;
        }
        if(tr=='m' && tt=='y'){
            r=r*12
        }
       
        console.log(t,r);
    }    
    var SI=Math.ceil(p*t*r/100);
    var a=new Number(p)+new Number(SI);
        document.getElementById("si").innerHTML="The Interest Is:$"+SI;
        document.getElementById("ci").innerHTML="The Amount Is:$"+a;
    console.log(tt,tr,p,t,r);
 }
 
