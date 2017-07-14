function Car(options) {
  this.doors = options.doors || 4
  this.state = options.state || 'Brand new'
  this.color = options.color || 'Silver'
}

function Truck(options ) {
  this.state = options.doors || 'used'
  this.wheelSize = options.wheelSize || 'large'
  this.color = options.color || 'blue'
}



var abstractVehicleFactory = (function () {

  // Storage for our vehicle types
  var types = {}

  return {
    getVehicle: function(type, customizations) {
      var Vehicle = types[type]

      // only register classes that fulfill the vehicle contract
      // if ( proto.drive && proto.breakDown ) {
      //     types[type] = Vehicle;
      // }

      return (Vehicle ? new Vehicle(customizations) : null)
    },

    registerVehicle: function(type, Vehicle) {
      var proto = Vehicle.prototype      
      types[type] = Vehicle
      return abstractVehicleFactory
    }
  }

})()

// usage
abstractVehicleFactory.registerVehicle( 'car', Car )
abstractVehicleFactory.registerVehicle( 'truck', Truck )

// Instantiate a new car based on the abstract vehicle type
var car = abstractVehicleFactory.getVehicle(
  'car',
  {
    color: 'lime green',
    state: 'like new'
  }
)

console.log(car)