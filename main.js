const el = document.getElementById('autopaste-box');


const callback = function(mutationsList, observer) {
    console.log('working');
    window.scrollTo(0, document.body.scrollHeight);
};
const config = { attributes: true, childList: true, subtree: true };
const observer = new MutationObserver(callback);
observer.observe(el, config);