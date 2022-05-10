# Manage Custom embed flagged by Heavy Ad :

In 2020 Google introduced various measures for regulating online advertising in the Google Chrome browser. The Heavy Ad Intervention feature was released in order to identify and unload online ads that are deemed as 'heavy'. [Learn more](https://faq.dailymotion.com/hc/en-us/articles/4414693854738-Manage-player-integration-flagged-by-Heavy-Ad) .

### How to manage Custom Embed ? :

If player is flagged by Heavy Ad, Dailymotion throw an event `PLAYER_HEAVYADSINTERVENTION`. Using that event Custom embed try to load the player again. **Loading again the player bypass the heavy ad most of the timebut not always**.

Hence Dailymotion custom embed always recommend to use two `PLAYER_ID` for `playerId` attribute. The second PLAYER_ID will be used for Heavy Ad Intervention.

In the absense of second PLAYER_ID, Dailymotion custom embed will load universal player library i.e., player.js[] for Heavy Ad Intervention.

### Embed Example :

```html
<div class="dm-player" 
    owners="suaradotcom"
    sort="recent" 
    playerId="x4aj,x7n9s" >
</div>
```
**Sample code :**

<iframe height="300" style="width: 100%;" scrolling="no" title="Manage Heavy Ad" src="https://codepen.io/skhassandaily/embed/KKQzxGj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skhassandaily/pen/KKQzxGj">
  Manage Heavy Ad</a> by skhassandaily (<a href="https://codepen.io/skhassandaily">@skhassandaily</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

