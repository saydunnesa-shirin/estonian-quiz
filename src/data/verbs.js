// Estonian Verbs — -MA and -DA infinitive forms
// Source: -MA ja -DA vorm worksheet

// All verb pairs
export const verbs = [
  { english: 'to study/learn',  ma: 'õppima',            da: 'õppida'          },
  { english: 'to work',         ma: 'töötama',           da: 'töötada'         },
  { english: 'to travel',       ma: 'reisima',           da: 'reisida'         },
  { english: 'to walk',         ma: 'jalutama',          da: 'jalutada'        },
  { english: 'to clean',        ma: 'koristama',         da: 'koristada'       },
  { english: 'to listen',       ma: 'kuulama',           da: 'kuulata'         },
  { english: 'to watch/look',   ma: 'vaatama',           da: 'vaadata'         },
  { english: 'to play',         ma: 'mängima',           da: 'mängida'         },
  { english: 'to call',         ma: 'helistama',         da: 'helistada'       },
  { english: 'to rest',         ma: 'puhkama',           da: 'puhata'          },
  { english: 'to dance',        ma: 'tantsima',          da: 'tantsida'        },
  { english: 'to sit',          ma: 'istuma',            da: 'istuda'          },
  { english: 'to live',         ma: 'elama',             da: 'elada'           },
  { english: 'to cycle',        ma: 'jalgrattaga sõitma',da: 'jalgrattaga sõita'},
  { english: 'to go',           ma: 'minema',            da: 'minna'           },
  { english: 'to come',         ma: 'tulema',            da: 'tulla'           },
  { english: 'to eat',          ma: 'sööma',             da: 'süüa'            },
  { english: 'to drink',        ma: 'jooma',             da: 'juua'            },
  { english: 'to do/make',      ma: 'tegema',            da: 'teha'            },
  { english: 'to see',          ma: 'nägema',            da: 'näha'            },
  { english: 'to read',         ma: 'lugema',            da: 'lugeda'          },
  { english: 'to think',        ma: 'mõtlema',           da: 'mõelda'          },
  { english: 'to feel',         ma: 'tundma',            da: 'tunda'           },
  { english: 'to go/attend',    ma: 'käima',             da: 'käia'            },
  { english: 'to be',           ma: 'olema',             da: 'olla'            },
  { english: 'to take',         ma: 'võtma',             da: 'võtta'           },
  { english: 'to give',         ma: 'andma',             da: 'anda'            },
  { english: 'to put',          ma: 'panema',            da: 'panna'           },
  { english: 'to know',         ma: 'teadma',            da: 'teada'           },
  { english: 'to find',         ma: 'leidma',            da: 'leida'           },
  { english: 'to adventure',    ma: 'seiklema',          da: 'seigelda'        },
  { english: 'to wait',         ma: 'ootama',            da: 'oodata'          },
  { english: 'to help',         ma: 'aitama',            da: 'aidata'          },
];

// Trigger words that require the -MA form
export const MA_TRIGGERS = [
  { sentence: 'Ma lähen',    english: 'I go to',      hint: 'movement verb' },
  { sentence: 'Ma hakkan',   english: 'I start to',   hint: 'process verb'  },
  { sentence: 'Ma tulen',    english: 'I come to',    hint: 'movement verb' },
  { sentence: 'Ma pean',     english: 'I must',       hint: 'obligation'    },
];

// Trigger words that require the -DA form
export const DA_TRIGGERS = [
  { sentence: 'Ma tahan',      english: 'I want to',       hint: 'desire verb'  },
  { sentence: 'Ma saan',       english: 'I can',           hint: 'modal verb'   },
  { sentence: 'Mulle meeldib', english: 'I like to',       hint: 'preference'   },
  { sentence: 'Ma oskan',      english: 'I know how to',   hint: 'ability verb' },
  { sentence: 'Ma proovin',    english: 'I try to',        hint: 'attempt verb' },
  { sentence: 'Mul on vaja',   english: 'I need to',       hint: 'necessity'    },
];
