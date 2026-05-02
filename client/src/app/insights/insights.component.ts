import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FollowService } from '../_services/follow.service';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { MemberCardComponent } from "../members/member-card/member-card.component";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { setPaginatedResponse } from '../_services/paginationHelper';

@Component({
  selector: 'app-insights',
  imports: [FormsModule, ButtonsModule, MemberCardComponent, MemberCardComponent, PaginationModule],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css'
})
export class InsightsComponent implements OnInit,OnDestroy {
  likesService = inject(FollowService);
  predicate = 'followed';
  pageNumber = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.loadFollowers();
  }

  getTitle(){
    switch (this.predicate){
      case 'followed': return 'Members you follow';
      case 'followedBy': return 'Members who follow you';
      default: return 'Mutual';
    }
  }

  loadFollowers(){
    this.likesService.getFollow(this.predicate, this.pageNumber, this.pageSize).subscribe({
      next: response => setPaginatedResponse(response, this.likesService.paginatedResult)
    })
  }

  pageChanged(event: any){
    if(this.pageNumber !== event.page){
      this.pageNumber = event.page;
      this.loadFollowers();
    }
  }

  ngOnDestroy(): void {
    this.likesService.paginatedResult.set(null);
  }
}
