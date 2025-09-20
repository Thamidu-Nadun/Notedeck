/**
 * 
 * @param {String} URL 
 * @returns {String|null} markdown content or null if error
 */
export const from_github = async (URL) => {
    console.log('Importing from GitHub');
    let processed_url = URL
        .trim()
        .replace('https://github.com/', 'https://raw.githubusercontent.com/')
        .replace('/blob/', '/');
    console.log(processed_url);

    try {
        let res = await fetch(processed_url);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        let data = await res.text();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Fetch error:', error.message);
        return null;
    }
};
