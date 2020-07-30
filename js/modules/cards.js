import {getResorces} from '../services/services';

function cards() {
  class MenuCard {
    constructor (img, alt, title, text, price, parentSelector) {
      this.img = img;
      this.altimg = alt;
      this.title = title;
      this.text = text;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }
      changeToUAH() {
        this.price = this.price * this.transfer;
      };

      render() {
        const elementHtml = () => {
          return (`<div class="menu__item">
                  <img src=${this.img} alt=${this.altimg}>
                  <h3 class="menu__item-subtitle">${this.title}</h3>
                  <div class="menu__item-descr">${this.text}</div>
                  <div class="menu__item-divider"></div>
                  <div class="menu__item-price">
                      <div class="menu__item-cost">Цена:</div>
                      <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                  </div>
              </div>`);
        };
        this.parent.insertAdjacentHTML('beforeend', elementHtml())
      };
  }
  
  const render = (container, element, place = 'beforeEnd') => {
    parent = document.querySelector(container)
    parent.insertAdjacentHTML(place, element)
  }
  getResorces('http://localhost:3000/menu')
    .then((data) => {
      data.forEach(({img, altimg, title, descr, price}) => {
        const transfer = 27;
        price = transfer * price;
        const cardTemplate = () => {
                  return (`<div class="menu__item">
                          <img src=${img} alt=${altimg}>
                          <h3 class="menu__item-subtitle">${title}</h3>
                          <div class="menu__item-descr">${descr}</div>
                          <div class="menu__item-divider"></div>
                          <div class="menu__item-price">
                              <div class="menu__item-cost">Цена:</div>
                              <div class="menu__item-total"><span>${price}</span> грн/день</div>
                          </div>
                      </div>`);
        }
        render(".menu .container", cardTemplate())
      })
    })
};

export default cards;