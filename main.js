function ask() {
    const inputVal = document.getElementById("myInput").value;
    if (inputVal.length < 1) {
        document.getElementById("answers").innerHTML = "<img src=./magic/magic8ball_extra.png alt ='image'>";
  } else {
    var myImage = new Array();
    myImage[0] = "./magic/magic8ball_1.png"
    myImage[1] = "./magic/magic8ball_2.png"
    myImage[2] = "./magic/magic8ball_20.png"
    myImage[3] = "./magic/magic8ball_3.png"
    myImage[4] = "./magic/magic8ball_4.png"
    myImage[5] = "./magic/magic8ball_5.png"
    myImage[6] = "./magic/magic8ball_6.png"
    myImage[7] = "./magic/magic8ball_7.png"
    myImage[8] = "./magic/magic8ball_8.png"
    myImage[9] = "./magic/magic8ball_9.png"
    myImage[10] = "./magic/magic8ball_10.png"
    myImage[11] = "./magic/magic8ball_11.png"
    myImage[12] = "./magic/magic8ball_12.png"
    myImage[13] = "./magic/magic8ball_13.png"
    myImage[14] = "./magic/magic8ball_14.png"
    myImage[15] = "./magic/magic8ball_15.png"
    myImage[16] = "./magic/magic8ball_16.png"
    myImage[17] = "./magic/magic8ball_17.png"
    myImage[18] = "./magic/magic8ball_18.png"
    myImage[19] = "./magic/magic8ball_19.png"
    var random = Math.floor(Math.random() * myImage.length);
    document.getElementById("answers").innerHTML = "<img src='" 
      + myImage[random] + "' alt='image'>";
  }
}

  function hideElements() {
    var x = document.getElementById("ask");
    x.style.display = "none";
    var y = document.getElementById("directions");
    y.style.display = "none";
  }

  function getInputValue() {
    const inputVal = document.getElementById("myInput").value;
    console.log(inputVal);
    if (inputVal.length < 1) {
        document.getElementById("question").innerHTML = "Ask Question";
  } else {
    document.getElementById("question").innerHTML = inputVal;
  }

}

  function showInputValue() {
    div = document.getElementById("question");
    div.style.display = "block";
  }

  function rotate() {
    var img = document.getElementById("answers");
    img.rotate(20*Math.PI/180);
    }