CREATE TABLE features (
  id INT,
  product_id INT,
  feature TEXT,
  value TEXT,
  PRIMARY KEY (id)
);

COPY features FROM '/home/ubuntu/products/ELT_data/features.csv' DELIMITER ',' CSV HEADER;
CREATE INDEX product_id_index ON features ("product_id")
-- const Feature = sequelize.define('feature', {
--   id: {
--     type: Sequelize.INTEGER,
--     primaryKey: true,
--     autoIncrement: true,
--   },
--   product_id:{
--     type: Sequelize.INTEGER
--   },
--   feature:{
--     type: Sequelize.TEXT
--   },
--   value: {
--     type: Sequelize.TEXT
--   },
-- }, { timestamps: false})