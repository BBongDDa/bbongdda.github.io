var Body = {
  setColor: function (color) {
    $("body").css("color", color);
    // document.querySelector('body').style.color=color;
  },
  setBackgroundColor: function (color) {
    $("body").css("background-color", color);
    // document.querySelector('body').style.backgroundColor=color;
  },
};

var Links = {
  setColor: function (color) {
    $("a").css("color", color);
  },
};

var NightDayButton = {
  setValue: function (value) {
    document.querySelector("#night_day").value = value;
  },
};

function nightDayHandler(self) {
  if (self.value == "day") {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    NightDayButton.setValue("night");
    Links.setColor("blue");
  } else {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    NightDayButton.setValue("day");
    Links.setColor("powderblue");
  }
}

var TextSizeButton = {
  setValue: function (value) {
    document.querySelector("#text_size").value = value;
  },
};

function textSizeHandler(self) {
  if (self.value == "TEXT_bigger") {
    TextSizeButton.setValue("TEXT_smaller");
    $("body").toggleClass("text-size-bigger");
  } else {
    TextSizeButton.setValue("TEXT_bigger");
    $("body").toggleClass("text-size-bigger");
  }
}

var imgSizeButton = {
  setValue: function (value) {
    document.querySelector("#img_size").value = value;
  },
};

function imgSizeHandler(self) {
  if (self.value == "IMG_bigger") {
    imgSizeButton.setValue("IMG_smaller");
    $("img").toggleClass("img-size-bigger");
  } else {
    imgSizeButton.setValue("IMG_bigger");
    $("img").toggleClass("img-size-bigger");
  }
}
