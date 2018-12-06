
for (var x = 0; x < 400; x += 25) {
    for (var y = 0; y < 400; y += 25) {
        var circle2 = new Path.Circle(new Point(x + 10, y + 10), 10);
        circle2.fillColor = "red";
    }
}