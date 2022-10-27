const cheat = document.getElementById('cheat');
const btn = document.getElementById('buy');

btn.onclick = event => {
    console.log(cheat.selectedIndex);
    let checkedCheat = cheat.options[cheat.selectedIndex].text;

    if (checkedCheat == 'PC') {
        window.location.href = "main.html";
    } 
    else if (checkedCheat == 'Mobile') {
        alert("Просим вас понять что сайт пока что не оптимизирован и некоторые style могут быть не настроены под ваш девайс!");
        window.location.href = "phone.html";
    } else {
        alert("Invalid error");
    }

};