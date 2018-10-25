import Noun from '../partsOfSpeech/noun';
import Word from '../word';

/**
 * @param  {String} word word to search for
 * @returns {Object} Noun if successful, Word if unsuccessful
 */
function findNoun(word) {
    const list = this.list.filter(obj => word.indexOf(obj.noun) !== -1);

    const typedList = list.map(nounObj => new Noun(nounObj.noun, nounObj.type, nounObj.subType));

    return typedList.length === 0 ? new Word(word) : typedList[0];
}
/** Noun Dictionary
 * @param  {Array} list Nouns with types and wordCategories
 * @param  {String} language two-letter abbreviation of language
 * @member {list} Array of typed Nouns
 * @member {language} String language for the dictionary
 * @method {findWord} searches for a word in the dictionary and returns a Noun or a Word
 */
function NounDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findNoun;
}

export default NounDictionary;
