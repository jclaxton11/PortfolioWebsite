    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="projectStyles.css">
        <link rel="stylesheet" type="text/css" href="tabletProjectStyles.css"
            media="screen and (max-width: 900px)">
        <script src="portfolio.js"></script>
        <title>Blog</title>
    </head>
    <body id="body" class="MainBody" onload="loadBlogs()">
        <div id="name">
            <h2>Contact Me</h2>
        </div>
        <div class="contact-form">
        <?php 
            include("contactForm.php")
        ?>
        </div>
    </body>

