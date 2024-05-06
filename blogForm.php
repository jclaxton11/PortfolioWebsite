<?php
if (!isset($_SESSION)) {
    session_start();
}
$authenticated = isset($_SESSION["authenticated"]) && $_SESSION["authenticated"] === true;
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Blog Post</title>
    <style>
        form {
            max-width: 600px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
        }

        input[type="text"],
        textarea {
            width: 100%;
            padding: 10px;
            margin: 5px 0 20px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        select {
            width: 100%;
            padding: 10px;
            margin: 5px 0 20px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        label {
            color: white;
        }

        input[type="submit"]:hover {
            background-color: #45a049;
        }

        #login-button {
            background-color: #4CAF50;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        #login-button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <?php if ($authenticated): ?>
        <form action="insertToDb.php" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>

            <label for="category">Category:</label>
            <select id="category" name="category" required>
                <option value="Technology">Technology</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
            </select>

            <label for="description">Description:</label>
            <textarea id="description" name="info" required></textarea>

            <label for="image">Image Link:</label>
            <input type="text" id="image" name="imageLink" required>

            <input type="submit" value="Submit">
        </form> 
    <?php else: ?>
        <div class="filter-container">
            <p>You need to be logged in to add a blog post.</p>
            <a id="login-button" href="loginForm.php">Login</a>
        <div>
    <?php endif; ?>
</body>