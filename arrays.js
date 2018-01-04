function addElementToBeginningOfArray(array,element2add){
  var newArray = [element2add,...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array,element2add){
  array.unshift(element2add)
  return array
}

function addElementToEndOfArray(array,element2add){
  var newArray = [...array,element2add]
  return newArray
}

function destructivelyAddElementToEndOfArray(array,element2add){
  array.push(element2add)
  return array
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(){
  //text
}