/*
** ADMM - Advanced Data Manipulation Machine
**/
function ADMM(memorySize, litEndian) {

  // Properties {
  var dataSizes = {b: 1, w: 2, dw: 4, qw: 8}
  var memory = new ArrayBuffer(memorySize || 0)
  var view = new DataView(memory)
  var vars = {acc: 0, lp: 0, eip: 0} // lp = Loop Pointer; acc = Accumulator; eip = Extended Instruction Pointer
  var stdin = ""
  var stdout = ""

  this.running = false
  this.program = [] // Array of instructions
  this.memorySize = memorySize || 0
  this.littleEndian = litEndian
  // }

  // Instruction implementations {
  var instructions = {
    def: function(params) {
      if (params.length != 1)
        throw "Error: Instruction var expects 1 argument but was passed " + params.length
      else if (vars[params[0]])
        throw "Error: Variable " + params[0] + " already exists"
      else if (isPurelyNumeric(params[0]))
        throw "Error: Variables cannot contain only numbers"

      vars[params[0]] = 0 // Default to int
    },
    mov: function(params) {
      if (params.length != 2)
        throw "Error: mov takes exactly two arguments"

      var src = map(params[1])

      // TODO: Check sizes?
      map(params[0], src)
    },
    add: function(params) {
      if (params.length != 2)
        throw "Error: add takes exactly two arguments"

      var src = map(params[1])
      var dst = map(params[0])

      map(params[0], src + dst)
      // TODO: Check for overflows
    },
    sub: function(params) {
      if (params.length != 2)
        throw "Error: sub takes exactly two arguments"

      var src = map(params[1])
      var dst = map(params[0])

      map(params[0], dst - src)
      // TODO: Check for underflows
    },
    mult: function(params) {
      if (params.length != 2)
        throw "Error: mult takes exactly two arguments"

      var src = map(params[1])
      var dst = map(params[0])

      map(params[0], src * dst)
      // TODO: Check for overflows
    },
    and: function(params) {
      if (params.length != 2)
        throw "Error: and takes exactly two arguments"

      var src = map(params[1])
      var dst = map(params[0])

      map(params[0], src & dst) // TODO: Does this work as expected?
    },
    or: function(params) {
      if (params.length != 2)
        throw "Error: or takes exactly two arguments"

      var src = map(params[1])
      var dst = map(params[0])

      map(params[0], src | dst) // TODO: Does this work as expected?
    },
    xor: function(params) {
      if (params.length != 2)
        throw "Error: xor takes exactly two arguments"

      var src = map(params[1])
      var dst = map(params[0])

      map(params[0], src ^ dst)
    },
    loopi: function() {
      vars.lp = vars.eip
      vars.acc = 0
    },
    loop: function(params) {
      if (params.length != 1)
        throw "Error: loop takes exactly one argument"

      if (vars.acc < params[0]) {
        vars.acc++
        vars.eip = vars.lp
      }
    },
    out: function(params) {
      var msg = params.join(" ")
      var ref, indx, pointer

      // TODO: arithmetic inside variable references (eg. {acc+1})

      // Variables are designated by braces
      while (msg.indexOf("{") >= 0) {
        if (msg.indexOf("}") == -1)
          throw "Error: Mismatched braces: " + msg

        indx = msg.indexOf("{")
        ref = msg.substr(indx + 1, msg.indexOf("}") - indx - 1)

        if (vars[ref] != undefined)
          msg = msg.replace("{" + ref + "}", vars[ref])
      }

      // Resolve pointers
      while (msg.indexOf("[") >= 0) {
        indx = msg.indexOf("[")
        pointer = msg.substr(indx, msg.indexOf("]") - indx + 1)
        msg = msg.replace(pointer, map(pointer))
      }

      // Replace newlines
      msg = msg.replace(/\\n/g, "\n")

      if (msg.indexOf("}") >= 0)
        throw "Error: Mismatched braces: " + msg

      stdout += msg
    },
    in: function(params) {
      throw "Error: Not implemented (yet)"
    },
    jmp: function(addr) {
      throw "Error: Not implemented (yet)"
    }
  }
  // }

  // Methods {
  this.loadProgram = function(code) {
    var parts, line

    if (typeof(code) == "string")
      code = code.split("\n")

    for (li in code) {
      line = code[li]

      if (line.indexOf("//") >= 0)
        line = line.substr(0, line.indexOf("//")).trim() // Remove comments

      if (line.length == 0)
        continue // Skip blank lines

      // Remove spaces in pointers since they break the argument split
      if (line.indexOf("[") >= 0) {
        var open = line.indexOf("[")
        var close = line.indexOf("]")
        var space = line.indexOf(" ", open)
        var pointer

        if (close == -1 || open > close)
          throw "Error: Mismatched brackets: " + line

        if (space >= 0 && space < close) {
          pointer = line.substr(open + 1, close - open - 1)
          line = line.replace(pointer, pointer.replace(/\s/g, ""))
        }
      }

      this.program.push(line)
    }
  }

  this.setMemory = function(buff) {
    if (buff.byteLength == undefined)
      return // Only ArrayBuffer objects can be assigned to the memory space

    if (memory.byteLength > 0)
      delete memory

    memory = buff.slice(0) // TODO: fix this for firefox
    view = new DataView(memory)
    this.memorySize = view.byteLength
  }

  this.getMemory = function() {
      return memory.slice(0) // Very important to copy...
  }

  this.readMemory = function(addr, size, littleEndian) {
    if (typeof(littleEndian) === undefined)
      littleEndian = this.littleEndian

    // Address check
    if (typeof(addr) != "number")
      throw "Error: Address must be numerical"
    else if (addr < 0 || addr > view.byteLength)
      throw "Error: Address is outside the bounds of memory (0-" + view.byteLength + "): " + addr

    switch (size) {
      case 1:
        return view.getUint8(addr)
        break
      case 2:
        return view.getUint16(addr, littleEndian)
        break
      case 4:
        return view.getUint32(addr, littleEndian)
        break
      case 8:
        throw "Error: Not implemented (yet)"
        break
      default:
        throw "Error: Data size is invalid: " + size
    }
  }

  this.writeMemory = function(addr, data, littleEndian) {
    if (typeof(littleEndian) === undefined)
      littleEndian = this.littleEndian

    // Address check
    if (typeof(addr) != "number")
      throw "Error: Address must be numerical"
    else if (addr < 0 || addr > view.byteLength)
      throw "Error: Address is outside the bounds of memory (0-" + view.byteLength + "): " + addr

    switch (data.length) {
      case 1:
        view.setUint8(addr, data)
        break
      case 2:
        view.setUint16(addr, data, littleEndian)
        break
      case 4:
        view.setUint32(addr, data, littleEndian)
        break
      case 8:
        throw "Error: Not implemented (yet)"
        break
      default:
        throw "Error: Data size is invalid: " + data
    }
  }

  this.run = function() {
    var inst = ""
    var parts

    this.running = true
    while (true) {
      inst = this.program[vars.eip]

      if (inst.length == 0)
        continue

      parts = inst.split(" ")
      for (pi in parts) {
        if (parts[pi] == "")
          parts.splice(pi, 1) // Remove empty arguments
      }

      if (instructions[parts[0]])
        instructions[parts[0]](parts.slice(1))
      else
        throw "Error: Invalid instruction: " + inst

      if (++vars.eip >= this.program.length)
        break
    }

    this.running = false
  }

  this.getVariable = function(name) {
    if (vars[name] != undefined)
      return vars[name]
  }

  this.getAllVariables = function() {
    return vars
  }

  this.getOutput = function() {
    var output = stdout

    return stdout
  }

  this.getInput = function() {
    return stdin
  }

  function map(arg, val) {
    var pointer = false
    var bytes = 1

    if (arg.indexOf(":") >= 0) {
      var size = arg.substr(0, 2)

      arg = arg.substr(3)
      if (dataSizes[size] != undefined)
        bytes = dataSizes[size]
      else
        throw "Error: Invalid data size: " + size
    }

    if (arg.indexOf("[") >= 0) {
      if (arg.indexOf("]") != arg.length - 1) // TODO: Is this superfluous with the check in run()?
        throw "Error: Invalid argument (text outside pointer brackets): " + arg

      pointer = true
      arg = arg.substr(1, arg.length - 2)
    }

    if (arg.indexOf("[") >= 0 || arg.indexOf("]") >= 0)
      throw "Error: Pointer nesting not allowed: " + arg

    if (arg.substr(0, 2) == "0x") {
      if (arg.length < 3)
        throw "Error: Invalid hex literal: 0x"

      if (!pointer)
        return parseInt(arg) // Return value of hex literal
    }

    // Pointer arithmetic
    if (arg.indexOf("+") >= 0 || arg.indexOf("-") >= 0) {
      var sep = (arg.indexOf("+") >= 0) ? "+" : "-"
      var parts = arg.split(sep)
      var sum = 0

      if (!pointer)
        throw "Error: Arithmetic not valid in non-pointer argument"
      else if (arg.indexOf("+") >= 0 && arg.indexOf("-") >= 0)
        throw "Error: Addition and subtraction cannot both be in the same pointer"

      for (pi in parts) {
        parts[pi] = map(parts[pi]) // Recursively resolve variable

        if (sum == 0)
          sum = parts[pi]
        else if (sep == "+")
          sum += parts[pi]
        else
          sum -= parts[pi]
      }

      arg = sum
    }

    // Set data size to value size
    if (val != undefined) {
      var dataSize = Math.ceil(Math.abs(val).toString(16).length / 2)

      if (dataSize <= 8)
        if (dataSize > 4) {
          val = val & 0xFFFFFFFF // Truncate overflow
          bytes = 4
        }
        else {
          if (dataSize == 3)
            dataSize = 4

          bytes = dataSize
        }
      else
        throw "Error: Number is too large" // TODO: Find a way to handle this
    }

    if (vars[arg] != undefined) {
      if (val != undefined) {
        // Writing
        vars[arg] = val
        return
      }
      else {
        // Reading
        arg = vars[arg]
      }
    }

    if (isPurelyNumeric(arg))
      arg = parseInt(arg)
    else
      throw "Error: Unknown argument: " + arg

    if (!pointer)
      return arg // Return value of variable or decimal literal

    if (arg < 0 || arg + bytes > memory.byteLength)
      throw "Error: Pointer is outisde the memory bounds (0-" + memory.byteLength + "): " + arg

    // Return dereferenced pointer value of specified size
    if (val == undefined) {
      // Read
      switch (bytes) {
        case 1:
          return view.getUint8(arg)
          break
        case 2:
          return view.getUint16(arg, true)
          break
        case 4:
          return view.getUint32(arg, true)
          break
        case 8:
          throw "Error: Not implemented (yet)"
          break
        default:
          throw "Error: Invalid data size: " + bytes
      }
    }
    else {
      // Write
      switch (bytes) {
        case 1:
          view.setUint8(arg, val)
          break
        case 2:
          view.setUint16(arg, val, true)
          break
        case 4:
          view.setUint32(arg, val, true)
          break
        case 8:
          throw "Error: Not implemented (yet)"
          break
        default:
          throw "Error: Invalid data size: " + bytes
      }
    }
  }
  this.map = map // debug

  function isPurelyNumeric(obj) {
    if (typeof(obj) == "number") {
      return true
    }
    else if (typeof(obj) == "string") {
      var int = parseInt(obj)

      if (isNaN(int))
        return false
      else
        return (int.toString().length == obj.length)
    }
    else {
      return false
    }
  }
  // }

}
