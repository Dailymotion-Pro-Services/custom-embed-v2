# Hidden Features For Specific Partners

We have hidden features requested from partners

### Parameters

| Name | Type | Description |
| :---: | :---: | --- |
| closeButton | boolean | This is a custom buttonn that override close button from the Dailymotion player to destroy the player instead of hide it. |
| showAdOnly | boolean | This is if partners want only to show video if there is an ad. If `no-ad` the player will be destroyed and never show it to the viewer |
| hideButton | boolean | This is a custom button for hidding the PiP Player instead of close it permanently. so the visitor can unhide it when they want to watch it again. This will override the original controls. |

If you don't want to use this, you just don't need to use the parameters inside the container.

**Embed Example :**

You can use it with public features, this is just example how to use it 
```html
<div class="dm-player"
	closeButton="true"
	showAdOnly="true"
	hideButton="true"
/>
```