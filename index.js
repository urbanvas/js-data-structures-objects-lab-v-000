// Write your solution in this file!
driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = {...obj}
  newObj[key] = value
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromDriverByKey(obj, key) {
  const newObj = Object.assign({}, obj)
   newObj[key]
  newObj.key
  newObj[key]
  debugger
  return newObj
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key]
  return obj
}
