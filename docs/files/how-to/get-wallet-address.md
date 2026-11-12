# Get Wallet Address

To get the current active address you can do it with:

```typescript
import { StellarWalletsKit } from "@wikialisa-master/WikiALisa-Wallets-Kit/sdk";

const {address} = await StellarWalletsKit.getAddress();
```

Keep in mind that if no active address is available this method will throw an error.
