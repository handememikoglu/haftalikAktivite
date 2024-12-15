// Haftalık Aktivite Çizelgesi

const newArray = [];
for (let i = 0; i < 7; i++) {
    let day = prompt("Lütfen gün adını giriniz.").toLocaleUpperCase("tr");
    let activite = prompt(`${day}, gününde ne yapmayı planlıyorsunuz ?`);
    const obje = {
        Gün: day,
        Aktivite: activite
    };
    newArray.push(obje);
}

console.log(newArray);

