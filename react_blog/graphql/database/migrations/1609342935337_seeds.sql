INSERT INTO roles(title)
VALUES
('admin'),
('blogger');

INSERT INTO permissions(action)
VALUES
('post'),
('manage-users');

INSERT INTO roles_permissions (role_id, permission_id)
VALUES
(1, 1),
(1, 2),
(2, 1);

INSERT INTO users (role_id, email, first_name, last_name)
VALUES
(1, 'ldy9295@gmail.com', 'Dayeong', 'Lee');

INSERT INTO blog_categories (label, description)
VALUES
('Spain', 'Spain, officially the Kingdom of Spain, is a country in Southwestern Europe with some pockets of territory across the Strait of Gibraltar and the Atlantic Ocean.'),
('Rusia', 'Rusia is a settlement in the administrative district of Gmina Skarszewy, within Starogard County, Pomeranian Voivodeship, in northern Poland.'),
('France', 'France, officially the French Republic is a country, primarily located in Western Europe, consisting of metropolitan France and several overseas regions and territories.'),
('England', 'England is a country that is part of the United Kingdom.'),
('Italy', 'Italy is located in south-central Europe, and is considered part of western Europe.'),
('Greece', 'Greece, officially the Hellenic Republic and also known as Hellas, is a country located in Southeast Europe.'),
('Taiwan', 'Taiwan (traditional Chinese, officially the Republic of China is a country in East Asia.'),
('Georgia', 'Georgia is a transcontinental country in the Caucasus region of Eurasia.'),
('USA', 'The United States of America(USA), commonly known as the United States, or America, is a country primarily located in North America.')

INSERT INTO blog_posts (author_id, title, description, text, image, active, keyword1, keyword2, bg_src, bg_type)
VALUES
(1, 'Barcelona street', 'A picture taken while walking the streets of Barcelona.', '', 'road.jpeg', 1, 'Spain', 'Trip', 'road.jpeg', 'Image'),
(1, 'Church in Barcelona', 'It is a beautiful church in Barcelona.', '', 'church.jpeg', 1, 'Spain', 'Trip', 'church.jpeg', 'Image'),
(1, 'British beach', 'Share beautiful beach scenery.', '', 'sea.jpeg', 1, 'England', 'Trip', 'sea.jpeg', 'Image'),
(1, 'Moscow architecture', 'Beautiful architecture in Moscow.', '', 'structure.jpeg', 1, 'Rusia', 'Trip', 'structure.jpeg', 'Image'),
(1, 'Italian village', 'Narrow but beautiful italian alley.', '', 'town.jpeg', 1, 'Italy', 'Trip', 'town.jpg', 'Image'),
(1, '', '.', '', '.jpg', 1, '', 'Trip', '.jpg', 'Image'),
(1, '', '.', '', '.jpg', 1, '', 'Trip', '.jpg', 'Image'),
(1, '', '.', '', '.jpg', 1, '', 'Trip', '.jpg', 'Image'),
(1, '', '.', '', '.jpg', 1, '', 'Trip', '.jpg', 'Image'),
(1, '', '.', '', '.jpg', 1, '', 'Trip', '.jpg', 'Image')


INSERT INTO blog_post_comments (post_id, author_id, comment)
VALUES
(1, 1, 'Amazing!'),
(1, 1, 'Cool~~:)');

INSERT INTO blog_post_categories (post_id, category_id)
VALUES 
(1,4),
(1,5),
(2,7),
(3,4),
(3,5),
(4,6),
(5,4),
(6,1),
(6,2),
(7,4),
(8,6),
(9,2),
(9,3);

npm run run-migration