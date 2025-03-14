//fetching API concept

async function getData() {
  //promise made by chatGPT
  //   return fetch('https://jsonplaceholder.typicode.com/todos/1') // Return the Promise
  //     .then((response) => response.json())

  //promise made by harry
  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await x.json()
  return data
}

async function consolingFunc() {
  console.log('Initializing')
  console.log('Load Data')
  var data = await getData()
  console.log(data)
  console.log('Process Data')
  console.log('Data has been displayed')
}
consolingFunc()
