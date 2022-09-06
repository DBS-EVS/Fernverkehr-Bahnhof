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
            label: "LiZu ICE 826",
            callback: (popup => {
                WA.nav.openTab(WA.state.program2);
            })
        },
        {
            label: "LiZu ICE 902",
            callback: (popup => {
                WA.nav.openTab(WA.state.program1);
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


