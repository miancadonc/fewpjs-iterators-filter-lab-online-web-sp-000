// Code your solution here
function findMatching(driverArray, string){
    const filteredArray = driverArray.filter(driver => {
        return driver.toUpperCase() === string.toUpperCase()
    })

    return filteredArray
}

function fuzzyMatch(driverArray, string){
    const filteredArray = driverArray.filter( driver => {
        return driver.slice(0, [string.length]).toUpperCase() === string.toUpperCase()
    })

    return filteredArray
}

function matchName(driverArray, string){
    const filteredArray = driverArray.filter( driver => {
        return driver.name.toUpperCase() === string.toUpperCase()
    })

    return filteredArray
}