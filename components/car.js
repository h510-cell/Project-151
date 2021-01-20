//Car rotation
AFRAME.registerComponent("car-rotation-reader", {
    schema: {
      speedOfCarRoation: { type: "number", default: 0 }    
    },
    tick: function () {
      var car_Rotation = this.el.getAttribute("rotation");
  
      car_Rotation.y += this.data.speedOfCarRoation;
  
      this.el.setAttribute("rotation", {
        x: car_Rotation.x,
        y: car_Rotation.y,
        z: car_Rotation.z
      });
    }
  });