-- Insertion des données

USE trouve_ton_artisan;

-- Ordre d'insertion selon les dépendances entre les tables :
-- 1. Table categorie
-- 2. Table specialite (dépend de categorie)
-- 3. Table artisan (dépend de specialite)

INSERT INTO categorie (id_categorie, nom_categorie) VALUES
        (1, 'Bâtiment'),
        (2, 'Services'),
        (3, 'Fabrication'),
        (4, 'Alimentation');

INSERT INTO specialite (id_specialite, nom_specialite, id_categorie) VALUES
        (1, 'Chauffagiste', 1),
        (2, 'Electricien', 1),
        (3, 'Menuisier', 1),
        (4, 'Plombier', 1),

        (5, 'Coiffeur', 2),
        (6, 'Fleuriste', 2),
        (7, 'Toiletteur', 2),
        (8, 'Webdesign', 2),

        (9, 'Bijoutier', 3),
        (10, 'Couturier', 3),
        (11, 'Ferronnier', 3),

        (12, 'Boucher', 4),
        (13, 'Boulanger', 4),
        (14, 'Chocolatier', 4),
        (15, 'Traiteur', 4);

INSERT INTO artisan (
        id_artisan,
        nom_artisan,
        note_artisan,
        ville_artisan,
        a_propos,
        email,
        site_web,
        image,
        top_artisan,
        id_specialite
) VALUES 
        (1, 'Boucherie Dumont', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boucherie.dumond@gmail.com', NULL, '/images/artisans/boucher.jpg', 0, 12),
        (2, 'Au pain chaud', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'aupainchaud@hotmail.com', NULL, '/images/artisans/boulanger.jpg', 1, 13),
        (3, 'Chocolaterie Labbé', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', '/images/artisans/chocolatier.jpg', 1, 14),
        (4, 'Traiteur Truchon', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', '/images/artisans/traiteur.jpg', 0, 15),
        (5, 'Orville Salmons', 5.0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'o-salmons@live.com', NULL, '/images/artisans/chauffagiste.jpg', 1, 1),
        (6, 'Mont Blanc Électricité', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', '/images/artisans/electricien.jpg', 0, 2),
        (7, 'Boutot & fils', 4.7, 'Bourg-en-Bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', '/images/artisans/menuisier.jpg', 0, 3),
        (8, 'Vallis Bellemare', 4.0, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', '/images/artisans/plombier.jpg', 0, 4),
        (9, 'Claude Quinn', 4.2, 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'claude.quinn@gmail.com', NULL, '/images/artisans/bijoutier.jpg', 0, 9),
        (10, 'Amitee Lécuyer', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', '/images/artisans/couturier.jpg', 0, 10),
        (11, 'Ernest Carignan', 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'e-carigan@hotmail.com', NULL, '/images/artisans/ferronier.jpg', 0, 11),
        (12, 'Royden Charbonneau', 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'r.charbonneau@gmail.com', NULL, '/images/artisans/coiffeur.jpg', 0, 5),
        (13, 'Leala Dennis', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', '/images/artisans/coiffeur.jpg', 0, 5),
        (14, 'C\'est sup\'hair', 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'sup-hair@gmail.com', 'https://sup-hair.fr', '/images/artisans/coiffeur.jpg', 0, 5),
        (15, 'Le monde des fleurs', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', '/images/artisans/fleuriste.jpg', 0, 6),
        (16, 'Valérie Laderoute', 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v-laredoute@gmail.com', NULL, '/images/artisans/toiletteur.jpg', 0, 7),
        (17, 'CM Graphisme', 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', '/images/artisans/webdesign.jpg', 0, 8);  