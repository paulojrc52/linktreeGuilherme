const containerWorks = document.querySelector('.containerWorks')

const works = [
  {name: 'Meia Polegada(Colorida)', price:1200, img: './imgservice/meiapC.png', size: 13},
  {name: 'Meia Polegada(Preto & Branco)', price:1000, img: './imgservice/meiapP.png', size: 13},
  {name: 'Membro Passado(Preto & Branco)', price:3300, img: './imgservice/membropP.png', size: 53},
  {name: 'Polegada(Colorida)', price:1700, img: './imgservice/polegadaC.png', size: 21},
  {name: 'Fechamento Maior(Colorida)', price:3300, img: './imgservice/fechamentomC.png', size: 38},
  {name: 'Membro Passado(Colorida)', price:3700, img: './imgservice/membropC.png', size: 58},
  {name: 'Fechamento Maior(Preto & Branco)', price:2300, img: './imgservice/fechamentomC.png', size: 38},
  {name: 'Fechamento Menor(Preto & Branco)', price:1700, img: './imgservice/fechamentomenorP.png', size: 28},
  {name: 'Fechamento Menor(Colorida)', price:2200, img: './imgservice/fechamentomenorC.png', size: 28},
  {name: 'Polegada(Preto & Branco)', price:1400, img: './imgservice/polegadaP.png', size: 21},
  {name: 'Flash Tattoo(Preto & Branco)', price:500, img: './imgservice/flashP.png', size: 8},
  {name: 'Flash Tattoo(Colorida)', price:700, img: './imgservice/flashC.png', size: 8},
]

const indexWorks = () => {
  const constructorHtmlWorks = ({name, price, img, size}) => containerWorks.innerHTML += `
    <div class="boxWorks">
      <img src="${img}" alt="${name}" class="imgWorks">
      <br><br>
      <span class='spanTitle'>${name}</span>
      <br><br>
      <span>Valor:</span> <span class='numbers'>R$ ${price},00</span>
      <br>
      <span>Tamanho:</span> <span class='numbers'>${size}cm</span>
    </div>
  
  `
  works.map(constructorHtmlWorks)
}

indexWorks()
