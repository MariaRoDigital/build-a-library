class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut
  }
  get ratings() {
    return this._ratings.length;
  }
  getAverageRating() {
    if (this._ratings.length === 0) return 0;
    const sum = this._ratings.reduce((acc, curr) => acc + curr, 0);
    return sum / this._ratings.length;
  }
  toggleCheckoutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  addRating(rating) {
    if (rating > 5) {
      console.log('invalid rating');
      return 'rating must be between 1 and 5';
    }
    this._ratings.push(rating);
  }
};

class Book extends Media {
  constructor(title, author, pages, genre) {
    super(title);
    this._author = author;
    this._pages = pages;
    this._genre = genre;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
  get genre() {
    return this._genre;
  }
};

class Movie extends Media {
  constructor(title, director, runTime, movieCast) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = [];
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  get movieCast() {
    return this._movieCast;
  }
};

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  shuffle() {
    const songsArrayCopy = this._songs.map((song) => song);
    const getRandomNum = (arr) => {
      return Math.floor(Math.random() * arr.length)
    };

    let shuffledSongs = [];
    let filtSongCopyArray;

    const getRandomSong = () => {
      let randomNum;

      do {
        randomNum = getRandomNum(songsArrayCopy)
      } while (shuffledSongs.includes(songsArrayCopy[randomNum]));

      shuffledSongs.push(songsArrayCopy[randomNum]);
      filtSongCopyArray = songsArrayCopy
        .filter((song) => song !== songsArrayCopy[randomNum]);
    };
    songsArrayCopy.forEach((song) => {
      getRandomSong();
    });
    return shuffledSongs;
  };
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
// historyOfEverything.toggleCheckoutStatus();
// console.log(historyOfEverything.isCheckedOut);
// historyOfEverything.addRating(4, 5, 5);
// console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
// speed.toggleCheckoutStatus();
// console.log(speed.isCheckedOut);
// speed.addRating(1, 1, 5);
// console.log(speed.getAverageRating());

const weezer = new CD('Weezer (The Blue Album)', 'Weezer', ['My Name is Jonas', 'No One Else', 'The World Has Turned and Left Me Here', 'Buddy Holly', 'Undone - The Sweater Song', 'Surf Wax America', 'Say It Ain\'t So', 'In The Garage', 'Holiday', 'Only in Dreams']);

// console.log(weezer.songs);
// console.log(weezer.shuffle());

// constructor(title, director = "Unknown") {
//   this.title = title;
//   this.director = director;
// }

// Makes a new Catalog object using the template, and runs the constructor with no inputs
class Catalog {
  constructor() {
    this._media = []
  }
  get media() {
    return this._media;
  }
  addMedia(media) {
    this._media.push(media);
  }
};

const newCatalog = new Catalog();
newCatalog.addMedia(weezer);
console.log(newCatalog.media);