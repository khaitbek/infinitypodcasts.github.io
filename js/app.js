let audio = document.querySelectorAll(".audio");
const section = document.querySelector(".podcasts");
let btns = document.querySelectorAll(".categories button");
let btn_container = document.querySelector(".categories");
console.log(btn_container.children);
let podcasts = [
  {
    id: 1,
    audio: "./podcasts/Interview/STEVEJOBSANDBILLGATES.mp3",
    title: "Steve Jobs and Bill Gates",
    category: "INTERVIEWS",
    img: "./images/stevejobsandbillgates.jpg",
  },
  {
    id: 2,
    audio: "./podcasts/Interview/IASKEDBILLGATESWHAT'STHENEXTCRISIS..mp3",
    title: "Bill Gates talking about the next crisis",
    category: "INTERVIEWS",
    img: "./images/bill_gates.jpg",
  },
  {
    id: 3,
    audio: "./podcasts/Interview/STEVEJOBS10MINUTESOFAMAZINGBUSINESSADVICE.m4a",
    title: "10 minutes of Amazing Business Advice from Steve Jobs",
    category: "INTERVIEWS",
    img: "./images/stevejobs1.jpg",
  },

  {
    id: 4,
    audio: "./podcasts/IELTS/IELTS SPEAKING - HOW TO INTRODUCE YOURSELF.mp3",
    title: "IELTS SPEAKING - How To Introduce Yourself",
    category: "IELTS",
    img: "./images/ieltsspeaking1.jpg",
  },
  {
    id: 5,
    audio: "./podcasts/IELTS/IELTS SPEAKING BAND 9 CONVERSATION & TIPS.mp3",
    title: "IELTS SPEAKING BAND 9 TIPS",
    category: "IELTS",
    img: "./images/ieltsband9.png",
  },
  {
    id: 6,
    audio: "./podcasts/IELTS/IELTS SPEAKING TEST BAND SCORE 9.0.mp3",
    title: "IELTS SPEAKING TEST BAND 9",
    category: "IELTS",
    img: "./images/ielts1.jpeg",
  },
  {
    id: 7,
    audio: "./podcasts/IELTS/USEFUL IDIOMS FOR ANY TOPIC IN IELTS SPEAKING.mp3",
    title: "Useful idioms for any topic in IELTS speaking",
    category: "IELTS",
    img: "./images/ieltsidioms.png",
  },
  {
    id: 8,
    audio: "./podcasts/Motivation/DEDICATION.mp3",
    title: "Dedication",
    category: "MOTIVATION",
    img: "./images/dedication1.png",
  },
  {
    id: 9,
    audio: "./podcasts/Motivation/RESET YOUR MINDSET.mp3",
    title: "Reset your mindset",
    category: "MOTIVATION",
    img: "./images/newmindset.jpg",
  },
  {
    id: 10,
    audio: "./podcasts/Motivation/WHAT DO ALL GREAT LEADERS HAVE IN COMMON.mp3",
    title: "What do all leaders have in common",
    category: "MOTIVATION",
    img: "./images/leaders.jpg",
  },
  {
    id: 11,
    audio: "./podcasts/Motivation/YOU VS YOU.mp3",
    title: "You vs You",
    category: "MOTIVATION",
    img: "./images/youvsyou.png",
  },
  {
    id: 12,
    audio: "./podcasts/Interview/BILLIONAIRES JACK MA VS ELON MUSK DEBATE.mp3",
    title: "Jack Ma vs Elon Musk",
    category: "INTERVIEWS",
    img: "./images/jackmaelonmusk.jpg",
  },
];
let interviews = [
  {
    id: 1,
    audio: "./podcasts/Interview/STEVEJOBSANDBILLGATES.mp3",
    title: "Steve Jobs and Bill Gates",
    category: "INTERVIEWS",
    img: "./images/stevejobsandbillgates.jpg",
  },
  {
    id: 2,
    audio: "./podcasts/Interview/IASKEDBILLGATESWHAT'STHENEXTCRISIS..mp3",
    title: "Bill Gates talking about the next crisis",
    category: "INTERVIEWS",
    img: "./images/bill_gates.jpg",
  },
  {
    id: 3,
    audio: "./podcasts/Interview/STEVEJOBS10MINUTESOFAMAZINGBUSINESSADVICE.m4a",
    title: "10 minutes of Amazing Business Advice from Steve Jobs",
    category: "INTERVIEWS",
    img: "./images/stevejobs1.jpg",
  },
  {
    id: 4,
    audio: "./podcasts/Interview/BILLIONAIRES JACK MA VS ELON MUSK DEBATE.mp3",
    title: "Jack Ma vs Elon Musk",
    category: "INTERVIEWS",
    img: "./images/jackmaelonmusk.jpg",
  },
 
];
let IELTS = [
  {
    id: 4,
    audio: "./podcasts/IELTS/IELTS SPEAKING - HOW TO INTRODUCE YOURSELF.mp3",
    title: "IELTS SPEAKING - How To Introduce Yourself",
    category: "IELTS",
    img: "./images/ieltsspeaking1.jpg",
  },
  {
    id: 5,
    audio: "./podcasts/IELTS/IELTS SPEAKING BAND 9 CONVERSATION & TIPS.mp3",
    title: "IELTS SPEAKING BAND 9 TIPS",
    category: "IELTS",
    img: "./images/ieltsband9.png",
  },
  {
    id: 6,
    audio: "./podcasts/IELTS/IELTS SPEAKING TEST BAND SCORE 9.0.mp3",
    title: "IELTS SPEAKING TEST BAND 9",
    category: "IELTS",
    img: "./images/ielts1.jpeg",
  },
  {
    id: 7,
    audio: "./podcasts/IELTS/USEFUL IDIOMS FOR ANY TOPIC IN IELTS SPEAKING.mp3",
    title: "Useful idioms for any topic in IELTS speaking",
    category: "IELTS",
    img: "./images/ieltsidioms.png",
  },
];
let motivation = [
  {
    id: 8,
    audio: "./podcasts/Motivation/DEDICATION.mp3",
    title: "Dedication",
    category: "MOTIVATION",
    img: "./images/dedication1.png",
  },
  {
    id: 9,
    audio: "./podcasts/Motivation/RESET YOUR MINDSET.mp3",
    title: "Reset your mindset",
    category: "MOTIVATION",
    img: "./images/newmindset.jpg",
  },
  {
    id: 10,
    audio: "./podcasts/Motivation/WHAT DO ALL GREAT LEADERS HAVE IN COMMON.mp3",
    title: "What do all leaders have in common",
    category: "MOTIVATION",
    img: "./images/leaders.jpg",
  },
  {
    id: 11,
    audio: "./podcasts/Motivation/YOU VS YOU.mp3",
    title: "You vs You",
    category: "MOTIVATION",
    img: "./images/youvsyou.png",
  },

];

window.addEventListener("DOMContentLoaded", () => {
  displayAudios(podcasts);

  displayBtns();
});

let audio_el = document.querySelectorAll(".audio audio");
let audio_title = document.querySelectorAll(".audio h3");
function displayAudios(audios) {
  let displayAudio = audios.map((item) => {
    return `<div class="audio">
        <audio  class="audio" src="${item.audio}" download></audio>
        
        <img src="${item.img}" alt=""/>
        <div class="player">
    <div class="control">
   
    <button class="play-btn">
    <i onclick='
       
        
        let audio = this.parentElement.parentElement.parentElement.parentElement.firstElementChild;
        
        let parent = this.parentElement.parentElement.parentElement.parentElement;
        
        let player = this.parentElement.parentElement.parentElement;
        let info = player.lastElementChild;
        let progress = info.firstElementChild.firstElementChild;
        
        
        if(audio.paused){
            audio.play()
            audio.onplay = (e)=>{
                let pause = document.querySelectorAll(".play-btn i");
                
               
                this.classList.remove("fas","fa-play");
                this.classList.add("fas","fa-pause");
             
                let audios = document.getElementsByTagName("audio");
                let strongs = parent.querySelector("strong#current");
                let dur_text = parent.querySelector("strong#duration");
                let seconds = Math.floor(audio.duration % 60).toFixed(0);
                let foo = audio.duration - seconds;
                let minutes = Math.floor((foo / 60)).toFixed(0);
                dur_text.textContent = minutes + ":" + seconds
                if(minutes > "59:59"){
                  minutes = 1
                  dur_text.textContent = minutes + ":" + seconds + ":00"
                }
                
                let range = this.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild;
                
                
                  
                    range.max = audio.duration
                    
                range.addEventListener("change",()=>{
                    audio.currentTime = range.value
                })
               let prev_btn = document.querySelector(".prev");
               let next_btn = document.querySelector(".next");
                for(let i = 0, len = audios.length;i < len;i++){
                    if(audios[i] != e.target){
                        audios[i].pause()
                        
                        
                    }
                  }
                audio.onpause = ()=>{
                  this.classList.remove("fas","fa-stop");
                  this.classList.add("fas","fa-play")
                }
                audio.ontimeupdate = (e)=>{
                   
                    for(let i = 0, len = audios.length;i < len;i++){
                        
                        if(audios[i] = e.target){
                          
                            
    
    
                            

                                   let seconds = audio.currentTime % 60;
                                   let foo = audio.currentTime - seconds;
                                   let minutes = foo / 60;
                                   if(seconds < 10){
                                       seconds =Math.floor( "0" + (seconds.toFixed(0).toString()));
                                   }
                                   else{
                                    seconds = Math.floor( (seconds.toFixed(0).toString()));
                                   }
                                   function timeFormat(ct){
                                      seconds = (Math.floor(ct % 60))
                                       minutes =(Math.floor(ct / 60))

                                       if (seconds < 10){
                                           seconds = "0"+seconds
                                       }
                                       return minutes + ":" + seconds 
                                   }
                                   let fixedCurrentTime = minutes + ":" + seconds;
                                   let ct = audio.currentTime;
                                   range.value = audio.currentTime 
                                  strongs.textContent = timeFormat(ct);
                                  let prog = Math.floor((ct * 100));
                                  progress.style.setProperty("--progress",prog + "%")
                                  
                                }else{
                                  
                                  this.classList.remove("fas","fa-pause");
                                  this.classList.add("fas","fa-play");
                            
                        }
                    }

            }
           }
        }else{
            
            audio.pause()
            this.classList.remove("fas","fa-pause");
            this.classList.add("fas","fa-play");
          
        }
        
    ' class="fas fa-play" id="playBtn"></i>
    </button>
    
   
    </div>
    <div class="info">
    
    <div class="bar">
    <input type="range" class="level" id="range"  value="0" min="0"/>
    </div>
    <div class="audio-info">
    
    <strong id="current"></strong>
    <strong id="duration"></strong>
    </div>
    </div>
    </div>
    <h3 class="audio-title">${item.title}</h3>
    <a class="download-link" href="${item.audio}" download>
      <i class="fas fa-download"></i>
    </a>
    </div>
    
   
    `;
  });
  displayAudio = displayAudio.join("");
  section.innerHTML = displayAudio;
  let i = section.querySelectorAll("i");
 
  
}
function displayBtns() {
  const categories = podcasts.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["ALL"]
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button data-id="${category}">${category}</button>`;
    })
    .join("");
  btn_container.innerHTML = categoryBtns;
  let filter_btns = btn_container.querySelectorAll("button");
  filter_btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const audioCategory = podcasts.filter((audioItem) => {
        if (audioItem.category === category) {
          return audioItem;
        }
      });
      if (category === "ALL") {
        displayAudios(podcasts);
      } else {
        displayAudios(audioCategory);
      }
      if (category === "INTERVIEWS") {
        section.innerHTML += `<button class="more">More</button>`;
        section.querySelector(".more").addEventListener("click", () => {
          displayAudios(interviews);
        });
      }
      if (category === "IELTS") {
        section.innerHTML += `<button class="more">More</button>`;
        section.querySelector(".more").addEventListener("click", () => {
          displayAudios(IELTS);
        });
      }
      if (category === "MOTIVATION") {
        section.innerHTML += `<button class="more">More</button>`;
        section.querySelector(".more").addEventListener("click", () => {
          displayAudios(motivation);
        });
      }
    });
  });
}
let playlist_btn = document.querySelector(".playlist-btn");
let playlist = document.querySelector(".playlist");
