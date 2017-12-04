var packagingmutateRate = 0;


var colorSlider = d3.select("#colorSlider"),
    margin = {right: 50, left: 50},
    width = + colorSlider.attr("width") - margin.left - margin.right,
    height = + colorSlider.attr("height");

var x = d3.scaleLinear()
    .domain([0, 1])
    .range([0, width])
    .clamp(true);

var y = d3.scaleLinear()
    .domain([0, 1])
    .range([0, 1])
    .clamp(true);

var z = d3.scaleLinear()
    .domain([0, 1])
    .range([1, 0])
    .clamp(true);



var slider3 = colorSlider.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + height / 2 + ")");

slider3.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { slider3.interrupt(); })
        .on("start drag", function() { hue3(x.invert(d3.event.x)); }));

slider3.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "start")
    .text("Not very colorful");

slider3.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(400," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "end")
    .text("Very colorful");

var handle3 = slider3.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);


var question3 = slider3.insert("g", ".question")
    .attr("class", "question")
    .attr("transform", "translate(0,0)")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("y",-20)
    .attr("text-anchor", "left")
    .text("How would you describe the color on the packaging?");



slider3.transition() // Gratuitous intro!
    .duration(0)
    .tween("hue3", function() {
      var i = d3.interpolate(0, .5);
      return function(t) { hue3(i(t)); };
    });



function hue3(h) {
  handle3.attr("cx", x(h));

  packagingmutateRate = z(h);

  return packagingmutateRate;


}
 














