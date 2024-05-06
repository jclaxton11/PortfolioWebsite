<?php
include("connectToDb.php");
$category = $_GET['category'] ?? '';
if ($category != '') {
    $sql = "SELECT * FROM BlogPosts WHERE Category = '$category'";
} else {
    $sql = "SELECT * FROM BlogPosts";
}
$allBlogPosts = array();
$queryResult = mysqli_query($db, $sql);
mysqli_close($db);
if ($queryResult->num_rows > 0) {
    while($row = $queryResult->fetch_assoc()) { 
        $allBlogPosts[] = $row;
    }
    echo json_encode($allBlogPosts);
} else {
    http_response_code(404); // Set response code to 404 (Not Found)
    echo json_encode(array("error" => "No blog posts found"));
}
?>