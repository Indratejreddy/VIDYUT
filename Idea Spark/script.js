function model() {
  let numOfPieces = 6 * 6;
  let frag = document.createDocumentFragment();

  function insertInnerPieces($el, innerPieces) {
    for (let i = 0; i < innerPieces; i++) {
      let $inner = document.createElement("div");
      $inner.classList.add("popup__piece-inner");
      $el.appendChild($inner);
    }
  }

  for (let i = 1; i <= numOfPieces; i++) {
    let $piece = document.createElement("div");
    $piece.classList.add("popup__piece");

    insertInnerPieces($piece, 3);
    frag.appendChild($piece);
  }

  document.querySelector(".popup__pieces").appendChild(frag);

  let $popupsCont = document.querySelector(".popups-cont");
  let $popup = document.querySelector(".popup");
  let popupAT = 900;

  document.querySelector(".popup-btn").addEventListener("click", function () {
    $popupsCont.classList.add("s--popup-active");
    $popup.classList.add("s--active");
  });

  function closeHandler() {
    $popupsCont.classList.remove("s--popup-active");
    $popup.classList.remove("s--active");
    $popup.classList.add("s--closed");

    setTimeout(function () {
      $popup.classList.remove("s--closed");
    }, popupAT);
  }

  document
    .querySelector(".popup__close")
    .addEventListener("click", closeHandler);

  document
    .querySelector(".popups-cont__overlay")
    .addEventListener("click", closeHandler);
}

setTimeout(() => model(), 3000);