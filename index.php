<?php
if (!isset($_SESSION)) {
    session_start();
}
?>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="projectStyles.css">
        <link rel="stylesheet" type="text/css" href="tabletProjectStyles.css"
            media="screen and (max-width: 900px)">
        <script src="portfolio.js"></script>
        <!-- <script src="bootstrap-5.3.3/js/color-modes.js"></script> -->
        <title>Jeff's Portfolio</title>
    </head>
    <body id="body" class="MainBody" onload="fadein()">
        <?php 
            include("navBar.html")
        ?>

            <section id="index">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div id="name">
                <h2>Hello My Name Is</h2>
                <h1>Jeffrey Claxton</h1>
                <h2>I'm A Software Engineer</h2>
            </div>
            <div id="jeffPic">
                <img src="images/jeffpicwcircles.png" alt="jeff" width="500", height="500">
            </div>
            </section>
            <section id="descriptionSection">
                <div id="jeffdescrip">
                    <h2>I am a software engineer and app developer currently attending the University of Nebraska-Lincoln<br> <br>I specialize in</h2>
                </div>
            <div class="box">
                <div class="boxItem">
                    <p>iOS Development</p>
                    <img src="images/swiftImage.png" alt="HTML" width="180", height="180"> 
                </div>
                <div class="boxItem">
                    <p>.NET Development</p>
                    <img src="images/cImage.webp" alt="C#" width="180", height="180">
                </div>
            </div>
            </section>

            <section id="about">
                <?php 
                    include("about.php")
                ?>
            </section>

            <section id="experience">
                <?php 
                    include("experience.php")
                ?>
            </section>

            <section id="projects">
                <?php 
                    include("projects.php")
                ?>
            </section>

            <section id="skills">
                <?php 
                    include("skills.php")
                ?>
            </section>

            <section id="contact">
                <?php 
                    include("contact.php")
                ?>
            </section>
    </body>
</html>