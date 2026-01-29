// script.js

// 1. Tailwind Configuration
tailwind.config = {
    theme: {
        fontFamily: {
            sans: ['Kanit', 'sans-serif'],
        },
        extend: {
            colors: {
                'vote-primary': '#1e3a8a', // Dark Blue
                'vote-accent': '#fbbf24',  // Yellow (Referendum)
                'vote-green': '#10b981',   // Green (MPs)
                'vote-red-flag': '#A51931' // Thai Flag Red
            }
        }
    }
}

// 2. Any interactive logic (Example: Console log to check connection)
console.log("Vote 69 project loaded successfully.");

// 3. Internationalization (i18n) Logic
const translations = {
    th: {
        nav_guide: "คู่มือเลือกตั้ง (How-to)",
        hero_date: "8 กุมภาฯ",
        hero_action: "ไปเลือกตั้งกัน!",
        hero_desc: "การเลือกตั้งครั้งนี้ซับซ้อนกว่าที่คิด? <br>อ่านสรุปวิธีเลือกตั้ง การกาบัตร และความสำคัญของประชามติได้ที่นี่",
        btn_read: "อ่านคู่มือเลือกตั้ง 📖",
        btn_check: "ตรวจสอบสิทธิ",
        btn_check_elec: "เช็กสิทธิเลือกตั้ง 🗳️",
        btn_check_ref: "เช็กสิทธิประชามติ 📋",
        footer_text: "© 2026 Vote 69 Project. Created for Educational Purposes.",
        nav_back: "← กลับหน้าหลัก",
        guide_subtitle: "คู่มือเลือกตั้งฉบับรวบรัด สำหรับคนมีเวลาน้อย",
        ref_title: "ประชามติ (ใบสีเหลือง)",
        ref_question: "คำถามสำคัญ: คุณเห็นชอบหรือไม่ที่จะให้มีการจัดทำรัฐธรรมนูญฉบับใหม่?",
        elec_title: "เลือกตั้ง ส.ส. (ใบสีชมพู/เขียว)",
        votenolist_title: "Vote No vs No Vote ต่างกันยังไง?",
        vocab_title: "คลังศัพท์การเมือง",
        footer_reminder: "8 กุมภาพันธ์นี้ อย่าลืมไปใช้สิทธิ!",
        footer_btn_check: "ตรวจสอบสิทธิเลือกตั้ง",


        vote_no: "โหวตโน",
        no_vote: "ไม่โหวต",
        vote_no_cap: "ไปใช้สิทธิ แต่กากบาทช่องไม่ประสงค์เลือก",
        vote_no_expl: "หากได้คะแนนสูงสุด จะต้องเลือกตั้งใหม่โดยคนเดิมลงไม่ได้",
        no_vote_cap: "ไม่ไปใช้สิทธิ นอนอยู่บ้าน",
        no_vote_expl: "เสียงหายไปเลย และถูกตัดสิทธิทางการเมืองหลายอย่าง",

        // New Tabs & Content
        tab_big3: "3 พรรคใหญ่",
        tab_const: "รธน. 60",
        tab_calc: "สูตรคำนวณ",
        tab_voteno: "Vote No",
        tab_vocab: "ศัพท์ควรรู้",
        poles_title: "ส่อง 3 พรรคใหญ่ (The Big 3)",
        pole_pt_desc: "เน้นนโยบายเศรษฐกิจ ปากท้อง (Conservative/Strategic)",
        pole_pp_desc: "เน้นแก้โครงสร้าง ปฏิรูปกองทัพ (Liberal/Progressive)",
        pole_bjt_desc: "เน้นดูแลพื้นที่ เครือข่ายบ้านใหญ่ (Big House)",
        calc_title: "สูตรคำนวณ ส.ส. บัญชีรายชื่อ",
        calc_desc: "เอาคะแนนพรรคทั้งประเทศรวมกัน หารด้วย 100 = คะแนนต่อ ส.ส. 1 คน"
    },
    en: {
        nav_guide: "Election Guide (How-to)",
        hero_date: "Feb 8th",
        hero_action: "Let's Vote!",
        hero_desc: "Is this election more complex than you think? <br>Read the summary on how to vote and the referendum here.",
        btn_read: "Read Guide 📖",
        btn_check: "Check Rights",
        btn_check_elec: "Check Election Rights 🗳️",
        btn_check_ref: "Check Referendum Rights 📋",
        footer_text: "© 2026 Vote 69 Project. Created for Educational Purposes.",
        nav_back: "← Back to Home",
        guide_subtitle: "A concise election guide for busy people",
        ref_title: "Referendum (Yellow Ballot)",
        ref_question: "Key Question: Do you agree to have a new constitution drafted?",
        elec_title: "MP Election (Pink/Green Ballots)",
        votenolist_title: "Vote No vs No Vote: What's the difference?",
        vocab_title: "Political Vocab",
        footer_reminder: "Don't forget to vote on Feb 8th!",
        footer_btn_check: "Check Election Rights",

        vote_no: "Vote No",
        no_vote: "No Vote",
        vote_no_cap: "Go vote but cross the 'No Preference' box",
        vote_no_expl: "If wins, a new election must be held with the incumbent barred from running",
        no_vote_cap: "Don't vote, stay at home",
        no_vote_expl: "Your voice is lost and you will be stripped of several political rights",

        // New Tabs & Content
        tab_big3: "The Big 3",
        tab_const: "Const. 60",
        tab_calc: "Calculation",
        tab_voteno: "Vote No",
        tab_vocab: "Vocab",
        poles_title: "The Big 3 Parties",
        pole_pt_desc: "Focus on economy & livelihood (Conservative/Strategic)",
        pole_pp_desc: "Focus on structural reform (Liberal/Progressive)",
        pole_bjt_desc: "Focus on local areas & patronage (Big House)",
        calc_title: "Party-List Calculation",
        calc_desc: "Total National Votes ÷ 100 = Votes per 1 MP"
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Use innerHTML if the text contains tags like <br>, otherwise textContent is safer
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        } else {
            console.warn(`Missing translation for key: "${key}" in language: "${lang}"`);
        }
    });

    // Update Button Styles (Visual Feedback)
    const btnTh = document.getElementById('btn-th');
    const btnEn = document.getElementById('btn-en');

    // Helper to toggle active class
    const updateBtnStyle = (btn, isActive) => {
        if (!btn) return; // Safety check if button doesn't exist on page
        if (isActive) {
            btn.classList.remove('text-gray-400');
            btn.classList.add('text-vote-primary', 'underline');
        } else {
            btn.classList.add('text-gray-400');
            btn.classList.remove('text-vote-primary', 'underline');
        }
    };

    updateBtnStyle(btnTh, lang === 'th');
    updateBtnStyle(btnEn, lang === 'en');

    // Save preference (optional)
    localStorage.setItem('vote69_lang', lang);
}

// Load saved language or default to Thai
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('vote69_lang') || 'th';
    setLanguage(savedLang);
});