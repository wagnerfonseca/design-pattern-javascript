var People = function(data) {
  this.name = data.name || null
  this.lastName = data.lastName || null
}

var factory1 = require('./builder')
var factory2 = require('./builder')

factory1.registerEntity( 'myObj', People )

var person = factory1.createEntity(
  'myObj',
  {
    name: 'John'
  }
)

console.log(person)


function Car(options) {
  this.doors = options.doors >>> 0
  this.brand = options.brand || 'Brand new'
  this.color = options.color || 'unknow'  
  this.state = options.state || 'unknow'
}

var gol = factory2.createEntity( 1, { doors: 4, color: 'blue', brand: 'VW', state: 'used' },  Car)
console.log(gol)


var chevy = factory2.createEntity( 2, { doors: 2, color: 'brown', brand: 'Chevrolet' }, Car)
console.log(chevy)