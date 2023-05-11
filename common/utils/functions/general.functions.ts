export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function threeDiferiteElements(
    index: number,
    first: string,
    second: string,
    third: string
): string {
    return (index + 1) % 3 === 0
        ? third
        : (index + 1) % 3 === 2
        ? second
        : first;
}
