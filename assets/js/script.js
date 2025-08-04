// Reusable function to include HTML files
function loadHTML(selector, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(err => console.error(`Error loading ${file}:`, err));
}

loadHTML("#header-placeholder", "header.html");
loadHTML("#placeholders-for-footer", "footer.html");

//language change function
function setLanguage(lang) {
    // Hide all language-specific elements first
    const allElements = document.querySelectorAll('[id^="hero-"], [id^="sub-"], [id^="cta-"], [id^="f"], [id^="ft"], [id^="ct"], [id^="ctdesc"], [id^="screenshots-"], [id^="demo"], [id^="contactHeading-"],[id^="name-"],[id^="phone-"],[id^="email-"],[id^="location-"],[id^="business-"],[id^="message-"],[id^="bt-"]');
    allElements.forEach(el => {
        el.classList.add("hidden");
    });

    // Show elements for selected language
    const activeElements = document.querySelectorAll(`[id$="-${lang}"]`);
    activeElements.forEach(el => {
        el.classList.remove("hidden");
    });

    // Special handling for demo elements (they don't follow the pattern)
    if (lang === 'en') {
        const demoEnElements = document.querySelectorAll('[id="demo-en"]');
        demoEnElements.forEach(el => {
            el.classList.remove("hidden");
        });
    } else if (lang === 'ta') {
        const demoTaElements = document.querySelectorAll('[id="demo-ta"]');
        demoTaElements.forEach(el => {
            el.classList.remove("hidden");
        });
    }

    window.localStorage.setItem("lang", lang)
    var languageIndicator = document.getElementById('language')
    if (languageIndicator) {
        if (lang === null || lang === '' || lang === 'en') {
            languageIndicator.innerText = "English";
            console.log('hello1');
        } else if (lang === 'ta') {
            languageIndicator.innerText = "தமிழ்";
            console.log('hello2');
        } else {
            languageIndicator.innerText = "English";
            console.log('hello3');
        }
    }

}

var langu = window.localStorage.getItem("lang")
// Default to English
setLanguage(langu || 'en');

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
document.getElementById('enquiryFormData').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

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
    const payload ={
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


    try {

        // Submit to Google Sheet (CORS workaround using no-cors)
        await fetch("https://script.google.com/macros/s/AKfycbzp3qnwax9cuS7nS8D-5RggcRgvJ07l5nuWtzImeSuMeieXLsDTwUl6ocms4mmwPBSFTA/exec", {
            method: 'POST',
            mode: 'no-cors', // Prevents CORS error, but you can't read response
            body: formData
        });
        const response = await fetch('http://localhost:8080/api/demo-requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sk_1a2b805b51eea9954044ec7b512761cd21d195d37b96a799c337ecd4890f4487',
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
});

// Close form on escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeEnquiry();
    }
});
