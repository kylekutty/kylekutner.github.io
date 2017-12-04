
var packagingBlobRotationWidth=1;

var packagingBlobRotationHeight=1;




var packagingrate = 1;
var packagingrevolution = 1;


function updatePackagingBlobPositionWidth(){
    var t = new Date().getTime();

    packagingBlobRotationWidth = (Math.sin(t/(500*(packagingrate+.001)))*(40*packagingrevolution));

    return packagingBlobRotationWidth;


}

function updatePackagingBlobPositionHeight(){
    var t = new Date().getTime();

    packagingBlobRotationHeight = (Math.cos(t/(500*(packagingrate+.001)))*(40*packagingrevolution));

    return packagingBlobRotationHeight;


}


var priceSlider = d3.select("#priceSlider"),
    margin = {right: 50, left: 50},
    width = +priceSlider.attr("width") - margin.left - margin.right,
    height = +priceSlider.attr("height");

var x = d3.scaleLinear()
    .domain([0, 1])
    .range([0, width])
    .clamp(true);

var y = d3.scaleLinear()
    .domain([0, 1])
    .range([0, 1])
    .clamp(true);



var slider9 = priceSlider.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + height / 2 + ")");

slider9.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { slider9.interrupt(); })
        .on("start drag", function() { hue9(x.invert(d3.event.x)); }));



slider9.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "start")
    .text("Expensive");

slider9.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 400)
    .attr("text-anchor", "end")
    .text("Cheap");
  

var handle9 = slider9.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);


var question9 = slider9.insert("g", ".question")
    .attr("class", "question")
    .attr("transform", "translate(0,0)")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("y",-20)
    .attr("text-anchor", "left")
    .text("What would you assume about this item's price?");



slider9.transition() // Gratuitous intro!
    .duration(0)
    .tween("hue9", function() {
      var i = d3.interpolate(0, .5);
      return function(t) { hue9(i(t)); };
    });



function hue9(h) {
  handle9.attr("cx", x(h));

  packagingrate = z(h);

  return packagingrate;

}















