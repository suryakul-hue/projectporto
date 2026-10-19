<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$host = "localhost";
$db_user = "u861468617_admin";
$db_pass = "Surya12345/";
$db_name = "u861468617_commission";

$conn = new mysqli($host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Koneksi database gagal: " . $conn->connect_error]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $conn->real_escape_string($data['name'] ?? '');
    $contact = $conn->real_escape_string($data['contact'] ?? '');
    $category = $conn->real_escape_string($data['category'] ?? '');
    $desc = $conn->real_escape_string($data['description'] ?? '');

    if (empty($name) || empty($contact) || empty($desc)) {
        echo json_encode(["success" => false, "message" => "Semua field wajib diisi!"]);
        exit();
    }

    $sql = "INSERT INTO commissions (client_name, client_contact, category, description) 
            VALUES ('$name', '$contact', '$category', '$desc')";

    if ($conn->query($sql)) {
        echo json_encode(["success" => true, "message" => "Pesanan berhasil dikirim!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Gagal menyimpan: " . $conn->error]);
    }
}
?>