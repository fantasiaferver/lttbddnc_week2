var musics = [
    {
        name: "Những Gì Anh Nói",
        artist: "BOZITT",
        img: "who",
        src: "NhungGiAnhNoi"
    },
    {
        name: "Cuộc Sống Em Ổn Không",
        artist: "Anh Tú bồ LyLy",
        img: "anhtu",
        src: "CuocSongEmOnKhong"
    },
    {
        name: "Yêu Thương Ngày Đó",
        artist: "Soobin Hoàng Sơn",
        img: "sobin_ytna",
        src: "YeuThuongNgayDo"
    },
    {
        name: "Nàng Ther",
        artist: "Hoàng Dũng",
        img: "hoangdung",
        src: "NangTho"
    },
    {
        name: "Double Take",
        artist: "dhruv",
        img: "dhruv",
        src: "DoubleTake"
    },
    {
        name: "HongKong1",
        artist: "Nguyễn Trọng Tài",
        img: "hongkong1",
        src: "HongKong1"
    },
    {
        name: "Buông Đôi Tay Nhau Ra",
        artist: "Sơn Tùng - MTP",
        img: "sontung",
        src: "BuongDoiTayNhauRa"
    },
    {
        name: "Họ Yêu Ai Mất Rồi",
        artist: "Doãn Hiếu",
        img: "doanhieu",
        src: "HoYeuAiMatRoi"
    },
    {
        name: "Giữ Lấy Làm Gì",
        artist: "Monstar",
        img: "monstar",
        src: "GiuLayLamGi"
    },
    {
        name: "PHÍA SAU MỘT CÔ GÁI",
        artist: "Soobin Hoàng Sơn",
        img: "sobin_ytna",
        src: "PhiaSauMotCoGai"
    },
    {
        name: "Tâm Sự Với Người Lạ",
        artist: "Tiên bánh quy",
        img: "tien",
        src: "TamSuVoiNguoiLa"
    },

]

const formPlayer = document.querySelector(".player-form");
musicImg = document.querySelector(".img-contain img"),
musicName = document.querySelector(".name-contain .name"),
musicArtist = document.querySelector(".artist-contain .artist");
musicAudio = document.querySelector("#main-audio");
btnPause = document.querySelector("#pause-btn");
btnNext = document.querySelector("#next-btn");
btnPrev = document.querySelector("#previous-btn");
timeBar = document.querySelector(".time-bar");
timeLine = document.querySelector(".time-line");
listMusic = document.querySelector(".list-music");
btnShowListMusic = document.querySelector("#more-music-btn");
btnHideListMusic = document.querySelector("#close-btn");
const ulTag = document.querySelector("ul");

var musicIndex = 0;

btnShowListMusic.addEventListener("click", () => {
    listMusic.classList.toggle("show-list-music");
})
btnHideListMusic.addEventListener("click", () => {
    listMusic.classList.remove("show-list-music");
})
window.addEventListener("load", () => {
    loadMusic(musicIndex);
});

function loadMusic(indexNum) {
    musicName.innerText = musics[indexNum].name;
    musicArtist.innerText = musics[indexNum].artist;
    musicImg.src = `../Image/${musics[indexNum].img}.jpg`;
    musicAudio.src = `../Media/${musics[indexNum].src}.mp3`;
}

function playMusic() {
    formPlayer.classList.add("paused");
    musicAudio.play();
}

function nextMusic() {
    musicIndex++;
    musicIndex >= musics.length ? musicIndex = 0 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

function prevMusic() {
    musicIndex--;
    musicIndex <= -1 ? musicIndex = musics.length-1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

function pausedMusic() {
    formPlayer.classList.remove("paused");
    musicAudio.pause();
}

btnPause.addEventListener("click", () => {
    const isMusicPaused = formPlayer.classList.contains("paused");
    isMusicPaused ? pausedMusic() : playMusic();
})

btnNext.addEventListener("click", () => {
    nextMusic();
    // playMusic();
    playingNow();
})

btnPrev.addEventListener("click", () => {
    prevMusic();
    // playMusic();
    playingNow();
})

musicAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    var timeWidth =  (currentTime / duration) * 100;
    timeBar.style.width = `${timeWidth}%`;
    var musicDurationTime = document.querySelector(".duration-time");
    var musicCurrentTime = document.querySelector(".current-time");
    musicAudio.addEventListener("loadeddata", () => {
    //return duration time
    var audioDuration = musicAudio.duration;
    var min = Math.floor(audioDuration / 60);
    var sec = Math.floor(audioDuration % 60);
    if(sec < 10) {
        sec = `0${sec}`;
    }
    musicDurationTime.innerText = `${min}:${sec}`;
    });
    //update current time
    var currentMin = Math.floor(currentTime / 60);
    var currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10) {
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
    if(currentTime == duration) {
        nextMusic();
        playingNow();
    }
})

timeLine.addEventListener("click", (e) => {
    var timeWidthValue = timeLine.clientWidth;
    var clickedOffSetX = e.offsetX;
    var songDuration = musicAudio.duration;
    musicAudio.currentTime = (clickedOffSetX / timeWidthValue) * songDuration;
    playMusic();
})

for(var i = 0; i < musics.length; i++) {
    var liTag = 
    `<li li-index = "${i}">
        <div class="row">
            <span>${musics[i].name}</span>
            <p>${musics[i].artist}</p>
        </div>
        <audio class="${musics[i].src}" src="../Media/${musics[i].src}.mp3"></audio>
        <span id="${musics[i].src}" class = "audio-duration"></span>
    </li>`;
    ulTag.insertAdjacentHTML("beforeend", liTag);
    //  var liAudioDuration = ulTag.querySelector(`#${musics[i].src}`);
    //  var liAudioTag = ulTag.querySelector(`.${musics[i].src}`);

    //      liAudioTag.addEventListener("loadeddata", () => {
    //     var audioDuration = liAudioTag.duration;
    //     var limin = Math.floor(audioDuration / 60);
    //     var lisec = Math.floor(audioDuration % 60);
    //     if(lisec < 10) {
    //         lisec = `0${lisec}`;
    //     }
    //     liAudioDuration.innerText = `${limin}:${lisec}`;
    // });
}

const allLiTags = ulTag.querySelectorAll("li");
for(var j = 0; j < allLiTags.length; j++) {
    if (allLiTags[j].getAttribute("li-index") == musicIndex) {
        allLiTags[j].classList.add("playing");
    }
    allLiTags[j].setAttribute("onclick", "clicked(this)");
}

function playingNow() {
    const allLiTags = ulTag.querySelectorAll("li");
for(var j = 0; j < allLiTags.length; j++) {
    var audioTag = allLiTags[j].querySelector(".audio-duration");
    if(allLiTags[j].classList.contains("playing")) {
        allLiTags[j].classList.remove("playing");
        audioTag.innerText = "";
    }
    if (allLiTags[j].getAttribute("li-index") == musicIndex) {
        allLiTags[j].classList.add("playing");
        audioTag.innerText = "Playing"
    }
    allLiTags[j].setAttribute("onclick", "clicked(this)");
}
}

function clicked(element) {
    var getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex;
    loadMusic(musicIndex);
    playMusic();
    playingNow();
}

