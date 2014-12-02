/*想要实现这样一个函数，计算任意一天到现在的时差，或者计算任意时间点之间的时差
 * */
var fnTimeCount = function (s, o) {
    var f = {
        zero: function (n) {
            var n = parseInt (n, 10);
            if (n > 0) {
                if (n <= 9) {
                    n = "0" + n;
                }
                return String(n);
            } else {
                return "00";
            }
        },

        dv: function () {
            d = s || Date.UTC(2012,11,21);
            var future = new Date(d), //这里并非多次依据，而是要取得时差
                now = new Date();
            var dur = Math.round((future.getTime() - now.getTime())/1000) + future.getTimezoneOffset() * 60,
                pms = {
                    years:'0',
                    month:'0',
                    day:'0',
                    hour:'0',
                    minute:'0',
                    second:'0',
                    descripe:'left'
                };
            if (dur < 0) {
                pms.descripe = 'gone';
                dur = Math.abs(dur);
            }
            pms.second = f.zero(dur % 60);
            pms.minute = Math.floor(dur/60) > 0 ? f.zero((dur/60) % 60) : '00';
            pms.hour   = Math.floor(dur/3600) > 0 ? f.zero((dur/3600) % 24) : '00';
            pms.day    = Math.floor(dur/86400) > 0 ? f.zero((dur/86400) % 30) : '00';
            pms.month  = Math.floor(dur/2629744) > 0 ? f.zero((dur/2629744) % 12) : '00';
            pms.year   = Math.floor(dur/31556926) > 0 ? f.zero((dur/31556926)) : '00';
            return pms;
        },

        ui: function () {
            var show = f.dv();
            for (node in o) {
                o[node].innerHTML = show[node];
            }
            setTimeout(f.ui, 1000);
        }
    };
    f.ui();
}
var s = Date.UTC(2014,11,1), //尤其注意这里的月份和小时是从0开始记得
    obj = {
        descripe: document.getElementById('descripe'),
        year:     document.getElementById('year'),
        month:    document.getElementById('month'),
        day:      document.getElementById('day'),
        hour:     document.getElementById('hour'),
        minute:   document.getElementById('minute'),
        second:   document.getElementById('second')
    };

fnTimeCount(s, obj);
