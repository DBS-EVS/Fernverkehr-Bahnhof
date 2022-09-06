import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track4Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import {programMsg} from "./vars.js";

const sign4a =  WA.room.website.get("sign4a");
const sign4b =  WA.room.website.get("sign4b");

    const signToTrackMap = new Map ([
        [sign4a, track4Map],
        [sign4b, track4Map]
    ]);

setTrackContent(signToTrackMap);
refreshSigns(signToTrackMap);


export {};


