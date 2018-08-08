const FastWeixin = require("./FastWeixin");

FastWeixin.location = async ctx => {};

FastWeixin.menu("LEFT", async ctx => {
  ctx.news([
    {
      title: "关于FURRYTAIL品牌，你想知道的都在这里",
      description: "毛孩子的生活哲学。FURLOSOPHY IS THE NEW PHILOSOPHY。",
      picUrl:
        "https://mmbiz.qpic.cn/mmbiz_jpg/Sxom3yUTVNtXQVJbevwYvm3BiaiaExQNfVhJdsklmwvQ38FibEOMjRNkJYurddWqib5nwhxNRhZQNfcb9MXKSv4iahQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1",
      url: "https://mp.weixin.qq.com/s/gPSc_0kaWult5xltFJosiw"
    }
  ]);
}).menu("RIGHT", ctx => {
  ctx.news([
    {
      title: "全世界的猫都想睡我，最萌的10位可以免单，最最萌的那只将成为代言喵",
      description: "你的喵主子不仅能睡到最美的猫窝，还极有可能成为新品代言喵",
      picUrl:
        "https://mmbiz.qpic.cn/mmbiz_jpg/Sxom3yUTVNtAJTFMv6ibMqHpWRO5Jtw8HHJlpX9QYLfFoeJMG0vZCEYf7Ed7iaqibyiaTWTib8p57w2rKVSRt6XSJJQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1",
      url: "https://mp.weixin.qq.com/s/SGkH5PWeCJCWx65y50n2OA"
    }
  ]);
});

FastWeixin.scan("stick_仇", async ctx => {
  ctx.text("这里是扫码匹配参数：stick_仇");
}).scan("stick_肥", async ctx => {
  ctx.text("这里是扫码匹配参数：stick_肥");
});

FastWeixin.subscribe = async ctx => {
  ctx.text("欢迎关注我的公众号");
};

FastWeixin.unsubscribe = async ctx => {
  console.log("取消关注事件");
  ctx.success();
};
