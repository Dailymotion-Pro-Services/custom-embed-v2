

const ceCode = document.getElementById("ceCode");
const gamCode = document.getElementById("gamCode");
const pageCode = document.getElementById("pageCode");
const convertSimple = document.getElementById("convertSimple");
const convertSize = document.getElementById("convertSize");

loadTheCode(`<script>
        var tw = window.top, sfe = window.frameElement,dmScript;
        sfe.parentNode.insertAdjacentHTML("beforeBegin", "<div class='dm-player' owners='suaradotcom' sort='recent' playerId='x4aj'></div>");
        dmScript= document.createElement('script');
        dmScript.type = 'text/javascript';
        dmScript.src = 'https://statics.dmcdn.net/c/dm-ce.min.js';
        tw.document.body.appendChild(dmScript);
    </script>`)


convertSimple.addEventListener("click",()=>{
    loadTheCode(`<script>
    var tw = window.top, sfe = window.frameElement,dmScript;
    sfe.parentNode.insertAdjacentHTML("beforeBegin", "${ceCode.innerText}");
    dmScript= document.createElement('script');
    dmScript.type = 'text/javascript';
    dmScript.src = 'https://srvr.dmvs-apac.com/v2/dm-ce.min.js';
    tw.document.body.appendChild(dmScript);
    </script>`);
    loadThePageCode(false);
});

convertSize.addEventListener("click",()=>{
    loadTheCode(`<script>
    var tw = window.top, sfe = window.frameElement,dmScript;
    tw.document.querySelector(".playerContainer").innerHTML = ("${ceCode.innerText}");
    dmScript= document.createElement('script');
    dmScript.type = 'text/javascript';
    dmScript.src = 'https://statics.dmcdn.net/c/dm-ce.min.js';
    tw.document.body.appendChild(dmScript);
    </script>`);

    loadThePageCode(true);
});


function loadTheCode(code){
    gamCode.innerText = code;
}

function loadThePageCode(flag){
    if(flag){
        pageCode.style.display = "block";
    }else{
        pageCode.style.display = "none";
    }
}

