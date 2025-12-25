<?php
$dbLocation = "localhost";
$dbUsername = "u323204828_7C45Q";
$dbPassword = "2003Xr80$";
$dbName = "u323204828_UfXus";
$db = mysqli_connect($dbLocation,
                     $dbUsername,
                     $dbPassword,
                     $dbName);
if (mysqli_connect_errno() || ($db == null))
{
    printf("Database connection failed",
           mysqli_connect_error());
    exit(0);
}
?>