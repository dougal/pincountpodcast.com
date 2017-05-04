var pincountPlayer = (function(){

  var audioEl, playPauseEl, currentTimeEl, totalTimeEl

  var init = function() {
    // Event listener on play buttons.
    var playLinks = document.querySelectorAll('.playLink')

    playLinks.forEach(function(link){
      link.addEventListener('click', playEpisode, false)
    })

    // Capture elements in variables for reuse.
    audioEl       = document.querySelector('.player audio')
    playPauseEl   = document.querySelector('.player .playPause')
    totalTimeEl   = document.querySelector('.player .totalTime')
    currentTimeEl = document.querySelector('.player .currentTime')
    titleEl       = document.querySelector('.player .title')

    // Event listener for play/pause button.
    playPauseEl.addEventListener('click', togglePlay, false)

    // Audio element event listeners.
    audioEl.addEventListener('loadedmetadata', updateTotalTime)
    audioEl.addEventListener('canplaythrough', audioEl.play)
    audioEl.addEventListener('pause', updateUI)
    audioEl.addEventListener('play', updateUI)
    audioEl.addEventListener('timeupdate', updateUI)
  }

  var playEpisode = function(e) {
    e.preventDefault()

    // Set the episode title.
    var episodeTitle = e.target.attributes['data-title'].value
    titleEl.innerHTML = episodeTitle

    // Set the <audio> src.
    var mp3Url = e.target.attributes['data-mp3-url'].value
    audioEl.src = mp3Url
    audioEl.addEventListener('canplaythrough', audioEl.play)
  }

  var play = function() {
    audioEl.play()
  }

  var togglePlay = function(e){
    e.preventDefault()
    audioEl.paused ? audioEl.play() : audioEl.pause()
  }

  var updateUI = function(e) {
    playPauseEl.innerHTML = audioEl.paused ? 'Play' : 'Pause'
    updateCurrentTime()
  }

  var updateTotalTime = function(e) {
    totalTimeEl.innerHTML = niceTime(audioEl.duration)
  }

  var updateCurrentTime = function(e) {
    currentTimeEl.innerHTML = niceTime(audioEl.currentTime)
  }

  var niceTime = function(totalSeconds) {
    var hours   = Math.floor(totalSeconds / 3600)
    var minutes = Math.floor(totalSeconds % 3600 / 60)
    var seconds = Math.floor(totalSeconds % 60)

    var output = ''

    if (hours > 0) {
      output += hours + ':'
    }

    output += zeroPad(minutes) + ':' + zeroPad(seconds)

    return output
  }

  var zeroPad = function(number) {
    return number < 10 ? '0' + number : number
  }

  // Public methods.
  return {
    init: init,
    togglePlay: togglePlay
  }

})()

window.onload = pincountPlayer.init()
