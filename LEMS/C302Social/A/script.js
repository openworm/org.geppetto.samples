Simulation.addWatchLists([{name:"hhvars",variablePaths:["c302.ASHR_0.electrical.SimulationTree.generic_iaf_cell.v","c302.ASKR_0.electrical.SimulationTree.generic_iaf_cell.v","c302.AWBR_0.electrical.SimulationTree.generic_iaf_cell.v","c302.IL2R_0.electrical.SimulationTree.generic_iaf_cell.v","c302.RMGR_0.electrical.SimulationTree.generic_iaf_cell.v","c302.RMHR_0.electrical.SimulationTree.generic_iaf_cell.v","c302.URXR_0.electrical.SimulationTree.generic_iaf_cell.v"]}]);
Simulation.startWatch();
Simulation.start();

G.addWidget(GEPPETTO.Widgets.PLOT);
Plot1.setOptions({yaxis:{min:-.08,max:-.04},xaxis:{min:0,max:400,show:false}});

Plot1.setPosition(146,72);
Plot1.setSize(331.80000019073486,620.8000001907349);
Plot1.setName("Membrane potentials");
Plot1.plotData(c302.ASHR_0.electrical.SimulationTree.generic_iaf_cell.v);
Plot1.plotData(c302.ASKR_0.electrical.SimulationTree.generic_iaf_cell.v);
Plot1.plotData(c302.AWBR_0.electrical.SimulationTree.generic_iaf_cell.v);
Plot1.plotData(c302.IL2R_0.electrical.SimulationTree.generic_iaf_cell.v);
Plot1.plotData(c302.RMGR_0.electrical.SimulationTree.generic_iaf_cell.v);
Plot1.plotData(c302.RMHR_0.electrical.SimulationTree.generic_iaf_cell.v);
Plot1.plotData(c302.URXR_0.electrical.SimulationTree.generic_iaf_cell.v);

Simulation.addBrightnessFunction(c302.ASHR_0.electrical, c302.ASHR_0.electrical.SimulationTree.generic_iaf_cell.v, function(x){return (x+0.06)/0.06;});
Simulation.addBrightnessFunction(c302.ASKR_0.electrical, c302.ASKR_0.electrical.SimulationTree.generic_iaf_cell.v, function(x){return (x+0.06)/0.06;});
Simulation.addBrightnessFunction(c302.AWBR_0.electrical, c302.AWBR_0.electrical.SimulationTree.generic_iaf_cell.v, function(x){return (x+0.06)/0.06;});
Simulation.addBrightnessFunction(c302.IL2R_0.electrical, c302.IL2R_0.electrical.SimulationTree.generic_iaf_cell.v, function(x){return (x+0.06)/0.06;});
Simulation.addBrightnessFunction(c302.RMGR_0.electrical, c302.RMGR_0.electrical.SimulationTree.generic_iaf_cell.v, function(x){return (x+0.06)/0.06;});
Simulation.addBrightnessFunction(c302.RMHR_0.electrical, c302.RMHR_0.electrical.SimulationTree.generic_iaf_cell.v, function(x){return (x+0.06)/0.06;});
Simulation.addBrightnessFunction(c302.URXR_0.electrical, c302.URXR_0.electrical.SimulationTree.generic_iaf_cell.v, function(x){return (x+0.06)/0.06;});

c302.electrical.getModelTree();
G.addWidget(3);
TreeVisualiserDAT1.setData(c302);
TreeVisualiserDAT1.setPosition(784,110);
TreeVisualiserDAT1.setName("C302 social circuit");
