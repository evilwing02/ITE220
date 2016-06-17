<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Login System</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/sticky-footer-navbar.css">
    <script type="text/javascript" src="js/jquery-1.12.3.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <link href="css/main.css" rel="stylesheet" media="screen">
  </head>
  <body>

  <div class="container" >

    <?php 
      echo "<form class='form-signin' name='form1' method='post' action=''>";
      echo "<h2 class=\"form-signin-heading\">Please sign in</h2>";
    ?>
      <input name="myusername" id="myusername" type="text" class="form-control" placeholder="Username" autofocus>
      <input name="mypassword" id="mypassword" type="password" class="form-control" placeholder="Password">
      
      <button name="Submit" id="submit" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

      <div id="message"></div>
    </form>

  </div> <!-- /container -->