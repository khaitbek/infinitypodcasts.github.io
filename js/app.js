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
  },
  {
    id: 2,
    audio: "./podcasts/Interview/IASKEDBILLGATESWHAT'STHENEXTCRISIS..mp3",
    title: "Bill Gates talking about the next crisis",
    category: "INTERVIEWS",
  },
  {
    id: 3,
    audio: "./podcasts/Interview/STEVEJOBS10MINUTESOFAMAZINGBUSINESSADVICE.m4a",
    title: "10 minutes of Amazing Business Advice from Steve Jobs",
    category: "INTERVIEWS",
  },
  {
    id: 3,
    audio: "./podcasts/Interview/STEVEJOBS10MINUTESOFAMAZINGBUSINESSADVICE.m4a",
    title: "10 minutes of Amazing Business Advice from Steve Jobs",
    category: "INTERVIEWS",
  },
  {
    id: 4,
    audio: "./podcasts/IELTS/IELTS SPEAKING - HOW TO INTRODUCE YOURSELF.mp3",
    title: "IELTS SPEAKING - How To Introduce Yourself",
    category: "IELTS",
  },
  {
    id: 5,
    audio: "./podcasts/IELTS/IELTS SPEAKING BAND 9 CONVERSATION & TIPS.mp3",
    title: "IELTS SPEAKING BAND 9 TIPS",
    category: "IELTS",
  },
  {
    id: 6,
    audio: "./podcasts/IELTS/IELTS SPEAKING TEST BAND SCORE 9.0.mp3",
    title: "IELTS SPEAKING TEST BAND 9",
    category: "IELTS",
  },
  {
    id: 7,
    audio: "./podcasts/IELTS/USEFUL IDIOMS FOR ANY TOPIC IN IELTS SPEAKING.mp3",
    title: "Useful idioms for any topic in IELTS speaking",
    category: "IELTS",
  },
  {
    id: 8,
    audio: "./podcasts/Motivation/DEDICATION.mp3",
    title: "Dedication",
    category: "MOTIVATION",
  },
  {
    id: 9,
    audio: "./podcasts/Motivation/RESET YOUR MINDSET.mp3",
    title: "Reset your mindset",
    category: "MOTIVATION",
  },
  {
    id: 10,
    audio: "./podcasts/Motivation/WHAT DO ALL GREAT LEADERS HAVE IN COMMON.mp3",
    title: "What do all leaders have in common",
    category: "MOTIVATION",
  },
  {
    id: 11,
    audio: "./podcasts/Motivation/YOU VS YOU.mp3",
    title: "You vs You",
    category: "MOTIVATION",
  },
];
let interviews = [
  {
    id: 1,
    audio: "./podcasts/Interview/STEVEJOBSANDBILLGATES.mp3",
    title: "Steve Jobs and Bill Gates",
    category: "INTERVIEWS",
  },
  {
    id: 2,
    audio: "./podcasts/Interview/IASKEDBILLGATESWHAT'STHENEXTCRISIS..mp3",
    title: "Bill Gates talking about the next crisis",
    category: "INTERVIEWS",
  },
  {
    id: 3,
    audio: "./podcasts/Interview/STEVEJOBS10MINUTESOFAMAZINGBUSINESSADVICE.m4a",
    title: "10 minutes of Amazing Business Advice from Steve Jobs",
    category: "INTERVIEWS",
  },
  {
    id: 1,
    audio: "./podcasts/Interview/STEVEJOBSANDBILLGATES.mp3",
    title: "Steve Jobs and Bill Gates",
    category: "INTERVIEWS",
  },
  {
    id: 2,
    audio: "./podcasts/Interview/IASKEDBILLGATESWHAT'STHENEXTCRISIS..mp3",
    title: "Bill Gates talking about the next crisis",
    category: "INTERVIEWS",
  },
  {
    id: 3,
    audio: "./podcasts/Interview/STEVEJOBS10MINUTESOFAMAZINGBUSINESSADVICE.m4a",
    title: "10 minutes of Amazing Business Advice from Steve Jobs",
    category: "INTERVIEWS",
  },
  {
    id: 1,
    audio: "./podcasts/Interview/STEVEJOBSANDBILLGATES.mp3",
    title: "Steve Jobs and Bill Gates",
    category: "INTERVIEWS",
  },
  {
    id: 2,
    audio: "./podcasts/Interview/IASKEDBILLGATESWHAT'STHENEXTCRISIS..mp3",
    title: "Bill Gates talking about the next crisis",
    category: "INTERVIEWS",
  },
  {
    id: 3,
    audio: "./podcasts/Interview/STEVEJOBS10MINUTESOFAMAZINGBUSINESSADVICE.m4a",
    title: "10 minutes of Amazing Business Advice from Steve Jobs",
    category: "INTERVIEWS",
  },
];
let IELTS = [
  {
    id: 4,
    audio: "./podcasts/IELTS/IELTS SPEAKING - HOW TO INTRODUCE YOURSELF.mp3",
    title: "IELTS SPEAKING - How To Introduce Yourself",
    category: "IELTS",
  },
  {
    id: 5,
    audio: "./podcasts/IELTS/IELTS SPEAKING BAND 9 CONVERSATION & TIPS.mp3",
    title: "IELTS SPEAKING BAND 9 TIPS",
    category: "IELTS",
  },
  {
    id: 6,
    audio: "./podcasts/IELTS/IELTS SPEAKING TEST BAND SCORE 9.0.mp3",
    title: "IELTS SPEAKING TEST BAND 9",
    category: "IELTS",
  },
  {
    id: 7,
    audio: "./podcasts/IELTS/USEFUL IDIOMS FOR ANY TOPIC IN IELTS SPEAKING.mp3",
    title: "Useful idioms for any topic in IELTS speaking",
    category: "IELTS",
  },
  {
    id: 8,
    audio: "./podcasts/IELTS/USEFUL IDIOMS FOR ANY TOPIC IN IELTS SPEAKING.mp3",
    title: "Useful idioms for any topic in IELTS speaking",
    category: "IELTS",
  },
  {
    id: 9,
    audio: "./podcasts/IELTS/USEFUL IDIOMS FOR ANY TOPIC IN IELTS SPEAKING.mp3",
    title: "Useful idioms for any topic in IELTS speaking",
    category: "IELTS",
  },
  {
    id: 10,
    audio: "./podcasts/IELTS/USEFUL IDIOMS FOR ANY TOPIC IN IELTS SPEAKING.mp3",
    title: "Useful idioms for any topic in IELTS speaking",
    category: "IELTS",
  },
];
let motivation = [
  {
    id: 9,
    audio: "./podcasts/Motivation/RESET YOUR MINDSET.mp3",
    title: "Reset your mindset",
    category: "MOTIVATION",
  },
  {
    id: 10,
    audio: "./podcasts/Motivation/WHAT DO ALL GREAT LEADERS HAVE IN COMMON.mp3",
    title: "What do all leaders have in common",
    category: "MOTIVATION",
  },
  {
    id: 11,
    audio: "./podcasts/Motivation/YOU VS YOU.mp3",
    title: "You vs You",
    category: "MOTIVATION",
  },
  {
    id: 11,
    audio: "./podcasts/Motivation/YOU VS YOU.mp3",
    title: "You vs You",
    category: "MOTIVATION",
  },
  {
    id: 11,
    audio: "./podcasts/Motivation/YOU VS YOU.mp3",
    title: "You vs You",
    category: "MOTIVATION",
  },
  {
    id: 11,
    audio: "./podcasts/Motivation/YOU VS YOU.mp3",
    title: "You vs You",
    category: "MOTIVATION",
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
        <audio  class="audio" src="${item.audio}"></audio>
        <h3 class="audio-title">${item.title}</h3>
        <img src="./images/stevejobs1.jpg" alt=""/>
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
                console.log(pause)
                console.log(e.parentElement)
                this.classList.remove("fas","fa-play");
                this.classList.add("fas","fa-stop");

                let audios = document.getElementsByTagName("audio");
                let strongs = parent.querySelector("strong");
                let range = this.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild;
               console.log(range)
                
                  
                    range.max = audio.duration
                
                range.addEventListener("change",()=>{
                    audio.currentTime = range.value
                })
                
                for(let i = 0, len = audios.length;i < len;i++){
                    if(audios[i] != e.target){
                        audios[i].pause()
                        
                    }
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
                                 
                                  strongs.textContent = timeFormat(ct);
                                  let prog = Math.floor((ct * 100));
                                  progress.style.setProperty("--progress",prog + "%")
                               
                            
                        }else{
                           
                            
                        }
                    }

            }
           }
        }else{
            
            audio.pause()
            this.classList.remove("fas","fa-stop");
            this.classList.add("fas","fa-play");
          
        }
        
    ' class="fas fa-play" id="playBtn"></i>
    </button>
    
    </div>
    <strong id="current"></strong>
    <div class="info">
    
    <div class="bar">
        <input type="range" class="level" id="range"  value="0" min="0"/>
    </div>
    </div>
</div>
    </div>`;
  });
  displayAudio = displayAudio.join("");
  section.innerHTML = displayAudio;
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
