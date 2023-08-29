"use strict"
import { __SIRI__ } from "./artyom.js";

function ghs__(tag) {
    return document.querySelector(tag)
}

var siri = ghs__("#siri");
var user = ghs__("#user_");


window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList;
var grammar = "#JSGF V1.0;";
var speechGrammarList = new SpeechGrammarList();
speechGrammarList.addFromString(grammar, 1);
recognition.grammars = speechGrammarList;
recognition.interimResults = true;
recognition.lang = "en-US" || "en-UK" || "en-IN" || "en-BN" || "en-AU";
recognition.onresult = (event) => {
    let current = event.resultIndex;
    var result = event.results[current][0].transcript;
    var voice = result.toLowerCase();
    if (event.results[0].isFinal) {
        console.log(voice);
        __SIRI__.say(voice);
        user.textContent = voice;
    }
}

recognition.addEventListener("end", () => {
    recognition.start((e) => {
        console.log(e);
    });
});
recognition.start((e) => {
    console.log(e);
});

/*
    nterval(() => {
    __SIRI__.say("Hello World !");
}, 3000);

*/


