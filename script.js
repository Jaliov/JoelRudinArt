window.onload = function () {
  //   document.getElementById("audio").play();
  Carousel();
};

document.querySelector(
  "#navLoad"
).innerHTML = `	<nav class='navbar navbar-expand-lg navbar-dark'>
		<a class="navbar-brand text-danger" href='index.html'>Cosmic Visions</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href='index.html'>Home <span class="sr-only">(current)</span></a>
				</li>
				<!-- <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li> -->
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
						data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Gallery
					</a>
					<div class="dropdown-menu " aria-labelledby="navbarDropdown">
						<a class="dropdown-item text-light" href="galleryJ.html">Recent Works</a>
						<a class="dropdown-item text-light" href="galleryJ_old.html">Earlier Works</a>
						<!--<div class="dropdown-divider"></div>-->
						<!--<a class="dropdown-item" href="#">Cartoons, Illustrations<small>(coming soon)</small></a>-->
					</div>
				<li class='nav-item'> <a class='nav-link' href='joelbio.html'>Artist Statement/Bio</a></li>
				<li class="nav-item">
					<a class="nav-link" href="contact.html">Contact</a>
				</li>
					
			</ul>
	          <audio controls src='Track06a.mp3' id='audio' loop='loop' autoplay='autoplay'></audio> 
			<!-- <form class="form-inline my-2 my-lg-0">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form> -->
		</div> 
	</nav>`;

// document.querySelector(
//   "#audio"
// ).innerHTML = `<audio controls src='Track06a.mp3' id='audio' loop='loop' autoplay='autoplay'></audio>`;
