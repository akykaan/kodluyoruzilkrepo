function allMenuButton() {

    getAllItem(menu)
}

function allKoreanMenu() {

    const koreanMenu = menu.filter(function (menuName) {
        return menuName.category == "Korea";
    })

    getAllItem(koreanMenu)

}
function allJapanMenu() {
    const japanMenu = menu.filter(function (menuName) {
        return menuName.category == "Japan";
    })

    getAllItem(japanMenu)
}
function allChinaMenu() {
    const chinaMenu = menu.filter(function (menuName) {
        return menuName.category == "China";
    })

    getAllItem(chinaMenu)
}

function getAllButton() {

    var btnAll = document.createElement("button");
    btnAll.innerHTML = "All";
    btnAll.type = "submit";
    btnAll.name = "formBtn";
    btnAll.className = "btn btn-outline-dark btn-item";
    btnAll.onclick = function () {
        allMenuButton();
    };
    document.getElementById("buttons").appendChild(btnAll);

    var btnKorea = document.createElement("button");
    btnKorea.innerHTML = "Korea";
    btnKorea.type = "submit";
    btnKorea.name = "formBtn";
    btnKorea.className = "btn btn-outline-dark btn-item";
    btnKorea.onclick = function () {
        allKoreanMenu();
    };
    document.getElementById("buttons").appendChild(btnKorea);

    var buttonJapan = document.createElement("button");
    buttonJapan.innerHTML = "Japan";
    buttonJapan.type = "submit";
    buttonJapan.name = "formBtn";
    buttonJapan.className = "btn btn-outline-dark btn-item";
    buttonJapan.onclick = function () {
        allJapanMenu();
    };
    document.getElementById("buttons").appendChild(buttonJapan);

    var buttonChina = document.createElement("button");
    buttonChina.innerHTML = "China";
    buttonChina.type = "submit";
    buttonChina.name = "formBtn";
    buttonChina.className = "btn btn-outline-dark btn-item";
    buttonChina.onclick = function () {
        allChinaMenu();
    };
    document.getElementById("buttons").appendChild(buttonChina);
}

window.onload = function () {
    getAllItem(menu);
    getAllButton();
};


function getAllItem(menuArray) {
    
    var div,divMenuInfo,divMenuTitle,img,divMenuH4,divMenuPrice,divMenuText;
    document.getElementById("div1").innerHTML = "";
        
    for (let i = 0; i < menuArray.length; i++) {

        div = document.createElement("div");
        divMenuInfo = document.createElement("div");
        divMenuTitle = document.createElement("div");
        img = document.createElement('img');
        divMenuH4 = document.createElement("h4");
        divMenuPrice = document.createElement("h4");
        divMenuText = document.createElement("div");

        div.className = "menu-items col-lg-6 col-sm-12";
        div.id = "div" + i + 1;
        document.getElementById("div1").appendChild(div);

        img.src = menuArray[i].img;
        img.className = "photo";
        document.getElementById("div" + i + 1).appendChild(img);

        divMenuInfo.className = "menu-info";
        divMenuInfo.id = "div" + i + 1 + "info";
        document.getElementById("div" + i + 1).appendChild(divMenuInfo);

        divMenuTitle.className = "menu-title";
        divMenuTitle.id = "div" + i + 1 + "title";
        document.getElementById("div" + i + 1 + "info").appendChild(divMenuTitle);

        divMenuH4.innerText = menuArray[i].title;
        document.getElementById("div" + i + 1 + "title").appendChild(divMenuH4);

        divMenuPrice.innerText = menuArray[i].price;
        divMenuPrice.className = "price";
        document.getElementById("div" + i + 1 + "title").appendChild(divMenuPrice);

        divMenuText.className = "menu-text";
        divMenuText.id = "div" + i + 1;
        divMenuText.innerText = menuArray[i].desc;
        document.getElementById("div" + i + 1 + "info").appendChild(divMenuText);

    }
    
    
}