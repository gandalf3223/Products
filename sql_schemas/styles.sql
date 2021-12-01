CREATE TABLE styles (
  id INT,
  productId INT,
  name TEXT,
  sale_price VARCHAR(255),
  original_price INT,
  default_style BOOLEAN,
  PRIMARY KEY (id)
)

COPY styles FROM '/home/ubuntu/products/ELT_data/styles.csv' DELIMITER ',' CSV HEADER;
CREATE INDEX productId_index ON styles ("productId")


-- const Style = sequelize.define('style', {
--   id: {
--     type: Sequelize.INTEGER,
--     primaryKey: true,
--     autoIncrement: true,
--   },
--   productId:{
--     type: Sequelize.INTEGER,
--   },
--   name:{
--     type: Sequelize.TEXT
--   },
--   sale_price: {
--     type: Sequelize.STRING,
--     allowNull: true,
--   },
--   original_price: {
--     type: Sequelize.INTEGER
--   },
--   default_style:{
--     type: Sequelize.BOOLEAN
--   },
-- }, { timestamps: false})
