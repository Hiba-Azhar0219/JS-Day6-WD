function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(209)
    }, 5000)
  })
}

//using callback in this approach. First let the getData done THEN perform the other tasks
// console.log('Initializing')
// console.log('Load Data')
// getData().then(() => {
//   console.log('Process Data')
//   console.log('Data has been displayed')
// })

//using async await
//await works in an async function, so we have wrapped into it. Besides we have asked it to wait till the background activity of getData has been completed. Currently, getData is a background activity. We can use async with getData in order to make it a background function. All in one. It is much better to use async - await instead of .then
async function consolingFunc() {
  console.log('Initializing')
  console.log('Load Data')
  var data = await getData()
  console.log(data)
  console.log('Process Data')
  console.log('Data has been displayed')
}
consolingFunc()
