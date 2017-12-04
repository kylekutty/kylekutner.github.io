var packagingarcrotationrate = 0;



var typeSlider = d3.select("#typeSlider"),
    margin = {right: 50, left: 50},
    width = +typeSlider.attr("width") - margin.left - margin.right,
    height = +typeSlider.attr("height");

var x = d3.scaleLinear()
    .domain([0, 1])
    .range([0, width])
    .clamp(true);

var y = d3.scaleLinear()
    .domain([0, 1])
    .range([0, 1])
    .clamp(true);



var slider11 = typeSlider.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + height / 2 + ")");

slider11.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { slider11.interrupt(); })
        .on("start drag", function() { hue11(x.invert(d3.event.x)); }));



slider11.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "start")
    .text("Not expressive");

slider11.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 400)
    .attr("text-anchor", "end")
    .text("Expressive");
  

var handle11 = slider11.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);


var question11 = slider11.insert("g", ".question")
    .attr("class", "question")
    .attr("transform", "translate(0,0)")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("y",-20)
    .attr("text-anchor", "left")
    .text("How would you describe the type of the logo?");



slider11.transition() // Gratuitous intro!
    .duration(0)
    .tween("hue11", function() {
      var i = d3.interpolate(0, .5);
      return function(t) { hue11(i(t)); };
    });



function hue11(h) {
  handle11.attr("cx", x(h));

  packagingarcrotationrate = y(h);

  return packagingarcrotationrate;

}















