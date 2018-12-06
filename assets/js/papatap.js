// var circle2 = new Path.Circle(new Point(x + 10, y + 10), 10);
// circle2.fillColor = "red";    

function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;

    new Path.Circle(point, 10).fillColor = "orange";
}