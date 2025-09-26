const translations = {
    en: {
        question: "Why Choose <span style='color:#bfa14a;'>SaaSGold?</span>",
        answer: "Empower your jewellery business with our smart, secure, and easy-to-use gold chit management platform.",
        featureTitle1: "Branded Mobile App",
        featuresDetail1: "Customers can view chit details, make payments, and receive alerts.",
        featureTitle2: "Easy Chit Management",
        featuresDetail2: "Track chit payments, due dates, and customer records easily.",
        featureTitle3: "Refer & Earn",
        featuresDetail3: "Encourage customers to refer others and earn rewards on successful joins.",
        featureTitle4: "Reward for Timely Payments",
        featuresDetail4: "Customers who pay before the due date can earn reward points.",
        featureTitle5: "Your Customer in Your Hand",
        featuresDetail5: "Stay connected with your customers anytime via your branded app.",
        featureTitle6: "Secure & Reliable",
        featuresDetail6: "Data securely stored in the cloud with 24/7 access.",
        digitalTitle: "Go Digital. Grow Your Business.",
        digitalDescription: "Offer your customers a modern mobile experience and manage your gold chit business with ease and security",
        demoBtnText: "Free Demo",
        mockHeading: "Your Chit Business, Digitized",
        mockDescription: "Experience the modern, intuitive interface of our gold chit management app.",
        jnanaDescription: "<strong>Jnana Inventive </strong> is a tech-forward company focused on digital innovation. SaaSGold is proudly developed and maintained by Jnana Inventive to help jewellery businesses manage their gold chit operations efficiently."
    },
    
    ta: {
        question: "ஏன் <span style='color:#bfa14a;'>SaaSGold?</span> தேர்வு செய்ய வேண்டும்?",
        answer: "நவீன, பாதுகாப்பான தளத்தின் மூலம் உங்கள் நகை வணிகத்தை வலுப்படுத்துங்கள்.",
        featureTitle1: "தனிப்பயனாக்கப்பட்ட மொபைல் ஆப்",
        featuresDetail1: "வாடிக்கையாளர்கள் சிட் விவரங்களை பார்க்கலாம், கட்டணங்களை செலுத்தலாம், அறிவிப்புகளை பெறலாம்.",
        featureTitle2: "சுலப சிட் மேலாண்மை",
        featuresDetail2: "சிட் கட்டணங்கள், கடைசி தேதிகள் மற்றும் வாடிக்கையாளர் விவரங்களை கண்காணிக்கலாம்.",
        featureTitle3: "பரிந்துரையிடுங்கள், வருமானம் பெறுங்கள்",
        featuresDetail3: "புதிய வாடிக்கையாளர்களை பரிந்துரைக்க வாடிக்கையாளர்களை ஊக்குவிக்கவும் மற்றும் வெற்றிகரமாக சேரும்போது பரிசுகளை வழங்கவும்.",
        featureTitle4: "காலத்திற்குள் கட்டணம் செலுத்தினால் பரிசு",
        featuresDetail4: "கடந்த தேதி முன் கட்டணம் செலுத்தும் வாடிக்கையாளர்களுக்கு ரிவார்டு பாயிண்ட் வழங்கப்படுகிறது.",
        featureTitle5: "உங்கள் வாடிக்கையாளர் உங்கள் கையில்",
        featuresDetail5: "உங்கள் பிராண்டட் ஆப்பின் மூலம் எப்போதும் உங்கள் வாடிக்கையாளர்களுடன் தொடர்பில் இருங்கள்.",
        featureTitle6: "பாதுகாப்பான மற்றும் நம்பகமானது",
        featuresDetail6: "மேகத்தில் பாதுகாப்பாக சேமிக்கப்பட்ட தரவுகள் 24/7 அணுகலுடன்.",
        digitalTitle: "டிஜிட்டல் ஆகுங்கள். உங்கள் வணிகத்தை வளர்த்தெடுக்குங்கள்.",
        digitalDescription: "வாடிக்கையாளர்களுக்கு நவீன மொபைல் அனுபவத்தை வழங்குங்கள் மற்றும் உங்கள் நகை சிட் வணிகத்தை எளிதாகவும் பாதுகாப்பாகவும் நிர்வகிக்கவும்.",
        demoBtnText: "டெமோவைக் பெறுங்கள்",
        mockHeading: "உங்கள் சிட் வணிகம், இப்போது டிஜிட்டல் வடிவத்தில்",
        mockDescription: "நவீன, புரிந்திரமான இடைமுகத்தை அனுபவிக்கவும்.",
        jnanaDescription: "<strong>ஞானா இன்வென்டிவ்</strong> என்பது டிஜிட்டல் புதுமையை முன்னிறுத்தும் தொழில்நுட்ப நிறுவனம். நகை வணிகங்களுக்காக SaaSGold ஐ உருவாக்கியது ஞானா இன்வென்டிவ்."
    }
};

function setLang(lang) {
    window.localStorage.setItem("lang", lang)
    for (let key in translations[lang]) {
        document.getElementById(key).innerHTML = translations[lang][key];
    }
    var language = document.getElementById("language")
    console.log(language, lang)
    window.localStorage.setItem("lang", lang)
    if (lang == 'en') {
        language.innerText = "English"
    } else if (lang == 'ta') {
        language.innerText = "தமிழ்"
    } else {
        language.innerText = "Language"
    }
}

// Default to English
var langu = window.localStorage.getItem("lang")
setLang(langu || 'en');