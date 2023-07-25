const createCard = (parentElementId, imageSrc, ...textLines) => {
    let card = newHTMLElement('div');
    let image = newHTMLElement('img');
    let textContainer = undefined;
    addClassName(card, "card");

    image.src = imageSrc;
    
    image.style.justifySelf = "center";
    image.style.height = "150px";
    image.style.width = "150px";
    image.style.borderRadius = "5px 5px 0 0 ";

    if (textLines.length > 0) {
        textContainer = newHTMLElement('div');
        textContainer.style.padding = "2px 16px";
        var textChild;
        for (var i = 0; i < textLines.length; i++) {
            textChild = (i == 0) ? newHTMLElement('h5') : newHTMLElement('p');
            textChild.innerText = textLines[i];
            textContainer.appendChild(textChild);
        }
    }
    card.appendChild(image);
    if (textLines.length > 0 && textContainer != undefined) { card.appendChild(textContainer) };
    addStylesToCard(card);
    card.addEventListener("mouseenter", () => { card.style.boxShadow = " 5px 8px 16px 5px rgba(0, 0, 0, 0.2)" })
    card.addEventListener("mouseleave", () => { addStylesToCard(card); })
    return document.getElementById(parentElementId).appendChild(card);
}
function newHTMLElement(tagname) {
    return document.createElement(tagname);
}
function addClassName(element, atrClassName) {
    return element.className = atrClassName;
}
function addStylesToCard(cardElement) {
    cardElement.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
    cardElement.style.transition = "0.3s";
    cardElement.style.width = "fit-content";
    cardElement.style.borderRadius = "5px";
    cardElement.style.margin = "5px";
    cardElement.style.textAlign = "center";
}
