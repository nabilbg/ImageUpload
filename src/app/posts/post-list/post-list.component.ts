import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../post.model'
import { PostService } from '../post.service'
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})

export class PostListComponent implements OnInit {


//  posts = [
 //   { title: "First Post", content: "This is the first post's content" },
 //   { title: "Second Post", content: "This is the second post's content" },
 //   { title: "Third Post", content: "This is the third post's content" }
//  ]
  posts: Post[] = []
  private postsSubscription: Subscription;
  constructor(public postService: PostService) {}

  ngOnInit(){
    this.posts = this.postService.getPosts();
    this.postsSubscription = this.postService.getPostUpdate().subscribe((post: Post[]) =>{
      this.posts = post;
    })
   }

   ngOnDestroy(){
     this.postsSubscription.unsubscribe();
   }
}
