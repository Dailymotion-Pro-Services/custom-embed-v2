(()=>{

    
    const codeDiv = document.getElementById("codeDiv");
    const loadPlayer = document.getElementById("loadPlayer");
    const playerDiv = document.getElementById("playerDiv");
    const netDiv = document.getElementById("netDiv");
    const selectTag = document.getElementById("apiSelect");

    codeSample = {
        without: '<div class="dm-player" owners="DailymotionAPAC" sort="relevance,recent" keywords="lorem,ipsum,dolor,amet,consectetur,consectetur,eiusmod,nostrud"></div>',
        min: '<div class="dm-player" owners="DailymotionAPAC" sort="relevance,recent" keywords="lorem,ipsum,dolor,amet,consectetur,consectetur,eiusmod,nostrud" minWordSearch="6"></div>',
        max: '<div class="dm-player" owners="DailymotionAPAC" sort="relevance,recent" keywords="lorem,ipsum,dolor,amet,consectetur,consectetur,eiusmod,nostrud" maxWordSearch="3"></div>',
        both: '<div class="dm-player" owners="DailymotionAPAC" sort="relevance,recent" keywords="lorem,ipsum,dolor,amet,consectetur,consectetur,eiusmod,nostrud" minWordSearch="4" maxWordSearch="6"></div>'
    }

    codeDiv.innerText = codeSample.without;

    loadPlayer.addEventListener("click", () => {
        playerDiv.innerHTML = codeDiv.innerText;
        netDiv.innerHTML = "";
        window.apiCallNum = 0;
        if(window.dmceRender){
            window.dmceRender( document.querySelector(".dm-player") );
        }
    });

    selectTag.addEventListener("change", () => {
        codeDiv.innerText = codeSample[selectTag.value];
    })
})();