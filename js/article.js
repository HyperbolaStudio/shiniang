const axios = require('axios');
const marked = require('marked');
function asyncGetMd(article,file){
    return axios.get(`../${article}/${file}.md`);
}
function insertMd(md,targetElem){
    targetElem.innerHTML = marked(md);
}
module.exports = {asyncGetMd,insertMd};