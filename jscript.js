let ayat = [
    "اَيَحْسَبُ اَنْ لَّنْ يَّقْدِرَ عَلَيْهِ اَحَدٌ",
    "اَيَحْسَبُ اَنْ لَّمْ يَرَهٗٓ اَحَدٌۗ",
    "وَالَّذِيْنَ كَفَرُوْا بِاٰيٰتِنَا هُمْ اَصْحٰبُ الْمَشْـَٔمَةِۗ",
    "وَالْقَمَرِ اِذَا تَلٰىهَاۖ",
    "قَدْ اَفْلَحَ مَنْ زَكّٰىهَاۖ",
    "كَذَّبَتْ ثَمُوْدُ بِطَغْوٰىهَآ",
    "وَالشَّمْسِ وَضُحٰىهَاۖ",

    "اِنَّ سَعْيَكُمْ لَشَتّٰىۗ",
    "وَاَمَّا مَنْۢ بَخِلَ وَاسْتَغْنٰىۙ",
    "فَسَنُيَسِّرُهٗ لِلْعُسْرٰىۗ",
    "وَمَا يُغْنِيْ عَنْهُ مَالُهٗٓ اِذَا تَرَدّٰىٓۙ",
    "اِنَّ عَلَيْنَا لَلْهُدٰىۖ",
    "وَاِنَّ لَنَا لَلْاٰخِرَةَ وَالْاُوْلٰىۗ",
    "فَاَنْذَرْتُكُمْ نَارًا تَلَظّٰىۚ",
    "وَسَيُجَنَّبُهَا الْاَتْقَىۙ",
    "وَلَسَوْفَ يَرْضٰى",

    "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلٰىۗ",
    "وَلَلْاٰخِرَةُ خَيْرٌ لَّكَ مِنَ الْاُوْلٰىۗ",
    "فَاَمَّا الْيَتِيْمَ فَلَا تَقْهَرْۗ",
    "وَاَمَّا السَّاۤىِٕلَ فَلَا تَنْهَرْ",
    "وَاَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",

]
let terjemah = [
    "Apakah dia (manusia) itu mengira bahwa tidak ada seorang pun yang berkuasa atasnya?",
    "Apakah dia mengira bahwa tidak ada seorang pun yang melihatnya?",
    "Adapun orang-orang yang kufur pada ayat-ayat Kami, merekalah golongan kiri.",
    "demi bulan saat mengiringinya,",
    
    "sungguh beruntung orang yang menyucikannya (jiwa itu)",
    "(Kaum) Samud telah mendustakan (rasulnya) karena mereka melampaui batas",
    "Demi matahari dan sinarnya pada waktu duha (ketika matahari naik sepenggalah),",
    
    "sesungguhnya usahamu benar-benar beraneka ragam.",
    "Adapun orang yang kikir dan merasa dirinya cukup (tidak perlu pertolongan Allah)",
    "Kami akan memudahkannya menuju jalan kesengsaraan.",
    "Hartanya tidak bermanfaat baginya apabila dia telah binasa.",
    "Sesungguhnya Kamilah yang (berhak) memberi petunjuk.",
    "Sesungguhnya milik Kamilah akhirat dan dunia.",
    "Aku memperingatkanmu dengan neraka yang menyala-nyala.",
    "Akan dijauhkan darinya (neraka) orang yang paling bertakwa,",
    "Sungguh, kelak dia akan mendapatkan kepuasan (menerima balasan amalnya).",

    "Tuhanmu (Nabi Muhammad) tidak meninggalkan dan tidak (pula) membencimu.",
    "Sungguh, akhirat itu lebih baik bagimu daripada yang permulaan (dunia).",
    "Terhadap anak yatim, janganlah engkau berlaku sewenang-wenang.",
    "Terhadap orang yang meminta-minta, janganlah engkau menghardik.",
    "Terhadap nikmat Tuhanmu, nyatakanlah (dengan bersyukur).",

]
let answer = [
    "Al-Balad",
    "Al-Balad",
    "Al-Balad",
    "Al-Balad",

    "Asy-Syams",
    "Asy-Syams",
    "Asy-Syams",

    "Al-Lail",
    "Al-Lail",
    "Al-Lail",
    "Al-Lail",
    "Al-Lail",
    "Al-Lail",
    "Al-Lail",
    "Al-Lail",
    "Al-Lail",

    "Ad-Dhuha",
    "Ad-Dhuha",
    "Ad-Dhuha",
    "Ad-Dhuha",
    "Ad-Dhuha",

]
let surah = ["Al-Balad","Al-Syams","Al-Lail","Ad-Dhuha","Asy-Syarh","At-Tin","Al-Alaq","Al-Qadr","Al-Bayyinah","Az-Zalzalah","Al-'Adiyat","Al-Qariah","At-Takasur","Al-'Asr","Al-Humazah","Al-Fil","Quraisy","Al-Ma'un","Al-Kausar","Al-Kafirun","An-Nasr","Al-Lahab","Al-Ikhlas","Al-Falaq","An-Nas"]
let total_quest = ayat.length;

// first ayat
let cur_id, thetruth;
let abcd = ['a','b','c','d'];

next()

function cek(id){
    console.log(id)

    if (id == thetruth){
        document.getElementById(id).style.background = "linear-gradient(124.35deg, rgba(209, 252, 213, 0.85) 17.93%, rgba(138, 226, 131, 0.85) 65.75%)";
    } else {
        document.getElementById(id).style.background = "linear-gradient(124.35deg, rgba(254, 194, 194, 0.85) 17.93%, rgba(222, 140, 140, 0.85) 65.75%)";
        document.getElementById(thetruth).style.background = "linear-gradient(124.35deg, rgba(209, 252, 213, 0.85) 17.93%, rgba(138, 226, 131, 0.85) 65.75%)";
    }
    document.getElementById("a").disabled = "true";
    document.getElementById("b").disabled = "true";
    document.getElementById("c").disabled = "true";
    document.getElementById("d").disabled = "true";

}
function next(){
    cur_id = Math.floor(Math.random() * total_quest);
    console.log(cur_id)
    selected_ayat = document.getElementById("ayat").innerHTML = ayat[cur_id];
    selected_terjemah = document.getElementById("terjemah").innerHTML = terjemah[cur_id];

    // console.log(document.getElementById("ayat").value);
    
    let rand_num = Math.floor(Math.random() * (surah.length-3));
    console.log("rand:"+rand_num)
    document.getElementById("a").innerHTML = surah[rand_num];
    document.getElementById("b").innerHTML = surah[rand_num+1];
    document.getElementById("c").innerHTML = surah[rand_num+2];
    document.getElementById("d").innerHTML = surah[rand_num+3];
    
    thetruth = rand_num_special(rand_num)
    // rand_num = Math.floor(Math.random() * 3)
    // rand_num = rand_num_special(rand_num)
    
    document.getElementById(thetruth).innerHTML = answer[cur_id];
    
    document.getElementById('a').style.background = "linear-gradient(124.35deg, rgba(165, 243, 239, 0.85) 17.93%, rgba(102, 175, 171, 0.85) 65.75%)";
    document.getElementById('b').style.background = "linear-gradient(124.35deg, rgba(165, 243, 239, 0.85) 17.93%, rgba(102, 175, 171, 0.85) 65.75%)";
    document.getElementById('c').style.background = "linear-gradient(124.35deg, rgba(165, 243, 239, 0.85) 17.93%, rgba(102, 175, 171, 0.85) 65.75%)";
    document.getElementById('d').style.background = "linear-gradient(124.35deg, rgba(165, 243, 239, 0.85) 17.93%, rgba(102, 175, 171, 0.85) 65.75%)";
    
    document.getElementById("a").disabled = null;
    document.getElementById("b").disabled = null;
    document.getElementById("c").disabled = null;
    document.getElementById("d").disabled = null;
    
    console.log(selected_ayat)
    console.log(selected_terjemah)
}

function rand_num_special(rand_num){
    if (surah[rand_num]==answer[cur_id]){
        return 'a';
    } else if (surah[rand_num+1]==answer[cur_id]){
        return 'b';
    } else if (surah[rand_num+2]==answer[cur_id]){
        return 'b';
    } else if (surah[rand_num+3]==answer[cur_id]){
        return 'd';
    } else {
        num = Math.floor(Math.random() * 3);
        if (num==0){ return 'a' }
        else if (num==1){ return 'b' }
        else if (num==2){ return 'c' }
        else if (num==3){ return 'd' }
    }
}