let audio = document.querySelectorAll(".audio");
const section = document.querySelector(".podcasts");
let btns = document.querySelectorAll(".categories button");
let btn_container = document.querySelector(".categories");

let podcasts = [
  {
    id: 1,
    audio: "./podcasts/Interview/STEVEJOBSANDBILLGATES.mp3",
    title: "Steve Jobs and Bill Gates",
    category: "INTERVIEWS",
    img: "./images/podcast.jpg",
  },
  {
    id: 2,
    audio: "./podcasts/Interview/IASKEDBILLGATESWHAT'STHENEXTCRISIS..mp3",
    title: "Bill Gates talking about the next crisis",
    category: "INTERVIEWS",
    img: "./images/podcast.jpg",
  },
  {
    id: 3,
    audio: "./podcasts/Interview/STEVEJOBS10MINUTESOFAMAZINGBUSINESSADVICE.m4a",
    title: "10 minutes of Amazing Business Advice from Steve Jobs",
    category: "INTERVIEWS",
    img: "./images/podcast.jpg",
  },

  {
    id: 4,
    audio: "./podcasts/IELTS/IELTS SPEAKING - HOW TO INTRODUCE YOURSELF.mp3",
    title: "IELTS SPEAKING - How To Introduce Yourself",
    category: "IELTS",
    img: "./images/podcast.jpg",
  },
  {
    id: 5,
    audio: "./podcasts/IELTS/IELTS SPEAKING BAND 9 CONVERSATION & TIPS.mp3",
    title: "IELTS SPEAKING BAND 9 TIPS",
    category: "IELTS",
    img: "./images/podcast.jpg",
  },
  {
    id: 6,
    audio: "./podcasts/IELTS/IELTS SPEAKING TEST BAND SCORE 9.0.mp3",
    title: "IELTS SPEAKING TEST BAND 9",
    category: "IELTS",
    img: "./images/podcast.jpg",
  },
  {
    id: 7,
    audio: "./podcasts/IELTS/USEFUL IDIOMS FOR ANY TOPIC IN IELTS SPEAKING.mp3",
    title: "Useful idioms for any topic in IELTS speaking",
    category: "IELTS",
    img: "./images/podcast.jpg",
  },
  {
    id: 8,
    audio: "./podcasts/Motivation/DEDICATION.mp3",
    title: "Dedication",
    category: "MOTIVATION",
    img: "./images/podcast.jpg",
  },
  {
    id: 9,
    audio: "./podcasts/Motivation/RESET YOUR MINDSET.mp3",
    title: "Reset your mindset",
    category: "MOTIVATION",
    img: "./images/podcast.jpg",
  },
  {
    id: 10,
    audio: "./podcasts/Motivation/WHAT DO ALL GREAT LEADERS HAVE IN COMMON.mp3",
    title: "What do all leaders have in common",
    category: "MOTIVATION",
    img: "./images/podcast.jpg",
  },
  {
    id: 11,
    audio: "./podcasts/Motivation/YOU VS YOU.mp3",
    title: "You vs You",
    category: "MOTIVATION",
    img: "./images/podcast.jpg",
  },
  {
    id: 12,
    audio: "./podcasts/Interview/BILLIONAIRES JACK MA VS ELON MUSK DEBATE.mp3",
    title: "Jack Ma vs Elon Musk",
    category: "INTERVIEWS",
    img: "./images/podcast.jpg",
  },
  {
    id: 13,
    audio: "./podcasts/Interview/BILLIONAIRES JACK MA VS ELON MUSK DEBATE.mp3",
    title: "Jack Ma vs Elon Musk",
    category: "BUSINESS",
    img: "./images/podcast.jpg",
  },
  {
    id: 14,
    audio: "./podcasts/Interview/STEVEJOBSANDBILLGATES.mp3",
    title: "Steve Jobs and Bill Gates",
    category: "BUSINESS",
    img: "./images/podcast.jpg",
  },
  {
    id: 15,
    audio: "./podcasts/Business/HOW TESLA BUILDS CARS.mp3",
    title: "How Tesla builds cars?",
    category: "BUSINESS",
    img: "./images/podcast.jpg",
  },
  {
    id: 16,
    audio: "./podcasts/Business/APPLE VS TESLA.mp3",
    title: "Apple vs Tesla",
    category: "BUSINESS",
    img: "./images/podcast.jpg",
  },
  {
    id: 17,
    audio: "./podcasts/Music/EMINEM - TILL I COLLAPSE.mp3",
    title: "Eminem - Till I Collapse",
    category: "SONGS",
    img: "./images/podcast.jpg",
  },
  {
    id: 18,
    audio: "./podcasts/Music/JUSTIN BIEBER - LET ME LOVE YOU.m4a",
    title: "Justin Bieber - Let me love you",
    category: "SONGS",
    img: "./images/podcast.jpg",
  },
  {
    id: 19,
    audio: "./podcasts/Music/JUSTIN TIMBERLAKE - YOUNG MAN.mp3",
    title: "Jack Ma vs Elon Musk",
    category: "SONGS",
    img: "./images/podcast.jpg",
  },
  {
    id: 20,
    audio: "./podcasts/Music/WIZ KHALIF ft CHARLIE PUTH - SEE YOU AGAIN.mp3",
    title: "Wiz Khalif ft Charlie Puth - See you Again",
    category: "SONGS",
    img: "./images/podcast.jpg",
  },
  {
    id: 21,
    audio: "./podcasts/Stories/Clever Shoemaker.mp3",
    title: "Clever Shoemaker",
    category: "STORIES",
    img: "./images/podcast.jpg",
  },
  {
    id: 22,
    audio: "./podcasts/Stories/Mother Holle.mp3",
    title: "Mother Holle",
    category: "STORIES",
    img: "./images/podcast.jpg",
  },
  {
    id: 23,
    audio: "./podcasts/Stories/The Golden Bird.mp3",
    title: "The Golden Bird",
    category: "STORIES",
    img: "./images/podcast.jpg",
  },
  {
    id: 24,
    audio: "./podcasts/Stories/The Greedy Milkman.mp3",
    title: "The greedy Milkman",
    category: "STORIES",
    img: "./images/podcast.jpg",
  },
  {
    id: 25,
    audio: "./podcasts/Stories/Clever Shoemaker.mp3",
    title: "Clever Shoemaker",
    category: "ELEMENTARY",
    img: "./images/podcast.jpg",
  },
  {
    id: 26,
    audio: "./podcasts/Stories/Mother Holle.mp3",
    title: "Mother Holle",
    category: "ELEMENTARY",
    img: "./images/podcast.jpg",
  },
  {
    id: 27,
    audio: "./podcasts/Stories/The Golden Bird.mp3",
    title: "The Golden Bird",
    category: "ELEMENTARY",
    img: "./images/podcast.jpg",
  },
  {
    id: 28,
    audio: "./podcasts/Stories/The Greedy Milkman.mp3",
    title: "The greedy Milkman",
    category: "ELEMENTARY",
    img: "./images/podcast.jpg",
  },
];

let interviews = [
  {
    id: 1,
    audio: "./podcasts/Interview/STEVEJOBSANDBILLGATES.mp3",
    title: "Steve Jobs and Bill Gates",
    category: "INTERVIEWS",
    img: "./images/podcast.jpg",
  },
  {
    id: 2,
    audio: "./podcasts/Interview/IASKEDBILLGATESWHAT'STHENEXTCRISIS..mp3",
    title: "Bill Gates talking about the next crisis",
    category: "INTERVIEWS",
    img: "./images/podcast.jpg",
  },
  {
    id: 3,
    audio: "./podcasts/Interview/STEVEJOBS10MINUTESOFAMAZINGBUSINESSADVICE.m4a",
    title: "10 minutes of Amazing Business Advice from Steve Jobs",
    category: "INTERVIEWS",
    img: "./images/podcast.jpg",
  },
  {
    id: 4,
    audio: "./podcasts/Interview/BILLIONAIRES JACK MA VS ELON MUSK DEBATE.mp3",
    title: "Jack Ma vs Elon Musk",
    category: "INTERVIEWS",
    img: "./images/podcast.jpg",
  },
 
];
let IELTS = [
  {
    id: 4,
    audio: "./podcasts/IELTS/IELTS SPEAKING - HOW TO INTRODUCE YOURSELF.mp3",
    title: "IELTS SPEAKING - How To Introduce Yourself",
    category: "IELTS",
    img: "./images/podcast.jpg",
  },
  {
    id: 5,
    audio: "./podcasts/IELTS/IELTS SPEAKING BAND 9 CONVERSATION & TIPS.mp3",
    title: "IELTS SPEAKING BAND 9 TIPS",
    category: "IELTS",
    img: "./images/podcast.jpg",
  },
  {
    id: 6,
    audio: "./podcasts/IELTS/IELTS SPEAKING TEST BAND SCORE 9.0.mp3",
    title: "IELTS SPEAKING TEST BAND 9",
    category: "IELTS",
    img: "./images/podcast.jpg",
  },
  {
    id: 7,
    audio: "./podcasts/IELTS/USEFUL IDIOMS FOR ANY TOPIC IN IELTS SPEAKING.mp3",
    title: "Useful idioms for any topic in IELTS speaking",
    category: "IELTS",
    img: "./images/podcast.jpg",
  },
];
let motivation = [
  {
    id: 8,
    audio: "./podcasts/Motivation/DEDICATION.mp3",
    title: "Dedication",
    category: "MOTIVATION",
    img: "./images/podcast.jpg",
  },
  {
    id: 9,
    audio: "./podcasts/Motivation/RESET YOUR MINDSET.mp3",
    title: "Reset your mindset",
    category: "MOTIVATION",
    img: "./images/podcast.jpg",
  },
  {
    id: 10,
    audio: "./podcasts/Motivation/WHAT DO ALL GREAT LEADERS HAVE IN COMMON.mp3",
    title: "What do all leaders have in common",
    category: "MOTIVATION",
    img: "./images/podcast.jpg",
  },
  {
    id: 11,
    audio: "./podcasts/Motivation/YOU VS YOU.mp3",
    title: "You vs You",
    category: "MOTIVATION",
    img: "./images/podcast.jpg",
  },

];
let business = [
  {
    id: 1,
    audio: "./podcasts/Interview/BILLIONAIRES JACK MA VS ELON MUSK DEBATE.mp3",
    title: "Jack Ma vs Elon Musk",
    category: "BUSINESS",
    img: "./images/podcast.jpg",
  },
  {
    id: 2,
    audio: "./podcasts/Interview/STEVEJOBSANDBILLGATES.mp3",
    title: "Steve Jobs and Bill Gates",
    category: "BUSINESS",
    img: "./images/podcast.jpg",
  },
  {
    id: 3,
    audio: "./podcasts/Business/HOW TESLA BUILDS CARS.mp3",
    title: "How Tesla builds cars?",
    category: "BUSINESS",
    img: "./images/podcast.jpg",
  },
  {
    id: 4,
    audio: "./podcasts/Business/APPLE VS TESLA.mp3",
    title: "Apple vs Tesla",
    category: "BUSINESS",
    img: "./images/podcast.jpg",
  },
]
let stories = [
  {
    id: 21,
    audio: "./podcasts/Stories/Clever Shoemaker.mp3",
    title: "Clever Shoemaker",
    category: "STORIES",
    img: "./images/podcast.jpg",
  },
  {
    id: 22,
    audio: "./podcasts/Stories/Mother Holle.mp3",
    title: "Mother Holle",
    category: "STORIES",
    img: "./images/podcast.jpg",
  },
  {
    id: 23,
    audio: "./podcasts/Stories/The Golden Bird.mp3",
    title: "The Golden Bird",
    category: "STORIES",
    img: "./images/podcast.jpg",
  },
  {
    id: 24,
    audio: "./podcasts/Stories/The Greedy Milkman.mp3",
    title: "The greedy Milkman",
    category: "STORIES",
    img: "./images/podcast.jpg",
  },
]
let elementary = [
  {
    id: 1,
    audio: "./podcasts/Stories/Clever Shoemaker.mp3",
    title: "Clever Shoemaker",
    category: "ELEMENTARY",
    img: "./images/podcast.jpg",
  },
  {
    id: 2,
    audio: "./podcasts/Stories/Mother Holle.mp3",
    title: "Mother Holle",
    category: "ELEMENTARY",
    img: "./images/podcast.jpg",
  },
  {
    id: 3,
    audio: "./podcasts/Stories/The Golden Bird.mp3",
    title: "The Golden Bird",
    category: "ELEMENTARY",
    img: "./images/podcast.jpg",
  },
  {
    id: 4,
    audio: "./podcasts/Stories/The Greedy Milkman.mp3",
    title: "The greedy Milkman",
    category: "ELEMENTARY",
    img: "./images/podcast.jpg",
  },
]
let songs = [
  {
    id: 17,
    audio: "./podcasts/Music/EMINEM - TILL I COLLAPSE.mp3",
    title: "Eminem - Till I Collapse",
    category: "SONGS",
    img: "./images/podcast.jpg",
  },
  {
    id: 18,
    audio: "./podcasts/Music/JUSTIN BIEBER - LET ME LOVE YOU.m4a",
    title: "Justin Bieber - Let me love you",
    category: "SONGS",
    img: "./images/podcast.jpg",
  },
  {
    id: 19,
    audio: "./podcasts/Music/JUSTIN TIMBERLAKE - YOUNG MAN.mp3",
    title: "Jack Ma vs Elon Musk",
    category: "SONGS",
    img: "./images/podcast.jpg",
  },
  {
    id: 20,
    audio: "./podcasts/Music/WIZ KHALIF ft CHARLIE PUTH - SEE YOU AGAIN.mp3",
    title: "Wiz Khalif ft Charlie Puth - See you Again",
    category: "SONGS",
    img: "./images/podcast.jpg",
  },
]
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
                    audios[i].onended = ()=>{
                      let target_icon = audios[i].parentElement.querySelector("i");
                      target_icon.classList.remove("fas","fa-pause");
                      target_icon.classList.add("fas","fa-play");
                      let range_el = audios[i + 1].parentElement.querySelector("#range");
                      console.log(range_el)
                      let current_el = audios[i + 1].parentElement.querySelector("#current");
                      let current = audios[i + 1].parentElement.querySelector("#range");
                      let icon_el = audios[i + 1].parentElement.querySelector("i");
                      icon_el.classList.remove("fas","fa-play");
                      icon_el.classList.add("fas","fa-pause");
                      let duration_el = audios[i + 1].parentElement.querySelector("#duration");
                      let seconds = Math.floor(audios[i + 1].duration % 60).toFixed(0);
                      let foo = audios[i + 1].duration - seconds;
                      let minutes = Math.floor((foo / 60)).toFixed(0);
                      duration_el.textContent = minutes + ":" + seconds
                      if(minutes > "59:59"){
                        minutes = 1
                        duration_el.textContent = minutes + ":" + seconds + ":00"
                      }
                     range_el.max = audios[i + 1].duration;
                     range_el.addEventListener("change",()=>{
                       audios[i + 1].currentTime = range_el.value;
                     })
                      audios[i].pause();
                      audios[i + 1].play();
                      audios[i + 1].ontimeupdate = ()=>{
                       
                        let seconds = audios[i + 1].currentTime % 60;
                        let foo = audios[i + 1].currentTime - seconds;
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
                        let ct = audios[i + 1].currentTime;
                        range_el.value = audios[i + 1].currentTime 
                       current_el.textContent = timeFormat(ct);
                      }
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
  let heart = section.querySelectorAll(".heart-btn");
  heart.forEach((heart)=>{

    heart.addEventListener("click",(e)=>{
      let target = heart.parentElement.parentElement.parentElement;
      target.classList.toggle("selected");
      
      heart.addEventListener("click",()=>{
       let icon = target.parentElement.parentElement.parentElement.querySelector("i.far");

     
         
        
  
       
     })
    })
  })
  let audio_element = section.querySelectorAll("audio");
  for(let i = 0,len = audio_element.length;i < len;i++){
    if(audio_element[i].ended){
      audio_element[i + 1].play();
    }
  }
    let icon = section.querySelectorAll("i.far");
    icon.forEach((icon)=>{
      icon.addEventListener("click",()=>{
        if(icon.classList.contains("far","fa-heart")){
          icon.classList.remove("far","fa-heart");
          icon.classList.add("fas","fa-heart");
        }
        else{
          icon.classList.remove("fas","fa-heart");
          icon.classList.add("far","fa-heart")
        }
      })
    })
}
/* function displayPlaylist(audios){
  
  
  let playlist_audio = playlist.querySelector("audio");
  audio.forEach((audio)=>{
    if (audio.classList.contains("selected")) {
      playlist_audio.src = audio.src;
      console.log(playlist_audio.src);
      console.log("magic");
    }
  })

} */
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
      if (category === "BUSINESS") {
        section.innerHTML += `<button class="more">More</button>`;
        section.querySelector(".more").addEventListener("click", () => {
          displayAudios(business);
        });
      }
      if (category === "SONGS") {
        section.innerHTML += `<button class="more">More</button>`;
        section.querySelector(".more").addEventListener("click", () => {
          displayAudios(songs);
        });
      }
      if (category === "ELEMENTARY") {
        section.innerHTML += `<button class="more">More</button>`;
        section.querySelector(".more").addEventListener("click", () => {
          displayAudios(elementary);
        });
      }
      if (category === "STORIES") {
        section.innerHTML += `<button class="more">More</button>`;
        section.querySelector(".more").addEventListener("click", () => {
          displayAudios(stories);
        });
      }
    });
  });
}/* 
let playlist_btn = document.querySelector(".playlist-btn");
let playlist = document.querySelector("section.playlist");

playlist_btn.addEventListener("click",()=>{
  playlist.classList.toggle("open-playlist");
  
  displayPlaylist(podcasts)
})
 */
