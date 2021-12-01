CREATE TABLE skus (
  id INT,
  styleId INT,
  size VARCHAR(10),
  quantity INTEGER,
  PRIMARY KEY (id)
);


COPY skus FROM '/home/ubuntu/products/ELT_data/skus.csv' DELIMITER ',' CSV HEADER;
CREATE INDEX skus_styleId_index ON skus ("styleId");

ALTER TABLE skus RENAME COLUMN "styleid" TO "styleId";

-- const Sku = sequelize.define('sku', {
--   id: {
--     type: Sequelize.INTEGER,
--     primaryKey: true,
--     autoIncrement: true,
--   },
--   styleId:{
--     type: Sequelize.INTEGER
--   },
--   size:{
--     type: Sequelize.STRING(10)
--   },
--   quantity: {
--     type: Sequelize.INTEGER
--   },
-- }, { timestamps: false})