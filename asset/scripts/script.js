'use strict';
// ----変数宣言コーナー----
const but1 = document.getElementById("but1");
const but2 = document.getElementById("but2");
const but3 = document.getElementById("but3");

const name_input = document.getElementById("name_input");
const name_button = document.getElementById("name_button");

// ----関数コーナー----
const display = () => {
    const text1 = document.getElementById("text1");
    text1.style.display = 'block';
}
const create_text = () => {
    const text2 = document.getElementById("text2");
    text2.innerHTML = "アンチパターン社です";
}

const create_element = () => {
    const text3 = document.createElement("p");
    text3.innerHTML = "NPO法人POSSEと混同しちゃいがちなので注意が必要です";

    const parent_element = document.getElementById("parent_element");
    parent_element.appendChild(text3);
}


const output = (e) => {
    //const name = e.value;
    //alert("ようこそ、" + name + "さん！"); 
    const name_output = document.getElementById("name_output");
    name_output.innerHTML = "こんにちは、" + e.value + "さん！";

    e.value = "";
}
// ----イベントコーナー----
but1.addEventListener('click',() => display());
but2.addEventListener('click',() => create_text());
but3.addEventListener('click',() => create_element());
name_button.addEventListener('click',() => output(name_input));