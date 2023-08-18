const botao = document.querySelector(".share");
const userinfo__infos = document.querySelector(".userinfo__infos");
const dialog = document.querySelector("#dialog");
const userinfo = document.querySelector(".userinfo");
const h3 = document.querySelector("h3");
const img = document.querySelector(".share__icon");
function mostrar() {
  let width = screen.width;
  if (width < 760) {
    if (dialog?.classList.contains("hidden")) {
      userinfo__infos?.classList.add("hidden");
      userinfo?.classList.add("bgdark");
      dialog.classList.remove("hidden");
      botao?.classList.add("ativo");
      img.src = "./images/icon-share-white.svg";
    } else {
      userinfo__infos?.classList.remove("hidden");
      dialog?.classList.add("hidden");
      if (userinfo?.classList.contains("bgdark")) {
        userinfo?.classList.remove("bgdark");
      }
      botao?.classList.remove("ativo");
      img.src = "./images/icon-share.svg";
    }
  } else {
    if (dialog?.classList.contains("hidden")) {
      dialog.classList.add("popup");
      dialog.classList.remove("hidden");
      h3?.classList.add("popuptext");
      botao?.classList.add("ativo");
      img.src = "./images/icon-share-white.svg";
    } else {
      dialog?.classList.add("hidden");
      dialog?.classList.remove("popup");
      botao?.classList.remove("ativo");
      img.src = "./images/icon-share.svg";
    }
  }
}
botao?.addEventListener("click", () => mostrar());
