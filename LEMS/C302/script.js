Simulation.addWatchLists([{name:"hhvars",variablePaths:["c302.electrical.ADAR.0.generic_iaf_cell.v","c302.electrical.ADAL.0.generic_iaf_cell.v","c302.electrical.BDUR.0.generic_iaf_cell.v","c302.electrical.I1R.0.generic_iaf_cell.v","c302.electrical.I2L.0.generic_iaf_cell.v","c302.electrical.PVDR.0.generic_iaf_cell.v"]}]);
Simulation.startWatch();
Simulation.start();

G.addWidget(GEPPETTO.Widgets.PLOT);
Plot1.setOptions({yaxis:{min:-.08,max:-.04},xaxis:{min:0,max:800,show:false}});

Plot1.setPosition(146,72);
Plot1.plotData("c302.electrical.adal.0.generic_iaf_cell.v");
Plot1.plotData("c302.electrical.adar.0.generic_iaf_cell.v");
Plot1.plotData("c302.electrical.bdur.0.generic_iaf_cell.v");
Plot1.plotData("c302.electrical.i1r.0.generic_iaf_cell.v");
Plot1.plotData("c302.electrical.i2l.0.generic_iaf_cell.v");
Plot1.plotData("c302.electrical.pvdr.0.generic_iaf_cell.v");

window.setTimeout(function(){Simulation.addBrightnessFunction("c302.electrical.adal", "c302.electrical.adal.0.generic_iaf_cell.v", function(x){return (x+0.06)/0.06;})},500);
window.setTimeout(function(){Simulation.addBrightnessFunction("c302.electrical.adar", "c302.electrical.adar.0.generic_iaf_cell.v", function(x){return (x+0.06)/0.06;})},500);
window.setTimeout(function(){Simulation.addBrightnessFunction("c302.electrical.bdur", "c302.electrical.bdur.0.generic_iaf_cell.v", function(x){return (x+0.06)/0.06;})},500);
window.setTimeout(function(){Simulation.addBrightnessFunction("c302.electrical.i1r", "c302.electrical.i1r.0.generic_iaf_cell.v", function(x){return (x+0.06)/0.06;})},500);
window.setTimeout(function(){Simulation.addBrightnessFunction("c302.electrical.i2l", "c302.electrical.i2l.0.generic_iaf_cell.v", function(x){return (x+0.06)/0.06;})},500);
window.setTimeout(function(){Simulation.addBrightnessFunction("c302.electrical.pvdr", "c302.electrical.pvdr.0.generic_iaf_cell.v", function(x){return (x+0.06)/0.06;})},500);
