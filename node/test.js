

    function func (timer) {
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + timer);
    }

    function sleep(timer, func) {
        func(timer);
    }

    console.log('你好吗');
    sleep(5000, func);
    console.log('你好');
