const playAudio = document.getElementById('play-audio')
const audio = document.getElementById('backsound')

audio.play()
playAudio.addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
})
