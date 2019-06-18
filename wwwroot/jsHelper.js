function alertInterop(text) {
    alert(text);
}

function focusInterop(id) {
    document.getElementById(id).focus();
    return true;
}

function preventScrolling(id) {
    const element = document.getElementById(id);

    window.addEventListener("keydown", function (e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
}

