
var dcjs_example = "http://localhost/l3-dcjs-pythoncgi/dcjs-example"

var linechart = dc.lineChart("#chart1");
var composite = dc.compositeChart("#chart2");

d3.csv(dcjs_example + "/data.csv", function(error, volts) {
  volts.forEach(function(d) {
    d.line0_volts = +d.line0_volts;
    d.line013_time = +d.line013_time; 

    d.line1_volts = +d.line1_volts;
    d.line2_volts = +d.line2_volts;
    d.line2_time = +d.line2_time;
    d.line3_volts = +d.line3_volts;
  });

  var ndx = crossfilter(volts);
  var timeDimension = ndx.dimension(function(d) {
    return d.line013_time;
  });

  var line0Group = timeDimension.group().reduceSum(function(d) { return d.line0_volts; });
  var line1Group = timeDimension.group().reduceSum(function(d) { return d.line1_volts; });
  var line3Group = timeDimension.group().reduceSum(function(d) { return d.line3_volts; });

  linechart
    .width(990)
    .height(200)
    .transitionDuration(500)
    .dimension(timeDimension)
    .group(line0Group)
    .colors('blue')
    .brushOn(true)
    .x(d3.scale.linear().domain([0,2]));

  composite
    .width(900)
    .height(200)
    .transitionDuration(500)
    .mouseZoomable(false)
    .brushOn(false)
    .elasticY(true)
    .rangeChart(linechart)
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


