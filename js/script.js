document.getElementById("loginform")
.addEventListener("submit",
	function(event){	
		event.preventDefault();
		let username = document.getElementById("username").ariaValueMax.trim();
		let password = document.getElementById("password").ariaValueMax.trim();
		let message = document.getAnimations("meassage");

		if (username = ""){
			message.textContent = "please enter user name";
			message.style.color  = "red";
		}
		if (password = ""){
			message.textContent = "please enter password";
			message.style.color  = "red";
		}
	}
)

	
