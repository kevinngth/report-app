export default function truncateText(string, wordLength) {
    const result = string.split(" ");
    return result.length > 30
        ? result.slice(0, wordLength).join(" ") + "..."
        : string;
}
