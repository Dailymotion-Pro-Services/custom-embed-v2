const codeDiv = document.querySelector(".code code");
    codeDiv.innerText = `
    <div class="dm-player" 
        playerId="x1bgs" 
        owners="suaradotcom" 
        sort="relevance" 
        keywordsSelector="h1">
    </div>

    `;

    const logDiv = document.querySelector(".logs");
    function logs(eventName){
        logDiv.insertAdjacentHTML("beforeend", "<p><strong>"+eventName+"</strong> (check console to see event object)</p>");
    }
    // get player object when custom embed create player
    document.addEventListener("dm-player-create",(e)=>{
        console.log("dm-player-create",e.detail);
        logs("dm-player-create");
    })
    // get event when no relevant video found
    document.addEventListener("dm-no-relevance",(e)=>{
        console.log("dm-no-relevance",e.detail);
        logs("dm-no-relevance");
    })