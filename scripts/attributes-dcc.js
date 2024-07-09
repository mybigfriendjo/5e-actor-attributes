import { generateAttributes } from "./attributes-common.js";

/**
 * @param {Actor} actor takes an actor object that will be used to generate the attributes
 * @returns Array of categories with their attributes
 */
export function getDCCData(actor, maxDepth) {
    const rollData = actor.getRollData();
    const categories = [];
    for (const key in rollData) {
        categories.push({
            categoryName: key,
            attributes: generateAttributes(rollData[key], key, 0, maxDepth),
        });
    }
    return categories;
}