type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType>(top: T, bottom: T): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topItem = {
  name: 'Item 1',
  position: 1,
  color: 'red',
  weight: 10,
};

const bottomItem = {
  name: 'Item 2',
  position: 2,
  color: 'blue',
  weight: 20,
};

const result = compare(topItem, bottomItem);
console.log(result);

