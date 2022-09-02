import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs/dist/types";

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http: HttpClient) { }
  download(url: string): Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob'
    });
  }
}
