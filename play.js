const button1 = document.getElementById('p1');
const a1 = document.getElementById('audio1');
button1.addEventListener('click', play1);
let currentAudio = null;
let currentIcon = null;
function play1() {
    if (currentAudio === a1) {
        if (a1.paused || a1.currentTime <= 0) {
            a1.play();
            button1.classList.remove('fa-play');
            button1.classList.add('fa-pause');
        } else {
            a1.pause();
            button1.classList.remove('fa-pause');
            button1.classList.add('fa-play');
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentIcon.classList.remove('fa-pause');
            currentIcon.classList.add('fa-play');
        }
        a1.currentTime = 0;
        a1.play();
        button1.classList.remove('fa-play');
        button1.classList.add('fa-pause');
        currentAudio = a1;
        currentIcon = button1;
    }
}
const button2 = document.getElementById('p2');
const a2 = document.getElementById('audio2');
button2.addEventListener('click', play2);
function play2() {
    if (currentAudio === a2) {
        if (a2.paused || a2.currentTime <= 0) {
            a2.play();
            button2.classList.remove('fa-play');
            button2.classList.add('fa-pause');
        } else {
            a2.pause();
            button2.classList.remove('fa-pause');
            button2.classList.add('fa-play');
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentIcon.classList.remove('fa-pause');
            currentIcon.classList.add('fa-play');
        }
        a2.currentTime = 0;
        a2.play();
        button2.classList.remove('fa-play');
        button2.classList.add('fa-pause');
        currentAudio = a2;
        currentIcon = button2;
    }
}
const button3 = document.getElementById('p3');
const a3 = document.getElementById('audio3');
button3.addEventListener('click', play3);
function play3() {
    if (currentAudio === a3) {
        if (a3.paused || a3.currentTime <= 0) {
            a3.play();
            button3.classList.remove('fa-play');
            button3.classList.add('fa-pause');
        } else {
            a3.pause();
            button3.classList.remove('fa-pause');
            button3.classList.add('fa-play');
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentIcon.classList.remove('fa-pause');
            currentIcon.classList.add('fa-play');
        }
        a3.currentTime = 0;
        a3.play();
        button3.classList.remove('fa-play');
        button3.classList.add('fa-pause');
        currentAudio = a3;
        currentIcon = button3;
    }
}
const button4 = document.getElementById('p4');
const a4 = document.getElementById('audio4');
button4.addEventListener('click', play4);
function play4() {
    if (currentAudio === a4) {
        if (a4.paused || a4.currentTime <= 0) {
            a4.play();
            button4.classList.remove('fa-play');
            button4.classList.add('fa-pause');
        } else {
            a4.pause();
            button4.classList.remove('fa-pause');
            button4.classList.add('fa-play');
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentIcon.classList.remove('fa-pause');
            currentIcon.classList.add('fa-play');
        }
        a4.currentTime = 0;
        a4.play();
        button4.classList.remove('fa-play');
        button4.classList.add('fa-pause');
        currentAudio = a4;
        currentIcon = button4;
    }
}
const button5 = document.getElementById('p5');
const a5 = document.getElementById('audio5');
button5.addEventListener('click', play5);
function play5() {
    if (currentAudio === a5) {
        if (a5.paused || a5.currentTime <= 0) {
            a5.play();
            button5.classList.remove('fa-play');
            button5.classList.add('fa-pause');
        } else {
            a5.pause();
            button5.classList.remove('fa-pause');
            button5.classList.add('fa-play');
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentIcon.classList.remove('fa-pause');
            currentIcon.classList.add('fa-play');
        }
        a5.currentTime = 0;
        a5.play();
        button5.classList.remove('fa-play');
        button5.classList.add('fa-pause');
        currentAudio = a5;
        currentIcon = button5;
    }
}
const button6 = document.getElementById('p6');
const a6 = document.getElementById('audio6');
button6.addEventListener('click', play6);
function play6() {
    if (currentAudio === a6) {
        if (a6.paused || a6.currentTime <= 0) {
            a6.play();
            button6.classList.remove('fa-play');
            button6.classList.add('fa-pause');
        } else {
            a6.pause();
            button6.classList.remove('fa-pause');
            button6.classList.add('fa-play');
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentIcon.classList.remove('fa-pause');
            currentIcon.classList.add('fa-play');
        }
        a6.currentTime = 0;
        a6.play();
        button6.classList.remove('fa-play');
        button6.classList.add('fa-pause');
        currentAudio = a6;
        currentIcon = button6;
    }
}
const button7 = document.getElementById('p7');
const a7 = document.getElementById('audio7');
button7.addEventListener('click', play7);
function play7() {
    if (currentAudio === a7) {
        if (a7.paused || a7.currentTime <= 0) {
            a7.play();
            button7.classList.remove('fa-play');
            button7.classList.add('fa-pause');
        } else {
            a7.pause();
            button7.classList.remove('fa-pause');
            button7.classList.add('fa-play');
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentIcon.classList.remove('fa-pause');
            currentIcon.classList.add('fa-play');
        }
        a7.currentTime = 0;
        a7.play();
        button7.classList.remove('fa-play');
        button7.classList.add('fa-pause');
        currentAudio = a7;
        currentIcon = button7;
    }
}
const button8 = document.getElementById('p8');
const a8 = document.getElementById('audio8');
button8.addEventListener('click', play8);
function play8() {
    if (currentAudio === a8) {
        if (a8.paused || a8.currentTime <= 0) {
            a8.play();
            button8.classList.remove('fa-play');
            button8.classList.add('fa-pause');
        } else {
            a8.pause();
            button8.classList.remove('fa-pause');
            button8.classList.add('fa-play');
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentIcon.classList.remove('fa-pause');
            currentIcon.classList.add('fa-play');
        }
        a8.currentTime = 0;
        a8.play();
        button8.classList.remove('fa-play');
        button8.classList.add('fa-pause');
        currentAudio = a8;
        currentIcon = button8;
    }
}
const button9 = document.getElementById('p9');
const a9 = document.getElementById('audio9');
button9.addEventListener('click', play9);
function play9() {
    if (currentAudio === a9) {
        if (a9.paused || a9.currentTime <= 0) {
            a9.play();
            button9.classList.remove('fa-play');
            button9.classList.add('fa-pause');
        } else {
            a9.pause();
            button9.classList.remove('fa-pause');
            button9.classList.add('fa-play');
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentIcon.classList.remove('fa-pause');
            currentIcon.classList.add('fa-play');
        }
        a9.currentTime = 0;
        a9.play();
        button9.classList.remove('fa-play');
        button9.classList.add('fa-pause');
        currentAudio = a9;
        currentIcon = button9;
    }
}
const button10 = document.getElementById('p10');
const a10 = document.getElementById('audio10');
button10.addEventListener('click', play10);
function play10() {
    if (currentAudio === a10) {
        if (a10.paused || a10.currentTime <= 0) {
            a10.play();
            button10.classList.remove('fa-play');
            button10.classList.add('fa-pause');
        } else {
            a10.pause();
            button10.classList.remove('fa-pause');
            button10.classList.add('fa-play');
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentIcon.classList.remove('fa-pause');
            currentIcon.classList.add('fa-play');
        }
        a10.currentTime = 0;
        a10.play();
        button10.classList.remove('fa-play');
        button10.classList.add('fa-pause');
        currentAudio = a10;
        currentIcon = button10;
    }
}
const button11 = document.getElementById('p11');
const a11 = document.getElementById('audio11');
button11.addEventListener('click', play11);
function play11() {
    if (currentAudio === a11) {
        if (a11.paused || a11.currentTime <= 0) {
            a11.play();
            button11.classList.remove('fa-play');
            button11.classList.add('fa-pause');
        } else {
            a11.pause();
            button11.classList.remove('fa-pause');
            button11.classList.add('fa-play');
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentIcon.classList.remove('fa-pause');
            currentIcon.classList.add('fa-play');
        }
        a11.currentTime = 0;
        a11.play();
        button11.classList.remove('fa-play');
        button11.classList.add('fa-pause');
        currentAudio = a11;
        currentIcon = button11;
    }
}