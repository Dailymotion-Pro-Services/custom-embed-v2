# Embed through GAM
GAM embed integration process happens through iframe ( friendly iframe ). Dailymotion Custom Embed (CE) can be implemented in the same way. You can add a new script tag in GAM as an ad code.
Below is an example code.

```html
<script>
var tw = window.top, sfe = window.frameElement,dmScript;
sfe.parentNode.insertAdjacentHTML("beforeBegin", "<div class='dm-player' playerId='{PLAYER_ID}' sort='recent' owners='{YOUR_CHANNEL_NAME}' ></div>");
dmScript= document.createElement('script');
dmScript.type = 'text/javascript';
dmScript.src = 'https://statics.dmcdn.net/c/dm-ce.min.js';
tw.document.body.appendChild(dmScript);
</script>
```

**Important Note**: The above script will actually help to create Dailymotion CE outside of GAM iframe. Hence the player will render with no iframe as wrapper. [** Do not use safe iframe **](https://support.google.com/admanager/answer/6023110)

### `1px * 1px` Ad Size:

Though it is not recomended to use `1*1` ad size, you need to add a target empty div for this setting. The player will render to the target div when GAM ad is loaded.

Here is an example code.

```html
<!-- PAGE CODE -->
.....
<div class="playerContainer"><div>


<!-- GAM CODE -->
<script>
var tw = window.top, sfe = window.frameElement,dmScript;
tw.document.querySelector(".playerContainer").innerHTML = ("<div class='dm-player' playerId='{PLAYER_ID}' sort='recent' owners='{YOUR_CHANNEL_NAME}' ></div>");
dmScript= document.createElement('script');
dmScript.type = 'text/javascript';
dmScript.src = 'https://srvr.dmvs-apac.com/v2/dm-ce.min.js';
tw.document.body.appendChild(dmScript);
</script>
```
**Convert CE code to GAM embed code [Here](https://dmvs-apac.github.io/custom-embed-v2/examples/embed_gam/)**

**For normal CE you can check [v2 documentation](https://dmvs-apac.github.io/custom-embed-v2/)**
