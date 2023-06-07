export function formatLabel(label: string): string {
    const charCodes = { A: 65, Z: 90 };
    let output = "";

    for (const char of label) {
        const isCapitalized =
            charCodes.A <= char.charCodeAt(0) &&
            char.charCodeAt(0) <= charCodes.Z;
        if (!isCapitalized) {
            output += char;
            continue;
        }

        output += " " + char.toLowerCase();
    }
  return output;
}
