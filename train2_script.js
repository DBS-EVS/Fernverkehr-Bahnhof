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
            label: "Definition",
            callback: (popup => {
                WA.nav.openTab(WA.state.program1);
            })
        },
        {
            label: "Kurztest",
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


