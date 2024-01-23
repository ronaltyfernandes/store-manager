const message = {
  notFond: 'notFond',
  NameIsrequired: '"name" is required',
  invalidName: '"name" length must be at least 5 characters long', 
  passagerNotFoud: 'Passenger not found',
  SalesNotFoud: 'Sales not found',
  productRequired: '"productId" is required',
  quantityRequired: '"quantity" is required', 
  invalidQuantity: '"quantity" must be greater than or equal to 1', 
  productNotFound: 'Product not found',

};

const statusNumbers = {
  ok: 200,
  postOk: 201,
  deleteOk: 204,
  erro: 400,
  erroServer: 404,
  erroInvalidValue: 422,
};

module.exports = {
  message, statusNumbers,
};