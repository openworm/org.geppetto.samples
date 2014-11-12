acnet2.electrical.getModelTree();

var data = acnet2.electrical.ModelTree.Summary;

searchNodeByMetaType(data, "FunctionNode", plotFunctionNode)

//Adding Scatter3d 1
//G.addWidget(3);
//TreeVisualiserDAT1.setData(acnet2);

function plotFunctionNode(data){
	if (data.plotMetadata != null){
		var expression = functionNode.getExpression();

		var finalValue = parseFloat(functionNode.plotMetadata["FinalValue"]);
		var initialValue = parseFloat(functionNode.plotMetadata["InitialValue"]);
		var stepValue = parseFloat(functionNode.plotMetadata["StepValue"]);

		var plotTitle = functionNode.plotMetadata["PlotTitle"];
		var XAxisLabel = functionNode.plotMetadata["XAxisLabel"];
		var YAxisLabel = functionNode.plotMetadata["YAxisLabel"];

		var dataArray = [];
		for (i=initialValue; i<finalValue; i = i + stepValue){dataArray.push([i]);}

		options = {xaxis:{min:initialValue,max:finalValue,show:true}};
		G.addWidget(Widgets.PLOT);

		Plot1.plotDataFunction("f(v) =" + expression, dataArray, options);
		Plot1.setName(plotTitle);
	}
}
function searchNodeByMetaType(data, metaType, action){
	if (data._metaType == metaType){
		action(data);
	}
	else{
		if (data.getChildren() != null){
			var children = data.getChildren().models;
			if (children.length > 0){
				for (var childIndex in children){
					searchNodeByMetaType(children[childIndex], "FunctionNode");
				}
			}
		}
	}
}
