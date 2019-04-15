export class StringCompare {
    static doesContainRegardlessOfCase(a: string, b: string): boolean {
        a = a.trim().toLowerCase();
        b = b.trim().toLowerCase();
        return a.includes(b);
    }
}
