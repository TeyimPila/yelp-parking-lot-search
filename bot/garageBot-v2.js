let data = require('./airgarage-data.json')

/**
 * How to Run:
 * node garageBot-v2.js <command> value1 value2
 */

const envArg = process.argv
const [exec, file, command, ...values] = envArg

// TODO: Validate commands and values here and show usage instructions

const findByLocation = (location) => {
    return data.filter(datum => datum?.address?.state.toLowerCase() === location?.toLowerCase())
}

const findByHourlyPriceInRange = (start, end) => {
    return data.filter(datum => datum?.price_hourly >= start && datum?.price_hourly <= end)
}

const findByPriceLessThanOrEqual = (price) => {
    return data.filter(datum => datum?.price_hourly <= price)
}

const findByPriceGreaterThan = (price) => {
    return data.filter(datum => datum?.price_hourly > price)
}

const formatResult = (command, results, ...values) => {
    return {command, values, results: results.map(result => result.name).join(', ')}
}

const commandSet = {
    locate: findByLocation,
    find_price_hourly_lte: findByPriceLessThanOrEqual,
    find_price_hourly_bt: findByHourlyPriceInRange,
    find_price_hourly_gt: findByPriceGreaterThan,
}

if (!commandSet.hasOwnProperty(command)){
    console.error(`The command: ${command} is not supported. \n Supported commands are ${Object.keys(commandSet).join(', ')}`)
    return
}


const result = commandSet[command](...values)
console.log(formatResult(command, result, ...values))
