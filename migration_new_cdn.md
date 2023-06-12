# Migration to a New CDN

Finally we can announce the migration process of our storage server and CDN to a new and improved CDN for increased reliability. As part of this migration, we will be sun-setting the old server on July 31st, 2023. To ensure a smooth transition, we kindly request that all partners migrate to our new official URL by updating any old URLs to the new one. Here is the URL you need to change with the new one.

Here's the URL change you need to make:

Old CDN URL Endpoint

`https://srvr.dmvs-apac.com/v2/dm-ce.min.js`


**New CDN URL Endpoint**

`https://statics.dmcdn.net/c/dm-ce.min.js`

To ensure a successful migration, we recommend testing the new URL before fully committing to the change. You can do this by updating a small subset of your URLs to the new endpoint and monitoring their performance and reliability. Once you're confident that the new URL is working well, proceed with migrating all of your URLs.


Sample code for updating the URL in your HTML file:

```html
<!-- Old URL -->
<script src="https://srvr.dmvs-apac.com/v2/dm-ce.min.js"></script>

<!-- New URL -->
<script src="https://statics.dmcdn.net/c/dm-ce.min.js"></script>
```

We understand that this process may take some time, and we want to assure you that we will be migrating our products one by one to minimise any disruptions. For now, we have successfully migrated our Custom Embed v2 and will be working on migrating other products in the near future.

If you are still using our Custom embed v1, now is the perfect time to migrate to v2. You can visit our documentation on how to do it here at [migration custom-embed from v1 to v2](https://dmvs-apac.github.io/custom-embed-v2/migration_v1_v2)
