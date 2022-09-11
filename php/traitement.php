<?php 

$error = '';
$success = '';

if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['subject']) && !empty($_POST['message'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $success = 'Votre message a bien été enregistrer :)';
    }else{
        $error = 'Votre email est incorrect';
    }

}else{
    $error = 'Veuillez remplir les champs';
}

$data = [
    'success' => $success,
    'error' => $error
];

echo json_encode($data);
