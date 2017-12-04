var packagingrotationRate = 0;


var healthWordsSlider = d3.select("#healthWordsSlider"),
    margin = {right: 50, left: 50},
    width = + healthWordsSlider.attr("width") - margin.left - margin.right,
    height = + healthWordsSlider.attr("height");

var x = d3.scaleLinear()
    .domain([0, 1])
    .range([0, width])
    .clamp(true);

var y = d3.scaleLinear()
    .domain([0, 1])
    .range([0, 1])
    .clamp(true);



var slider5 = healthWordsSlider.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + height / 2 + ")");

slider5.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { slider5.interrupt(); })
        .on("start drag", function() { hue5(x.invert(d3.event.x)); }));

slider5.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "start")
    .text("0");

slider5.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 100)
    .attr("text-anchor", "middle")
    .text("1");

slider5.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 200)
    .attr("text-anchor", "middle")
    .text("2");

slider5.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 300)
    .attr("text-anchor", "middle")
    .text("3");

slider5.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 400)
    .attr("text-anchor", "end")
    .text("4+");

var handle5 = slider5.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);


var question5 = slider5.insert("g", ".question")
    .attr("class", "question")
    .attr("transform", "translate(0,0)")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("y",-20)
    .attr("text-anchor", "left")
    .text("How many health words (ex. organic, lean, etc.) are included?");



slider5.transition() // Gratuitous intro!
    .duration(0)
    .tween("hue5", function() {
      var i = d3.interpolate(0, .5);
      return function(t) { hue5(i(t)); };
    });



function hue5(h) {
  handle5.attr("cx", x(h));

  packagingrotationRate = z(h);

  return packagingrotationRate;
  

}















