const article = require('./article');
function getPage(title,elemArticle,elemAside){
    article.asyncGetMd(title,'article').then(res => {
        article.insertMd(res.data,elemArticle);
    });
    article.asyncGetMd(title,'aside').then(res => {
        article.insertMd(res.data,elemAside);
        document.querySelector('#loading').remove();
    });
}

    let title = document.querySelector('meta[name="-1:article-src"]').getAttribute('content');
    let elemArticle = document.querySelector('article');
    let elemAside = document.querySelector('aside');
    getPage(title,elemArticle,elemAside);


