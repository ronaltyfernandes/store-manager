const productAllMock = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];

const productByIdMock = [
  {
    id: 1,
    name: 'Traje de encolhimento',
  },
];

const productIsertMock = [
  {
    id: 1,
    name: 'Traje de encolhimento',
  },
  {
    id: 2,
    name: 'Traje',
  },
];

const returnIsertMockValue = {

  fieldCount: 0,
  affectedRows: 1,
  insertId: 4,
  info: '',
  serverStatus: 2,
  warningStatus: 0,
};

const returnSetHeaderInvalid = {
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  info: 'Rows matched: 0  Changed: 0  Warnings: 0',
  serverStatus: 2,
  warningStatus: 0,
  changedRows: 0,
};

module.exports = { productAllMock, 
  productByIdMock,
  productIsertMock,
  returnIsertMockValue,
  returnSetHeaderInvalid };