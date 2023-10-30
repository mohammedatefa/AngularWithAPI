import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/sevices/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit,OnDestroy{

  subscription:Subscription=new Subscription()
  errorMessege:string="";
  newslist:any[]=[]
  constructor(private _context:NewsService) {  }

  ngOnInit(): void {
    this.subscription=this._context.getnews().subscribe({
      next:(data)=>this.newslist=data.articles,
      error:(error)=>this.errorMessege=error.message
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
