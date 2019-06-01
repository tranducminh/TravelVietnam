document.addEventListener("DOMContentLoaded", function () {


    
    var indexDefault = 0;
    
    function showSlide() {
        let listImage = document.querySelectorAll('.container__content__header__image');
        for (let i = 0; i < listImage.length; i++) {
            const image = listImage[i];
            image.style.display = "none";
        }
        console.log(window.innerWidth);
        if (window.innerWidth <= 500) {
            if (indexDefault == listImage.length) indexDefault = 0;
            
            listImage[indexDefault].style.display = "block";
            // listImage[indexDefault].classList.add("displayImageTop");
            indexDefault++;
        } else if (window.innerWidth <= 800) {
            for (let count = 0; count < 2; ++count) {
                if (indexDefault == listImage.length) indexDefault = 0;
                listImage[indexDefault].style.order = count;
                listImage[indexDefault++].style.display = "block";
                // listImage[indexDefault++].classList.add("displayImageTop");
            }
        } else if (window.innerWidth <= 1100) {
            for (let count = 0; count < 3; ++count) {
                if (indexDefault == listImage.length) indexDefault = 0;
                listImage[indexDefault].style.order = count;
                listImage[indexDefault++].style.display = "block";
                // listImage[indexDefault++].classList.add("displayImageTop");
            }
        } else if (window.innerWidth <= 1500) {
            for (let count = 0; count < 4; ++count) {
                if (indexDefault == listImage.length) indexDefault = 0;
                listImage[indexDefault].style.order = count;
                listImage[indexDefault++].style.display = "block";
                // listImage[indexDefault++].classList.add("displayImageTop");
            }
        } else {
            for (let count = 0; count < 5; ++count) {
                if (indexDefault == listImage.length) indexDefault = 0;
                listImage[indexDefault].style.order = count;
                listImage[indexDefault++].style.display = "block";
                // listImage[indexDefault++].classList.add("displayImageTop");
            }
        }
        setTimeout(showSlide, 3000);
    }
    showSlide();


}, false);