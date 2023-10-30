import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from 'src/sevices/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit,OnDestroy {

  errorMessage:string=""
  subscription:Subscription=new Subscription()
  imagePrefix:string="https://image.tmdb.org/t/p/w500"
  movies:any[]=[]
  constructor(private _context:MoviesService) {}
  ngOnInit(): void {
   this.subscription =this._context.getMovies().subscribe({
      next:(data)=>this.movies=data.results,
      error:(error)=>this.errorMessage=error.message
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
