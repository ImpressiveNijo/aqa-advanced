import { Book } from './Book.js';

export class EBook extends Book{
    constructor(name, author, year, fileFormat){
    super(name, author, year);
    this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat
    }
    set fileFormat(format) {
        if (format != "PDF" && format != "Epub") {
            throw new Error("Unsupported file format")
        }
        this._fileFormat = format
    }
    static createFromBook(book, fileFormat) {
        return new EBook(book.name, book.author, book.year, fileFormat)

    }
printInfo(){
    console.log(`[Книга]: ${this.name}, [Автор]: ${this.author}, [Рік видання]: ${this.year}, [Формат Файлу]: ${this.fileFormat}`);
}
}