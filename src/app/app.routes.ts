import { WeafomeComponent } from './weafome/weafome.component';
import { Componente3Component } from './componente3/componente3.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { AlumnosApiComponent } from './alumnos-api/alumnos-api.component';

export const APP_ROUTES = [
	{
		path: '',
		component: WeafomeComponent
	},
	{
		path: 'Alumnos',
		component: WeafomeComponent
	},
	{
		path: 'Productos',
		component: Componente3Component
	},
	{
		path: 'Spotify',
		component: SpotifyComponent
	},
	{
		path: 'AlumnosApi',
		component: AlumnosApiComponent
	}

];