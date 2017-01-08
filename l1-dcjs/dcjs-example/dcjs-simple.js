
var dcjs_example = "http://localhost/l1-dcjs/dcjs-example"

var linechart = dc.lineChart("#chart1");
var composite = dc.compositeChart("#chart2");

d3.csv(dcjs_example + "/data.csv", function(error, volts) {
  volts.forEach(function(d) {
    d.line0_volts = +d.line0_volts;   // Converts strings to float?
    d.line013_time = +d.line013_time; 

    d.line1_volts = +d.line1_volts;
    d.line2_volts = +d.line2_volts;
    d.line2_time = +d.line2_time;
    d.line3_volts = +d.line3_volts;
  });
  // We now have DataFrame "volts" that has
  // columns: line0_volts, line013_time... 

  var ndx = crossfilter(volts);

  // timeDimension will become index of new DataFrame we generate
  var timeDimension = ndx.dimension(function(d) {
    return d.line013_time;
  });


  // Think of these as new DataFrames for which 'timeDimension' is the index
  // In this example, each of the new DataFrame (Eg: line0Group) has only single column
  // Eg: line0Group DataFrame has single column: grouped by timeDimension and summed.
  var line0Group = timeDimension.group().reduceSum(function(d) { return d.line0_volts; });
  var line1Group = timeDimension.group().reduceSum(function(d) { return d.line1_volts; });
  var line3Group = timeDimension.group().reduceSum(function(d) { return d.line3_volts; });

  linechart
    .width(990)
    .height(200)
    .transitionDuration(500)
    .dimension(timeDimension) // 'timeDimension' is the index
    .group(line0Group)        // This is the dataframe to draw. Since only one column in this dataframe. No need specify which column
    .colors('blue')
    .brushOn(true) // Makes X-axis range selectable
    .x(d3.scale.linear().domain([0,2]));

  composite
    .width(900)
    .height(200)
    .transitionDuration(500)
    .mouseZoomable(false)
    .brushOn(false)
    .elasticY(true)
    .rangeChart(linechart)  // This is how filter range selected in 'linechart' propages to this chart
    .x(d3.scale.linear().domain([0,2]))
    .legend(dc.legend().x(800).y(20).itemHeight(15).gap(2))
    .title(function(d) { return d.key + '-->' + d.value})
    .compose([
    		dc.lineChart(composite)
		  .dimension(timeDimension)
		  .colors('blue')
		  .group(line0Group, "Line 0"),
		dc.lineChart(composite)
		  .dimension(timeDimension)
		  .colors('red')
		  .group(line1Group, "Line 1"),
		dc.lineChart(composite)
		  .dimension(timeDimension)
		  .colors('green')
  		  .group(line3Group, "Line 3")
		]);
    dc.renderAll();
})


