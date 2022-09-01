import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track5Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import {programMsg} from "./vars.js";

const sign5a =  WA.room.website.get("sign5a");
const sign5b =  WA.room.website.get("sign5b");

    const signToTrackMap = new Map ([
        [sign5a, track5Map],
        [sign5b, track5Map]
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

