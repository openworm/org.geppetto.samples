Simulation.addWatchLists([{name:"sphvars",variablePaths:["sph.particle[1].position.y", "sph.particle[1].position.x"]}]);

Simulation.startWatch();

G.addWidget(Widgets.PLOT);

var options = {yaxis:{min:-.1,max:0.1},xaxis:{min:0,max:50,show:false}};

Plot1.setOptions(options)

Plot1.setPosition(194,140);

Simulation.start();

Plot1.plotData(particle[1].position.x);

Plot1.plotData(particle[1].position.y);


