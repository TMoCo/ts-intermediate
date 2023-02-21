export interface Penguin {
  breed: string;
  yearOfBirth: number;
}

export type Dog = {
  breeds: string[];
  yearOfBirth: number;
};

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
