window.BENCHMARK_DATA = {
  "lastUpdate": 1783809627336,
  "repoUrl": "https://github.com/Spencerx/websocketd",
  "entries": {
    "websocketd Performance": [
      {
        "commit": {
          "author": {
            "email": "joe@walnes.com",
            "name": "Joe Walnes",
            "username": "joewalnes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb93b58f01d2870718f1a807f21bbc83aff3427a",
          "message": "Modernize JS in examples and README tutorial (#465) (#469)\n\nexamples/nodejs/count.js, examples/nodejs/greeter.js,\nexamples/html/count.html, and the README's inline tutorial snippet\nstill used pre-ES6 style (var, function expressions, string\nconcatenation, nested setTimeout callbacks). Updated to const/let,\narrow functions, template literals, and async/await, with no change\nin observable behavior (count.js still waits 500ms before the first\nprint, matching the existing bash/count.sh-vs-count.js inconsistency\nrather than \"fixing\" it as an out-of-scope behavior change).\n\nLeft examples/windows-jscript/* (intentionally legacy demo target),\nbench/scenarios/* (already modern), and libwebsocketd/console.go's\nembedded JS (separate dev-console refresh, #466) untouched.\n\n\nClaude-Session: https://claude.ai/code/session_01M882UWfvyaq5KGvaV37idr\n\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2026-07-09T23:25:32-07:00",
          "tree_id": "c497ac1dc7abc3536bd1e87779cb54b3ce1a1489",
          "url": "https://github.com/Spencerx/websocketd/commit/bb93b58f01d2870718f1a807f21bbc83aff3427a"
        },
        "date": 1783769679691,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "backpressure_msgs_echoed",
            "value": 149,
            "unit": "msgs (info only)"
          },
          {
            "name": "backpressure_delivery_ratio",
            "value": 0.0149,
            "unit": "ratio (info only)"
          },
          {
            "name": "backpressure_peak_rss_kb",
            "value": 13012,
            "unit": "KB"
          },
          {
            "name": "binary_10k_MB_sec",
            "value": 0.98,
            "unit": "MB/s (info only)"
          },
          {
            "name": "binary_10k_peak_rss_kb",
            "value": 13604,
            "unit": "KB"
          },
          {
            "name": "binary_1k_MB_sec",
            "value": 0.1,
            "unit": "MB/s (info only)"
          },
          {
            "name": "binary_1k_peak_rss_kb",
            "value": 13564,
            "unit": "KB"
          },
          {
            "name": "binary_64k_MB_sec",
            "value": 6.25,
            "unit": "MB/s (info only)"
          },
          {
            "name": "binary_64k_peak_rss_kb",
            "value": 15692,
            "unit": "KB"
          },
          {
            "name": "connection_churn_avg_ms",
            "value": 1.49,
            "unit": "ms"
          },
          {
            "name": "connection_churn_conns_sec",
            "value": 671.1,
            "unit": "conn/sec (info only)"
          },
          {
            "name": "connection_churn_peak_rss_kb",
            "value": 10892,
            "unit": "KB"
          },
          {
            "name": "connection_storm_100_p95",
            "value": 64,
            "unit": "ms"
          },
          {
            "name": "connection_storm_100_avg",
            "value": 43.21,
            "unit": "ms"
          },
          {
            "name": "connection_storm_100_peak_rss_kb",
            "value": 8580,
            "unit": "KB"
          },
          {
            "name": "connection_storm_10_p95",
            "value": 8.55,
            "unit": "ms"
          },
          {
            "name": "connection_storm_10_avg",
            "value": 6.7,
            "unit": "ms"
          },
          {
            "name": "connection_storm_10_peak_rss_kb",
            "value": 8580,
            "unit": "KB"
          },
          {
            "name": "connection_storm_500_p95",
            "value": 320,
            "unit": "ms"
          },
          {
            "name": "connection_storm_500_avg",
            "value": 217.642,
            "unit": "ms"
          },
          {
            "name": "connection_storm_500_peak_rss_kb",
            "value": 8580,
            "unit": "KB"
          },
          {
            "name": "echo_latency_p50",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "echo_latency_p95",
            "value": 1,
            "unit": "ms"
          },
          {
            "name": "echo_latency_p99",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "echo_latency_avg",
            "value": 0.139,
            "unit": "ms"
          },
          {
            "name": "echo_latency_peak_rss_kb",
            "value": 8824,
            "unit": "KB"
          },
          {
            "name": "echo_throughput_us_per_msg",
            "value": 28.456,
            "unit": "µs/msg"
          },
          {
            "name": "echo_throughput_msgs_sec",
            "value": 35141,
            "unit": "msgs/sec (info only)"
          },
          {
            "name": "echo_throughput_peak_rss_kb",
            "value": 15404,
            "unit": "KB"
          },
          {
            "name": "sustained_load_rtt_p50",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "sustained_load_rtt_p95",
            "value": 1,
            "unit": "ms"
          },
          {
            "name": "sustained_load_rtt_p99",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "sustained_load_total_msgs",
            "value": 174950,
            "unit": "msgs (info only)"
          },
          {
            "name": "sustained_load_peak_rss_kb",
            "value": 16192,
            "unit": "KB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joe@walnes.com",
            "name": "Joe Walnes",
            "username": "joewalnes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1a43cab937a6a534ca18a44b971a9eb0ea55515",
          "message": "Modernize dev console's embedded JS (part 1 of #466) (#470)\n\nlibwebsocketd/console.go embeds the --devconsole page as a Go raw\nstring literal, and its inline <script> still used pre-ES6 style\n(var, function expressions). Updated to let/const and arrow functions.\n\nString concatenation was deliberately left as `+` rather than template\nliterals: the whole page is a Go raw string delimited by backticks, so\na JS template literal's backticks would terminate the Go string early\nand fail to build.\n\nWhile touching the var declarations, fixed a real scoping bug: a stray\nsemicolon after `var maxSendHistorySize = 100;` broke what looked like\na comma-separated var chain, leaving currentSendHistoryPosition and\nsendHistoryRollback as accidental implicit globals instead of properly\nscoped variables. Declaring them explicitly with let closes that gap.\n\nVerified with go build/test, a node --check syntax pass on the\nextracted script, and an end-to-end Playwright run against a live\nwebsocketd --devconsole instance exercising connect, message receipt,\nsend, send-history recall (which exercises the scoping fix above), and\ndisconnect — no page errors, all checks passed.\n\nVisual/behavioral refresh and feature additions to the console are\nleft for separate follow-up issues; this is syntax-only.\n\n\nClaude-Session: https://claude.ai/code/session_01M882UWfvyaq5KGvaV37idr\n\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2026-07-10T07:37:20-07:00",
          "tree_id": "71f6a0871f20c58f36626ddb406d0edc82c0abdd",
          "url": "https://github.com/Spencerx/websocketd/commit/d1a43cab937a6a534ca18a44b971a9eb0ea55515"
        },
        "date": 1783809626710,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "backpressure_msgs_echoed",
            "value": 149,
            "unit": "msgs (info only)"
          },
          {
            "name": "backpressure_delivery_ratio",
            "value": 0.0149,
            "unit": "ratio (info only)"
          },
          {
            "name": "backpressure_peak_rss_kb",
            "value": 13140,
            "unit": "KB"
          },
          {
            "name": "binary_10k_MB_sec",
            "value": 0.98,
            "unit": "MB/s (info only)"
          },
          {
            "name": "binary_10k_peak_rss_kb",
            "value": 11148,
            "unit": "KB"
          },
          {
            "name": "binary_1k_MB_sec",
            "value": 0.1,
            "unit": "MB/s (info only)"
          },
          {
            "name": "binary_1k_peak_rss_kb",
            "value": 8920,
            "unit": "KB"
          },
          {
            "name": "binary_64k_MB_sec",
            "value": 6.25,
            "unit": "MB/s (info only)"
          },
          {
            "name": "binary_64k_peak_rss_kb",
            "value": 13736,
            "unit": "KB"
          },
          {
            "name": "connection_churn_avg_ms",
            "value": 1.26,
            "unit": "ms"
          },
          {
            "name": "connection_churn_conns_sec",
            "value": 793.7,
            "unit": "conn/sec (info only)"
          },
          {
            "name": "connection_churn_peak_rss_kb",
            "value": 8944,
            "unit": "KB"
          },
          {
            "name": "connection_storm_100_p95",
            "value": 51.05,
            "unit": "ms"
          },
          {
            "name": "connection_storm_100_avg",
            "value": 35.12,
            "unit": "ms"
          },
          {
            "name": "connection_storm_100_peak_rss_kb",
            "value": 8708,
            "unit": "KB"
          },
          {
            "name": "connection_storm_10_p95",
            "value": 7,
            "unit": "ms"
          },
          {
            "name": "connection_storm_10_avg",
            "value": 5.1,
            "unit": "ms"
          },
          {
            "name": "connection_storm_10_peak_rss_kb",
            "value": 8924,
            "unit": "KB"
          },
          {
            "name": "connection_storm_500_p95",
            "value": 243,
            "unit": "ms"
          },
          {
            "name": "connection_storm_500_avg",
            "value": 164.372,
            "unit": "ms"
          },
          {
            "name": "connection_storm_500_peak_rss_kb",
            "value": 8716,
            "unit": "KB"
          },
          {
            "name": "echo_latency_p50",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "echo_latency_p95",
            "value": 1,
            "unit": "ms"
          },
          {
            "name": "echo_latency_p99",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "echo_latency_avg",
            "value": 0.088,
            "unit": "ms"
          },
          {
            "name": "echo_latency_peak_rss_kb",
            "value": 10992,
            "unit": "KB"
          },
          {
            "name": "echo_throughput_us_per_msg",
            "value": 21.632,
            "unit": "µs/msg"
          },
          {
            "name": "echo_throughput_msgs_sec",
            "value": 46229,
            "unit": "msgs/sec (info only)"
          },
          {
            "name": "echo_throughput_peak_rss_kb",
            "value": 15776,
            "unit": "KB"
          },
          {
            "name": "sustained_load_rtt_p50",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "sustained_load_rtt_p95",
            "value": 1,
            "unit": "ms"
          },
          {
            "name": "sustained_load_rtt_p99",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "sustained_load_total_msgs",
            "value": 174950,
            "unit": "msgs (info only)"
          },
          {
            "name": "sustained_load_peak_rss_kb",
            "value": 16472,
            "unit": "KB"
          }
        ]
      }
    ]
  }
}