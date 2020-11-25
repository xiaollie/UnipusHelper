import Vue from "vue";
// import * as CryptoJS from "crypto-js";

declare global {
    // const GM_getValue: (identifier: string, defaultValue: any) => string;
    // const GM_setValue: any;
    // const GM_setClipboard: any;
    // const GM_xmlhttpRequest: any;

    const Vue: typeof Vue;
    // const CryptoJS:typeof  CryptoJS

    // let PlaySound: Function;
    // const createSoundPlayer: Function;
    // const jwplayer: Function;
    // let soundfile: string;
    // let resPath: any;
    // let bufferingTimer: any;
    // // let unsafeWindow: any;

    const $: any; //todo types/jQuery
    const angular: any; //todo types/angular
    /**是否为扩展模式 */
    const CRX: boolean;
}
