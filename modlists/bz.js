


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const working = [
  { name: "Attitude Indicator", url: "https://www.nexusmods.com/subnauticabelowzero/mods/191" },
  { name: "All Items 1x1", url: "https://github.com/MrPurple6411/MrPurple6411-Subnautica-Mods/releases/tag/3.26.2022" },
  { name: "Advanced Storage", url: "https://www.nexusmods.com/subnauticabelowzero/mods/86" },
  { name: "Advanced Inventory", url: "https://www.nexusmods.com/subnauticabelowzero/mods/84" },
  { name: "Autosort Lockers SML", url: "https://github.com/DaWrecka/Beta-Mods/tree/main/BelowZero" },
  { name: "Base Clocks", url: "https://www.nexusmods.com/subnauticabelowzero/mods/264" },
  { name: "Better Scanner Blips BZ", url: "" },
  { name: "Better Scanner Room", url: "https://github.com/Metious/BetterScannerRoom/releases" },
  { name: "Craftable Ion Cubes", url: "https://www.nexusmods.com/subnauticabelowzero/mods/151" },
  { name: "Custom Craft 2 (CC2)", url: "" },
  { name: "Custom Databoxes BZ", url: "https://github.com/Metious/MetiousSubnauticaMods/blob/master/README.md" },
  { name: "Customise Your Storage BZ", url: "https://github.com/DaWrecka/Beta-Mods/tree/main/BelowZero" },
  { name: "DAATQS", url: "https://belowzero.thunderstore.io/package/Desperationfighter/DAATQSBZ/" },
  { name: "Discord Rich Presence BZ", url: "https://github.com/Metious/MetiousSubnauticaMods/blob/master/README.md" },
  { name: "Extra Options BZ", url: "https://belowzero.thunderstore.io/package/MrPurple6411/Extra_Options_BZ/" },
  { name: "Fabricator No Auto Close", url: "https://belowzero.thunderstore.io/package/MrPurple6411/Fabricator_No_Auto_Close_BZ/" },
  { name: "Faster PDA Scan", url: "https://www.nexusmods.com/subnauticabelowzero/mods/185" },
  { name: "Faster Prawn Drill", url: "https://www.nexusmods.com/subnauticabelowzero/mods/182" },
  { name: "Moonpool Vehicle Repair", url: "https://www.nexusmods.com/subnauticabelowzero/mods/106" },
  { name: "Metal Hands BZ", url: "https://github.com/desperationfighter/Desperationfighter-SubnauticaMods/releases" },
  { name: "No Eating Noise", url: "https://www.nexusmods.com/subnauticabelowzero/mods/89" },
  { name: "Prawn Suit Grappling Arm Upgrade", url: "https://www.nexusmods.com/subnauticabelowzero/mods/141" },
  { name: "Prawn Suit Jet Upgrade", url: "https://www.nexusmods.com/subnauticabelowzero/mods/140" },
  { name: "Rotate Moonpool", url: "" },
  { name: "Roll Control", url: "https://www.nexusmods.com/subnauticabelowzero/mods/156" },
  { name: "Swim Charge Inventory", url: "https://www.nexusmods.com/subnauticabelowzero/mods/189" },
  { name: "Snowfox Water Hoverbike", url: "" },
  { name: "Seatruck Speed Upgrades", url: "https://www.nexusmods.com/subnauticabelowzero/mods/55" },
  { name: "Seatruck Armor Upgrades", url: "https://www.nexusmods.com/subnauticabelowzero/mods/56" },
  { name: "Seatruck Depth Upgrades", url: "https://www.nexusmods.com/subnauticabelowzero/mods/54" },
  { name: "Seatruck Hotkeys", url: "https://www.nexusmods.com/subnauticabelowzero/mods/173" },
  { name: "Seatruck Thermal", url: "https://www.nexusmods.com/subnauticabelowzero/mods/193" },
  { name: "Seatruck Solar", url: "https://www.nexusmods.com/subnauticabelowzero/mods/192" },
  { name: "Snap Builder", url: "https://www.nexusmods.com/subnauticabelowzero/mods/57" },
  { name: "Storage Info", url: "https://belowzero.thunderstore.io/package/Desperationfighter/StorageInfoBZ/" }
    ];

const updated = [
  { name: "Airbladder Capacity BZ", url: "" },
  { name: "Altitude Meter", url: "" },
  { name: "Better Flashlight", url: "" },
  { name: "Better Seaglide", url: "" },
  { name: "Booster Tank Speed Modifier", url: "" },
  { name: "Build In Seatruck", url: "" },
  { name: "Charger Wireless Charging BZ", url: "" },
  { name: "DW's Equipment Bonanza", url: "" },
  { name: "Easy Craft", url: "" },
  { name: "Grappling Arm Upgrade", url: "" },
  { name: "Grav Trap Improved", url: "" },
  { name: "Item Backgrounds BZ", url: "" },
  { name: "MMCGA - Medical Cabinet Fix", url: "" },
  { name: "More Engine Efficiency Modules BZ", url: "" },
  { name: "More Ingots BZ", url: "" },
  { name: "Prawn Suit Repair and Charge", url: "" },
  { name: "Ramunes Recipes BZ", url: "" },
  { name: "Seaglide Hyper Speed BZ", url: "" },
  { name: "Seaglide Speed BZ", url: "" },
  { name: "Seatruck Arms", url: "" },
  { name: "Seatruck Fish Scoop", url: "" },
  { name: "Seatruck Nuclear Rod", url: "" },
  { name: "Seatruck Scanner Module", url: "" },
  { name: "Seatruck Speed Modifier", url: "" },
  { name: "Seatruck Storage", url: "" },
  { name: "Slot Extender Zero", url: "" },
  { name: "Subnautica Pets BZ", url: "" },
  { name: "Terraforming Ability", url: "" },
  { name: "Tweaks and Fixes", url: "" },
  { name: "UI Tweaks", url: "" },
  { name: "Warnings Disabler", url: "" }
    ];

const broken = [
  { name: "Autosave", url: "https://www.nexusmods.com/subnauticabelowzero/mods/107" },
  { name: "Advanced Highlighting", url: "https://www.nexusmods.com/subnauticabelowzero/mods/178" },
  { name: "Blurry Textures Fix", url: "https://www.nexusmods.com/subnauticabelowzero/mods/165" },
  { name: "Better Teleportation Tool", url: "https://www.nexusmods.com/subnauticabelowzero/mods/92" },
  { name: "Builder Module", url: "https://belowzero.thunderstore.io/package/MrPurple6411/Builder_Module_BZ/" },
  { name: "Cheat Manager Zero", url: "" },
  { name: "Defabricator", url: "" },
  { name: "Disable Crosshair BZ", url: "https://www.nexusmods.com/subnauticabelowzero/mods/239" },
  { name: "Enhanced Sleep", url: "https://www.nexusmods.com/subnauticabelowzero/mods/78" },
  { name: "Grav Trap Storage", url: "https://belowzero.thunderstore.io/package/MrPurple6411/Gravtrap_Storage_BZ/" },
  { name: "Jukebox Spotify", url: "https://www.nexusmods.com/subnauticabelowzero/mods/215" },
  { name: "LVVitality", url: "" },
  { name: "Fish Can Not Live Out Of Water", url: "" },
  { name: "Quit To Desktop BZ", url: "https://github.com/Metious/MetiousSubnauticaMods/blob/master/README.md" },
  { name: "Tech Pistol", url: "https://belowzero.thunderstore.io/package/MrPurple6411/Tech_Pistol_BZ/" },
  { name: "Tool Inspection BZ", url: "https://belowzero.thunderstore.io/package/MrPurple6411/Tool_Inspection_BZ/" },
  { name: "Unknown Name", url: "https://belowzero.thunderstore.io/package/MrPurple6411/Unknown_Name_BZ/" }
    ];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

    working.sort((a, b) => b.name.length - a.name.length);
    updated.sort((a, b) => b.name.length - a.name.length);
    broken.sort((a, b) => b.name.length - a.name.length);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const gridWorking = document.querySelector(".grid-working");
    const gridUpdated = document.querySelector(".grid-updated");
    const gridBroken = document.querySelector(".grid-broken");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // Working Mods
    for (const mod of working) {
      const workingList = document.createElement("a");
      workingList.setAttribute("href", mod.url);
      workingList.setAttribute("target", "_blank");
      workingList.innerText = mod.name;
      workingList.classList.add("button");
      gridWorking.appendChild(workingList);

      const br = document.createElement("span"); // create a <span> element
      br.classList.add("br-main"); // add the class "br-main" to the <span> element
      gridWorking.appendChild(br); // append the <span> element to the container element
    }


    // Updated Mods
    for (const mod of updated) {
      const updatedList = document.createElement("a");
      updatedList.setAttribute("href", mod.url);
      updatedList.setAttribute("target", "_blank");
      updatedList.innerText = mod.name;
      updatedList.classList.add("button");
      gridUpdated.appendChild(updatedList);

      const br = document.createElement("span"); // create a <span> element
      br.classList.add("br-main"); // add the class "br-main" to the <span> element
      gridUpdated.appendChild(br); // append the <span> element to the container element
    }

    
    // Broken Mods
    for (const mod of broken) {
      const brokenList = document.createElement("a");
      brokenList.setAttribute("href", mod.url);
      brokenList.setAttribute("target", "_blank");
      brokenList.innerText = mod.name;
      brokenList.classList.add("button");
      gridBroken.appendChild(brokenList);

      const br = document.createElement("span"); // create a <span> element
      br.classList.add("br-main"); // add the class "br-main" to the <span> element
      gridBroken.appendChild(br); // append the <span> element to the container element
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////