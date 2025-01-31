"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHINESE = "chinese";
var GERMAN = "german";
var FRENCH = "french";
var RUSSIAN = "russian";
var CZECH = "czech";
var POLISH = "polish";
var ICELANDIC = "icelandic";
var ESTONIAN = "estonian";

var pluralMap = {
  id: CHINESE,
  ja: CHINESE,
  ko: CHINESE,
  ms: CHINESE,
  th: CHINESE,
  tr: CHINESE,
  zh: CHINESE,

  da: GERMAN,
  de: GERMAN,
  en: GERMAN,
  es: GERMAN,
  fi: GERMAN,
  el: GERMAN,
  he: GERMAN,
  hu: GERMAN,
  it: GERMAN,
  nl: GERMAN,
  no: GERMAN,
  pt: GERMAN,
  sv: GERMAN,

  fr: FRENCH,
  tl: FRENCH,

  hr: RUSSIAN,
  ru: RUSSIAN,

  cs: CZECH,
  sk: CZECH,

  pl: POLISH,

  is: ICELANDIC,

  et: GERMAN,
  lt: GERMAN,
  lv: GERMAN
};

exports.default = pluralMap;