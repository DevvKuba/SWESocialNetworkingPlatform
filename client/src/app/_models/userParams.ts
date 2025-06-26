import { User } from "./user";

export class UserParams {
  gender: string;
  minExperience = 1;
  maxExperience = 15;
  pageNumber = 1;
  pageSize = 5;
  orderBy = 'lastActive';

  constructor(user: User | null){
    this.gender = user?.gender === 'female' ? 'male' : 'female'
  }
}