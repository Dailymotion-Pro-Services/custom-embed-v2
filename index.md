# Dailymotion Custom Embed v2

To use custom embed you must create player first through [Partener HQ](https://www.dailymotion.com/dm/partner/onboarding) and get the `{PLAYER_ID}`.


### Start Embedding

You need to do 2 things to embed the video.

1. Put the script at the very bottom before `body` end in your website `<script src="`[//srvr.dmvs-apac.com/v2/dm-ce.min.js](//srvr.dmvs-apac.com/v2/dm-ce.min.js)`"></script>`. Or you can load asynchronously in `header` by using `async` attribute.
2. Add `<div class="dm-player" `[{PARAMS}](#parameters-available)`></div>` in your body content. The best place to put this tag is in the middle of the article. We will show a sample below.


### Standard Embed Tag

```
<div class="dm-player" playerId="{PLAYER_ID}" sort="relevance" owners="{YOUR_CHANNEL_NAME}"></div>
```


### Parameters Available
| Name | Type | Description |
| --- | --- | --- |
| PlayerId `Madatory` | string | You can get `{PLAYER_ID}` from [Dailymotion partner HQ](https://www.dailymotion.com/dm/partner/onboarding) in the player tab, inside the embed menu. |
| sort `Madatory` | string | This will determine which sorting method to use to retrieve a video from your catalog or 2nd parties catalog. An example could be relevance, visited in the last month or most recent. Now you can have more than 1 sorting parameters by adding your next sort param using a comma (don't add space please). List of available values: https://developer.dailymotion.com/api#video-sort-filter |
| owners `Madatory` | string | You need to put the username of the channels from which the script will search content. If your channel name URL is www.dailymotion.com/channelABC then your username is channelABC. This is case sensitive, meaning channelABC is not the same as Channelabc. To put more than 1 you can separate by "," |

 
