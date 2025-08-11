function restictNumber(idname) {

    console.log("test");
    document.getElementById(idname).addEventListener("input", function () {
        this.value = this.value.replace(/[0-9]/g, "");
    });
}
restictNumber("name")
restictNumber("location")


const translations = {
    en: {
        contactHeading: "Schedule a Free Demo",
        nameLabel: "Full Name *",
        phoneLabel: "Phone Number*",
        emailLabel: "Email Address",
        businessLabel: "Business Name *",
        locationLabel: "Location *",
        messageLabel: "Message",
        submitBtnText: "Submit"
    },
    ta: {
        contactHeading: "இலவச டெமோவிற்கு பதிவு செய்யவும்",
        nameLabel: "முழுப் பெயர் *",
        phoneLabel: "தொலைபேசி எண் *",
        emailLabel: "மின்னஞ்சல் முகவரி *",
        businessLabel: "வணிகப் பெயர் *",
        locationLabel: "இடம் *",
        messageLabel: "உங்கள் சந்தேகத்தை உள்ளிடவும்",
        submitBtnText: "சமர்ப்பிக்கவும்",
    }
};

function setLang(lang) {
    window.localStorage.setItem("lang", lang)
    for (let key in translations[lang]) {
        document.getElementById(key).innerHTML = translations[lang][key];
    }
}

// Default to English
var langu = window.localStorage.getItem("lang")
setLang(langu || 'en');

