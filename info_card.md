# Info Card

`Info Card` is a component of Dailymotion Custom Embed . It shows information of the current video such as video title, description etc. With the `showInfoCard` parameter you can activate `info card` component The card will be added at bottom of the video player.
> `Info Card` is not compatibale with `showVideoTitle` and `showOutsidePlaylist`. 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| showInfoCard | boolean/string | false | You can set with three possible value. [Learn more](#Parametersvalues) |

## Parameters Values

`showInfoCard` can have three possible values.

**true/collapsed** : `infocard` will be in collapsed mode with `learn more` button to expand. Sample code
```html
`<div class="dm-player" 
    owners="suaradotcom"
    sort="relevance" 
    playerId="x4aj" 
    prevideoTitle="Here's a video for you"
    showinfocard="true" >
</div>
```

**semi** : `infocard` will show some of the vide information. But The desciption of the video will be in collapsed mode.`learn more` button will exapnd the `infocard` showing the desciption of the video. Sample code
```html
`<div class="dm-player"
    owners="suaradotcom"
    sort="relevance"
    playerId="x4aj"
    prevideoTitle="Here's a video for you"
    showinfocard="semi">
</div>
```

**snippet** : This is special feature of the `infocard`. Player will be in collapsed mode. The snippets of information the video will show in the `infocard`. You can click on the `infocard` to expand player and change the infocard value to `collapsed`. Sample code
```html
`<div class="dm-player"
    owners="suaradotcom"
    sort="relevance"
    playerId="x7n9s"
    showinfocard="snippet">
</div>
```
> You must set player settings to `autostart:off` from [Partner's HQ](https://www.dailymotion.com/partner/embed/players) in order to use the infocard with `snippet`.

### Example Link
- [Info card Playground](https://dmvs-apac.github.io/dynamic-preview/examples/info_card/index.html)

