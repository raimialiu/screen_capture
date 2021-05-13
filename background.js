chrome.runtime.onInstalled.addListener(()=>{
    console.log("chrome extension in place")
    const name = "olatunde"
    chrome.storage.sync.set({name})
})