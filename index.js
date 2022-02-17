class Formatter {
  //add static methods here
  static capitalize(string){
    const splitString = string.split("")
    const firstLetter = splitString.shift().toUpperCase()
    splitString.unshift(firstLetter)
    return splitString.join('')
  }

  static sanitize(string){
    return string.replaceAll(/[^A-Za-z0-9 '-]/g, "")
  }

  static titleize(string){
    const splitString = string.toLowerCase().split(" ");
    const noString = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const firstWord = this.capitalize(splitString.shift())
    const title = []
    title.push(firstWord)
    for (let word of splitString){
      if (noString.includes(word) === false){
        let newWord = this.capitalize(word)
      title.push(newWord)
    } else {title.push(word)}
    } 
    return title.join(" ")
   }
}
const string = "Yo mama is so fat she is blah blah of and for."
