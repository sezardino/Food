function calculator() {
  const result = document.querySelector('.calculating__result span');
  let sex = 'female',
   weight, height, age,
   ratio = 1.335;

  const calculateCalories = () => {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = `****`;
      return;
    }

    if (sex === 'female') {
      result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
      result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
  }
  calculateCalories()

  const getStaticInfo = (parentSelector, activityClass) => {
    const elements = document.querySelectorAll(`${parentSelector} div`);
    elements.forEach((element) => {
      element.addEventListener('click', (evt) => {
        const target = evt.target;
        if (target.getAttribute('data-ratio')) {
          ratio = +target.getAttribute('data-ratio');
        } else {
          sex = target.getAttribute('id');
        };
        elements.forEach((element) => element.classList.remove(activityClass));
        target.classList.add(activityClass);
        calculateCalories()
      })
    })
  }
  getStaticInfo('#gender', 'calculating__choose-item_active');
  getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');

  const getDinamickInfo = (selector) => {
    const input = document.querySelector(selector);
    input.addEventListener('input', () => {
      input.getAttribute('id') === 'height'? height = input.value : 
      input.getAttribute('id') === 'weight'? weight = input.value : age = input.value;
      calculateCalories()
    });
  }

    getDinamickInfo('#height');
    getDinamickInfo('#weight');
    getDinamickInfo('#age');
};

export default calculator;