var result1 = new Array();
result1.length = 0;
var i = 8;
for (var j = 1; j <=31; j ++) {
    var k = j+1;
    if (i < 10) {
        i = i - '';
        i = '0' + i;
    }
    if (j < 10) {
        j = j - '';
        j = '0' + j;
    }
    if (k < 10) {
        k = k - '';
        k = '0' + k;
    }

    var StartTime = '2014-' + i + '-' + j;
    var EndTime = '2014-' + i + '-' + k;
    
    var url = 'http://beta.yunshanmeicai.com/customorder/statistic?company_id=&area_id=&create_admin_user_id=&start_time=' + StartTime + '+&end_time=' + EndTime + '+&status=1%2C2%2C3';
    (function(StartTime) {
         $.get(url, function(data){
            var datas = {
                'date': StartTime,
                'cash': data.cash,
                'company_count': data.company_count
            };
            result1.push(datas);
        }, 'json');   
    })(StartTime);
}



console.log(JSON.stringify(result1));
