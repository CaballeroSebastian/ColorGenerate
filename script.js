const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");
const colorDisplay = document.getElementById("colorDisplay");
const rgbValue = document.getElementById("rgbValue");
const copyButton = document.getElementById("copyButton");
const copiedText = document.getElementById("copiedText");


function updateColor(){
    const r = redRange.value;
    const g = greenRange.value;
    const b = blueRange.value;

    const rgbStr = `RGB(${r}, ${g}, ${b})`;
    colorDisplay.style.backgroundColor = rgbStr;
    rgbValue.textContent = rgbStr;
}

redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);

updateColor()

copyButton.addEventListener("click", () => {
    const rgbStr = rgbValue.textContent;
    navigator.clipboard.writeText(rgbStr)

    copiedText.innerHTML = "¡Color Copiado!"

    setTimeout(() => {
        copiedText.innerHTML = ""
    }, 2000)
    
})