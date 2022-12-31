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
];
    

const container = document.querySelector(".button-container"); // get the container element

mods.sort((a, b) => {
  // Extract the number from each date using the String.match() method
  const numberA = Number(a.date.match(/\d+/));
  const numberB = Number(b.date.match(/\d+/));

  // Compare the numbers and return a value accordingly
  if (numberA > numberB) {
    return -1;
  }
  if (numberA < numberB) {
    return 1;
  }
  return 0;
});

for (const mod of mods) { // loop through each object in the "mods" array
  const tag = document.createElement("a"); // create an <a> element
  tag.href = mod.url; // set the href attribute to the url of the current mod
  tag.target = "_blank"; // set the target attribute to "_blank" so the link opens in a new tab
  tag.classList.add("button"); // add the class "button" to the <a> element
  
  tag.innerText = mod.name + ' | '; // set the inner text of the <a> element to the name of the current mod
  container.appendChild(tag); // append the <a> element to the container element
  
  // Create a span element for the date
  const dateSpan = document.createElement("span");
  dateSpan.style.color = "#bebebe";
  dateSpan.innerText = mod.date;

  const br = document.createElement("span"); // create a <span> element
  br.classList.add("br-main"); // add the class "br-main" to the <span> element
  container.appendChild(br); // append the <span> element to the container element

  tag.appendChild(dateSpan);
}