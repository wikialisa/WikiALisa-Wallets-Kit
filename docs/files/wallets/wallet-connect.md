# Wallet Connect

To import and include the module you can do it like this:

```typescript
import { StellarWalletsKit } from '@wikialisa-master/WikiALisa-Wallets-Kit/sdk'
import { defaultModules } from '@wikialisa-master/WikiALisa-Wallets-Kit/modules/utils';
import { WalletConnectModule } from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/wallet-connect";

StellarWalletsKit.init({
  modules: [
    ...defaultModules(),
    new WalletConnectModule({
      projectId: "YOUR_PROJECT_ID",
      metadata: {
        name: "YOUR_APP_NAME",
        description: "DESCRIPTION_OF_YOUR_APP",
        icons: [ "LOGO_OF_YOUR_APP" ],
        url: 'YOUR_APP_URL',
      }
    }),
  ],
});
```

## Required parameters

The WalletConnect library requires some parameters to be define before it can be loaded, here are the parameter your can
provide:

```typescript
import type { SignClientTypes } from "@walletconnect/types";
import type { CreateAppKit } from "@reown/appkit/core";

export type TWalletConnectModuleParams = {
  projectId: string;
  metadata: Required<CreateAppKit>["metadata"];
  allowedChains?: WalletConnectTargetChain[];
  signClientOptions?: SignClientTypes.Options;
  appKitOptions?: CreateAppKit;
};

export enum WalletConnectTargetChain {
  PUBLIC = "stellar:pubnet",
  TESTNET = "stellar:testnet",
}
```  
