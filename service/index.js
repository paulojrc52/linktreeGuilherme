const containerWorks = document.querySelector('.containerWorks')

const works = [
  {name: 'Meia Polegada(Colorida)', price:1200, img: './imgservice/meiapC.PNG', size: 13},
  {name: 'Meia Polegada(Preto & Branco)', price:1000, img: './imgservice/meiapP.PNG', size: 13},
  {name: 'Membro Passado(Preto & Branco)', price:3300, img: './imgservice/membropP.PNG', size: 53},
  {name: 'Polegada(Colorida)', price:1700, img: './imgservice/polegadaC.PNG', size: 21},
  {name: 'Fechamento Maior(Colorida)', price:3300, img: './imgservice/fechamentomC.PNG', size: 38},
  {name: 'Membro Passado(Colorida)', price:3700, img: './imgservice/membropC.PNG', size: 58},
  {name: 'Fechamento Maior(Preto & Branco)', price:2300, img: './imgservice/fechamentomP.PNG', size: 38},
  {name: 'Fechamento Menor(Preto & Branco)', price:1700, img: './imgservice/fechamentomenorP.PNG', size: 28},
  {name: 'Fechamento Menor(Colorida)', price:2200, img: './imgservice/fechamentomenorC.PNG', size: 28},
  {name: 'Polegada(Preto & Branco)', price:1400, img: './imgservice/polegadaP.PNG', size: 21},
  {name: 'Flash Tattoo(Preto & Branco)', price:500, img: './imgservice/flashP.PNG', size: 8},
  {name: 'Flash Tattoo(Colorida)', price:700, img: './imgservice/flashC.PNG', size: 8},
]

const indexWorks = () => {
  works.map(({name, price, img, size}) => containerWorks.innerHTML += `
  <div class="boxWorks">
    <img src="${img}" alt="${name}" class="imgWorks">
    <br><br>
    <span class='spanTitle'>${name}</span>
    <br><br>
    <span>Valor:</span> <span class='numbers'>R$ ${price},00</span>
    <br>
    <span>Tamanho:</span> <span class='numbers'>${size}cm</span>
  </div>

`)
}

indexWorks()
