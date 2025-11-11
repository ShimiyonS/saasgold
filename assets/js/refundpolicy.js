const translations = {
    ta: {
        refundPolicy: `<h4 class="my-4 fw-bold">🔒 REFUND POLICY – SaaSGold 🔒</h4>
        <p class="mb-2"><strong>Effective Date:</strong> 11-07-2025</p>

        <p class="mb-4">
            At SaaSGold, we are committed to delivering a reliable and high-quality AI-powered gold-saving scheme management solution for jewellery stores. We understand that circumstances may arise where you may request a cancellation or refund. Please read our refund policy carefully:
        </p>

        <h5 class="mb-2 ">1. Free Trial Period</h5>
        <ul class="mb-4">
            <li class="mb-1">We provide a free trial/demo before subscription to help you evaluate SaaSGold’s features.</li>
            <li class="mb-1">Once the paid subscription begins, refunds will only be provided under the conditions mentioned below.</li>
        </ul>

        <h5 class="mb-2">2. Subscription Fees</h5>
        <ul class="mb-4">
            <li class="mb-1">All subscription payments (monthly/annual) are <strong>non-refundable</strong> once the billing cycle has started.</li>
            <li class="mb-1">If you cancel your subscription, you will continue to have access to SaaSGold until the end of your current billing period.</li>
        </ul>

        <h5 class="mb-2">3. Eligibility for Refunds</h5>
        <p class="mb-2">Refunds may only be considered in the following cases:</p>
        <ul class="mb-4">
            <li class="mb-1"><strong>Technical Failure</strong>: If SaaSGold is unable to provide access due to a verified technical fault on our end, and the issue remains unresolved within 14 working days.</li>
            <li class="mb-1"><strong>Duplicate Payment</strong>: If you were charged more than once for the same subscription due to a technical error.</li>
        </ul>

        <h5 class="mb-2">4. Non-Refundable Cases</h5>
        <p class="mb-2">Refunds will <strong>not</strong> be issued in the following cases:</p>
        <ul class="mb-4">
            <li class="mb-1">Change of business decision (e.g., no longer wanting to use saving scheme management software).</li>
            <li class="mb-1">Lack of usage or failure to use SaaSGold features after subscription.</li>
            <li class="mb-1">Issues arising from third-party integrations (payment gateway, WhatsApp/SMS API, etc.) outside our control.</li>
        </ul>

        <h5 class="mb-2">5. How to Request a Refund</h5>
        <p class="mb-2">To initiate a refund request:</p>
        <ul class="mb-4">
            <li class="mb-1">Email us at <strong>support@saasgold.in</strong> with your registered email ID, transaction details, and reason for refund.</li>
            <li class="mb-1">Our support team will review your request and respond within <strong>7 working days.</strong></li>
            <li class="mb-1">Approved refunds will be processed within <strong>10–14 working days</strong> back to your original payment method.</li>
        </ul>

        <h5 class="mb-2">6. Policy Updates</h5>
        <p class="mb-4">SaaSGold reserves the right to modify this refund policy at any time. Any updates will be reflected on this page.</p>`
    },
    en: {
        refundPolicy: `<h4 class="my-4 fw-bold">🔒 REFUND POLICY – SaaSGold 🔒</h4>
        <p class="mb-2"><strong>Effective Date:</strong> 11-07-2025</p>

        <p class="mb-4">
            At SaaSGold, we are committed to delivering a reliable and high-quality AI-powered money-saving scheme management solution for jewellery stores. We understand that circumstances may arise where you may request a cancellation or refund. Please read our refund policy carefully:
        </p>

        <h5 class="mb-2 ">1. Free Trial Period</h5>
        <ul class="mb-4">
            <li class="mb-1">We provide a free trial/demo before subscription to help you evaluate SaaSGold’s features.</li>
            <li class="mb-1">Once the paid subscription begins, refunds will only be provided under the conditions mentioned below.</li>
        </ul>

        <h5 class="mb-2">2. Subscription Fees</h5>
        <ul class="mb-4">
            <li class="mb-1">All subscription payments (monthly/annual) are <strong>non-refundable</strong> once the billing cycle has started.</li>
            <li class="mb-1">If you cancel your subscription, you will continue to have access to SaaSGold until the end of your current billing period.</li>
        </ul>

        <h5 class="mb-2">3. Eligibility for Refunds</h5>
        <p class="mb-2">Refunds may only be considered in the following cases:</p>
        <ul class="mb-4">
            <li class="mb-1"><strong>Technical Failure</strong>: If SaaSGold is unable to provide access due to a verified technical fault on our end, and the issue remains unresolved within 14 working days.</li>
            <li class="mb-1"><strong>Duplicate Payment</strong>: If you were charged more than once for the same subscription due to a technical error.</li>
        </ul>

        <h5 class="mb-2">4. Non-Refundable Cases</h5>
        <p class="mb-2">Refunds will <strong>not</strong> be issued in the following cases:</p>
        <ul class="mb-4">
            <li class="mb-1">Change of business decision (e.g., no longer wanting to use saving scheme scheme management software).</li>
            <li class="mb-1">Lack of usage or failure to use SaaSGold features after subscription.</li>
            <li class="mb-1">Issues arising from third-party integrations (payment gateway, WhatsApp/SMS API, etc.) outside our control.</li>
        </ul>

        <h5 class="mb-2">5. How to Request a Refund</h5>
        <p class="mb-2">To initiate a refund request:</p>
        <ul class="mb-4">
            <li class="mb-1">Email us at <strong>support@saasgold.in</strong> with your registered email ID, transaction details, and reason for refund.</li>
            <li class="mb-1">Our support team will review your request and respond within <strong>7 working days.</strong></li>
            <li class="mb-1">Approved refunds will be processed within <strong>10–14 working days</strong> back to your original payment method.</li>
        </ul>

        <h5 class="mb-2">6. Policy Updates</h5>
        <p class="mb-4">SaaSGold reserves the right to modify this refund policy at any time. Any updates will be reflected on this page.</p>`
    }
};

function setLang(lang) {
    window.localStorage.setItem("lang", lang)
    for (let key in translations[lang]) {
        document.getElementById(key).innerHTML = translations[lang][key];
    }
    var language = document.getElementById("language")
    window.localStorage.setItem("lang", lang)
    if (lang === 'en') {
        language.innerText = "English"
    } else if (lang === 'ta') {
        language.innerText = "தமிழ்"
    } else {
        language.innerText = "Language"
    }
}

// Default to English
var langu = window.localStorage.getItem("lang")
setLang(langu || 'en');

