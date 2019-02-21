import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css'],
  host: {'class': 'col-sm-12 col-md-6 col-lg-4'}
})
export class PostListItemComponent implements OnInit {

  @Input() title : string;
  @Input() content : string;
  @Input() loveIts: number;
  @Input() created_at : Date;

  like = 0;
  unLike = 0;

  constructor() { }

  ngOnInit() {
  }

  setLike():void{
    this.like++;
    this.setLoveIts();
  }

  getLike():number{
    return this.like;
  }

  setUnLike():void{
    this.unLike++;
    this.setLoveIts();
  }

  getUnLike():number{
    return this.unLike;
  }

  setLoveIts():void{
    this.loveIts = this.like - this.unLike;
  }

  getLoveIts():number{
    return this.loveIts;
  }

  demo(){
    alert("Il s'agit ici d'une demo. Veillez utiliser les pouces Like/UnLike !");
  }

}
