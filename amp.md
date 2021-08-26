# AMP

We use mainly [`amp-video-iframe`](https://amp.dev/documentation/components/amp-video-iframe/) AMP components to support AMP page. Please follow the instruction.

### 1) Host Resources to your server first
Copy the `html` code below and host the page on your server as `dm-player.html`. Like [dm-player.html](https://srvr.dmvs-apac.com/v2/dm-player.html) used for [Examples](#example-links).
```html
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>DM player</title>
          <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
          <style type="text/css">
              body, html {
                  padding: 0;
                  margin: 0;
              }
          </style>
      </head>
      <body>
          <div class="dm-player" ></div>

          <script async src="https://cdn.ampproject.org/video-iframe-integration-v0.js"></script>
          <script src="dm-amp.js"></script>
      </body>
  </html>
```

### 2) Put code below to your `<head>` page

```html
<link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-video-iframe-0.1.js">
<script async custom-element="amp-video-iframe" src="https://cdn.ampproject.org/v0/amp-video-iframe-0.1.js"></script>
<!-- Optional -->
<script async custom-element="amp-video-docking" src="https://cdn.ampproject.org/v0/amp-video-docking-0.1.js"></script>
```
> [`amp-video-docking`](https://amp.dev/documentation/components/amp-video-docking/) : Functionality for videos that minimize ("dock") to a corner or a custom position on scroll.

### 3) The configuration
```html
<amp-video-iframe 
  layout="responsive" 
  width="500"
  height="281"
  src="{path/you/put/dm-player.html}"
  data-param-playerid="{PLAYER_ID}"
  data-param-owners="{YOUR_CHANNEL_NAME}"
  data-param-sort="relevance"
  data-param-keywords="{YOUR_KEYWORDS}"
  autoplay dock>
</amp-video-iframe>
```

### Parameters Available

All `data-param-*` attributes in `amp-video-iframe` tag are added as query parameters to the iframe's src. This helps us to use parameters from [Dailymotion Custom Embed v2](https://dmvs-apac.github.io/custom-embed-v2/).
Check below the table for details available parameters

| Name | Type | Description |
| :---: | :---: | --- |
| data-param-playerid <br /> `Mandatory` | string | You can get `{PLAYER_ID}` from [Dailymotion partner HQ](https://www.dailymotion.com/partner/x1wzpns/embed/players) in the player tab, inside the embed menu. |
| data-param-sort <br /> `Mandatory` | string | This will determine which sorting method to use to retrieve a video from your catalog or 3rd parties catalog. An example could be relevance, visited in the last month or most recent. Now you can have more than 1 sorting parameter by adding your next sort param using a comma (don't add space please). List of available values: https://developer.dailymotion.com/api#video-sort-filter |
| data-param-owners <br /> `Mandatory` | string | You need to put the username of the channels from which the script will search content. If your channel name URL is www.dailymotion.com/channelABC then your username is channelABC. This is case sensitive, meaning channelABC is not the same as Channelabc. To put more than 1 you can separate by `","` |
| data-param-videoid | string | Set video xid directly to the tag |
| data-param-privatevideoid | string | Set private kid directly to the tag |
| data-param-playlistid | string | Set playlist xid directly to the tag to embed playlist |
| data-param-excludeids | string | xid of videos to exclude. You can find the xid of any video by going on dailymotion.com and looking at the URL address in your browser for a given video. To put more than one id, you can separate them by "," |
| data-param-searchinplaylist | string | provide playlist xid to search videos within the playlist |
| data-param-syndication | string | Syndication key. Needed if the video content does not belong to your channel / network of channels AND/OR if you embed the Dailymotion video player into specific 3rd party environments (Google AMP, Facebook IA, OTT products, in-app, operated but not owned web domains...). This enables tracking and targeting. |
| data-param-adsparams | string | To add custom ad prameters |
| data-param-referrerpolicy | string | The Referrer-Policy HTTP header controls how much referrer information (sent via the Referer header) should be included with requests. You can read more on this [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) documentation. |
| data-param-language | string | Language of the video if you want to target specific languages only for a website. For more details check here: [Languages](https://developer.dailymotion.com/api/#languages) |
| data-param-keywords | string | Define keywords for the contextual embed. To put more than 1 word you can separate by `","`. E.g. "animal,zoo,birds,nature,wildlife". |
| data-param-category | string | Content category to filter. List of available categories: https://api.dailymotion.com/channels |
| data-param-rangeday | number[] | This can be filled if you want to limit videos embedded based on a date range for freshness. It can be 30 days, 1 day, 120 days... You can add more than one value for multiple sort params, which will apply to corresponding sort params. E.g. `"30,0"` |
| data-param-mute | boolean |  to set player mute option. By default it's false` ( default behaviour: The player provides smart mute behaviour, it tries to automatically start the video playback with sound. If this isn’t possible due to browser prevention, there is a fallback mechanism and the player reattempts to play the video but with the sound set to mute )  |
| data-param-fallbackplaylist | string |  If there is no relevance videos it will fallback to embed a specific playlist ( default behaviour : The fallback strategy is to embed recent videos of given channel `owners` )  | 

### Example Links
- [AMP Simple Embed](https://dmvs-apac.github.io/custom-embed-v2/examples/amp/)
- [AMP Playlist Embed](https://dmvs-apac.github.io/custom-embed-v2/examples/amp/playlist.html)
