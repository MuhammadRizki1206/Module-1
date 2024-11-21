class PhotoNode {
  constructor(photoUrl) {
    this.photoUrl = photoUrl;
    this.next = null;
  }
}

class Story {
  constructor() {
    this.head = null;
  }
  addPhoto(photoUrl) {
    const newPhoto = new PhotoNode(photoUrl);
    if (this.head === null) {
      this.head = newPhoto;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newPhoto;
    }
  }
  viewStory() {
    let current = this.head;
    if (current === null) {
      console.log("Story Not Found");
      return;
    }
    while (current !== null) {
      console.log("Vieweng Story : " + current.photoUrl);
      current = current.next;
    }
    console.log("You Have reached the end of the story");
  }
}

const myStory = new Story()
myStory.addPhoto("photo1.jpg")
myStory.addPhoto("photo2.jpg")
myStory.addPhoto("photo3.jpg")

myStory.viewStory()