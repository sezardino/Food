export const openModal = (modalSelector, timerId) => {
  const modal = document.querySelector(modalSelector);
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  clearTimeout(timerId)
};

export const closeModal = (modalSelector) => {
  const modal = document.querySelector(modalSelector);
  modal.style.display = 'none';
  document.body.style.overflow = '';
};

function modals(trigerSelector, modalCloseBtnSelector, modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector),
        modalBtns = document.querySelectorAll(trigerSelector),
        modalCloseBtn = document.querySelector(modalCloseBtnSelector);

  const onModalBtnClick = () => {
    openModal(modalSelector);
  };

  const onModalCloseBtnClick = () => {
    closeModal(modalSelector);
  };

  modalBtns.forEach((btn) => {
    btn.addEventListener('click', onModalBtnClick)
  });

  modalCloseBtn.addEventListener('click', onModalCloseBtnClick)
  const onWindowScroll = () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal(modalSelector);
      window.removeEventListener('scroll', onWindowScroll)
    }

  };
  window.addEventListener('scroll', onWindowScroll);
};

export default modals;