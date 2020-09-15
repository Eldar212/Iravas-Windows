const modals = () => {
  function bindModal(triggerSellector, modalSellector, closeSellector) {
    const trigger = document.querySelectorAll(triggerSellector),
      modal = document.querySelector(modalSellector),
      close = document.querySelector(closeSellector);

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });

    close.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
        // document.body.classList.remove('modal-open')
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "";
    }, time);
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );

  bindModal(".phone_link", ".popup", ".popup .popup_close");

  // showModalByTime(".popup", 60000);
};

export default modals;
