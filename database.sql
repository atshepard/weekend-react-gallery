CREATE TABLE "images" (
"id" SERIAL PRIMARY KEY,
"path" VARCHAR(120),
"description" VARCHAR(255),
"likes" INT
);

INSERT INTO "images"
("path", "description", "likes")
VALUES 
('images/IMG_0195.jpeg', 'Leo in a beer box', 0),
('images/IMG_0375.jpeg', 'Adam and Ashlyn at a Saints game', 0),
('images/IMG_0477.jpeg', 'The house we bought this year', 0),
('images/IMG_0490.jpeg', 'Nyx letting it all hang out', 0),
('images/IMG_0608.jpeg', 'Ash and Andie', 0),
('images/IMG_0661.jpeg', 'Adam has a handsome face.', 0),
('images/IMG_0666.jpeg', 'Adam has a handsome face, again', 0),
('images/IMG_0764.jpeg', 'Helios and Nyx', 0),
('images/IMG_0813.jpeg', 'Andie sits in the chair', 0),
('images/IMG_1047.jpeg', 'Andie sits on the couch', 0),
('images/IMG_1081.jpeg', 'Adam and Ash in San Diego', 0),
('images/IMG_1087.jpeg', 'Adam and Ash at Balboa Park', 0),
('images/IMG_1333.jpeg', 'Nyx under the holiday tree', 0),
('images/IMG_1429.jpeg', 'Ash and Helios', 0),
('images/IMG_1446.jpeg', 'Andie sits in the chair, again', 0)
;

-- I was very careful to keep the column names correct this time...