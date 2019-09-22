console.log("不错啊，还会看开发者工具\n那何尝不加入我们的前端开发团队呢？");
let s = new Date('2017-1-23');
let deltaMs = Date.now()-s;
let deltaDay = Math.floor(deltaMs/(1000*60*60*24));
let div = document.createElement('div');
let span = document.createElement('span');
span.textContent = deltaDay;
div.append('在双曲线工作室成立后的第',span,'天，你看到了这篇文章。');
document.querySelector('article').prepend(div);