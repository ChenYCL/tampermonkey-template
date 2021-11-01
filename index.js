// ==UserScript==
// @name         auto click
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *
// @icon         https://www.google.com/s2/favicons?domain=*
// @grant        none
// ==/UserScript==


// You need modify @match url 

const delay = ms => new Promise(res => setTimeout(res, ms));

function fakeSetInterval(fn, timeout) {
    var timer = { flag: true };
    function interval() {
        if (timer.flag) {
            fn();
            setTimeout(interval, timeout);
        }
    }
    setTimeout(interval, timeout);
    return timer;
}

async function start() {
    
    // write your code here


    // 30s re-run your code 
    fakeSetInterval(start, 30000)

}







(async function () {
    'use strict';
    // per 1h will reload current page
    setTimeout(function () {
        window.location.reload()
    }, 5000 * 12 * 60)
})();