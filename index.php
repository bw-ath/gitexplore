<?php
require '../vendor/autoload.php';
date_default_timezone_set('UTC');

// TODO : Enter your LaunchDarkly SDK key here
$client = new LaunchDarkly\LDClient("sdk-c8cc8e83-8b28-4166-bd7a-348c5879682d");
$darkly = "https://bootswatch.com/4/darkly/bootstrap.min.css";
$lightly = "https://bootswatch.com/4/litera/bootstrap.min.css";
$css = '';

$builder = (new LaunchDarkly\LDUserBuilder("brian@lucidswitch.com"))
  ->firstName("Brian")
  ->lastName("Walsh")
  ->custom(["groups" => "beta_testers"]);

$user = $builder->build();

// TODO : Enter the key for your feature flag here
if ($client->variation("brian-test", $user, false)) {
  // application code to show the feature
  $css = $darkly;
} else {
  // the code to run if the feature is off
  $css = $lightly;
}

$html = '
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <link rel="stylesheet" href=' . $css . '>


  <title>GitHub Finder</title>
</head>
<body>
  <nav class="navbar navbar-dark bg-primary mb-3">
    <div class ="container">
      <a href="#" class="navbar-brand">Github Finder</a>
    </div>
    </nav>
    <div class="container searchContainer">
      <div class="search card card-body">
        <h1>Search GitHub Users</h1>
        <p class="lead">Enter a username to fetch a user profile and repos</p>
        <input type = "text" id="searchUser" class="form-control" placeholder="Github Username...">
      </div>
      <br>
      <div id="profile"></div>
    </div>

    <footer class="mt-5 p-3 text-center bg-light">
      GitHub Finder &copy BPW90x 2019;
    </footer>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>



<script src ="github.js" ></script>
<script src ="ui.js" ></script>
<script src ="app.js" ></script>


</body>
</html>';

echo $html;

?>
