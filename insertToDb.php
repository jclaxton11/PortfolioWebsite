<?php
include("connectToDb.php");
// if (checkIfEmailExists($db, $_POST['email']))
// {
//     echo "<h3>Your e-mail is already in the database.</h3>";
// }
// else
// {

$date = date("Y-m-d H:i:s");
$info = nl2br($_POST['info']);
$stmt = $db->prepare("INSERT INTO BlogPosts (Name, Title, Info, Category, ImageLink, DateAdded) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $_POST['name'], $_POST['title'], $info, $_POST['category'], $_POST['imageLink'], $date);
$success = $stmt->execute();
$stmt->close();
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
