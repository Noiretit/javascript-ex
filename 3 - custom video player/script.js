const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video
const toggleVideoStatus = () => {
    // .paused, .pause y .play viene de la API del tag "video" en HTML
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
};

// Update the play/pause icon
const updatePlayIcon = () => {
    if(video.pause){
        play.innerHTML = '<i class="fa fa-play fa-2x></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x></i>';
    }
};

// Update progress bar & timestamp
const updateProgress = () => true;

// Set video time to progress
const setVideoProgress = () => true;

// Stop video
const stopVideo = () => {
    // Video has a prop called "currentTime"
    video.currentTime = 0;
    video.pause();
};

// Event listener
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);