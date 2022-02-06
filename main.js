function addLine() {
    const lineData = document.getElementById("line-input").value;
    const p = document.createElement("p");
    p.append(lineData);
    const pasteBox = document.getElementById('autopaste-box');
    pasteBox.append(p);
}

// Make width of autopaste box width of window excluding the scrollbar
function setPasteboxWidth() {
    const pasteBox = document.getElementById('autopaste-box');
    pasteBox.style.width = `${document.body.clientWidth - 10}px`;
}

window.onfocus = function () { 
    document.getElementById("line-input").focus();
}; 

// Code to scroll down every time body is modified (i.e. when <p> elements are added)
const el = document.getElementById('autopaste-box');
const callback = function(mutationsList, observer) {
    window.scrollTo(0, document.body.scrollHeight);
};
const config = { attributes: true, childList: true, subtree: true };
const observer = new MutationObserver(callback);
observer.observe(el, config);

// Set pastebox width at the start and then only when the window is resized
setPasteboxWidth();
window.onresize = function () {
    setPasteboxWidth();
}