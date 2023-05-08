# Migration Custom Embed From V1 to V2

If you are still using v1, now is the perfect time to migrate to v2. Update your current URL from v1 to v2 and make the necessary changes to your embed code.

Replace the old URLs:
```
https://srvr.dmvs-apac.com/dm-ce.min.js
```

or the jsdelivr CDN:
```
https://cdn.jsdelivr.net/npm/@dmvs-apac/dm-custom-embed/dist/dm-ce.min.js
```

With the new URL:
```
https://statics.dmcdn.net/c/dm-ce.min.js
```

In addition to updating the URL, you'll also need to change the CPEID to PlayerID in the div tag when migrating from v1 to v2. You can find the v2 documentation here: https://dmvs-apac.github.io/custom-embed-v2/

Update your embed code as shown below:

v1 embed sample code:
```html
<div class="dm-player" cpeId="5df6e56e3e8c0962957f6a74,5df6e56e3e8c0962957f6a74" sort="relevance" owners="yourchannelname"></div>
```

v2 embed sample code:
```
<div class="dm-player" playerId="{PLAYER_ID}" sort="relevance" keywordsSelector="meta[name='keywords']" owners="{YOUR_CHANNEL_NAME}"></div>
```

Make sure to replace {PLAYER_ID} and {YOUR_CHANNEL_NAME} with your actual PlayerID and channel name, respectively.


