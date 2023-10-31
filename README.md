$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "myDB";

// Create a connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Retrieve data from the POST request
$username = $_POST['Uname'];
$password = $_POST['Password'];
$email = $_POST['Email'];

// Create an SQL query with values
$sql = "INSERT INTO MySql (Uname, Password, Email) VALUES ( '$username', '$password', '$email')";

if (mysqli_query($conn, $sql)) {
  echo "Data inserted successfully";
} else {
  echo "Error: " . mysqli_error($conn);
}

// Close the connection
mysqli_close($conn);

?>
