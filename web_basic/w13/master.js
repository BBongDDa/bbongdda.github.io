var Body = {
    setColor : function(color){
        document.querySelector('body').style.color = color;
    },

    setBackgroundColor : function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor : function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}

var NightDayButton = {
    setValue : function(value){
        document.querySelector('#night_day_2').value = value;
        document.querySelector('#night_day').value = value;
    }
}

function nightDayHandler(self){
    if(self.value == 'day'){
        Body.setBackgroundColor('white');
        Body.setColor('black');
        NightDayButton.setValue('night');
        Links.setColor('blue');
    } else {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        NightDayButton.setValue('day');
        Links.setColor('powderblue');
    }
}