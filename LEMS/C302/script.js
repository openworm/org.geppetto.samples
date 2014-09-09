Simulation.addWatchLists([{name:"hhvars",variablePaths:["c302.electrical.SimulationTree.ADAR.0.generic_iaf_cell.v","c302.electrical.SimulationTree.ADAL.0.generic_iaf_cell.v","c302.electrical.SimulationTree.BDUR.0.generic_iaf_cell.v","c302.electrical.SimulationTree.I1R.0.generic_iaf_cell.v","c302.electrical.SimulationTree.I2L.0.generic_iaf_cell.v","c302.electrical.SimulationTree.PVDR.0.generic_iaf_cell.v"]}]);
Simulation.startWatch();
Simulation.start();

G.addWidget(GEPPETTO.Widgets.PLOT);
Plot1.setOptions({yaxis:{min:-.08,max:-.04},xaxis:{min:0,max:400,show:false}});

Plot1.setPosition(146,72);
Plot1.setSize(331.80000019073486,620.8000001907349);
Plot1.setName("Membrane potentials");
Plot1.plotData(c302.electrical.SimulationTree.ADAL.0.generic_iaf_cell.v);
Plot1.plotData(c302.electrical.SimulationTree.ADAR.0.generic_iaf_cell.v);
Plot1.plotData(c302.electrical.SimulationTree.BDUR.0.generic_iaf_cell.v);
Plot1.plotData(c302.electrical.SimulationTree.I1R.0.generic_iaf_cell.v);
Plot1.plotData(c302.electrical.SimulationTree.I2L.0.generic_iaf_cell.v);
Plot1.plotData(c302.electrical.SimulationTree.PVDR.0.generic_iaf_cell.v);

window.setTimeout(function(){Simulation.addBrightnessFunction(c302.electrical.ADAL, c302.electrical.SimulationTree.ADAL.0.generic_iaf_cell.v, function(x){return (x+0.06)/0.06;})},500);
window.setTimeout(function(){Simulation.addBrightnessFunction(c302.electrical.ADAR, c302.electrical.SimulationTree.ADAR.0.generic_iaf_cell.v, function(x){return (x+0.06)/0.06;})},500);
window.setTimeout(function(){Simulation.addBrightnessFunction(c302.electrical.BDUR, c302.electrical.SimulationTree.BDUR.0.generic_iaf_cell.v, function(x){return (x+0.06)/0.06;})},500);
window.setTimeout(function(){Simulation.addBrightnessFunction(c302.electrical.I1R, c302.electrical.SimulationTree.I1R.0.generic_iaf_cell.v, function(x){return (x+0.06)/0.06;})},500);
window.setTimeout(function(){Simulation.addBrightnessFunction(c302.electrical.I2L, c302.electrical.SimulationTree.I2L.0.generic_iaf_cell.v, function(x){return (x+0.06)/0.06;})},500);
window.setTimeout(function(){Simulation.addBrightnessFunction(c302.electrical.PVDR, c302.electrical.SimulationTree.PVDR.0.generic_iaf_cell.v, function(x){return (x+0.06)/0.06;})},500);
