'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature
};

Thermostat.prototype.up = function(number) {
  this.temperature += number;
  if(this.powerSavingMode === true) {
    if(this.temperature > 25) {
    this.temperature = 25;
  };
  }
  else{
    if(this.temperature > 32) {
      this.temperature = 32;
    };
  };
};

Thermostat.prototype.down = function(number) {
  this.temperature -= number;
  if(this.temperature < 10) {
    this.temperature = 10;
  };
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPSMOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPSMOn = function() {
  this.powerSavingMode = true;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.usage = function() {
  if(this.temperature < 18) {
    return "low-usage";
  }
  else if(this.temperature > 24) {
    return "high-usage";
  }
  else
  return "medium-usage";
}
