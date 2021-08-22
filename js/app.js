
let audio = document.querySelectorAll(".audio");
const section = document.querySelector(".podcasts")
let btns = document.querySelectorAll(".categories button");
let btn_container = document.querySelector(".categories")
let podcasts = [
    {
        id:1,
        audio:"./podcasts/Interview/STEVEJOBSANDBILLGATES.mp3",
        title:"Steve Jobs and Bill Gates",
        category:"INTERVIEWS"
    },
    {
        id:2,
        audio:"./podcasts/Interview/IASKEDBILLGATESWHAT'STHENEXTCRISIS..mp3",
        title:"Bill Gates talking about the next crisis",
        category:"INTERVIEWS"
    },
    {
        id:3,
        audio:"./podcasts/Interview/STEVEJOBS10MINUTESOFAMAZINGBUSINESSADVICE.m4a",
        title:"10 minutes of Amazing Business Advice from Steve Jobs",
        category:"INTERVIEWS"
    },
    {
        id:4,
        audio:"./podcasts/IELTS/IELTS SPEAKING - HOW TO INTRODUCE YOURSELF.mp3",
        title:"IELTS SPEAKING - How To Introduce Yourself",
        category:"IELTS"
    },
    {
        id:5,
        audio:"./podcasts/IELTS/IELTS SPEAKING BAND 9 CONVERSATION & TIPS.mp3",
        title:"IELTS SPEAKING BAND 9 TIPS",
        category:"IELTS"
    },
    {
        id:6,
        audio:"./podcasts/IELTS/IELTS SPEAKING TEST BAND SCORE 9.0.mp3",
        title:"IELTS SPEAKING TEST BAND 9",
        category:"IELTS"
    },
    {
        id:7,
        audio:"./podcasts/IELTS/USEFUL IDIOMS FOR ANY TOPIC IN IELTS SPEAKING.mp3",
        title:"Useful idioms for any topic in IELTS speaking",
        category:"IELTS"
    },
    {
        id:8,
        audio:"./podcasts/Motivation/DEDICATION.mp3",
        title:"Dedication",
        category:"MOTIVATION"
    },
    {
        id:9,
        audio:"./podcasts/Motivation/RESET YOUR MINDSET.mp3",
        title:"Reset your mindset",
        category:"MOTIVATION"
    },
    {
        id:10,
        audio:"./podcasts/Motivation/WHAT DO ALL GREAT LEADERS HAVE IN COMMON.mp3",
        title:"What do all leaders have in common",
        category:"MOTIVATION"
    },
    {
        id:11,
        audio:"./podcasts/Motivation/YOU VS YOU.mp3",
        title:"You vs You",
        category:"MOTIVATION"
    },
]

window.addEventListener("DOMContentLoaded",()=>{
    displayAudios(podcasts);
    displayBtns();
})

let audio_el = document.querySelector(".audio audio");
let audio_title = document.querySelector(".audio h3");
function displayAudios(audios){
    
    let displayAudio = audios.map((item)=>{
        return `<div class="audio">
        <h3 class="audio-title">${item.title}</h3>
        <img src="./images/stevejobs1.jpg" alt="">
        <audio controls muted src="${item.audio}"></audio>

    </div>`
    })
    displayAudio = displayAudio.join("");
    section.innerHTML = displayAudio
}
function displayBtns(){
    const categories = podcasts.reduce((values,item)=>{
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values
    },
    ["ALL"]
    );
    const categoryBtns = categories.map((category)=>{
        return `<button data-id="${category}">${category}</button>`
    }).join("");
    btn_container.innerHTML = categoryBtns;
    let filter_btns = btn_container.querySelectorAll("button");
    filter_btns.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            const category = e.currentTarget.dataset.id;
            const audioCategory = podcasts.filter((audioItem)=>{
                if(audioItem.category === category){
                    return audioItem;
                }
            });
            if(category === "ALL"){
                displayAudios(podcasts);
            }else{
                displayAudios(audioCategory);
            }
        })
    })
}