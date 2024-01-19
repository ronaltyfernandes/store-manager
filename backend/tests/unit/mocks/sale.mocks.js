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
  {
    saleId: 2,
    date: '2024-02-19T02:46:35.000Z',
    productId: 3,
    quantity: 15,
  },
];

module.exports = { salesAllMocks, salesByIdMock };