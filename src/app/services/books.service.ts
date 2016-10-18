import { Injectable }     from '@angular/core';
import { Http,
         Response,
         Headers,
         RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs';

@Injectable()
export class BooksService {
  private API_URL = 'https://api.gitbook.com/';
  private TOKEN = 'Bearer h6ilula6oaw9x59c175pp4dy58wveqbmnlft0o0ghxcqicx7y0c0g1ovn7q7loev';
  private headers = new Headers({ 'Authorization': this.TOKEN });
  private options = new RequestOptions({ headers: this.headers });
  public books: any = [];
  constructor(private _http: Http) {}

  getBooks() {
    return this._http.get(`${this.API_URL}books`, this.options)
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe(res => {
        this.books = res;
      })
  }

  getBook(id) {
    return this._http.get(`${this.API_URL}book/ivanstrelcov/${id}`, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getBookContent(id) {
    return this._http.get(`${this.API_URL}book/${id}/contents`, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getBookChapter(id, chapter) {
    return this._http.get(`${this.API_URL}book/${id}/contents/${chapter}`, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    if (body.list) {
      return body.list;
    }
    return body;
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
