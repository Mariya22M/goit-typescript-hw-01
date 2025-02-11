type Top = 'name' | 'color';
type Bottom = 'position' | 'weight';

interface SomeType<T extends Top, U extends Bottom> {
    top: T;
    bottom: U;
}

const obj1: SomeType<'name', 'position'> = {
    top: 'name',
    bottom: 'position',
};

const obj2: SomeType<'color', 'weight'> = {
    top: 'color',
    bottom: 'weight',
};
