import { useLayoutEffect } from "react";

export default function EncomGlobeElement() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      var globe,
        globeCount = 0;
      var globalSatelliteColor = "#ff0000";

      const containerDimensions = {
        width: document.getElementById("container").offsetWidth,
        height: document.getElementById("container").offsetHeight,
      };

      function createGlobe() {
        var newData = [];
        globeCount++;
        document.getElementById("globe").innerHTML = "";

        newData = window.data.slice();

        globe = new window.ENCOM.Globe(
          containerDimensions.width,
          containerDimensions.height,
          {
            font: "Inter",
            data: newData, // copy the data array
            tiles: window.grid.tiles,
            baseColor: "#7DD3FC",
            markerColor: "#fff",
            pinColor: "#8FD8D8",
            satelliteColor: globalSatelliteColor,
            scale: 1,
            dayLength: 28000,
            introLinesDuration: 2000,
            maxPins: 500,
            maxMarkers: 200,
            viewAngle: 0.1,
          }
        );

        document.getElementById("globe").appendChild(globe.domElement);
        globe.init(start);
      }

      function onWindowResize() {
        globe.camera.aspect =
          containerDimensions.width / containerDimensions.height;
        globe.camera.updateProjectionMatrix();
        globe.renderer.setSize(
          containerDimensions.width,
          containerDimensions.height
        );
      }

      function animate() {
        if (globe) {
          globe.tick();
        }
        window.lastTickTime = Date.now();
        requestAnimationFrame(animate);
      }

      function start() {
        if (globeCount === 1) {
          animate();
        }

        /* add 6 satellites in random locations */
        /* setTimeout(function () {
        var constellation = [];
        var opts = {
          coreColor: globalSatelliteColor,
          numWaves: parseInt(8), // numWavse = Satellite intensity
        };

        for (var i = 0; i < 2; i++) {
          for (var j = 0; j < 3; j++) {
            constellation.push({
              lat: 50 * i - 30 + 15 * Math.random(),
              lon: 120 * j - 120 + 30 * i,
              altitude: 1.3,
            });
          }
        }
        globe.addConstellation(constellation, opts);
      }, 4000); */

        /* add the connected points/line over globe */
        setTimeout(function () {
          globe.addMarker(49.25, -123.1, "Vancouver");
          globe.addMarker(35.6895, 129.69171, "Tokyo", true);
        }, 1000);
      }

      window.addEventListener("resize", onWindowResize, false);

      /* window.WebFontConfig = {
      google: {
        families: ["Inconsolata"],
      },
    }; */
      createGlobe();

      /* web font stuff*/
      /* var wf = document.createElement("script");
    wf.src =
      ("https:" === document.location.protocol ? "https" : "http") +
      "://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js";
    wf.type = "text/javascript";
    wf.async = "true";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(wf, s); */
    }
  }, []);

  return (
    <div id="container" className="w-full h-full">
      <div id="globe" />
    </div>
  );
}
