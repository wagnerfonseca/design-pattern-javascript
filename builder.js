var Builder = (function(){
  
  function Builder() {
    this.types = {}
  }

  Builder.prototype.registerEntity = function( id, typeSource ) {
    // util para determinar regras para registrar a classe
    //var proto = typeSource.prototype 
    this.types[id] = typeSource    
  }

  Builder.prototype.createEntity = function( id, data, typeSource ) {
    if (!this.types[id]) {    
      this.registerEntity(id, typeSource)
    }
    var source = this.types[id]
    return (source ? new source(data) : null)
  }

  return Builder

})()

module.exports = new Builder()