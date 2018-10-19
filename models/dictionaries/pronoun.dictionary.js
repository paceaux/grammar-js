import Pronoun from '../partsOfSpeech/pronoun';

function findPronoun(word) {
    const list = this.list.filter(obj => word.indexOf(obj.pronoun) !== -1);

    const typedList = list.map(pronounObj => new Pronoun(
        pronounObj.pronoun,
        pronounObj.type,
        pronounObj.referent,
        pronounObj.gender,
        pronounObj.person,
        pronounObj.quantity));

    return typedList.length === 0 ? undefined : typedList[0];
}

function PronounDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findPronoun;
}

export default PronounDictionary;
