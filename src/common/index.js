export const writeCookie = (key, value, days) => {
    let date = new Date()
    days = days || 365

    date.setDate(date.getDate() + days)

    document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/"
} // generates cookie

export const getCookie = (cookieName) => {
    const re = new RegExp(`(?<=${cookieName}=)[^;]*`);

    try {
        const cookie = document.cookie.match(re);
        if (cookie && cookie.length > 0) {
            return cookie[0];
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
} // checks if cookie exists when user loads page

