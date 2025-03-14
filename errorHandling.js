// let num1 = prompt('Enter first num: ')
// let num2 = prompt('Enter second num: ')
// let sum = parseInt(num1) + parseInt(num2)
// try {
//   console.log(sum * x)
// } catch (err) {
//   console.error(err)
// }

//Concept of finally
function main() {
  let num1 = prompt('Enter first num: ')
  let num2 = prompt('Enter second num: ')
  let sum = parseInt(num1) + parseInt(num2)
  try {
    console.log(sum * x)
  } catch (err) {
    console.error(err)
  } finally {
    console.log('All is well')
  } //purpose of finally is to run something even affter try and catch
}
main()
