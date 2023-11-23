function validateForm(){
    const nama = document.forms['formIndex']['nama'].value;
    const email = document.forms['formIndex']['email'].value;
    const selectWhere = document.forms['formIndex']['select-where'].value;

    if(nama == "" && email == "" && selectWhere == ""){
        alert('Data wajib diisi!');
        return false;
    }
    else if(nama == "" ){
        alert('Nama anda wajib diisi!');
        return false;
    }
    else if(email == ""){
        alert('Email wajib diisi!');
        return false;
    }
    else if(selectWhere == ""){
        alert('Anda wajib memilih tempat tujuan terlebih dahulu!');
        return false;
    }
    else{
        document.getElementById('error-name').innerHTML = nama;
        document.getElementById('error-email').innerHTML = email;
        document.getElementById('error-tujuan').innerHTML = selectWhere;
        return true;
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if(n > slides.length){
        slideIndex = 1;
    }if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i< dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}


