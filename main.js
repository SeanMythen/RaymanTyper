let textBox = document.getElementById('textBox');
textBox.addEventListener('keydown', main);

let output = document.getElementById('output');

let color = document.getElementById('text');

let pink = document.getElementById('pink');
pink.addEventListener('click', pinkChange);

let red = document.getElementById('red');
red.addEventListener('click', redChange);

let orange = document.getElementById('orange');
orange.addEventListener('click', orangeChange);

let yellow = document.getElementById('yellow');
yellow.addEventListener('click', yellowChange);

let green = document.getElementById('green');
green.addEventListener('click', greenChange);

let blue = document.getElementById('blue');
blue.addEventListener('click', blueChange);


let musicToggle = document.getElementById('musicToggle')
let mainSong = document.getElementById('mainSong');
let mainSongIsPlaying = false;

let currentColor = 'pink';

function pinkChange() {
    color.style.filter = ('hue-rotate(0deg) brightness(100%)');
    output.style.filter = ('hue-rotate(0deg) brightness(100%)');

    let warningSign = document.querySelectorAll('#output > .warningSign');
    for (var i = 0; i < warningSign.length; i++) {
        warningSign[i].style.filter = ('hue-rotate(360deg) brightness(100%)');
    }

    currentColor = 'pink';
}
function redChange() {
    color.style.filter = ('hue-rotate(30deg) brightness(100%)');
    output.style.filter = ('hue-rotate(30deg) brightness(100%)');

    let warningSign = document.querySelectorAll('#output > .warningSign');
    for (var i = 0; i < warningSign.length; i++) {
        warningSign[i].style.filter = ('hue-rotate(330deg) brightness(100%)');
    }

    currentColor = 'red';
}
function orangeChange() {
    color.style.filter = ('hue-rotate(60deg) brightness(110%)');
    output.style.filter = ('hue-rotate(60deg) brightness(110%)');

    let warningSign = document.querySelectorAll('#output > .warningSign');
    for (var i = 0; i < warningSign.length; i++) {
        warningSign[i].style.filter = ('hue-rotate(300deg) brightness(90.9090909%)');
    }

    currentColor = 'orange';
}
function yellowChange() {
    color.style.filter = ('hue-rotate(85deg) brightness(130%)');
    output.style.filter = ('hue-rotate(85deg) brightness(130%)');

    let warningSign = document.querySelectorAll('#output > .warningSign');
    for (var i = 0; i < warningSign.length; i++) {
        warningSign[i].style.filter = ('hue-rotate(275deg) brightness(76.9230769%)');
    }

    currentColor = 'yellow';
}
function greenChange() {
    color.style.filter = ('hue-rotate(170deg) brightness(140%)');
    output.style.filter = ('hue-rotate(170deg) brightness(140%)');

    let warningSign = document.querySelectorAll('#output > .warningSign');
    for (var i = 0; i < warningSign.length; i++) {
        warningSign[i].style.filter = ('hue-rotate(190deg) brightness(71.4285714%)');
    }

    currentColor = 'green';
}
function blueChange() {
    color.style.filter = ('hue-rotate(270deg) brightness(120%)');
    output.style.filter = ('hue-rotate(270deg) brightness(120%)');

    let warningSign = document.querySelectorAll('#output > .warningSign');
    for (var i = 0; i < warningSign.length; i++) {
        warningSign[i].style.filter = ('hue-rotate(90deg) brightness(83.3333333%)');
    }

    currentColor = 'blue';
}



let left = document.getElementById('left');
left.addEventListener('click', leftAlign);

let center = document.getElementById('center');
center.addEventListener('click', centerAlign);

let keys = {
    KeyA: 'images/A.png',
    KeyB: 'images/B.png',
    KeyC: 'images/C.png',
    KeyD: 'images/D.png',
    KeyE: 'images/E.png',
    KeyF: 'images/F.png',
    KeyG: 'images/G.png',
    KeyH: 'images/H.png',
    KeyI: 'images/I.png',
    KeyJ: 'images/J.png',
    KeyK: 'images/K.png',
    KeyL: 'images/L.png',
    KeyM: 'images/M.png',
    KeyN: 'images/N.png',
    KeyO: 'images/O.png',
    KeyP: 'images/P.png',
    KeyQ: 'images/Q.png',
    KeyR: 'images/R.png',
    KeyS: 'images/S.png',
    KeyT: 'images/T.png',
    KeyU: 'images/U.png',
    KeyV: 'images/V.png',
    KeyW: 'images/W.png',
    KeyX: 'images/X.png',
    KeyY: 'images/Y.png',
    KeyZ: 'images/Z.png',
    Space: 'images/Space.png',
    Apostrophe: 'images/Apostrophe.png',
    Quote: 'images/Quote.png',
    Comma: 'images/Comma.png',
    "!": 'images/Exclamation_Mark.png',
    "?": 'images/Question_Mark.png',
    1: 'images/1.png',
    2: 'images/2.png',
    3: 'images/3.png',
    4: 'images/4.png',
    5: 'images/5.png',
    6: 'images/6.png',
    7: 'images/7.png',
    8: 'images/8.png',
    9: 'images/9.png',
    0: 'images/0.png',
    ".": 'images/Period.png',
    Enter: '<br>',
    ShiftLeft: '',
    ShiftRight: '',
    ControlLeft: '',
    ControlRight: '',
    Backspace: '',
    Delete: '',
    WindowsKey: '',
    Tab: '',
    NumLock: '',
    Arrow: '',
    CtrlA: '',
    Escape: '',
    Alt: '',
    Insert: '',
    Home: '',
    PageUp: '',
    PageDown: '',
    End: '',
    Pause: '',
    ';': 'images/Semicolon.png',
    ':': 'images/Colon.png',
    NA: 'images/Not_Available.png'
};

textBox.addEventListener('click', getSelText);

function getSelText() {
    selStart = textBox.selectionStart;
    selEnd = textBox.selectionEnd;
    console.log(selStart + ' ' + selEnd);
}

function main(e) {

    getSelText();

    console.log(e);
    let keyCode = e.code;
    let eventKey = e.key;

    if (eventKey == "Pause" || eventKey == "End" || eventKey == "PageDown" || eventKey == "PageUp" || eventKey == "Home" || eventKey == "Insert" || eventKey == "Alt" || eventKey == "Escape" || eventKey == "F1" || eventKey == "F2" || eventKey == "F3" || eventKey == "F4" || eventKey == "F5" || eventKey == "F6" || eventKey == "F7" || eventKey == "F8" || eventKey == "F9" || eventKey == "F10" || eventKey == "F11" || eventKey == "F12" || eventKey == "ScrollLock" || eventKey == "CapsLock" || eventKey == "ArrowRight" || eventKey == "ArrowLeft" || eventKey == "ArrowUp" || eventKey == "ArrowDown" || eventKey == "NumLock" || eventKey == "Tab" || eventKey == "Meta" || eventKey == ":" || eventKey == ";" || keyCode == "ControlLeft" || keyCode == "ControlRight" || keyCode == "Delete" || keyCode == "Comma" || eventKey == "'" || eventKey == '"' || keyCode == "Space" || keyCode == "ShiftLeft" || keyCode == "ShiftRight" || eventKey == "Enter" || eventKey == "." || eventKey == "!" || eventKey == "?" || keyCode == "Backspace" || keyCode == "KeyA" || keyCode == "KeyB" || keyCode == "KeyC" || keyCode == "KeyD" || keyCode == "KeyE" || keyCode == "KeyF" || keyCode == "KeyG" || keyCode == "KeyH" || keyCode == "KeyI" || keyCode == "KeyJ" || keyCode == "KeyK" || keyCode == "KeyL" || keyCode == "KeyM" || keyCode == "KeyN" || keyCode == "KeyO" || keyCode == "KeyP" || keyCode == "KeyQ" || keyCode == "KeyR" || keyCode == "KeyS" || keyCode == "KeyT" || keyCode == "KeyU" || keyCode == "KeyV" || keyCode == "KeyW" || keyCode == "KeyX" || keyCode == "KeyY" || keyCode == "KeyZ" || eventKey == "1" || eventKey == "2" || eventKey == "3" || eventKey == "4" || eventKey == "5" || eventKey == "6" || eventKey == "7" || eventKey == "8" || eventKey == "9" || eventKey == "0" || keyCode == "Numpad1" || keyCode == "Numpad2" || keyCode == "Numpad3" || keyCode == "Numpad4" || keyCode == "Numpad5" || keyCode == "Numpad6" || keyCode == "Numpad7" || keyCode == "Numpad8" || keyCode == "Numpad9" || keyCode == "Numpad0" || keyCode == "NumpadDecimal") {

        if (keyCode == "Backspace") {
            if (selStart == selEnd && output.firstChild && selStart != 0 && selEnd != 0) {
                output.removeChild(output.children[selStart - 1]);
            }
            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
            }
        }

        else if (keyCode == "Delete") {
            if (selStart == selEnd && output.childElementCount > selEnd) {
                output.removeChild(output.children[selStart]);
                console.log('hi');
            }
            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                console.log('yo');
            }
        }








        else if (eventKey == "ArrowRight" || eventKey == "ArrowLeft" || eventKey == "ArrowUp" || eventKey == "ArrowDown") {

        }

        else if (eventKey == "'") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["Apostrophe"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }


        }

        else if (eventKey == "CapsLock" || eventKey == "ScrollLock" || eventKey == "F1" || eventKey == "F2" || eventKey == "F3" || eventKey == "F4" || eventKey == "F5" || eventKey == "F6" || eventKey == "F7" || eventKey == "F8" || eventKey == "F9" || eventKey == "F10" || eventKey == "F11" || eventKey == "F12") {
            output.innerHTML = output.innerHTML;
        }

        else if (eventKey == '"') {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["Quote"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }

        }

        else if (eventKey == "Tab") {
            output.innerHTML = output.innerHTML + keys["Tab"];
        }

        else if (keyCode == "ShiftLeft" || keyCode == "ShiftRight" || eventKey == "Pause" || eventKey == "NumLock" || eventKey == "Alt" || eventKey == "Escape" || eventKey == "End" || eventKey == "PageDown" || eventKey == "PageUp" || eventKey == "Home" || eventKey == "Insert") {
            output.innerHTML = output.innerHTML + keys["NumLock"];
        }

        else if (eventKey == "Meta") {
            output.innerHTML = output.innerHTML + keys["WindowsKey"];
        }

        else if (eventKey == ";") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys[";"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }

        }

        else if (eventKey == ":") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys[":"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }

        }

        else if (eventKey == "?") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["?"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }
        }

        else if (eventKey == "!") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["!"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }
        }

        else if (eventKey == "1" || keyCode == "Numpad1") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["1"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }
        }

        else if (eventKey == "2" || keyCode == "Numpad2") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["2"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }
        }

        else if (eventKey == "3" || keyCode == "Numpad3") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["3"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }
        }

        else if (eventKey == "4" || keyCode == "Numpad4") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["4"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }
        }

        else if (eventKey == "5" || keyCode == "Numpad5") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["5"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }
        }

        else if (eventKey == "6" || keyCode == "Numpad6") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["6"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }
        }

        else if (eventKey == "7" || keyCode == "Numpad7") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["7"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }
        }

        else if (eventKey == "8" || keyCode == "Numpad8") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["8"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }
        }

        else if (eventKey == "9" || keyCode == "Numpad9") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["9"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }
        }

        else if (eventKey == "0" || keyCode == "Numpad0") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["0"]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }
        }


        else if (eventKey == "." || keyCode == "NumpadDecimal") {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys["."]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }
        }

        else if (eventKey == "Enter") {

            if (selStart == selEnd) {
                output.innerHTML = output.innerHTML + keys["Enter"];
            }


            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.innerHTML = output.innerHTML + keys["Enter"];
            }
        }

        else if (e.ctrlKey && keyCode) {
            output.innerHTML = output.innerHTML
        }

        else {
            let img = document.createElement("img");
            let imgSrc = img.src = (keys[keyCode]);

            if (selStart == selEnd) {
                output.insertBefore(img, output.children[selStart]);
            }

            else if (selStart < selEnd) {
                let beginning = selStart;
                let end = selEnd;
                while (beginning < end) {
                    beginning++;
                    output.removeChild(output.children[selStart]);
                }
                output.insertBefore(img, output.children[selStart]);
            }

        }
    }




    else {
        let img = document.createElement("img");
        let imgSrc = img.src = (keys["NA"]);
        img.classList.add("warningSign")


        if (selStart == selEnd) {
            output.insertBefore(img, output.children[selStart]);
        }

        else if (selStart < selEnd) {
            let beginning = selStart;
            let end = selEnd;
            while (beginning < end) {
                beginning++;
                output.removeChild(output.children[selStart]);
            }
            output.insertBefore(img, output.children[selStart]);
        }

        if (currentColor == 'pink') {
            let warningSign = document.querySelectorAll('#output > .warningSign');
            for (var i = 0; i < warningSign.length; i++) {
                warningSign[i].style.filter = ('hue-rotate(360deg) brightness(100%)');
            }
        }
        else if (currentColor == 'red') {
            let warningSign = document.querySelectorAll('#output > .warningSign');
            for (var i = 0; i < warningSign.length; i++) {
                warningSign[i].style.filter = ('hue-rotate(330deg) brightness(100%)');
            }
        }
        else if (currentColor == 'orange') {
            let warningSign = document.querySelectorAll('#output > .warningSign');
            for (var i = 0; i < warningSign.length; i++) {
                warningSign[i].style.filter = ('hue-rotate(300deg) brightness(90.9090909%)');
            }
        }
        else if (currentColor == 'yellow') {
            let warningSign = document.querySelectorAll('#output > .warningSign');
            for (var i = 0; i < warningSign.length; i++) {
                warningSign[i].style.filter = ('hue-rotate(275deg) brightness(76.9230769%)');
            }
        }
        else if (currentColor == 'green') {
            let warningSign = document.querySelectorAll('#output > .warningSign');
            for (var i = 0; i < warningSign.length; i++) {
                warningSign[i].style.filter = ('hue-rotate(190deg) brightness(71.4285714%)');
            }
        }
        else if (currentColor == 'blue') {
            let warningSign = document.querySelectorAll('#output > .warningSign');
            for (var i = 0; i < warningSign.length; i++) {
                warningSign[i].style.filter = ('hue-rotate(90deg) brightness(83.3333333%)');
            }
        }
    }

    getSelText();
    showBackground();

}

function leftAlign() {
    textBox.style.textAlign = ('left');
    output.style.textAlign = ('left');
    left.style.filter = ('hue-rotate(170deg) brightness(140%)');
    center.style.filter = ('hue-rotate(0deg) brightness(110%)');
}

function centerAlign() {
    textBox.style.textAlign = ('center');
    output.style.textAlign = ('center');
    center.style.filter = ('hue-rotate(170deg) brightness(140%)');
    left.style.filter = ('hue-rotate(0deg) brightness(110%)');
}


textBox.addEventListener('keydown', function (e) {
    if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40)
        e.preventDefault();
})

musicToggle.addEventListener('click', PlayOrPause);

function PlayOrPause() {
    if (mainSongIsPlaying) {
        musicToggle.setAttribute('src', 'images/Bad_Note_Purple.png');
        mainSong.pause()
    } else {
        musicToggle.setAttribute('src', 'images/Bad_Note.png');
        mainSong.play();
    }
}

mainSong.onpause = function () {
    mainSongIsPlaying = false;
}

mainSong.onplaying = function () {
    mainSongIsPlaying = true;
}


let background = document.getElementById('background');



function showBackground() {
    if (output.firstChild) {
        background.style.visibility = ('visible');
        background.style.opacity = ('1');
    }
    else {
        background.style.visibility = ('hidden');
        background.style.opacity = ('0');
    }
}

let white = document.getElementById('white');
white.addEventListener('click', whiteChange);

let black = document.getElementById('black');
black.addEventListener('click', blackChange);


function whiteChange() {
    output.style.backgroundColor = ('white');
}

function blackChange() {
    output.style.backgroundColor = ('black');
}

let infoToggle = document.getElementById('infoToggle');
let infoContainer = document.getElementById('infoContainer');

let faq = document.getElementById('FAQ');

faq.addEventListener('click', toggleInfo);
infoToggle.addEventListener('click', toggleInfo);

function toggleInfo() {
    if (window.getComputedStyle(infoContainer).visibility === ('visible')) {
        infoContainer.style.opacity = ('0');
        infoContainer.style.visibility = ('hidden');

        console.log('bye');
    }
    else if (window.getComputedStyle(infoContainer).visibility === ('hidden')) {
        infoContainer.style.visibility = ('visible');
        infoContainer.style.opacity = ('1');
        console.log('hello');
    }


}


let mobile = document.getElementById('mobileMessage');
let raymanLogo = document.getElementById('title1');
let typerLogo = document.getElementById('title2');
let alignment = document.getElementById('alignment');
let container = document.getElementById('container');

let body = document.getElementById('body');

let html = document.getElementById('html');


if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i))
 {

mobile.style.display = ('flex');
musicToggle.style.display = ('none');
faq.style.display = ('none');
infoContainer.style.display = ('none');
infoToggle.style.display = ('none');
raymanLogo.style.display = ('none');
typerLogo.style.display = ('none');
textBox.style.display = ('none');
color.style.display = ('none');
alignment.style.display = ('none');
container.style.display = ('none');
musicToggle.style.display = ('none');


html.style.maxWidth = ('100vw');
html.style.maxHeight = ('100vw');
html.style.minWidth = ('100vw');
html.style.minHeight = ('100vh');



 }

 window.onload = function(){
     body.classList.remove('preload')
 };