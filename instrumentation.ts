export async function register() {
  // Polyfill localStorage if it exists but has broken methods (Node's experimental localStorage)
  if (typeof globalThis.localStorage !== 'undefined') {
    const storage: Record<string, string> = {};
    
    // Check if getItem is not a function and patch it
    if (typeof globalThis.localStorage.getItem !== 'function') {
      globalThis.localStorage = {
        getItem: (key: string): string | null => storage[key] ?? null,
        setItem: (key: string, value: string): void => { storage[key] = String(value); },
        removeItem: (key: string): void => { delete storage[key]; },
        clear: (): void => { Object.keys(storage).forEach(k => delete storage[k]); },
        key: (index: number): string | null => Object.keys(storage)[index] ?? null,
        get length(): number { return Object.keys(storage).length; },
      } as Storage;
    }
  }
}
