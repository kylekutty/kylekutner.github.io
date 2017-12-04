var colorChanger2 = 1;


var caloricContentSlider = d3.select("#caloricContentSlider"),
    margin = {right: 50, left: 50},
    width = +caloricContentSlider.attr("width") - margin.left - margin.right,
    height = +caloricContentSlider.attr("height");

var x = d3.scaleLinear()
    .domain([0, 1])
    .range([0, width])
    .clamp(true);

var y = d3.scaleLinear()
    .domain([0, 1])
    .range([0, 1])
    .clamp(true);



var slider8 = caloricContentSlider.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + height / 2 + ")");

slider8.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { slider8.interrupt(); })
        .on("start drag", function() { hue8(x.invert(d3.event.x)); }));



slider8.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "start")
    .text("0");

slider8.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 100)
    .attr("text-anchor", "middle")
    .text("50");

slider8.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 200)
    .attr("text-anchor", "middle")
    .text("100");

slider8.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 300)
    .attr("text-anchor", "middle")
    .text("150");

slider8.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 400)
    .attr("text-anchor", "end")
    .text("200+");
  

var handle8 = slider8.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);


var question8 = slider8.insert("g", ".question")
    .attr("class", "question")
    .attr("transform", "translate(0,0)")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("y",-20)
    .attr("text-anchor", "left")
    .text("How many calories are in a single serving?");



slider8.transition() // Gratuitous intro!
    .duration(0)
    .tween("hue8", function() {
      var i = d3.interpolate(0, .5);
      return function(t) { hue8(i(t)); };
    });



function hue8(h) {
  handle8.attr("cx", x(h));

  nutritionrevolution = y(h);

  return nutritionrevolution;

}















