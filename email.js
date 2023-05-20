function validate() {
            var email = document.reg_form.email;
            var pass = document.reg_form.pass;
			
			 if (email.value.length <= 0) {
                alert("Email is required");
                email.focus();
                return false;
            }
            if (pass.value.length <= 0) {
                alert("Password is required");
                pass.focus();
                return false;
            }
			return false;
			}