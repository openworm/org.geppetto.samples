Simulation.addWatchLists([{name:"sphvars",variablePaths:["sph.particle[1].position.y", "sph.particle[1].position.x"]}]);

Simulation.startWatch();

G.addWidget(Widgets.PLOT);

var options = {yaxis:{min:0,max:15},xaxis:{min:0,max:300,show:false}};

Plot1.setOptions(options)

Plot1.setPosition(194,140);

Simulation.start();

Plot1.plotState("particle[1].position.x");

Plot1.plotState("particle[1].position.y");


