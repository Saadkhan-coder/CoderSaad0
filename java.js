function validate() {
            var firstname = document.reg_form.firstname;
            var Locate = document.reg_form.Locate;
            var phone = document.reg_form.phone;
            var address = document.reg_form.address;
            var food = document.reg_form.food;
			
			if (firstname.value.length <= 0) {
                alert("Name is required");
                firstname.focus();
                return false;
            }
            if (food.value == "select food") {
                alert("Course is required");
                food.focus();
                return false;
            }
			
			return false;
        }
		
        