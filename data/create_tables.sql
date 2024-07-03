-- SQLBook: Code
BEGIN;

DROP TABLE IF EXISTS "console_has_accessorie", "console", "accessorie", "game", "brand";

CREATE TABLE "brand" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL, 
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "console" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,  
  "name" TEXT NOT NULL,
  "image" TEXT NOT NULL,
  "brand_id" INTEGER NOT NULL,
  "description" TEXT NOT NULL,
  "date" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "game" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,  
  "name" TEXT NOT NULL,
  "image" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "machine" TEXT NOT NULL,
  "date" TEXT NOT NULL,
  "console_id" INTEGER NOT NULL REFERENCES "console"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);


CREATE TABLE "accessorie" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,  
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "image" TEXT NOT NULL,
  "console" TEXT NOT NULL,
  "date" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "console_has_accessorie" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "console_id" INTEGER NOT NULL REFERENCES "console"("id") ON DELETE CASCADE,
  "accessorie_id" INTEGER NOT NULL REFERENCES "accessorie"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ,
  UNIQUE ("console_id", "accessorie_id")
);

INSERT INTO "brand" ("name") VALUES
('Nintendo'),
('Sega'),
('Playstation'),
('Xbox');

INSERT INTO "console" ("name", "image", "brand_id", "description", "date") VALUES
('Nintendo NES', '/images/nes.png', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae ut quaerat tenetur. Voluptatum, molestias.', '05/04/1988'),
('Nintendo 64', '/images/n64.png', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae ut quaerat tenetur. Voluptatum, molestias.', '04/02/1988'),
('Master System', '/images/SegaMasterSystem.png', 2, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae ut quaerat tenetur. Voluptatum, molestias.', '04/02/1988'),
('Playstation 2', '/images/ps2.png', 3, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae ut quaerat tenetur. Voluptatum, molestias.', '01/10/2002'),
('Playstation 1', '/images/ps1.png', 3, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae ut quaerat tenetur. Voluptatum, molestias.', '01/10/1999');

INSERT INTO "game" ("name", "image", "description", "machine", "date", "console_id") VALUES
('Zelda', '/images/zelda1.png', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae ut quaerat tenetur. Voluptatum, molestias.', 'Nintendo NES', '01/05/1990', 1),
('Metal Gear Solid', '/images/metalgearsolid.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae ut quaerat tenetur. Voluptatum, molestias.', 'Playstation 1', '09/05/2001', 2),
('PES 6', '/images/pes6.png', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae ut quaerat tenetur. Voluptatum, molestias.', 'Playstation 2', '09/05/2002', 3),
('Crash Bandicoot', '/images/crashBandicoot.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae ut quaerat tenetur. Voluptatum, molestias.', 'Playstation 1', '01/05/1990', 3);

INSERT INTO "accessorie" ("name", "description","image", "console", "date") VALUES
('Manette PS1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae ut quaerat tenetur. Voluptatum, molestias.', '/images/manettePs1.jpg', 'Playstation 1', '15/08/1993'),
('Multitap PS2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae ut quaerat tenetur. Voluptatum, molestias.', '/images/multitapPs2.jpeg', 'Playstation 2', '15/08/2001'),
('Carte mémoire', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae ut quaerat tenetur. Voluptatum, molestias.', '/images/carteMemoirePs1.jpg', 'Playstation 1', '24/12/1994');

INSERT INTO "console_has_accessorie" ("console_id", "accessorie_id") VALUES
(1, 1),
(2, 2),
(1, 2);



COMMIT;