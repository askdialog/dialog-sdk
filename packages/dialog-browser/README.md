This is [Dialog](askdialog.com) official SDK for browser.

# Getting started

With npm:

`npm i @dialog-sdk/dialog-browser`

With yarn:

`yarn add @dialog-sdk/dialog-browser`

With pnpm:

`pnpm add @dialog-sdk/dialog-browser`

```js
import { Analytics } from '@dialog-sdk/dialog-browser';

const analytics = new Analytics('your-public-api-key'); // you can find your public API key in your organization settings
```

# Using the SDK

We recommend calling our SDK as soon as you are aware of your user public wallet address during login.

```js
analytics.identify({
  walletAddress: '0x000000000000000', // your user public wallet address
  chainId: '0x1', // the EVM chain id on which your user signed in
});
```

To also be able to track already connected user, you should call the `identify` method on each page load.

# Questions and Feedback

If you have any questions, issues, or feedback, please file an issue on [GitHub](https://github.com/askdialog/dialog-sdk/issues), or send us an [email](mailto:contact@askdialog.com).
