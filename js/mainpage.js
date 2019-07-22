const axios = require('axios');
let ul = document.querySelector('ul');
axios.get('/list.json').then(res => {
    for(let x in res.data.items){
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = `/${res.data.items[x]}`;
        a.textContent = x;
        li.appendChild(a);
        ul.appendChild(li);
    }
});