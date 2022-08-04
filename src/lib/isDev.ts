let development = false
try {
    development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
} catch (e) { }

export function isDev(): boolean {
    return development;
}