const container = document.querySelector('.container');

// if(navigator.mediaDevices.getUserMedia){
//     navigator.mediaDevices.getUserMedia({
//         video : true,
//     }).then(function (stream) {
//         video.srcObject = stream;
//     })
//     .catch(function (error){
//         console.log("algo esta mal")
//     })
// }

const myVideo = document.createElement('video');

myVideo.muted = true;

if(navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({
        video : true,
        audio : true,
    }).then(stream => {
        myVideo.srcObject = stream;
        

        myVideo.addEventListener('loadedmetadata', () => {
            myVideo.play()
        })
        container.append(myVideo)
    })
    .catch(function (error){
        console.log("algo esta mal")
    })
}

// navigator.mediaDevices.getUserMedia({
//     video: true,
//     audio: true
// }).then(stream => {
//     addVideoStream(myVideo, stream)
// });


// function addVideoStream(video, stream){
//     video.scrObject = stream ;
//     video.addEventListener('loadedmetadata', () => {
//         video.play()
//     })
//     container.append(video)
// }
