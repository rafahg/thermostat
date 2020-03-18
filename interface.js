$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.up(1)
    updateTemperature();
  })
  $('#temperature-down').on('click', function() {
    thermostat.down(1)
    updateTemperature();
  });
  $('#temperature-reset').on('click', function(){
    thermostat.reset()
    updateTemperature();
  });
  $('#PSM-on').on('click', function() {
    thermostat.switchPSMOn()
    $('#power-saving-status').text("on");
    updateTemperature();
    });
  $('#PSM-off').on('click', function() {
    thermostat.switchPSMOff()
    $('#power-saving-status').text("off");
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());
  }
})
