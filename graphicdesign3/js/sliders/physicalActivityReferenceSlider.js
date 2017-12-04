var colorChanger1 = 1;


var physicalActivityReferenceSlider = d3.select("#physicalActivityReferenceSlider"),
    margin = {right: 50, left: 50},
    width = +physicalActivityReferenceSlider.attr("width") - margin.left - margin.right,
    height = +physicalActivityReferenceSlider.attr("height");

var x = d3.scaleLinear()
    .domain([0, 1])
    .range([0, width])
    .clamp(true);

var y = d3.scaleLinear()
    .domain([0, 1])
    .range([0, 1])
    .clamp(true);



var slider7 = physicalActivityReferenceSlider.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + height / 2 + ")");

slider7.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { slider7.interrupt(); })
        .on("start drag", function() { hue7(x.invert(d3.event.x)); }));



slider7.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "start")
    .text("No");

slider7.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 400)
    .attr("text-anchor", "end")
    .text("Yes");
  

var handle7 = slider7.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);


var question7 = slider7.insert("g", ".question")
    .attr("class", "question")
    .attr("transform", "translate(0,0)")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("y",-20)
    .attr("text-anchor", "left")
    .text("Is there a reference to physical activity?");



slider7.transition() // Gratuitous intro!
    .duration(0)
    .tween("hue7", function() {
      var i = d3.interpolate(0, .5);
      return function(t) { hue7(i(t)); };
    });



function hue7(h) {
  handle7.attr("cx", x(h));

  packagingrevolution = z(h);

  return packagingrevolution;

}















