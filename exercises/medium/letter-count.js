// let text = "How are you doing today?";
// const words = text.split(" "); 
// console.log(words.length);

// const passage = `A poor woodcutter was cutting wood near a river. Suddenly, his axe fell into the water. He started crying.

// A god appeared and asked, “Why are you crying?”

// The woodcutter said, “I lost my axe. I cannot work without it.”

// The god went into the river and brought a golden axe.
// “Is this yours?” he asked.

// The woodcutter said, “No.”

// Then the god brought a silver axe.
// “Is this yours?”

// Again, the woodcutter said, “No.”

// Finally, the god brought his old iron axe.
// “Yes! This is mine,” said the woodcutter happily.

// The god was impressed by his honesty and gave him all three axes.`;

// // Split by new line and remove empty lines
// const lines = passage.split("\n").filter(line => line.trim() !== "");

// console.log("Total Lines:", lines.length);


const passage = `A poor woodcutter was cutting wood near a river. Suddenly, his axe fell into the water. He started crying.

A god appeared and asked, “Why are you crying?”

The woodcutter said, “I lost my axe. I cannot work without it.”

The god went into the river and brought a golden axe.
“Is this yours?” he asked.

The woodcutter said, “No.”

Then the god brought a silver axe.
“Is this yours?”

Again, the woodcutter said, “No.”

Finally, the god brought his old iron axe.
“Yes! This is mine,” said the woodcutter happily.

The god was impressed by his honesty and gave him all three axes.`;

// Count words
const words = passage.trim().split(/\s+/);

console.log("Total Words:", words.length);