const FastWeixin = require("./FastWeixin");

FastWeixin.text("无", async ctx => {
  ctx.text("这里是无关键词");
})
  .text("买", async ctx => {
    FastWeixin.sendTemplate({
      touser: "oG-Wm0yxFP7lSrMASfHevIL8k5WA",
      template_id: "mOJ3pdY0Qc6kuvNPFl5x1EvwNiAzQJe779yZWnLIY6I",
      url: "https://www.baidu.com",
      miniprogram: {},
      topcolor: "#616161",
      data: {
        first: "这个是标题",
        keyword1: "公众号开发课程",
        keyword2: "19.9",
        keyword3: "马云",
        keyword4: "2018年8月6日"
      }
    });

    ctx.transfer();
  })
  .text("好,哈,咯", async ctx => {
    ctx.text("这里是多个关键词");
  });
