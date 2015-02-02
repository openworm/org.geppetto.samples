Simulation.addWatchLists([{name:"musclevars",variablePaths:["MuscleModel.electrical.SimulationTree.neuron[0].generic_iaf_cell.v", "MuscleModel.electrical.SimulationTree.muscle[0].SingleCompMuscleCell.v", "MuscleModel.electrical.SimulationTree.muscle[0].SingleCompMuscleCell.caConc"]}]);
Simulation.startWatch();
Simulation.start();

options = {yaxis:{min:-0.08,max:0.01},xaxis:{min:0,max:400,show:false}};
G.addWidget(GEPPETTO.Widgets.PLOT);
Plot1.setName("Voltage response muscle (mV)");
Plot1.setSize(256,453);
Plot1.setPosition(184,83);
Plot1.plotData(MuscleModel.electrical.SimulationTree.muscle[0].SingleCompMuscleCell.v,options);

options = {yaxis:{min:-0.000005,max:0.000055},xaxis:{min:0,max:400,show:false}};
G.addWidget(GEPPETTO.Widgets.PLOT);
Plot2.setName("Ca concentration muscle (mM)");
Plot2.setSize(256,453);
Plot2.setPosition(184,340);
Plot2.plotData(MuscleModel.electrical.SimulationTree.muscle[0].SingleCompMuscleCell.caConc,options);

options = {yaxis:{min:-.1,max:0.1},xaxis:{min:0,max:400,show:false}};
G.addWidget(GEPPETTO.Widgets.PLOT);
Plot3.setName("Voltage response neuron (mV)");
Plot3.setSize(256,453);
Plot3.setPosition(639,84)
Plot3.plotData(MuscleModel.electrical.SimulationTree.neuron[0].generic_iaf_cell.v,options);

G.addWidget(GEPPETTO.Widgets.TREEVISUALISERDAT);
TreeVisualiserDAT1.setData(MuscleModel);
TreeVisualiserDAT1.setPosition(397,77);
TreeVisualiserDAT1.setPosition(639,339)
TreeVisualiserDAT1.setSize(256,453);
