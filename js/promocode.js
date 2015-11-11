/**
 * Created by vvarbanov on 7.11.2015 г..
 */
'use strict';
var messages = document.getElementsByClassName('message');
function checkCode(code) {
    for (var i = 0; i < messages.length; i++) {
        var attr = messages[i].getAttribute('class');
        messages[i].setAttribute('class', attr + ' hide');
    }

    function verify() {
        return code === '0976524';
    }

    setTimeout(function(){
        alert(verify() ? "Поздравления! Получавате 10% отстъпка" : "Имате грешен код - опитайте отново.");
    }, 2000);

    verify() ? messages[0].setAttribute('class', 'message success') : messages[1].setAttribute('class', 'message error');
}

