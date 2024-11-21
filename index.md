# Dailymotion Custom Embed v2

To use custom embed you must create player first through [Partner HQ](https://www.dailymotion.com/partner/x1wzpns/embed/players) and get the `{PLAYER_ID}`.


### Start Embedding

You need to do 2 things to embed the Player.

1. Add `<div class="dm-player" `[{PARAMS}](#parameters-available)`></div>` in your body content. The best place to put this tag is in the middle of the article.

2. Put the script at the very bottom before `body` end in your website. You can download the script [here](https://statics.dmcdn.net/c/dm-ce.min.js)

```html
<!-- !!! VERY IMPORTANT -->

<script src="https://statics.dmcdn.net/c/dm-ce.min.js"></script>

</body>
</html>
```

### Standard Embed Tag

```html
<div class="dm-player" playerId="{PLAYER_ID}" sort="relevance" keywordsSelector="meta[name='keywords']" owners="{YOUR_CHANNEL_NAME}"></div>
```

### Parameters Available

| Name | Type | Description |
| :---: | :---: | --- |
| PlayerId <br /> `Mandatory` | string | You can get `{PLAYER_ID}` from [Dailymotion partner HQ](https://www.dailymotion.com/partner/x1wzpns/embed/players) in the player tab, inside the embed menu. **Important**, if you don't provide `playerId` the script will get default [`player script`](https://geo.dailymotion.com/libs/player.js). You can also set up a secondary `{PLAYER_ID}` in case the player gets flagged by Google Heavy Ads Intervention. [Learn more](https://dmvs-apac.github.io/custom-embed-v2/heavy_ad).|
| sort <br /> `Mandatory` | string | This will determine which sorting method to use to retrieve a video from your catalog or 3rd parties catalog. An example could be relevance, visited in the last month or most recent. Now you can have more than 1 sorting parameters by adding your next sort param using a comma (don't add space please). List of available values: https://developer.dailymotion.com/api#video-sort-filter |
| owners <br /> `Mandatory` | string | You need to put the username of the channels from which the script will search content. If your channel name URL is www.dailymotion.com/channelABC then your username is channelABC. This is case sensitive, meaning channelABC is not the same as Channelabc. To put more than 1 you can separate by `","` |
| videoId | string | Set video xid directly to the tag |
| privateVideoId | string | Set private kid directly to the tag |
| playlistId | string | Set playlist xid directly to the tag to embed playlist |
| excludeIds | string | xid of videos to exclude. You can find the xid of any video by going on dailymotion.com and looking at the URL address in your browser for a given video. To put more than one id, you can separate them by "," |
| excludeChannelIds | string | List of `xids` of the channels to exclude from the result set. To put more than one id, you can separate them by ",".  E.g. `"x26rlgz,x1x15xq,x1x1a21"`. Check [API playground](https://staging.dmvs-apac.com/apitest/index.html?options=getChannelId) where you can get channel XID from channel's screen name. |
| searchInPlaylist | string | provide playlist xid to search videos within the playlist |
| syndication | string | Syndication key. Needed if the video content does not belong to your channel / network of channels AND/OR if you embed the Dailymotion video player into specific 3rd party environments (Google AMP, Facebook IA, OTT products, in-app, operated but not owned web domains...). This enables tracking and targeting. |
| customParams | string | To add declarative values as parameter; this could be an advertising, environment-specific value that the dailymotion player cannot understand on its own, for instance 'column-player' versus 'main-article'. |
| customConfig | string | This is an improvement of `customParams`. Now, it has the possibility of having multiple values with multi purposes as well. You can check the sample below |
| referrerPolicy | string | The Referrer-Policy HTTP header controls how much referrer information (sent via the Referer header) should be included with requests. You can read more on this [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) documentation. |
| languages | string | Languages of the video if you want to target specific languages only for a website. To put more than 1 value you can separate by `","`. E.g. `"en,fr"`.For more details check here: [Languages](https://developer.dailymotion.com/api/#languages) |
| keywordsSelector | string | Define which meta tag you will use for the contextual embed. If you leave it blank it will get the `<h1>` the words in the meta tag will be chunked, sanitized, and matched against your own video catalog or the video catalog of the 3rd parties you include in your script. |
| keywords | string | you can add keywords with comma sepeartors for the contexual embed . This is alternative solution of using keywordsSelector parameter. E.g. `"football,sports"` |
| category | string | Content category to filter. List of available categories: https://api.dailymotion.com/channels |
| rangeDay | number[] | This can be filled if you want to limit videos embedded based on a date range for freshness. It can be 30 days, 1 day, 120 days... You can add more than one value for multiple sort params, which will apply to corresponding sort params. E.g. `"30,0"` |
| preVideoTitle | string | A custom section title above the video player embed, i.e. `"See also: Recommended videos"` |
| showVideoTitle | boolean | Decide if you want to show video title or not, set true if you need to show video title. E.g. `"true"`  |
| showInfoCard | boolean/string | Info of the video in a card below the video player.the info card contains both video title, description etc. [Learn more](https://dailymotion-pro-services.github.io/custom-embed-v2/info_card) |
| ctaCard | boolean | To show in-video CTA cards, you must set the value `true`. [Read more](https://dailymotion-pro-services.github.io/custom-embed-v2/ctacard) |
| showCollection | string | To show the video recommendations playlist outside of the player. It can be set as `right` or `bottom` based on the position of the playlist. By default, the playlist is inside the video player. [Learn More](https://dailymotion-pro-services.github.io/custom-embed-v2/show_collection) |
| blockKeywords | string[] |  to block keywords, this parameter can be used. To put more than 1 word you can separate by `","` |
| mute | boolean |  to set player mute option. By default its `false` ( default behaviour : The player provides smart mute behaviour, it tries to automatically start the video playback with sound. If this isn’t possible due to browser prevention, there is a fallback mechanism and the player reattempts to play the video but with the sound set to mute )  |
| fallbackPlaylist | string |  If there is no relevance videos it will fallback to embed specific playlist ( default behaviour : The fallback strategy is to embed recent videos of given channel `owners` )  | 
| lazyload | boolean | This is just to prevent the page render the player at first load, if actived the player just render if user start scrolling down the page. See example of this in the [following sample page](https://staging.dmvs-apac.com/ce-v2/lab/lazy-load.html). |
| app | string | This is an in-app parameter. This additional parameter will be passed into the Player URL in order to ensure correct monetization and tracking. For more details check [required-in-app-parameters](https://developer.dailymotion.com/player/#required-in-app-parameters) |
| clientType | string | This is another in-app parameter similar to `client_type` in [required-in-app-parameters](https://developer.dailymotion.com/player/#required-in-app-parameters) |


### Will Be Deprecated

| Name | Type | Description |
| :---: | :---: | --- |
| customParams | string | will be replaced by customConfig |
| showOutsidePlaylist | string | we will suggest to use `showCollection` |

### Deprecated Parameters From V1

| Name | Type | Description |
| :---: | :---: | --- |
| startDate | string | Deprecated since V2 |

**Embed Example :**
```html
<div class="dm-player"
   playerId="xxxx"
   sort="relevance,recent,random"
   owners="yourchannelname"
   category="categoryname"
   excludeIds="xxxid,xyxid"
   searchInPlaylist="xxpid"
   syndication="1234567"
   customConfig="[dynamiciu]=23328537%2FAdParams_Test;[keyvalues]=category%3Dsports%26section%3Dvideo"
   keywordsSelector="meta[name='keywords']"
   rangeDay="30,0,90"
   preVideoTitle="See also:"
   showVideoTitle="true"
   showInfoCard="true"
   showCollection="bottom"
   videoId="x7webup"
   privateVideoId="k6sgZEzVrMV3vHwvmX6"
   playlistId="x6mrls"
   blockKeywords="restricted,keywords,here"
   lazyload="true"
   referrerPolicy="no-referrer-when-downgrade"
></div>
```

In the sample above for `customConfig` value you realized there are text `%2f`, `%3d`, and `%26`. All of that number is a URL encoding. That's actually a character of `/`, `=`, and `&`. You can visit this [URL encoding link](https://www.w3schools.com/tags/ref_urlencode.ASP) for a complete list.

### Player features:
- The Player is implemented with [*Page Visibility API*](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API). If a player is `playing` in the active tab/page, the player goes to `pause` if the tab/page is inactive, and vice versa.
- Custom embed can be utilized to append any manual or dynamic playlist to your pre-set website section. [Learn more](https://dailymotion-pro-services.github.io/custom-embed-v2/recommend_playlist)

### PIP customisation

The PiP will be displayed at the bottom right on wide screens and at the top on narrow screens by default. Its possible to reposition the PiP by adding specific CSS code for the dedicated element IDs. You can view the CSS samples below or view a live demo in our codepen.io PiP collection [here](https://codepen.io/collection/NqPeEy).

| CSS SELECTOR | INFO |
| :---: | :---: |
| `#dailymotion-pip-large-viewport` | Targets PiP for “corner display” on large viewports |
| `#dailymotion-pip-small-viewport` | Targets PiP for “top sticky display” on small viewports |

<iframe height="300" style="width: 100%;" scrolling="no" title=" Player embed script - reposition PIP mobile[top padding]" src="https://codepen.io/team/dailymotion-developer/embed/preview/abJOrMJ?default-tab=css%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/team/dailymotion-developer/pen/abJOrMJ">
   Player embed script - reposition PIP mobile[top padding]</a> by dailymotion-developer (<a href="https://codepen.io/team/dailymotion-developer">@dailymotion-developer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### Example: PIP desktop – top right:
```
#dailymotion-pip-large-viewport {
  --position-right: 0px;
  --position-top: 0px;
}
```
#### Example: Reposition PIP mobile – below menu bar:
```
#dailymotion-pip-small-viewport {  
  --position-top: 10px; /* can be any CSS unit: like em, rem, etc */
}
```
#### Reposition PIP mobile - below menu bar
```
#dailymotion-pip-small-viewport {
  --position-top: 50px !important;
}
```
#### Reposition PIP mobile – bottom of the page:
```
#dailymotion-pip-small-viewport {
  --position-bottom: 0;
}
```
#### Customizing PIP look and feel on all viewports 
You can add any rule to deep customize the PiP look and feel. For example by removing the frame shadow as follow.
```
#dailymotion-pip-large-viewport,
#dailymotion-pip-small-viewport {
  box-shadow: none !important;
}
```

### Dynamic changing of PIP position:
The position of PIP can be changed dynamically by changing the CSS while it's active. Check the codepen below
<iframe height="300" style="width: 100%;" scrolling="no" title="Dynamic changing PIP position" src="https://codepen.io/skhassandaily/embed/preview/MWQxyrM?default-tab=css%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skhassandaily/pen/MWQxyrM">
  Dynamic changing PIP position</a> by skhassandaily (<a href="https://codepen.io/skhassandaily">@skhassandaily</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Example Links
- [PIP simple menu - Mobile](https://dailymotion-pro-services.github.io/custom-embed-v2/examples/pip_simple_menu/)
- [PIP overlay menu - Mobile](https://dailymotion-pro-services.github.io/custom-embed-v2/examples/pip_overlay_menu/)



