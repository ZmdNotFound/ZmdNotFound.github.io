// ==UserScript==
// @name         101 Assistant
// @namespace    http://tampermonkey.net/
// @version      2024-11-17
// @description  101 Smart Class Platform Assistant
// @author       You
// @match        https://101.csedu.gov.cn/sunrise/student/task/studyDiscuss.do?userTaskId=bc93484f-9033-46fa-b3e8-913cc6ebb701&academicYear=2023
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csedu.gov.cn
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';

    // 声明 unsafeWindow
    if (unsafeWindow === undefined) window.unsafeWindow = window;

    // 定义一个函数来添加全局样式
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    function extractTextBetweenChars(text, char1, char2) {
        var regex = new RegExp(char1 + '(.*?)' + char2, 'gi');
        
        // 执行搜索
        var match = regex.exec(text);
        
        // 如果找到了匹配项，返回两个字符之间的文本
        if (match) {
            // match[1] 包含第一个捕获组的内容
            return match[1];
        } else {
            // 如果没有找到匹配项，返回 null
            return null;
        }
    }

    function editPageTarget(num1) {
        var pageCountTextElements = document.getElementById('klassReplyList').getElementsByClassName('fr pdR20');
        var tmpText;
        if(pageCountTextElements.length > 0){
            var element = pageCountTextElements[0];
            tmpText = element.innerText;
            console.log(tmpText);
        }
        var pageCount = extractTextBetweenChars(tmpText, '总', '页');
        console.log(pageCount);
    }
    
    // 将函数赋值给 unsafeWindow
    unsafeWindow.editPageTarget = editPageTarget;

    window.addEventListener('load', function() {
        // 创建div元素
        var myDiv = document.createElement('div');
        myDiv.id = 'myCustomBox';
        myDiv.style.position = 'fixed';
        myDiv.style.left = '20px';
        myDiv.style.top = '20px';
        myDiv.style.width = '200px';
        myDiv.style.height = '150px';
        myDiv.style.backgroundColor = '#f0f0f0';
        myDiv.style.border = '1px solid #000';
        myDiv.style.zIndex = '9999';
        myDiv.style.padding = '10px';

        // 创建p元素
        var myParagraph = document.createElement('p');
        myParagraph.textContent = '直达楼层：';
        myParagraph.style.margin = '0';
        myParagraph.style.padding = '5px';

        // 将p元素添加到div中
        myDiv.appendChild(myParagraph);

        //将button元素添加到div中
        var selectButton = document.createElement('BUTTON');
        selectButton.id = "selectButton";
        selectButton.textContent = 'Go';
        selectButton.onclick = editPageTarget;
        selectButton.style.position = 'fixed';
        myDiv.appendChild(selectButton);

        // 将div添加到body中，以便在页面上显示
        document.body.appendChild(myDiv);
    });

})();