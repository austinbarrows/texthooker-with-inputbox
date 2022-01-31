function addLine() {
    const lineData = document.getElementById("line-input").value;
    const p = document.createElement("p");
    p.append(lineData);
    const pasteBox = document.getElementById('autopaste-box');
    pasteBox.append(p);
}


// Code to scroll down every time body is modified (i.e. when <p> elements are added)
const el = document.getElementById('autopaste-box');
const callback = function(mutationsList, observer) {
    window.scrollTo(0, document.body.scrollHeight);
};
const config = { attributes: true, childList: true, subtree: true };
const observer = new MutationObserver(callback);
observer.observe(el, config);