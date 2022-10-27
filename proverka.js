const cheat = document.getElementById('cheat');
const btn = document.getElementById('buy');

btn.onclick = event => {
    console.log(cheat.selectedIndex);
    let checkedCheat = cheat.options[cheat.selectedIndex].text;

    if (checkedCheat == 'Day') {
        window.location.href = "https://oplata.qiwi.com/form?invoiceUid=975702e8-7ea9-4ca6-9da1-468079abe36f";
    } 
    else if (checkedCheat == 'Week') {
        window.location.href = "https://oplata.qiwi.com/form?invoiceUid=4704f9a0-e6f2-475e-a324-64cfb952cd03";
    }
    else if (checkedCheat == 'Month') {
        window.location.href = "https://oplata.qiwi.com/form?invoiceUid=6d4ab8be-609b-4a39-aee4-4d6803f20598";
    }
    else if (checkedCheat == 'Year') {
        window.location.href = "https://oplata.qiwi.com/form?invoiceUid=db90b69b-004b-4b61-b4c1-fa4c342793db";
    }
    else if (checkedCheat = 'Forever') {
        window.location.href = "https://oplata.qiwi.com/form?invoiceUid=326bf696-c139-4525-a3f9-6d0f08a1aa04";
    } else {
        alert("Invalid error");
    }

};