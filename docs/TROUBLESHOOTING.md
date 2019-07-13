# Trouble Shooting 💥

While I was coding this theme I run into some problem so I decided to log them here:

## `Plugin gatsby-source-anchor returned an error Status code 504`

- **Reason**: This is not a problem of Gatsby or of the plugin, the issue relays on Anchor. It seems that those guys they frequently have their server down for some reason and therefore the `rss` is not available, then the whole application doesn't have the data to continue.
- **Solution**: I started to work in a caching implementation, but for the moment the only answer I can give you is to go for a coffe and come back when the servers of Anchor are Ok.

---

[Go Back to Home](../README.md)
