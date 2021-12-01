CREATE TABLE relateds (
  id INT,
  current_product_id INT,
  related_product_id INT,
  PRIMARY KEY (id)
)

COPY relateds FROM '/home/ubuntu/products/ELT_data/related.csv' DELIMITER ',' CSV HEADER;
CREATE INDEX current_product_id_index ON relateds ("current_product_id")

-- const Related = sequelize.define('related', {
--   id: {
--     type: Sequelize.INTEGER,
--     primaryKey: true,
--     autoIncrement: true,
--   },
--   current_product_id:{
--     type: Sequelize.INTEGER
--   },
--   related_product_id:{
--     type: Sequelize.TEXT
--   },
-- },{ timestamps: false,})