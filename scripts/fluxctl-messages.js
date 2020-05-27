var Mustache = require("mustache");

var singleWorkloadTmpl = `
*{{ID}}*

*Status:* {{Status}}
*Pods Ready/Desired*: {{Rollout.Ready}}/{{Rollout.Desired}}

*Containers*
  {{#containers}}
    {{> singleContainer}}
  {{/containers}}

*Automation settings*

- *Automated:*{{Automated}}
- *Locked:*{{Locked}}
- *Ignore:*{{Ignore}}
- *Policies:*{{Policies}}
`

var listWorkloadTmpl = `
{{#workloads}}
  {{>workload}}
{{/workloads}}
`

var containerTmpl = `*{{Name}}*: {{Current.ID}}`

function listWorkloadsData(workloadList){
    var view = {
      workloads: workloadList
    }

    rendered =  Mustache.render(listWorkloadTmpl, view, {
      workload: singleWorkloadTmpl,
      singleContainer: containerTmpl,
    });

    return rendered.replace(/\r?\n|\r/g, "");
};

module.exports = {
  listWorkloadsData: listWorkloadsData
}
