let ayat = [
    "قُلْ اَعُوْذُ بِرَبِّ النَّاسِۙ",

    "قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِۙ",
    "وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ",

    "قُلْ هُوَ اللّٰهُ اَحَدٌۚ",
    "اَللّٰهُ الصَّمَدُۚ",

    "تَبَّتْ يَدَآ اَبِيْ لَهَبٍ وَّتَبَّۗ",
    "مَآ اَغْنٰى عَنْهُ مَالُهٗ وَمَا كَسَبَۗ",
    "سَيَصْلٰى نَارًا ذَاتَ لَهَبٍۙ",

    "اِذَا جَاۤءَ نَصْرُ اللّٰهِ وَالْفَتْحُۙ",
    "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُۗ",

    "قُلْ يٰٓاَيُّهَا الْكٰفِرُوْنَۙ",
    "لَآ اَعْبُدُ مَا تَعْبُدُوْنَۙ",
    "لَكُمْ دِيْنُكُمْ وَلِيَ دِيْنِ",

    "اِنَّآ اَعْطَيْنٰكَ الْكَوْثَرَۗ",
    "فَصَلِّ لِرَبِّكَ وَانْحَرْۗ",
    "اِنَّ شَانِئَكَ هُوَ الْاَبْتَرُ",

    "اَرَءَيْتَ الَّذِيْ يُكَذِّبُ بِالدِّيْنِۗ",
    "فَوَيْلٌ لِّلْمُصَلِّيْنَۙ الَّذِيْنَ هُمْ عَنْ صَلَاتِهِمْ سَاهُوْنَۙ",
    
    "لِاِيْلٰفِ قُرَيْشٍۙ",
    "فَلْيَعْبُدُوْا رَبَّ هٰذَا الْبَيْتِۙ",
    "الَّذِيْٓ اَطْعَمَهُمْ مِّنْ جُوْعٍ ەۙ وَّاٰمَنَهُمْ مِّنْ خَوْفٍ",

]
let terjemah = [
    "Katakanlah (Nabi Muhammad), “Aku berlindung kepada Tuhan manusia,",
    
    "Katakanlah (Nabi Muhammad), “Aku berlindung kepada Tuhan yang (menjaga) fajar (subuh)",
    "dan (aku berlindung) dari kejahatan orang yang dengki apabila dia dengki.",
    
    "Katakanlah (Nabi Muhammad), Dialah Allah Yang Maha Esa.",
    "Allah tempat meminta segala sesuatu.",

    "Binasalah kedua tangan Abu Lahab dan benar-benar binasa dia",
    "Tidaklah berguna baginya hartanya dan apa yang dia usahakan",
    "Kelak dia (abu lahab) akan memasuki api yang bergejolak (neraka)",

    "Apabila telah datang pertolongan Allah dan kemenangan",
    "bertasbihlah dengan memuji Tuhanmu dan mohonlah ampun kepada-Nya",

    "Katakanlah (Nabi Muhammad), “Wahai orang-orang kafir",
    "aku tidak akan menyembah apa yang kamu sembah",
    "Untukmu agamamu dan untukku agamaku",

    "Sesungguhnya Kami telah memberimu (Nabi Muhammad) nikmat yang banyak",
    "Maka, laksanakanlah salat karena Tuhanmu dan berkurbanlah!",
    "Sesungguhnya orang yang membencimu (Nabi Muhammad), dialah yang terputus (dari rahmat Allah)",

    "Tahukah kamu (orang) yang mendustakan agama?",
    "Celakalah orang-orang yang melaksanakan salat, (yaitu) yang lalai terhadap salatnya",

    "Disebabkan oleh kebiasaan orang-orang Quraisy",
    "maka hendaklah mereka menyembah Tuhan (pemilik) rumah ini (Ka‘bah)",
    "yang telah memberi mereka makanan untuk menghilangkan lapar dan mengamankan mereka dari rasa takut",

]
let answer = [
    "Al-Nas",

    "Al-Falaq",
    "Al-Falaq",

    "Al-Ikhlas",
    "Al-Ikhlas",

    "Al-Lahab",
    "Al-Lahab",
    "Al-Lahab",

    "An-Nasr",
    "An-Nasr",

    "Al-Kafirun",
    "Al-Kafirun",
    "Al-Kafirun",

    "Al-Kausar",
    "Al-Kausar",
    "Al-Kausar",

    "Al-Ma'un",
    "Al-Ma'un",

    "Quraisy",
    "Quraisy",
    "Quraisy"

]
let surah = ["Al-Nas","Al-Falaq","Al-Ikhlas","Al-Lahab","Al-Kafirun","An-Nasr","Al-Kausar","Al-Ma'un","Quraisy"]
let total_quest = ayat.length;

let correct = document.getElementById("correct"); 
let incorrect = document.getElementById("incorrect"); 

// first ayat
let cur_id, thetruth;
let abcd = ['a','b','c','d'];

next()

function cek(id){
    console.log(id)

    if (id == thetruth){
        correct.play()
        document.getElementById(id).style.background = "linear-gradient(124.35deg, rgba(209, 252, 213, 0.85) 17.93%, rgba(138, 226, 131, 0.85) 65.75%)";
    } else {
        incorrect.play()
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
