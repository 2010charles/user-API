import sql from "mssql"
import config from "../db/config.js"


//retrieve a single user

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        let pool = await sql.connect(config.sql); // Assuming config contains the necessary database connection information

        const result = await pool.request()
            .input("user_id", sql.Int, id)
            .query("SELECT * FROM Users WHERE user_id = @user_id");

        if (!result.recordset[0]) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(result.recordset[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred when retrieving the user' });
    } finally {
        sql.close();
    }
};
//retrieve post
export const getPost = async (req, res) => {
    try {
        const { id } = req.params;
        let pool = await sql.connect(config.sql); // Assuming config contains the necessary database connection information

        const result = await pool.request()
            .input("post_id", sql.Int, id)
            .query("SELECT * FROM Posts WHERE post_id = @post_id");

        if (!result.recordset[0]) {
            res.status(404).json({ message: 'Post not found' });
        } else {
            res.status(200).json(result.recordset[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred when retrieving the post' });
    } finally {
        sql.close();
    }
};
//retrie comment

export const getComment = async (req, res) => {
    try {
        const { id } = req.params;
        let pool = await sql.connect(config.sql); // Assuming config contains the necessary database connection information

        const result = await pool.request()
            .input("comment_id", sql.Int, id)
            .query("SELECT * FROM Comments WHERE comment_id = @comment_id");

        if (!result.recordset[0]) {
            res.status(404).json({ message: 'Comment not found' });
        } else {
            res.status(200).json(result.recordset[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred when retrieving the comment' });
    } finally {
        sql.close();
    }
};

// creat a user
export const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        let pool = await sql.connect(config.sql); // Assuming config contains the necessary database connection information

        const result = await pool.request()
            .input("username", sql.VarChar(255), username)
            .input("email", sql.VarChar(255), email)
            .input("password", sql.VarChar(255), password)
            .query("INSERT INTO Users (username, email, password) VALUES (@username, @email, @password)");

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred when creating the user' });
    } finally {
        sql.close();
    }
};
//creating post
export const createPost = async (req, res) => {
    try {
        const { title, content, user_id } = req.body;

        let pool = await sql.connect(config.sql); // Assuming config contains the necessary database connection information

        const result = await pool.request()
            .input("title", sql.VarChar(255), title)
            .input("content", sql.Text, content)
            .input("user_id", sql.Int, user_id)
            .query("INSERT INTO Posts (title, content, user_id) VALUES (@title, @content, @user_id)");

        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred when creating the post' });
    } finally {
        sql.close();
    }
};
//creating comment
export const createComment = async (req, res) => {
    try {
        const { content, user_id, post_id } = req.body;

        let pool = await sql.connect(config.sql); // Assuming config contains the necessary database connection information

        const result = await pool.request()
            .input("content", sql.Text, content)
            .input("user_id", sql.Int, user_id)
            .input("post_id", sql.Int, post_id)
            .query("INSERT INTO Comments (content, user_id, post_id) VALUES (@content, @user_id, @post_id)");

        res.status(201).json({ message: 'Comment created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred when creating the comment' });
    } finally {
        sql.close();
    }
};
//update users
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password } = req.body;

        let pool = await sql.connect(config.sql); // Assuming config contains the necessary database connection information

        const result = await pool.request()
            .input("user_id", sql.Int, id)
            .input("username", sql.VarChar(255), username)
            .input("email", sql.VarChar(255), email)
            .input("password", sql.VarChar(255), password)
            .query("UPDATE Users SET username = @username, email = @email, password = @password WHERE user_id = @user_id");

        if (result.rowsAffected[0] === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ message: 'User updated successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred when updating the user' });
    } finally {
        sql.close();
    }
};



//function to update post
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        let pool = await sql.connect(config.sql); // Assuming config contains the necessary database connection information

        const result = await pool.request()
            .input("post_id", sql.Int, id)
            .input("title", sql.VarChar(255), title)
            .input("content", sql.Text, content)
            .query("UPDATE Posts SET title = @title, content = @content WHERE post_id = @post_id");

        if (result.rowsAffected[0] === 0) {
            res.status(404).json({ message: 'Post not found' });
        } else {
            res.status(200).json({ message: 'Post updated successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred when updating the post' });
    } finally {
        sql.close();
    }
};
//function to update comment
export const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;

        let pool = await sql.connect(config.sql); // Assuming config contains the necessary database connection information

        const result = await pool.request()
            .input("comment_id", sql.Int, id)
            .input("content", sql.Text, content)
            .query("UPDATE Comments SET content = @content WHERE comment_id = @comment_id");

        if (result.rowsAffected[0] === 0) {
            res.status(404).json({ message: 'Comment not found' });
        } else {
            res.status(200).json({ message: 'Comment updated successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred when updating the comment' });
    } finally {
        sql.close();
    }
};

//delet the user 
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        let pool = await sql.connect(config.sql); // Assuming config contains the necessary database connection information

        const result = await pool.request()
            .input("user_id", sql.Int, id)
            .query("DELETE FROM Users WHERE user_id = @user_id");

        if (result.rowsAffected[0] === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ message: 'User deleted successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred when deleting the user' });
    } finally {
        sql.close();
    }
};
//function to delete post
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        let pool = await sql.connect(config.sql); // Assuming config contains the necessary database connection information

        const result = await pool.request()
            .input("post_id", sql.Int, id)
            .query("DELETE FROM Posts WHERE post_id = @post_id");

        if (result.rowsAffected[0] === 0) {
            res.status(404).json({ message: 'Post not found' });
        } else {
            res.status(200).json({ message: 'Post deleted successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred when deleting the post' });
    } finally {
        sql.close();
    }
};
//function to delete comment
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;

        let pool = await sql.connect(config.sql); // Assuming config contains the necessary database connection information

        const result = await pool.request()
            .input("comment_id", sql.Int, id)
            .query("DELETE FROM Comments WHERE comment_id = @comment_id");

        if (result.rowsAffected[0] === 0) {
            res.status(404).json({ message: 'Comment not found' });
        } else {
            res.status(200).json({ message: 'Comment deleted successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred when deleting the comment' });
    } finally {
        sql.close();
    }
};
