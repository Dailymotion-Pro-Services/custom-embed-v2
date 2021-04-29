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
| PlayerId   `Madatory` | string | You can get `{PLAYER_ID}` from [Dailymotion partner HQ](https://www.dailymotion.com/dm/partner/onboarding) in the player tab, inside the embed menu. |
| sort   `Madatory` | string | This will determine which sorting method to use to retrieve a video from your catalog or 2nd parties catalog. An example could be relevance, visited in the last month or most recent. Now you can have more than 1 sorting parameters by adding your next sort param using a comma (don't add space please). List of available values: https://developer.dailymotion.com/api#video-sort-filter |
| owners   `Madatory` | string | You need to put the username of the channels from which the script will search content. If your channel name URL is www.dailymotion.com/channelABC then your username is channelABC. This is case sensitive, meaning channelABC is not the same as Channelabc. To put more than 1 you can separate by `","` |
| excludeIds | string | xid of videos to exclude. You can find the xid of any video by going on dailymotion.com and looking at the URL address in your browser for a given video. To put more than one id, you can separate them by "," |
| searchInPlaylist | string | provide playlist xid to search videos within the playlist |
| syndication | string | Syndication key. Needed if the video content does not belong to your channel / network of channels AND/OR if you embed the Dailymotion video player into specific 3rd party environments (Google AMP, Facebook IA, OTT products, in-app, operated but not owned web domains...). This enhances tracking and targeting. |
| adsParams | string | To add custom ad prameters |
| language | string | Language of the video if you want to target specific languages only for a website. List of available values here: https://developer.dailymotion.com/api/partners#languages |
| keywordsSelector | string | Define which meta tag you will use for the contextual embed. If you leave it blank it will get the `<h1>` the words in the meta tag will be chunked, sanitized, and matched against your own video catalog or the video catalog of the 3rd parties you include in your script. |
| rangeDay | number[] | This is a finding video based on range day. It can be 30 days, 1 day, or 120 days. You can add it more than one for multiple sort params. E.g. `"30,0"` |
| preVideoTitle | string | A custom section title before the video player embed, i.e. `"See also: Recommended videos"` |
| showVideoTitle | boolean | The show video title or not, set true if need to show video title. E.g. `"true"`  |
| showInfoCard | boolean | Info of the video in a card below the video player. If you show the Info Card then you don't need to set `showVideoTitle` as the info card contains both video title, description, and publisher logo. |
| showOutsidePlaylist | boolean | Showing the playlist outside the player. By default, the value is `false` and the playlist is inside the video player. |
| startDate | string | Set a start date to find a video. You should follow this format "YYYY-MM-DD" e.g. "2020-04-01" |
| videoId | string | Set video xid directly to the tag |
| blockKeywords | string[] |  to block keywords It can be use. To put more than 1 word you can separate by `","` |



**Examaple :**
```
<div class="dm-player"
   playerId="xxxx"
   sort="relevance,recent"
   owners="yourchannelname"
   category="categoryname"
   excludeIds="xxxid,xyxid"
   searchInPlaylist="xxpid"
   syndication="1234567"
   adsParams="contextual"
   keywordsSelector="meta[name='keywords']"
   rangeDay="30,0"
   preVideoTitle="See also:"
   showVideoTitle="true"
   showInfoCard="true"
   showOutsidePlaylist="false"
   startDate="2020-04-01"
   videoId="x7webup"
   blockKeywords="restricted,keywords,here"
></div>
```
