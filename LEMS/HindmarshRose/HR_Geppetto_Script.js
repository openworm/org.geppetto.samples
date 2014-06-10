Simulation.addWatchLists([{name:"hhvars",variablePaths:["hhcell.electrical.hr_chaotic_pop[0].x", "hhcell.electrical.hr_chaotic_pop[0].y", "hhcell.electrical.hr_chaotic_pop[0].z"]}]);
Simulation.startWatch();
Simulation.start();

//Adding Scatter3d 1
G.addWidget(2);
Scatter3d1.setName("Hindmarsh-Rose Spiking Neuron");
Scatter3d1.setPosition(113, 90);
Scatter3d1.setSize(400,545); 
//Scatter3d1.plotData(["hhcell.electrical.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q", "hhcell.electrical.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q","hhcell.electrical.hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q"]);
Scatter3d1.plotData(["hhcell.electrical.hr_chaotic_pop[0].x", "hhcell.electrical.hr_chaotic_pop[0].y", "hhcell.electrical.hr_chaotic_pop[0].z"]);


