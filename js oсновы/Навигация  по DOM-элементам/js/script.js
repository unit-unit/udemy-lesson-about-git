
// console.log(document.body); // получить в консоль body
// console.log(document.head); //получить head

// console.log(document.documentElement); // получить весь документ

// console.log(document.body.childNodes); //получаем псевдомассив из узлов которые являются детьми у body

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
//console.log(document.body.firstElementChild);


// //получить родителя, соседей и детей
// console.log(document.querySelector('#current').parentNode); //получаем через querySel по id button и 
//                                                             // потом находим его родителя
// console.log(document.querySelector('#current').parentElement); //чтобы точно получить элемент
// console.log(document.querySelector('#current').parentNode.parentNode); //получаем родителя, родителя элемента который
//                                                                         //нашли

// console.log(document.querySelector('[data-current="3"]').nextSibling); //находим элемент и потом ищем следующий узел после него
// console.log(document.querySelector('[data-current="3"]').previousSibling); //предудущий узел

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //слудующий элемент
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); // предыдущий 


// ЧТОБЫ ПЕРЕБРАТЬ childNodes и получить только элементы и убрать узлы из псевдомасива
console.log(document.body.childNodes);

for(let node of document.body.childNodes){
    if (node.nodeName == '#text' || node.nodeName == '#comment'){ //убираем узлы переносы и комменты
        continue;
    }
    console.log(node);
}