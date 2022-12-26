const mods = [
    { name: "Subnautica Randomiser Remade", url: "https://www.nexusmods.com/subnautica/mods/764" },
    { name: "More Seamoth Depth Modules", url: "https://www.nexusmods.com/subnautica/mods/1135" },
    { name: "Increased Resource Spawns", url: "https://www.nexusmods.com/subnautica/mods/1130" },
    { name: "Fabricator No Auto Close", url: "https://www.nexusmods.com/subnautica/mods/1127" },
    { name: "Drop Upgrades on Destroy", url: "https://www.nexusmods.com/subnautica/mods/1126" },
    { name: "Configurable Chunk Drops", url: "https://www.nexusmods.com/subnautica/mods/1122" },
    { name: "Moonpool Vehicle Repair", url: "https://www.nexusmods.com/subnautica/mods/51" },
    { name: "Seamoth Thermal Reactor", url: "https://www.nexusmods.com/subnautica/mods/1139" },
    { name: "Visible Locker Interior", url: "https://www.nexusmods.com/subnautica/mods/933" },
    { name: "Keep Inventory on Death", url: "https://www.nexusmods.com/subnautica/mods/1134" },
    { name: "Scannable Time Capsules", url: "https://www.nexusmods.com/subnautica/mods/1138" },
    { name: "Archipelago Randomizer", url: "https://www.nexusmods.com/subnautica/mods/1106" },
    { name: "Improved Power Network", url: "https://www.nexusmods.com/subnautica/mods/1129" },
    { name: "Replenish Reactor Rods", url: "https://www.nexusmods.com/subnautica/mods/230" },
    { name: "Increased Chunk Drops", url: "https://www.nexusmods.com/subnautica/mods/1131" },
    { name: "Customize your Spawns", url: "https://www.nexusmods.com/subnautica/mods/1124" },
    { name: "Configuration Manager", url: "https://www.nexusmods.com/subnautica/mods/1112" },
    { name: "Color Buildable Items", url: "https://www.nexusmods.com/subnautica/mods/418" },
    { name: "Base Deconstruct Fix", url: "https://www.nexusmods.com/subnautica/mods/1117" },
    { name: "Island Cloud Removal", url: "https://www.nexusmods.com/subnautica/mods/1133" },
    { name: "Custom Hull Plates 2", url: "https://www.nexusmods.com/subnautica/mods/1123" },
    { name: "Fast Loading Screen", url: "https://www.nexusmods.com/subnautica/mods/763" },
    { name: "Radiation Challenge", url: "https://www.nexusmods.com/subnautica/mods/149" },
    { name: "Persistent Commands", url: "https://www.nexusmods.com/subnautica/mods/1137" },
    { name: "Advanced Inventory", url: "https://www.nexusmods.com/subnautica/mods/490" },
    { name: "Base Legs Removal", url: "https://www.nexusmods.com/subnautica/mods/1118" },
    { name: "Grav Trap Storage", url: "https://www.nexusmods.com/subnautica/mods/1128" },
    { name: "Force Resolution", url: "https://www.nexusmods.com/subnautica/mods/791" },
    { name: "Building Tweaks", url: "https://www.nexusmods.com/subnautica/mods/1121" },
    { name: "Anisotropic Fix", url: "https://www.nexusmods.com/subnautica/mods/185" },
    { name: "VR Enhancements", url: "https://www.nexusmods.com/subnautica/mods/173" },
    { name: "Custom Posters", url: "https://www.nexusmods.com/subnautica/mods/1125" },
    { name: "Subnautica Map", url: "https://www.nexusmods.com/subnautica/mods/12" },
    { name: "BepInEx Tweaks", url: "https://www.nexusmods.com/subnautica/mods/1104" },
    { name: "Medkit Hotkey", url: "https://www.nexusmods.com/subnautica/mods/190" },
    { name: "Solid Terrain", url: "https://www.nexusmods.com/subnautica/mods/1140" },
    { name: "Color Lifepod", url: "https://www.nexusmods.com/subnautica/mods/954" },
    { name: "All Items 1x1", url: "https://www.nexusmods.com/subnautica/mods/1116" },
    { name: "Sea Level Mod", url: "https://www.nexusmods.com/subnautica/mods/968" },
    { name: "Snap Builder", url: "https://www.nexusmods.com/subnautica/mods/427" },
    { name: "No PDA Delay", url: "https://www.nexusmods.com/subnautica/mods/1105" },
    { name: "Unknown Name", url: "https://www.nexusmods.com/subnautica/mods/1143" },
    { name: "Time Eternal", url: "https://www.nexusmods.com/subnautica/mods/1142" },
    { name: "No Crosshair", url: "https://www.nexusmods.com/subnautica/mods/1136" },
    { name: "Tech Pistol", url: "https://www.nexusmods.com/subnautica/mods/1141" },
    { name: "Color Tools", url: "https://www.nexusmods.com/subnautica/mods/434" },
    { name: "More Ingots", url: "https://www.nexusmods.com/subnautica/mods/196" },
    { name: "Better ACU", url: "https://www.nexusmods.com/subnautica/mods/1120" },
    { name: "Easy Craft", url: "https://www.nexusmods.com/subnautica/mods/24" },
    { name: "SMLHelper", url: "https://www.nexusmods.com/subnautica/mods/113" },
    { name: "Base Kits", url: "https://www.nexusmods.com/subnautica/mods/1119" }
    ];

    const container = document.querySelector(".button-container");

    for (const mod of mods) { // loop through each object in the "mods" array
      const atag = document.createElement("a"); // create an <a> element
      atag.href = mod.url; // set the href attribute to the url of the current mod
      atag.target = "_blank"; // set the target attribute to "_blank" so the link opens in a new tab
      atag.classList.add("button"); // add the class "button" to the <a> element
      atag.innerText = mod.name; // set the inner text of the <a> element to the name of the current mod
      container.appendChild(atag); // append the <a> element to the container element
    }