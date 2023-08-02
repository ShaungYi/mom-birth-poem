


export function getTextWidth(text) {
    const tempEl = document.createElement("span");
    tempEl.style.fontSize = "1.2em";
    tempEl.style.fontFamily = "serif";
    tempEl.style.visibility = "hidden";
    tempEl.innerText = text;
    document.body.appendChild(tempEl);
    const width = tempEl.offsetWidth;
    document.body.removeChild(tempEl);
    return width;
}
