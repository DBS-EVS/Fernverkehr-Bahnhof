import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track2Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import {programMsg} from "./vars.js";

const sign2a =  WA.room.website.get("sign2a");
const sign2b =  WA.room.website.get("sign2b");

    const signToTrackMap = new Map ([
        [sign2a, track2Map],
        [sign2b, track2Map]
    ]);

setTrackContent(signToTrackMap);
refreshSigns(signToTrackMap);

const zone2PopUpMap = new Map ([
    ["program1", "popUpProgram1"]
]);

for (const progZone of zone2PopUpMap.keys()) {
    WA.room.onEnterZone(progZone, () => {openPopupWithWebsiteYesNo(zone2PopUpMap.get(progZone), programMsg, WA.state.program)})
    WA.room.onLeaveZone(progZone, () => {closePopupWithWebsite()})
}

export {};


