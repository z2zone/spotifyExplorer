import { Component } from '@angular/core';
import { SpotifyServices } from '../../services/spotify.services';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers:[SpotifyServices]
})
export class SearchComponent {
    searchStr: string;
    constructor(private _spotifyServices:SpotifyServices){
    }
    searchMusic(){
        this._spotifyServices.searchMusic(this.searchStr) //takes in a string
            .subscribe(res => { // obesrvable
                console.log(res.artists.items);
            })
    }
}
