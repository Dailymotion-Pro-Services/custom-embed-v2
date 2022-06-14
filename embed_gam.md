# Embed through GAM
As GAM embed integration process happen through iframe ( friendly iframe ). Dailymotion CE can be done in same way. You can add a new script tag in GAM as ad code.
Here is the example code.

```html
<script>
var tw = window.top, sfe = window.frameElement,dmScript;
sfe.parentNode.insertAdjacentHTML("beforeBegin", "<div class='dm-player' playerId='{PLAYER_ID}' sort='recent' owners='{YOUR_CHANNEL_NAME}' ></div>");
dmScript= document.createElement('script');
dmScript.type = 'text/javascript';
dmScript.src = 'https://srvr.dmvs-apac.com/v2/dm-ce.min.js';
tw.document.body.appendChild(dmScript);
</script>
```

**Important Note**: The above script will actually help to create Dailymotion CE outside of GAM iframe. Hence the player will render with no iframe as wrapper. [** Do not use safe iframe **](https://support.google.com/admanager/answer/6023110)

### `1px * 1px` Ad Size:

Though its not recomended to use `1*1` ad size, you need to add target empty div for this settings. The player will render to the target div when GAM ad is loaded.

Here is the example code.

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


*** For normal CE you can check [v2 documentation](https://dmvs-apac.github.io/custom-embed-v2/)
