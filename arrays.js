function addElementToBeginningOfArray(array,element2add){
  var newArray = [element2add,...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array,element2add){
  array = [element2add,...array]
  return array
}

function addElementToEndOfArray(array,element2add){
  var newArray = [...array,element2add]
  return newArray
}

function destructivelyAddElementToEndOfArray(array,element2add){
  array = [...array,element2add]
  return array
}

function accessElementInArray(array,index){
  var element = array[index]
  return element
}

function name(){
  //text
}