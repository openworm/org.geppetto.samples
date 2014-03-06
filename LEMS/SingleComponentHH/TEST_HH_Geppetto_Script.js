Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q", "example1.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q"]}]);

Simulation.startWatch();

G.addWidget(Widgets.PLOT);

var options = {yaxis:{min:0,max:1},xaxis:{min:0,max:100,show:false}};

Plot1.setOptions(options)

Plot1.setName("Hodgkin-Huxley Spiking Neuron");

Plot1.setPosition(114,169);

Simulation.start();

Plot1.plotData(hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q);

Plot1.plotData(hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q);

G.showConsole(true);

G.wait(1000);

G.addWidget(Widgets.PLOT);

Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].bioPhys1.membraneProperties.naChans.gDensity"]}]);

Plot2.setOptions(options);

Plot2.setPosition(873, 102);

Plot2.plotData(hhpop[0].bioPhys1.membraneProperties.naChans.gDensity);

G.wait(1500);

Simulation.load("https://raw.github.com/openworm/org.geppetto.samples/master/SPH/LiquidSmall/GEPPETTO_SCRIPTED.xml")

G.wait(1000);

G.addWidget(Widgets.PLOT);

Simulation.addWatchLists([{name:"sphvars",variablePaths:["sph.particle[1].position.z"]}]);

Plot2.setOptions(options);

Plot2.setPosition(773, 102);

Plot2.plotData(sph.particle[1].position.z);