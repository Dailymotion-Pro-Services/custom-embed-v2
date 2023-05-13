# DM-Video-Collection :

DM-Video-Collection is a javascript plugin to show video recommendations playlist outside of the player with [PES](https://developers.dailymotion.com/player/#player-embed-script) and [https://developers.dailymotion.com/player/#player-library-script].  It can be set as `right` or `bottom` based on the position of the playlist.


| Name | Type | Description |
| --- | --- | --- |
| showCollection | string | You can set `right` or `bottom` |


## With PES :

This plugin can work with player embed script.

### Embed Example

```html
<!-- PES script -->
<script src="https://geo.dailymotion.com/player.js" data-video="x8kgkea" id="player-id"></script>

<!-- DM-Video-Collection script -->
<script  
    src="https://staging.dmvs-apac.com/DM-Video-collection/dm-video-collection.js" 
    data-pes-script-id="player-id"
    data-tags="viral"
    data-owners="australiancommunitymedia"
    data-num-videos="10">
</script>

```
### Attributes: 

To Pass the information for PES use `data-**` attributes of the DM-Video-Collection script.

| Attribute | Type | Description |
| --- | --- | --- |
| <b>data-pes-script-id</b> <br /> `Mandatory` | string | To pass DOM id of PES script |
| <b>data-tags</b> <br /> `Mandatory` | string | To add tags to fetch relevant videos from API. To put more than 1 you can separate by ","|
| <b>data-owners</b> <br /> `Mandatory` | string | To username of the channels from which relevant video will be fetch. To put more than 1 you can separate by ","|
| <b>data-num-videos</b>| number | To set number videos to fetch. By default it's 7`|


### Example Link
- [Video Collection for PES](https://staging.dmvs-apac.com/DM-Video-collection/lab/pes-demo.html)


## With PLS :

The plugin can work also for the PLS script.

### Embed Example

```html
<!-- PLS script -->
<script src="https://geo.dailymotion.com/libs/player.js"></script>
<!-- DM-Video-Collection script -->
<script src="https://staging.dmvs-apac.com/DM-Video-collection/dm-video-collection.js" ></script>

<!-- Player holder -->
<div id="my-dailymotion-player">My Player placeholder</div>

<!-- createPlayer for PLS and event to render DM-Video-Collection -->
<script>
    dailymotion
    .createPlayer('my-dailymotion-player', {
        video: 'x84sh87',
    })
    .then((player) => {
        document.dispatchEvent(new CustomEvent('dm-render-collection',{
            detail: {
                player : player,
                tags: "viral",
                owners: "australiancommunitymedia",
                numOfVideos: 10
            }
        }));
    })
    .catch((e) => console.error(e));
</script>

```
### Parameters: 

To Pass the information for PLS use the `dm-render-collection` event along with the below parameters.

| Parameter | Type | Description |
| --- | --- | --- |
| <b>player</b> <br /> `Mandatory` | Player Object | To pass Player Object for PLS script |
| <b>tags</b> <br /> `Mandatory` | string | To add tags to fetch relevant videos from API. To put more than 1 you can separate by ","|
| <b>owners</b> <br /> `Mandatory` | string | To username of the channels from which relevant video will be fetch. To put more than 1 you can separate by ","|
| <b>numOfVideos</b>| number | To set number videos to fetch. By default it's 7`|

### Example Link
- [Video Collection for PLS](https://staging.dmvs-apac.com/DM-Video-collection/lab/pls-demo.html)


### Style Adjustment :

There are predefined [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) which can be adjusted to change the color of the playlist. [Learn More](#embed-link)

**--dm-collection-bg** : To change the video collection background color.

**--dm-collection-color** : To change the video collection's font color.

**--dm-collection-item-bg**: To change the list item background color inside the video collection.

**--dm-collection-active-item-bg**: To change the active list item color inside the video collection.


