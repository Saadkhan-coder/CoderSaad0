function validate() {
            var fname = document.reg_form.fname;
            var lname = document.reg_form.lname;
			var gender = document.reg_form.gender;
		    var phone = document.reg_form.phone;
			var address = document.reg_form.address;


            if (fname.value.length <= 0) {
                alert("Name is required");
                fname.focus();
                return false;
            }
            if (lname.value.length <= 0) {
                alert("Last Name is required");
                lname.focus();
                return false;
            }
			if (gender.value.length <= 0) {
                alert("Gender is required");
                gender.focus();
                return false;
            }
			if (phone.value.length <= 0) {
                alert("Mobile Number is required");
                phone.focus();
                return false;
            }
			if (address.value.length <= 0) {
                alert("Address is required");
                address.focus();
                return false;
            }
            return false;
        }