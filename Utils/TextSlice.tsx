export const TextSlice = (text: string, length: number): string => {
    const splitedData = text.split(" ");
    if (splitedData.length > length) {
       return `${splitedData.slice(0, length).join(" ")}...`;
    } else {
       return text;
    }
 };