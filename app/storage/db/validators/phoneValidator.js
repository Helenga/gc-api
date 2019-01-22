

module.exports = function(phone) {
  if (!phone)
    return true
  return /^\d{4,14}$/g.test(phone)
}