// ==========================================
// BANK BAHASA (FULL & FINAL VERSION)
// Aman untuk Index, Experience, & Gallery
// ==========================================
const translations = {
    // --- BAHASA INGGRIS (EN) ---
    en: {
        // --- NAVIGASI ---
        nav_home: "HOME",
        nav_about: "PROFILE",
        nav_exp: "EXPERIENCE",
        nav_skills: "SKILLS",
        nav_contact_link: "CONTACT",
        nav_btn_wa: "WHATSAPP",
        nav_cars: "COLLECTION",
        nav_testi: "TESTIMONIALS",

        // --- HERO & HEADER ---
        hero_title: "EXPERIENCE THE EXTRAORDINARY",
        hero_desc: "Your trusted partner for Lexus ownership. Serving with integrity and over 10 years of financial expertise.",
        hero_cta: "VIEW COLLECTION",

        // --- ABOUT SECTION ---
        about_headline: "I match every car to your values—<br><span class='font-bold text-white mt-2 block'>so you never have to compromise.</span>",
        about_title: "PROFESSIONAL SUMMARY",
        about_summary_1: "Motivated and experienced professional with over 10 years of success in sales, customer service, and financial advisory in telecommunications, banking, and automotive industries.",
        about_summary_2: "Strong communication skills, excels under pressure, and dedicated to results. Recognized for initiative, persistence, and meeting performance KPIs. Eager to impact organizational objectives and grow in a fast-paced environment.",
        
        about_testi_1: "\"Honestly, this is the only dealer who actually listened to what matters to me.\"",
        about_client_1: "THE GREEN FAMILY",
        about_testi_2: "\"Greatest integrity I’ve found in the industry. No shady tactics.\"",
        about_client_2: "MARCUS D., GOOGLE REVIEWS",

        // --- SKILLS & SERVICES ---
        skill_1: "Dedicated to the Best Deals for New Lexus Performance Models",
        skill_2: "10 Years Sales Experience",
        skill_3: "End-to-End Service",

        service_head: "WHY CHOOSE ME?",
        svc_1_title: "Expert Consultation",
        svc_1_desc: "Objective advice on selecting the perfect Lexus for your lifestyle.",
        svc_2_title: "Easy Financing",
        svc_2_desc: "Leveraging my banking background for easier loan approvals.",
        svc_3_title: "Premium Delivery",
        svc_3_desc: "A memorable and special car delivery experience directly to you.",

        // --- CONTACT & FOOTER ---
        btn_inquire: "INQUIRE NOW",
        contact_head: "CONTACT ME",
        ft_links: "QUICK LINKS",
        ft_form_title: "SEND INQUIRY",
        
        cta_title: "READY TO DRIVE YOUR DREAM?",
        cta_desc: "Schedule a private viewing or test drive today. I am here to assist you with the best financial plans.",
        btn_wa_chat: "SEND VIA WHATSAPP",
        btn_email_send: "SEND VIA EMAIL",

        // --- EXPERIENCE PAGE ---
        edu_title: "EDUCATION",
        exp_title: "WORK EXPERIENCE",
        job_bmw_desc: "<li>Prospecting and converting leads via online and offline channels.</li><li>Handling end-to-end customer engagement, from initial consultation to vehicle delivery.</li><li>Coordinating with banks and internal teams for loan and documentation processes.</li>",
        job_honda_desc: "<li>Generated leads and managed client relationships across various platforms.</li><li>Advised clients on vehicle purchases and facilitated loan and delivery procedures.</li><li>Taught new team members the correct procedures for all areas of operations.</li><li>Maintained current knowledge of all team position requirements.</li>",
        job_affin_desc: "<li>Achieved sales goals and service targets by cultivating and securing new customer relationships.</li><li>Boosted sales revenue by cultivating strong client relationships and implementing effective sales strategies.</li><li>Delivered exceptional customer service, resulting in a high percentage of repeat business.</li>",
        job_rhb_desc: "<li>Sold personal loans, ASB loans, and bank insurance products.</li><li>Conducted marketing talks and engaged in field sales.</li><li>Drove revenue growth, leveraging in-depth product knowledge to offer customized solutions.</li>",
        job_cimb_desc: "<li>Examine clients' overall financial situation by reviewing income, assets, debts, and expenses.</li><li>Created debt management plans and budgets to assist clients.</li><li>Promoted products and services to improve clients' standard of living.</li>",

        // --- GALLERY PAGE (STATIC TEXT) ---
        gal_hero_title: "THE ART OF L-FINESSE",
        gal_hero_sub: "Experience the Takumi Craftsmanship",
        gal_intro_title: "OMOTENASHI PHILOSOPHY",
        gal_intro_desc: "Lexus design goes beyond aesthetics; it is an experience. Combining traditional Japanese aesthetics with modern technology, every detail tells a story of hospitality.",
        gal_showcase_title: "LEXUS 3D SHOWCASE",
        gal_title: "The Art of L-Style",
        gal_desc: "Lexus design goes beyond aesthetics; it is an experience. Combining traditional Japanese aesthetics with modern technology, every detail tells a story of hospitality (Omotenashi).",
        
        gal_item1_title: "TAZUNA COCKPIT",
        gal_item1_desc: "Inspired by the reins of a horse, the Tazuna concept connects driver and vehicle intuitively.",
        gal_item2_title: "SPINDLE BODY",
        gal_item2_desc: "The evolution of the iconic Spindle Grille into a Spindle Body creates a seamless, dynamic form.",
        gal_item3_title: "TAKUMI CRAFTSMANSHIP",
        gal_item3_desc: "Mastery that takes decades to achieve. From hand-pleated door trims to Kiriko glass ornamentation.",

        testi_title: "MOMENTS OF JOY",
        testi_sub: "Trusted by over 50 distinguished clients",
        btn_view_all: "VIEW ALL PHOTOS",
        btn_close_gal: "CLOSE GALLERY",
        btn_sold: "Sold Cars",

        // --- REVIEWS (TESTIMONIALS) ---
        rev_title: "WHAT THEY SAY ABOUT OUR SERVICE",
        rev_sub: "REAL FEEDBACK FROM OUR VALUED CLIENTS",
        rev_1: "Hafiz provided exceptional service! The delivery of my RX350 was seamless and truly a VIP experience.",
        rev_2: "Very professional and transparent. He helped me secure a special interest rate. Highly recommended!",
        rev_3: "I was confused about Hybrid vs Petrol, but Hafiz explained it perfectly. Loving my new NX350h.",
        rev_4: "Fast response and very patient. He handled the trade-in of my old car very smoothly.",
        rev_5: "The best car buying experience I've ever had. No hidden costs, just pure honesty.",
        rev_6: "Thank you Hafiz! The handover ceremony was beautiful. My family is very happy.",
        rev_7: "A true Lexus ambassador. Knowledgeable, polite, and efficient. 5-star service!",

        // === DATA MOBIL BARU (UNTUK GALLERY) ===
        car_0_name: "Lexus LBX",
        car_0_tag: "Compact Luxury",
        car_0_engine: "1.5L HEV",
        car_0_power: "136 HP",
        car_0_desc: "The LBX breaks boundaries as a compact SUV that doesn't compromise on luxury. Perfect for the city.",

        car_1_name: "NX 350 F Sport",
        car_1_tag: "Dynamic Sport",
        car_1_engine: "2.4L Turbo",
        car_1_power: "275 HP",
        car_1_desc: "Experience the thrill of the NX F SPORT with its turbo engine and adaptive suspension.",

        car_2_name: "NX 350h",
        car_2_tag: "Hybrid Efficiency",
        car_2_engine: "2.5L HEV",
        car_2_power: "240 HP",
        car_2_desc: "Efficiency meets power. The NX Hybrid delivers smooth acceleration with class-leading fuel economy.",

        car_3_name: "RX 350",
        car_3_tag: "Luxury SUV",
        car_3_engine: "2.4L Turbo",
        car_3_power: "279 HP",
        car_3_desc: "The iconic RX, reinvented. Spacious, sophisticated, and powerful for every journey.",

        car_4_name: "RX 500h",
        car_4_tag: "F Sport Performance",
        car_4_engine: "2.4L Turbo Hyb",
        car_4_power: "366 HP",
        car_4_desc: "The most powerful RX ever. Direct4 AWD system ensures incredible handling and speed."
    },

    // --- BAHASA MALAYSIA (MS) ---
    ms: {
        // --- NAVIGASI ---
        nav_home: "UTAMA",
        nav_about: "PROFIL",
        nav_exp: "PENGALAMAN",
        nav_skills: "KEMAHIRAN",
        nav_contact_link: "HUBUNGI",
        nav_btn_wa: "WHATSAPP",
        nav_cars: "KOLEKSI",
        nav_testi: "TESTIMONI",

        // --- HERO & HEADER ---
        hero_title: "ALAMI KEMEWAHAN LUAR BIASA",
        hero_desc: "Rakan dipercayai anda untuk pemilikan Lexus. Melayani dengan integriti dan pengalaman kewangan lebih 10 tahun.",
        hero_cta: "LIHAT KOLEKSI",

        // --- ABOUT SECTION ---
        about_headline: "Saya padankan kereta dengan nilai anda—<br><span class='font-bold text-white mt-2 block'>supaya anda tidak perlu berkompromi.</span>",
        about_title: "RINGKASAN PROFESIONAL",
        about_summary_1: "Profesional bermotivasi dan berpengalaman dengan lebih 10 tahun kejayaan dalam jualan, khidmat pelanggan, dan nasihat kewangan dalam industri telekomunikasi, perbankan, dan automotif.",
        about_summary_2: "Kemahiran komunikasi yang kukuh, cemerlang di bawah tekanan, dan berdedikasi kepada hasil. Diiktiraf atas inisiatif, kegigihan, dan pencapaian KPI prestasi. Berhasrat memberi impak kepada objektif organisasi dan berkembang dalam persekitaran yang pantas.",

        about_testi_1: "\"Jujur, ini satu-satunya wakil jualan yang benar-benar mendengar apa yang penting bagi saya.\"",
        about_client_1: "KELUARGA GREEN",
        about_testi_2: "\"Integriti terbaik yang saya temui dalam industri ini. Tiada taktik kotor.\"",
        about_client_2: "MARCUS D., ULASAN GOOGLE",

        // --- SKILLS & SERVICES ---
        skill_1: "Berdedikasi untuk Tawaran Terbaik bagi Model Prestasi Lexus Baru",
        skill_2: "10 Tahun Pengalaman Jualan",
        skill_3: "Servis Dari A ke Z",

        service_head: "MENGAPA SAYA?",
        svc_1_title: "Konsultasi Pakar",
        svc_1_desc: "Nasihat objektif untuk memilih Lexus yang sesuai dengan gaya hidup anda.",
        svc_2_title: "Pembiayaan Mudah",
        svc_2_desc: "Memanfaatkan latar belakang perbankan saya untuk kelulusan pinjaman yang lebih mudah.",
        svc_3_title: "Penghantaran Premium",
        svc_3_desc: "Pengalaman penghantaran kereta yang istimewa dan tidak dapat dilupakan terus kepada anda.",

        // --- CONTACT & FOOTER ---
        btn_inquire: "TANYA SEKARANG",
        contact_head: "HUBUNGI SAYA",
        ft_links: "PAUTAN PANTAS",
        ft_form_title: "HANTAR PERTANYAAN",
        
        cta_title: "SEDIA MEMANDU IMPIAN ANDA?",
        cta_desc: "Jadualkan sesi pandu uji peribadi hari ini. Saya di sini untuk membantu anda dengan pelan kewangan terbaik.",
        btn_wa_chat: "HANTAR WHATSAPP",
        btn_email_send: "HANTAR EMEL",

        // --- EXPERIENCE PAGE ---
        edu_title: "PENDIDIKAN",
        exp_title: "PENGALAMAN KERJA",
        job_bmw_desc: "<li>Mencari dan menukar prospek melalui saluran dalam talian dan luar talian.</li><li>Mengendalikan penglibatan pelanggan dari awal hingga penghantaran kenderaan.</li><li>Berkoordinasi dengan bank dan pasukan dalaman untuk proses pinjaman dan dokumentasi.</li>",
        job_honda_desc: "<li>Menghasilkan prospek dan mengurus hubungan pelanggan di pelbagai platform.</li><li>Menasihati pelanggan mengenai pembelian kenderaan dan memudahkan prosedur pinjaman.</li><li>Melatih ahli pasukan baru mengenai prosedur operasi yang betul.</li><li>Mengekalkan pengetahuan terkini mengenai keperluan pasukan.</li>",
        job_affin_desc: "<li>Mencapai sasaran jualan dengan memupuk hubungan pelanggan baru.</li><li>Meningkatkan hasil jualan melalui strategi jualan yang berkesan.</li><li>Memberikan perkhidmatan pelanggan yang luar biasa, menghasilkan perniagaan berulang yang tinggi.</li>",
        job_rhb_desc: "<li>Menjual pinjaman peribadi, pinjaman ASB, dan produk insurans bank.</li><li>Mengadakan ceramah pemasaran dan terlibat dalam jualan lapangan.</li><li>Memacu pertumbuhan hasil dengan menawarkan penyelesaian tersuai.</li>",
        job_cimb_desc: "<li>Memeriksa situasi kewangan keseluruhan pelanggan termasuk pendapatan, aset, dan hutang.</li><li>Mewujudkan pelan pengurusan hutang dan belanjawan untuk membantu pelanggan.</li><li>Mempromosikan produk dan perkhidmatan untuk meningkatkan taraf hidup pelanggan.</li>",

        // --- GALLERY PAGE (STATIC TEXT) ---
        gal_hero_title: "SENI L-FINESSE",
        gal_hero_sub: "Rasai Pertukangan Takumi",
        gal_intro_title: "FALSAFAH OMOTENASHI",
        gal_intro_desc: "Reka bentuk Lexus melangkaui estetika; ia adalah satu pengalaman. Menggabungkan estetika tradisional Jepun dengan teknologi moden, setiap butiran menceritakan kisah layanan mesra.",
        gal_showcase_title: "PAMERAN 3D LEXUS",
        gal_title: "Seni Gaya-L",
        gal_desc: "Reka bentuk Lexus melangkaui estetika; ia adalah satu pengalaman. Menggabungkan estetika tradisional Jepun dengan teknologi moden, setiap butiran menceritakan kisah layanan mesra (Omotenashi).",

        gal_item1_title: "KOKPIT TAZUNA",
        gal_item1_desc: "Diinspirasikan oleh tali kekang kuda, konsep Tazuna menghubungkan pemandu dan kenderaan secara intuitif.",
        gal_item2_title: "BADAN SPINDLE",
        gal_item2_desc: "Evolusi Gril Spindle ikonik kepada Badan Spindle mencipta bentuk dinamik yang lancar.",
        gal_item3_title: "PERTUKANGAN TAKUMI",
        gal_item3_desc: "Penguasaan yang mengambil masa beberapa dekad untuk dicapai. Dari kemasan pintu berlipat tangan hingga hiasan kaca Kiriko.",

        testi_title: "DETIK KEGEMBIRAAN",
        testi_sub: "Dipercayai oleh lebih 50 pelanggan istimewa",
        btn_view_all: "LIHAT SEMUA FOTO",
        btn_close_gal: "TUTUP GALERI",
        btn_sold: "Kereta Terjual",

        // --- REVIEWS (TESTIMONIALS) ---
        rev_title: "APA KATA MEREKA TENTANG PERKHIDMATAN KAMI",
        rev_sub: "MAKLUM BALAS SEBENAR DARIPADA PELANGGAN KAMI",
        rev_1: "Hafiz memberikan perkhidmatan luar biasa! Penyerahan RX350 saya sangat lancar dan pengalaman VIP sebenar.",
        rev_2: "Sangat profesional dan telus. Beliau membantu saya mendapatkan kadar faedah istimewa. Sangat disyorkan!",
        rev_3: "Saya keliru tentang Hibrid vs Petrol, tapi Hafiz menerangkannya dengan sempurna. Suka NX350h baru saya.",
        rev_4: "Respons pantas dan sangat sabar. Beliau menguruskan 'trade-in' kereta lama saya dengan sangat lancar.",
        rev_5: "Pengalaman membeli kereta terbaik yang pernah saya lalui. Tiada kos tersembunyi, hanya kejujuran.",
        rev_6: "Terima kasih Hafiz! Majlis penyerahan kereta sangat indah. Keluarga saya sangat gembira.",
        rev_7: "Duta Lexus sebenar. Berpengetahuan, sopan, dan cekap. Perkhidmatan 5 bintang!",

        // === DATA MOBIL BARU (UNTUK GALLERY) ===
        car_0_name: "Lexus LBX",
        car_0_tag: "Mewah Kompak",
        car_0_engine: "1.5L HEV",
        car_0_power: "136 HP",
        car_0_desc: "LBX menembus batas sebagai SUV kompak yang tidak berkompromi dengan kemewahan. Sempurna untuk bandar.",

        car_1_name: "NX 350 F Sport",
        car_1_tag: "Sukan Dinamik",
        car_1_engine: "2.4L Turbo",
        car_1_power: "275 HP",
        car_1_desc: "Rasakan keseronokan NX F SPORT dengan enjin turbo dan suspensi adaptifnya.",

        car_2_name: "NX 350h",
        car_2_tag: "Kecekapan Hibrid",
        car_2_engine: "2.5L HEV",
        car_2_power: "240 HP",
        car_2_desc: "Kecekapan bertemu kuasa. NX Hybrid memberikan pecutan lancar dengan penjimatan bahan api kelas pertama.",

        car_3_name: "RX 350",
        car_3_tag: "SUV Mewah",
        car_3_engine: "2.4L Turbo",
        car_3_power: "279 HP",
        car_3_desc: "RX ikonik, dicipta semula. Luas, canggih, dan berkuasa untuk setiap perjalanan.",

        car_4_name: "RX 500h",
        car_4_tag: "Prestasi F Sport",
        car_4_engine: "2.4L Turbo Hyb",
        car_4_power: "366 HP",
        car_4_desc: "RX paling berkuasa pernah ada. Sistem Direct4 AWD memastikan pengendalian dan kelajuan yang luar biasa."
    }
};

// ==========================================
// LOGIC GANTI BAHASA (GLOBAL)
// ==========================================
function setLanguage(lang) {
    // 1. Simpan Pilihan User
    localStorage.setItem('selected_lang', lang);

    // 2. Ambil Data
    if(typeof translations === 'undefined') return;
    const data = translations[lang];

    // 3. Update Elemen HTML biasa
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
            el.innerHTML = data[key]; // innerHTML agar tag <li> atau <b> terbaca
        }
    });

    // 4. Update Warna Tombol
    const btnEn = document.getElementById('btn-en');
    const btnMs = document.getElementById('btn-ms');
    if(btnEn && btnMs) {
        btnEn.style.color = (lang === 'en') ? '#ffffff' : '#9ca3af';
        btnMs.style.color = (lang === 'ms') ? '#ffffff' : '#9ca3af';
    }

    // 5. Khusus Halaman Gallery: Panggil updateView() jika fungsi itu ada
    if (typeof updateView === 'function') {
        // Cek dulu apakah variabel global gallery ada
        if(typeof changeGalleryLanguage === 'function') {
             changeGalleryLanguage(lang);
        } else {
             // Jika manual
             if(typeof currentLang !== 'undefined') currentLang = lang;
             updateView();
        }
    }
}

// Load bahasa tersimpan saat reload
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selected_lang') || 'en';
    setLanguage(savedLang);
});