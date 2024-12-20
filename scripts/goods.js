const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");
  const closeBtn = document.querySelector(".cart-modal__header--closer");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  closeBtn.addEventListener("click", () => {
    closeModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const goodsFunc = () => {
  const container = document.querySelector("#goods-container");

  const goodsArray = [
    {
      id: 0,
      title: "Ролл угорь стандарт",
      description: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "good-1.jpg",
    },
    {
      id: 1,
      title: "Калифорния лосось стандарт",
      description:
        "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: 395,
      image: "good-2.jpg",
    },
    {
      id: 2,
      title: "Окинава стандарт",
      description:
        " Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      price: 250,
      image: "good-3.jpg",
    },
    {
      id: 3,
      title: "Цезарь маки xl",
      description:
        "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: 250,
      image: "good-4.jpg",
    },
    {
      id: 4,
      title: "Ясай маки стандарт 185г",
      description:
        "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: 250,
      image: "good-5.jpg",
    },
    {
      id: 5,
      title: "Ролл с креветкой стандарт",
      description:
        "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
      image: "good-6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width:100%, text-align:center;">Загрузка...</p>';
  };

  const randerGoods = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
          <div class="products-card">
           <div class="products-card__image">
                      <img
                        src="./images/goods/${card.image}"
                        alt="shrimpStandart"
                      />
                    </div>
                    <div class="products-card__description">
                      <div class="products-card__description-row">
                        <h5 class="products-card__description--name">
                          ${card.title}
                        </h5>
                      </div>
                      <div class="products-card__description-row">
                        <p class="products-card__description--text">
                        ${card.description}
                        </p>
                      </div>
                      <div class="products-card__description-row">
                        <div class="products-card__description-controls">
                          <button class="btn btn-primary">
                            В корзину
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4202 10.9672H5.11549L5.58268 10.0156L13.3452 10.0016C13.6077 10.0016 13.8327 9.81406 13.8796 9.55469L14.9546 3.5375C14.9827 3.37969 14.9405 3.21719 14.8374 3.09375C14.7864 3.033 14.7228 2.98407 14.6511 2.95034C14.5793 2.91661 14.501 2.8989 14.4217 2.89844L4.54674 2.86562L4.46237 2.46875C4.40924 2.21562 4.18112 2.03125 3.92174 2.03125H1.50768C1.36139 2.03125 1.2211 2.08936 1.11766 2.1928C1.01423 2.29624 0.956116 2.43653 0.956116 2.58281C0.956116 2.7291 1.01423 2.86939 1.11766 2.97283C1.2211 3.07626 1.36139 3.13438 1.50768 3.13438H3.47487L3.84362 4.8875L4.75143 9.28281L3.58268 11.1906C3.52198 11.2725 3.48543 11.3698 3.47714 11.4714C3.46886 11.573 3.48918 11.675 3.5358 11.7656C3.62955 11.9516 3.81862 12.0688 4.02799 12.0688H5.00924C4.80005 12.3466 4.68706 12.685 4.68737 13.0328C4.68737 13.9172 5.40612 14.6359 6.29049 14.6359C7.17487 14.6359 7.89362 13.9172 7.89362 13.0328C7.89362 12.6844 7.77799 12.3453 7.57174 12.0688H10.0889C9.87974 12.3466 9.76675 12.685 9.76705 13.0328C9.76705 13.9172 10.4858 14.6359 11.3702 14.6359C12.2546 14.6359 12.9733 13.9172 12.9733 13.0328C12.9733 12.6844 12.8577 12.3453 12.6514 12.0688H14.4217C14.7249 12.0688 14.9733 11.8219 14.9733 11.5172C14.9724 11.3711 14.9137 11.2312 14.8101 11.1282C14.7065 11.0251 14.5663 10.9673 14.4202 10.9672ZM4.77643 3.95312L13.7733 3.98281L12.8921 8.91719L5.82486 8.92969L4.77643 3.95312ZM6.29049 13.5266C6.01862 13.5266 5.79674 13.3047 5.79674 13.0328C5.79674 12.7609 6.01862 12.5391 6.29049 12.5391C6.56237 12.5391 6.78424 12.7609 6.78424 13.0328C6.78424 13.1638 6.73222 13.2894 6.63962 13.3819C6.54703 13.4745 6.42144 13.5266 6.29049 13.5266ZM11.3702 13.5266C11.0983 13.5266 10.8764 13.3047 10.8764 13.0328C10.8764 12.7609 11.0983 12.5391 11.3702 12.5391C11.6421 12.5391 11.8639 12.7609 11.8639 13.0328C11.8639 13.1638 11.8119 13.2894 11.7193 13.3819C11.6267 13.4745 11.5011 13.5266 11.3702 13.5266Z"
                                fill="#fff"
                              />
                            </svg>
                          </button>
                          <span class="products-card__description-controls--price"
                            >${card.price} ₽</span
                          >
                        </div>
                      </div>
                      </div>
            `
      );
    });
  };
  if (container) {
    loading();

    setTimeout(() => {
      randerGoods(goodsArray);
    }, 1000);
  }
};

modalFunc();
goodsFunc();
