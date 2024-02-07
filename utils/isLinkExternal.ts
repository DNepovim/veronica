export const isLinkExternal = (url: string) => new URL(url).origin !== location?.origin;
