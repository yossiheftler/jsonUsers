import { Component, OnInit, OnDestroy,AfterViewChecked,
AfterContentChecked, } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from '../../services/post.service';
import { AlbumService } from '../../services/album.service';
import { Album } from 'src/app/model/album';
import { LocationService } from '../../services/location.service';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {



  post: Post[] = []
  album: Album[] = []
  private intervalNumber:number
  index = 0
  indexMax = 9
  constructor(public postSvc: PostService, public albumSvc: AlbumService, public locationSvc: LocationService,
    public commentssrv:CommentsService
  ) { }


  ngOnInit() {
    this.postSvc.getLastPost()
      .subscribe(d => {
        this.post = d
        let postIds:number[]= d.map(postim =>postim.id)

        this.commentssrv.getCommentForPosts(postIds)
        .subscribe(allComments =>{

          this.post.forEach(posted => 
            posted.comments = allComments.filter(comm => comm.postId == posted.id));
            console.log('allComments',allComments);
            
        });
      });

    this.albumSvc.getLastAlbum()
      .subscribe(d => {
        this.album = d
        this.index= d.length -1
        setTimeout(() => this.showItem(),1000);

        this.intervalNumber = window.setInterval(() =>{
        this.showItem()}, 3000);
         console.log('album:', this.album)
         
      });
      
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalNumber) 
  }

  showItem() {
    let hideli = document.querySelectorAll('.liOne')[this.index]
    hideli.className = 'liOne'
    if (this.index >= this.indexMax) {
       this.index = -1
    }
    let showli = document.querySelectorAll('.liOne')[++this.index]
    showli.className = 'liOne show'
  }
 
  
}








