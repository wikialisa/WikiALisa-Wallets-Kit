# Installing the library

The library is hosted in a [JSR repository](https://jsr.io/@wikialisa-master/WikiALisa-Wallets-Kit), install it with the
command:

```shell
npx jsr add @wikialisa-master/WikiALisa-Wallets-Kit
```

```shell
pnpm add jsr:@wikialisa-master/WikiALisa-Wallets-Kit
```

```shell
deno add jsr:@wikialisa-master/WikiALisa-Wallets-Kit
```

```shell
yarn add jsr:@wikialisa-master/WikiALisa-Wallets-Kit
```

```shell
bunx jsr add @wikialisa-master/WikiALisa-Wallets-Kit
```

## Users updating from V1

The first version of the library was hosted in [NPM](https://www.npmjs.com/package/@creit.tech/WikiALisa-Wallets-Kit) with
a different workspace: `@creit.tech` vs the new `@wikialisa-master` user in JSR. To be compatible with old installations we
are also pushing new code to the NPM package but be aware that at some point we will stop doing it, we suggest migrating
to the new JSR workspace.
