import"https://unpkg.com/@workadventure/scripting-api-extra@^1";import{s as p,r as s,b as a}from"./sign_script.8d3deedd.js";import{p as t}from"./vars.a25a5230.js";const i=WA.room.website.get("sign3a"),c=WA.room.website.get("sign3b"),r=new Map([[i,a],[c,a]]);p(r);s(r);var e=void 0;function n(){e!==void 0&&(e.close(),e=void 0)}WA.room.onEnterZone("program1",()=>{e=WA.ui.openPopup("popUpProgram1",t,[{label:"Baureihen",callback:o=>{WA.nav.openTab(WA.state.program1)}},{label:"Kurztest Fahrzeugkunde",callback:o=>{WA.nav.openTab(WA.state.program2)}},{label:"Schlie\xDFen",className:"error",callback:o=>{n()}}])});WA.room.onLeaveZone("program1",()=>{n()});