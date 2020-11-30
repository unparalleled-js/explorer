const net = 'testnet'
const tendermintBaseUrl = `https://lb.${net}.vega.xyz/tm/`
const apiBaseUrl = `https://lb.${net}.vega.xyz/`
const blockExplorerBaseUrl = 'https://explorer.vega.trading/.netlify/functions/chain-explorer-api'
const topgunBaseUrl = 'https://topgun-service-testnet.ops.vega.xyz/leaderboard'
function apiUrl(path = ''){ return `${apiBaseUrl}${path}` }
function apiWsUrl(path = ''){ return `${apiBaseUrl.replace('https', 'wss')}${path}` }
function tendermintUrl(path = ''){ return `${tendermintBaseUrl}${path}`}
function blockUrl(path = '') { return `${blockExplorerBaseUrl}${path}` }
function topgunUrl() { return `${topgunBaseUrl}`}
export {
    blockExplorerBaseUrl,
    tendermintBaseUrl,
    apiBaseUrl,
    apiUrl,
    apiWsUrl,
    tendermintUrl,
    blockUrl,
    topgunUrl
}
