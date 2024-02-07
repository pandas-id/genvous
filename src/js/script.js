const playAudio = document.getElementById('play-audio')
const bukaUndangan = document.getElementById('buka-undangan')
const audio = document.getElementById('backsound')

playAudio.addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
})

bukaUndangan.addEventListener('click', () => {
    audio.play()
})
