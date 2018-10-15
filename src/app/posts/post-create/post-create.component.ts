import { Component } from '@angular/core'

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent{
  enteredPost='';
  newPost="No Comment"

  onAddPost(){
    this.newPost = this.enteredPost;
  }
}
