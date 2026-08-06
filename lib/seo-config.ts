export const SITE_URL = "https://ducktoon.vercel.app/";
export const SITE_NAME = "Ducktoon";
export const DEFAULT_LOCALE = "th_TH";

export const DEFAULT_DESCRIPTION = "อ่านการ์ตููน มังงะ มังฮวาแปลไทยฟรี อัพเดททุกวัน";

export function truncateDescription(text: string, maxLength: number) {
    if (text.length <= maxLength) {
        return text;
    }
    const truncated = text.slice(0, maxLength);
    const lastSpace = text.lastIndexOf(" ");
    return truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim() + "...";
};
