import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FollowService } from '../_services/follow.service';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { MemberCardComponent } from "../members/member-card/member-card.component";
import { PaginationModule } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-insights',
  imports: [FormsModule, ButtonsModule, MemberCardComponent, MemberCardComponent, PaginationModule],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css'
})
export class InsightsComponent implements OnInit,OnDestroy {
  likesService = inject(FollowService);
  predicate = 'liked';
  pageNumber = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.loadLikes();
  }

  getTitle(){
    switch (this.predicate){
      case 'liked': return 'Members you like';
      case 'likedBy': return 'Members who like you';
      default: return 'Mutual';
    }
  }

  loadLikes(){
    this.likesService.getFollow(this.predicate, this.pageNumber, this.pageSize);
  }

  pageChanged(event: any){
    if(this.pageNumber !== event.page){
      this.pageNumber = event.page;
      this.loadLikes();
    }
  }

  ngOnDestroy(): void {
    this.likesService.paginatedResult.set(null);
  }
}
