

function onWindowLoadHandler() {


    var prevMonth = document.querySelector("#prevMonth");
    var nextMonth = document.querySelector("#nextMonth");

    var d = new Date();
    var currentYear = d.getFullYear();
    var currentMonth = d.getMonth();

    var currentYearMonthEl = document.querySelector("#header h1")

    prevMonth.addEventListener("click", onPrevMonthClickHandler );
    nextMonth.addEventListener("click", onNextMonthClickHandler );


    function onPrevMonthClickHandler() {
        cleanCalendar();
        currentMonth = currentMonth -1;
        d.setMonth( currentMonth );
        currentYear = d.getFullYear();
        currentMonth = d.getMonth();

        drawCalendar( currentYear, currentMonth )
        drawCurrentYearMonth();
    }

    function onNextMonthClickHandler() {
        cleanCalendar();
        currentMonth = currentMonth +1;
        d.setMonth( currentMonth );
        currentYear = d.getFullYear();
        currentMonth = d.getMonth();

        drawCalendar( currentYear, currentMonth )
        drawCurrentYearMonth();
    }

    function drawCurrentYearMonth() {
        currentYearMonthEl.innerText = currentYear + "." + (currentMonth+1);
    }


    var trList = document.querySelectorAll("#calWrap table tbody tr");

    cleanCalendar();
    drawCalendar( currentYear, currentMonth );
    drawCurrentYearMonth();

    function drawCalendar( yearValue, monthValue ) {
        var date = new Date() ;
        date.setFullYear(yearValue);
        date.setMonth(monthValue);
        date.setDate(1);

        var currentYear = date.getFullYear();
        var currentMonth = date.getMonth();
        var currentDate = date.getDate();
        var currentDay = date.getDay();
        var currentWeek = 0;

        var cell;
        while ( currentDate <= 31 ) {

            if (currentMonth != date.getMonth()) break;

            cell = trList[ currentWeek ].children[currentDay];
            cell.innerText = currentDate;

            if (currentDay == 6) {
                currentWeek = currentWeek + 1;
            }

            currentDate = currentDate + 1;
            date.setDate(currentDate);
            currentDay = date.getDay();
        }
    }


    function cleanCalendar() {

        var len = trList.length;
        var cellList, jlen;
        for ( var i=0; i<len; i++ ){
            cellList = trList[i].children;
            jlen = cellList.length;
            for ( var j=0; j<jlen; j++ ){
                cellList[j].innerText ="";
            }


        }

    }

}



window.addEventListener("load", onWindowLoadHandler );