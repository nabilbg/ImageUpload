import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Post } from './post.model'

//Will same for all instances
@Injectable({providedIn:'root'})
export class PostService {
  //immutable post array
  private posts: Post[] = [];
  private postsEmiiter = new Subject<Post[]>();

  getPosts() {
  //It will copied and will not reference to the memory address from origin elements and will not effect from original array
    return [...this.posts];
  }

  getPostUpdate(){
    return this.postsEmiiter.asObservable();
  }

  addPost(title: string, body: string){
    const post: Post ={title: title, body: body};
    this.posts.push(post);
    this.postsEmiiter.next([...this.posts]);
  }
}
