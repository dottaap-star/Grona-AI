export const basePath = process.env.NODE_ENV === 'production' ? '/grona-ai' : '';

export function withBasePath(path: string): string {
    if (path.startsWith('/')) {
        return `${basePath}${path}`;
    }
    return path;
}
