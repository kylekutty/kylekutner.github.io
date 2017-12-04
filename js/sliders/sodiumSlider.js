var nutritionmutateRate = 0;



var sodiumSlider = d3.select("#sodiumSlider"),
    margin = {right: 50, left: 50},
    width = +sodiumSlider.attr("width") - margin.left - margin.right,
    height = +sodiumSlider.attr("height");

var x = d3.scaleLinear()
    .domain([0, 1])
    .range([0, width])
    .clamp(true);

var y = d3.scaleLinear()
    .domain([0, 1])
    .range([0, 1])
    .clamp(true);



var slider10 = sodiumSlider.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + height / 2 + ")");

slider10.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { slider10.interrupt(); })
        .on("start drag", function() { hue10(x.invert(d3.event.x)); }));



slider10.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "start")
    .text("0");

slider10.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 100)
    .attr("text-anchor", "middle")
    .text("50");

slider10.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 200)
    .attr("text-anchor", "middle")
    .text("100");

slider10.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 300)
    .attr("text-anchor", "middle")
    .text("150");

slider10.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 400)
    .attr("text-anchor", "end")
    .text("200+");
  

var handle10 = slider10.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);


var question10 = slider10.insert("g", ".question")
    .attr("class", "question")
    .attr("transform", "translate(0,0)")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("y",-20)
    .attr("text-anchor", "left")
    .text("How many milligrams of sodium are in a serving?");



slider10.transition() // Gratuitous intro!
    .duration(0)
    .tween("hue10", function() {
      var i = d3.interpolate(0, .5);
      return function(t) { hue10(i(t)); };
    });



function hue10(h) {
  handle10.attr("cx", x(h));

  nutritionmutateRate = z(h);

  return nutritionmutateRate;

}















