// Kullanıcıdan en az 10 tane sayı girmesini isteyelim
// Girilen her bir sayı tek ise "tekSayilar" dizisine, çift ise "ciftSayilar" dizisine eklensin.
// Daha sonra console'da "tek sayılar : " ve "çift sayılar : " diye yazdıralım.


let ciftSayilar = [];
let tekSayilar = [];

for (let i = 0; i < 10; i++) {
    let sayi = parseInt(prompt((i+1) + ". sayıyı girin:"));
    
   
    if (sayi % 2 === 0) {
        ciftSayilar.push(sayi);
    } else {
        tekSayilar.push(sayi);
    }
}

console.log("Çift sayılar: " + ciftSayilar);
console.log("Tek sayılar: " + tekSayilar);

