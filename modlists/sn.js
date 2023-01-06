const mods = [
  { name: "Subnautica Randomiser Remade", url: "https://www.nexusmods.com/subnautica/mods/764", date: "Dec 30th" },
  { name: "More Seamoth Depth Modules", url: "https://www.nexusmods.com/subnautica/mods/1135", date: "Dec 27th" },
  { name: "Increased Resource Spawns", url: "https://www.nexusmods.com/subnautica/mods/1130", date: "Dec 25th" },
  { name: "Fabricator No Auto Close", url: "https://www.nexusmods.com/subnautica/mods/1127", date: "Dec 25th" },
  { name: "Drop Upgrades on Destroy", url: "https://www.nexusmods.com/subnautica/mods/1126", date: "Dec 25th" },
  { name: "Configurable Chunk Drops", url: "https://www.nexusmods.com/subnautica/mods/1122", date: "Dec 25th" },
  { name: "Moonpool Vehicle Repair", url: "https://www.nexusmods.com/subnautica/mods/51", date: "Dec 23rd" },
  { name: "Seamoth Thermal Reactor", url: "https://www.nexusmods.com/subnautica/mods/1139", date: "Dec 25th" },
  { name: "Visible Locker Interior", url: "https://www.nexusmods.com/subnautica/mods/933", date: "Dec 14th" },
  { name: "Keep Inventory on Death", url: "https://www.nexusmods.com/subnautica/mods/1134", date: "Dec 25th" },
  { name: "Scannable Time Capsules", url: "https://www.nexusmods.com/subnautica/mods/1138", date: "Dec 25th" },
  { name: "Archipelago Randomizer", url: "https://www.nexusmods.com/subnautica/mods/1106", date: "Dec 18th" },
  { name: "Improved Power Network", url: "https://www.nexusmods.com/subnautica/mods/1129", date: "Dec 25th" },
  { name: "Replenish Reactor Rods", url: "https://www.nexusmods.com/subnautica/mods/230", date: "Dec 24th" },
  { name: "Increased Chunk Drops", url: "https://www.nexusmods.com/subnautica/mods/1131", date: "Dec 25th" },
  { name: "Customize your Spawns", url: "https://www.nexusmods.com/subnautica/mods/1124", date: "Dec 25th" },
  { name: "Configuration Manager", url: "https://www.nexusmods.com/subnautica/mods/1112", date: "Dec 21st" },
  { name: "Color Buildable Items", url: "https://www.nexusmods.com/subnautica/mods/418", date: "Dec 23rd" },
  { name: "Base Deconstruct Fix", url: "https://www.nexusmods.com/subnautica/mods/1117", date: "Dec 25th" },
  { name: "Island Cloud Removal", url: "https://www.nexusmods.com/subnautica/mods/1133", date: "Dec 25th" },
  { name: "Custom Hull Plates 2", url: "https://www.nexusmods.com/subnautica/mods/1123", date: "Dec 25th" },
  { name: "Fast Loading Screen", url: "https://www.nexusmods.com/subnautica/mods/763", date: "Dec 15th" },
  { name: "Radiation Challenge", url: "https://www.nexusmods.com/subnautica/mods/149", date: "Dec 24th" },
  { name: "Persistent Commands", url: "https://www.nexusmods.com/subnautica/mods/1137", date: "Dec 27th" },
  { name: "Advanced Inventory", url: "https://www.nexusmods.com/subnautica/mods/490", date: "Dec 18th" },
  { name: "Base Legs Removal", url: "https://www.nexusmods.com/subnautica/mods/1118", date: "Dec 25th" },
  { name: "Grav Trap Storage", url: "https://www.nexusmods.com/subnautica/mods/1128", date: "Dec 25th" },
  { name: "Force Resolution", url: "https://www.nexusmods.com/subnautica/mods/791", date: "Dec 20th" },
  { name: "Building Tweaks", url: "https://www.nexusmods.com/subnautica/mods/1121", date: "Dec 25th" },
  { name: "Anisotropic Fix", url: "https://www.nexusmods.com/subnautica/mods/185", date: "Dec 25th" },
  { name: "VR Enhancements", url: "https://www.nexusmods.com/subnautica/mods/173", date: "Dec 28th" },
  { name: "Custom Posters", url: "https://www.nexusmods.com/subnautica/mods/1125", date: "Dec 25th" },
  { name: "Subnautica Map", url: "https://www.nexusmods.com/subnautica/mods/12", date: "Dec 23rd" },
  { name: "BepInEx Tweaks", url: "https://www.nexusmods.com/subnautica/mods/1104", date: "Dec 15th" },
  { name: "Medkit Hotkey", url: "https://www.nexusmods.com/subnautica/mods/190", date: "Dec 23rd" },
  { name: "Solid Terrain", url: "https://www.nexusmods.com/subnautica/mods/1140", date: "Dec 25th" },
  { name: "Color Lifepod", url: "https://www.nexusmods.com/subnautica/mods/954", date: "Dec 23rd" },
  { name: "All Items 1x1", url: "https://www.nexusmods.com/subnautica/mods/1116", date: "Dec 25th" },
  { name: "Sea Level Mod", url: "https://www.nexusmods.com/subnautica/mods/968", date: "Dec 21st" },
  { name: "Snap Builder", url: "https://www.nexusmods.com/subnautica/mods/427", date: "Dec 15th" },
  { name: "No PDA Delay", url: "https://www.nexusmods.com/subnautica/mods/1105", date: "Dec 21st" },
  { name: "Unknown Name", url: "https://www.nexusmods.com/subnautica/mods/1143", date: "Dec 25th" },
  { name: "Time Eternal", url: "https://www.nexusmods.com/subnautica/mods/1142", date: "Dec 25th" },
  { name: "No Crosshair", url: "https://www.nexusmods.com/subnautica/mods/1136", date: "Dec 25th" },
  { name: "Tech Pistol", url: "https://www.nexusmods.com/subnautica/mods/1141", date: "Dec 25th" },
  { name: "Color Tools", url: "https://www.nexusmods.com/subnautica/mods/434", date: "Dec 23rd" },
  { name: "More Ingots", url: "https://www.nexusmods.com/subnautica/mods/196", date: "Dec 26th" },
  { name: "Better ACU", url: "https://www.nexusmods.com/subnautica/mods/1120", date: "Dec 25th" },
  { name: "Easy Craft", url: "https://www.nexusmods.com/subnautica/mods/24", date: "Dec 17th" },
  { name: "SMLHelper", url: "https://www.nexusmods.com/subnautica/mods/113", date: "Dec 27th" },
  { name: "Base Kits", url: "https://www.nexusmods.com/subnautica/mods/1119", date: "Dec 25th" },
  { name: "Manage Creature Spawns", url: "https://www.nexusmods.com/subnautica/mods/92", date: "Dec 29th" },
  { name: "Door Cut Sound Fix", url: "https://submodica.xyz/mods/sn1/136", date: "Dec 30th" },
  { name: "Music Fading Out Fix", url: "https://submodica.xyz/mods/sn1/137", date: "Dec 30th" },
  { name: "Geyser Performance Fix", url: "https://submodica.xyz/mods/sn1/135", date: "Dec 29th" },
  { name: "Debug Helper", url: "https://submodica.xyz/mods/sn1/133", date: "Dec 28th" },
  { name: "Terraforming Ability", url: "https://submodica.xyz/mods/sn1/132", date: "Dec 27th" },
  { name: "Quit To Desktop (BepInEx)", url: "https://submodica.xyz/mods/sn1/131", date: "Dec 27th" },
  { name: "Runtime Editor", url: "https://submodica.xyz/mods/sn1/109", date: "Dec 25th" },
  { name: "Accelerated Start Updated", url: "https://www.nexusmods.com/subnautica/mods/1147", date: "Dec 29th" },
  { name: "VR Pimax Canted Display UI Fix", url: "https://www.nexusmods.com/subnautica/mods/1144", date: "Dec 27th" },
  { name: "Quick Access Inside Transport - QAIT (BepInEx)", url: "https://www.nexusmods.com/subnautica/mods/1145", date: "Dec 29th" },
  { name: "Slot Extender", url: "https://www.nexusmods.com/subnautica/mods/142", date: "Dec 29th" },
  { name: "Quick Slots Plus", url: "https://www.nexusmods.com/subnautica/mods/984", date: "Dec 27th" },
  { name: "Fish Cannot Live Out Of Water", url: "https://www.nexusmods.com/subnautica/mods/709", date: "Dec 26th" },
  { name: "Craftable Eggs", url: "https://www.nexusmods.com/subnautica/mods/213", date: "Dec 31st"},
  { name: "Cyclops Docking Mod", url: "https://www.nexusmods.com/subnautica/mods/554", date: "Dec 30th"},
  { name: "More Quick Slots (BepInEx)", url: "https://www.nexusmods.com/subnautica/mods/1111", date: "Dec 20th"},
  { name: "Disable Crosshair SN", url: "https://www.nexusmods.com/subnautica/mods/839", date: "Dec 31st"},
  { name: "Cheat Manager", url: "https://www.nexusmods.com/subnautica/mods/77", date: "Dec 29th" },
  { name: "Scanner Room Control Chip (BepInEx)", url: "https://www.nexusmods.com/subnautica/mods/1150", date: "Jan 1st"},
  { name: "Performance Booster", url: "https://www.nexusmods.com/subnautica/mods/389", date: "Jan 1st"},
  { name: "Base Light Switch", url: "https://www.nexusmods.com/subnautica/mods/46", date: "Jan 1st"},
  { name: "Mini Map ", url: "https://www.nexusmods.com/subnautica/mods/158", date: "Jan 2nd"},
  { name: "Snap Turning (VR)", url: "https://www.nexusmods.com/subnautica/mods/289", date: "Jan 2nd"},
  { name: "BZ Enameled Glass", url: "https://www.nexusmods.com/subnautica/mods/1152", date: "Jan 3rd"},
  { name: "BZ Titanium Ingot", url: "https://www.nexusmods.com/subnautica/mods/1153", date: "Jan 3rd"},
  { name: "Achievement Unlocker", url: "https://www.nexusmods.com/subnautica/mods/1154", date: "Jan 4th"},
  { name: "More Resources Discovery (Scanner Room)", url: "https://www.nexusmods.com/subnautica/mods/406", date: "Jan 4th"},
  { name: "Knife Damange & Distance", url: "https://www.nexusmods.com/subnautica/mods/1132", date: "Jan 4th"},
];


const container = document.querySelector(".button-container"); // get the container element

mods.sort((a, b) => {
  const dateA = a.date;
  const dateB = b.date;

  // Check if dateA or dateB starts with "Jan"
  if (dateA.startsWith("Jan") || dateB.startsWith("Jan")) {
    // Check if both dates start with "Jan"
    if (dateA.startsWith("Jan") && dateB.startsWith("Jan")) {
      // Both dates start with "Jan", so sort by number
      const numberA = Number(dateA.match(/\d+/));
      const numberB = Number(dateB.match(/\d+/));
      if (numberA > numberB) {
        return -1;
      }
      if (numberA < numberB) {
        return 1;
      }
      return 0;
    }
    // One date starts with "Jan" and the other does not, so the date that starts with "Jan" comes first
    return dateA.startsWith("Jan") ? -1 : 1;
  }

  // Check if dateA or dateB starts with "Dec"
  if (dateA.startsWith("Dec") || dateB.startsWith("Dec")) {
    // Check if both dates start with "Dec"
    if (dateA.startsWith("Dec") && dateB.startsWith("Dec")) {
      // Both dates start with "Dec", so sort by number
      const numberA = Number(dateA.match(/\d+/));
      const numberB = Number(dateB.match(/\d+/));
      if (numberA > numberB) {
        return -1;
      }
      if (numberA < numberB) {
        return 1;
      }
      return 0;
    }
    // One date starts with "Dec" and the other does not, so the date that starts with "Dec" comes first
    return dateA.startsWith("Dec") ? -1 : 1;
  }

  // If none of the above conditions are met, dates are not sorted
  return 0;
});



for (const mod of mods) { // loop through each object in the "mods" array
  const tag = document.createElement("a"); // create an <a> element
  tag.href = mod.url; // set the <a> elements HTML
  tag.target = "_blank"; // set the <a> elements HTML
  tag.classList.add("button"); // set the <a> elements HTML
  
  tag.innerText = mod.name + ' | '; 
  container.appendChild(tag); 
  
  // Create a span element for the date
  const dateSpan = document.createElement("span");
  dateSpan.style.color = "#bebebe";
  dateSpan.innerText = mod.date;

  const br = document.createElement("span"); 
  br.classList.add("br-main"); 
  container.appendChild(br); 

  tag.appendChild(dateSpan);
}

