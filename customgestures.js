const loveYouGesture = new GestureDescription('i_love_you'); 

// Thumb 
loveYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.50);
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.50);

// Index
loveYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);

// Pinky
loveYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.75);

for(let finger of [Finger.Middle, Finger.Ring]){
    loveYouGesture.addCurl(finger, FingerCurl.FullCurl, .75); 
    loveYouGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}

const letterA = new GestureDescription("letterA");

letterA.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterA.addDirection(Finger.Thumb, FingerDirection.HorizontalUp, 0.75);

for(let finger of [Finger.Index,Finger.Middle, Finger.Ring, Finger.Pinky]){
    letterA.addCurl(finger, FingerCurl.FullCurl, .75); 
    letterA.addDirection(finger, FingerDirection.VerticalDown, 0.75);
}

const letterB = new GestureDescription("letterB");

for(let finger of [Finger.Index,Finger.Middle, Finger.Ring, Finger.Pinky]){
    letterB.addCurl(finger, FingerCurl.NoCurl, .75); 
    letterB.addDirection(finger, FingerDirection.VerticalUp, 0.50);
}

letterB.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0)

const letterC = new GestureDescription("letterC");

for(let finger of [Finger.Index,Finger.Middle, Finger.Ring, Finger.Pinky, Finger.Thumb]){
    letterC.addCurl(finger, FingerCurl.HalfCurl, 1.0); 
}

const letterD = new GestureDescription("letterD");

letterD.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterD.addDirection(Finger.Thumb, FingerDirection.HorizontalUp, 0.75);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]){
    letterD.addCurl(finger, FingerCurl.FullCurl, 1.0); 
    letterD.addDirection(finger, FingerDirection.VerticalDown, 0.75);
}
letterD.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);