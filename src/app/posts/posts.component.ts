import { BadInputError } from './../common/bad-input-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private postService: PostService) {}
  ngOnInit() {
    this.postService.getAll()
    .subscribe((posts) => this.posts = posts);
  }
  create(input: HTMLInputElement) {
    let post: any  = { title: input.value};
    this.posts.splice(0, 0 , post)
    input.value = '';

    this.postService.create(post)
    .subscribe((newPost) => {
      post.id = newPost.id;
    }
    ,(error: AppError) => {
      this.posts.splice(0,1);

      this.handlerPostsError(error);
    });
  }
  update(post: any) {
     /*this.postService.update(post)
     .subscribe(response => {
       console.log(response);
     });*/
     this.postService.update(post)
     .subscribe(response => 
       console.log(response)
     );
  }
  delete(post: any) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post.id)
    .subscribe(null,
    (error: AppError) =>{
      this.posts.splice(index, 0,post);
      this.handlerPostsError(error);
    });
  }
  private handlerPostsError(error: AppError){
    if(error instanceof NotFoundError)
      alert('the post has already been deleted');
    else if(error instanceof BadInputError)
      alert('BadRequest error..');
    else
      throw error;
  }
}
