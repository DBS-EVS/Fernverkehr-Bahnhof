import"https://unpkg.com/@workadventure/scripting-api-extra@^1";import{s as n,r as l,t as s,a as t,b as c,c as m,d as g,e as b}from"./sign_script.8d3deedd.js";import{p as e}from"./vars.9fab7bc5.js";const A=WA.room.website.get("sign1"),i=WA.room.website.get("sign2"),W=WA.room.website.get("sign3"),u=WA.room.website.get("sign4"),k=WA.room.website.get("sign5"),v=WA.room.website.get("sign6"),r=new Map([[A,s],[i,t],[W,c],[u,m],[k,g],[v,b]]);n(r);l(r);var p=void 0;function o(){p!==void 0&&(p.close(),p=void 0)}WA.room.onEnterZone("program1",()=>{p=WA.ui.openPopup("popUpProgram1",e,[{label:"KIRA Entwicklung",callback:a=>{WA.nav.openTab(WA.state.program1_1)}},{label:"Spotti vs. KIRA",callback:a=>{WA.nav.openTab(WA.state.program1_2)}},{label:"Schlie\xDFen",className:"error",callback:a=>{o()}}])});WA.room.onLeaveZone("program1",()=>{o()});WA.room.onEnterZone("program2",()=>{p=WA.ui.openPopup("popUpProgram2",e,[{label:"IRIS+ Kompendium",callback:a=>{WA.nav.openTab(WA.state.program2_1)}},{label:"IRIS+ Aufgaben",callback:a=>{WA.nav.openTab(WA.state.program2_2)}},{label:"Schlie\xDFen",className:"error",callback:a=>{o()}}])});WA.room.onLeaveZone("program2",()=>{o()});WA.room.onEnterZone("program3",()=>{p=WA.ui.openPopup("popUpProgram3",e,[{label:"Umleitungskan\xE4le",callback:a=>{WA.nav.openTab(WA.state.program3_1)}},{label:"Schlie\xDFen",className:"error",callback:a=>{o()}}])});WA.room.onLeaveZone("program3",()=>{o()});WA.room.onEnterZone("program4",()=>{p=WA.ui.openPopup("popUpProgram4",e,[{label:"PP-FZD Tipps",callback:a=>{WA.nav.openTab(WA.state.program4_1)}},{label:"ISTP Eingaben in Gro\xDFst\xF6rungen-",callback:a=>{WA.nav.openTab(WA.state.program4_2)}},{label:"Schlie\xDFen",className:"error",callback:a=>{o()}}])});WA.room.onLeaveZone("program4",()=>{o()});WA.room.onEnterZone("program5",()=>{p=WA.ui.openPopup("popUpProgram5",e,[{label:"Prompt",callback:a=>{WA.nav.openTab(WA.state.program5_2)}},{label:"Prozesse Aktuell",callback:a=>{WA.nav.openTab(WA.state.program5_3)}},{label:"KRWD",callback:a=>{WA.nav.openTab(WA.state.program5_1)}},{label:"Empfangsbest\xE4tigung Prozess",callback:a=>{WA.nav.openTab(WA.state.program5_4)}},{label:"Schlie\xDFen",className:"error",callback:a=>{o()}}])});WA.room.onLeaveZone("program5",()=>{o()});
