export const linksService = {
    query,
    getLinkById
  }
  
  var links = utilService.readJsonFile('data/linkSharing.db.json')

  function query() {
    return links
  }

  function getLinkById() {
    
  }

