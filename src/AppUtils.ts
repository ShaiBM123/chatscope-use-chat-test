

export function convertUnixTimeStamp(unix_timestamp: number)  
{
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds
var date = new Date(unix_timestamp * 1000);

// Hours part from the timestamp
var hours = date.getHours();

// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();

// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

return formattedTime;
}

function isClassComponent(component: any) {
    return (
        typeof component === 'function' && 
        !!component.prototype.isReactComponent
    )
}

function isFunctionComponent(component: any) {
    return (
        typeof component === 'function' && 
        String(component).includes('return React.createElement')
    )
}

export function isReactComponent(component: any) {
    return (
        isClassComponent(component) || 
        isFunctionComponent(component)
    )
}