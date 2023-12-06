export const removeDuplicates = (array : any[]) => {
    return [...new Set(array)];
}