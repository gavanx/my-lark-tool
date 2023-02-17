import * as lark from '@larksuiteoapi/node-sdk';
import * as token from '../token.json'

const client = new lark.Client({
  appId: token.id,
  appSecret: token.secret,
  appType: lark.AppType.SelfBuild,
  domain: lark.Domain.Feishu,
});


for await (const items of await client.contact.user.listWithIterator({
  params: {
      department_id: '0',
      page_size: 20,
  },
})) {
  console.log(items);
}

