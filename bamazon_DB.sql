DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(150) NOT NULL,
    department_name VARCHAR(150) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baby Yoda", "Toys & Games", 25, 49),
("Echo Dot", "Bamazon Devices", 25, 32),
("Paint Brush Set", "Arts, Crafts & Sewing", 15, 54),
("Snow Brush", "Automotive", 16, 24),
("65 Piece Hair Scrunchies", "Beauty & Personal Care", 20, 55),
("The Return", "Books", 28, 42),
("Apple AirPods Pro", "Cell Phones & Accessories", 250, 15),
("Dyson AirWrap Styler", "Home & Kitchen", 550, 7),
("Game of Thrones S1-S8", "Movies & TV", 165, 19),
("Disney Frozen 2 Elsa Doll", "Toys & Games", 19, 40),
("Cards Against Humanity", "Toys & Games", 25, 70),
("Ring Video Doorbell 2", "Electronics", 130, 12),
("Fujifilm Instax Mini 9 Instant Camera", "Camera & Photo", 50, 28),
("Nintendo Switch Pro Controller", "Video Games", 59, 22),
("Dad Jokes: Terribly Good Dad Jokes", "Books", 7, 67),
("Apple iPhone 11", "Cell Phones & Accessories", 700, 5),
("AncestryDNA: Genetic Ethnicity Test", "Health & Household", 59, 15),
("Tile Pro (2 pack)", "Electronics", 50, 16),
("WHAT DO YOU MEME? Party Game", "Toys & Games", 30, 50),
("Hydro Flask Wide Mouth Water Bottle", "Sports & Outdoors", 60, 43);

SELECT * FROM products