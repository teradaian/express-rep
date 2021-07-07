export { 
	find
}

const jsDetails = [
  {text: 'High level interpreted language'},
  {text: 'Dynamically Typed'},
  {text: 'Synchronous'},
  {text: 'Single Threaded'},
  {text: 'Everything is an object'},
  {text: 'Multiparadigm'},
  {text: 'Language of the web'},
  {text: 'Scripting Language'},
  {text: 'Event Oriented Language'},
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    let conditionKeys = Object.keys(conditions)
    if (conditionKeys.length === 0) return callback(null, jsDetails)
    if (!conditionKeys.every((i) => Object.keys(jsDetails[0]).includes(i))) {
      throw new Error('Must find by properties that exist on the array items')
    } else {
      return callback(null, jsDetails.filter((detail) =>
        conditionKeys.every((propKey) => detail[propKey] === conditions[propKey])
      ))
    }
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}