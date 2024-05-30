import './fetch.js'
// const { JSDOM } = require('jsdom');

// 获取issue列表
async function getIssues() {
  const response = await globalThis.fetch("https://coding.net/api/project/7793377/issues/list/backlog", {
    "headers": {
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "coding-collaboration-origin-template-id": "",
      "coding-collaboration-template-id": "7734",
      "coding-collaboration-template-version": "4c84f12528736bc8d46b33586f7fc431",
      "content-type": "application/json;charset=UTF-8",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-xsrf-token": "668e4e0e-7e2b-4d25-8772-be521aa9acf2",
      "cookie": "teamType=1_1_0; exp=89cd78c2; code=artifact-reforge%3Dfalse%2Casync-blocked%3Dtrue%2Cauth-by-wechat%3Dtrue%2Cci-qci%3Dfalse%2Cci-team-step%3Dfalse%2Cci-team-templates%3Dfalse%2Ccoding-flow%3Dfalse%2Ccoding-ocd-java%3Dfalse%2Ccoding-ocd-pages%3Dtrue%2Centerprise-permission-management%3Dtrue%2Cmobile-layout-test%3Dfalse%2Cproject-permission-management%3Dtrue%2Cservice-exception-tips%3Dfalse%2Ctencent-cloud-object-storage%3Dtrue%2C5b585a51; enterprise_domain=; eid=eef50115-d846-444c-81fd-87e0b153cf29; clientId=1c89a71a-4a94-4f4e-88ec-981cf84c6c2f; XSRF-TOKEN=668e4e0e-7e2b-4d25-8772-be521aa9acf2; c=auth-by-wechat%3Dtrue%2Cproject-permission-management%3Dtrue%2Centerprise-permission-management%3Dtrue%2C5c58505d; cf=ea6b1698f45f1d4afc0894e2a79f2a33",
      "Referer": "https://coding.net/p/web_user/backlog/issues?filter=c0472df3ceeee97bc4aeb3329e984aac",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"content\":{\"sorts\":[{\"key\":\"PRIORITY\",\"value\":\"DESC\",\"customFieldIds\":null,\"componentType\":null,\"id\":\"PRIORITY\"}],\"conditions\":[{\"value\":[\"TODO\",\"PROCESSING\"],\"key\":\"STATUS_TYPE\",\"fixed\":true,\"constValue\":[]},{\"value\":[],\"valueChanged\":null,\"validInfo\":[],\"userMap\":{},\"status\":null,\"key\":\"ASSIGNEE\",\"fixed\":true,\"constValue\":[],\"selectedItems\":{}},{\"value\":[],\"key\":\"ISSUE_TYPE_ID\",\"fixed\":true,\"constValue\":[]}]},\"page\":1,\"pageSize\":100}",
    "method": "POST"
  });

  const data = await response.json();

  // console.log(data);

  return data.data.list

}

// 获取issue详情
async function getIssueDetail(issueId) {
  const url = `https://coding.net/api/project/7793377/issues/${issueId}?withDescriptionMarkup=true`;
  const res = await globalThis.fetch(url, {
    "headers": {
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "coding-collaboration-origin-template-id": "",
      "coding-collaboration-template-id": "7734",
      "coding-collaboration-template-version": "4c84f12528736bc8d46b33586f7fc431",
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "teamType=1_1_0; exp=89cd78c2; code=artifact-reforge%3Dfalse%2Casync-blocked%3Dtrue%2Cauth-by-wechat%3Dtrue%2Cci-qci%3Dfalse%2Cci-team-step%3Dfalse%2Cci-team-templates%3Dfalse%2Ccoding-flow%3Dfalse%2Ccoding-ocd-java%3Dfalse%2Ccoding-ocd-pages%3Dtrue%2Centerprise-permission-management%3Dtrue%2Cmobile-layout-test%3Dfalse%2Cproject-permission-management%3Dtrue%2Cservice-exception-tips%3Dfalse%2Ctencent-cloud-object-storage%3Dtrue%2C5b585a51; enterprise_domain=; eid=eef50115-d846-444c-81fd-87e0b153cf29; clientId=1c89a71a-4a94-4f4e-88ec-981cf84c6c2f; XSRF-TOKEN=668e4e0e-7e2b-4d25-8772-be521aa9acf2; c=auth-by-wechat%3Dtrue%2Cproject-permission-management%3Dtrue%2Centerprise-permission-management%3Dtrue%2C5c58505d; cf=ea6b1698f45f1d4afc0894e2a79f2a33",
      "Referer": "https://coding.net/p/web_user/backlog/issues/4882",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  });

  const data = await res.json();

  return data.data;
}


// 完成需求
async function completeIssues(options) {

  const res = await fetch(`https://coding.net/api/project/7793377/issues/requirements/${options.issueId}/fields`, {
    "headers": {
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "coding-collaboration-origin-template-id": "",
      "coding-collaboration-template-id": "7734",
      "coding-collaboration-template-version": "4c84f12528736bc8d46b33586f7fc431",
      "content-type": "application/json;charset=UTF-8",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-xsrf-token": "668e4e0e-7e2b-4d25-8772-be521aa9acf2",
      "cookie": "teamType=1_1_0; exp=89cd78c2; code=artifact-reforge%3Dfalse%2Casync-blocked%3Dtrue%2Cauth-by-wechat%3Dtrue%2Cci-qci%3Dfalse%2Cci-team-step%3Dfalse%2Cci-team-templates%3Dfalse%2Ccoding-flow%3Dfalse%2Ccoding-ocd-java%3Dfalse%2Ccoding-ocd-pages%3Dtrue%2Centerprise-permission-management%3Dtrue%2Cmobile-layout-test%3Dfalse%2Cproject-permission-management%3Dtrue%2Cservice-exception-tips%3Dfalse%2Ctencent-cloud-object-storage%3Dtrue%2C5b585a51; enterprise_domain=; eid=eef50115-d846-444c-81fd-87e0b153cf29; clientId=1c89a71a-4a94-4f4e-88ec-981cf84c6c2f; XSRF-TOKEN=668e4e0e-7e2b-4d25-8772-be521aa9acf2; c=auth-by-wechat%3Dtrue%2Cproject-permission-management%3Dtrue%2Centerprise-permission-management%3Dtrue%2C5c58505d; cf=07484a67a1d1f5f9b97087b0a5301ed0",
      "Referer": "https://coding.net/p/web_user/backlog/issues/2899",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": `{\"statusId\":${options.statusId},\"item\":{\"id\":${options.statusId},\"index\":11,\"name\":\"已完成\",\"type\":\"COMPLETED\",\"description\":\"\",\"isSystem\":true,\"createdAt\":1560222281000,\"updatedAt\":1560222281000}}`,
    "method": "PATCH"
  });

  const data = await res.json();

  return data;

}

// 启动
async function batchCompleteBacklog() {
  const issues = await getIssues();

  issues.forEach(async (issue) => {
    // const getIssueDetailRes = await getIssueDetail(issue.code)
    // console.log(getIssueDetailRes)
    console.log(issue)
    const completeIssueRes = await completeIssues({
      issueId: issue.code,
      statusId: 425640
    });

    console.log(completeIssueRes)
  })


}

batchCompleteBacklog()