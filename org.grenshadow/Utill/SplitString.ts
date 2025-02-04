export function splitString(value: string): string[] {
    return value.split(",").map(id => id.trim());
}
