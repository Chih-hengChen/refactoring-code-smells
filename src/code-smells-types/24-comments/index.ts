/**
 * Reverses a given string
 */
export function reverseString(input: string): string {
    return [...input].reverse().join("");
}

/**
 * Returns true if input is a palindrome
 */
export function isPalindrome(input: string): boolean {
    const cleaned = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleaned === reverseString(cleaned);
}
