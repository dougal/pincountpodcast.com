var pincountPlayer = (function(){

  var playerEl, audioEl, playPauseEl, currentTimeEl, totalTimeEl, progressContEl, progressBarEl
  var isScrubbing = false

  var init = function() {
    // Event listener on play buttons.
    var playLinks = document.querySelectorAll('.playLink')

    playLinks.forEach(function(link){
      link.addEventListener('click', playEpisode, false)
    })

    // Capture elements in variables for reuse.
    playerEl            = document.querySelector('.player')
    audioEl             = document.querySelector('.player audio')
    playPauseEl         = document.querySelector('.player .playPause')
    totalTimeEl         = document.querySelector('.player .totalTime')
    currentTimeEl       = document.querySelector('.player .currentTime')
    titleEl             = document.querySelector('.player .title')
    progressContainerEl = document.querySelector('.player .progressContainer')
    progressBarEl       = document.querySelector('.player .progressBar')

    // Event listener for play/pause button.
    playPauseEl.addEventListener('click', togglePlay, false)

    // Event listener for progress bar.
    progressContainerEl.addEventListener('mousedown', startDrag, false)
    progressContainerEl.addEventListener('mousemove', dragging, false)
    progressContainerEl.addEventListener('mouseup', seek, false)

    // Audio element event listeners.
    audioEl.addEventListener('loadedmetadata', setTotalTime)
    audioEl.addEventListener('canplaythrough', audioEl.play)
    audioEl.addEventListener('pause', updateUI)
    audioEl.addEventListener('play', updateUI)
    audioEl.addEventListener('timeupdate', updateUI)
  }

  var playEpisode = function(e) {
    e.preventDefault()

    var mp3Url       = e.target.attributes['data-mp3-url'].value
    var episodeTitle = e.target.attributes['data-title'].value

    // Check the episodes is not already playing.
    if (audioEl.src.match(mp3Url)) {
      return
    }

    // Set the episode title.
    titleEl.innerHTML = episodeTitle

    // Set the <audio> src.
    audioEl.src = mp3Url

    // Start the audio playing.
    audioEl.play()

    // Show the player.
    playerEl.className += ' player-active'
  }

  var togglePlay = function(e){
    e.preventDefault()
    audioEl.paused ? audioEl.play() : audioEl.pause()
  }

  var startDrag = function(e) {
    e.preventDefault()

    isScrubbing = true
  }

  var dragging = function(e) {
    e.preventDefault()

    if (!isScrubbing) { return }

    doSeek(e)
  }

  var seek = function(e) {
    e.preventDefault()

    isScrubbing = false
    doSeek(e)
  }

  var doSeek = function(e) {
    // Take width from the container, not the target, as target can be the
    // progress bar if seeking backwards.
    var timeToSeekTo = audioEl.duration * e.offsetX / progressContainerEl.getBoundingClientRect().width

    audioEl.currentTime = timeToSeekTo
  }

  var updateUI = function(e) {
    // Play/Pause button text.
    playPauseEl.innerHTML = audioEl.paused ? 'Play' : 'Pause'

    // Current time.
    currentTimeEl.innerHTML = niceTime(audioEl.currentTime)

    // Seek position.
    progressBarEl.style.width = (100 * audioEl.currentTime / audioEl.duration) + '%'
  }

  var setTotalTime = function(e) {
    totalTimeEl.innerHTML = niceTime(audioEl.duration)
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

window.onload =  pincountPlayer.init()
