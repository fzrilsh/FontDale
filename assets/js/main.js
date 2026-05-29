document.addEventListener('DOMContentLoaded', function () {
    var navToggle = document.getElementById('nav-toggle');
    var navMobile = document.getElementById('nav-mobile');
    var navToggleIcon = document.getElementById('nav-toggle-icon');

    if (navToggle && navMobile) {
        navToggle.addEventListener('click', function () {
            var isOpen = navMobile.classList.contains('nav-open');

            if (isOpen) {
                navMobile.classList.remove('nav-open');
                if (navToggleIcon) {
                    navToggleIcon.classList.remove('fa-times');
                    navToggleIcon.classList.add('fa-bars');
                }
            } else {
                navMobile.classList.add('nav-open');
                if (navToggleIcon) {
                    navToggleIcon.classList.remove('fa-bars');
                    navToggleIcon.classList.add('fa-times');
                }
            }
        });

        var mobileLinks = navMobile.querySelectorAll('a');

        for (var i = 0; i < mobileLinks.length; i++) {
            mobileLinks[i].addEventListener('click', function () {
                navMobile.classList.remove('nav-open');
                if (navToggleIcon) {
                    navToggleIcon.classList.remove('fa-times');
                    navToggleIcon.classList.add('fa-bars');
                }
            });
        }
    }

    var scrollTopBtn = document.getElementById('scroll-top-btn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    var currentPath = window.location.pathname;
    var pathParts = currentPath.split('/');
    var currentPage = pathParts[pathParts.length - 1];

    if (currentPage === '' || currentPage === 'index.html') {
        currentPage = 'index.html';
    }

    var allNavLinks = document.querySelectorAll('.nav-list a, .nav-mobile a');

    for (var j = 0; j < allNavLinks.length; j++) {
        var linkHref = allNavLinks[j].getAttribute('href');
        if (linkHref === currentPage) {
            allNavLinks[j].classList.add('nav-active');
        }
    }

    var newsletterForm = document.getElementById('newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var formIsValid = true;

            var nameInput = document.getElementById('field-name');
            var nameError = document.getElementById('error-name');

            nameInput.classList.remove('is-error');
            nameError.classList.remove('visible');

            var nameValue = nameInput.value.trim();

            if (nameValue.length === 0) {
                nameInput.classList.add('is-error');
                nameError.classList.add('visible');
                nameError.textContent = 'Please enter your full name.';
                formIsValid = false;
            }

            var emailInput = document.getElementById('field-email');
            var emailError = document.getElementById('error-email');

            emailInput.classList.remove('is-error');
            emailError.classList.remove('visible');

            var emailValue = emailInput.value.trim();

            if (emailValue.length === 0) {
                emailInput.classList.add('is-error');
                emailError.classList.add('visible');
                emailError.textContent = 'Please enter your email address.';
                formIsValid = false;
            } else if (emailValue.indexOf('@') === -1) {
                emailInput.classList.add('is-error');
                emailError.classList.add('visible');
                emailError.textContent = 'Email must contain the "@" character.';
                formIsValid = false;
            } else if (emailValue.indexOf('.') === -1) {
                emailInput.classList.add('is-error');
                emailError.classList.add('visible');
                emailError.textContent = 'Email must contain a domain (e.g. ".com").';
                formIsValid = false;
            } else if (emailValue.indexOf('@') === emailValue.length - 1) {
                emailInput.classList.add('is-error');
                emailError.classList.add('visible');
                emailError.textContent = 'Please enter a valid email address.';
                formIsValid = false;
            }

            var phoneInput = document.getElementById('field-phone');
            var phoneError = document.getElementById('error-phone');

            phoneInput.classList.remove('is-error');
            phoneError.classList.remove('visible');

            var phoneValue = phoneInput.value.trim();

            if (phoneValue.length === 0) {
                phoneInput.classList.add('is-error');
                phoneError.classList.add('visible');
                phoneError.textContent = 'Please enter your phone number.';
                formIsValid = false;
            } else if (phoneValue.length < 9) {
                phoneInput.classList.add('is-error');
                phoneError.classList.add('visible');
                phoneError.textContent = 'Phone number is too short (minimum 9 digits after +62).';
                formIsValid = false;
            } else if (phoneValue.length > 16) {
                phoneInput.classList.add('is-error');
                phoneError.classList.add('visible');
                phoneError.textContent = 'Phone number is too long (maximum 16 characters).';
                formIsValid = false;
            }

            var topicSelect = document.getElementById('field-topic');
            var topicError = document.getElementById('error-topic');

            topicSelect.classList.remove('is-error');
            topicError.classList.remove('visible');

            if (topicSelect.selectedIndex === 0) {
                topicSelect.classList.add('is-error');
                topicError.classList.add('visible');
                topicError.textContent = 'Please select a topic of interest.';
                formIsValid = false;
            }

            var radioError = document.getElementById('error-frequency');
            var radioGroup = document.getElementById('radio-group-frequency');

            if (radioGroup) {
                radioGroup.classList.remove('is-error');
            }
            radioError.classList.remove('visible');

            var radioButtons = document.querySelectorAll('input[name="frequency"]');

            var radioChecked = false;

            for (var k = 0; k < radioButtons.length; k++) {
                if (radioButtons[k].checked === true) {
                    radioChecked = true;
                    break;
                }
            }

            if (radioChecked === false) {
                if (radioGroup) {
                    radioGroup.classList.add('is-error');
                }
                radioError.classList.add('visible');
                radioError.textContent = 'Please select your preferred update frequency.';
                formIsValid = false;
            }

            if (formIsValid === true) {
                var successMsg = document.getElementById('form-success-msg');
                if (successMsg) {
                    successMsg.classList.add('visible');
                }
                newsletterForm.reset();
                if (successMsg) {
                    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }
});
