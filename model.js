const Letras = {i_love_you : "Te amo", letterA: "A", letterB : "B", letterC: "C", letterD: "D"};

const fatorDecisivo = {teste : undefined};

let timer = undefined;

let fingerLookupIndices = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20]
  };

  const style = {
      0: { color: "yellow", size: 15 },
      1: { color: "gold", size: 6 },
      2: { color: "green", size: 10 },
      3: { color: "gold", size: 6 },
      4: { color: "gold", size: 6 },
      5: { color: "purple", size: 10 },
      6: { color: "gold", size: 6 },
      7: { color: "gold", size: 6 },
      8: { color: "gold", size: 6 },
      9: { color: "blue", size: 10 },
      10: { color: "gold", size: 6 },
      11: { color: "gold", size: 6 },
      12: { color: "gold", size: 6 },
      13: { color: "red", size: 10 },
      14: { color: "gold", size: 6 },
      15: { color: "gold", size: 6 },
      16: { color: "gold", size: 6 },
      17: { color: "orange", size: 10 },
      18: { color: "gold", size: 6 },
      19: { color: "gold", size: 6 },
      20: { color: "gold", size: 6 },
  };

  function drawPoint(x, y, i) {
      ctx.beginPath();
      ctx.arc(x, y, style[i]["size"], 0, 3 * Math.PI);

      ctx.fillStyle = style[i]["color"];
      ctx.fill();
  }

  function drawKeypoints(keypoints) {
    const keypointsArray = keypoints;

    for (let i = 0; i < keypointsArray.length; i++) {
      const x = keypointsArray[i][0];
      const y = keypointsArray[i][1];
      drawPoint(x, y,i);
    }

    const fingers = Object.keys(fingerLookupIndices);
    for (let i = 0; i < fingers.length; i++) {
      const finger = fingers[i];
      const points = fingerLookupIndices[finger].map(idx => keypoints[idx]);
      drawPath(points, false);
    }
  }

  function drawPath(points, closePath) {
    const region = new Path2D();
    region.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      const point = points[i];
      region.lineTo(point[0], point[1]);
    }

    if (closePath) {
      region.closePath();
    }
    ctx.stroke(region);
  }
  let video = document.getElementById('videoElement');
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let model;
  const setUpCamera = () => {
      if(navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({video: true})
              .then(function(stream) {
                  video.srcObject = stream;
              })
              .catch(function(err) {
                  console.log(err);
              });
      }
  }
  const detectHandPoses = async () => {
        const hand = await model.estimateHands(video);
        ctx.drawImage(video,0,0,640,480);
        ctx.beginPath();
        ctx.strokeStyle='gray';
        ctx.lineWidth = '4';
        //console.log(prediction);
        hand.forEach((pred) => {
            const result = pred.landmarks;
            const annotations = pred.annotations;
            drawKeypoints(result, annotations);
        });

        // console.log(hand)

        if (hand.length > 0) {
            const GE = new fp.GestureEstimator([
                loveYouGesture,
                letterA,
                letterB,
                letterC,
                letterD
            ]);
            
            const gesture = await GE.estimate(hand[0].landmarks, 4);
            
            //console.log(gesture);

            if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          
              // console.log(gesture.gestures)
    
              const confidence = gesture.gestures.map(
                (prediction) => prediction.score
              );
    
              const maxConfidence = confidence.indexOf(
                Math.max.apply(null, confidence)
              );
              
              document.getElementById("content").innerHTML = gesture.gestures[maxConfidence].name;

             // console.log(gesture.gestures[maxConfidence].name)
             // var newgest = gesture.gestures[maxConfidence].name;

             // if(fatorDecisivo[newgest] === fatorDecisivo["teste"]){
             //   fatorDecisivo[newgest] = 1;
             // }
             // else{
             //  var valor = fatorDecisivo[newgest];
             //   fatorDecisivo[newgest] = valor + 1;
             // }
              //console.log(fatorDecisivo)

             // document.getElementById("content").innerHTML = Letras[newgest]

            //  setTimeout(() => {
            //    clearInterval(timer)
            //    console.log('Passou aqui')
            //    document.getElementById("content").innerHTML = Object.keys(fatorDecisivo).reduce((a, b) => fatorDecisivo[a] > fatorDecisivo[b] ? a : b)
            //  },5000)

            //  console.log(Object.values(fatorDecisivo).reduce((a, b) => fatorDecisivo[a] > fatorDecisivo[b] ? a : b));
            }
        }
  }
  
  setUpCamera();
  video.addEventListener("loadeddata", async () => {
      model = await handpose.load();
      timer = setInterval(detectHandPoses,100);
  });

