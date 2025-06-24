import { Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { Member } from '../../_models/member';
import { RouterLink } from '@angular/router';
import { FollowService } from '../../_services/follow.service';
import { PresenceService } from '../../_services/presence.service';

@Component({
  selector: 'app-member-card',
  imports: [RouterLink],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css',

})
export class MemberCardComponent {
  private likeService = inject(FollowService);
  private presenceService = inject(PresenceService);

  // member is a signal: needs to be called like so member() to access its properties
  member = input.required<Member>();
  hasLiked = computed(() => this.likeService.followIds().includes(this.member().id));
  isOnline = computed(() => this.presenceService.onlineUsers().includes(this.member().username));

  toggleLike(){
    this.likeService.toggleFollow(this.member().id).subscribe({
      next: () => {
        if(this.hasLiked()){
          this.likeService.followIds.update(ids => ids.filter(x => x !== this.member().id))
        }
        else {
          this.likeService.followIds.update(ids => [...ids, this.member().id])
        }
      }
    })
  }
}
