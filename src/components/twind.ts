import {
  css,
  cssom,
  defineConfig,
  injectGlobal as injectGlobal$,
  keyframes as keyframes$,
  twind,
  tx as tx$,
  virtual,
} from "@twind/core";
export { cx } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind/base";

const config = defineConfig({
  preflight: false,
  hash: true,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "var(--swk-background)",
        "background-secondary": "var(--swk-background-secondary)",
        "foreground-strong": "var(--swk-foreground-strong)",
        "foreground": "var(--swk-foreground)",
        "foreground-secondary": "var(--swk-foreground-secondary)",
        "primary": "var(--swk-primary)",
        "primary-foreground": "var(--swk-primary-foreground)",
        "transparent": "var(--swk-transparent)",
        "lighter": "var(--swk-lighter)",
        "light": "var(--swk-light)",
        "light-gray": "var(--swk-light-gray)",
        "gray": "var(--swk-gray)",
        "danger": "var(--swk-danger)",
        "border": "var(--swk-border)",
      },
      boxShadow: {
        default: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        default: "var(--swk-border-radius)",
      },
      fontFamily: {
        default: "var(--swk-font-family)",
      },
    },
  },
  presets: [presetAutoprefix(), presetTailwind({ disablePreflight: true })],
});

// @ts-expect-error - We don't care about the current error
const _tw = twind(config, typeof document === "undefined" ? virtual() : cssom("style[data-library]"));
export const tw = (text: string): string => _tw(`!(${text})`);
export const tx = tx$.bind(_tw);
export const injectGlobal = injectGlobal$.bind(_tw);
export const keyframes = keyframes$.bind(_tw);

export const reset: string = css`
  .WikiALisa-Wallets-Kit *,
  .WikiALisa-Wallets-Kit ::after,
  .WikiALisa-Wallets-Kit ::before,
  .WikiALisa-Wallets-Kit ::backdrop,
  .WikiALisa-Wallets-Kit ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  .WikiALisa-Wallets-Kit :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family:
      ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-feature-settings: normal;
    font-variation-settings: normal;
    -webkit-tap-highlight-color: transparent;
  }
  .WikiALisa-Wallets-Kit hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  .WikiALisa-Wallets-Kit abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  .WikiALisa-Wallets-Kit h1,
  .WikiALisa-Wallets-Kit h2,
  .WikiALisa-Wallets-Kit h3,
  .WikiALisa-Wallets-Kit h4,
  .WikiALisa-Wallets-Kit h5,
  .WikiALisa-Wallets-Kit h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  .WikiALisa-Wallets-Kit a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  .WikiALisa-Wallets-Kit b,
  .WikiALisa-Wallets-Kit strong {
    font-weight: bolder;
  }
  .WikiALisa-Wallets-Kit code,
  .WikiALisa-Wallets-Kit kbd,
  .WikiALisa-Wallets-Kit samp,
  .WikiALisa-Wallets-Kit pre {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
  }
  .WikiALisa-Wallets-Kit small {
    font-size: 80%;
  }
  .WikiALisa-Wallets-Kit sub,
  .WikiALisa-Wallets-Kit sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  .WikiALisa-Wallets-Kit sub {
    bottom: -0.25em;
  }
  .WikiALisa-Wallets-Kit sup {
    top: -0.5em;
  }
  .WikiALisa-Wallets-Kit table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  .WikiALisa-Wallets-Kit :-moz-focusring {
    outline: auto;
  }
  .WikiALisa-Wallets-Kit progress {
    vertical-align: baseline;
  }
  .WikiALisa-Wallets-Kit summary {
    display: list-item;
  }
  .WikiALisa-Wallets-Kit ol,
  .WikiALisa-Wallets-Kit ul,
  .WikiALisa-Wallets-Kit menu {
    list-style: none;
  }
  .WikiALisa-Wallets-Kit img,
  .WikiALisa-Wallets-Kit svg,
  .WikiALisa-Wallets-Kit video,
  .WikiALisa-Wallets-Kit canvas,
  .WikiALisa-Wallets-Kit audio,
  .WikiALisa-Wallets-Kit iframe,
  .WikiALisa-Wallets-Kit embed,
  .WikiALisa-Wallets-Kit object {
    display: block;
    vertical-align: middle;
  }
  .WikiALisa-Wallets-Kit img,
  .WikiALisa-Wallets-Kit video {
    max-width: 100%;
    height: auto;
  }
  .WikiALisa-Wallets-Kit button,
  .WikiALisa-Wallets-Kit input,
  .WikiALisa-Wallets-Kit select,
  .WikiALisa-Wallets-Kit optgroup,
  .WikiALisa-Wallets-Kit textarea,
  .WikiALisa-Wallets-Kit ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  .WikiALisa-Wallets-Kit :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  .WikiALisa-Wallets-Kit :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  .WikiALisa-Wallets-Kit ::file-selector-button {
    margin-inline-end: 4px;
  }
  .WikiALisa-Wallets-Kit ::placeholder {
    opacity: 1;
  }
  .WikiALisa-Wallets-Kit textarea {
    resize: vertical;
  }
  .WikiALisa-Wallets-Kit ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  .WikiALisa-Wallets-Kit ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  .WikiALisa-Wallets-Kit ::-webkit-datetime-edit {
    display: inline-flex;
  }
  .WikiALisa-Wallets-Kit ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  .WikiALisa-Wallets-Kit ::-webkit-datetime-edit,
  .WikiALisa-Wallets-Kit ::-webkit-datetime-edit-year-field,
  .WikiALisa-Wallets-Kit ::-webkit-datetime-edit-month-field,
  .WikiALisa-Wallets-Kit ::-webkit-datetime-edit-day-field,
  .WikiALisa-Wallets-Kit ::-webkit-datetime-edit-hour-field,
  .WikiALisa-Wallets-Kit ::-webkit-datetime-edit-minute-field,
  .WikiALisa-Wallets-Kit ::-webkit-datetime-edit-second-field,
  .WikiALisa-Wallets-Kit ::-webkit-datetime-edit-millisecond-field,
  .WikiALisa-Wallets-Kit ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  .WikiALisa-Wallets-Kit ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  .WikiALisa-Wallets-Kit :-moz-ui-invalid {
    box-shadow: none;
  }
  .WikiALisa-Wallets-Kit button,
  .WikiALisa-Wallets-Kit input:where([type="button"], [type="reset"], [type="submit"]),
  .WikiALisa-Wallets-Kit ::file-selector-button {
    appearance: button;
  }
  .WikiALisa-Wallets-Kit ::-webkit-inner-spin-button,
  .WikiALisa-Wallets-Kit ::-webkit-outer-spin-button {
    height: auto;
  }
  .WikiALisa-Wallets-Kit [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
`;
