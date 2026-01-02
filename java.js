let likes = 0;
function toggleLike(botao){
    const texto = botao.querySelector(".text");
    const contador = document.getElementById("likeCount");

    if(botao.classList.contains("liked")){
        botao,classList.remove("liked");
        texto.innerText = "Curtir";
        likes--;
    }

    else{
        botao.classList.add("liked");
        texto.innerText =" Gostei";
        likes++;
    }

    contador.innerText = likes;


}