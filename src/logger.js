const logger = (name, func) => {
  console.group('\x1b[36m%s\x1b[0m', name)
  console.time('time')
  const result = func()
  console.timeEnd('time')
  console.log(result)
  console.groupEnd()

}

export default logger;