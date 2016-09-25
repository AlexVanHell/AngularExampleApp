import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { Song } from './song'; 

@Component({
	selector: 'app-componente3',
	templateUrl: './spotify.component.html',
	styleUrls: ['./spotify.component.css'],
	providers: [SpotifyService]
})

export class SpotifyComponent{

	songs: Song[];

	constructor(private spotifyService: SpotifyService){}

	songAudio = new Audio;
	cancion = null;

	search(song){
		this.spotifyService.getSong(song)
			.subscribe( songs => this.songs = songs )
	}

	play(song){
		this.cancion = song;
		this.songAudio.src = song.preview_url;
		this.songAudio.play();
	}

	pause(song){
		this.songAudio.pause();
	}

}