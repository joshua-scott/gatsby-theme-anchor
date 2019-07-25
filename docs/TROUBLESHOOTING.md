# Trouble Shooting 💥

While I was coding this theme I run into some problem so I decided to log them here:

## `Plugin gatsby-source-anchor returned an error Status code 504`

- **Reason**: This is not a problem of Gatsby or of the plugin, the issue relays on Anchor. It seems that those guys they frequently have their server down for some reason and therefore the `rss` is not available, then the whole application doesn't have the data to continue.
- **Solution**: I started to work in a caching implementation, but for the moment the only answer I can give you is to go for a coffe and come back when the servers of Anchor are Ok.

## `Cannot find module '../lib/utils/unsupported.js' when running demo`

```plain
$ npm run develop
internal/modules/cjs/loader.js:583
    throw err;
    ^

Error: Cannot find module '../lib/utils/unsupported.js'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)
    at Function.Module._load (internal/modules/cjs/loader.js:507:25)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (internal/modules/cjs/helpers.js:20:18)
    at /usr/local/lib/node_modules/npm/bin/npm-cli.js:19:21
    at Object.<anonymous> (/usr/local/lib/node_modules/npm/bin/npm-cli.js:152:3)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)

```

- **Reason**: It seems that your global npm module may be corrupted.
- **Solution**: Delete the whole folder and re-install node using brew.

```bash
> sudo rm -rf /usr/local/lib/node_modules/npm
> brew reinstall node
```

---

[Go Back to Home](../README.md)
