# DM-Video-Collection :

DM-Video-Collection is a javascript plugin to show video recommendations playlist outside of the player with [PES - Player Embed Script](https://developers.dailymotion.com/player/#player-embed-script) and [PLS - Player Library Script](https://developers.dailymotion.com/player/#player-library-script).  It can be set as `right`( [To set right position](#to-set-the-right-position-) ) or `bottom` based on the position of the playlist. By default, it is set to `bottom`.

## With PES :

This plugin works with player embed script.

### Embed Example

```html
<!-- PES script -->
<script src="https://geo.dailymotion.com/player.js" data-video="x8kgkea" id="player-id"></script>

<!-- DM-Video-Collection script -->
<script  
    src="https://staging.dmvs-apac.com/DM-Video-collection/dm-video-collection.js" 
    data-pes-script-id="player-id"
    data-video-id="x8kgkea"
    data-owners="australiancommunitymedia"
    data-num-videos="10">
</script>

```
### Attributes: 

To pass the information for PES, use `data-**` attributes of the DM-Video-Collection script.

| Attribute | Type | Description |
| --- | --- | --- |
| <b>data-pes-script-id</b> <br /> `Mandatory` | string | To pass DOM id of PES script |
| <b>data-video-id</b>  `Mandatory` <br />| string | To add video id. This helps to fetch [relevant videos from API](#relevant-video-).|
| <b>data-tags</b> <br />| string | To add tags to fetch [relevant videos from API](#relevant-video-). To put more than 1 you can separate by ","|
| <b>data-owners</b> <br /> `Mandatory` | string | The username of the channels from which relevant video will be fetched. To put more than 1, you can separate by ","|
| <b>data-num-videos</b>| number | To set number of videos to fetch. By default, it is 7`|
| <b>data-position</b>| `bottom` or `right` | To set position of the video collection.|

### Example Link
- [Video Collection for PES](https://staging.dmvs-apac.com/DM-Video-collection/lab/pes-demo.html)


## With PLS :

The plugin can work also for the Player Library Script.

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

To Pass the information for PLS, use the `dm-render-collection` event along with the below parameters.

| Parameter | Type | Description |
| --- | --- | --- |
| <b>player</b> <br /> `Mandatory` | Player Object | To pass Player Object for PLS script |
| <b>videoId</b> <br /> `Mandatory` | string | To add video id. This helps to fetch [relevant videos from API](#relevant-video-).|
| <b>tags</b> | string | To add tags to fetch [relevant videos from API](#relevant-video-). To put more than 1, you can separate by ","|
| <b>owners</b> <br /> `Mandatory` | string | The username of the channels from which relevant video will be fetched. To put more than 1, you can separate by ","|
| <b>numOfVideos</b>| number | To set number videos to fetch. By default, it's 7`|
| <b>position</b>| `buttom` or `right` | To set position of the video collection.|

### Example Link
- [Video Collection for PLS](https://staging.dmvs-apac.com/DM-Video-collection/lab/pls-demo.html)

## To set the `right` position :

As you can see in the above example of [Video Collection for PLS](https://staging.dmvs-apac.com/DM-Video-collection/lab/pls-demo.html), the video collection is set to the rigt position. Here are the required steps to implement it:
- Wrap the player ( player script for PES/ player holder div for PLS ) with `dm-collection-right-side` class div.
- use [Attributes](#attributes) or [Parameters](#parameters) with `right` value.
    
### Embed Example : 
```html
<div class="`dm-collection-right-side">
    <!-- PES script -->
    <script src="https://geo.dailymotion.com/player.js" data-video="x8kgkea" id="player-id"></script>
</div>

<!-- DM-Video-Collection script -->
<script  
    src="https://staging.dmvs-apac.com/DM-Video-collection/dm-video-collection.js" 
    data-pes-script-id="player-id"
    data-tags="viral"
    data-owners="australiancommunitymedia"
    data-num-videos="10"
    data-position="right"
    >
</script>
```    

## Relevant Video:
To fetch the relevant video from [API](https://developers.dailymotion.com/api/#video-filters) DM-Video-Collection first checks the tags attribute( for PES ) or params( for PLS ). If tags are not given, the plugin gets tags with the given video id from [API](https://developers.dailymotion.com/api/#video-fields). Taking the **first tag** from the tags array the plugin fetches relevant videos.

### Example Link
- [Video Collection for PES with auto tag](https://staging.dmvs-apac.com/DM-Video-collection/lab/pes-demo-auto.html)

## Style Adjustment :

There are predefined [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) which can be adjusted to change the color of the playlist. [Learn More](#embed-link)

**--dm-collection-bg** : To change the video collection background color.

**--dm-collection-color** : To change the video collection's font color.

**--dm-collection-item-bg**: To change the list item background color inside the video collection.

**--dm-collection-active-item-bg**: To change the active list item color inside the video collection.


