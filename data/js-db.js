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
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    let conditionKeys = Object.keys(conditions)
    // If the object is empty, return all the todos
    if (conditionKeys.length === 0) return callback(null, jsDetails)
    // make sure that all the properties on the conditions exists on the object
    if (!conditionKeys.every((i) => Object.keys(jsDetails[0]).includes(i))) {
      throw new Error('Must find by properties that exist on the array items')
    } else {
			// Finally actually find what we're looking for
      return callback(null, jsDetails.filter((detail) =>
        conditionKeys.every((propKey) => detail[propKey] === conditions[propKey])
      ))
    }
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}