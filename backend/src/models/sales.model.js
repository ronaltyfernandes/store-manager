const camelize = require('camelize');
const connection = require('./connection.model');

const findAll = async () => { 
  const [result] = await connection.execute(`
  SELECT sales_products.sale_id, sales.date, sales_products.product_id, sales_products.quantity
  FROM sales INNER JOIN sales_products ON sales.id = sale_id 
  ORDER BY sale_id, product_id `);
  return camelize(result);
};

const findById = async (id) => { 
  const [result] = await connection.execute(`
  SELECT sales.date, sales_products.product_id, sales_products.quantity
  FROM sales INNER JOIN sales_products ON sales.id = sale_id 
  WHERE sale_id= ?
  ORDER BY sale_id, product_id `, [id]);
  return camelize(result);
};

const insert = async (valores) => {
  const [{ insertId }] = await connection.execute('INSERT INTO sales () VALUES ();');
  await Promise.all(
    valores.map(async (data) => connection.execute(
      'INSERT INTO sales_products (sale_id,product_Id, quantity ) VALUES (?,?,?)',
      [insertId, data.productId, data.quantity],
    )),
  );
  return { id: insertId };
};

module.exports = {
  findAll,
  findById,
  insert,
};