const musicPlayer = {
    currentSong: null,
    volume: 50, // Default volume is set to 50%
    isPlaying: false,
  
    play: function () {
      if (this.currentSong) {
        this.isPlaying = true;
        console.log(`Now playing: ${this.currentSong}`);
      } else {
        console.log("No song selected. Please choose a song.");
      }
    },
  
    pause: function () {
      if (this.isPlaying) {
        this.isPlaying = false;
        console.log("Paused the music.");
      } else {
        console.log("The music is already paused.");
      }
    },
  
    changeSong: function (newSong) {
      if (newSong) {
        this.currentSong = newSong;
        if (this.isPlaying) {
          console.log(`Changing to ${newSong}...`);
          console.log(`Now playing: ${newSong}`);
        } else {
          console.log(`Selected song: ${newSong}`);
        }
      } else {
        console.log("Please provide a valid song name.");
      }
    },
  
    adjustVolume: function (newVolume) {
      if (newVolume >= 0 && newVolume <= 100) {
        this.volume = newVolume;
        console.log(`Volume adjusted to ${newVolume}%`);
      } else {
        console.log("Volume must be between 0 and 100.");
      }
    },
  };
  
  // Example usage:
  musicPlayer.changeSong("Song 1");
  musicPlayer.play();
  musicPlayer.adjustVolume(75);
  musicPlayer.pause();
  musicPlayer.changeSong("Song 2");
  musicPlayer.play();
  