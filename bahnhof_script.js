import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track1Map, track2Map, track3Map, track4Map, track5Map, track6Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import {programMsg, urlProgram } from "./vars.js";

/***********************************************
 * Sign functions
 ***********************************************/
const sign1 =  WA.room.website.get("sign1");
const sign2 =  WA.room.website.get("sign2");
const sign3 =  WA.room.website.get("sign3");
const sign4 =  WA.room.website.get("sign4");
const sign5 =  WA.room.website.get("sign5");
const sign6 =  WA.room.website.get("sign6");

const signToTrackMap = new Map ([
    [sign1, track1Map],
    [sign2, track2Map],
    [sign3, track3Map],
    [sign4, track4Map],
    [sign5, track5Map],
    [sign6, track6Map]
]);

setTrackContent(signToTrackMap);
refreshSigns(signToTrackMap);

/***********************************************
 * Program pop up functions
 ***********************************************/
 
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
            label: "KIRA Entwicklung",
            callback: (popup => {
                WA.nav.openTab(WA.state.program1_1);
            })
        },
        {
            label: "Spotti vs. KIRA",
            callback: (popup => {
                WA.nav.openTab(WA.state.program1_2);
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



WA.room.onEnterZone("program2", () => {
	currentPopup = WA.ui.openPopup("popUpProgram2", programMsg, [
        {
            label: "IRIS+ Kompendium",
            callback: (popup => {
                WA.nav.openTab(WA.state.program2_1);
            })
        },
        {
            label: "IRIS+ Aufgaben",
            callback: (popup => {
                WA.nav.openTab(WA.state.program2_2);
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
WA.room.onLeaveZone("program2", () => {closePopUp()})


WA.room.onEnterZone("program3", () => {
	currentPopup= WA.ui.openPopup("popUpProgram3", programMsg, [
        {
            label: "Umleitungskanäle ",
            callback: (popup => {
                WA.nav.openTab(WA.state.program3_1);
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
WA.room.onLeaveZone("program3", () => {closePopUp()})

WA.room.onEnterZone("program4", () => {
	currentPopup = WA.ui.openPopup("popUpProgram4", programMsg, [
		{
            label: "PP-FZD Tipps",
            callback: (popup => {
                WA.nav.openTab(WA.state.program4_1);
            })
        },
		{
            label: "ISTP Eingaben in Großstörungen",
            callback: (popup => {
                WA.nav.openTab(WA.state.program4_2);
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
WA.room.onLeaveZone("program4", () => {closePopUp()})

WA.room.onEnterZone("program5", () => {
	currentPopup = WA.ui.openPopup("popUpProgram5", programMsg, [
		{
            label: "IMS",
            callback: (popup => {
                WA.nav.openTab(WA.state.program5_1);
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

WA.room.onLeaveZone("program5", () => {closePopUp()})