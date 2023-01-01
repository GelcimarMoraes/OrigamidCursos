const Jimp = require("jimp");
const fs = require('fs');
const imagens = fs.readdirSync('./imagens/');

imagens.forEach(function(arquivo) {
  Jimp.read('imagens/' + arquivo).then(function(imagem) {
    imagem
    .cover(1000, 400)
    .write('otimizadas/' + arquivo);
  }).catch(function(err) {
    console.error(err);
  });
});
