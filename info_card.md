# Info Card

`Info Card` is a component of Dailymotion Custom Embed. It shows information about the current video such as video title, description etc. With the `showInfoCard` parameter you can activate `infocard` component The card will be added at bottom of the video player.
> `Info Card` is not compatible with `showVideoTitle` and `showOutsidePlaylist`. 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| showInfoCard | boolean/string | false | You can set with three possible value. [Learn more](#parameters-values) |

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

**semi** : `infocard` will show some of the video information. But the desciption of the video will be in collapsed mode.`learn more` button will expand the `infocard` showing the desciption of the video. Sample code
```html
`<div class="dm-player"
    owners="suaradotcom"
    sort="relevance"
    playerId="x4aj"
    prevideoTitle="Here's a video for you"
    showinfocard="semi">
</div>
```

**snippet** : This is a special feature of the `infocard`. Player will be hidden. The snippets of information of the video will show in the `infocard`. You can click on the `infocard` to expand player and change the infocard value to `collapsed`. Sample code
```html
`<div class="dm-player"
    owners="suaradotcom"
    sort="relevance"
    playerId="x7n9s"
    showinfocard="snippet">
</div>
```
> You must set player settings to `autostart:off` from [Partner's HQ](https://www.dailymotion.com/partner/embed/players) to use the `infocard` with `snippet`.

### Example Link
- [Info card Playground](https://dailymotion-pro-services.github.io/custom-embed-v2/examples/info_card/)

