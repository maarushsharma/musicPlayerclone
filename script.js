console.log("Welcome to hindu tv");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif'); 
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Aarambh hai pranchand" , filePath: "songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma" , filePath: "songs/2.mp3" , coverPath: "covers/2.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]" , filePath: "songs/3.mp3" , coverPath: "covers/3.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release" , filePath: "songs/4.mp3" , coverPath: "covers/4.jpg"},
    {songName: "Rabba" , filePath: "songs/5.mp3" , coverPath: "covers/5.jpg"},
    {songName: "Sakhiyaan " , filePath: "songs/6.mp3" , coverPath: "covers/6.jpg"},
    {songName: "Bhula Dena" , filePath: "songs/7.mp3" , coverPath: "covers/7.jpg"},
    {songName: "Tumhari Kasam" , filePath: "songs/8.mp3" , coverPath: "covers/8.jpg"},
    {songName: "Na Jaana " , filePath: "songs/9.mp3" , coverPath: "covers/9.jpg"},
    {songName: "Aarambh hai pranchand" , filePath: "songs/10.mp3" , coverPath: "covers/10.jpg"},
]

songItem.forEach((element , i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//Handle play/pause
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-cicle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-cicle');
        gif.style.opacity=0;
    }
})

//Listen the event
audioElement.addEventListener('timeupdate' , ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
})


progressbar.addEventListener('change' , ()=>{
    audioElement.currentTime = progressbar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('SongListPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle'); 
    })
}

Array.from(document.getElementsByClassName('SongListPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-cicle');
    })
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>= 9){
        songIndex=0;
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-cicle');

})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<= 0){
        songIndex=0;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-cicle');

})

Array.from(document.getElementsByClassName('songListPlay')).forEach((element)=>{
    element.addEventListener('click' , (e) =>{
        if(audioElement.paused ){
            audioElement.resume();
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
        }else{
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
    })
})