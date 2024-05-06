<?php
include("connectToDb.php");
// if (checkIfEmailExists($db, $_POST['email']))
// {
//     echo "<h3>Your e-mail is already in the database.</h3>";
// }
// else
// {
$date = date("Y-m-d H:i:s");
$query = "INSERT INTO BlogPosts(
    Name, Title, Info, Category, ImageLink, DateAdded
)
VALUES (
    '$_POST[name]',
    '$_POST[title]',
    '$_POST[info]',
    '$_POST[category]', 
    '$_POST[imageLink]',
    '$date'
);";
$success = mysqli_query($db, $query);
mysqli_close($db);
//redirects to desired page
header('Location: blog.php');

// function checkIfEmailExists($db, $email)
// {
//     $query =
//       "SELECT *
//       FROM Customers 
//       WHERE Email = '$email'";
//     $customers = mysqli_query($db, $query);
//     if (mysqli_num_rows($customers) > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
?>
