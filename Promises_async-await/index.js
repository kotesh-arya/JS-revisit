// calling a callback function inside a higher-order function with a delay and make it asynchronous


function sample() {
    console.log("from an async function")
}
function parent(cb) {
    setTimeout(cb, 1000)
}

parent(sample);

// the cb function is initiated now but it will be finished later


function generateScript(src){
    let scriptElement = document.createElement("script");
    scriptElement.src = src;
    document.head.append(scriptElement);
}

generateScript("./sample.js");