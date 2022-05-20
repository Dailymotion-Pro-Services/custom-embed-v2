# Extra Features For Specific Use Cases

We developed a few extra parameters for video embed contexts requiring bespoke features. 

### Parameters

| Name | Type | Description |
| :---: | :---: | --- |
| closeButton | boolean | This is a custom buttonn that override close button from the Dailymotion player to destroy the player instead of hide it. |
| showAdOnly | boolean | This is if partners want only to show video if there is an ad. If `no-ad` the player will be destroyed and never show it to the viewer |
| hideButton | boolean | This is a custom button for hidding the PiP Player instead of close it permanently. so the visitor can unhide it when they want to watch it again. This will override the original controls. |
| showHideButtonAfter | number | This is a custom param that controlling how long the hide button will show when the ad is exist. It's based on a number, you can define any seconds. By default, if you don't put any number it will use default 5 seconds. |

If you don't want to use this, you just don't need to use the parameters inside the container.

**Embed Example :**

You can use it with public features from the main Custom Embed documentation, this is just an example on how to use it 
```html
<div class="dm-player"
	closeButton="true"
	showAdOnly="true"
	hideButton="true"
	showHideButtonAfter="5"
/>
```
