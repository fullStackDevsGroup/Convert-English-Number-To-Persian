 Number.prototype.ToPersianNumber = function () {

        if (this == '') return '';
        var string = this.toString().replace(/\,/g, '');
        string = string.replace(/0/g, '۰');
        string = string.replace(/1/g, '۱');
        string = string.replace(/2/g, '۲');
        string = string.replace(/3/g, '۳');
        string = string.replace(/4/g, '۴');
        string = string.replace(/5/g, '۵');
        string = string.replace(/6/g, '۶');
        string = string.replace(/7/g, '۷');
        string = string.replace(/8/g, '۸');
        string = string.replace(/9/g, '۹');
        return string;
    };
var pnumber=1234567890;
 var Persian=pnumber.ToPersianNumber();
document.getElementById("PersianNumber").innerHTML=Persian;
//alert(pnumber);

