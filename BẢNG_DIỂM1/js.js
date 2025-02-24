let divbo = document.querySelector(".bo2");
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("but1").addEventListener("click",function(){
        
        if(divbo.style.display === "none" ||  divbo.style.display ===""){
            divbo.style.display = "flex";
        }
        else{
            divbo.style.display = "none";
        }
    });
});
document.getElementById("but3").addEventListener("click", function() {
    let username = document.getElementById("tendangnhap").value;
    let password = document.getElementById("matkhau").value;
    let bo3 = document.querySelector(".bo3");
    let video = document.getElementById("vid");
    console.log("Tên đăng nhập:", username);
    console.log("Mật khẩu:", password);
    if( username === "admin" && password ==="khonggiandocyen"){
        bo3.style.display ="block";
        video.play();
        divbo.style.display = "none";
    }
    else{
        bo3.style.display = "none";
        video.pause();
    }
});
