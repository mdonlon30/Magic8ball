function ask() {
    var myImage = new Array();
    myImage[0] = "./magic/magic8ball_1.png"
    myImage[1] = "./magic/magic8ball_2.png"
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
    myImage[20] = "./magic/magic8ball_20.png"
    var random = Math.floor(Math.random() * myImage.length);
    document.getElementById("answers").innerHTML = "<img src='" 
      + myImage[random] + "' alt='image'></img>";
  }

  function hideElement() {
    var x = document.getElementById("ask");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function hideElement2() {
    var x = document.getElementById("directions");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function getInputValue() {
    var inputVal = document.getElementById("myInput").value;
    document.getElementById("question").innerHTML = inputVal;
  }

  function showQuestion() {
    div = document.getElementById("question");
    div.style.display = "block";
  }