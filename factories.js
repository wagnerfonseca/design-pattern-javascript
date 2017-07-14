var Factories = (function(){
  
  function Factories() {
    this.types = {}
  }

  Factories.prototype.registerEntity = function( id, typeSource ) {
    // util para determinar regras para registrar a classe
    //var proto = typeSource.prototype 
    this.types[id] = typeSource    
  }

  Factories.prototype.createEntity = function( id, data, typeSource ) {
    if (!this.types[id]) {    
      this.registerEntity(id, typeSource)
    }
    var source = this.types[id] 
    return (source ? new source(data) : null)
  }

  return Factories

})()

module.exports = new Factories()