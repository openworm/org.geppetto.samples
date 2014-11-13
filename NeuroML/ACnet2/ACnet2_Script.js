var data = acnet2.electrical;

data.getModelTree()

var nodes = Simulation.searchNodeByMetaType(data.ModelTree.Summary, "FunctionNode", G.plotFunctionNode)

//TODO: This needs to be changed once "addWidget" returns the widget just created
for (var i = 0; i<nodes.length; i++){G.addWidget(Widgets.PLOT); var plotObject = eval("Plot" + (i + 1)); plotObject.plotFunctionNode(nodes[i]); plotObject.setSize(200,450);}

//Adding Scatter3d 1
G.addWidget(3);
TreeVisualiserDAT1.setData(acnet2);
