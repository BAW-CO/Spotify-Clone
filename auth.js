const CLIENT_ID = "291a13efe2f64f23ac56eb0d3ecff9cd"
const CLIENT_SECRET = "b88f7f365bb44effb44f1ce9bd9264f1"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const REDIRECT_URI = "http://localhost:5173"
const RESPONSE_TYPE = "token"

// Utility function to introduce a delay between retries
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function getAccessToken(retries = 3) {
    const credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
    console.log('Fetching new token...')
    
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: "grant_type=client_credentials"
        })
        
        const data = await response.json()
        console.log('Token received:', data.access_token)
        return data.access_token
    } catch (error) {
        console.log('Token fetch error:', error)
        return null
    }
}



export default getAccessToken;
