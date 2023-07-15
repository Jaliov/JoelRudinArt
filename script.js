window.onload = function () {
  document.getElementById("audio").play();
  Carousel();
};

document.getElementById("navLoad").innerHTML =
  "<nav class='navbar navbar-expand-lg navbar-dark'><a class='navbar-brand text-danger' href='index.html'>Cosmic Visions</a><button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button><div class='collapse navbar-collapse'id='navbarNav'>  <ul class='navbar-nav'><li class='nav-item active'> <a class='nav-link' href='index.html'>Home <span class='sr-only'>(current)</span></a></li><li class='nav-item'><a class='nav-link' href='galleryJ.html'>Gallery</a></li><li class='nav-item'> <a class='nav-link' href='joelbio.html'>Artist Statement/Bio</a></li><li class='nav-item'><a class='nav-link' href='contact.html'>Contact</a></li></ul></div>	<audio controls src='Track06a.mp3' id='audio' loop='loop' autoplay='autoplay'></audio> </nav></div>";
