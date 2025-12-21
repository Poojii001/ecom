//use this function if payload doesn't contain any file field like an image
export async function createRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        response = await response.json()
        return response
    }
    catch (error) {
        console.log(`Error In API Calling Service : ${error}`)
        return []
    }
}


//use this function if payload contains any file field like image
export async function createMultipartRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method: "POST",
            headers: {
            },
            body: payload
        })
        response = await response.json()
        return response
    }
    catch (error) {
        console.log(`Error In API Calling Service : ${error}`)
        return []
    }
}