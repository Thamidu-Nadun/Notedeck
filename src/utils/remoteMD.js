/**
 * 
 * @param {String} URL - URL to validate
 * @param {String} domain - domain restriction, use '*' for no restriction
 * @returns {Boolean} whether URL is valid or not
 * @throws {Error} if URL is not a string
 * 
 * @author thamidu-nadun
 */
const validateURL = (URL, domain) => {
    let domain_condition = (URL.startsWith('http://' + domain) || URL.startsWith('https://' + domain));
    let content_condition = URL.endsWith('.md') || URL.endsWith('.MD') || URL.endsWith('.markdown') || URL.endsWith('.MARKDOWN');

    if (URL instanceof String) throw new Error('URL must be a string');
    if (domain != '*') {
        return domain_condition && content_condition;
    } else {
        return content_condition;
    }
};

/*----------------------------------------------------------------------------------*/

/**
 * 
 * @param {String} URL 
 * @returns {String|null} markdown content or null if error
 */
export const from_github = async (URL) => {
    console.log('Importing from GitHub');

    try {
        if (!validateURL(URL, 'github.com')) {
            throw new Error('Invalid URL');
        }
    } catch (error) {
        console.error('Validation error:', error.message);
        return null;
    }

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
