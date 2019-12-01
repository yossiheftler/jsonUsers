import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  myAlbum : Album[]=[]
  constructor( public albumSvc: AlbumService ) { }

  ngOnInit() {
    this.albumSvc.getAlbumsBySelectedUser()
    .subscribe(d =>this.myAlbum= d)
    console.log(this.myAlbum);
    
  }

}
