const camelize = require('camelize');
const connection = require('./connection.model');

const findAll = async () => { 
  const [result] = await connection.execute(' SELECT * FROM products ORDER BY id');
  return camelize(result);
};

const findById = async (id) => { 
  const [result] = await connection.execute(
    ' SELECT * FROM products WHERE id = ? ORDER BY id', 
    [id],
  );
  return camelize(result) || false;
};

const insert = async (name) => {
  const [result] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );
  return camelize(result.insertId) || false;
};

module.exports = {
  findAll,
  findById,
  insert,
};