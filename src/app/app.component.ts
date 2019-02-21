import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'blogular';
  
  posts: Array<Post> = [
    {
      title: "Apprendre à coder avec JavaScript",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta id sunt nam vitae ut voluptatibus consequatur laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta id sunt nam vitae ut voluptatibus consequatur...",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Est-il nécessaire d'avoir des diplômes pour... ?",
      content: "Est-il nécessaire d'avoir des diplômes pour devenir un développeur web ? Nam vitae ut voluptatibus consequatur laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta id sunt nam vitae ut voluptatibus consequatur...",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Pourquoi créer un site internet ?",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta id sunt nam vitae ut voluptatibus consequatur laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta id sunt nam vitae ut voluptatibus consequatur...",
      loveIts: 0,
      created_at: new Date()
    }
  ];

  demo(){
    alert("Il s'agit ici d'une demo. Veillez utiliser les pouces Like/UnLike !");
  }

}

interface Post{
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;
}
