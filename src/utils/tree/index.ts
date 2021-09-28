export interface Tree {
    id: number
    title: string
    children?: Tree[]
}

export const tree: Tree = {
  id: 1,
  title: 'ID_1',
  children: [
    {
      id: 2,
      title: 'ID_2',
      children: [
        {
          id: 3,
          title: 'ID_3',
          children: [
            {
              id: 7,
              title: 'ID_7',
            },
            {
              id: 8,
              title: 'ID_8',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'ID_4',
      children: [
        {
          id: 5,
          title: 'ID_5',
        },
        {
          id: 6,
          title: 'ID_6',
        },
      ],
    },
  ],
};

export interface BinaryTree {
  value: number,
  left: BinaryTree | null
  right: BinaryTree | null
}

export const bTree: BinaryTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};
