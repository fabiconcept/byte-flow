function ensureHttpsProtocol(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        // If the URL doesn't have a protocol, add 'https://'
        return 'https://' + url;
    }
    return url;
}

export function isValidUrl(text) {
    // Regular expression for matching URLs
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    // Test the text against the regex
    const isValid = urlRegex.test(text);

    if (isValid) {
        // Ensure the URL has either 'http://' or 'https://'
        return ensureHttpsProtocol(text);
    }

    return false;
}
