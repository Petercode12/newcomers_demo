INSERT INTO PROJECT (NAME, FINISHING_DATE)
VALUES
    ('EFV', '2020-04-20'),
    ('CXTRANET', '2020-04-25'),
    ('CRYSTAL BALL', '2020-04-28'),
    ('IOC CLIENT EXTRANET', '2020-06-07'),
    ('TRADEECO', '2020-06-08');

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

INSERT INTO PROJECT VALUES (6, null, "2020-04-30", null, "ELCA", null, null, "2020-01-21", 2, null);

INSERT INTO PROJECT VALUES (7, null, "2020-04-3", null, "PHAP", null, null, "2020-01-25", 0, null);

INSERT INTO PROJECT VALUES (8, null, "2020-04-20", null, "VONN", null, null, "2020-01-12", 3, null);

INSERT INTO PROJECT VALUES (9, null, "2020-05-10", null, "LINN", null, null, "2020-01-13", 1, null);

INSERT INTO PROJECT VALUES (10, null, "2020-06-10", null, "SECUTIX", null, null, "2020-01-15", 0, null);

INSERT INTO PROJECT VALUES (11, null, "2020-08-20", null, "IPEN", null, null, "2020-01-18", 3, null);