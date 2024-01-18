const connection = require('./connection.model');

const findAll = async () => { 
  const [result] = await connection.execute(' SELECT * FROM products');
  console.log(result);
  return result;
};

const findById = async (id) => { 
  const [result] = await connection.execute(' SELECT * FROM products WHERE id = ?', [id]);
  return result || false;
};

module.exports = {
  findAll,
  findById,
};