import { Component, OnInit } from '@angular/core';
import { Album } from '../../../model/album';
import { AlbumService } from 'src/app/services/album.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'panel-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  // albums:Album[] = []

  constructor(public svc:AlbumService, 
    private loc:LocationService) { }

   ngOnInit() {
  //   this.svc.getPostsBySelectedUser()
  //     .subscribe(data => this.albums = data)
   }

}
