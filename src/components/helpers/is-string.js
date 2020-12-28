const IsString = object => {
  return Object.prototype.toString.call(object) === "[object String]"
}

export default IsString
