CREATE TABLE photos (
  id INT,
  styleId INT,
  url TEXT,
  thumbnail_url TEXT,
  PRIMARY KEY (id)
);

COPY photos FROM '/home/ubuntu/products/ELT_data/photos.csv' DELIMITER ',' CSV HEADER;
CREATE INDEX styleId_index ON photos ("styleId")
--

--Seems that postgres performed a lower case on styleId to styleid when creating the table
--this will affect the current sequelize model
ALTER TABLE photos RENAME COLUMN "styleid" TO "styleId";

-- ALTER TABLE table_name
-- RENAME COLUMN column_name TO new_column_name;

-- const Photo = sequelize.define('photo', {
--   id: {
--     type: Sequelize.INTEGER,
--     primaryKey: true,
--     autoIncrement: true,
--   },
--   styleId:{
--     type: Sequelize.INTEGER
--   },
--   url:{
--     type: Sequelize.TEXT
--   },
--   thumbnail_url: {
--     type: Sequelize.TEXT
--   },
-- }, { timestamps: false})