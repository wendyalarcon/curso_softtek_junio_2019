// EJERCICIO 1

function ensure(value) {
    return (value === undefined) ? new error() : value;
}

// EJERCICIO 2

function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    var arrayDate = userDate.split("/");
    var day = arrayDate[0];
    var month = arrayDate[1];
    var year = arrayDate[2];


    if (day.length == 1) {
        day = "0" + day;
    }

    if (month.length == 1) {
        month = "0" + month;
    }

    return "" + year + "" + day + "" + month;
}

console.log(formatDate("12/31/2014"));

// EJERCICIO 3

function removeProperty(obj, prop) {

    if (obj.hasOwnProperty(prop)) {
        return delete obj[prop];
    } else {
        return false;
    }

}

// EJERCICIO 4

function registerHandlers() {
    var as = document.getElementsByTagName('a');
    for (let i = 0; i < as.length; i++) {
        as[i].onclick = function () {
            alert(i);
            return false;
        }
    }
}
