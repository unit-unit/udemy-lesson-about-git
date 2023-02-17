// async независимый атбрибут, загружается и выполняется. не ждет никого
//

const script = document.createElement('script');
script.src = "js/test.js";
script.async = false; //будет вести себя как обычный скрипт
document.body.append(script);