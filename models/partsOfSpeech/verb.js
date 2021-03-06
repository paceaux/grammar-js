import Word from '../word';
/**
 * https://www.uvu.edu/writingcenter/docs/handouts/grammar/typesofverbs.pdf
 * https://en.wikipedia.org/wiki/Verb
 */

const types = [
    {
        type: 'avalent',
        valence: 0,
    },
    {
        type: 'transitive',
        valence: 2,
    },
    {
        type: 'intransitive',
        valence: 1,
    },
    {
        type: 'ditransitive',
        valence: 3,
    },
];

/** Verb: an action
 * @param  {string} word original word
 * @param  {string} type avalent, transitive, intransitive, ditransitive
 * @param  {VerbConjugation} conjugation
 * @member word word raw word
 * @member type string. avalent, transitive, intransitive, ditransitive
 * @member types array.
 * @member valence number. the number of arguments this verb takes
 */
function Verb(word, type, conjugation) {
    this.partOfSpeech = 'verb';
    this.word = word;
    if (conjugation) {
        this.tense = conjugation.tenseName;
        this.mood = conjugation.mood;
        this.aspect = conjugation.aspect;
        this.tense = conjugation.tense;
        this.pronounData = conjugation.findVerbData(conjugation.inflectedOn);
    }

    if (type) {
        const typeObj = types.find(t => t.type === type);
        this.type = type;
        this.valence = typeObj.valence;
    }
}

Verb.prototype = Object.create(Word.prototype);
Verb.prototype.types = types;

export default Verb;
