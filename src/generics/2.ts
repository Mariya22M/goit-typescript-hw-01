type Top = { name: string } | { color: string };
type Bottom = { position: number } | { weight: number };

function combine<T extends Top, U extends Bottom>(top: T, bottom: U): T & U {
    return { ...top, ...bottom };
}


const result1 = combine({ name: "Hat" }, { position: 1 });
console.log(result1);

const result2 = combine({ color: "Red" }, { weight: 10 });
console.log(result2);
