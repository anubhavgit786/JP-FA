
export function camelCaseToTitleCase(camelCaseStr) {
  // Step 1: Insert space before capital letters
  let withSpaces = camelCaseStr.replace(/([A-Z])/g, " $1");

  // Step 2: Capitalize the first letter of the entire string
  let capitalized = withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);

  // Step 3: Handle "'s" for possessive form (e.g., "todays" → "Today's")
  let possessiveCorrected = capitalized.replace(/todays/gi, "Today's");

  return possessiveCorrected.trim();
}