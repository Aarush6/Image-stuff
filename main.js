//https://teachablemachine.withgoogle.com/models/6wHoFa0qF/

function identify(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6wHoFa0qF/model.json",modelhasbeencompleted);
    }
    function modelhasbeencompleted(){
        console.log("Model done");
        classifier.classify(gotResult);
    }
    
    function gotResult(error, result){
        if(error) {
            console.log(error + "Experiment has failed");
        } else{
            console.log(result);
            random_red = Math.floor(Math.random()*250)+1;
            random_blue = Math.floor(Math.random()*250)+1;
            random_green = Math.floor(Math.random()*250)+1;
    
            document.getElementById("result").innerHTML = "Robot can listening - " + result[0].label;
            document.getElementById("accuracy").innerHTML="Robot confidents - " + (result[0].confidence*100).toFixed(2)+ "%";
            document.getElementById("result").style.color = "rgb("+random_red + "," + random_green + "," + random_blue+")";
            document.getElementById("accuracy").style.color = "rgb("+random_red + "," + random_green + "," + random_blue+")";
    
            animal=document.getElementById("image")
            
           
    
            if (result[0].label == "Roaring"){
                animal.src="Lion.jpg";
            }
            else if (result[0].label == "Meowing"){
               animal="Cat.jpg";
            }
    
            else if (result[0].label == "Barking"){
                animal.src="Doge.jpg";
            }
    
            else if (result[0].label == "Mooing") {
               animal.src="Cow.jpg";
            }
            else {
                animal.src="Waves.jpg";
            }
        }

    }