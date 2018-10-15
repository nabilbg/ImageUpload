import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent{
  enteredTitle='';
  enteredBody=""
  //Listen to the event from user input
  @Output() postCreated = new EventEmitter();
  onAddPost(){
    const post = {
      title: this.enteredTitle,
      body: this.enteredBody
    }
    this.postCreated.emit(post);
  }
}
