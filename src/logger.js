const logger = (name, func) => {
  console.time(name)
  console.log(func())
  console.timeEnd(name)
}

export default logger;