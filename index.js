const containerBoxes = document.querySelector('.containerBox')
const containerWorks = document.querySelector('.containerWorks')

const boxes = [
  {title: 'Trabalhos', img: 'images/tatto.jpg', path: './service/index.html', alt: 'Trabalhos'},
  {title: 'Atendimento', img: 'images/atendimento.png', path: './atendimento/index.html', alt: 'Atendimento'},
  {title: 'Localização', img: '', path: '#', alt: ''},
]

const indexMain = () => {
  const constructorHtmlWorksIndex = ({ title, img, path, alt }) => {
    if (title === 'Localização') {
      return containerBoxes.innerHTML += `
        <div class="box">
          <a href=R${path}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3821.6758382036633!2d-49.2792617!3d-16.6930972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1600b0660f9%3A0xf4ee8be146eb630d!2sTime%207%20Tattoo%20Ink!5e0!3m2!1spt-BR!2sbr!4v1676913359839!5m2!1spt-BR!2sbr" width="140" height="140" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p>${title}</p>
          </a>
        </div>
      `
    }

    containerBoxes.innerHTML += `
      <div class="box">
        <a href=${path}>
          <img src=${img} alt=${alt} class="boxImg">
          <p>${title}</p>
        </a>
      </div>
    ` 
  } 

  boxes.map(constructorHtmlWorksIndex)

}

indexMain()
