import { Song } from './song';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
	constructor(private http: Http) {}

	getSong(song){
		return this.http.get(`https://api.spotify.com/v1/search?type=track&q=${song}&market=MX`)
			.map( response => <Song[]> response.json().tracks.items )
	}

}