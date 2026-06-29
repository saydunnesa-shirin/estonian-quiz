// Estonian A2 Vocabulary - Declension Table
// Source: 'Tule ja õpi veel!' (A2)
// To add more topics later: append more objects to the `vocabulary` array.

export const FORM_KEYS = [
  '1st Form (sing. nom.)',
  '2nd Form (sing. gen.)',
  '3rd Form (sing. part.)',
  'Pl. 1st (pl. nom.)',
  'Pl. 2nd (pl. gen.)',
  'Pl. 3rd (pl. part.)',
];

// Estonian case names shown in questions alongside the form label
export const FORM_CASE_NAMES = {
  '1st Form (sing. nom.)': 'nimetav',
  '2nd Form (sing. gen.)': 'omastav',
  '3rd Form (sing. part.)': 'osastav',
  'Pl. 1st (pl. nom.)': 'pl. nimetav',
  'Pl. 2nd (pl. gen.)': 'pl. omastav',
  'Pl. 3rd (pl. part.)': 'pl. osastav',
};

// Helper to build a forms object from an ordered array
function f([n1, n2, n3, p1, p2, p3]) {
  return {
    '1st Form (sing. nom.)': n1,
    '2nd Form (sing. gen.)': n2,
    '3rd Form (sing. part.)': n3,
    'Pl. 1st (pl. nom.)': p1,
    'Pl. 2nd (pl. gen.)': p2,
    'Pl. 3rd (pl. part.)': p3,
  };
}

export const vocabulary = [
  // ── Chapter 3: Home (Kodu) ────────────────────────────────────────────────
  { english: 'house/building',  chapter: 'Home',       forms: f(['maja',            'maja',            'maja',            'majad',             'majade',           'maju'])            },
  { english: 'apartment',       chapter: 'Home',       forms: f(['korter',          'korteri',         'korterit',        'korterid',          'korterite',        'kortereid'])       },
  { english: 'garage',          chapter: 'Home',       forms: f(['garaaž',          'garaaži',         'garaaži',         'garaažid',          'garaažide',        'garaažisid'])      },
  { english: 'corridor',        chapter: 'Home',       forms: f(['koridor',         'koridori',        'koridori',        'koridorid',         'koridoride',       'koridore'])        },
  { english: 'room',            chapter: 'Home',       forms: f(['tuba',            'toa',             'tuba',            'toad',              'tubade',           'tube'])            },
  { english: 'bathroom',        chapter: 'Home',       forms: f(['vannituba',       'vannitoa',        'vannituba',       'vannitoad',         'vannitubade',      'vannitube'])       },
  { english: 'bedroom',         chapter: 'Home',       forms: f(['magamistuba',     'magamistoa',      'magamistuba',     'magamistoad',       'magamistubade',    'magamistube'])     },
  { english: 'kitchen',         chapter: 'Home',       forms: f(['köök',            'köögi',           'kööki',           'köögid',            'köökide',          'kööke'])           },
  { english: 'cellar/basement', chapter: 'Home',       forms: f(['kelder',          'keldri',          'keldrit',         'keldrid',           'keldrite',         'keldreid'])        },
  { english: 'hallway/entry',   chapter: 'Home',       forms: f(['esik',            'esiku',           'esikut',          'esikud',            'esikute',          'esikuid'])         },
  { english: 'sauna',           chapter: 'Home',       forms: f(['saun',            'sauna',           'sauna',           'saunad',            'saunade',          'saunu'])           },
  { english: 'garden',          chapter: 'Home',       forms: f(['aed',             'aia',             'aeda',            'aiad',              'aiade',            'aedu'])            },
  { english: 'balcony',         chapter: 'Home',       forms: f(['rõdu',            'rõdu',            'rõdu',            'rõdud',             'rõdude',           'rõdusid'])         },
  { english: 'terrace',         chapter: 'Home',       forms: f(['terrass',         'terrassi',        'terrassi',        'terrassid',         'terrasside',       'terrasseid'])      },

  // ── Chapter 5: Furniture (Mööbel) ─────────────────────────────────────────
  { english: 'bed',             chapter: 'Furniture',  forms: f(['voodi',           'voodi',           'voodit',          'voodid',            'voodite',          'voodeid'])         },
  { english: 'computer',        chapter: 'Furniture',  forms: f(['arvuti',          'arvuti',          'arvutit',         'arvutid',           'arvutite',         'arvuteid'])        },
  { english: 'shelf/bookcase',  chapter: 'Furniture',  forms: f(['riiul',           'riiuli',          'riiulit',         'riiulid',           'riiulite',         'riiuleid'])        },
  { english: 'sofa/couch',      chapter: 'Furniture',  forms: f(['diivan',          'diivani',         'diivanit',        'diivanid',          'diivanite',        'diivaneid'])       },
  { english: 'mirror',          chapter: 'Furniture',  forms: f(['peegel',          'peegli',          'peeglit',         'peeglid',           'peeglite',         'peegleid'])        },
  { english: 'bathtub',         chapter: 'Furniture',  forms: f(['vann',            'vanni',           'vanni',           'vannid',            'vannide',          'vanne'])           },
  { english: 'shower cabin',    chapter: 'Furniture',  forms: f(['dušikabiin',      'dušikabiini',     'dušikabiini',     'dušikabiinid',      'dušikabiinide',    'dušikabiine'])     },
  { english: 'armchair',        chapter: 'Furniture',  forms: f(['tugitool',        'tugitooli',       'tugitooli',       'tugitoolid',        'tugitoolide',      'tugitoole'])       },
  { english: 'wardrobe/cabinet',chapter: 'Furniture',  forms: f(['kapp',            'kapi',            'kappi',           'kapid',             'kappide',          'kappe'])           },
  { english: 'refrigerator',    chapter: 'Furniture',  forms: f(['külmkapp',        'külmkapi',        'külmkappi',       'külmkapid',         'külmkappide',      'külmkappe'])       },
  { english: 'blanket/quilt',   chapter: 'Furniture',  forms: f(['tekk',            'teki',            'tekki',           'tekid',             'tekkide',          'tekke'])           },
  { english: 'sink',            chapter: 'Furniture',  forms: f(['kraanikauss',     'kraanikausi',     'kraanikaussi',    'kraanikaused',      'kraanikauste',     'kraanikausse'])    },
  { english: 'stove/cooker',    chapter: 'Furniture',  forms: f(['pliit',           'pliidi',          'pliiti',          'pliidid',           'pliitide',         'pliite'])          },
  { english: 'lamp',            chapter: 'Furniture',  forms: f(['lamp',            'lambi',           'lampi',           'lambid',            'lampide',          'lampe'])           },
  { english: 'table',           chapter: 'Furniture',  forms: f(['laud',            'laua',            'lauda',           'lauad',             'laudade',          'laudu'])           },
  { english: 'pillow',          chapter: 'Furniture',  forms: f(['padi',            'padja',           'patja',           'padjad',            'padjade',          'patju'])           },
  { english: 'clock/bell',      chapter: 'Furniture',  forms: f(['kell',            'kella',           'kella',           'kellad',            'kellade',          'kelli'])           },

  // ── Chapter 5: Appliances (Kodumasinad) ───────────────────────────────────
  { english: 'vacuum cleaner',  chapter: 'Appliances', forms: f(['tolmuimeja',      'tolmuimeja',      'tolmuimejat',     'tolmuimejad',       'tolmuimejate',     'tolmuimejaid'])    },
  { english: 'kettle',          chapter: 'Appliances', forms: f(['veekeetja',       'veekeetja',       'veekeetjat',      'veekeetjad',        'veekeetjate',      'veekeetjaid'])     },
  { english: 'air purifier',    chapter: 'Appliances', forms: f(['õhupuhasti',      'õhupuhasti',      'õhupuhastit',     'õhupuhastid',       'õhupuhastite',     'õhupuhasteid'])    },
  { english: 'washing machine', chapter: 'Appliances', forms: f(['pesumasin',       'pesumasina',      'pesumasinat',     'pesumasinad',       'pesumasinate',     'pesumasinaid'])    },
  { english: 'dishwasher',      chapter: 'Appliances', forms: f(['nõudepesumasin',  'nõudepesumasina', 'nõudepesumasinat','nõudepesumasinad',  'nõudepesumasinate','nõudepesumasinaid'])},
  { english: 'coffee machine',  chapter: 'Appliances', forms: f(['kohvimasin',      'kohvimasina',     'kohvimasinat',    'kohvimasinad',      'kohvimasinate',    'kohvimasinaid'])   },
  { english: 'television',      chapter: 'Appliances', forms: f(['televiisor',      'televiisori',     'televiisorit',    'televiisored',      'televiisorite',    'televiisoreid'])   },
  { english: 'toaster',         chapter: 'Appliances', forms: f(['röster',          'röstri',          'röstrit',         'röstrid',           'röstrite',         'röstreid'])        },
  { english: 'freezer',         chapter: 'Appliances', forms: f(['sügavkülmik',     'sügavkülmiku',    'sügavkülmikut',   'sügavkülmikud',     'sügavkülmikute',   'sügavkülmikuid'])  },
  { english: 'hair dryer',      chapter: 'Appliances', forms: f(['föön',            'fööni',           'fööni',           'föönid',            'föönide',          'föönisid'])        },
  { english: 'rubbish bin',     chapter: 'Appliances', forms: f(['prügikast',       'prügikasti',      'prügikasti',      'prügikastid',       'prügikastide',     'prügikaste'])      },
  { english: 'picture/painting',chapter: 'Appliances', forms: f(['pilt',            'pildi',           'pilti',           'pildid',            'piltide',          'pilte'])           },
  { english: 'oven/furnace',    chapter: 'Appliances', forms: f(['ahi',             'ahju',            'ahju',            'ahjud',             'ahjude',           'ahje'])            },
  { english: 'microwave oven',  chapter: 'Appliances', forms: f(['mikrolaineahi',   'mikrolaineahju',  'mikrolaineahju',  'mikrolaineahjud',   'mikrolaineahjude', 'mikrolaineahje'])  },
  { english: 'iron',            chapter: 'Appliances', forms: f(['triikraud',       'triikraua',       'triikrauda',      'triikrauad',        'triikraudade',     'triikraudu'])      },
  { english: 'carpet/rug',      chapter: 'Appliances', forms: f(['vaip',            'vaiba',           'vaipa',           'vaibad',            'vaipade',          'vaipu'])           },

  // ── Chapter 7: Family (Perekond) ──────────────────────────────────────────
  { english: 'sister',          chapter: 'Family',     forms: f(['õde',             'õe',              'õde',             'õed',               'õdede',            'õdesid'])          },
  { english: 'brother',         chapter: 'Family',     forms: f(['vend',            'venna',           'venda',           'vennad',            'vendade',          'vendi'])           },
  { english: 'son',             chapter: 'Family',     forms: f(['poeg',            'poja',            'poega',           'pojad',             'poegade',          'poegi'])           },
  { english: 'daughter',        chapter: 'Family',     forms: f(['tütar',           'tütre',           'tütart',          'tütred',            'tütarde',          'tütreid'])         },
  { english: 'child',           chapter: 'Family',     forms: f(['laps',            'lapse',           'last',            'lapsed',            'laste',            'lapsi'])           },
  { english: 'mother',          chapter: 'Family',     forms: f(['ema',             'ema',             'ema',             'emad',              'emade',            'emasid'])          },
  { english: 'grandmother',     chapter: 'Family',     forms: f(['vanaema',         'vanaema',         'vanaema',         'vanaemad',          'vanaemade',        'vanaemaid'])       },
  { english: 'grandfather',     chapter: 'Family',     forms: f(['vanaisa',         'vanaisa',         'vanaisa',         'vanaisad',          'vanaisa',          'vanaisasid'])      },
  { english: 'father',          chapter: 'Family',     forms: f(['isa',             'isa',             'isa',             'isad',              'isade',            'isasid'])          },
  { english: 'spouse',          chapter: 'Family',     forms: f(['abikaasa',        'abikaasa',        'abikaasat',       'abikaasad',         'abikaasade',       'abikaasasid'])     },
  { english: 'husband/man',     chapter: 'Family',     forms: f(['mees',            'mehe',            'meest',           'mehed',             'meeste',           'mehi'])            },
  { english: 'wife/woman',      chapter: 'Family',     forms: f(['naine',           'naise',           'naist',           'naised',            'naiste',           'naisi'])           },
  { english: 'partner (live-in)',chapter: 'Family',    forms: f(['elukaaslane',     'elukaaslase',     'elukaaslast',     'elukaaslased',      'elukaaslaste',     'elukaaslasi'])     },
  { english: 'relative',        chapter: 'Family',     forms: f(['sugulane',        'sugulase',        'sugulast',        'sugulased',         'sugulaste',        'sugulasi'])        },
  { english: 'girlfriend',      chapter: 'Family',     forms: f(['tüdruksõber',     'tüdruksõbra',     'tüdruksõpra',     'tüdruksõbrad',      'tüdruksõprade',    'tüdruksõpru'])     },
  { english: 'mother-in-law',   chapter: 'Family',     forms: f(['ämm',             'ämma',            'ämma',            'ämmad',             'ämmade',           'ämmasid'])         },
  { english: 'father-in-law',   chapter: 'Family',     forms: f(['äi',              'äia',             'äia',             'äiad',              'äiade',            'äiasid'])          },

  // ── Chapter 8: Birthday Gifts (Tähtpäevad) ────────────────────────────────
  { english: 'wine',            chapter: 'Gifts',      forms: f(['vein',            'veini',           'veini',           'veinid',            'veinide',          'veine'])           },
  { english: 'jam',             chapter: 'Gifts',      forms: f(['moos',            'moosi',           'moosi',           'moosid',            'mooside',          'moose'])           },
  { english: 'chocolate',       chapter: 'Gifts',      forms: f(['šokolaad',        'šokolaadi',       'šokolaadi',       'šokolaadid',        'šokolaadide',      'šokolaade'])       },
  { english: 'cognac/brandy',   chapter: 'Gifts',      forms: f(['konjak',          'konjaki',         'konjakit',        'konjakid',          'konjakite',        'konjakeid'])       },
  { english: 'champagne',       chapter: 'Gifts',      forms: f(['šampus',          'šampuse',         'šampust',         'šampused',          'šampuste',         'šampuseid'])       },
  { english: 'ice cream',       chapter: 'Gifts',      forms: f(['jäätis',          'jäätise',         'jäätist',         'jäätised',          'jäätiste',         'jäätiseid'])       },
  { english: 'honey',           chapter: 'Gifts',      forms: f(['mesi',            'mee',             'mett',            'meed',              'meede',            'meesid'])          },

  // ── Chapter 15: Clothing (Riided) ─────────────────────────────────────────
  { english: 'dress',           chapter: 'Clothing',   forms: f(['kleit',           'kleidi',          'kleiti',          'kleidid',           'kleitide',         'kleite'])          },
  { english: 'shirt',           chapter: 'Clothing',   forms: f(['särk',            'särgi',           'särki',           'särgid',            'särkide',          'särke'])           },
  { english: 'T-shirt',         chapter: 'Clothing',   forms: f(['T-särk',          'T-särgi',         'T-särki',         'T-särgid',          'T-särkide',        'T-särke'])         },
  { english: 'nightshirt',      chapter: 'Clothing',   forms: f(['öösärk',          'öösärgi',         'öösärki',         'öösärgid',          'öösärkide',        'öösärke'])         },
  { english: 'blouse',          chapter: 'Clothing',   forms: f(['pluus',           'pluusi',          'pluusi',          'pluusid',           'pluuside',         'pluuse'])          },
  { english: 'scarf',           chapter: 'Clothing',   forms: f(['sall',            'salli',           'salli',           'sallid',            'sallide',          'salle'])           },
  { english: 'hat/cap',         chapter: 'Clothing',   forms: f(['müts',            'mütsi',           'mütsi',           'mütsid',            'mütside',          'mütse'])           },
  { english: 'light jacket',    chapter: 'Clothing',   forms: f(['jakk',            'jaki',            'jakki',           'jakid',             'jakkide',          'jakke'])           },
  { english: 'suit',            chapter: 'Clothing',   forms: f(['ülikond',         'ülikonna',        'ülikonda',        'ülikonnad',         'ülikondade',       'ülikondi'])        },
  { english: 'tie',             chapter: 'Clothing',   forms: f(['lips',            'lipsu',           'lipsu',           'lipsud',            'lipside',          'lipse'])           },
  { english: 'bow tie',         chapter: 'Clothing',   forms: f(['kikilips',        'kikilipsu',       'kikilipsu',       'kikilipsud',        'kikilipside',      'kikilipse'])       },
  { english: 'blazer/jacket',   chapter: 'Clothing',   forms: f(['pintsak',         'pintsaku',        'pintsakut',       'pintsakud',         'pintsakute',       'pintsakuid'])      },
  { english: 'skirt',           chapter: 'Clothing',   forms: f(['seelik',          'seeliku',         'seelikut',        'seelikud',          'seelikute',        'seelikuid'])       },
  { english: 'headscarf/towel', chapter: 'Clothing',   forms: f(['rätik',           'rätiku',          'rätikut',         'rätikud',           'rätikute',         'rätikuid'])        },
  { english: 'sweater/jumper',  chapter: 'Clothing',   forms: f(['kampsun',         'kampsuni',        'kampsunit',       'kampsunid',         'kampsunite',       'kampsuneid'])      },
  { english: 'coat',            chapter: 'Clothing',   forms: f(['mantel',          'mantli',          'mantlit',         'mantlid',           'mantlite',         'mantleid'])        },
  { english: 'fur coat',        chapter: 'Clothing',   forms: f(['kasukas',         'kasuka',          'kasukat',         'kasukad',           'kasukate',         'kasukaid'])        },
  { english: 'ring',            chapter: 'Clothing',   forms: f(['sõrmus',          'sõrmuse',         'sõrmust',         'sõrmused',          'sõrmuste',         'sõrmusi'])         },
  { english: 'anorak/jacket',   chapter: 'Clothing',   forms: f(['jope',            'jope',            'jopet',           'joped',             'jopete',           'jopeid'])          },
  { english: 'pyjamas',         chapter: 'Clothing',   forms: f(['pidžaama',        'pidžaama',        'pidžaamat',       'pidžaamad',         'pidžaamade',       'pidžaamaid'])      },
  { english: 'necklace',        chapter: 'Clothing',   forms: f(['kaelakee',        'kaelakee',        'kaelakeed',       'kaelakeed',         'kaelakeede',       'kaelakeesid'])     },
];
