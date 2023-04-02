


DROP DATABASE IF EXISTS budgetcalculator;

SET NAMES 'utf8';

CREATE DATABASE budgetcalculator
CHARACTER SET utf8mb4
COLLATE utf8mb4_hungarian_ci;
USE budgetcalculator;

CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(50) NOT NULL,
  role varchar(255) NOT NULL,
  PRIMARY KEY (id)
)
CHARACTER SET utf8mb4,
COLLATE utf8mb4_hungarian_ci;
ALTER TABLE users
ADD UNIQUE INDEX username (username);
ALTER TABLE users
ADD UNIQUE INDEX email (email);

CREATE TABLE incomes (
  id INT(11) NOT NULL AUTO_INCREMENT,
  amount DECIMAL(8, 2) NOT NULL,
  date DATETIME NOT NULL,
  type VARCHAR(255) NOT NULL,
  userId INT(11) NOT NULL,
  PRIMARY KEY (id)
)
CHARACTER SET utf8mb4,
COLLATE utf8mb4_hungarian_ci;
ALTER TABLE incomes
ADD CONSTRAINT FK_incomes_userId FOREIGN KEY (userId)
REFERENCES users (id) ON DELETE CASCADE;


CREATE TABLE expenses (
  id INT(11) NOT NULL AUTO_INCREMENT,
  date DATETIME NOT NULL,
  amount DECIMAL(8, 2) NOT NULL,
  userId INT(11) DEFAULT NULL,
  PRIMARY KEY (id)
)
CHARACTER SET utf8mb4,
COLLATE utf8mb4_hungarian_ci;
ALTER TABLE expenses
ADD CONSTRAINT FK_expenses_userId FOREIGN KEY (userId)
REFERENCES users (id) ON DELETE CASCADE;



CREATE TABLE tags (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
)
CHARACTER SET utf8mb4,
COLLATE utf8mb4_hungarian_ci;


CREATE TABLE tags_expenses (
  id INT(11) NOT NULL AUTO_INCREMENT,
  tagId INT(11) NOT NULL,
  expenseId INT(11) NOT NULL,
  PRIMARY KEY (id)
)
CHARACTER SET utf8mb4,
COLLATE utf8mb4_hungarian_ci;
ALTER TABLE tags_expenses
ADD CONSTRAINT FK_tags_expenses_expenseId FOREIGN KEY (expenseId)
REFERENCES expenses (id) ON DELETE CASCADE;
ALTER TABLE tags_expenses
ADD CONSTRAINT FK_tags_expenses_tagId FOREIGN KEY (tagId)
REFERENCES tags (id) ON DELETE CASCADE;


INSERT INTO users(id,username,password,email,role) VALUES
(1, 'Peter2001', 'NFVTXHfm/um3v6duDhfNHw==', 'halasz.peter1@students.jedlik.eu', 'admin'),
(2, 'Ligon568', 'MFTTXHfm/um1v2mbDhfNHw==', 'Ligon@example.com', 'standard'),
(3, 'Goetz1965', '6/qo4PQd1lQZU9dqtsX0WQ==', 'Burrows865@example.com', 'standard'),
(4, 'Lonna33', '5kmx/JKKtXW4C3KmrNcG4Q==', 'GeorgannSamples457@example.com', 'standard'),
(5, 'Florentina2022', 'c5fQ9fnIqYv6YsQWp9HisA==', 'Cedric.CSotelo@example.com', 'standard'),
(6, 'Overton2023', '4RasIF7uT1TZ86waM+wzVw==', 'Loftis@example.com', 'standard'),
(7, 'Alonso823', 'ZHShVr7WO3NIJr/DZUO0Gw==', 'Francene.E.Acker869@example.com', 'standard'),
(8, 'Blake1987', '2IbF+/zSyPBmz0jhfqwTAw==', 'ssmxzviy.qout@example.com', 'standard'),
(9, 'Eugenie1979', 'nq0B8WOvX0LxMy+k/ulDmw==', 'Abreu222@example.com', 'standard'),
(10, 'Crouse646', 'cd9GRwf+BgIX2pT8Oxa2BQ==', 'SeeWild56@example.com', 'standard'),
(11, 'Sachiko27', 'SopdFQq8Y8yRD8ITna6gsA==', 'Severson757@example.com', 'standard'),
(12, 'Wilbanks49', 'o1h8RkAexUuaCOMkSJ8kpQ==', 'CatherynTaber@example.com', 'standard'),
(13, 'Winstead2015', 'e8mRHr+2Uvk/8h+44ssvlg==', 'Verline_Fairbanks2@example.com', 'standard'),
(14, 'Albertson9', 'o+S25/zXxfr6ZUxS2RGdZQ==', 'Julene.IAbrams@example.com', 'standard'),
(15, 'Adah769', 'XSwMC4Dvq4n30ADCD3+oBw==', 'AbigailKruse91@nowhere.com', 'standard'),
(16, 'Moises294', '53eMlwK5YIqQgaOh4X+kCg==', 'jnmo3690@nowhere.com', 'standard'),
(17, 'Effie769', '1WTbATyRordt91nh4S7yJQ==', 'Sikes@example.com', 'standard'),
(18, 'Melonie3', '3Zf007/JV9Ki/c8oRIgjqg==', 'Luther@example.com', 'standard'),
(19, 'Abbie2007', 'XS3Pr766bG0Rsnm5kWpDNQ==', 'DorothaCass344@example.com', 'standard'),
(20, 'Frederick2022', 'aOi5g9+fYyAPWwJyde6WEQ==', 'Burch@example.com', 'standard'),
(21, 'Alfaro542', '9cUXITyLa191gnN6eK/sDQ==', 'YasmineJensen@example.com', 'standard'),
(22, 'Stephen2028', 'gxoi/MWwCp2tKbF+AOUQng==', 'Whitaker@nowhere.com', 'standard'),
(23, 'Joe92', 'g6YtRliWJNIcFZp2rhm06Q==', 'Sims4@example.com', 'standard'),
(24, 'Almeida2000', 'jM5DKbAvn9F/lxUWc3MXJg==', 'MarcoBerry@example.com', 'standard'),
(25, 'Argentina111', 'y5xyFCa3Nt5f+iP8ejZ7JA==', 'Kimberlee_ZCausey@nowhere.com', 'standard'),
(26, 'Abernathy1993', 'eNw3rCTzbE6lPs2aDm7Qww==', 'SolomonBarela3@example.com', 'standard'),
(27, 'Blake1978', 'TtVFBfATwPX+zLWN8FlcqA==', 'Adela_Scarborough@example.com', 'standard'),
(28, 'Byrne2010', 'W6tmwS+XpNJ+pNtGuitSZQ==', 'zqmfvtd2720@example.com', 'standard'),
(29, 'Benson1956', 'e/lM/ZzS3TmAIY+tuuTMHg==', 'Jude_Weller976@example.com', 'standard'),
(30, 'Augustina1975', 'ArHTlreTl5+a48LGTAMKrQ==', 'SmithO@example.com', 'standard'),
(31, 'Dunning284', 'PgFzQHHGThtnV8vcH8RbCQ==', 'hqjoe3@example.com', 'standard'),
(32, 'Ray261', '+tj9A3Pshn2Ukugc1q1FeQ==', 'HazelW@example.com', 'standard'),
(33, 'Lawson344', 'wMbsIiZBIwWF/a3BsoIYyA==', 'Abdul_Foy@nowhere.com', 'standard'),
(34, 'Hanlon859', 'SAvJF0cRTMPRDBeJFVz44g==', 'ErrolAlcala24@example.com', 'standard'),
(35, 'Joe2002', 'f/AaDbulANPLTOpFf+lWRA==', 'GennieGBarrow9@example.com', 'standard'),
(36, 'Atwell2028', 'mijhPEV00t3q2NPdhefNMQ==', 'Bernard_Jeffers167@example.com', 'standard'),
(37, 'Salerno2018', 'n6hfpmooHrCHMY/LOCU7oQ==', 'wxdo5147@example.com', 'standard'),
(38, 'Barker7', 'BTSLjxPw0w8QIlRhne1kIA==', 'oxfz2718@nowhere.com', 'standard'),
(39, 'Janita2009', 'yC4+tS1EPenfcIDbY13q2w==', 'Phillips9@example.com', 'standard'),
(40, 'Aguilera335', 'K+67Us3Ef1Q9pjovosXMuw==', 'Washburn156@example.com', 'standard'),
(41, 'Kenna511', 'j8MroYAv/M395v2r6oTGHQ==', 'SalleyBeckett@example.com', 'standard');


INSERT INTO tags(id,name) VALUES
(1, 'Games'),
(2, 'Movies'),
(3, 'Accessories'),
(4, 'Baby'),
(5, 'Tools'),
(6, 'Automotive'),
(7, 'Shoes'),
(8, 'Pets'),
(9, 'Sports'),
(10, 'Taxi'),
(11, 'Pharmacy'),
(12, 'Audible'),
(13, 'Garden'),
(14, 'Health'),
(15, 'Gifts'),
(16, 'Furniture'),
(17, 'Crafts'),
(18, 'Outdoors'),
(19, 'Beauty'),
(20, 'Books'),
(21, 'Accessories'),
(22, 'Home'),
(23, 'Outdoors'),
(24, 'Tech'),
(25, 'Music'),
(26, 'Transport'),
(27, 'Party'),
(28, 'Entertainment'),
(29, 'Bill'),
(30, 'Electronics');


INSERT INTO expenses(id,date,amount,userId) VALUES
(1, '2020-01-01 00:10:38', 112299.00, 40),
(2, '2020-09-28 03:51:53', 98124.00, 15),
(3, '2020-01-01 00:00:10', 130460.00, 27),
(4, '2021-04-04 08:26:34', 82914.00, 33),
(5, '2022-10-29 17:01:42', 98895.00, 14),
(6, '2020-01-01 00:00:08', 41962.00, 40),
(7, '2020-01-01 00:00:04', 77951.00, 2),
(8, '2021-08-02 19:16:36', 60335.00, 11),
(9, '2020-01-01 02:02:02', 84502.00, 27),
(10, '2021-08-25 00:45:10', 130804.00, 17),
(11, '2020-01-01 01:14:28', 41211.00, 34),
(12, '2021-02-14 08:32:36', 30512.00, 11),
(13, '2020-01-01 00:00:54', 45542.00, 40),
(14, '2021-08-29 22:43:13', 116883.00, 5),
(15, '2022-09-12 14:13:40', 27720.00, 25),
(16, '2020-02-02 01:59:54', 76559.00, 26),
(17, '2020-12-09 05:47:06', 15802.00, 31),
(18, '2020-01-01 00:05:24', 123781.00, 17),
(19, '2022-05-15 11:44:17', 135237.00, 7),
(20, '2020-12-15 02:24:42', 80467.00, 17),
(21, '2022-01-02 20:22:09', 32865.00, 25),
(22, '2020-01-01 00:01:22', 106743.00, 30),
(23, '2020-10-09 20:28:03', 17221.00, 24),
(24, '2020-01-01 00:06:32', 20064.00, 31),
(25, '2020-01-01 00:00:30', 126168.00, 41),
(26, '2020-01-01 00:00:21', 122320.00, 29),
(27, '2020-02-05 23:56:49', 44730.00, 15),
(28, '2020-01-01 00:00:02', 17568.00, 30),
(29, '2020-01-01 00:00:10', 149939.00, 24),
(30, '2022-01-21 12:01:06', 131485.00, 18),
(31, '2021-07-18 12:23:54', 79508.00, 4),
(32, '2022-11-26 14:30:50', 108707.00, 11),
(33, '2021-01-08 17:45:17', 139911.00, 6),
(34, '2021-09-27 16:17:09', 49215.00, 17),
(35, '2020-08-24 16:10:32', 33591.00, 32),
(36, '2021-09-30 22:39:00', 103178.00, 11),
(37, '2020-05-12 23:13:11', 88636.00, 36),
(38, '2020-05-26 02:27:44', 46017.00, 23),
(39, '2020-05-31 20:48:56', 84085.00, 35),
(40, '2022-05-18 23:11:25', 125983.00, 4);


INSERT INTO tags_expenses(id,tagId,expenseId) VALUES
(1, 27, 32),
(2, 18, 1),
(3, 7, 37),
(4, 5, 32),
(5, 30, 9),
(6, 28, 40),
(7, 21, 16),
(8, 23, 18),
(9, 22, 27),
(10, 1, 16),
(11, 14, 28),
(12, 17, 16),
(13, 28, 33),
(14, 21, 10),
(15, 22, 23),
(16, 13, 17),
(17, 5, 13),
(18, 24, 18),
(19, 23, 32),
(20, 3, 25),
(21, 24, 31),
(22, 22, 6),
(23, 2, 8),
(24, 3, 2),
(25, 17, 4),
(26, 3, 37),
(27, 1, 14),
(28, 20, 25),
(29, 27, 22),
(30, 27, 31),
(31, 3, 2),
(32, 26, 14),
(33, 9, 7),
(34, 18, 19),
(35, 29, 27),
(36, 29, 34),
(37, 24, 4),
(38, 30, 20),
(39, 13, 16),
(40, 1, 4);


INSERT INTO incomes(id,amount,date,type,userId) VALUES
(1, 102395.00, '2020-01-08 00:00:01', 'transfer', 3),
(2, 110853.00, '2020-02-07 00:00:01', 'transfer', 14),
(3, 252094.00, '2020-03-08 00:00:01', 'salary', 32),
(4, 318466.00, '2020-04-07 00:00:01', 'salary', 12),
(5, 344576.00, '2020-05-07 00:00:01', 'salary', 33),
(6, 223756.00, '2020-06-06 00:00:01', 'salary', 10),
(7, 263664.00, '2020-07-06 00:00:01', 'bonus', 29),
(8, 103673.00, '2020-08-05 00:00:01', 'salary', 31),
(9, 127955.00, '2020-09-04 00:00:01', 'transfer', 24),
(10, 289897.00, '2020-10-04 00:00:01', 'transfer', 23),
(11, 209463.00, '2020-11-03 00:00:01', 'salary', 39),
(12, 313505.00, '2020-12-03 00:00:01', 'salary', 22),
(13, 72995.00, '2021-01-02 00:00:01', 'winning', 5),
(14, 323312.00, '2021-02-01 00:00:01', 'bonus', 17),
(15, 40756.00, '2021-03-03 00:00:01', 'transfer', 2),
(16, 194735.00, '2021-04-02 00:00:01', 'transfer', 18),
(17, 250518.00, '2021-05-02 00:00:01', 'bonus', 31),
(18, 120914.00, '2021-06-01 00:00:01', 'winning', 3),
(19, 49337.00, '2021-07-01 00:00:01', 'bonus', 39),
(20, 157123.00, '2021-07-31 00:00:01', 'transfer', 32),
(21, 114611.00, '2021-08-30 00:00:01', 'transfer', 15),
(22, 249504.00, '2021-09-29 00:00:01', 'winning', 15),
(23, 106366.00, '2021-10-29 00:00:01', 'winning', 7),
(24, 105903.00, '2021-11-28 00:00:01', 'winning', 39),
(25, 59979.00, '2021-12-28 00:00:01', 'salary', 27),
(26, 196435.00, '2022-01-27 00:00:01', 'salary', 39),
(27, 152343.00, '2022-02-26 00:00:01', 'bonus', 12),
(28, 200691.00, '2022-03-28 00:00:01', 'bonus', 23),
(29, 326744.00, '2022-04-27 00:00:01', 'salary', 11),
(30, 197965.00, '2022-05-27 00:00:01', 'transfer', 39),
(31, 128926.00, '2022-06-26 00:00:01', 'salary', 34),
(32, 331588.00, '2022-07-26 00:00:01', 'bonus', 15),
(33, 212183.00, '2022-08-25 00:00:01', 'bonus', 19),
(34, 197891.00, '2022-09-24 00:00:01', 'bonus', 33),
(35, 162336.00, '2022-10-24 00:00:01', 'winning', 30),
(36, 314261.00, '2022-11-23 00:00:01', 'transfer', 16),
(37, 318123.00, '2020-01-08 00:00:01', 'transfer', 15),
(38, 229297.00, '2020-02-07 00:00:01', 'bonus', 3),
(39, 245613.00, '2020-03-08 00:00:01', 'bonus', 30),
(40, 165915.00, '2020-04-07 00:00:01', 'transfer', 7);