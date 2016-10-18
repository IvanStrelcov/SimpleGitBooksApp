import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { DomSanitizer }      from '@angular/platform-browser';
import { BooksService }      from '../services';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
  private stream: any;
  private chapters: Array<any>;
  private currentChapter: number = 0;
  private isMute: boolean = false;
  public nextChapter: string;
  public book: any;
  public content: any;
  constructor(private _booksService: BooksService,
              private _activatedRoute: ActivatedRoute,
              private _domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getBook();
  }

  ngOnDestroy() {
    if (this.stream) this.stream.unsubscribe();
  }

  getBook() {
    this.stream = this._activatedRoute.params
      .map(params => params['book'])
      .subscribe( book => {
        this._booksService.getBook(book)
        .subscribe( book => {
          this.book = book;
          this._booksService.getBookContent(book.id)
          .subscribe( content => {
            this.chapters = content.progress.chapters;
            this.content = this._domSanitizer.bypassSecurityTrustHtml(content.sections[0].content);
          })
        })
      })
  }

  goNextChapter() {
    this.isMute = true;
    this.nextChapter = this.chapters[++this.currentChapter].path.replace('.md', '.json');
    this._booksService.getBookChapter(this.book.id, this.nextChapter)
      .subscribe( chapter => {
        let content = chapter.sections[0].content.replace(/(<\/?pre>)/g, '');
        content = content.replace(/(<\/?code>)/g, '');
        this.content = this._domSanitizer.bypassSecurityTrustHtml(content);
        window.scrollTo(0, 0);
        this.isMute = false;
      })
  }
  goPreviousChapter() {
    this.isMute = true;
    this.nextChapter = this.chapters[--this.currentChapter].path.replace('.md', '.json');
    this._booksService.getBookChapter(this.book.id, this.nextChapter)
      .subscribe( chapter => {
        let content = chapter.sections[0].content.replace(/(<\/?pre>)/g, '');
        content = content.replace(/(<\/?code>)/g, '');
        this.content = this._domSanitizer.bypassSecurityTrustHtml(content);
        window.scrollTo(0, 0);
        this.isMute = false;
      })
  }
}
