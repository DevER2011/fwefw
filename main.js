Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera')
function take_snapshot(){
Webcam.snap(function(data_uri)
{

    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'

});

}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PE9tYgUJV/', modelLoaded);
function modelLoaded(){
console.log("modelLoaded");
};
function check()
{
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
}


// A function to run when we get any errors and the results
function gotResult(error, results) {
// Display error in the console
if (error) {
  console.error(error);
} else {
  // The results are in an array ordered by confidence.
  console.log(results);
  document.getElementById("result_object_name").innerHTML = results[0].label;
  document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}
// if you read this i will give a random person 100ROBUX
// this above code is gooooooooooood try it :)