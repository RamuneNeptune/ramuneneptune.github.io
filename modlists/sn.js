const mods = [
      { name: "Subnautica Randomiser Remade", url: "https://www.nexusmods.com/subnautica/mods/764", date: "" },
      { name: "More Seamoth Depth Modules", url: "https://www.nexusmods.com/subnautica/mods/1135", date: "" },
      { name: "Increased Resource Spawns", url: "https://www.nexusmods.com/subnautica/mods/1130", date: "" },
      { name: "Fabricator No Auto Close", url: "https://www.nexusmods.com/subnautica/mods/1127", date: "" },
      { name: "Drop Upgrades on Destroy", url: "https://www.nexusmods.com/subnautica/mods/1126", date: "" },
      { name: "Configurable Chunk Drops", url: "https://www.nexusmods.com/subnautica/mods/1122", date: "" },
      { name: "Moonpool Vehicle Repair", url: "https://www.nexusmods.com/subnautica/mods/51", date: "" },
      { name: "Seamoth Thermal Reactor", url: "https://www.nexusmods.com/subnautica/mods/1139", date: "" },
      { name: "Visible Locker Interior", url: "https://www.nexusmods.com/subnautica/mods/933", date: "" },
      { name: "Keep Inventory on Death", url: "https://www.nexusmods.com/subnautica/mods/1134", date: "" },
      { name: "Scannable Time Capsules", url: "https://www.nexusmods.com/subnautica/mods/1138", date: "" },
      { name: "Archipelago Randomizer", url: "https://www.nexusmods.com/subnautica/mods/1106", date: "" },
      { name: "Improved Power Network", url: "https://www.nexusmods.com/subnautica/mods/1129", date: "" },
      { name: "Replenish Reactor Rods", url: "https://www.nexusmods.com/subnautica/mods/230", date: "" },
      { name: "Increased Chunk Drops", url: "https://www.nexusmods.com/subnautica/mods/1131", date: "" },
      { name: "Customize your Spawns", url: "https://www.nexusmods.com/subnautica/mods/1124", date: "" },
      { name: "Configuration Manager", url: "https://www.nexusmods.com/subnautica/mods/1112", date: "" },
      { name: "Color Buildable Items", url: "https://www.nexusmods.com/subnautica/mods/418", date: "" },
      { name: "Base Deconstruct Fix", url: "https://www.nexusmods.com/subnautica/mods/1117", date: "" },
      { name: "Island Cloud Removal", url: "https://www.nexusmods.com/subnautica/mods/1133", date: "" },
      { name: "Custom Hull Plates 2", url: "https://www.nexusmods.com/subnautica/mods/1123", date: "" },
      { name: "Fast Loading Screen", url: "https://www.nexusmods.com/subnautica/mods/763", date: "" },
      { name: "Radiation Challenge", url: "https://www.nexusmods.com/subnautica/mods/149", date: "" },
      { name: "Persistent Commands", url: "https://www.nexusmods.com/subnautica/mods/1137", date: "" },
      { name: "Advanced Inventory", url: "https://www.nexusmods.com/subnautica/mods/490", date: "" },
      { name: "Base Legs Removal", url: "https://www.nexusmods.com/subnautica/mods/1118", date: "" },
      { name: "Grav Trap Storage", url: "https://www.nexusmods.com/subnautica/mods/1128", date: "" },
      { name: "Force Resolution", url: "https://www.nexusmods.com/subnautica/mods/791", date: "" },
      { name: "Building Tweaks", url: "https://www.nexusmods.com/subnautica/mods/1121", date: "" },
      { name: "Anisotropic Fix", url: "https://www.nexusmods.com/subnautica/mods/185", date: "" },
      { name: "VR Enhancements", url: "https://www.nexusmods.com/subnautica/mods/173", date: "" },
      { name: "Custom Posters", url: "https://www.nexusmods.com/subnautica/mods/1125", date: "" },
      { name: "Subnautica Map", url: "https://www.nexusmods.com/subnautica/mods/12", date: "" },
      { name: "BepInEx Tweaks", url: "https://www.nexusmods.com/subnautica/mods/1104", date: "" },
      { name: "Medkit Hotkey", url: "https://www.nexusmods.com/subnautica/mods/190", date: "" },
      { name: "Solid Terrain", url: "https://www.nexusmods.com/subnautica/mods/1140", date: "" },
      { name: "Color Lifepod", url: "https://www.nexusmods.com/subnautica/mods/954", date: "" },
      { name: "All Items 1x1", url: "https://www.nexusmods.com/subnautica/mods/1116", date: "" },
      { name: "Sea Level Mod", url: "https://www.nexusmods.com/subnautica/mods/968", date: "" },
      { name: "Snap Builder", url: "https://www.nexusmods.com/subnautica/mods/427", date: "" },
      { name: "No PDA Delay", url: "https://www.nexusmods.com/subnautica/mods/1105", date: "" },
      { name: "Unknown Name", url: "https://www.nexusmods.com/subnautica/mods/1143", date: "" },
      { name: "Time Eternal", url: "https://www.nexusmods.com/subnautica/mods/1142", date: "" },
      { name: "No Crosshair", url: "https://www.nexusmods.com/subnautica/mods/1136", date: "" },
      { name: "Tech Pistol", url: "https://www.nexusmods.com/subnautica/mods/1141", date: "" },
      { name: "Color Tools", url: "https://www.nexusmods.com/subnautica/mods/434", date: "" },
      { name: "More Ingots", url: "https://www.nexusmods.com/subnautica/mods/196", date: "" },
      { name: "Better ACU", url: "https://www.nexusmods.com/subnautica/mods/1120", date: "" },
      { name: "Easy Craft", url: "https://www.nexusmods.com/subnautica/mods/24", date: "" },
      { name: "SMLHelper", url: "https://www.nexusmods.com/subnautica/mods/113", date: "" },
      { name: "Base Kits", url: "https://www.nexusmods.com/subnautica/mods/1119", date: "" },
      { name: "Quit To Desktop", url: "https://submodica.xyz/mods/sn1/131", date: "" },
      { name: "Manage Creature Spawns", url: "https://www.nexusmods.com/subnautica/mods/92", date: "" }
    ];
        

    const container = document.querySelector(".button-container"); // get the container element

    mods.sort((a, b) => b.name.length - a.name.length); // sort the "mods" array by the length of the name property of each object

    for (const mod of mods) { // loop through each object in the "mods" array
      const tag = document.createElement("a"); // create an <a> element
      tag.href = mod.url; // set the href attribute to the url of the current mod
      tag.target = "_blank"; // set the target attribute to "_blank" so the link opens in a new tab
      tag.classList.add("button"); // add the class "button" to the <a> element
      tag.innerText = mod.name; // set the inner text of the <a> element to the name of the current mod
      container.appendChild(tag); // append the <a> element to the container element

      const br = document.createElement("span"); // create a <span> element
      br.classList.add("br-main"); // add the class "br-main" to the <span> element
      container.appendChild(br); // append the <span> element to the container element
    }