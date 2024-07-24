// 1. Array elementlərinin cəmini / hasilini tapın

// let a = [1,2,3,4,5,6,7,8,9,10]
// let b = 0
// let c = 1

// for(let i=0;i<a.length;i++){
//     b+=a[i]
//     c*=a[i]
// }
// console.log(b,c);


//2. Array elementlərinin içində təkrarlanan elementləri silin

// let a = [1, 2, 3, 4, 2, 5, 3, 6, 4];

// let b = [...new Set(a)];

// console.log("Tekrarlananlar silinmis", b); 

// 3. Array elementlərində ədəd olmayan elementləri silin

// let a = [1, "a", 2, "b", 3, true, 4, "c", 5];

// let b = a.filter(item => typeof item === 'number');

// console.log("Sadece sayısal elemanlar:", b);

// 4. Array elementlərindən maksimum/minimum olanı tapın.

// let a = [1,2,3,4,5,6,7,8,9,10]
// let maximum = Math.max(...a)
// let minimum = Math.min(...a)
// console.log(maximum,minimum);


//5. Daxil edilən cumlədəki simvol sayını çıxarın.

// let cumle = "Men bir back-end developerem"
// let simvolsayi = cumle.length;
// console.log(simvolsayi);

// 6. Array elementlerini 2-yə vurub yeni bir array kimi çap edin.

// let a = [1,2,3,4,5,6,7,8,9,10]
// let b = a.map(item=>item*2)
// console.log(b);

// 7. Array elementlərini tərsinə çap edin.

// let a = [1,2,3,4,5,6,7,8,9,10]
// let ters = a.reverse();
// console.log(ters);

//Verilmiş massivlərdə hər bir indeks dəyərinin cəmini hesablayan JavaScript proqramı yazın.(Massivlərin uzunluqları mütləq eyni olmalıdı)


// let b = [1, 2, 3, 4, 5];
// let c = [6, 7, 8, 9, 10];
// let e = [];

// if (b.length === c.length) {
//     for (let i = 0; i < b.length; i++) {
//         let toplam = b[i] + c[i];
//         e.push(toplam);
//     }
//     console.log("İndeks cemlerinin sonucu:", e); 
// } else {
//     console.error("Massivlərin uzunluqları mütləq eyni olmalıdı");
// }


//9. Sözü tərsinə çevirən program yazın.

// let a = "salam";
// let b = ""
// for (let i = a.length - 1; i >= 0; i--) {
//     b += a[i];
// }

// console.log("Tersine çevrilmiş:", b); 

//10. Cümlədəki sözlərin yerini tərsinə çevirən program yazın. (salam mənim adım leyladır �� leyladır adım mənim salam)

// let a = "salam mənim adım leyladır";
// let b = a.split(' ');
// let c = "";

// for (let i = b.length - 1; i >= 0; i--) {
//     c += b[i];
//     if (i !== 0) {
//         c += " ";
//     }
// }

// console.log("Tersine çevrilmiş cümle:", c);

//11. Daxil edilmiş ədədi sözlə yazan funskiya (Məs��input:1, output : Bir)


// function Myfunction(number) {
//     const units = ['', 'Bir', 'İki', 'Üç', 'Dörd', 'Beş', 'Altı', 'Yeddi', 'Səkkiz', 'Doqquz'];
//     const tens = ['', 'On', 'İyirmi', 'Otuz', 'Qırx', 'Əlli', 'Altımış', 'Yetmiş', 'Səksən', 'Doxsan'];

//     if (number === 0) {
//         return 'Sıfır';
//     }

//     let words = '';

//     if (number >= 100) {
//         words += units[Math.floor(number / 100)] + 'Yüz ';
//         number %= 100;
//     }

//     if (number >= 10 && number <= 99) {
//         words += tens[Math.floor(number / 10)] + ' ';
//         number %= 10;
//     } else if (number >= 1 && number <= 9) {
//         words += units[number] + ' ';
//     }

//     return words.trim();
// }


// let number = 123;
// console.log(`Giriş: ${number}, Çıxış: ${Myfunction(number)}`);



//12. Verilmiş mətndə sözlərin sayını tapın.

// let metin = "salam menim adim Emindir";
// let c = metin.split(' ');

// let b = 0;
// for (let i = 0; i < c.length; i++) {
//     if (c[i] !== "") {
//         b++;
//     }
// }

// console.log("Soz sayı:", b); 


// let cumle = "Menim    adim    Emindir    ";
// let duzeltilmisCumle = "";


// let bosluk = false;
// for (let i = 0; i < cumle.length; i++) {
//     if (cumle[i] !== ' ') {
//         duzeltilmisCumle += cumle[i];
//         bosluk = false;
//     } else {
//         if (!bosluk) {
//             duzeltilmisCumle += ' ';
//             bosluk = true;
//         }
//     }
// }


// if (duzeltilmisCumle.slice(-1) === ' ') {
//     duzeltilmisCumle = duzeltilmisCumle.slice(0, -1);
// }

// console.log("Düzeltilmiş cümle:", duzeltilmisCumle); 


//13. Verilmiş cümlədə artıq boşluq simvollarını silin

// function Myfunction(sentence) {

//     let cleanedSentence = sentence.replace(/\s+/g, ' ');
    
//     cleanedSentence = cleanedSentence.trim();
    
//     return cleanedSentence;
// }

// let inputSentence = "   Bu    bir   cumledir.   ";
// let cleanedSentence = Myfunction(inputSentence);
// console.log("Temizlenmiş cümle:", cleanedSentence);



//14. Verilmiş mətndə cümlələrin ilk sözündə olan baş hərfin böyük yazılmasını təmin edən proqram yazın

    //   let metn = "salam. necesen ne var ne yox. isler nece gedir.";
    //   let split_metn = metn.split(".");
    //   let yeni_cumle = "";
    //   for (let i = 0; i < split_metn.length; i++) {
    //     if (split_metn[i] != "") {
    //       let cumle = split_metn[i].trim();
    //       yeni_cumle+= cumle[0].toUpperCase() + cumle.substring(1) + ". ";
    //     }
    //   }
    //   console.log(yeni_cumle)

// 15. İki arrayın eyniliyini yoxlayın.

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [1, 2, 3, 4, 5];


// if (array1.length !== array2.length) {
//     console.log("Array beraber deyil");
// } else {
//     let beraber = true;
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             beraber = false;
//             break;
//         }
//     }

//     if (beraber) {
//         console.log("Array'ler beraber.");
//     } else {
//         console.log("Array'ler beraber değil.");
//     }
// }



//16. Array elementlərini sort metodundan istifadə etmədən artma / azalma istiqamətinə görə sıralayın (bubble sort)

// let array = [64, 34, 25, 12, 22, 11, 90];

// for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - i - 1; j++) {
//         if (array[j] > array[j + 1]) {
            
//             let temp = array[j];
//             array[j] = array[j + 1];
//             array[j + 1] = temp;
//         }
//     }
// }

// console.log("Artan sıralama:", array); 


//17. İstifadəçidən ədəd daxil etməyini tələb edin. Proqram daxil edilən ədədi oxuyur və ədədin hər bir rəqəmini arada boşluq olmaqla ekrana verir. Məs: Giriş: 3456 Çıxış: 3 4 5 6

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question((number) => {
    
//     let result = '';
//     for (let i = 0; i < number.length; i++) {
//         result += number[i] + ' ';
//     }
//     console.log(result.trim()); 
    
//     readline.close();
// });






// 18. sual
// let metn="Salam bu gun necesiz. Hava yaxsidir. Hava bu gun orada pisdir."
// // let metn_split=metn.split(".").join("")
// let metn_split=metn.replaceAll(".","")
// let cumle_split=metn_split.split(" ")
// let obj={}
// console.log(cumle_split);
// for(let i=0;i<cumle_split.length;i++){
//     let soz=cumle_split[i]
//     if(!obj[soz]){
//         obj[soz]=1
//     }else{
//         obj[soz]++
//     }
// }
// con


//19. Tələbələrin məlumatlarını özündə saxlayan object yaradın. İmtahandan keçməyən tələbələri objectdən silin.

// let telebeler = {
//     '123': { ad: 'Emin', soyad: 'Hesenov', imtahanneticesi: 75 },
//     '124': { ad: 'Vuqar', soyad: 'Ilyasov', imtahanneticesi: 45 },
//     '125': { ad: 'Elton', soyad: 'Memmedov', imtahanneticesi: 60 },
//     '126': { ad: 'Samir', soyad: 'Qocayev', imtahanneticesi: 30 },
//     '127': { ad: 'Yusiz', soyad: 'Hezretli', imtahanneticesi: 85 }
// };


// const imtahkecmek = 50;

// // Sınav sonuçlarına göre öğrencileri filtreleyelim
// for (let telebeid in telebeler) {
//     if (telebeler[telebeid].imtahanneticesi < imtahkecmek) {
//         delete telebeler[telebeid];
//     }
// }

// // Sonuçları ekrana yazdıralım
// console.log("Geçen Telebeler:");
// console.log(telebeler);



//20. Verilmiş 2mətnin oxşarlıq əmsalını hesablayın. ( 3 ardıcıl sözün eyniliyinə əsasən)

// let text1 = "salam necesen menim adim Emindir";
// let text2 = "salam necesen menim adim Emin deyil";
// let n = 3;

// text1 = text1.toLowerCase().split(/\s+/);
// text2 = text2.toLowerCase().split(/\s+/);

// let count = 0;
// for (let i = 0; i <= text1.length - n; i++) {
//     let phrase1 = text1.slice(i, i + n).join(' ');
//     if (text2.join(' ').includes(phrase1)) {
//         count++;
//     }
// }

// let similarity = count / (text1.length - n + 1);
// console.log(similarity);


//21. İşçilərin 1 saatlıq əmək haqqı və həftəlik iş saatları verildikdə, aylıq əmək haqqınn hesablanması üçünproqram yazın. Həftəlik 40 saatdan artıq olan iş saatları üçün əmək haqqı 2 qat hesablansın

//     let saatliq_emek=10
//     let heftelik_saat=40
//     let maash=0
//         if(heftelik_saat<=40){
//             maash=saatliq_emek*heftelik_saat*4
//         }else{
//             maash=(saatliq_emek*40+(heftelik_saat-40)*2*saatliq_emek)*4
//         }
//   console.log(maash);


//Verilmiş mətndə «ADNA» sözlərini «ADNSU» sözü ilə əvəz edin.


// function Myfunction(text) {
//     let replacedText = text.replace(/\bADNA\b/g, 'ADNSU');
//     return replacedText;
// }

// // Örnek kullanım
// let inputText = "Salan men ADNS u da oxuyuram ADNA";
// let newText = Myfunction(inputText);

// console.log("kohne metin:");
// console.log(inputText);
// console.log("\nYeni metin:");
// console.log(newText);


//3 rəqəmli ədədin rəqəmləri cəmini tapın.

// let eded = 345;

// let reqemler = eded.toString().split('').map(Number);

// let toplam = reqemler.reduce((acc, curr) => acc + curr, 0);

// console.log("reqemlerın toplamı:", toplam);


//Array daxilində tək yerdə duran elementləri ekrana verin

// let array = [1, 2, 3, 4, 5, 2, 3, 6, 4, 7, 8, 5, 9];
// let tekYerler = [];

// for (let i = 0; i < array.length; i++) {
//     let count = 0;
//     for (let j = 0; j < array.length; j++) {
//         if (array[i] === array[j]) {
//             count++;
//         }
//     }
//     if (count === 1) {
//         tekYerler.push(array[i]);
//     }
// }

// console.log("Yalnızca bir defa geçen ededer:", tekYerler);



//Array elementləri daxilində 5-ə bölünən ədədlərin sayını ekrana verin

// let array = [10, 15, 6, 25, 30, 5, 7, 20];
// let count = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 5 === 0) {
//         count++;
//     }
// }

// console.log("Array elementləri daxilində 5-ə tam bölünən ədədlərin sayı:", count);


// let array = [10, 15, 6, 21, 30, 35, 42, 7, 20];
// let c = null;

// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 7 === 0) {
//         c = array[i];
//         break;
//     }
// }

// console.log("Array elementləri daxilində 7-ə tam bölünən sonuncu ədəd:", c);


//28 Verilmiş array daxilində ixtiyari(random) ədədi ekrana çıxaran proqram tərtib edin

// function Myfunction(arr) {
    
//     let length = arr.length;

   
//     let randomIndex = Math.floor(Math.random() * length);

 
//     return arr[randomIndex];
// }

// let myArray = [1, 5, 9, 12, 27, 34, 42];

// // Rastgele bir elemanı ekrana yazdıralım
// console.log("Random seçilen :", Myfunction(myArray));




//Array elementləri daxilində ən böyük və ən kiçik elementlərin yerini dəyişən proqram tərtib edin

// let array = [10, 5, 8, 3, 15, 7];

// let enBuyuk = Math.max(...array);
// let b = Math.min(...array);

// let enBuyukIndex = array.indexOf(enBuyuk);
// let enkicik = array.indexOf(b);


// [array[enBuyukIndex], array[enkicik]] = [array[enkicik], array[enBuyukIndex]];

// console.log("Yer değiştirilmiş array:", array);

// let array = [10, 5, 8, 3, 15, 7];

// let length = array.length;

// let randomIndex = Math.floor(Math.random() * length);

// let b = array[randomIndex];

// console.log("İxtiyari seçilen eded:", b);

// 29. 1-dən 100-ə qədər ədədlər daxilində təkliyi 1 olan ədədləri ekrana verin

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }


// 30 Daxil olunmuş ifadənin polindrom olduğunu yoxlayın. (polindrom dedikdə tərsi və düzü eyni olan ifadə başa düşülür məsələn ütü, 121,1331,4554 və s.)
// function Myfunction(text) {
    
//     let cleanedText = text.toLowerCase().replace(/[\W_]/g, '');

    
//     let reversedText = cleanedText.split('').reverse().join('');

//     return cleanedText === reversedText;
// }


// let text1 = "üzu";
// let text2 = "121";
// let text3 = "1331";
// let text4 = "4554";

// console.log(text1 + " palindrom mudur?", Myfunction(text1));
// console.log(text2 + " palindrom mudur?", Myfunction(text2));
// console.log(text3 + " palindrom mudur?", Myfunction(text3));
// console.log(text4 + " palindrom mudur?", Myfunction(text4));



//Daxil olunmuş iki sözün anaqram olduğunu yoxlayın ( anaqram dedikdə sözlərinin tərkibinin eyni olması başa düşülür, məsələn oslo solo və s.)
// 31. sual
// let soz1="solo"
// let soz2="oslo"
// let soz1_split=soz1.split("")
// let soz2_split=soz2.split("")
// soz1_split.sort()
// soz2_split.sort()
// let count=0
// if(soz1.length!=soz2.length ||  soz1==soz2){
//     console.log("anagram deyil");
// }else{
//     for(let i=0;i<soz1.length;i++){
//         if(soz1_split[i]==soz2_split[i]){
//             count++
//         }
//     }
//     if(count==soz1.length){
//         console.log("anagram");
//     }else{
//         console.log("anagram deyil");
//     }
// }


//32 Daxil olunmuş mətndə saitləri silən proqram yaradın

// function Myfunction(text) {
   
//     const vowelsRegex = /[aeiouAEIOU]/g;
    
   
//     let result = text.replace(vowelsRegex, '');

//     return result;
// }


// let inputText = "Daxil olunmuş mətndə saitləri silən proqram";
// let textWithoutVowels = Myfunction(inputText);
// console.log("Giriş metni:", inputText);
// console.log("Saitler silindikdən sonraki metin:", textWithoutVowels);


//33. İstifadəçi daxil edən ədəd sayda ixtiyarı(random) simvoldan ibarət string ifadə yaradın (məsələn input:5 output: qeg8d)


// function Myfunction(length) {
   
//     let result = '';

 
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

   
//     for (let i = 0; i < length; i++) {
       
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         result += characters.charAt(randomIndex);
//     }

//     return result;
// }

// // Örnek kullanım
// let inputLength = 5;
// let randomString = Myfunction(inputLength);
// console.log(`Input: ${inputLength}, Output: ${randomString}`);



//34 Daxil olunmuş mətndə saitləri silən proqram yaradın

// let metn = "Daxil olunmuş mətndə saitləri silən proqram yaradın.";
// let yeniMetn = "";


// const saitler = "aeiouAEIOU";


// for (let i = 0; i < metn.length; i++) {
//     let currentChar = metn[i];

 
//     if (saitler.indexOf(currentChar) === -1) {
//         yeniMetn += currentChar;
//     }
// }

// console.log("Netice:", yeniMetn);



// let uzunluq = 5;
// let a = '';

// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// for (let i = 0; i < uzunluq; i++) {
//     let randomIndex = Math.floor(Math.random() * characters.length);
//     a += characters.charAt(randomIndex);
// }

// console.log("Output:", a);



//34. Daxil olunmuş sözdə neçə sait və samit olduğunu tapın


// function Myfunction(word) {
    
//     word = word.toLowerCase();

//     const sait = "aeiou";
//     const samit = "bcdfghjklmnpqrstvwxyz";

//     // Başlangıç değerleri
//     let count = 0;
//     let count2 = 0;

   
//     for (let char of word) {
//         if (sait.includes(char)) {
//             count++;
//         } else if (samit.includes(char)) {
//             count2++;
//         }
       
//     }

//     return {
//         sait: count,
//         samit: count2
//     };
// }

// // Örnek kullanım
// let word = "Daxil olunmuş söz";
// let counts = Myfunction(word);

// console.log("Sait harfler sayı:", counts.sait);
// console.log("Samit harfler sayı:", counts.samit);


// 35. Daxil olunmuş ədədin mükəmməl ədəd olub olmadığını yoxlayan metod
// yaradın (Mükəmməl ədəd ədədin özündən başqa qalan bütün tam bölənlərinin
// cəmi özünə bərabər olan ədədə deyilir - məs: 6=1+2+3; 28=1+2+4+7+14)

// function Myfunction(number) {
//     if (number <= 1) {
//         return false; 
//     }

//     let sum = 1;

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             sum += i; //

//             if (i !== number / i) {
//                 sum += number / i;
//             }
//         }
//     }

//     return sum === number; 
// }

// let number = +prompt("eded");
// if (Myfunction(number)) {
//     console.log(number + " mükemmel bir sayıdır.");
// } else {
//     console.log(number + " mükemmel bir sayı deyil.");
// }





// /36. Daxil olunan ixtiyari ədədin rəqəmləri cəmini tapan funksiya yaradın


// function Myfunction() {
//     let a = prompt("eded daxil edin")
//     let b = prompt("eded daxil edin")
   
//     a = Number(a);
//     b = Number(b);

//     return a+b


// }
// console.log(Myfunction());
