CREATE TABLE products (
  id INT,
  name VARCHAR(255),
  slogan TEXT,
  description TEXT,
  category VARCHAR(255),
  default_price INT,
  PRIMARY KEY (id)
  );

COPY products FROM '/home/ubuntu/products/ELT_data/products.csv' DELIMITER ',' CSV HEADER;


-- const Product = sequelize.define('product', {
--   id: {
--     type: Sequelize.INTEGER,
--     primaryKey: true,
--     autoIncrement: true,
--   },
--   name:{
--     type: Sequelize.STRING
--   },
--   slogan:{
--     type: Sequelize.TEXT
--   },
--   description: {
--     type: Sequelize.TEXT
--   },
--   category: {
--     type: Sequelize.STRING
--   },
--   default_price:{
--     type: Sequelize.INTEGER
--   },
-- })

