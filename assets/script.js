const form = document.getElementById('form');
        const emailInput = document.querySelector('.input-email');
        const msg = document.createElement('p');
        msg.id = 'msg';
        form.appendChild(msg);

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            check();
        });

        function check() {
            const email = emailInput.value;
            const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            msg.textContent = valid ? "Valid Email" : "Invalid Email";
            msg.style.color = valid ? "green" : "red";
        }