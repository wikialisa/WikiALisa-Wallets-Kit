import "./app.css";
import preactLogo from "./assets/preact.svg";
import { SwkAppDarkTheme } from "@wikialisa-master/WikiALisa-Wallets-Kit";
import { WikialisaWalletsKit } from "@wikialisa-master/WikiALisa-Wallets-Kit/sdk";
import {
  activeAddress,
  activeModule,
} from "@wikialisa-master/WikiALisa-Wallets-Kit/state";
import { SwkButton } from "@wikialisa-master/WikiALisa-Wallets-Kit/components";
import { AlbedoModule } from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/albedo";
import { FreighterModule } from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/freighter";
import { HanaModule } from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/hana";
import { LedgerModule } from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/ledger";
import { LobstrModule } from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/lobstr";
import { RabetModule } from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/rabet";
import { TrezorModule } from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/trezor";
import { xBullModule } from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/xbull";
import { WalletConnectModule } from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/wallet-connect";

import {
  Account,
  Address,
  Asset,
  hash,
  Networks,
  Operation,
  Transaction,
  TransactionBuilder,
  xdr,
} from "@stellar/stellar-sdk";

WikialisaWalletsKit.init({
  theme: SwkAppDarkTheme,
  modules: [
    new AlbedoModule(),
    new FreighterModule(),
    new HanaModule(),
    new LedgerModule(),
    new LobstrModule(),
    new RabetModule(),
    new TrezorModule({
      appName: "Wikialisa Wallets Kit",
      appUrl: "http://localhost:5173",
      email: "test@email.com",
    }),
    new xBullModule(),
    new WalletConnectModule({
      projectId: "4e0b84f6ba6bedf7c7f041d919a9f039",
      metadata: {
        name: "Wikialisa Wallets Kit",
        description: "Add support to all Wikialisa Wallets with a single library",
        url: "http://localhost:5173",
        icons: [],
      },
    }),
  ],
});

async function authModal(): Promise<void> {
  try {
    const { address } = await WikialisaWalletsKit.authModal();
    console.log(`Address fetched: ${address}`);
  } catch (e) {
    console.error(e);
  }
}

async function signTransaction(): Promise<void> {
  const { address } = await WikialisaWalletsKit.getAddress();
  console.log("WikialisaWalletsKit::getAddress", address);
  const tx: Transaction = new TransactionBuilder(new Account(address, "-1"), {
    networkPassphrase: Networks.PUBLIC,
    fee: "0",
  })
    .setTimeout(0)
    .addOperation(
      Operation.manageData({
        name: "Hello",
        value: "World!",
      }),
    )
    .build();

  const { signedTxXdr } = await WikialisaWalletsKit.signTransaction(tx.toXdr(), {
    networkPassphrase: Networks.PUBLIC,
    address,
  });

  console.log("Signed Transaction:", signedTxXdr);
}

async function signMessage() {
  const { address } = await WikialisaWalletsKit.getAddress();
  console.log("WikialisaWalletsKit::getAddress", address);
  const { signedMessage } = await WikialisaWalletsKit.signMessage(
    "Hello, World!",
    {
      networkPassphrase: Networks.PUBLIC,
      address,
    },
  );
  console.log("Signed Message:", signedMessage);
}

async function signAuthEntry() {
  const { address } = await WikialisaWalletsKit.getAddress();
  console.log("WikialisaWalletsKit::getAddress", address);

  const authEntry = xdr.HashIdPreimage.envelopeTypeSorobanAuthorization(
    new xdr.HashIdPreimageSorobanAuthorization({
      networkId: hash(Networks.PUBLIC),
      nonce: xdr.Int64("2490954433969549058"),
      invocation: new xdr.SorobanAuthorizedInvocation({
        function: xdr.SorobanAuthorizedFunction
          .sorobanAuthorizedFunctionTypeContractFn(
            new xdr.InvokeContractArgs({
              contractAddress: new Address(
                Asset.native().contractId(Networks.PUBLIC),
              ).toScAddress(),
              functionName: "balance",
              args: [new Address(address).toScVal()],
            }),
          ),
        subInvocations: [],
      }),
      signatureExpirationLedger: 2953350,
    }),
  );

  const { signedAuthEntry } = await WikialisaWalletsKit.signAuthEntry(
    authEntry.toXdr("base64"),
    {
      networkPassphrase: Networks.PUBLIC,
      address,
    },
  );
  console.log("Signed Auth Entry:", signedAuthEntry);
}

export function App() {
  return (
    <>
      <img src="/vite-deno.svg" alt="Vite with Deno" />
      <div>
        <img src="/vite.svg" class="logo" alt="Vite logo" />
        <img src={preactLogo} class="logo preact" alt="Preact logo" />
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <div className="w-full flex justify-center items-center">
          <button style="margin-right: 2rem" onClick={authModal}>
            Connect Wallet
          </button>

          <SwkButton />
        </div>

        <p>
          Your selected wallet is: <br /> {activeModule.value?.productName}
        </p>
        <p>
          Your account is: <br /> {activeAddress.value &&
            `${activeAddress.value.slice(0, 4)}....${
              activeAddress.value.slice(-6)
            }`}
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 180px; margin: auto;">
        <button onClick={signTransaction}>
          Sign Transaction
        </button>

        <button onClick={signMessage}>
          Sign Message
        </button>

        <button onClick={signAuthEntry}>
          Sign Auth Entry
        </button>
      </div>
    </>
  );
}
