import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class JsonFilesService {
    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get('../assets/data/data.json');
    }
    
}