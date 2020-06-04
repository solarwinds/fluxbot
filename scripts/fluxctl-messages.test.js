const msgs = require('./fluxctl-messages');

var listWorkloadsFixture = [
  {
    "ID": "team1:deployment/flux",
    "Containers": [
      {
        "Name": "fluxcloud",
        "Current": {
          "ID": "justinbarrick/fluxcloud:v0.3.9",
          "Labels": {}
        },
        "LatestFiltered": {
          "ID": "",
          "Labels": {}
        }
      },
      {
        "Name": "flux",
        "Current": {
          "ID": "docker.io/fluxcd/flux:1.19.0",
          "Labels": {}
        },
        "LatestFiltered": {
          "ID": "",
          "Labels": {}
        }
      }
    ],
    "ReadOnly": "NotInRepo",
    "Status": "ready",
    "Rollout": {
      "Desired": 1,
      "Updated": 1,
      "Ready": 1,
      "Available": 1,
      "Outdated": 0,
      "Messages": null
    },
    "SyncError": "",
    "Antecedent": "",
    "Labels": {
      "fluxcd.io/sync-gc-mark": "sha256.r2Y2Hf0hESHio-jz3Es_BzVcgfchONZUrutr55dToQ4"
    },
    "Automated": false,
    "Locked": false,
    "Ignore": false,
    "Policies": {}
  },
  {
    "ID": "team1:deployment/memcached",
    "Containers": [
      {
        "Name": "memcached",
        "Current": {
          "ID": "memcached:1.5.20",
          "Labels": {}
        },
        "LatestFiltered": {
          "ID": "",
          "Labels": {}
        }
      }
    ],
    "ReadOnly": "NotInRepo",
    "Status": "ready",
    "Rollout": {
      "Desired": 1,
      "Updated": 1,
      "Ready": 1,
      "Available": 1,
      "Outdated": 0,
      "Messages": null
    },
    "SyncError": "",
    "Antecedent": "",
    "Labels": {
      "fluxcd.io/sync-gc-mark": "sha256.xeM7IWbxkOZUGPfcAmNFJ7IOJMvDzDlM565ijocuG6U"
    },
    "Automated": false,
    "Locked": false,
    "Ignore": false,
    "Policies": {}
  }
]

var listWorkloadsResult = `
*team1:deployment/flux*

*Status:* ready
*Pods Ready/Desired*: 1/1

*Containers*
*fluxcloud*: justinbarrick/fluxcloud:v0.3.9
*flux*: docker.io/fluxcd/flux:1.19.0

*Automation settings*

- *Automated:* false
- *Locked:* false
- *Ignore:* false
- *Policies:* {}
`

test('it does the thing', () => {
  expect(msgs.listWorkloadsData(listWorkloadsFixture)).toEqual(listWorkloadsResult)
});
