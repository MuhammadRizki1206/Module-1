class SongNode {
  constructor(songTitle) {
    this.songTitle = songTitle;
    this.next = null;
    this.prev = null;
  }
}

class Playlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  addSong(songTitle) {
    const newSong = new SongNode(songTitle);
    if (this.head === null) {
      this.head = this.tail = this.current = newSong;
    } else {
      this.tail.next = newSong;
      newSong.prev = this.tail;
      this.tail = newSong;
    }
  }
  playForward() {
    if (this.current === null) {
      console.log("Playlist is empty");
      return;
    }
    if (this.current.next === null) {
      console.log("This is a last song in playlist");
      return;
    }
    this.current = this.current.next;
    console.log("Playing song : ", this.current.songTitle);
  }
  playBackward() {
    if (this.current === null) {
      console.log("Playlist is empty");
      return;
    }
    if (this.current.prev === null) {
      console.log("This is a last song in playlist");
      return;
    }
    this.current = this.current.prev;
    console.log("Playing song : ", this.current.songTitle);
  }
}

const myPlaylist = new Playlist();
myPlaylist.addSong("song1.mp3");
myPlaylist.addSong("song2.mp3");
myPlaylist.addSong("song3.mp3");

myPlaylist.playForward();
myPlaylist.playForward();
myPlaylist.playBackward();
myPlaylist.playBackward();
