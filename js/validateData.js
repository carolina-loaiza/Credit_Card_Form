 (function() {

    window.validate = (function() {

        function inputsFrom(form) {
            var error = [];

            for (i = 0; i < form.length; i++) {

                var type = form[i].getAttribute('data-type');

                if (type == 'email') {
                    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (re.test(form[i].value) == false) {
                       error.push(form[i]);
                    }
                }

                if (type == 'phone-number') {
                    var re8digit=/^\d{8}$/;
                    if (form[i].value.search(re8digit)==-1){
                        error.push(form[i]);
                    }
                }

                if (type == 'card-number') {
                    var re16digit=/^\d{16}$/;
                    if (form[i].value.search(re16digit)==-1){
                        error.push(form[i]);
                    }
                }

                if (type == 'cvv-number') {
                    var re3digit=/^\d{3}$/;
                    if (form[i].value.search(re3digit)==-1){
                        error.push(form[i]);
                    }
                }
            }

            if (error.length) {
                return error;
            }else {
                return true;
            }
        }

        return {
            inputsFrom : inputsFrom
        }

    })();
})();       