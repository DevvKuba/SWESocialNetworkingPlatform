import { User } from "./user";

export class UserParams {
  gender: string;
  minExperience = 1;
  maxExperience = 15;
  pageNumber = 1;
  pageSize = 5;
  orderBy = 'lastActive';

  // makes sure the opposite gender is set , from our current user
  // not utilized in refactor
  constructor(user: User | null){
    this.gender = user?.gender === 'female' ? 'male' : 'female'
  }
}