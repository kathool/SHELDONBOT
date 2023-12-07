// ==UserScript==
// @name         tqrtle.exe - katfork
// @version      2.2
// @namespace    https://discord.gg/nA4SDMEAZ4
// @description  Free auto answer, library made by Edgesploit, edgentweaks menu made by De-y & grayden implimented by tqrtle & kathool (EDGENUITY CHEATS 4 ALL! FREEWARE!)
// @author       tqrtle & de-y & grayden
// @match        *://*.core.learn.edgenuity.com/*
// @match        https://student.edgenuity.com/*
// @updateURL  https://raw.githubusercontent.com/De-y/edgentweaks/main/edgentweaks.js
// @downloadURL  hthttps://raw.githubusercontent.com/De-y/edgentweaks/main/edgentweaks.js
// @grant        none
// @icon         https://cdn.discordapp.com/attachments/1122394283157229689/1181354316515258459/image.png
// ==/UserScript==

// - - - v SETTINGS v - - - //
const minDelay = 150000; // Minimum delay in milliseconds before auto-submitting
const maxDelay = 330000; // Maximum delay in milliseconds before auto-submitting
const answerURL = 'https://raw.githubusercontent.com/turtlecod/ids/main/4'; // URL to fetch the answer IDs from
const autoSubmit = true; // Set to true to enable auto-submitting
const autoStartQuiz = true; // Set to true to automatically start the quiz
// - - - ^ SETTINGS ^ - - - //

function clickAnswerChoice(e){let t=document.querySelector(`label[for="${e}"]`);t&&t.click()}function detectAndClickAnswer(){let e=document.querySelectorAll(".answer-choice-label[for]");fetch(answerURL).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.text()}).then(t=>{let c=[];e.forEach(e=>{let l=e.getAttribute("for").trim();t.includes(l)&&c.push(e)}),c.forEach(e=>{e.click()})}).catch(e=>{})}detectAndClickAnswer();const observer=new MutationObserver(e=>{for(let t of e)if("childList"===t.type){detectAndClickAnswer();break}});observer.observe(document.body,{childList:!0,subtree:!0}),function(){"use strict";var e=0,t=document.querySelectorAll('li[buttonindex="'+e+'"]'),c=!1;(function l(){if(c){let r=Array.from(t);r.forEach(e=>{e.click()}),e++,t=document.querySelectorAll('li[buttonindex="'+e+'"]'),c=!1,t.length>0&&setTimeout(l,2e3)}else setTimeout(l,100)})(),document.addEventListener("click",function(e){let t=e.target;t.matches(".answer-choice-label")&&(c=!0)}),autoSubmit&&function e(){let t=document.querySelector("#submit"),c=document.querySelector(".submit");if(t&&c){var l,r;setTimeout(function(){t.click(),c.click()},(l=minDelay,Math.floor(Math.random()*((r=maxDelay)-l+1))+l))}else setTimeout(e,100)}(),autoStartQuiz&&function e(){let t=document.querySelector(".overlay-attempt.overlay-attempt-clickable"),c=document.querySelector("#activity-status"),l=c?c.textContent.trim():"";t&&"Complete"!==l&&setTimeout(function(){t.click()},1500)}()}();

const version_num = '1.5.6'
var $, jQuery;
$ = jQuery = window.jQuery;

setTimeout( //2 sec delay to load before trying to run
    function main() {
        console.log("Welcome to EdgenTweaks. You currently have version " + version_num + ".")
        // Assignment Unlocker //
        var _0x788e=['href','98EZTFoN','1078293EqEPrr','substr','1685964VXeNlO','location','length','1jIzMrt','charAt','508661iODNEB','586hAwzQN','2983nUIiZh','log','substring','enrollment','getElementsByClassName','.core.learn.edgenuity.com/lmsapi/sle/api/enrollments/','14371Rbtenu','classList','onclick','ActivityTile-status-gated','split','setAttribute','contains','document.location=\x27','cookie','course-timeline','856299FQrWQR','indexOf','addedNodes','2996429VHlchH','is\x20timeline','//r','found\x20locked\x20button','/activity/','use\x20strict','Realm','https://student.edgenuity.com/enrollment/','parse','1XolTPP'];var _0x4a8c=function(_0x23f79d,_0x2149c1){_0x23f79d=_0x23f79d-0x143;var _0x788ebb=_0x788e[_0x23f79d];return _0x788ebb;};var _0x385481=_0x4a8c;(function(_0x44c24a,_0x2e0f51){var _0x55724c=_0x4a8c;while(!![]){try{var _0x3570c1=parseInt(_0x55724c(0x15a))*parseInt(_0x55724c(0x159))+parseInt(_0x55724c(0x156))*parseInt(_0x55724c(0x151))+-parseInt(_0x55724c(0x153))+-parseInt(_0x55724c(0x158))*-parseInt(_0x55724c(0x14e))+-parseInt(_0x55724c(0x150))*-parseInt(_0x55724c(0x160))+parseInt(_0x55724c(0x16a))+-parseInt(_0x55724c(0x145));if(_0x3570c1===_0x2e0f51)break;else _0x44c24a['push'](_0x44c24a['shift']());}catch(_0x561c2c){_0x44c24a['push'](_0x44c24a['shift']());}}}(_0x788e,0xdff08));var url,observerTimeout;_0x385481(0x14a);function readCookie(_0x578df2){var _0x1a5d0c=_0x385481,_0x3ab018=_0x578df2+'=',_0x4c88f8=document[_0x1a5d0c(0x168)][_0x1a5d0c(0x164)](';');for(var _0x3eb38f=0x0;_0x3eb38f<_0x4c88f8['length'];_0x3eb38f++){var _0x27bb4c=_0x4c88f8[_0x3eb38f];while(_0x27bb4c[_0x1a5d0c(0x157)](0x0)=='\x20')_0x27bb4c=_0x27bb4c[_0x1a5d0c(0x15c)](0x1,_0x27bb4c['length']);if(_0x27bb4c[_0x1a5d0c(0x143)](_0x3ab018)==0x0)return _0x27bb4c[_0x1a5d0c(0x15c)](_0x3ab018[_0x1a5d0c(0x155)],_0x27bb4c[_0x1a5d0c(0x155)]);}return null;}function checkURL(){var _0x1b5af0=_0x385481;url!=document[_0x1b5af0(0x154)][_0x1b5af0(0x14f)]&&(url=document[_0x1b5af0(0x154)][_0x1b5af0(0x14f)],clearTimeout(observerTimeout),console[_0x1b5af0(0x15b)]('url\x20changed'),url[_0x1b5af0(0x143)](_0x1b5af0(0x14c))!=-0x1&&(console[_0x1b5af0(0x15b)](_0x1b5af0(0x146)),tryToStartObserver()));}function tryToStartObserver(){var _0x2c41ac=_0x385481;if(document[_0x2c41ac(0x15e)](_0x2c41ac(0x169))['length']==0x0){setTimeout(tryToStartObserver,0x64),console[_0x2c41ac(0x15b)]('cant\x20find\x20timeline.\x20waiting');return;}var _0x323380=JSON[_0x2c41ac(0x14d)](readCookie('TokenData'))[_0x2c41ac(0x14b)]['toString'](),_0x4a5b7c=document['location'][_0x2c41ac(0x14f)],_0x24bed0=_0x4a5b7c[_0x2c41ac(0x143)](_0x2c41ac(0x15d))+0xb,_0x1097f7=_0x4a5b7c[_0x2c41ac(0x152)](_0x24bed0,0x24),_0x181334=_0x2c41ac(0x147)+(_0x323380[_0x2c41ac(0x155)]==0x1?'0':'')+_0x323380+_0x2c41ac(0x15f)+_0x1097f7+_0x2c41ac(0x149),_0x49355a=null;for(var _0x46c506 of document[_0x2c41ac(0x15e)](_0x2c41ac(0x163))){_0x46c506[_0x2c41ac(0x165)](_0x2c41ac(0x162),'document.location=\x27'+_0x181334+_0x46c506['id']+'\x27');}function _0x316519(_0x28f2db,_0x39380a){var _0x44da85=_0x2c41ac;for(const _0x50941a of _0x28f2db){for(var _0x4fba28 of _0x50941a[_0x44da85(0x144)]){(_0x4fba28[_0x44da85(0x161)][_0x44da85(0x166)](_0x44da85(0x163))||_0x4fba28[_0x44da85(0x161)][_0x44da85(0x166)]('ActivityTile-status-locked'))&&(console['log'](_0x44da85(0x148)),_0x49355a=_0x4fba28,_0x4fba28[_0x44da85(0x165)]('onclick',_0x44da85(0x167)+_0x181334+_0x4fba28['id']+'\x27'));}}}var _0x7a660e=new MutationObserver(_0x316519);_0x7a660e['observe'](document['getElementsByClassName'](_0x2c41ac(0x169))[0x0],{'attributes':![],'childList':!![],'subtree':!![]});}url=document['location'][_0x385481(0x14f)],setInterval(checkURL,0x64);url[_0x385481(0x143)](_0x385481(0x14c))!=-0x1&&tryToStartObserver();
        function init() {

            window.openedWindows = [];
            window.configElements = []; //Config infomation
            try {
                $(".mainfoot")[0].append(null);
            } //stupid hack to prevent it building twice
            catch {
                console.log('%cIGNORE THE ERROR BELOW ME!', 'color: green; font-weight: bold;');
           $(".mainfoot")[0].append(null);

        }

        //Internal Functions
        function buildMenuButton(text, id, event, overrideid) { //puts buttons in the menu
            var x, y;
            y = document.createElement("li")
            y.id = id
            y.append(x = document.createElement("button"))
            x.style = "display:block; padding: 0; border: 2px; background: none; height:45px; width:54px; background-color: rgb(51, 51, 51); color: rgb(249, 166, 25); opacity: 1;"
            x.innerText = text
            x.addEventListener("click", event);
            if (!overrideid) {
                $(".toolbar")[0].append(y);
            } else $("#" + overrideid).append(y);
        }

        function RenderPane(name, id, width, height, transform) { //renders panes
            window.pane = document.createElement("div")
            window.pane.style = "padding:5px; z-index:1; overflow:auto; visibility: hidden; position: fixed; border: 1px solid rgb(95, 95, 95); background-color: rgb(39, 39, 39); color: rgb(249, 166, 25); text-align: center; top:50%;left:50%; transform: translate(-50%, -50%)"
            window.pane.style.width = width
            window.pane.style.height = "auto"
            window.pane.style.maxHeight = height;
            window.pane.id = id;
            window.pane.classList.add("tweakpane")
            x = document.createElement("header")
            x.style = ""
            var button = document.createElement("img");
            button.src = "https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_1280.png";
            button.style = "filter: sepia(1);;position:sticky;opacity:60%;text-align:left;left:0;top:0;height:15px;width:15px";
            button.align = "left"
            button.onclick = function() {
                $("#" + id).css("visibility", "hidden") //find my pane and close
                $("#" + id + "~ div[id]").css("visibility", "hidden")
            }; //find panes after me and close
            x.appendChild(button);
            var z = document.createElement("label")
            z.style = " float: right;"
            z.innerText = "info"
            var y = document.createElement("input")
            y.type = "checkbox";
            y.checked = "true";
            y.style = "margin: 3px; float: right";
            y.addEventListener("click", function() {
                $("#" + id + " p").fadeToggle()
                // $("#" +id).css("height", "auto")
            })
            x.appendChild(y)
            x.appendChild(z);
            window.panetitle = document.createElement("h1")
            window.panetitle.innerText = "     " + name //shitty centering fix
            x.appendChild(window.panetitle)
            window.pane.appendChild(x);
            $("#overlay").append(window.pane)
        }

        function BuildMenuEntry(name, info, id, configpane, override, element) { //Creates tickbox element with info and optional (new) config pane (see guesspractice). in a pane
            //Override 1 append to tweak menu
            //Override 2 no text no check just button and append
            //Override 3 no button
            window.entry = document.createElement("div")
            window.entry.margin = "5px"
            window.tickbox = document.createElement("input")
            window.tickbox.type = "checkbox"
            window.tickbox.id = id
            window.configElements.push(id)
            window.entry.appendChild(window.tickbox)
            window.label = document.createElement("label");
            window.label.innerText = " " + name //spacing fix
            window.entry.appendChild(window.label)
            if (configpane != undefined) { //If any configpane was passed through try and create a button to open it.
                window.configbutton = document.createElement("button")
                window.configbutton.innerText = "Configure"
                window.configbutton.style.marginLeft = "7px"
                window.configbutton.style.border = "1px solid #5f5f5f"
                window.configbutton.style.boxShadow = "inset 0 0 5px rgba(0, 0, 0, 0.6)"
                window.configbutton.style.backgroundColor = "rgb(39, 39, 39)"
                window.configbutton.style.color = "#f9a619"
                window.configbutton.style.borderRadius = "3px"
                window.configbutton.onclick = function() {
                    if (document.getElementById(configpane).style.visibility == "hidden") { //visiblitly handler for configpane button
                        document.getElementById(configpane).style.visibility = "visible"
                    } else {
                        document.getElementById(configpane).style.visibility = "hidden"
                    }
                }
                window.entry.appendChild(window.configbutton)
            }
            if (element != null) {
                window.entry.appendChild(element);
            }
            if (info != "") {
                window.desc = document.createElement("p")
                window.desc.innerHTML = info;
                window.desc.style = "position: abosolute;";
                window.entry.appendChild(window.desc)
            }
            if (override == 1) { //override
                $("#tweaksmenu").append(window.entry);
            }
            else return window.entry;
        }

        function dragElement(elmnt) {
            //drag elemments
            //https://www.w3schools.com/howto/howto_js_draggable.asp
            var pos1 = 0,
                pos2 = 0,
                pos3 = 0,
                pos4 = 0;

            elmnt.onmousedown = dragMouseDown;


            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmouseleave = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }

        function shortcut(shortcut, callback, opt) {
            /*
* http://www.openjs.com/scripts/events/keyboard_shortcuts/
* Version : 1.00.A
* By Binny V A
* License : BSD
*/
            var code; //needed to be declared
            //Provide a set of default options
            var default_options = {
                'type': 'keydown',
                'propagate': false,
                'target': document
            }
            if (!opt) opt = default_options;
            else {
                for (var dfo in default_options) {
                    if (typeof opt[dfo] == 'undefined') opt[dfo] = default_options[dfo];
                }
            }
            var ele = opt.target
            if (typeof opt.target == 'string') ele = document.getElementById(opt.target);
            var ths = this;
            //The function to be called at keypress
            var func = function(e) {
                e = e || window.event;
                //Find Which key is pressed
                if (e.keyCode) code = e.keyCode;
                else if (e.which) code = e.which;
                var character = String.fromCharCode(code).toLowerCase();
                var keys = shortcut.toLowerCase().split("+");
                //Key Pressed - counts the number of valid keypresses - if it is same as the number of keys, the shortcut function is invoked
                var kp = 0;
                var k;
                for (var i = 0; k = keys[i], i < keys.length; i++) {
                    //Modifiers
                    if (k == 'ctrl' || k == 'control') {
                        if (e.ctrlKey) kp++;
                    } else if (k == 'shift') {
                        if (e.shiftKey) kp++;
                    } else { //The special keys did not match
                        if (character == k) kp++;
                    }
                }
                if (kp == keys.length) {
                    callback(e);
                    if (!opt['propagate']) { //Stop the event
                        //e.cancelBubble is supported by IE - this will kill the bubbling process.
                        e.cancelBubble = true;
                        e.returnValue = false;
                        //e.stopPropagation works only in Firefox.
                        if (e.stopPropagation) {
                            e.stopPropagation();
                            e.preventDefault();
                        }
                        return false;
                    }
                }
            }
            //Attach the function with the event
            if (ele.addEventListener) ele.addEventListener(opt['type'], func, false);
            else if (ele.attachEvent) ele.attachEvent('on' + opt['type'], func);
            else ele['on' + opt['type']] = func;
        }
        shortcut("Ctrl+Shift+P", function(){$("#stageFrame").contents().find(".FrameRight").click()});
        shortcut("Ctrl+Shift+O", function(){$("#stageFrame").contents().find(".FrameLeft").click()});
        shortcut("Ctrl+Shift+H", function() {
            $("#HideButton").click();
            $("#userconsole").prepend("<code>stealth mode hotkey pressed "+ $("#HideButton").is(":checked"));
        })
        shortcut("Ctrl+Shift+G", function() {
            $("#GuessPractice").click();
            $("#userconsole").prepend("<code>Guess hotkey pressed "+ $("#GuessPractice").is(":checked"));
        })
        shortcut("Ctrl+Shift+A", function() {
            $("#AutoAdvance").click();
            $("#userconsole").prepend("<code>Autoadvance hotkey pressed "+ $("#AutoAdvance").is(":checked"));
        })
        shortcut("Ctrl+Shift+S", function() {
            $("#googlebutton > button").click();
            $("#userconsole").prepend("<code>Search hotkey pressed ");
        })
        shortcut("Ctrl+Shift+V", function() {
            $("#AutoCompleteVocabTickbox").click();
            $("#userconsole").prepend("<code>AutoVocab hotkey pressed "+ $("#AutoCompleteVocabTickbox").is(":checked"));
        })
        shortcut("Ctrl+Shift+E", function() {
            $("#ShowColumn").click();
            $("#userconsole").prepend("<code>Example response hotkey pressed "+ $("#ShowColumn").is(":checked"));
        })
        shortcut("Ctrl+Shift+M", function() {
            $("#SkipIntro").click();
            $("#userconsole").prepend("<code>Skip Intro hotkey pressed " + $("#SkipIntro").is(":checked"));
        })


        //!!!!!!!!!!!!!!!!!!START REAL UI BUILDING !!!!!!!!!!!!!!!!!!

        //Create base overlay
        window.overlay = document.createElement("div")
        window.overlay.style = "z-index:1;"
        window.overlay.id = "overlay"
        document.body.prepend(window.overlay)

        //menu buttons
        buildMenuButton("Tweaks Menu", "tweaksbutton", function() {
            if (document.getElementById("tweaksmenu").style.visibility == "hidden") {
                document.getElementById("tweaksmenu").style.visibility = "visible"
            } else {
                document.getElementById("tweaksmenu").style.visibility = "hidden"
            }
        })
        buildMenuButton("Search Selection", "googlebutton", function search() {
      var result = window.getSelection().toString();
            window.openedWindows.forEach(function(window) {
                    if (window != null) {
                        window.close();
                    }
                    window = null;
                })
            if ($("#stageFrame")[0].contentWindow.document.getSelection().toString() != "") {
                result = $("#stageFrame")[0].contentWindow.document.getSelection().toString()
            } else if ($("#stageFrame").contents().find("iframe")[0].contentWindow.document.getSelection().toString() != "") {
                 result = $("#stageFrame").contents().find("iframe")[0].contentWindow.document.getSelection().toString()

            }
            //console.log(result);

            if (result != "") {
                $("#userconsole").prepend("<code>Searching your selection ");
                if ($("#googlesearch").is(":checked")) window.openedWindows[0] = window.open("https://www.google.com/search?q=" + result);
                if ($("#brainlysearch").is(":checked")) window.openedWindows[1] = window.open("https://brainly.com/app/ask?q=" + result);
                if ($("#wolframsearch").is(":checked")) window.openedWindows[2] = window.open("https://www.wolframalpha.com/input/?i=" + result);
                if ($("#customsearch").is(":checked")) window.openedWindows[3] = window.open("https://google.com/search?q=site:" + $("#css").val() + " " + result, )
                localStorage.setItem("csskey", $("#css").val())
            } else $("#userconsole").prepend("<code>There's nothing selected! ");



})
        buildMenuButton("Open ChatGPT", "chatgptbutton", function chatgpt() {


/* create the iframe
const iframe = document.createElement('iframe');
iframe.src = 'https://google.aviance.app/';
iframe.style.width = '40%';
iframe.style.height = '50%';
iframe.style.position = 'absolute';
iframe.style.left = 0;
iframe.style.top = 0;
iframe.style.right = 0;
iframe.style.bottom = 0;
iframe.style.margin = 'auto';
document.body.appendChild(iframe);
//Create the button
let btn = document.createElement("button");
btn.innerText = "Close Search";
//Append the button to the body
document.body.appendChild(btn);
//Add click event listener to the button
btn.addEventListener("click", function() {
  iframe.style.display = "none";
  btn.parentNode.removeChild(btn);
});*/
            window.open(
            "https://chat.openai.com", "_blank");
})
        buildMenuButton("Search Config", "scbutton", function() {
            if (document.getElementById("searchconfig").style.visibility == "hidden") { //visiblitly handler for configpane button
                document.getElementById("searchconfig").style.visibility = "visible"
            } else {
                document.getElementById("searchconfig").style.visibility = "hidden"
            }
        }, "googlebutton")
            $("#googlebutton").on("mouseenter", function() {
                $("#scbutton").fadeIn()
            }) //Hide / Show search config
            $("#googlebutton").on('mouseleave', function() {
                $("#scbutton").fadeOut()
        })
            $("#scbutton").hide()
        buildMenuButton("Guess this", "guessbutton", function() {
try {
                $("iframe#stageFrame").contents().find("form").find(".answer-choice-button")[Math.floor(Math.random() * Math.floor(4))].click()
}catch{}
    try {

                $("#stageFrame").contents().find("iframe").contents().find("input")[Math.floor(Math.random() * Math.floor(4))].click()
            }catch{}
            //$("#stageFrame").contents().find("#nextQuestion")[0].click()
            $("#stageFrame").contents().find("#btnCheck")[0].click()

            })
        buildMenuButton("Toggle Console", "consolebutton", function() {
            $("#consolediv").toggle()
        })

        //Panes
        RenderPane("EdgenTweaks", "tweaksmenu", "40%", "40%", "") //make tweaksmenu base
        RenderPane("Guess Practice Config", "practiceconfig", "35%", "35%") //Panerender for guesspractice
        RenderPane("Search Title Config", "searchconfig", "35%", "35%", ) //serach config
        RenderPane("Auto Advance Config", "aaconfig", "35%", "35%")
        dragElement(document.getElementById("tweaksmenu"))
        dragElement(document.getElementById("practiceconfig"))
        dragElement(document.getElementById("aaconfig"))


        //Entries
        //SearchConfig
        $("#searchconfig").append(BuildMenuEntry("Search in google", "", "googlesearch"))
        $("#searchconfig").append(BuildMenuEntry("Search in brainly", "", "brainlysearch"))
        $("#searchconfig").append(BuildMenuEntry("Search in wolfram", "", "wolframsearch"))
        var textbox = document.createElement("input")
        textbox.id = "css"
        textbox.value = localStorage.getItem("csskey") ? localStorage.getItem("csskey") : "example.com" //not sure if this works
        $("#searchconfig").append(BuildMenuEntry("CustomSearch ", "This should end in a .com to work best.", "customsearch", null, null, textbox))

        //Autoadvance
        BuildMenuEntry("Auto Advance", "Advance to the next portion of the course automatically when it becomes available", "AutoAdvance", "aaconfig", 1)
            $("#aaconfig").append(BuildMenuEntry("No Skip", "Won't skip the end of videos", "aaNoSkip"))
            $("#aaconfig").append(BuildMenuEntry("Auto Submit", "Submit elective junk automatically", "aaASubmit"))
            $("#aaconfig").append(BuildMenuEntry("Auto Advance Backwards", "Advance Backwards automatically if assignment is completed.", "aaAGoBack"))
            $("#aaconfig").append(BuildMenuEntry("Feedback reading", "Don't autoadvance if there's a note from your teacher", "NoteReading"))
        //GuessPractice
        BuildMenuEntry("Guess Practice", "Automatically guesses through practice lessons (Warm-Up, Instruction, Summary)", "GuessPractice", "practiceconfig", 1)
            $("#practiceconfig").append(BuildMenuEntry("Guess thru Assignments", "Guesses thru assignments. This is highly discouraged", "guessassignments"))
        BuildMenuEntry("Skip intro", "Lets you interact with practices while the intro audio is playing", "SkipIntro", null, 1) //Skipintro
        BuildMenuEntry("Show Example Response", "Displays default example response for short answer questions", "ShowColumn", null, 1) //example response
        BuildMenuEntry("Auto Complete Vocab", "Automatically completes vocab assignments", "AutoCompleteVocabTickbox", null, 1) //Autocompletevocab
        BuildMenuEntry("Stealth Mode", "Hides button and dialogs", "HideButton", null, 1) //StealthMode

        //Copyright info & Other
        $("#inActivityMessage").after('<div style=position:static; overflow-y: hidden;  visibility:visible; id=consolediv><ul style=color:gold id=userconsole></ul></div>') //console ID=userconsole
        window.shortcutinfo = document.createElement("p")
        window.shortcutinfo.innerHTML = "<br> <b> HOTKEYS </b> <br> CTRL+SHFT+A = Auto Advance Toggle <br> CTRL+SHIFT+H = Stealth Mode Toggle <br> CTRL+SHIFT+G = Guess Practice toggler <br> CTRL+SHIFT+S = Search Selection <br> CTRL+SHIFT+P = Foward +O = Back <br> CTRL+SHIFT+V = AutoComplete Vocab Toggle <br> CTRL+SHIFT+E = Show Example Response toggle <br> CTRL+SHIFT+B = Skip Intro toggle"
        window.copyright = document.createElement("p")
        window.copyright.innerHTML = "EdgenTweaks Version " + version_num + ", Maintained by de-y (<a href='https://github.com/de-y/edgentweaks/issues'>Report a bug!</a>) (<a href='https://github.com/de-y/edgentweaks/'>GitHub</a>) <br> This is free and unencumbered software released into the public domain. Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means."

        window.copyright.style.color = "gray"
        window.copyright.style.width = "100%"
        $("#tweaksmenu").append(window.shortcutinfo, window.copyright)
        document.getElementById("tweaksmenu").children[1].onclick = easteregg
        window.menutitleclicks = 0
        //!!!!!!!!!!!!!!!!!!END REAL UI BUILDING !!!!!!!!!!!!!!!!!!
    } //intialization
        init();


//!!!!!!!!!!!!!!!!!!!!!!! BEGIN TWEAKS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Search Selection





// Auto Advance
function autoadvance() {
    var increment = 0;
    if (["Unit Test", "Unit Test Review", "Quiz"].includes(x = $("#activity-title").text()) && ($("#activity-status").text() != "Complete")) {
            output += "Autoadvance (disabled for  " + x + "), ";
            return;
        }
    if ($("#aaNoSkip").is(":checked")) { //this really does not work well
        var x;
        var temp = eval(x = $("#stageFrame").contents().find("#uid1_time").text().replace(/:/g,".").replace("/", '-')); ///e.g. 1:20 / 2:00 -> 1.20 - 2.00 = abs seconds left
        console.log(temp, x)
        if (temp < -.02 && temp != undefined && temp != 0 && $("#stageFrame").contents().find("#frame_video_controls").css("display") != "none") { //many condition cause videos sometime get stuck one second behind,
            output += "Autoadvance (NoSkip is enabled),  ";
            return;
        }
    }

    if ($("#aaASubmit").is(":checked")) {
        $(".footnav.goRight").click()
    }

    if ($("#aaAGoBack").is(":checked")) {
        console.log('GoBack is clicked!')
        $(".footnav.goLeft").click()
        return;
    } //aaABack

    //All other AA checks have succedded at this point.
    $(".footnav.goRight").click()

    //Advance to next !!!!assignment!!! not redundant
    $("#stageFrame").contents().find(".FrameRight").click()



    output += ("Autoadvance, ")
}
//Stealth Mode
function StealthMode(a) { //starting to get kinda bad, also, .toggle()
    if (a) {
        output += ("Stealth Mode, ")
        $("#consolediv").css("visibility", "hidden")
        $("#consolebutton").css("visibility", "hidden")
        $("#tweaksbutton").css("opacity", "0")
        $("#googlebutton").css("visibility", "hidden")
        $("#chatgptbutton").css("visibility", "hidden")
        $("#guessbutton").css("visibility", "hidden")
        $(".tweakpane").css("opacity", 0.05)
    } else {
        $("#consolediv").css("visibility", "visible")
        $("#consolebutton").css("visibility", "visible")
        $("#chatgptbutton").css("visibility", "visible")
        $("#tweaksbutton").css("opacity", "1")
        $("#googlebutton").css("visibility", "visible")
        $("#guessbutton").css("visibility", "visible")
        $(".tweakpane").css("opacity", 1)
        document.getElementById("HideButton").checked = false;
    }
}
// Skip intro
function skipIntro() {
    //if ($("#invis-o-div") == null) return; test this if you want, I can't.
    output += ("Skip intro, ")
    try {
        window.frames[0].document.getElementById("invis-o-div").remove()
    } catch (TypeError) {}
}
// Guess Practice
function GuessPractice() {
    //Guesser (THIS IS INDEDED TO BE RESTRICTIVE, JUST LEAVE IT.)
    if (["Instruction", "Warm-Up", "Summary", "Lecture"].includes(document.getElementById("activity-title").innerText)) {
         var numOption
         if ($("iframe#stageFrame").contents().find("form").find(".answer-choice-button").length = numOption > 0) {
             $("iframe#stageFrame").contents().find("form").find(".answer-choice-button")[Math.floor(Math.random() * Math.floor(numOption))].click()
         } else if ($("#stageFrame").contents().find("iframe").contents().find(".answer-choice-button").length > 0) {
               $("#stageFrame").contents().find("iframe").contents().find(".answer-choice-button")[Math.floor(Math.random() * Math.floor(4))].click()
         }
         $("#stageFrame").contents().find("#btnCheck")[0].click()
         output += ("Guess practice tried to click, ")
    } else {
        output += ("Guess Practice (not supported for  " + $("#activity-title").text() + "), ")
    }
}
// Unhide Right Column
function showColumn() {
    output += ("Show Example Response, ")
    try {
        window.frames[0].frames[0].document.getElementsByClassName("right-column")[0].children[0].style.display = "block"
    } catch (TypeError) {}
    try {
        window.frames[0].frames[0].document.getElementsByClassName("left-column")[0].children[0].style.display = "block"
    } catch (TypeError) {}
}
// Easter Egg (onclick moved to init)
function easteregg() {
    if (window.menutitleclicks < 10) {
        window.menutitleclicks++;
        if (window.menutitleclicks == 10) {
            alert("Easter egg activated! How'd you know?! (refresh to get rid of)")
            var easteregg = document.createElement("img")
            easteregg.src = "https://i.gifer.com/6md.gif"
            easteregg.style.position = "fixed"
            easteregg.style.bottom = "40px";
            easteregg.style.marginLeft = "80%"
            document.body.appendChild(easteregg)
            window.menutitleclicks = 0;
        }
    }
}
// Auto complete vocab
function vocabCompleter() {
  if (document.getElementById("activity-title").innerText == "Vocabulary") {
       $("#stageFrame").contents().find(".uibtn.uibtn-blue.uibtn-arrow-next")[0].click()
    var i = 0;
    try{
    var txt = window.frames[0].document.getElementsByClassName("word-background")[0].value
    window.frames[0].document.getElementsByClassName("word-textbox")[0].value = txt;
    $("#stageFrame").contents().find(".word-textbox.word-normal")[0].dispatchEvent(new Event("keyup"));

    } catch{return;}
    var speed = 50;
         output += ("Vocab Completer, ")
        $("#stageFrame").contents().find(".playbutton.vocab-play")[0].click()
        $("#stageFrame").contents().find(".playbutton.vocab-play")[1].click()
        $("#stageFrame").contents().find(".uibtn.uibtn-blue.uibtn-arrow-next")[0].click()
    }
}
//!!!!!!!!!!!!!!!!!!!!! END TWEAKS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!! BEGIN CONFIG & INTERNAL HANDLERS !!!!!!!!!!!!!!!!!!!!!!!!!!!
function loaditem(item, id) {
    if (localStorage.getItem(item) != null) {
        if (localStorage.getItem(item) == "true") { //Because LocalStorage only stores strings
            document.getElementById(id).checked = true
        } else {
            document.getElementById(id).checked = false
        }
    }
}
for (var x of configElements) {
    loaditem(x, x)
}
function syncConfig() { // Sync Config (save)
    for (var x of configElements) {
        localStorage.setItem(x, document.getElementById(x).checked.toString())
    }
}
//!!!!!!!!!!!!!!!!! END CONFIG & INTERNAL HANDLERS !!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!! MASTERLOOP !!!!!!!!
var output = "";

function loop() {
    output = "Active Tweaks: ";
    StealthMode($("#HideButton").is(":checked"))
    if ($("#AutoCompleteVocabTickbox").is(":checked")) vocabCompleter()
    if ($("#AutoAdvance").is(":checked")) autoadvance()
    if ($("#SkipIntro").is(":checked")) skipIntro()
    if ($("#GuessPractice").is(":checked")) GuessPractice()
    if ($("#ShowColumn").is(":checked")) showColumn()
    syncConfig()
    if ($("#userconsole code:first").text() != output) {
        $("#userconsole").prepend("<br><code>" + output)
    }
}
window.masterloop = setInterval(loop, 2000);
}, 2000); //makes this run after 2 seconds
