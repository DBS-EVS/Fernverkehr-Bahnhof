import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track6Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite, openPopUpOkOnly, closePopUp } from "./popUp_script.js";
import {programMsg, urlProgram } from "./vars.js";

const sign6a = await WA.room.website.get("sign6a");
const sign6b = await WA.room.website.get("sign6b");

const signToTrackMap = new Map ([
        [sign6a, track6Map],
        [sign6b, track6Map]
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


