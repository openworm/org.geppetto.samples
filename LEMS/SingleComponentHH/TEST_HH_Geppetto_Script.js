Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].v", "example1.hhpop[0].spiking"]}]);
Simulation.startWatch();
Simulation.start();


//Adding Plot 1

G.addWidget(Widgets.PLOT);

Plot1.setName("Hodgkin-Huxley Spiking Neuron");

options = {yaxis:{min:-.1,max:0.1},xaxis:{min:0,max:400,show:false}};

Plot1.setOptions(options);
Plot1.setPosition(113, 90);
Plot1.setSize(230,352)
Plot1.plotState("hhpop[0].v");
Plot1.plotState("hhpop[0].spiking");



Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].bioPhys1.membraneProperties.naChans.gDensity"]}]);

G.wait(100);

G.addWidget(Widgets.PLOT);

options = {yaxis:{min:0,max:250},xaxis:{min:0,max:400,show:false}};

Plot2.setPosition(113, 336);
Plot2.setSize(200,352)
Plot2.setName("Conductance Density");
Plot2.setOptions(options);
Plot2.plotState("hhpop[0].bioPhys1.membraneProperties.naChans.gDensity");

//Adding Plot 3

Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q", "example1.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q"]}]);
Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q"]}]);

G.wait(100);

G.addWidget(Widgets.PLOT);

var options = {yaxis:{min:0,max:1},xaxis:{min:0,max:400,show:false}};

Plot3.setOptions(options)
Plot3.setName("Gating Variables");
Plot3.setPosition(710,90);
Plot3.setSize(285,352)
Plot3.plotState("hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q");
Plot3.plotState("hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q");
Plot3.plotState("hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q");






