INSERT INTO PROJECT (PROJECT_NUMBER, NAME, FINISHING_DATE)
VALUES
    (123, 'EFV', '2020-04-20'),
    (234, 'CXTRANET', '2020-04-25'),
    (345, 'CRYSTAL BALL', '2020-04-28'),
    (456, 'IOC CLIENT EXTRANET', '2020-06-07'),
    (567, 'TRADEECO', '2020-06-08');

INSERT INTO USER (USERNAME)
VALUES
    ('USER1'),
    ('USER2'),
    ('USER3');

INSERT INTO TASK(NAME, DEADLINE, PROJECT_ID, USER_ID)
VALUES
    ('EFV_TASK_1', '2020-03-05', 1, 1),
    ('EFV_TASK_2', '2020-03-10', 1, null),
    ('EFV_TASK_3', '2020-03-15', 1, null);

INSERT INTO PROJECT VALUES (6, null, "2020-04-30", null, "PHAP", "ELCA", null, 1903, "2020-01-21", 2, null);

INSERT INTO PROJECT VALUES (7, null, "2020-04-3", null, "VONN", "PHAP", null, 2001, "2020-01-25", 0, null);

INSERT INTO PROJECT VALUES (8, null, "2020-04-20", null, "PHAP", "VONN", null, 4678, "2020-01-12", 3, null);

INSERT INTO PROJECT VALUES (9, null, "2020-05-10", null, "VONN", "LINN", null, 5912, "2020-01-13", 1, null);

INSERT INTO PROJECT VALUES (10, null, "2020-06-10", null, "LINP", "SECUTIX", null, 1122, "2020-01-15", 0, null);

INSERT INTO PROJECT VALUES (11, null, "2020-08-20", null, "VONN", "IPEN", null, 1234, "2020-01-18", 3, null);

INSERT INTO PROJECT VALUES (12, null, "2020-04-30", null, "LINP", "BKU", null, 132, "2020-01-18", 0, null);

INSERT INTO PROJECT VALUES (13, null, "2020-04-3", null, "PHAP", "ELCA2", null, 152, "2020-01-21", 2, null);

INSERT INTO PROJECT VALUES (14, null, "2020-04-23", null, "VONN", "PHAP2", null, 221, "2020-01-25", 0, null);

INSERT INTO PROJECT VALUES (15, null, "2020-05-21", null, "PHAP", "VONN2", null, 478, "2020-01-12", 3, null);

INSERT INTO PROJECT VALUES (16, null, "2020-01-10", null, "VONN", "LINN2", null, 595, "2020-01-13", 1, null);

INSERT INTO PROJECT VALUES (17, null, "2020-02-10", null, "LINP", "SECUTIX2", null, 1322, "2020-01-15", 0, null);

INSERT INTO PROJECT VALUES (18, null, "2020-08-24", null, "VONN", "IPEN2", null, 1214, "2020-01-18", 3, null);

INSERT INTO PROJECT VALUES (19, null, "2020-02-12", null, "LINP", "BKU2", null, 142, "2020-01-18", 0, null);


INSERT INTO user VALUES (4, null,  "Phuoc", "PHAP");

INSERT INTO user VALUES (5, null,  "Nhan", "VONN");

INSERT INTO user VALUES (6, null,  "Linh", "LINP");