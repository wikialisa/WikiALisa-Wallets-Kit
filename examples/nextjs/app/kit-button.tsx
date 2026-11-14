import { useEffect } from "react";
import { WikialisaWalletsKit } from "@wikialisa-master/WikiALisa-Wallets-Kit/sdk";
import { SwkAppDarkTheme } from "@wikialisa-master/WikiALisa-Wallets-Kit/types";
import { defaultModules } from "@wikialisa-master/WikiALisa-Wallets-Kit/modules/utils";
import { KitEventType } from "@wikialisa-master/WikiALisa-Wallets-Kit/types";
import { ButtonMode } from "@wikialisa-master/WikiALisa-Wallets-Kit/components";

WikialisaWalletsKit.init({
  theme: SwkAppDarkTheme,
  modules: defaultModules(),
});

export default function KitButton() {
  useEffect(() => {
    const buttonWrapper = document.querySelector("#buttonWrapper");

    WikialisaWalletsKit.createButton(buttonWrapper, {
      mode: ButtonMode.free,
      classes:
        "flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]",
    });

    const sub1 = WikialisaWalletsKit.on(KitEventType.STATE_UPDATED, (event) => {
      console.log("STATE_UPDATED", event);
    });

    const sub2 = WikialisaWalletsKit.on(KitEventType.DISCONNECT, () => {
      console.log("DISCONNECT");
    });

    return () => {
      sub1();
      sub2();
    };
  });

  return <div id="buttonWrapper"></div>;
}
