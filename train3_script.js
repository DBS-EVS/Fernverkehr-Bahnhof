import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track3Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import {programMsg} from "./vars.js";

const sign3a =  WA.room.website.get("sign3a");
const sign3b =  WA.room.website.get("sign3b");

    const signToTrackMap = new Map ([
        [sign3a, track3Map],
        [sign3b, track3Map]
    ]);

setTrackContent(signToTrackMap);
refreshSigns(signToTrackMap);

var currentPopup = undefined;
 function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
 
WA.room.onEnterZone("program1", () => {
	currentPopup = WA.ui.openPopup("popUpProgram1", programMsg, [
        {
            label: "Baureihen",
            callback: (popup => {
                WA.nav.openTab(WA.state.program1);
            })
        },
        {
            label: "Kurztest Fahrzeugkunde",
            callback: (popup => {
                WA.nav.openTab(WA.state.program2);
            })
        },
		{
            label: "Schließen",
			className: "error",
            callback: (popup => {
                closePopUp();
            })
        }
    ]);
});


WA.room.onLeaveZone("program1", () =>{
    closePopUp();

})

export {};


