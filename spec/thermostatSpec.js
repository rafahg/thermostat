'use strict';

describe('thermostat',function() {
 var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it('starts at twenty',function(){
    expect(thermostat.temperature).toEqual(20);
  });
  it('increase temperature by 1 degree',function(){
    thermostat.up(1);
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
  it('decrease temperatur by 1 degree',function(){
    thermostat.down(1);
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
  it('has a min temp of 10 degrees', function() {
    thermostat.down(20)
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
  it('PSM is on by default', function() {
    expect(thermostat.powerSavingMode).toEqual(true);
  });
  it('can switch PSM off', function() {
    thermostat.switchPSMOff();
    expect(thermostat.isPowerSavingModeOn()).toEqual(false);
  });
  it('can switch PSM back on from being off', function(){
    thermostat.switchPSMOff();
    thermostat.switchPSMOn();
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  });
  it('if PSM is on maximum temperature is 25 degrees', function() {
    thermostat.up(1000);
    expect(thermostat.temperature).toEqual(25);
  });
  it('if PSM is off max temp is 32 degress', function() {
    thermostat.switchPSMOff();
    thermostat.up(1000);
    expect(thermostat.temperature).toEqual(32);
  });
  it('is possible to reset the temperature setting to default',function() {
    thermostat.up(2);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });
  it('returns low-usage if temp < 18', function() {
    thermostat.down(3)
    expect(thermostat.usage()).toEqual("low-usage");
  });
  it('returns high-usage if temp > 24', function() {
    thermostat.up(9)
    expect(thermostat.usage()).toEqual("high-usage");
  });
  it('returns medium-usage if temp is < 25', function() {
    thermostat.up(3)
    expect(thermostat.usage()).toEqual("medium-usage");
  });
});
