const salesAllMocks = [
  {
    saleId: 1,
    date: '2023-01-19T02:46:35.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: '2022-01-19T02:46:35.000Z',
    productId: 2,
    quantity: 10,
  },
];

const salesByIdMock = [
  {
    saleId: 1,
    date: '2021-01-19T02:46:35.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: '2024-01-19T02:46:35.000Z',
    productId: 2,
    quantity: 10,
  },
];

const salesPostMockReturn = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

const salesPostmockEnv = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const salesResultHeader = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 5,
  info: '',
  serverStatus: 2,
  warningStatus: 0,
};

module.exports = { salesAllMocks, 
  salesByIdMock,
  salesPostMockReturn,
  salesPostmockEnv,
  salesResultHeader };