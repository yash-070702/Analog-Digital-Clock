let hr=document.querySelector("#hour");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");
const text_sec=document.querySelector("#text-seconds");
const text_hr=document.querySelector("#text-hour");
const text_min=document.querySelector("#text-minutes");
const date_day=document.querySelector("#date-day");
const date_month=document.querySelector("#date-month");
const date_year=document.querySelector("#date-year");
const AMPM=document.getElementById('text-ampm');
const check=document.querySelector(".checkbox");
const completeTextClock=document.querySelectorAll(".clock_text");
const completeDate=document.querySelectorAll(".date_text");
const clock=document.querySelector(".clock");
const digits=document.querySelectorAll(".digits");
const hands=document.querySelectorAll(".main-hand");
const heading =document.querySelector(".heading");
const footer=document.querySelector(".footer-text");
const loader=document.querySelector(".loader");

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

setInterval(()=>{
loader.style.display="none";
},1000);

function displaytime(){

    let date=new Date();
    
    let hh=(date.getHours())%12;
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hrotation=30*hh+mm/2;
    let mrotation=6*mm;
    let srotation=6*ss;

    // updating analog clock
    hr.style.transform=`rotate(${hrotation}deg)`;
    min.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;
   
   // updating digital clock
    text_sec.innerHTML=(ss>9) ? ss :`0${ss}`;
    text_hr.innerHTML=(hh>9) ? hh :`0${hh}`;
    text_min.innerHTML=(mm>9) ? mm :`0${mm}`;
    date_month.innerHTML=`${month[date.getMonth()-1]} ,`;
    date_day.innerHTML=(date.getDate()>9) ? date.getDate() : `0${date.getDate()}`;
    date_year.innerHTML=date.getFullYear();
    
    AMPM.innerHTML=((date.getHours()>=12) ? 'PM' : 'AM');
}

setInterval(displaytime,1000 );

check.addEventListener("click", ()=>{
    if(check.checked==true){

completeTextClock.forEach(element => {
    element.style.color="#19133b";
    
});

completeDate.forEach(element => {
    element.style.color="#19133b";
    
});
AMPM.style.color="#19133b";

document.body.style.backgroundColor = "#ececf3";
clock.style.backgroundColor="#ececf3"

digits.forEach(element=>{
    element.style.color="#19133b";
});

hands.forEach(element=>{
    element.style.backgroundColor="#383355";
});

clock.style.boxShadow="-6px -6px 16px #FFF,6px 6px 16px hsla(240, 30%, 86%, 1), inset 6px 6px 16px hsla(240, 30%, 86%, 1), inset -6px -6px 16px #FFF";

clock.style.border="#ececf3";

heading.style.color="#19133b";
footer.style.color="#19133b";

    }
else{
    completeTextClock.forEach(element => {
        element.style.color="#f1f1f5";
        
    });
    
    completeDate.forEach(element => {
        element.style.color="#f1f1f5";
        
    });
    AMPM.style.color="#f1f1f5";

    document.body.style.backgroundColor = "#25252d";
    clock.style.backgroundColor="#25252d";

    digits.forEach(element=>{
        element.style.color="#f1f1f5";
    });

    hands.forEach(element=>{
        element.style.backgroundColor="#ffffff";
    });



    clock.style.boxShadow="6px 6px 16px hsla(240, 8%, 12%, 1), -6px -6px 16px hsla(240, 8%, 20%, 1), inset -6px -6px 16px hsla(240, 8%, 20%, 1), inset 6px 6px 12px hsla(240, 8%, 12%, 1)";

clock.style.border="#2e2d35";
heading.style.color="#ffffff";
footer.style.color="#ffffff";
}
   })