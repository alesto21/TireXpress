<?php
include 'db_connection.php';

$sql = "SELECT * FROM produkt"; // Changed table name to 'produkt' as per your SQL code
$result = pg_query($conn, $sql);

$products = array();

if ($result) {
    // Check if any rows are returned
    if (pg_num_rows($result) > 0) {
        // Iterate over the result set
        while ($row = pg_fetch_assoc($result)) {
            // Store each row's data in the products array
            $products[] = array(
                'id' => $row["id"],
                'name' => $row["name"],
                'description' => $row["description"],
                // Assuming you have an 'image' column in your product table
                'image' => $row["image"] 
            );
        }
    }
} else {
    // Handle query errors
    echo "Error executing query: " . pg_last_error($conn);
}

// Close the database connection
pg_close($conn);

// Set the response header to indicate JSON content
header('Content-Type: application/json');

// Encode the products array as JSON and output it
echo json_encode($products);
?>
