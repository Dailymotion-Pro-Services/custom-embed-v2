

const pipBg = document.getElementById("pipBg");
const pipColor = document.getElementById("pipColor");
const pipCode = document.getElementById("pipCode");
const playerIframe = document.getElementById("playerIframe");
const pipShare = document.getElementById("pipShare");
const sampleCodeCheck = document.getElementById("sampleCodeCheck");

const sampleCode = `<div class="dm-player" 
owners="suaradotcom"
sort="recent" 
playerId="x1bgs"
smallPip="true" >
</div>`;

let defaultCode = sampleCode;
let styleCode = "";

pipBg.addEventListener("change", updateStyle);
pipColor.addEventListener("change", updateStyle);
sampleCodeCheck.addEventListener("change", ()=>{
    if(sampleCodeCheck.checked){
        defaultCode = sampleCode;
        pipCode.innerText = defaultCode;
        renderPlayer();
    }
});


pipCode.addEventListener('focusin', (event) => {
    extraInfo.classList.add("show");
});

pipCode.addEventListener('focusout', (event) => {
    extraInfo.classList.remove("show");
    sampleCodeCheck.checked = false;
    renderPlayer();
});

pipShare.addEventListener('click', (event) => {
    window.open(encodeURI(window.location.href.split('?')[0]+"?settings="+
    (pipCode.innerText.replace(/#/g, '__'))),"_blank");
});


function updateStyle(){
    styleCode = `<style>
        .dm-player{
            --dm-smallpip-player-bg: ${pipBg.value};
            --dm-smallpip-player-color: ${pipColor.value};
        }
    </style>
        
    `;

    let prevCode = pipCode.innerText;
    let prevStyleArray = prevCode.match(/(?<!\w)#\w+/g);
    if(prevStyleArray){
        prevCode = prevCode.replace(prevStyleArray[0],pipBg.value);
        prevCode = prevCode.replace(prevStyleArray[1],pipColor.value);
        pipCode.innerText = prevCode;
    }else{
        pipCode.innerText = styleCode+defaultCode;
    }
    sampleCodeCheck.checked = false;
    renderPlayer();
}


function renderPlayer(){
    playerIframe.src = encodeURI("player.html?settings="+(pipCode.innerText.replace(/#/g, '__')));
}

// check url
const preSet = (new URLSearchParams(decodeURI(window.location.search))).get('settings');
if(preSet){
    defaultCode = preSet.replace(/__/g, '#');
    styleArray = defaultCode.match(/(?<!\w)#\w+/g);

    if(styleArray){
        pipBg.value = styleArray[0];
        pipColor.value = styleArray[1];
    }

    sampleCodeCheck.checked = false;
}
pipCode.innerText = defaultCode;
renderPlayer();


