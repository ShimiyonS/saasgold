// Reusable function to include HTML files
function loadHTML(selector, file, callback) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
            if (callback) callback();
        })
        .catch(err => console.error(`Error loading ${file}:`, err));
}

loadHTML("#header-placeholder", "header.html", function () {
    if (typeof setLanguageIndicator === 'function') {
        setLanguageIndicator(); // call function from the separate JS file
    }
});
loadHTML("#placeholders-for-footer", "footer.html");

function setLanguageIndicator() {
    var language = document.getElementById("language");
    if (!language) return; // element not found

    var lang = localStorage.getItem('lang');
    setLang(lang)
    if (lang === 'en') {
        language.innerText = "English";
    } else if (lang === 'ta') {
        language.innerText = "தமிழ்";
    } else {
        language.innerText = "Language";
    }
}

// Initialize Owl Carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            992: { items: 3 }
        }
    });
});

// Floating Enquiry Form Functions
function toggleEnquiry() {
    document.getElementById('enquiryForm').classList.add('open');
    document.getElementById('overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeEnquiry() {
    document.getElementById('enquiryForm').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
    document.body.style.overflow = 'auto';
}

// Form Submission
// document.getElementById('enquiryFormData').addEventListener('submit', async function (e) {
//     e.preventDefault();

//     // Get form data
//     const formData = new FormData(this);
//     const data = Object.fromEntries(formData);

//     // Validation
//     let errors = [];
//     if (!data.name || data.name.trim().length < 2) {
//         errors.push('Please enter your full name.');
//     }
//     if (!data.phone || !/^\d{10}$/.test(data.phone)) {
//         errors.push('Please enter a valid 10-digit mobile number.');
//     }
//     if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
//         errors.push('Please enter a valid email address.');
//     }
//     if (!data.business || data.business.trim().length < 2) {
//         errors.push('Please enter your business name.');
//     }
//     if (!data.location || data.location.trim().length < 2) {
//         errors.push('Please enter your location.');
//     }
//     if (!data.message || data.message.trim().length < 2) {
//         errors.push('Please enter your message.');
//     }

//     if (errors.length > 0) {
//         alert(errors.join('\n'));
//         return;
//     }


//     // Prepare required fields for API
//     const payload ={
//         mobile: "+91" + data.phone || '',
//         message: data.message || '',
//         business_name: data.business || '',
//         name: data.name || '',
//         lead_from: 'website',
//         created_by: '1',
//         lead_owner: '1',
//         user_agent: navigator.userAgent,
//         status: '0',
//         remarks: '',
//         lead_status: '',
//         location: data.location || '',
//         email: data.email || ''
//     };


//     try {

//         // Submit to Google Sheet (CORS workaround using no-cors)
//         await fetch("https://script.google.com/macros/s/AKfycbzp3qnwax9cuS7nS8D-5RggcRgvJ07l5nuWtzImeSuMeieXLsDTwUl6ocms4mmwPBSFTA/exec", {
//             method: 'POST',
//             mode: 'no-cors', // Prevents CORS error, but you can't read response
//             body: formData
//         });
//         const response = await fetch('https://backend.saasgold.in/api/demo-requests', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-api-key': 'sk_7e08d3c5f91beef967d52c94d29f5c7fb3a9bc3b8d3c7b02e513cdf1715d1fdf',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify(payload)

//         });
//         if (response.ok) {
//             alert('Thank you for your enquiry! We will contact you soon.');
//             this.reset();
//             closeEnquiry();
//         } else {
//             const error = await response.json();
//             alert('Sorry, there was a problem submitting your enquiry. Please try again.\n' + (error.message || ''));
//         }
//     } catch (err) {
//         alert('Network error. Please try again later.');
//     }
// });

['contactForm', 'enquiryFormData'].forEach(formId => {
    document?.getElementById(formId)?.addEventListener('submit',
        async function (e) {
            e.preventDefault();

            console.log("ertyghujklkjhgfd",)
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            console.log(formData, data)

            // Validation
            let errors = [];
            if (!data.name || data.name.trim().length < 2) {
                errors.push('Please enter your full name.');
            }
            if (!data.phone || !/^\d{10}$/.test(data.phone)) {
                errors.push('Please enter a valid 10-digit mobile number.');
            }
            if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
                errors.push('Please enter a valid email address.');
            }
            if (!data.business || data.business.trim().length < 2) {
                errors.push('Please enter your business name.');
            }
            if (!data.location || data.location.trim().length < 2) {
                errors.push('Please enter your location.');
            }
            if (!data.message || data.message.trim().length < 2) {
                errors.push('Please enter your message.');
            }

            if (errors.length > 0) {
                alert(errors.join('\n'));
                return;
            }


            // Prepare required fields for API
            const payload = {
                mobile: "+91" + data.phone || '',
                message: data.message || '',
                business_name: data.business || '',
                name: data.name || '',
                lead_from: 'website',
                created_by: '1',
                lead_owner: '1',
                user_agent: navigator.userAgent,
                status: '0',
                remarks: '',
                lead_status: '',
                location: data.location || '',
                email: data.email || ''
            };

            console.log("ssssssssssssss", payload, formData)
            try {

                // Submit to Google Sheet (CORS workaround using no-cors)
                await fetch("https://script.google.com/macros/s/AKfycbzp3qnwax9cuS7nS8D-5RggcRgvJ07l5nuWtzImeSuMeieXLsDTwUl6ocms4mmwPBSFTA/exec", {
                    method: 'POST',
                    mode: 'no-cors', // Prevents CORS error, but you can't read response
                    body: formData
                });
                const response = await fetch('https://backend.saasgold.in/api/demo-requests', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': 'sk_7e08d3c5f91beef967d52c94d29f5c7fb3a9bc3b8d3c7b02e513cdf1715d1fdf',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(payload)

                });
                if (response.ok) {
                    alert('Thank you for your enquiry! We will contact you soon.');
                    this.reset();
                    closeEnquiry();
                } else {
                    const error = await response.json();
                    alert('Sorry, there was a problem submitting your enquiry. Please try again.\n' + (error.message || ''));
                }
            } catch (err) {
                alert('Network error. Please try again later.');
            }
        }
    );
});

// Close form on escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeEnquiry();
    }
});
