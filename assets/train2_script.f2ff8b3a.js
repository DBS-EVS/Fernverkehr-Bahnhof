import"https://unpkg.com/@workadventure/scripting-api-extra@^1";import{s as p,r as s,a}from"./sign_script.8d3deedd.js";import{p as t}from"./vars.a25a5230.js";const i=WA.room.website.get("sign2a"),c=WA.room.website.get("sign2b"),r=new Map([[i,a],[c,a]]);p(r);s(r);var o=void 0;function n(){o!==void 0&&(o.close(),o=void 0)}WA.room.onEnterZone("program1",()=>{o=WA.ui.openPopup("popUpProgram1",t,[{label:"Definition",callback:e=>{WA.nav.openTab(WA.state.program1)}},{label:"Kurztest",callback:e=>{WA.nav.openTab(WA.state.program2)}},{label:"Schlie\xDFen",className:"error",callback:e=>{n()}}])});WA.room.onLeaveZone("program1",()=>{n()});