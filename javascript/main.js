
var mainImg = document.querySelector(".mainimg");
var allImg = document.querySelectorAll(".container img");


for(var i=0;i<allImg.length;i++){

    allImg[i].addEventListener("click",preview);
}


function preview(pInfo){

    var path=pInfo.target.src;
     mainImg.style.cssText="background-image:url("+path+");background-size :cover; background-repeat:no-repeat;";

    console.log(path)

}
