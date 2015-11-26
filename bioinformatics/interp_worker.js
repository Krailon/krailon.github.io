self.onmessage = function(event) {
  var data = event.data
  importScripts("interp.js")
  workerInterpolate(data.stations, data.params)
}

function workerInterpolate(stations, params) {
  var count = {interpolated: 0, total: 0}
  var startTime = new Date(), endTime

  for (var siteStn in stations) {
    if (siteStn.indexOf("-") == -1)
      continue // Skip anything that's not a station object

    count.total++
    if (stations[siteStn].interpolated)
      continue

    postMessage({type: "status", station: siteStn, count: count.total})
    try {
      if (params["K"] <= stations[siteStn].inputSize)
        interpKNN(stations[siteStn].data, params["K"], params["P"])
      else
        interpKNN(stations[siteStn].data, stations[siteStn].inputSize, params["P"]) // Scale K to the number of input data points if there are <K of them \\>
    }
    catch (ex) {
      postMessage({type: "error", message: ex.message})
      continue
    }

    stations[siteStn].interpolated = true
    count.interpolated++
  }

  endTime = new Date()
  postMessage({type: "finished", stations: stations, count: count.interpolated, time: endTime - startTime})
  self.close()
}
