const banner = document.querySelector('.banner');
const imagens = banner.querySelectorAll('img');
let indiceAtual = 0;

function mostrarImagem(novoIndice) {
if (imagens.length === 0) {
console.error("Nenhuma imagem encontrada na div com a classe 'banner'.");
return; // Sai da função se não houver imagens
}

if (novoIndice === undefined) {
novoIndice = (indiceAtual + 1) % imagens.length;
}

//Otimização: Define diretamente na primeira imagem
imagens[indiceAtual].style.display = 'none';
imagens[novoIndice].style.display = 'block';
indiceAtual = novoIndice;
}


if (imagens.length > 0) { // Só adiciona os eventos se houver imagens
imagens.forEach((imagem, index) => {
imagem.addEventListener('click', () => mostrarImagem(index));
});

setInterval(() => mostrarImagem(), 3000);
mostrarImagem(); // Mostra a primeira imagem
}

setInterval(() => mostrarImagem(), 3000);
function adicionarProduto(imagem, nome, descricao, preco) {
const produtos = document.querySelector('.caixa');
const novoProduto = document.createElement('div');
novoProduto.classList.add('produto');

novoProduto.innerHTML = `
<img src="${imagem}" alt="${nome}">
<h3>${nome}</h3>
<p>${descricao}</p>
<p class="preco">R$${preco.toFixed(2)}</p>
<button><a href="https://wa.me/5562996563279">WHATSAPP</a></button>
`;

produtos.appendChild(novoProduto);
}

// Exemplos de uso:
adicionarProduto("Gloss roxo.jpg", "Gloss Brilho", "O Gloss Labial Brilhante é seu novo aliado de beleza! Leve, prático e fácil de aplicar, ele se adapta a qualquer momento do seu dia.  Use sozinho para um brilho natural ou sobre o seu batom favorito para intensificar a cor e o brilho.  Sua fórmula versátil garante lábios hidratados e radiantes em qualquer situação.", 00,00);
adicionarProduto("gloss.jpg", "Base Líquida", "Base leve e com alta cobertura muito o produto de vexlente qualidade.", 00,00);
adicionarProduto("gloss.jpg", "Corretivo", "Corretivo cremoso para disfarçar olheiras e imperfeições.", 00,00);
adicionarProduto("batom.jpg", "Batom Matte Vermelho", "Batom de longa duração com acabamento jfhfhf dhfjjfjjfjf jfhhdhfjfj durjrhhrhf matte.", 00,00);
adicionarProduto("gloss.jpg", "Base Líquida", "Base leve e com alta cobertura.", 00,00);
adicionarProduto("gloss.jpg", "Corretivo", "Corretivo cremoso para disfarçar olheiras e imperfeições.", 00,00);
