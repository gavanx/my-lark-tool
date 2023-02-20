const lark = require("@larksuiteoapi/node-sdk");
const token = require("../../../token.json");

const client = new lark.Client({
  appId: token.id,
  appSecret: token.secret,
  appType: lark.AppType.SelfBuild,
  domain: lark.Domain.Feishu,
});

client.contact.user
  .listWithIterator({
    params: {
      page_size: 20,
    },
  })
  .then((listIterator) => {
    console.log("aaaaa", listIterator);
    listIterator[Symbol.asyncIterator]()
      .next()
      .then((res) => {
        console.log("bbbb", res);
        const {
          value: { items },
        } = res;
        console.log('ccccc', items)
      });
  });
