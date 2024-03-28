# Connect Custom Embed data to Google Analytics 4 (GA4) :

> [!IMPORTANT]  
> Following this documentation is about providing extra steps that you need for connecting your Custom embed player to Google Analytics 4 (GA4). Please follow the steps first from [Connect your Dailymotion Player data to Google Analytics 4 (GA4)](https://developers.dailymotion.com/guides/connect-to-google-analytics/).

Custom Embed is created on the top of [PLS player](https://developers.dailymotion.com/player/#player-library-script). You must always connect your Dailymotion player to the GTM script using `DM_GTM_INIT(player)`.[Read more.](https://developers.dailymotion.com/guides/connect-to-google-analytics/#important-for-player-library-script).

With the help of [Events in Custom Embed V2](https://dmvs-apac.github.io/custom-embed-v2/custom_events), you can get the dailymotion player object and call `DM_GTM_INIT(player)` method.

### Example : 
```html
<script>
    // get player object when custom embed creates a player
    document.addEventListener("dm-player-create",(e)=>{
        console.log(e.detail); // {player: playerObject}
        DM_GTM_INIT(e.detail.player); // conecting player to GMT script
    })
</script>
```
