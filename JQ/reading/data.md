
jquery .data()

在匹配元素上存储任意相关数据或者返回匹配的元素集合中第一个元素的给定名称的数据存储的值。

我之前的疑问是这和我之前用的data-params 这些有什么区别。:w
o
http://jquery.bootcss.com/data/

  <div>
      The values stored were
          <span></span>
              and
                  <span></span>
                    </div>
                    <script>
                    $("div").data("test", { first: 16, last: "pizza!" });
                    $("span:first").text($("div").data("test").first);
                    $("span:last").text($("div").data("test").last);
                    </script>

显然这个data的使用相比之前的serialize要复杂一些。


