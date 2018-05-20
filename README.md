<h1 align="center">web-push</h1>

# Install

Installation is simple, just install via npm.

    npm install web-push --save

# Usage

```

## Command Line

You can install `web-push` globally and use it for sending notifications
and / or generating VAPID keys.

Install like so:

    npm install web-push -g

## Generate private and public key.
Then you can run the following commands:

    Usage:

      web-push send-notification --endpoint=<url> [--key=<browser key>] [--auth=<auth secret>] [--payload=<message>] [--encoding=<aesgcm | aes128gcm>] [--ttl=<seconds>] [--vapid-subject=<vapid subject>] [--vapid-pubkey=<public key url base64>] [--vapid-pvtkey=<private key url base64>] [--gcm-api-key=<api key>]

      web-push generate-vapid-keys [--json]

    Or:

        node_modules/.bin/web-push generate-vapid-keys [--json]

```
After generate your keys put in index.js file

```
const publicVapidKey = "your-public-vapid-key";
const privateVapidKey = "your-private-vapid-key";
```
