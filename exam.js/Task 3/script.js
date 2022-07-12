/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const results = document.querySelector('div');
const btn = document.querySelector('button');
btn.addEventListener('click', fetchData)

function fetchData () {


fetch(ENDPOINT).then(function (res) {
    return res.json();
}).then(function (data) {
    console.log(data.items);
    data.items.forEach(item => {
        console.log(item.login);
        console.log(item.avatar_url);
        let itemCard = document.getElementById('output');
        itemCard.innerHTML = `${item.login} ${item.avatar_url}`
        results.append(itemCard);
    })
}).catch(function(e) {
    console.log(e);
 })
}

