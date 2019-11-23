<?php
include "conn.php";
echo "<html><body>";
$sql = "SELECT Name, Score FROM highscore";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border = 1>";
    echo "<tr><th align='left'>Name</th><th align='left'>Score</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["Name"] . "</td><td>" . $row["Score"] . "</td></tr>";
    }
} else {
    echo "0 results";
}
echo "</table>";
echo "</body></html>";
?>
