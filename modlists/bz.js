


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const working = [
  { name: "Attitude Indicator", url: "" },
  { name: "All Items 1x1", url: "" },
  { name: "Advanced Storage", url: "" },
  { name: "Advanced Inventory", url: "" },
  { name: "Autosort Lockers SML", url: "" },
  { name: "Base Clocks", url: "" },
  { name: "Better Scanner Blips BZ", url: "" },
  { name: "Better Scanner Room", url: "" },
  { name: "Craftable Ion Cubes", url: "" },
  { name: "Custom Craft 2 (CC2)", url: "" },
  { name: "Custom Databoxes BZ", url: "" },
  { name: "DAATQS", url: "" },
  { name: "Discord Rich Presence BZ", url: "" },
  { name: "Fabricator No Auto Close", url: "" },
  { name: "Faster PDA Scan", url: "" },
  { name: "Faster Prawn Drill", url: "" },
  { name: "Moonpool Vehicle Repair", url: "" },
  { name: "Metal Hands BZ", url: "" },
  { name: "No Eating Noises", url: "" },
  { name: "Prawn Suit Grappling Arm Upgrade", url: "" },
  { name: "Prawn Suit Jet Upgrade", url: "" },
  { name: "Rotate Moonpool", url: "" },
  { name: "Roll Control", url: "" },
  { name: "Swim Charge Inventory", url: "" },
  { name: "Snowfox Water Hoverbike", url: "" },
  { name: "Seatruck Speed Upgrades", url: "" },
  { name: "Seatruck Armor Upgrades", url: "" },
  { name: "Seatruck Depth Upgrades", url: "" },
  { name: "Seatruck Hotkeys", url: "" },
  { name: "Seatruck Thermal", url: "" },
  { name: "Seatruck Solar", url: "" },
  { name: "Snap Builder", url: "" },
  { name: "Storage Info", url: "" }
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
  { name: "Autosave", url: "" },
  { name: "Advanced Highlighting", url: "" },
  { name: "Blurry Textures Fix", url: "" },
  { name: "Better Teleportation Tool", url: "" },
  { name: "Builder Module", url: "" },
  { name: "Cheat Manager Zero", url: "" },
  { name: "Defabricator", url: "" },
  { name: "Disable Crosshair BZ", url: "" },
  { name: "Enhanced Sleep", url: "" },
  { name: "Fish Can Not Live Out Of Water", url: "" },
  { name: "Grav Trap Storage", url: "" },
  { name: "Jukebox Spotify", url: "" },
  { name: "LVVitality", url: "" },
  { name: "Medical Cabinet Fix", url: "" },
  { name: "Quit To Desktop BZ", url: "" },
  { name: "Stats Tracker", url: "" },
  { name: "Tech Pistol", url: "" },
  { name: "Tool Inspection BZ", url: "" },
  { name: "Unknown Name", url: "" }
    ];


// hello RevanFan and maybe others, if using one of the below variables for a URL, make sure in the url: "" you remove the "" and replace it just like `url: modder_desp` alright?

var modder_metious_alan = "https://github.com/Metious/MetiousSubnauticaMods";
var modder_mrpurple = "https://github.com/MrPurple6411/MrPurple6411-Subnautica-Mods/releases/tag/3.26.2022";
var modder_dawrecka = "https://github.com/DaWrecka/Beta-Mods/tree/main/BelowZero";
var modder_ramune = "https://github.com/RamuneNeptune/BelowZeroMods/releases/tag/Releases";
var modder_desp = "https://github.com/desperationfighter/Desperationfighter-SubnauticaMods/releases";

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