-- Up
CREATE TABLE IF NOT EXISTS Person (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
);

CREATE TABLE IF NOT EXISTS Vehicle (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT,
  model TEXT,
  ownerId INTEGER REFERENCES Person(id)
);


INSERT INTO Person ( name, email) VALUES ('Vladimir', 'angara99@gmail.com');
INSERT INTO Person ( name, email) VALUES ('Elena', 'angara1298@gmail.com');
INSERT INTO Person ( name, email) VALUES ('Vasya', 'angara1@gmail.com');
INSERT INTO Person ( name, email) VALUES ('Misha', 'angara1333@gmail.com');

INSERT INTO Vehicle (brand, model, ownerId) VALUES ('Audi', 'A8', 1);
INSERT INTO Vehicle (brand, model, ownerId) VALUES ('Porshe', 'Cayene', 1);
INSERT INTO Vehicle (brand, model, ownerId) VALUES ('Audi', 'A6', 2);
INSERT INTO Vehicle (brand, model, ownerId) VALUES ('Benz', 'ML450', 3);
INSERT INTO Vehicle (brand, model, ownerId) VALUES ('Benz', 'ML350', 4);


-- Down

DROP TABLE Person;
DROP TABLE Vehicle;
