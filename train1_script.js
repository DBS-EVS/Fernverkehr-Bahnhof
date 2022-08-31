import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track1Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import {programMsg, urlProgram } from "./vars.js";

const sign1a = await WA.room.website.get("sign1a");
const sign1b = await WA.room.website.get("sign1b");

const signToTrackMap = new Map ([
	[sign1a, track1Map],
    [sign1b, track1Map]
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