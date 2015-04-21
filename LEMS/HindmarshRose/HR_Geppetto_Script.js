hhcell.electrical.getSimulationTree();

Simulation.setWatchedVariables([hhcell.electrical.SimulationTree.hr_chaotic_pop[0].x, hhcell.electrical.SimulationTree.hr_chaotic_pop[0].y, hhcell.electrical.SimulationTree.hr_chaotic_pop[0].z]);
Simulation.start();

//Adding Scatter3d 1
G.addWidget(2);
Scatter3d1.setName("Hindmarsh-Rose Spiking Neuron");
Scatter3d1.setPosition(113, 90);
Scatter3d1.setSize(460,800); 
options = {plotEachN:10};
Scatter3d1.plotData([hhcell.electrical.SimulationTree.hr_chaotic_pop[0].x, hhcell.electrical.SimulationTree.hr_chaotic_pop[0].y, hhcell.electrical.SimulationTree.hr_chaotic_pop[0].z], options);



