// ==========================================
// SANKARI MALARAGAM - MAIN SCRIPT
// Bilingual Support (Tamil & English) + Voice Search
// ==========================================

const PHONE_NUMBER = "919159959156"; // WhatsApp & Call Number

// Toast Notification System
function showToast(message, icon = "🌸") {
    let toast = document.getElementById("siteToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "siteToast";
        toast.className = "site-toast";
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="toast-icon">${icon}</span> <span>${message}</span>`;
    toast.classList.add("show");

    clearTimeout(toast.timeoutId);
    toast.timeoutId = setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}

// ------------------------------------------
// BILINGUAL TRANSLATION DICTIONARY
// ------------------------------------------
const translations = {
    en: {
        nav_home: "Home",
        nav_collections: "Collections",
        nav_gallery: "Gallery",
        nav_reviews: "Reviews",
        nav_about: "About",
        nav_contact: "Contact",
        nav_wishlist: "Wishlist",
        nav_cart: "Cart",
        nav_order_now: "Order Now",
        hero_welcome: "Welcome to",
        hero_title: "SANKARI MALARAGAM",
        hero_subtitle: "Traditional & Trending Wedding Garlands",
        hero_desc: "We create breathtaking wedding and reception garlands using fresh, handpicked flowers with traditional craftsmanship and contemporary elegance.",
        hero_btn_explore: "Explore Collections",
        hero_btn_inquiry: "WhatsApp Inquiry",
        why_title: "Why Choose Sankari Malaragam?",
        why_fresh: "Fresh Flowers",
        why_fresh_desc: "100% farm-fresh flowers handpicked each morning for long-lasting fragrance.",
        why_hand: "Handcrafted with Love",
        why_hand_desc: "Traditional craftsmanship woven meticulously to make your wedding look divine.",
        why_time: "On-Time Muhurtham Delivery",
        why_time_desc: "Guaranteed punctual delivery directly to your marriage hall or residence.",
        why_custom: "Customizable Designs",
        why_custom_desc: "Garland styles tailored to match the bride and groom’s attire colors.",
        col_title: "Our Signature Collections",
        col_subtitle: "Click on any collection to view designs, approximate prices, and add to your cart",
        col_marriage: "Marriage Garlands",
        col_marriage_desc: "Traditional wedding malai crafted with roses, lotus & fresh jasmine.",
        col_reception: "Reception Garlands",
        col_reception_desc: "Lightweight pastel & orchid designs crafted for reception style.",
        col_temple: "Temple Garlands",
        col_temple_desc: "Divine tulsi, sevvanthi, and jasmine garlands for auspicious poojas.",
        col_custom: "Custom Designs",
        col_custom_desc: "Special personalized garlands made to your exact color theme.",
        col_view: "View Collection →",
        gallery_title: "Our Signature Creations & Gallery",
        gallery_subtitle: "Real wedding & temple garlands crafted by S. Sivan. Tap any garland to view details & order directly!",
        reviews_title: "What Our Customers Say",
        reviews_subtitle: "Loved by brides, grooms, and families across Tamil Nadu ❤️",
        about_title: "About Sankari Malaragam",
        about_h3: "Creating Beautiful Memories with Fresh Flowers",
        about_p1: "Founded and masterfully managed by S. Sivan (Proprietor), Sankari Malaragam specializes in handcrafted traditional and trending wedding, reception, and temple garlands. We believe a garland is not just flowers strung together—it is a sacred symbol of love, togetherness, and tradition for your once-in-a-lifetime occasion.",
        about_p2: "From classic Madurai Malli and fragrant red roses to trending orchid weave and pastel bridal garlands, Sivan sir and our dedicated artisans bring perfection, freshness, and devotion to every single knot.",
        about_years: "Years of Floral Heritage",
        about_weddings: "Weddings Graced",
        about_fresh_badge: "Fresh Farm Flower Guarantee",
        contact_title: "Contact & Visit Us",
        contact_subtitle: "Let us make your auspicious ceremonies more vibrant and memorable!",
        contact_prop: "Proprietor: S. Sivan",
        contact_phone: "Phone:",
        contact_wa: "WhatsApp:",
        contact_addr_label: "Address:",
        contact_addr_val: "Jeba Garden, Reddiyar Patti Road, N G O 'A' Colony, Tirunelveli, Tamil Nadu",
        contact_insta: "Instagram:",
        contact_btn_wa: "Chat on WhatsApp",
        contact_btn_maps: "Open Google Maps",
        voice_btn_label: "Voice Search 🎙️",
        voice_helper_tip: "🎙️ Prefer voice? You can also place orders by sending an audio note on WhatsApp!",
        footer_sub: "Beautiful Wedding Garlands for Your Special Moments | Proprietor: S. Sivan",
        footer_copy: "© 2026 Sankari Malaragam. Prop. S. Sivan. All Rights Reserved. Crafted with love for special occasions."
    },
    ta: {
        nav_home: "முகப்பு",
        nav_collections: "மாலை வகைகள்",
        nav_gallery: "புகைப்படங்கள்",
        nav_reviews: "கருத்துகள்",
        nav_about: "எங்களை பற்றி",
        nav_contact: "தொடர்பு",
        nav_wishlist: "விருப்பப்பட்டியல்",
        nav_cart: "கூடை",
        nav_order_now: "ஆர்டர் செய்ய",
        hero_welcome: "வரவேற்கிறோம்",
        hero_title: "சங்கரி மலரகம்",
        hero_subtitle: "பாரம்பரிய & நவீன திருமண மாலைகள்",
        hero_desc: "அனைத்து சுப நிகழ்ச்சிகளுக்கும் தரமான புதிய மலர்களைக் கொண்டு பாரம்பரிய கைவண்ணத்தில் நேர்த்தியாக உருவாக்கப்பட்ட திருமண மற்றும் வரவேற்பு மாலைகள்.",
        hero_btn_explore: "மாலைகளை காண்க",
        hero_btn_inquiry: "வாட்ஸ்அப் விசாரிக்க",
        why_title: "ஏன் சங்கரி மலரகம்?",
        why_fresh: "புதிய பண்ணை மலர்கள்",
        why_fresh_desc: "தினசரி அதிகாலை பறிக்கப்பட்ட நறுமணமிக்க 100% தூய புதிய மலர்கள் மட்டுமே.",
        why_hand: "அன்பான கைவண்ணம்",
        why_hand_desc: "உங்கள் திருமண நிகழ்வை மங்களகரமாக்க பாரம்பரிய முறைப்படி நேர்த்தியாக தொடுக்கப்படும்.",
        why_time: "சரியான நேர டெலிவரி",
        why_time_desc: "சுப முகூர்த்த நேரத்திற்குள் திருமண மண்டபத்திற்கே நேரடி டெலிவரி உத்தரவாதம்.",
        why_custom: "விருப்பத்திற்கேற்ற வடிவமைப்பு",
        why_custom_desc: "மணமக்கள் ஆடை வண்ணத்திற்கு ஏற்ப நேர்த்தியாக தயாரித்து தருகிறோம்.",
        col_title: "எங்களின் மாலை வகைகள்",
        col_subtitle: "வடிவமைப்புகள், தோராய விலை விவரங்களை அறிய கிளிக் செய்யவும்",
        col_marriage: "திருமண மாலைகள்",
        col_marriage_desc: "ரோஜா, தாமரை, மல்லி மலர்களால் தொடுக்கப்பட்ட பாரம்பரிய மங்கல மாலைகள்.",
        col_reception: "வரவேற்பு மாலைகள்",
        col_reception_desc: "ஆர்க்கிட், ரோஜா மற்றும் பேஸ்டல் மலர்களால் நவீன வரவேற்பு மாலைகள்.",
        col_temple: "கோவில் & பூஜை மாலைகள்",
        col_temple_desc: "துளசி, செவ்வந்தி, மல்லி மலர்களால் இறைவனுக்கான புனித மாலைகள்.",
        col_custom: "சிறப்பு தனிப்பயன் மாலைகள்",
        col_custom_desc: "உங்கள் விருப்பத்திற்கேற்ப பிரத்யேக வண்ணத்தில் வடிவமைக்கப்படும் மாலைகள்.",
        col_view: "மாலைகளை காண்க →",
        gallery_title: "எங்களின் மாலை வடிவமைப்பு புகைப்படங்கள்",
        gallery_subtitle: "S. சிவன் அவர்களின் கைவண்ணத்தில் உருவான மாலைகள். கிளிக் செய்து எளிதாக ஆர்டர் செய்யலாம்!",
        reviews_title: "வாடிக்கையாளர்களின் நற்சான்றிதழ்கள்",
        reviews_subtitle: "தமிழ்நாடு முழுவதும் மணமக்கள் மற்றும் குடும்பங்களின் நன்மதிப்பைப் பெற்றது ❤️",
        about_title: "சங்கரி மலரகம் பற்றி",
        about_h3: "புதிய மலர்களால் அழியா நினைவுகளை உருவாக்குகிறோம்",
        about_p1: "உரிமையாளர் S. சிவன் அவர்களின் திறமையான வழிகாட்டுதலில், சங்கரி மலரகம் பாரம்பரிய மற்றும் நவீன திருமண, வரவேற்பு, மற்றும் கோவில் மாலைகளை சிறந்த முறையில் உருவாக்கி வருகிறது. மாலை என்பது வெறும் பூக்கள் மட்டுமல்ல, வாழ்க்கையின் மிக முக்கியமான நாளில் புனிதமான அடையாளமாகும்.",
        about_p2: "மதுரை மல்லி, ரோஜா இதழ்கள் முதல் நவீன ஆர்க்கிட் மாலைகள் வரை, சிவன் சார் மற்றும் எங்கள் கலைஞர்கள் அர்ப்பணிப்புடன் தொடுக்கிறார்கள்.",
        about_years: "ஆண்டுகள் பாரம்பரிய சேவை",
        about_weddings: "திருமணங்கள் அலங்கரித்தோம்",
        about_fresh_badge: "100% புதிய மலர்கள் உத்தரவாதம்",
        contact_title: "தொடர்பு மற்றும் முகவரி",
        contact_subtitle: "உங்கள் சுப நிகழ்வுகளை மேலும் அழகாக்க இன்றே தொடர்பு கொள்ளுங்கள்!",
        contact_prop: "உரிமையாளர்: S. சிவன்",
        contact_phone: "தொலைபேசி:",
        contact_wa: "வாட்ஸ்அப்:",
        contact_addr_label: "முகவரி:",
        contact_addr_val: "ஜெபா கார்டன், ரெட்டியார்பட்டி ரோடு, N G O 'A' காலனி, திருநெல்வேலி, தமிழ்நாடு",
        contact_insta: "இன்ஸ்டாகிராம்:",
        contact_btn_wa: "வாட்ஸ்அப்பில் தொடர்புகொள்ள",
        contact_btn_maps: "கூகுள் மேப்பில் பார்க்க",
        voice_btn_label: "பேசி தேடலாம் 🎙️",
        voice_helper_tip: "🎙️ டைப் செய்ய சிரமமா? வாட்ஸ்அப்பில் வாய்ஸ் மெசேஜ் (Voice Note) மூலமாகவும் எளிதாக ஆர்டர் செய்யலாம்!",
        footer_sub: "உங்கள் சுப நிகழ்வுகளுக்கு அழகான மாலைகள் | உரிமையாளர்: S. சிவன்",
        footer_copy: "© 2026 சங்கரி மலரகம். உரிமையாளர்: S. சிவன். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    }
};

function getCurrentLang() {
    return localStorage.getItem("sankari_lang") || "en";
}

function setLanguage(lang) {
    // Store selected language
    localStorage.setItem("sankari_lang", lang);
    const dict = translations[lang] || translations.en;

    // Update ALL text elements that have data-i18n attribute (whole website content)
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    // Language toggle button – show the OTHER language (what clicking it will switch to)
    const toggleBtn = document.getElementById("langToggleBtn");
    if (toggleBtn) {
        toggleBtn.innerHTML = lang === "ta"
            ? `<i class="fa-solid fa-language"></i> English`
            : `<i class="fa-solid fa-language"></i> தமிழ்`;
    }

    // Voice-search button label
    const voiceBtnText = document.getElementById("voiceBtnText");
    if (voiceBtnText) {
        voiceBtnText.textContent = lang === "ta" ? "பேசி தேடலாம்" : "Voice Search";
    }
}

function toggleLanguage() {
    const current = getCurrentLang();
    const next = current === "ta" ? "en" : "ta";
    setLanguage(next);
    showToast(next === "ta" ? "தமிழ் மொழிக்கு மாற்றப்பட்டது 🌸" : "Language switched to English 🌸");
}

// ------------------------------------------
// VOICE SEARCH & ASSISTANT (Web Speech API)
// ------------------------------------------
let recognitionInstance = null;

function startVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        showToast("Voice search is supported in Chrome, Edge & Android browsers! 🎙️");
        return;
    }

    if (recognitionInstance) {
        try { recognitionInstance.stop(); } catch (e) {}
    }

    const currentLang = getCurrentLang();
    const recognition = new SpeechRecognition();
    recognitionInstance = recognition;

    recognition.lang = currentLang === "ta" ? "ta-IN" : "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    showVoiceModal(true, currentLang === "ta" ? "கேட்கிறது... சொல்லுங்கள் 🎙️" : "Listening... Speak now 🎙️");

    recognition.onresult = function(event) {
        const spoken = event.results[0][0].transcript.toLowerCase().trim();
        showVoiceModal(true, `"${spoken}"...`);
        setTimeout(() => {
            handleVoiceCommand(spoken);
            showVoiceModal(false);
        }, 800);
    };

    recognition.onerror = function(event) {
        showVoiceModal(false);
        showToast("Could not recognize voice. Please try again 🎙️");
    };

    recognition.onend = function() {
        showVoiceModal(false);
    };

    try {
        recognition.start();
    } catch (e) {
        showVoiceModal(false);
    }
}

function stopVoiceSearch() {
    if (recognitionInstance) {
        try { recognitionInstance.stop(); } catch (e) {}
    }
    showVoiceModal(false);
}

function showVoiceModal(show, text = "") {
    let modal = document.getElementById("voiceModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "voiceModal";
        modal.className = "voice-modal";
        modal.innerHTML = `
            <div class="voice-modal-content">
                <div class="voice-pulse-circle">
                    <i class="fa-solid fa-microphone"></i>
                </div>
                <h3 id="voiceModalText">Listening... 🎙️</h3>
                <p class="voice-hint-text">
                    எ.கா: "திருமண மாலை", "வரவேற்பு", "மல்லி", "Cart", "Address", "Sivan"
                </p>
                <button type="button" class="voice-cancel-btn" onclick="stopVoiceSearch()">Cancel / முடிந்தது</button>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const textEl = document.getElementById("voiceModalText");
    if (textEl && text) textEl.textContent = text;

    if (show) {
        modal.classList.add("show");
    } else {
        modal.classList.remove("show");
    }
}

function handleVoiceCommand(text) {
    const t = text.toLowerCase();
    showToast(`Searching: "${text}" 🎙️`);

    // Match keywords in Tamil & English
    if (t.includes("திருமணம்") || t.includes("கல்யாணம்") || t.includes("wedding") || t.includes("marriage")) {
        window.location.href = "marriage.html";
    } else if (t.includes("வரவேற்பு") || t.includes("reception") || t.includes("ஆர்க்கிட்") || t.includes("orchid")) {
        window.location.href = "reception.html";
    } else if (t.includes("கோவில்") || t.includes("பூஜை") || t.includes("மல்லி") || t.includes("temple") || t.includes("jasmine") || t.includes("செவ்வந்தி")) {
        window.location.href = "temple.html";
    } else if (t.includes("தனிப்பயன்") || t.includes("கஸ்டம்") || t.includes("custom") || t.includes("ஸ்பெஷல்")) {
        window.location.href = "custom.html";
    } else if (t.includes("கூடை") || t.includes("கார்ட்") || t.includes("cart") || t.includes("order")) {
        window.location.href = "cart.html";
    } else if (t.includes("விருப்ப") || t.includes("wishlist") || t.includes("விஷ்")) {
        window.location.href = "wishlist.html";
    } else if (t.includes("தொடர்பு") || t.includes("contact") || t.includes("முகவரி") || t.includes("address") || t.includes("சிவன்") || t.includes("sivan") || t.includes("போன்")) {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = "index.html#contact";
        }
    } else if (t.includes("புகைப்படம்") || t.includes("gallery") || t.includes("கேலரி")) {
        const gallerySection = document.getElementById("gallery");
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = "index.html#gallery";
        }
    } else {
        showToast(`Heard: "${text}". Opening Collections...`);
        const colSection = document.getElementById("collections");
        if (colSection) {
            colSection.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = "index.html#collections";
        }
    }
}

// ------------------------------------------
// Image Popup (Lightbox with Quick Order)
// ------------------------------------------
function openImage(imageSrc, title = "Handcrafted Garland", price = 0, category = "Special Collection") {
    const popup = document.getElementById("imagePopup");
    const popupImg = document.getElementById("popupImage");
    if (!popup || !popupImg) return;

    popupImg.src = imageSrc;

    const titleEl = document.getElementById("popupTitle");
    const catEl = document.getElementById("popupCategory");
    const priceEl = document.getElementById("popupPrice");
    const waBtn = document.getElementById("popupWaBtn");
    const cartBtn = document.getElementById("popupCartBtn");

    if (titleEl) titleEl.textContent = title;
    if (catEl) catEl.textContent = category;
    if (priceEl) {
        priceEl.textContent = price > 0 ? `Approx. ₹${Number(price).toLocaleString("en-IN")}` : "Price on Request";
    }

    if (waBtn) {
        const text = encodeURIComponent(`Hello S. Sivan sir (Sankari Malaragam),\nI am interested in ordering this garland design:\n🌸 *${title}* (${category})\n💰 Approx. Price: ₹${price > 0 ? Number(price).toLocaleString("en-IN") : "On Request"}\n\nPlease share availability and delivery details.`);
        waBtn.href = `https://wa.me/${PHONE_NUMBER}?text=${text}`;
    }

    if (cartBtn) {
        cartBtn.onclick = function() {
            addToCart(title, imageSrc, price, category);
            closeImage();
        };
    }

    popup.style.display = "flex";
}

function closeImage() {
    const popup = document.getElementById("imagePopup");
    if (popup) {
        popup.style.display = "none";
    }
}

const imagePopup = document.getElementById("imagePopup");
if (imagePopup) {
    imagePopup.addEventListener("click", function(event) {
        if (event.target === this) {
            closeImage();
        }
    });
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeImage();
        stopVoiceSearch();
    }
});

// ------------------------------------------
// Mobile Navigation Toggle
// ------------------------------------------
function toggleMobileMenu() {
    const navbar = document.querySelector(".navbar");
    const toggleBtn = document.querySelector(".nav-toggle");
    if (navbar) {
        navbar.classList.toggle("active");
    }
    if (toggleBtn) {
        toggleBtn.classList.toggle("open");
    }
}

document.addEventListener("click", function(e) {
    const navbar = document.querySelector(".navbar");
    const toggleBtn = document.querySelector(".nav-toggle");
    if (navbar && navbar.classList.contains("active")) {
        if (!navbar.contains(e.target) && (!toggleBtn || !toggleBtn.contains(e.target))) {
            navbar.classList.remove("active");
            if (toggleBtn) toggleBtn.classList.remove("open");
        }
    }
});

// ------------------------------------------
// Badge Counters (Cart & Wishlist)
// ------------------------------------------
function updateBadges() {
    const cart = JSON.parse(localStorage.getItem("sankari_cart")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const totalCartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const totalWishlistCount = wishlist.length;

    document.querySelectorAll(".cart-count-badge").forEach(el => {
        el.textContent = totalCartCount;
        el.style.display = totalCartCount > 0 ? "inline-flex" : "none";
    });

    document.querySelectorAll(".wishlist-count-badge").forEach(el => {
        el.textContent = totalWishlistCount;
        el.style.display = totalWishlistCount > 0 ? "inline-flex" : "none";
    });
}

// ------------------------------------------
// Cart Management
// ------------------------------------------
function getCart() {
    return JSON.parse(localStorage.getItem("sankari_cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("sankari_cart", JSON.stringify(cart));
    updateBadges();
}

function addToCart(name, image, price, category = "Garlands") {
    let cart = getCart();
    const existingIndex = cart.findIndex(item => item.name === name);

    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
        showToast(`${name} quantity increased in Cart! 🛒`);
    } else {
        cart.push({
            name: name,
            image: image,
            price: Number(price) || 0,
            quantity: 1,
            category: category
        });
        showToast(`${name} added to Cart! 🛒`);
    }

    saveCart(cart);

    if (document.getElementById("cartItemsContainer")) {
        displayCart();
    }
}

function updateCartQuantity(index, change) {
    let cart = getCart();
    if (!cart[index]) return;

    cart[index].quantity = (cart[index].quantity || 1) + change;

    if (cart[index].quantity <= 0) {
        const item = cart[index];
        if (confirm(`Remove "${item.name}" from your cart?`)) {
            cart.splice(index, 1);
            showToast(`${item.name} removed from cart`);
        } else {
            cart[index].quantity = 1;
        }
    }

    saveCart(cart);
    displayCart();
}

function removeFromCart(index) {
    let cart = getCart();
    if (!cart[index]) return;
    const removedItem = cart.splice(index, 1)[0];
    saveCart(cart);
    displayCart();
    showToast(`${removedItem.name} removed from Cart`);
}

function clearCart() {
    let cart = getCart();
    if (cart.length === 0) return;
    if (confirm("Are you sure you want to clear your entire cart?")) {
        localStorage.removeItem("sankari_cart");
        updateBadges();
        displayCart();
        showToast("Cart has been cleared");
    }
}

function displayCart() {
    const container = document.getElementById("cartItemsContainer");
    const summaryContainer = document.getElementById("cartSummaryContainer");
    if (!container) return;

    const cart = getCart();
    const isTa = getCurrentLang() === "ta";

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🛒</div>
                <h3>${isTa ? "உங்கள் கூடை காலியாக உள்ளது" : "Your Shopping Cart is Empty"}</h3>
                <p>${isTa ? "எங்களின் மாலை வகைகளை பார்த்து உங்களுக்கு பிடித்த மாலைகளை சேர்க்கவும்!" : "Explore our handcrafted garlands collection and add your favourites!"}</p>
                <a href="index.html#collections" class="btn-primary">${isTa ? "மாலைகளை காண்க" : "Browse Collections"}</a>
            </div>
        `;
        if (summaryContainer) {
            summaryContainer.innerHTML = "";
            summaryContainer.style.display = "none";
        }
        return;
    }

    if (summaryContainer) {
        summaryContainer.style.display = "block";
    }

    let subtotal = 0;
    let totalItems = 0;

    let itemsHtml = `
        <div class="cart-table-wrapper">
            <table class="cart-table">
                <thead>
                    <tr>
                        <th>${isTa ? "மாலை" : "Garland"}</th>
                        <th>${isTa ? "விவரம்" : "Details"}</th>
                        <th>${isTa ? "தோராய விலை" : "Approx. Price"}</th>
                        <th>${isTa ? "எண்ணிக்கை" : "Quantity"}</th>
                        <th>${isTa ? "மொத்தம்" : "Subtotal"}</th>
                        <th>${isTa ? "நீக்கு" : "Action"}</th>
                    </tr>
                </thead>
                <tbody>
    `;

    cart.forEach((item, index) => {
        const price = Number(item.price) || 0;
        const qty = Number(item.quantity) || 1;
        const lineTotal = price * qty;
        subtotal += lineTotal;
        totalItems += qty;

        itemsHtml += `
            <tr class="cart-item-row">
                <td class="cart-product-img">
                    <img src="${item.image}" alt="${item.name}" onclick="openImage('${item.image}', '${item.name}', ${price}, '${item.category || "Garlands"}')">
                </td>
                <td class="cart-product-info">
                    <h4>${item.name}</h4>
                    <span class="category-tag">${item.category || "Fresh Garland"}</span>
                </td>
                <td class="cart-price">₹${price.toLocaleString("en-IN")}</td>
                <td class="cart-qty-cell">
                    <div class="qty-control">
                        <button type="button" class="qty-btn" onclick="updateCartQuantity(${index}, -1)" title="Decrease quantity">−</button>
                        <span class="qty-value">${qty}</span>
                        <button type="button" class="qty-btn" onclick="updateCartQuantity(${index}, 1)" title="Increase quantity">+</button>
                    </div>
                </td>
                <td class="cart-line-total">₹${lineTotal.toLocaleString("en-IN")}</td>
                <td class="cart-action-cell">
                    <button type="button" class="btn-delete" onclick="removeFromCart(${index})" title="Remove item">
                        <i class="fa-solid fa-trash-can"></i> ${isTa ? "நீக்கு" : "Remove"}
                    </button>
                </td>
            </tr>
        `;
    });

    itemsHtml += `
                </tbody>
            </table>
        </div>
        <div class="cart-actions-bar">
            <button class="btn-outline" onclick="clearCart()">
                <i class="fa-solid fa-trash"></i> ${isTa ? "கூடையை காலி செய்" : "Clear Cart"}
            </button>
            <a href="index.html#collections" class="btn-continue">
                <i class="fa-solid fa-plus"></i> ${isTa ? "கூடுதல் மாலைகள் சேர்க்க" : "Add More Garlands"}
            </a>
        </div>
    `;

    container.innerHTML = itemsHtml;

    if (summaryContainer) {
        summaryContainer.innerHTML = `
            <div class="order-summary-card">
                <h3><i class="fa-solid fa-receipt"></i> ${isTa ? "ஆர்டர் விவரம்" : "Order Summary"}</h3>
                <div class="summary-line">
                    <span>${isTa ? "மொத்த மாலைகள்:" : "Total Garlands:"}</span>
                    <strong>${totalItems}</strong>
                </div>
                <div class="summary-line">
                    <span>${isTa ? "தோராய தொகை:" : "Approximate Subtotal:"}</span>
                    <strong>₹${subtotal.toLocaleString("en-IN")}</strong>
                </div>
                <div class="summary-divider"></div>
                <div class="summary-line total-line">
                    <span>${isTa ? "தோராய மொத்த தொகை:" : "Approximate Grand Total:"}</span>
                    <span class="total-amount">₹${subtotal.toLocaleString("en-IN")}*</span>
                </div>
                <p class="price-disclaimer">
                    <i class="fa-solid fa-circle-info"></i> ${isTa ? "*குறிப்பு: மாலைகளின் விலை தோராயமானது. சந்தை நிலவரம் மற்றும் தனிப்பயன் அளவைப் பொறுத்து மாறுபடலாம்." : "*Note: Garland prices are approximate. Final prices depend on seasonal fresh flower rates and custom size requirements."}
                </p>

                <div class="order-form-fields">
                    <h4>${isTa ? "வாடிக்கையாளர் விவரம் (விருப்பப்பட்டால்):" : "Customer Details (Optional):"}</h4>
                    <div class="form-group">
                        <label for="custName"><i class="fa-solid fa-user"></i> ${isTa ? "உங்கள் பெயர்:" : "Your Name:"}</label>
                        <input type="text" id="custName" placeholder="${isTa ? 'உங்கள் பெயரை உள்ளிடவும்' : 'Enter your name'}">
                    </div>
                    <div class="form-group">
                        <label for="eventDate"><i class="fa-solid fa-calendar"></i> ${isTa ? "நிகழ்ச்சி / திருமண தேதி:" : "Occasion / Wedding Date:"}</label>
                        <input type="date" id="eventDate">
                    </div>
                    <div class="form-group">
                        <label for="orderNotes"><i class="fa-solid fa-comment-dots"></i> ${isTa ? "முகவரி / விசேஷ குறிப்புகள்:" : "Special Requirements / Location:"}</label>
                        <textarea id="orderNotes" rows="2" placeholder="${isTa ? 'எ.கா: காலை 6 மணிக்கு வேண்டும், மண்டபம் முகவரி...' : 'e.g. Need by 6 AM, Mandapam delivery...'}"></textarea>
                    </div>
                </div>

                <button class="whatsapp-checkout-btn" onclick="sendWhatsAppOrder()">
                    <i class="fa-brands fa-whatsapp"></i> ${isTa ? "வாட்ஸ்அப்பில் ஆர்டர் செய்க" : "Order on WhatsApp"}
                </button>
            </div>
        `;
    }
}

// WhatsApp Order Generator
function sendWhatsAppOrder() {
    const cart = getCart();
    if (cart.length === 0) {
        alert("Your cart is empty! Please add some garlands first.");
        return;
    }

    const nameInput = document.getElementById("custName");
    const dateInput = document.getElementById("eventDate");
    const notesInput = document.getElementById("orderNotes");

    const custName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Not specified";
    const eventDate = dateInput && dateInput.value ? dateInput.value : "To be decided";
    const notes = notesInput && notesInput.value.trim() ? notesInput.value.trim() : "None";

    let subtotal = 0;
    let itemsText = "";

    cart.forEach((item, idx) => {
        const price = Number(item.price) || 0;
        const qty = Number(item.quantity) || 1;
        const total = price * qty;
        subtotal += total;
        itemsText += `${idx + 1}. *${item.name}*\n   Qty: ${qty} x ₹${price.toLocaleString("en-IN")} = ₹${total.toLocaleString("en-IN")}\n`;
    });

    let message = `🌸 *NEW GARLAND ORDER - SANKARI MALARAGAM* 🌸\n\n`;
    message += `👤 *Customer Name:* ${custName}\n`;
    message += `📅 *Occasion Date:* ${eventDate}\n`;
    if (notes !== "None") {
        message += `📝 *Notes/Location:* ${notes}\n`;
    }
    message += `\n🛒 *ORDERED GARLANDS:*\n`;
    message += `------------------------------------\n`;
    message += itemsText;
    message += `------------------------------------\n`;
    message += `💰 *Approximate Total:* ₹${subtotal.toLocaleString("en-IN")}*\n\n`;
    message += `_(Note: Approximate price subject to fresh flower market rates)_\n\n`;
    message += `Hello Sivan sir, please confirm my garland order and share booking details. Thank you! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
}

// ------------------------------------------
// Wishlist Management
// ------------------------------------------
function addToWishlist(name, image, price = 0) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.some(item => item.name === name)) {
        showToast(`${name} is already in your Wishlist! ❤️`);
        return;
    }

    wishlist.push({
        name: name,
        image: image,
        price: Number(price) || 0
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateBadges();
    showToast(`${name} added to Wishlist! ❤️`);
}

function displayWishlist() {
    const container = document.getElementById("wishlistContainer");
    if (!container) return;

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isTa = getCurrentLang() === "ta";

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">❤️</div>
                <h3>${isTa ? "விருப்பப்பட்டியல் காலியாக உள்ளது" : "Your Wishlist is Empty"}</h3>
                <p>${isTa ? "உங்களுக்கு பிடித்த திருமண, வரவேற்பு மற்றும் கோவில் மாலைகளை இங்கே சேமிக்கலாம்!" : "Save your favourite wedding, reception and temple garlands here!"}</p>
                <a href="index.html#collections" class="btn-primary">${isTa ? "மாலைகளை காண்க" : "Browse Collections"}</a>
            </div>
        `;
        return;
    }

    container.innerHTML = wishlist.map((item, index) => {
        const price = Number(item.price) || 0;
        const priceText = price > 0 ? `Approx. ₹${price.toLocaleString("en-IN")}` : "Price on request";
        return `
            <div class="product-card">
                <div class="img-wrapper">
                    <img src="${item.image}" alt="${item.name}" onclick="openImage('${item.image}', '${item.name.replace(/'/g, "\\'")}', ${price}, 'Wishlist')">
                </div>
                <h3>${item.name}</h3>
                <div class="product-price">${priceText}</div>
                <div class="card-btn-group">
                    <button class="btn-add-cart" onclick="addToCart('${item.name.replace(/'/g, "\\'")}', '${item.image}', ${price})">
                        <i class="fa-solid fa-cart-shopping"></i> ${isTa ? "கூடையில் சேர்க்க" : "Add to Cart"}
                    </button>
                    <button class="btn-remove-wishlist" onclick="removeFromWishlist(${index})" title="Remove from wishlist">
                        <i class="fa-solid fa-trash-can"></i> ${isTa ? "நீக்கு" : "Remove"}
                    </button>
                </div>
            </div>
        `;
    }).join("");
}

function removeFromWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const removed = wishlist.splice(index, 1)[0];
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateBadges();
    displayWishlist();
    if (removed) {
        showToast(`${removed.name} removed from Wishlist`);
    }
}

// ------------------------------------------
// Initialization on page load
// ------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    // Set initial language from storage or default
    const savedLang = getCurrentLang();
    setLanguage(savedLang);

    updateBadges();

    if (document.getElementById("wishlistContainer")) {
        displayWishlist();
    }
    if (document.getElementById("cartItemsContainer")) {
        displayCart();
    }
});
