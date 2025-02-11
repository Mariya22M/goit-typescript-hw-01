type TopType = 'name' | 'color';
type BottomType = 'position' | 'weight';

interface SomeType<T extends TopType, U extends BottomType> {
    top: T;
    bottom: U;
}

const topObj1: SomeType<'name', 'position'> = {
    top: 'name',
    bottom: 'position',
};

const topObj2: SomeType<'color', 'weight'> = {
    top: 'color',
    bottom: 'weight',
};
