//making a request with no extra arguments/options
//this will throw an error: Failed to fetch. The code is working perfectly fine
// async function getData() {
//   const url = 'https://example.com/answer.json'
//   try {
//     const response = await fetch(url)
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`)
//     }
//     const json = await response.json()
//     console.log(json)
//   } catch (err) {
//     console.error(err.message)
//   }
// }
// getData()
//using Request for post
//  main.js

// POST request using fetch()
fetch('https://jsonplaceholder.typicode.com/posts', {
  // Adding method type
  method: 'POST',

  // Adding body or contents to send
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),

  // Adding headers to the request
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  // Converting to JSON
  .then((response) => response.json())

  // Displaying results to console
  .then((json) => console.log(json))
