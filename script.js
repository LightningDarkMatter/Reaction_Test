var start = new Date().getTime();
            var end = new Date().getTime();
            var time = end - start;

            function randomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            function makeShapeAppear() {
                var top = Math.random() * 300;
                var left = Math.random() * 300;
                var size = Math.random() * 300;

                if (Math.random() > 0.5) {
                    document.getElementById('shape').style.borderRadius = '50%';
                } else {
                    document.getElementById('shape').style.borderRadius = '0';
                }

                document.getElementById("shape").style.top = top + "px";
                document.getElementById("shape").style.left = left + "px";
                document.getElementById("shape").style.width = size + "px";
                document.getElementById("shape").style.height = size + "px";
                document.getElementById("shape").style.backgroundColor = randomColor();
                document.getElementById("shape").style.display = "block";
                start = new Date().getTime();
                
            }

            function shapeAppear() {
                setTimeout(makeShapeAppear, Math.random() * 2000);
            }

            shapeAppear();

            document.getElementById("shape").onclick = function() {
                document.getElementById("shape").style.display = "none";
                end = new Date().getTime();
                time = (end - start) / 1000;
                document.getElementById("time").innerHTML = time + "s";

                shapeAppear();
            };
            