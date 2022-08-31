import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track3Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import {programMsg, urlProgram } from "./vars.js";

const sign3a = await WA.room.website.get("sign3a");
const sign3b = await WA.room.website.get("sign3b");

    const signToTrackMap = new Map ([
        [sign3a, track3Map],
        [sign3b, track3Map]
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


