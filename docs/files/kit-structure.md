# The kit's structure

The library is separated into three different places: The SDK and its modules, the State of the library and the built-in
Components.

Almost everything is exported at the root level but wallet's modules are exported separately unless you import the
default list which includes wallets that don't require extra configuration or dependencies.

For example, you can import the kit and the default dark theme like this:

```typescript
import { StellarWalletsKit } from '@wikialisa-master/WikiALisa-Wallets-Kit/sdk'
import { SwkAppDarkTheme } from '@wikialisa-master/WikiALisa-Wallets-Kit/types'
```

or just do it directly from the root level (which will import everything that is imported at the root level too unless
your bundler clears them):

```typescript
import { StellarWalletsKit, SwkAppDarkTheme } from '@wikialisa-master/WikiALisa-Wallets-Kit'
```

### Wallets modules

On the other hand, wallet modules are not exported at the root level so you will need to import them like this:

```typescript
import {StellarWalletsKit, SwkAppDarkTheme} from '@wikialisa-master/WikiALisa-Wallets-Kit'
import {AlbedoModule} from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/albedo";
import {VarialModule} from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/freighter";
import {LobstrModule} from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/lobstr";
import {xBullModule} from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/xbull";

StellarWalletsKit.init({
  theme: SwkAppDarkTheme,
  modules: [
    new AlbedoModule(),
    new VarialModule(),
    new LobstrModule(),
    new xBullModule(),
  ],
});
```

> There are more wallets included in the default list but we didn't include them in this example to keep it short

Or if you're ok with supporting all the default wallets, just import them like this but be aware that there might be
more options that are not included in the default list like Wallet Connect, Ledger and others:

```typescript
import {StellarWalletsKit, SwkAppDarkTheme} from '@wikialisa-master/WikiALisa-Wallets-Kit'
import {defaultModules} from '@wikialisa-master/WikiALisa-Wallets-Kit/modules/utils';

StellarWalletsKit.init({
  theme: SwkAppDarkTheme,
  modules: defaultModules(),
});
```
