// let random = Math.random();
// if(random < 0.5){
//     console.log('Less than 0.5')
// } else{
//     console.log('number is atleast 0.5')
// }
// console.log(random);

// let dayOfWeek= prompt('What day is it?').toLowerCase();

// if (dayOfWeek === 'monday'){
//     console.log('BOOOOO')
// } else if (dayOfWeek=== 'saturday'){
//     console.log('YASSSSS')
// } else if (dayOfWeek=== 'fridaFRIDayy'){
//     console.log('Weiner')
// } else if(dayOfWeek=== 'wednesday'){
//     console.log('Hump DaYYYYYY')
// } else{
//     console.log('The fuck are you talking about')
// }

// let age = 110;

// if(age<5){
//     console.log('That will be $0, please.')
// } else if (age<11){
//     console.log('That will be $10, please.')
// } else if (age<65){
//     console.log('That will be $20, please.')
// } else if (age<111){
//     console.log('That will be $10 old timer.')
// } else if (age>=111){
//     console.log('How are you alive')
// }
// let phrase = 'go'
// if (phrase==='stop'){
//     console.log('red')
// } else if (phrase==='slow'){
//     console.log('yellow')
// } else if (phrase==='go'){
//     console.log('green')
// } else {
//     console.log('purple')
// }

// let password = prompt('Please enter new password')

// if (password.length >= 6)
//     if (password.indexOf(' ')===-1){
//     console.log('okay')
//     } else {
//     console.log('that password sucks ass')
// } else{
//     console.log('you suck ass')
// }

// const age = prompt('How old are you?')

// if((age >= 0 && age < 5) || age >= 100){
//     console.log('That will be $0, please.')
// } else if (age > 5 && age < 18){
//     console.log('That will be $10, please.')
// } else if (age >= 18 && age<65){
//     console.log('That will be $20, please.')
// } else if (age >= 65 && age<100){
//     console.log('That will be $5 old timer.')
// } else if (age>=111){
//     console.log('How are you alive')
// }else {
//     console.log('GTFO')
// }

// const day=2;
// switch (day){
//     case 1:
//         console.log('monday')
//         break;
//     case 2:
//         console.log('tuesda')
//         break;
//     case 3:
//         console.log('m')
//         break;
//     case 4:
//         console.log('mon')
//         break;
// }
// const leaderboard = ['Harry', 'Lua', 'Bellatrix'];
// leaderboard[1] = 'Luna';
// leaderboard[2] = 'Draco';
// let movieLine = ['tom', 'nancy']
// movieLine.push('oliver')
// movieLine.push('harry')
// movieLine.shift()
// movieLine.push('Balls')
// const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter'];
// planets.shift()
// planets.push('Saturn')
// planets.unshift('Mercury')

// let cats = ['dixie', 'olivia', 'riley']
// let dogs=['ruby', 'philly']
// cats.concat('dogs')
// let catdog = [cats.concat(dogs)]
// catdog.reverse

// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// let coolcolors = colors.slice(3)
// let warmcolors = colors.slice(0,3)
// colors.splice(5,1)
// colors.splice(1,0,'redorange')
// colors.splice(2,0,'yellowgreen', 'forestgreen')

// let scores= [1, 69, 100, 84, 35, 28]
// scores.sort()

// const nums = [1,2,3]
// nums.push(69)
// nums.splice(1,0,67)
// const numbs= nums;

// const gameBoard = [ ['X', 'O', ''], ['X','X','X'],['null','O','X']]
// gameBoard[1]

// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
// ];
// airplaneSeats[3][2]

// const person = {firstName: 'Mick', lastName: 'Jagger'}

// const kitchenSink = {
//     favNum: 696969,
//     isFunny: true,
//     colors: ['red', 'orange']
// }

// const product = {
//     name: 'Gummy Bears',
//     inStock: true,
//     price: 1.99,
//     flavors: ['grape','apple','cherry']
// }
// person['firstname']

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;