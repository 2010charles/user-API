//CHARLES MUNGAI WORK
/*create database Users

CREATE TABLE Users (
  user_id INT PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

INSERT INTO Users (user_id, username, email, password)
VALUES
  (1, 'johnsmith', 'johnsmith@example.com', 'password123'),
  (2, 'janedoe', 'janedoe@example.com', 'password456'),
  (3, 'alicegreen', 'alicegreen@example.com', 'password789'),
  (4, 'mikesullivan', 'mikesullivan@example.com', 'passwordabc'),
  (5, 'emilybrown', 'emilybrown@example.com', 'passworddef');

  CREATE TABLE Posts (
  post_id INT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
INSERT INTO Posts (post_id, title, content, user_id)
VALUES
  (1, 'First Post', 'This is the content of the first post.', 1),
  (2, 'Second Post', 'This is the content of the second post.', 2),
  (3, 'Third Post', 'This is the content of the third post.', 1),
  (4, 'Fourth Post', 'This is the content of the fourth post.', 3),
  (5, 'Fifth Post', 'This is the content of the fifth post.', 4);

  CREATE TABLE Comments (
  comment_id INT PRIMARY KEY,
  content TEXT,
  user_id INT,
  post_id INT,
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
  FOREIGN KEY (post_id) REFERENCES Posts(post_id)
);
INSERT INTO Comments (comment_id, content, user_id, post_id)
VALUES
  (1, 'Great post!', 2, 1),
  (2, 'Thanks for sharing.', 3, 1),
  (3, 'I have a question. Can you please explain more?', 4, 1),
  (4, 'Nice job!', 1, 2),
  (5, 'I completely agree with you.', 3, 2);*/