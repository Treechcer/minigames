function generateRandomNum(){
    var low = document.getElementById("low").value;
    var high = document.getElementById("high").value;

    if (low > high){
        var temp = low;
        low = high;
        high = temp;
    }

    var num = Number(Math.floor(Math.random() * Number(high)) + Number(low));

    document.getElementById("out").textContent = num;

    console.log(high, low);

}