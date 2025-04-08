/**
 * 坏味道名称：注释
 * 
 * 该坏味道的意思并不是让你不写注释。
 * 而是当你看到一段长长的注释时，往往伴随着糟糕的代码。
 * 
 * 比如以下注释：
    // FIXME: ...

    // TODO: ...

    // Don't touch this unless you...

 * 一般的clean code原则是用逻辑来解释代码而非注释。
 * 并且注释尽量写 why，而不是 what。
 */


// HACK: 翻转string 因为输入很奇怪
export function reverseString(input: string): string {
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    return reversed;
}

// TODO: 增加更多回文检查
export function isPalindrome(input: string): boolean {
    const reversed = reverseString(input);
    return input === reversed;
}
