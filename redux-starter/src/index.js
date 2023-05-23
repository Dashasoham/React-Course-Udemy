// import { compose, pipe } from 'lodash/fp';
import { produce } from 'immer';
import store from './store';
import { bugAdded, bugResolved } from './actions';

// const unsubscribed = store.subscribe(() => {
//   console.log('Store changed!', store.getState());
// });

console.log(store.dispatch(bugAdded('Bug 1')));
// console.log(store.getState());

console.log(store.dispatch(bugResolved(1)));
// unsubscribed();
// store.dispatch({ type: actions.BUG_REMOVED, payload: { id: 1 } });

// console.log('Hello World!');

// let input = 'Javascript';
// let output = input.split('').reverse().join('');

// const trim = (str) => str.trim();
// const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

// const toLower = (str) => str.toLowerCase();

// const transform = pipe(trim, toLower, wrap('div'));
// const result = transform(input);
// console.log(result);

// const person = {
//   name: 'John',
//   address: {
//     country: 'USA',
//     city: 'NY',
//   },
// };
// const updated = {
//   ...person,
//   name: 'Lila',
//   //   age: 30,
//   adress: { ...person.address, city: 'Oslo' },
// };
// updated.adress.city = 'Miami';

// console.log(person);

// const numbers = [1, 2, 3];

// const index = numbers.indexOf(2);
// const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

// const removed = numbers.filter((n) => n !== 2);

// const updated1 = numbers.map((n) => (n === 2 ? 20 : n));

// console.log(added);
// console.log(removed);
// console.log(updated1);

// let book = { title: 'Harry Potter  ' };

// console.log(book.get('title'));
// function publish(book) {
//   return produce(book, (draftBook) => {
//     draftBook.isPublished = true;
//     draftBook.game = 'on';
//   });
// }

// let updated = publish(book);

// console.log(updated);
