// 새로고침 막기
function preventReload() {
    const allA = document.querySelectorAll("a");

    allA.forEach(a => {
        a.addEventListener('click', function(e) {
            e.preventDefault();
        });
    })
}

preventReload();

// 메뉴바
function allMenu() {
    const allMenu = document.querySelector(".all-menu");
    const nav = document.querySelector(".nav");
    const menuBg = document.getElementsByClassName("menu-bg")[0];

    allMenu.addEventListener("click", function (e) {
        e.target.classList.toggle("active");
        nav.classList.toggle("on");
        menuBg.classList.toggle("show");
    });
}

allMenu();


// 메뉴
function gnbMenu() {
    const gnb = document.querySelectorAll(".gnb-list");
    const submenu = document.querySelectorAll(".submenu");
    const header = document.getElementById("header");

    gnb.forEach((menu, i) => {
        menu.addEventListener("mouseenter", () => {
            submenu[i].style.display = "block";
        });

        header.addEventListener("mouseleave", () => {
            submenu[i].style.display = "none";
        });
    });
}

gnbMenu();


// 상품 목록
function productList() {
    const tabs = document.querySelectorAll(".p-list");
    const products = document.querySelectorAll(".product");

    tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => {
            tabs.forEach((tab) => {
                tab.classList.remove("product-on");
            });
            tab.classList.add("product-on");

            products.forEach((item) => {
                item.classList.remove("show-product");
            });
            products[i].classList.add("show-product");
        });
    });
}

productList();

