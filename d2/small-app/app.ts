import Random, { pi, phi } from './maths';
import { Post, Penguin, Dog } from './utils';
import { posts } from '../data/posts.json';

const random = new Random();
console.log(random.get() + pi * phi);

type Animals = Penguin | Dog;

const gromit: Dog = {
  breeds: ['plasticene', 'silicone'],
  yearOfBirth: 1991,
};

const feathers: Penguin = {
  breed: 'rock-hopper',
  yearOfBirth: 1998,
};

const blogPosts: Post[] = posts;

console.log(blogPosts[0].title);
