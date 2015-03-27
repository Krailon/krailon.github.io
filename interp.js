/*
**
** K-Nearest Neighbor interpolation library for water depth analysis
** By: Kerberos/Krailon
**
*/
function interpKNN(Grid, K, P) {
	var neighbors, values, distances
	var check = []
	var checked = []
	var pos, offPos

	// We interpolate outward from the center by queueing adjacent cells
	check.push([Math.floor(Grid.length / 2), Math.floor(Grid.length / 2)])
	while (check.length > 0) {
		pos = check.shift()
		checked.push(pos)

		neighbors = []
		if (Grid[pos[0]][pos[1]] == undefined) {
			neighbors = findNeighbors(Grid, pos[0], pos[1], K)

      if (neighbors.length == 0) {
        logError("Failed to find any neighbors for {" + Yi + ", " + Xi + "}")
        return
      }
      else if (neighbors.length < K) {
        logError("Failed to find " + K + " neighbors to interpolate {" + pos[0] + ", " + pos[1] + "} (got " + neighbors.length + ")")
      }

			values = []
			distances = []
			for (var ni = 0; ni < neighbors.length; ni++) {
				values.push(Grid[neighbors[ni][0]][neighbors[ni][1]])
				distances.push(xyDist(pos[0], pos[1], neighbors[ni][0], neighbors[ni][1]))
			}

			Grid[pos[0]][pos[1]] = interpIDW(values, distances, P)
			if (Grid.max < Grid[pos[0]][pos[1]])
				Grid.max = Grid[pos[0]][pos[1]]
		}

		// Queue adjacent cells (4 sides) if they haven't been already
		for (var i = 0; i < 8; i++) {
			if (i == 0) {
				// Bottom
				if (pos[0] + 1 >= Grid.length)
					continue
				offPos = [pos[0] + 1, pos[1]]
			}
			else if (i == 1) {
				// Top
				if (pos[0] - 1 < 0)
					continue
				offPos = [pos[0] - 1, pos[1]]
			}
			else if (i == 2) {
				// Right
				if (pos[1] + 1 >= Grid[pos[0]].length)
					continue
				offPos = [pos[0], pos[1] + 1]
			}
			else if (i == 3) {
				// Left
				if (pos[1] - 1 < 0)
					continue
				offPos = [pos[0], pos[1] - 1]
			}
			else if (i == 4) {
				// Top-Left
				if (pos[0] - 1 < 0 || pos[1] - 1 < 0)
					continue
				offPos = [pos[0] - 1, pos[1] - 1]
			}
			else if (i == 5) {
				// Bottom-Right
				if (pos[0] + 1 >= Grid.length || pos[1] + 1 >= Grid[pos[0]].length)
					continue
				offPos = [pos[0] + 1, pos[1] + 1]
			}
			else if (i == 6) {
				// Top-Right
				if (pos[0] - 1 < 0 || pos[1] + 1 >= Grid[pos[0]].length)
					continue
				offPos = [pos[0] - 1, pos[1] + 1]
			}
			else if (i == 7) {
				// Bottom-Left
				if (pos[0] + 1 >= Grid.length || pos[1] - 1 < 0)
					continue
				offPos = [pos[0] + 1, pos[1] - 1]
			}

			var checkStr = ":" + check.join(":") + ":"
			var checkedStr = ":" + checked.join(":") + ":"
			if (checkStr.indexOf(":" + offPos.join() + ":") == -1 && checkedStr.indexOf(":" + offPos.join() + ":") == -1)
				check.push(offPos)
		}
	}
}

function findNeighbors(Grid, Yi, Xi, K) {
	var neighbors = []
	var check = []
	var checked = []
	var pos

	// Use same adjacent cell queueing strategy as above
	check.push([Yi, Xi])
	while (check.length > 0 && neighbors.length < K) {
		pos = check.shift()
		checked.push(pos)

		if (!(pos[0] == Yi && pos[1] == Xi) && Grid[pos[0]][pos[1]] != undefined) {
			neighbors.push([pos[0], pos[1]])
		}

		// Queue adjacent cells
		for (var i = 0; i < 8; i++) {
                        if (i == 0) {
                                // Bottom
                                if (pos[0] + 1 >= Grid.length)
                                        continue
                                offPos = [pos[0] + 1, pos[1]]
                        }
                        else if (i == 1) {
                                // Top
                                if (pos[0] - 1 < 0)
                                        continue
                                offPos = [pos[0] - 1, pos[1]]
                        }
                        else if (i == 2) {
                                // Right
                                if (pos[1] + 1 >= Grid[pos[0]].length)
                                        continue
                                offPos = [pos[0], pos[1] + 1]
                        }
                        else if (i == 3) {
                                // Left
                                if (pos[1] - 1 < 0)
                                        continue
                                offPos = [pos[0], pos[1] - 1]
                        }
                        else if (i == 4) {
                                // Top-Left
                                if (pos[0] - 1 < 0 || pos[1] - 1 < 0)
                                        continue
                                offPos = [pos[0] - 1, pos[1] - 1]
                        }
                        else if (i == 5) {
                                // Bottom-Right
                                if (pos[0] + 1 >= Grid.length || pos[1] + 1 >= Grid[pos[0]].length)
                                        continue
                                offPos = [pos[0] + 1, pos[1] + 1]
                        }
                        else if (i == 6) {
                                // Top-Right
                                if (pos[0] - 1 < 0 || pos[1] + 1 >= Grid[pos[0]].length)
                                        continue
                                offPos = [pos[0] - 1, pos[1] + 1]
                        }
                        else if (i == 7) {
                                // Bottom-Left
                                if (pos[0] + 1 >= Grid.length || pos[1] - 1 < 0)
                                        continue
                                offPos = [pos[0] + 1, pos[1] - 1]
                        }

                        if (check.join(":").indexOf(offPos.join()) == -1 && checked.join(":").indexOf(offPos.join()) == -1)
                                check.push(offPos)
                }
	}

	return neighbors
}

// Interpolate using Inverse Distance Weighting
function interpIDW(Values, Distances, P) {
	var weight
	var valueSum = 0
	var weightSum = 0

	if (Values.length != Distances.length) {
    logError("Value array size (" + Values.length + ") does not match distance array size (" + Distances.length + ")")
		return undefined
	}

	// Sum weighted values and weights
	for (var i = 0; i < Values.length; i++) {
		weight = 1 / Math.pow(Distances[i], P) // This is where P comes into play, >P = less effect with increasing distance, and vice versa
		valueSum += weight * Values[i]
		weightSum += weight
	}

	return valueSum / weightSum
}

function xyDist(X1, Y1, X2, Y2) {
	return Math.sqrt(Math.pow(X1 - X2, 2) + Math.pow(Y1 - Y2, 2))
}

function logError(message) {
  if (output)
    output("- " + message)
  else
    alert("Error: " + message)
}
