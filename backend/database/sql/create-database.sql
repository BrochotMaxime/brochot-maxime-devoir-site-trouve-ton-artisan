-- Création de la base de données "trouve_on_artisan"

CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
        CHARACTER SET utf8mb4
        COLLATE utf8mb4_unicode_ci;

-- Utilisatio de la base de données "trouve_on_artisan"

USE trouve_ton_artisan;

-- Création des tables

DROP TABLE IF EXISTS artisan, specialite, categorie;

CREATE TABLE categorie (
        id_categorie INT AUTO_INCREMENT PRIMARY KEY,
        nom_categorie VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE specialite (
        id_specialite INT AUTO_INCREMENT PRIMARY KEY,
        nom_specialite VARCHAR(50) NOT NULL,
        id_categorie INT NOT NULL,

        CONSTRAINT fk_specialite_categorie
                FOREIGN KEY (id_categorie)
                REFERENCES categorie(id_categorie)
                ON DELETE RESTRICT
                ON UPDATE CASCADE
);

CREATE TABLE artisan (
        id_artisan INT AUTO_INCREMENT PRIMARY KEY,
        nom_artisan VARCHAR(100) NOT NULL,
        note_artisan DECIMAL(2,1) NOT NULL,
        ville_artisan VARCHAR(50) NOT NULL,
        a_propos TEXT,
        email VARCHAR(100) NOT NULL,
        site_web VARCHAR(100),
        image VARCHAR(255),
        top_artisan BOOLEAN NOT NULL DEFAULT FALSE,
        id_specialite INT NOT NULL,

        CONSTRAINT chk_note_artisan
                CHECK (note_artisan >= 0 AND note_artisan <= 5),

        CONSTRAINT fk_artisan_specialite
                FOREIGN KEY (id_specialite)
                REFERENCES specialite(id_specialite)
                ON DELETE RESTRICT
                ON UPDATE CASCADE
);