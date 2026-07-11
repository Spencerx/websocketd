window.BENCHMARK_DATA = {
  "lastUpdate": 1783769680501,
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
      }
    ]
  }
}