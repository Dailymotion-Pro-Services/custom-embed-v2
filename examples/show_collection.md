# `ShowCollection` :

`showCollection` is a component of Dailymotion Custom Embed. It will show the video recommendations playlist outside of the player. It can be set as `right` or `bottom` based on the position of the playlist. By default, the playlist is inside the video player.
> `showCollection` is not compatible with `showVideoTitle`

| Name | Type | Description |
| --- | --- | --- | --- |
| showCollection | string | You can set `right` or `bottom` |

### Embed Example

```html
<div class="dm-player" 
    owners="suaradotcom"
    sort="relevance" 
    playerId="x4aj"
    ShowCollection="right" >
</div>
```

### Style Adjustment :

There are predefined [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) which can be adjusted to change the color of the playlist. [Learn More](#embed-link)

**--dm-player-info-bg** : To change playlist background color.
**--dm-player-info-color** : To change playlist's font color.
**--dm__playlist-item-bg**: To change list item background color inside the playlist.
**--dm__playlist-active-item-bg**: To change active list item color inside the playlist.

### Example Link
- [ShowCollection Playground](https://dmvs-apac.github.io/custom-embed-v2/examples/show_collection/)


