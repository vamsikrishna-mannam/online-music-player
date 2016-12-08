var songs = ["Padahaarellainaa.mp3",
             "Pilla O Pilla.mp3",
             "Yerraa Yerraa Cheera.mp3"
];

var songTitle = document.getElementById('song');
var songslider = document.getElementById('songslider');
var currenttime = document.getElementById('currenttime');
var totaltime = document.getElementById('totaltime');
var volumeslider = document.getElementById('volumeslider');
var nextsong = document.getElementById('nextsong');

var song = new Audio();
var currentsong = 0;


window.onload = load();

function load() {
    song.src = "songs/" + songs[currentsong];
    songTitle.textContent = (currentsong + 1) + "." + songs[currentsong];
    song.playbackRate = 1;
    nextsong.innerHTML = "<b>Next Song: </b>" + songs[(currentsong + 1) % songs.length];
    song.volume = volumeslider.value;
    song.play();
    setTimeout(duration, 1000);
}

setInterval(update, 1000);
function update() {
    var c = Math.round(song.currentTime);
    songslider.value = c;
    currenttime.textContent = convert(c);
    if (song.ended) {
        next();
    }
}
function convert(secs) {
    var min = Math.floor(secs / 60);
    var sec = secs % 60;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    return (min + ":" + sec);
}
function duration() {

    var d = Math.floor(song.duration);
    songslider.setAttribute("max", d);
    totaltime.textContent = convert(d);
}

function playpause(img) {
    song.playbackRate = 1;
    if (song.paused) {
        song.play();
        img.src = "images/pause.png";
    }
    else {
        song.pause();
        img.src = "images/play.png";
    }
}

function next() {
    currentsong = (currentsong + 1) % songs.length;
    load();
}
function previous() {
    currentsong = (currentsong - 1 + songs.length) % songs.length;
    load();

}

function changesong() {
    song.currentTime = songslider.value;
    currenttime.textContent = convert(song.currentTime);
}

function changevolume(){
    song.volume = volumeslider.value;
}

function forward() {
    song.playbackRate += 0.5;
}

function backward() {
    song.playbackRate -= 0.5;
}