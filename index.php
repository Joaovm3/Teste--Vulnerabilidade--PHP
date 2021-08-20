<?php

$login = 'adm';
$senha = 'admin';


if (isset($_POST['login']) && isset($_POST['senha'])) {
    if ($_POST['login'] == $login && $_POST['senha'] == $senha) {
        echo '<h3>Logado</h3>';
    }
}

?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Login Vulneravel</title>
</head>

<body>

    <section class="formulario">
        <form method="POST" autocomplete="off">
            <label for="login">Login</label>
            <input type="text" name="login" id="login">
            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha">
            <button>Login</button>
        </form>
    </section>

</body>

</html>