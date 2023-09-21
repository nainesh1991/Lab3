let score1
let score2
let score3
let total =0
let average

//get 3 scores fro the user and add them to total 
score1 = prompt('Enter the first score')
total+=parseFloat(score1)
score2 = prompt('Enter the second score')
total+=parseFloat(score2)
score3 = prompt('Enter the third score')
total+=parseFloat(score3)

//cal average 
average = total/3

//display the results

console.log(average)
document.write(`<h1> The test scores Application</h1>`)
//alert(average)
document.write(` The first  scores is ${score1}</br>`)
document.write(` The second  scores is ${score2}</br>`)
document.write(` The third  scores is ${score3}</br>`)
document.write(` The avg  scores is ${average.toFixed(2)}</br>`)