var Factories = (function(){
  
  function Factories() {
    this.types = {}
  }

  Factories.prototype.registerEntity = function( type, source ) {
    var proto = source.prototype
    this.types[type] = source
  }

  Factories.prototype.getEntity = function( type, data ) {
    var source = this.types[type]
    return (source ? new source(data) : null)
  }

  return Factories

})()

var People = function(data) {
  this.name = data.name
  this.lastName = data.lastname
}

var factory = new Factories()
factory.registerEntity( 'myObj', People )

var person = factory.getEntity(
  'myObj',
  {
    name: 'John Doe'
  }
)

console.log(person)