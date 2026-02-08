// ==========================================
// BANK BAHASA (SUDAH DIUPDATE)
// ==========================================
const translations = {
    // BAHASA INGGRIS (EN)
    en: {
        // --- MENU NAVIGASI (BARU) ---
        nav_home: "HOME",
        nav_about: "PROFILE",
        nav_exp: "EXPERIENCE",       // Tambahan
        nav_skills: "SKILLS",        // Tambahan
        nav_contact_link: "CONTACT", // Tambahan (Menu Tengah)
        nav_btn_wa: "WHATSAPP",      // Tambahan (Tombol Kanan)

        // --- BAGIAN HERO & ABOUT ---
        hero_title: "EXPERIENCE THE EXTRAORDINARY",
        hero_desc: "Your trusted partner for Lexus ownership. Serving with integrity and over 10 years of financial expertise.",
        hero_cta: "VIEW COLLECTION",

        about_title: "Professional Profile",
        about_p1: "Hello, I am Mohd Hafiz Bin Mazhanafi. With over 10 years of experience in the premium automotive industry and banking sector, I am dedicated to providing a seamless and transparent car buying experience.",
        about_p2: "My expertise goes beyond vehicle specs. As a former banker, I specialize in Financial Advisory to help you plan loans, trade-ins, and documentation for the best approval rates.",
        
        skill_1: "Financial & Loan Expert",
        skill_2: "10 Years Sales Experience",
        skill_3: "End-to-End Service",

        // --- BAGIAN SERVICES ---
        service_head: "WHY CHOOSE ME?",
        svc_1_title: "Expert Consultation",
        svc_1_desc: "Objective advice on selecting the perfect Lexus for your lifestyle.",
        svc_2_title: "Easy Financing",
        svc_2_desc: "Leveraging my banking background for easier loan approvals.",
        svc_3_title: "Premium Delivery",
        svc_3_desc: "A memorable and special car delivery experience directly to you.",

        // --- BAGIAN LAIN ---
        nav_cars: "COLLECTION",
        btn_inquire: "INQUIRE NOW",
        contact_head: "CONTACT ME",

        edu_title: "EDUCATION",

        exp_title: "WORK EXPERIENCE",
    },

    // BAHASA MALAYSIA (MY)
    ms: {
        // --- MENU NAVIGASI (BARU) ---
        nav_home: "UTAMA",
        nav_about: "PROFIL",
        nav_exp: "PENGALAMAN",       // Tambahan
        nav_skills: "KEMAHIRAN",     // Tambahan
        nav_contact_link: "HUBUNGI", // Tambahan (Menu Tengah)
        nav_btn_wa: "WHATSAPP",      // Tambahan (Tombol Kanan)

        // --- BAGIAN HERO & ABOUT ---
        hero_title: "ALAMI KEMEWAHAN LUAR BIASA",
        hero_desc: "Rakan dipercayai anda untuk pemilikan Lexus. Melayani dengan integriti dan pengalaman kewangan lebih 10 tahun.",
        hero_cta: "LIHAT KOLEKSI",

        about_title: "Profil Profesional",
        about_p1: "Halo, saya Mohd Hafiz Bin Mazhanafi. Dengan pengalaman lebih 10 tahun dalam industri automotif premium dan sektor perbankan, saya berdedikasi memberikan pengalaman pembelian kereta yang telus dan lancar.",
        about_p2: "Kepakaran saya melangkaui spesifikasi kenderaan. Sebagai bekas jurubank, saya pakar dalam Nasihat Kewangan untuk membantu anda merancang pinjaman, trade-in, dan dokumentasi bagi mendapatkan kelulusan terbaik.",
        
        skill_1: "Pakar Kewangan & Pinjaman",
        skill_2: "10 Tahun Pengalaman Jualan",
        skill_3: "Servis Dari A ke Z",

        // --- BAGIAN SERVICES ---
        service_head: "MENGAPA SAYA?",
        svc_1_title: "Konsultasi Pakar",
        svc_1_desc: "Nasihat objektif untuk memilih Lexus yang sesuai dengan gaya hidup anda.",
        svc_2_title: "Pembiayaan Mudah",
        svc_2_desc: "Memanfaatkan latar belakang perbankan saya untuk kelulusan pinjaman yang lebih mudah.",
        svc_3_title: "Penghantaran Premium",
        svc_3_desc: "Pengalaman penghantaran kereta yang istimewa dan tidak dapat dilupakan terus kepada anda.",

        // --- BAGIAN LAIN ---
        nav_cars: "KOLEKSI",
        btn_inquire: "TANYA SEKARANG",
        contact_head: "HUBUNGI SAYA",

        edu_title: "PENDIDIKAN",

        exp_title: "PENGALAMAN KERJA",
    }
};

// ==========================================
// LOGIC GANTI BAHASA (JANGAN DIUBAH)
// ==========================================
function setLanguage(lang) {
    const data = translations[lang];
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
            el.innerText = data[key];
        }
    });

    // Update tombol aktif
    document.getElementById('btn-en').classList.remove('lang-active');
    document.getElementById('btn-ms').classList.remove('lang-active');
    document.getElementById(`btn-${lang}`).classList.add('lang-active');
}

// Default ke Inggris
window.onload = () => setLanguage('en');