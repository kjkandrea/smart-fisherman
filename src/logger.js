const logger = (name, func) => {
  console.time(name)
  const result = func()
  console.timeEnd(name)
  console.log(result)
}

export default logger;