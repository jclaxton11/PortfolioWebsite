<?php
$dbLocation = "localhost";
$dbUsername = "id22116572_jeff";
$dbPassword = "2003Xr80$";
$dbName = "id22116572_blogs";
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