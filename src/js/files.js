const lark = require('@larksuiteoapi/node-sdk');
const token = require('../../token.json')

const client = new lark.Client({
  appId: token.id,
  appSecret: token.secret,
  appType: lark.AppType.SelfBuild,
  domain: lark.Domain.Feishu,
});

client.drive.file.list({},
	lark.withTenantToken("t-g0042hf7C7UIUMNWBADJGPPDIJDZT75HQ5UXA7IK")
).then(res => {
	console.log(res);
});

