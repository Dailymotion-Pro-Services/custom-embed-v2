# Embed through GAM
As GAM embed integration process happen through iframe ( friendly iframe ). Dailymotion CE can be done in same way. You can add a new script tag in GAM as ad code.
Here is the example code.

```
<script>
var tw = window.top, sfe = window.frameElement,dmScript;
sfe.parentNode.insertAdjacentHTML("beforeBegin", "<div class='dm-player' cpeId='5df6e56e3e8c0962957f6a76' sort='recent' owners='yourchannelname' >");
dmScript= document.createElement('script');
dmScript.type = 'text/javascript';
dmScript.src = 'https://srvr.dmvs-apac.com/v2/dm-ce.min.js';
tw.document.body.appendChild(dmScript);
</script>
```

**Important Note**: The above script will actually help to create Dailymotion CE outside of GAM iframe. Hence the player will render with no iframe as wrapper. For normal CE you can check [v2 documentation](https://dmvs-apac.github.io/custom-embed-v2/)
