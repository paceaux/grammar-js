# Isidore: A grammar utility for the internet
Takes a sentence and identifies the grammatical elements within
This is still in a super experimental stage.

## API

### `PartsOfSpeech`
There is a class per part of speech.  All parts of speech inherit from the `word` class:

#### `Word` Class
| Member | Type | Description |
|-------| -----| -------------|
| `partOfSpeech` | string | one of the eight parts of speech|
| `word` | string | the word (token) |
| `type` | string | a high-level classification for this partOfSpeech |
| `types` | array | all possible types for this `partOfSpeech` |

#### Parts of Speech:
 * `Noun`
 * `Pronoun`
 * `Verb`
 * `Adjective`
 * `Adverb`
 * `Conjunction`
 * `Interjection`
 * `Preposition`

 These may all have additional members.

### Dictionaries
There is a dictionary class per part-of-speech. All dictionaries inherit from the `Dictionary` class.
Any rules about how words can vary  ([inflections](https://en.wikipedia.org/wiki/Inflection)) are stored in the `Dictionary` for that part of speech (e.g. `NounDictionary` has rules about how to recognize plurals and possessives);

This is so that Isidore could have potential to scale into other languages without requiring massive rewrites. 

#### `Dictionary`

| Member | Type | Description |
|-------| -----| -------------|
| `list` | array | sorted list of words |
| `language` | string | Language for the dictionary |
| `findWord()` | method | finds a word in the dictionary |
| `partOfSpeech` | string | the part of speech that dictionary has |
| `GrammarModel` | class | The type that the dictionary contains |


#### `NounDictionary` class:
| Member | Type | Description |
|-------| -----| -------------|
| `list`| array | Nouns with types and wordCategories|
| `language` | string | two-letter abbreviation of language|
| `inflections` | object | inflections that can be applied to all nouns |
| `findWord(word)` | method | Searches for word in dictionary (returns `Noun` if successful) |
| `getInflections(word)` | method |  word (`string`), returns all possible inflections for the word |
| `guessInflection(word)` | method | (`string`), returns a single inflection (`object`) |
| `removeInflection(word, inflection)` | method | word(`string`), inflection (`object`). returns `string` |

### Languages
All languages within the utility.
Right now we just have `En`, which is a `Language`;

#### `Language` class

| Member | Type | Description |
|-------| -----| -------------|
|`grammarDictionaries` | Object |  `NounDictionary`, `PronounDictionary`, `VerbDictionary`, `AdjectiveDictionary`, `AdverbDictionary`, `ConjunctionDictionary`, `InterjectionDictionary`, `PrepositionDictionary`
| `language` | string | two-letter description of language|
| `findWord()` | method | accepts a string, returns an array containing `partOfSpeech` or a `word` if no word is found

### `Sentence`
The sentence is where the parsing magic starts.

#### `Sentence` Class
| Member | Type | Description |
|-------| -----| -------------|
| `text`| string | raw text of the sentence |
|`type` | string | declarative, interrogative, imperative, exclamatory|
| `language` | string | Language (`En`) is default|
| `rawWordList`| array | only the words in the sentence |
| `wordList`| array |  each word in the sentence classified as either a  or word |
| `types` | array | the possible types that a sentence could have |
| `getSentenceType()` | method | returns string, the type of sentence. Guesses what the sentence type is based on punctuation  |

## Example

    const { Sentence } = isidore
    const mySentence = new Sentence('He gives her a car.');
    const { wordList } = mySentence;

    console.log(mySentence);
    /*
    Sentence {
        text: 'He gives him a car.',
        language: 'En',
        rawWordList: [ 'he', 'gives', 'him', 'a', 'car' ],
        wordList:
        [
            Pronoun {
                partOfSpeech: 'pronoun',
                word: 'he',
                referent: 'animate',
                gender: 'masculine',
                type: 'subject',
                person: 3,
                quantity: 'singular'
            },
            Verb {
                partOfSpeech: 'verb',
                word: 'give',
                type: 'transitive',
                valence: 2
            },
            Pronoun {
                partOfSpeech: 'pronoun',
                word: 'him',
                referent: 'animate',
                gender: 'masculine',
                type: 'object',
                person: 3,
                quantity: 'singular',
            },
            Adjective {
                partOfSpeech: 'adjective',
                word: 'a',
                type: 'article',
                degree: undefined
            },
            Noun {
                partOfSpeech: 'noun',
                word: 'car',
                type: 'entityClass',
                subType: 'common',
                inflection: undefined
            }
        ],
        type: 'declarative'
    }
        */

