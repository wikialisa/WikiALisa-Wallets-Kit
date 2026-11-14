# Get Wallet Address

To get the current active address you can do it with:

```typescript
import { WikialisaWalletsKit } from "@wikialisa-master/WikiALisa-Wallets-Kit/sdk";

const {address} = await WikialisaWalletsKit.getAddress();
```

Keep in mind that if no active address is available this method will throw an error.
