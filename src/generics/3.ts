function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const obj1 = { name: 'Max', age: 25 };
const obj2 = { job: 'Developer', country: 'USA' };

const merged = merge(obj1, obj2);
console.log(merged);
