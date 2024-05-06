<?php
if (!isset($_SESSION)) {
    session_start();
}
?>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="projectStyles.css">
    <link rel="stylesheet" type="text/css" href="tabletProjectStyles.css"
        media="screen and (max-width: 900px)">
    <script src="portfolio.js"></script>
    <title>Blog</title>
    <style>
        form {
            max-width: 600px;
            margin: 0 auto;
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

        input[type="password"],
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
    </style>
</head>
<body id="body" class="MainBody" style="background: red;" onload="loadBlogs()">
    <?php 
            include("navBar.html")
    ?>
    <div id="name">
        <h2>Login</h2>
    </div>
    <?php
    // Check if an error occurred during authentication
    if (isset($_GET['error']) && $_GET['error'] == '1') {
        echo "<p style='color: red;'>Incorrect username or password. Please try again.</p>";
    }
    ?>
    <form method="post" action="authenticate.php">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        <input type="submit" value="Login"></input>
    </form>
    </form> 
</body>