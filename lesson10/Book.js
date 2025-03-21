export class Book {
  constructor(name, author, year) {
      this._name = name;
      this._author = author;
      this._year = year;
    }
    get name() {
        return this._name;
    }

  set name(newName) {
    if (typeof newName !== 'string') {
        throw new Error("Enter the correct value for name");
    }
    this._name = newName;
    }

    get author() {
        return this._author;
    }

  set author(newAuthor) {
      if (typeof newAuthor !== 'string') {
          throw new Error("Enter the correct value for author");
      }
      this._author = newAuthor;
  }

    get year() {
        return this._year;
    }

  set year(newYear) {
      if (typeof newYear === 'number') {
          throw new Error("Enter the correct value for year");
      }
      this._year = newYear;
  }

    static findOldestBooks(books) {
        let oldest = books[0]
        for (let book of books) {
            if (book.year < oldest.year) {
                oldest = book
            }
        }
        return oldest
    }


  printInfo() {
    console.log(`[Книга]: ${this.name}, [Автор]: ${this.author}, [Рік видання]: ${this.year}`);
  }
}