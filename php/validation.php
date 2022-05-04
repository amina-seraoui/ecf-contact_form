<?php

function verifyName ($name) {
    if (
        empty($name) ||
        !preg_match('/^[ \p{L}\'-]+$/', $name) ||
        preg_match('-[`~!@#$%^&*()_|\\\/+=?;:",.<>\{\}\[\]]-', $name)
    ) {
        return false;
    }

    return true;
}

function verifyMail ($mail) {
    if (empty($mail) || !preg_match('/^[^@ \t\r\n.][^@ \t\r\n]*[^@ \t\r\n.]@[^@ \t\r\n]+\.[^@ \t\r\n]+$/', $mail)) {
        return false;
    }

    return true;
}

function verifyMsg ($msg) {
    if (mb_strlen($msg) < 10) {
        return false;
    }

    return true;
}
