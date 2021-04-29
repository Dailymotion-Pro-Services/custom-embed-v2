# Dailymotion Custom Embed v2

To use custom embed you must create player first through [Partener HQ](https://www.dailymotion.com/dm/partner/onboarding) and grab the {PLAYER_ID}


### Start Embedding

You need to do 2 things to embed the video.

1. Put the script at the very bottom before `body` end in your website `<script src="`[//srvr.dmvs-apac.com/v2/dm-ce.min.js](//srvr.dmvs-apac.com/v2/dm-ce.min.js)`"></script>`. Or you can load asynchronously in `header` by using `async` attribute.
2. Add `<div class="dm-player" `[{PARAMS}](#parameters-availble)`></div>` in your body content. The best place to put this tag is in the middle of the article. We will show a sample below.


### Standard Embed Tag

```
<div class="dm-player" playerId="{PLAYER_ID}" sort="relevance" owners="{YOUR_CHANNEL_NAME}"></div>
```


 
