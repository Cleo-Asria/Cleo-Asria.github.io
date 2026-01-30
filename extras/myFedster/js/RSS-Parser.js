fetchFeed()

async function fetchFeed(url) {
    try {  
        const response = await fetch(url);  
        if (!response.ok) {  
            throw new Error(`HTTP error! Status: ${response.status}`);  
        }  
        const xmlText = await response.text(); // Get XML as text
        return xmlText;  
    } catch (error) {  
        console.error("Error fetching RSS feed:", error);  
        throw error; // Propagate error to handle later  
    }  
}
