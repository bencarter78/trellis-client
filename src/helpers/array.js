export default {
  filterBy (items, search, column) {
    return items.filter(function (item) {
      return item[column].toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  },

  orderBy (items, column) {
    return _.orderBy(items, column)
  },

  contains (needle, haystack) {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i].id === needle) {
        return true
      }
    }
    return false
  }
}
