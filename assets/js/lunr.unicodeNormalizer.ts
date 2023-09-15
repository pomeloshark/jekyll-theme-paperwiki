import * as lunr from "lunr";

/*!
 * lunr.unicodeNormalizer
 * by Chris Van <cvan>, 2014
 * Extension for lunr.js <http://lunrjs.com/>
 * Includes code from https://github.com/dodo/node-slug/blob/master/slug.js
 */

const charmap: {[inchar: string]: string} = {
  // Latin & IPA
  'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ā': 'A', 'Ȧ': 'A', 'Ä': 'A',
  'Å': 'A', 'Ǎ': 'A', 'Ą': 'A', 'Ạ': 'A', 'Æ': 'AE', 'Ḃ': 'B', 'Ḅ': 'B',
  'Ç': 'C', 'Ć': 'C', 'Ĉ': 'C', 'Č': 'C', 'Ċ': 'C', 'Ḋ': 'D', 'Ḍ': 'D',
  'Ḏ': 'D', 'Ď': 'D', 'Ð': 'D', 'È': 'E', 'É': 'E', 'Ê': 'E', 'Ẽ': 'E',
  'Ē': 'E', 'Ė': 'E', 'Ë': 'E', 'Ě': 'E', 'Ẹ': 'E', 'Ę': 'E', 'Ǵ': 'G',
  'Ĝ': 'G', 'Ġ': 'G', 'Ǧ': 'G', 'Ĥ': 'H', 'Ȟ': 'H', 'Ḥ': 'H', 'Ì': 'I',
  'Í': 'I', 'Î': 'I', 'Ĩ': 'I', 'Ī': 'I', 'İ': 'I', 'Ï': 'I', 'Ǐ': 'I',
  'Ị': 'I', 'Į': 'I', 'Ḱ': 'K', 'Ǩ': 'K', 'Ḵ': 'K', 'Ḳ': 'K', 'Ĺ': 'L',
  'Ḻ': 'L', 'Ḷ': 'L', 'Ḿ': 'M', 'Ṁ': 'M', 'Ṃ': 'M', 'Ǹ': 'N', 'Ń': 'N',
  'Ñ': 'N', 'Ṅ': 'N', 'Ň': 'N', 'Ŋ': 'N', 'Ɲ': 'N', 'Ṇ': 'N', 'Ò': 'O',
  'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ō': 'O', 'Ȯ': 'O', 'Ö': 'O', 'Ő': 'O',
  'Ǫ': 'O', 'Ọ': 'O', 'Ɔ': 'O', 'Ø': 'O', 'Ŕ': 'R', 'Ṙ': 'R', 'Ř': 'R',
  'Ṛ': 'R', 'Ś': 'S', 'Ŝ': 'S', 'Ṡ': 'S', 'Ṣ': 'S', 'Ș': 'S', 'Ş': 'S',
  'Ṭ': 'T', 'Ț': 'T', 'Ţ': 'T', 'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ũ': 'U',
  'Ū': 'U', 'Ü': 'U', 'Ű': 'U', 'Ǔ': 'U', 'Ụ': 'U', 'Ṳ': 'U', 'Ų': 'U',
  'Ẁ': 'W', 'Ẃ': 'W', 'Ŵ': 'W', 'Ẉ': 'W', 'Ỳ': 'Y', 'Ý': 'Y', 'Ŷ': 'Y',
  'Ỹ': 'Y', 'Ȳ': 'Y', 'Ẏ': 'Y', 'Ÿ': 'Y', 'Ź': 'Z', 'Ẑ': 'Z', 'Ż': 'Z',
  'Ž': 'Z', 'Ẓ': 'Z', 'Ẕ': 'Z', 'Þ': 'TH', 'ß': 'ss',
  'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ā': 'a', 'ȧ': 'a', 'ä': 'a',
  'å': 'a', 'ǎ': 'a', 'ą': 'a', 'ạ': 'a', 'ɑ': 'a', 'ɐ': 'a', 'ɒ': 'a',
  'æ': 'ae',
  'ç': 'c', 'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i',
  'î': 'i', 'ï': 'i', 'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o',
  'õ': 'o', 'ö': 'o', 'ő': 'o', 'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u',
  'ü': 'u', 'ű': 'u', 'ý': 'y', 'þ': 'th', 'ÿ': 'y', 'ẞ': 'SS',

  // Greek
  'Α': 'A', 'Β': 'B', 'Γ': 'G', 'Δ': 'D', 'Ε': 'E', 'Ζ': 'Z', 'Η': 'H',
  'Θ': '8', 'Ι': 'I', 'Κ': 'K', 'Λ': 'L', 'Μ': 'M', 'Ν': 'N', 'Ξ': '3',
  'Ο': 'O', 'Π': 'P', 'Ρ': 'R', 'Σ': 'S', 'Τ': 'T', 'Υ': 'Y', 'Φ': 'F',
  'Χ': 'X', 'Ψ': 'PS', 'Ω': 'W',
  'Ά': 'A', 'Έ': 'E', 'Ί': 'I', 'Ό': 'O', 'Ύ': 'Y', 'Ή': 'H', 'Ώ': 'W',
  'Ϊ': 'I', 'Ϋ': 'Y',
  'α': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'h',
  'θ': '8', 'ι': 'i', 'κ': 'k', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': '3',
  'ο': 'o', 'π': 'p', 'ρ': 'r', 'σ': 's', 'τ': 't', 'υ': 'y', 'φ': 'f',
  'χ': 'x', 'ψ': 'ps', 'ω': 'w',
  'ά': 'a', 'έ': 'e', 'ί': 'i', 'ό': 'o', 'ύ': 'y', 'ή': 'h', 'ώ': 'w',
  'ς': 's', 'ϊ': 'i', 'ΰ': 'y', 'ϋ': 'y', 'ΐ': 'i',

  // Turkish
  'Ş': 'S', 'İ': 'I', 'Ğ': 'G',
  'ş': 's', 'ı': 'i', 'ğ': 'g',

  // Russian
  'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo',
  'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'J', 'К': 'K', 'Л': 'L', 'М': 'M',
  'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
  'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sh', 'Ъ': 'U',
  'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya',
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
  'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm',
  'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
  'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': 'u',
  'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',

  // Ukranian
  'Є': 'Ye', 'І': 'I', 'Ї': 'Yi', 'Ґ': 'G',
  'є': 'ye', 'і': 'i', 'ї': 'yi', 'ґ': 'g',

  // Czech
  'Č': 'C', 'Ď': 'D', 'Ě': 'E', 'Ň': 'N', 'Ř': 'R', 'Š': 'S', 'Ť': 'T',
  'Ů': 'U', 'Ž': 'Z',
  'č': 'c', 'ď': 'd', 'ě': 'e', 'ň': 'n', 'ř': 'r', 'š': 's', 'ť': 't',
  'ů': 'u', 'ž': 'z',

  // Polish
  'Ą': 'A', 'Ć': 'C', 'Ę': 'e', 'Ł': 'L', 'Ń': 'N', 'Ś': 'S', 'Ź': 'Z',
  'Ż': 'Z',
  'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ś': 's', 'ź': 'z',
  'ż': 'z',

  // Latvian
  'Ā': 'A', 'Ē': 'E', 'Ģ': 'G', 'Ī': 'i', 'Ķ': 'k', 'Ļ': 'L', 'Ņ': 'N',
  'Ū': 'u',
  'ā': 'a', 'ē': 'e', 'ģ': 'g', 'ī': 'i', 'ķ': 'k', 'ļ': 'l', 'ņ': 'n',
  'ū': 'u',

  // Currency
  '€': 'euro', '₢': 'cruzeiro', '₣': 'french franc', '£': 'pound',
  '₤': 'lira', '₥': 'mill', '₦': 'naira', '₧': 'peseta', '₨': 'rupee',
  '₩': 'won', '₪': 'new shequel', '₫': 'dong', '₭': 'kip', '₮': 'tugrik',
  '₯': 'drachma', '₰': 'penny', '₱': 'peso', '₲': 'guarani',
  '₳': 'austral', '₴': 'hryvnia', '₵': 'cedi', '¢': 'cent', '¥': 'yen',
  '元': 'yuan', '円': 'yen', '﷼': 'rial', '₠': 'ecu', '¤': 'currency',
  '฿': 'baht', "$": 'dollar', '₹': 'indian rupee',

  // Symbols
  '©': '(c)', 'œ': 'oe', 'Œ': 'OE', '∑': 'sum', '®': '(r)', '†': '+',
  '“': '"', '”': '"', '‘': "'", '’': "'", '∂': 'd', 'ƒ': 'f', '™': 'tm',
  '℠': 'sm', '…': '...', '˚': 'o', 'º': 'o', 'ª': 'a', '•': '*',
  '∆': 'delta', '∞': 'infinity', '♥': 'love', '&': 'and', '|': 'or',
  '<': 'less', '>': 'greater'
};
const charmapPattern = Object.keys(charmap).map(function(char) {
  // Update this with every normalized character that is also a unicode
  // operator.
  return char.replace(/[\|\$]/g, '\\$&');  // `$&` -> returns matched text
}).join('|');
const charmapRegExp = new RegExp('(' + charmapPattern + ')', 'g');

function unicodeFolder(str: string) {
  return str.replace(charmapRegExp, function(char: string) {
    return charmap[char];
  });
}

export default function patchLunr(lunrmod: any) {
  var tokenizer = function(obj: any, metadata: any) {
    if (!arguments.length || obj === null || obj === undefined) return [];
    if (Array.isArray(obj)) {
      return obj.map(function(t) {
        return new lunrmod.Token(
          unicodeFolder(lunrmod.utils.asString(t)).toLowerCase(),
          lunrmod.utils.clone(metadata))
      });
    }
    var str = obj.toString(), len = str.length, tokens = []

    for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
      var char = str.charAt(sliceEnd),
      sliceLength = sliceEnd - sliceStart

      if ((char.match(lunrmod.tokenizer.separator) || sliceEnd == len)) {

        if (sliceLength > 0) {
          var tokenMetadata = lunrmod.utils.clone(metadata) || {}
          tokenMetadata["position"] = [sliceStart, sliceLength]
          tokenMetadata["index"] = tokens.length

          tokens.push(
            new lunrmod.Token (
              unicodeFolder(str.slice(sliceStart, sliceEnd)).toLowerCase(),
              tokenMetadata
            )
          )
        }

        sliceStart = sliceEnd + 1
      }
    }

    return tokens
  }

  for (const attr in lunrmod.tokenizer){
    // @ts-ignore
    tokenizer[attr] = lunrmod.tokenizer[attr];
  }
  lunrmod.tokenizer = tokenizer;
}
