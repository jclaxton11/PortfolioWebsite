<?php
if (!isset($_SESSION)) {
    session_start();
}
?>
    <head>
        <meta name ="viewport" content="width=device-width">
        <link rel="stylesheet" type="text/css" href="projectStyles.css">
        <link rel="stylesheet" type="text/css" href="tabletProjectStyles.css"
            media="screen and (max-width: 900px)">
        <script src="portfolio.js"></script>
        <title>Blog</title>
    </head>
    <body id="body" class="BlogBody" onload="loadBlogs('')">
        <?php 
            include("blogNavBar.html")
        ?>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div id="name">
            <h2>Welcome To My Blog</h2>
        </div>
        <div class="filter-container">
            <Label>Filter:</Label>
            <select id="category" name="category">
                <option value="">All</option>
                <option value="Technology">Technology</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
            </select>
        </div>
        <div id="blog-container">
            <div id="blog-posts">
            </div>
        </div>
        <script>
            document.getElementById('category').addEventListener('change', function() {
            var selectedCategory = this.value;
            loadBlogs(selectedCategory);
        });
        </script>
        <h2 style="text-align: center; color: white;">Add a post</h2>
        <?php 
            include("blogForm.php")
        ?>
    </body>

