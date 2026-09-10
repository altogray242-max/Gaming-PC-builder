
// PC Builder JavaScript Project

// ==========================================
// GLOBAL VARIABLE
// ==========================================
// This variable has global scope because it is
// declared outside of any block.
let pcBuilderName = "CoreForge";

console.log("Welcome to " + pcBuilderName + "!");

// ==========================================
// BLOCK VARIABLE
// ==========================================
// This variable only exists inside this block.
{
    let buildType = "Gaming PC";
    console.log("Build Type:", buildType);
}

// ==========================================
// MATHEMATICAL OPERATIONS
// ==========================================

let cpuPrice = 250;
let gpuPrice = 500;
let ramPrice = 100;

// Add the component prices together
let totalPrice = cpuPrice + gpuPrice + ramPrice;

// Calculate a 10% estimated tax
let tax = totalPrice * 0.10;

// Calculate the final price
let finalPrice = totalPrice + tax;

console.log("CPU Price: $" + cpuPrice);
console.log("GPU Price: $" + gpuPrice);
console.log("RAM Price: $" + ramPrice);
console.log("Component Total: $" + totalPrice);
console.log("Estimated Tax: $" + tax);
console.log("Final Price: $" + finalPrice);

// ==========================================
// STRING VARIABLE
// ==========================================

// This is a string variable.
let favoriteComponent = "Graphics Card";

console.log("Favorite Component:", favoriteComponent);

// ==========================================
// OBJECT VARIABLE USING CONST
// ==========================================

// This object stores information about the PC build.
const pcBuild = {
    name: "CoreForge Gaming PC",
    processor: "AMD Ryzen 7",
    graphicsCard: "NVIDIA RTX 5070",
    ram: "32GB DDR5",
    storage: "1TB SSD",
    price: finalPrice
};

// Display the object in the console
console.log("PC Build:", pcBuild);

// Display individual object values
console.log("PC Name:", pcBuild.name);
console.log("Processor:", pcBuild.processor);
console.log("Graphics Card:", pcBuild.graphicsCard);
console.log("RAM:", pcBuild.ram);
console.log("Storage:", pcBuild.storage);
console.log("Final Price: $" + pcBuild.price);

