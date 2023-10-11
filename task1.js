// Task 1.

function getOwnKeyValue(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        }
    }
}

