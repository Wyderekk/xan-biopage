function playAudioAndVideo() {
    var audio = document.getElementById('audio');
    var video = document.getElementById('video');
    video.volume = 0;

    if (audio && video) {
        setTimeout(function () {
            audio.play();
        }, 50);
        video.play();
    }
}

window.addEventListener('load', playAudioAndVideo);