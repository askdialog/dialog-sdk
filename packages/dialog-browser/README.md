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

# Adding traits

Traits are information about a user that you can include in an identify call.
You can add the following common traits to your identify call:

- email
- firstName
- lastName
- discordUsername
- telegramUsername
- twitterProfileUrl
- phone
- createdAt

You can also add a custom trait but for now we only support numeric and string values.

```javascript
analytics.identify({
  walletAddress: '0x000000000000000', // your user public wallet address
  chainId: '0x1', // the EVM chain id on which your user signed in
  traits: {
    email: 'yourcustomer@mail.com',
    firstName: 'Your',
    lastName: 'Customer',
    aCustomNumericTrait: 4,
    aCustomStringTrait: 'a string',
  },
});
```

Once you've sent a custom trait, you must respect the same type for the value in your following `identify` calls.

After the above identify call, you cannot send the following call:

```javascript
// ❌❌❌
analytics.identify({
  walletAddress: '0x000000000000000', // your user public wallet address
  chainId: '0x1', // the EVM chain id on which your user signed in
  traits: {
    aCustomNumericTrait: 'a string in a numerical trait',
  },
});
```

# Questions and Feedback

If you have any questions, issues, or feedback, please file an issue on [GitHub](https://github.com/askdialog/dialog-sdk/issues), or send us an [email](mailto:contact@askdialog.com).
