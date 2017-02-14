import { Component } from '@angular/core';
import{ SearchComponent } from './components/search/search.component';
import{ AboutComponent } from './components/about/about.component';
import{ SpotifyServices } from './services/spotify.services';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  entryComponents:[SearchComponent, AboutComponent],
  providers:[SpotifyServices]
})
export class AppComponent { }
