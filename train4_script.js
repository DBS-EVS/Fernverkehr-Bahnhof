import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track4Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import {programMsg, urlProgram } from "./vars.js";

const sign4a = await WA.room.website.get("sign4a");
const sign4b = await WA.room.website.get("sign4b");

    const signToTrackMap = new Map ([
        [sign4a, track4Map],
        [sign4b, track4Map]
    ]);

setTrackContent(signToTrackMap);
refreshSigns(signToTrackMap);

const zone2PopUpMap = new Map ([
    ["program1", "popUpProgram1"]
]);

for (const progZone of zone2PopUpMap.keys()) {
    WA.room.onEnterZone(progZone, () => {openPopupWithWebsiteYesNo(zone2PopUpMap.get(progZone), programMsg, urlProgram)})
    WA.room.onLeaveZone(progZone, () => {closePopupWithWebsite()})
}

export {};


