// Verified pronoun case questions from Naljaks textbook exercises 27, 30, 33, 36, 37
// ALL answers are independently verified against Estonian grammar rules.
//
// Case usage rules:
//   Kellele? (allative/dative) — meeldima, helistama, ütlema, rääkima, andma,
//                                kirjutama, pakkuma, saatma, tooma, tegema, laenama (lend TO)
//   Kellel?  (adessive)       — on (possession & state: kiire, igav, kahju, lõbus, vaja, aega...)
//   Kellelt? (ablative)       — küsima, laenama (borrow FROM), saama, ostma, paluma
//   Keda?    (partitive)      — armastama, vaatama, nägema, kuulama, ootama, segama, pildistama,
//                                aitama (help sb directly without specifying task)
//   Kelle?   (genitive)       — possessive before noun (tema sõber, nende poeg, meie naaber)

const pronounQuestions = [

  // ══ MINA: options = [mulle, mul, minult, mind] ══════════════════════════════

  {
    sentence: "___ meeldib väga sõpradega väljas käia.",
    options: ["Mulle", "Mul", "Minult", "Mind"],
    correctAnswer: "Mulle",
    rule: "kellele",
    explanation: "meeldima + kellele (to whom is it pleasing?) → Mulle meeldib = I like"
  },
  {
    sentence: "Palun oota ___ ukse ees, ma kohe tulen!",
    options: ["mulle", "mul", "minult", "mind"],
    correctAnswer: "mind",
    rule: "keda",
    explanation: "ootama + keda (wait for whom?) → oota mind = wait for me"
  },
  {
    sentence: "___ on väga kiire, ma ei jõua praegu rääkida.",
    options: ["Mulle", "Mul", "Minult", "Mind"],
    correctAnswer: "Mul",
    rule: "kellel on",
    explanation: "seisundid: kellel on kiire? → Mul on kiire = I'm in a hurry"
  },
  {
    sentence: "Too ___ palun poest piima!",
    options: ["mulle", "mul", "minult", "mind"],
    correctAnswer: "mulle",
    rule: "kellele",
    explanation: "tooma (to bring) + kellele (to whom?) → too mulle = bring me"
  },
  {
    sentence: "Laena ___ sada eurot, ma maksan tagasi!",
    options: ["mulle", "mul", "minult", "mind"],
    correctAnswer: "mulle",
    rule: "kellele",
    explanation: "laenama (to lend TO) + kellele → laena mulle = lend me"
  },
  {
    sentence: "Oodake ___, ma hilinen veidi!",
    options: ["mulle", "mul", "minult", "mind"],
    correctAnswer: "mind",
    rule: "keda",
    explanation: "ootama + keda → oodake mind = wait for me"
  },
  {
    sentence: "Sa segad ___! Ole palun vait!",
    options: ["mulle", "mul", "minult", "mind"],
    correctAnswer: "mind",
    rule: "keda",
    explanation: "segama (to disturb) + keda → segad mind = you're disturbing me"
  },
  {
    sentence: "___ on väga kahju, et nii läks.",
    options: ["Mulle", "Mul", "Minult", "Mind"],
    correctAnswer: "Mul",
    rule: "kellel on",
    explanation: "kellel on kahju? → Mul on kahju = I feel sorry"
  },
  {
    sentence: "Palun pildista ___ koos selle kuulsa filmitähega!",
    options: ["mulle", "mul", "minult", "mind"],
    correctAnswer: "mind",
    rule: "keda",
    explanation: "pildistama (to photograph) + keda → pildista mind = photograph me"
  },
  {
    sentence: "Andke palun ___ oma telefoninumber!",
    options: ["mulle", "mul", "minult", "mind"],
    correctAnswer: "mulle",
    rule: "kellele",
    explanation: "andma (to give) + kellele → andke mulle = give me"
  },

  // ══ SINA: options = [sulle, sul, sinult, sind] ══════════════════════════════

  {
    sentence: "Ma kuulan ___, aga ei saa aru, mida sa räägid.",
    options: ["sulle", "sul", "sinult", "sind"],
    correctAnswer: "sind",
    rule: "keda",
    explanation: "kuulama (to listen to) + keda → kuulan sind = I'm listening to you"
  },
  {
    sentence: "___ saab alati kõike laenata, sa oled nii lahke.",
    options: ["Sulle", "Sul", "Sinult", "Sind"],
    correctAnswer: "Sinult",
    rule: "kellelt",
    explanation: "laenama (to borrow FROM) + kellelt → sinult laenata = borrow from you"
  },
  {
    sentence: "___ on kõik alati olemas!",
    options: ["Sulle", "Sul", "Sinult", "Sind"],
    correctAnswer: "Sul",
    rule: "kellel on",
    explanation: "omamine: kellel on kõik? → Sul on kõik = you have everything"
  },
  {
    sentence: "Ma armastan ___ väga!",
    options: ["sulle", "sul", "sinult", "sind"],
    correctAnswer: "sind",
    rule: "keda",
    explanation: "armastama (to love) + keda → armastan sind = I love you"
  },
  {
    sentence: "___ võib alati kõike küsida, sa kunagi ei pahanda.",
    options: ["Sulle", "Sul", "Sinult", "Sind"],
    correctAnswer: "Sinult",
    rule: "kellelt",
    explanation: "küsima (to ask from) + kellelt → sinult küsida = ask from you"
  },
  {
    sentence: "Mul on ___ väike palve.",
    options: ["sulle", "sul", "sinult", "sind"],
    correctAnswer: "sulle",
    rule: "kellele",
    explanation: "'mul on kellelE palve' (a request FOR someone) → sulle"
  },

  // ══ TEMA: options = [talle, tal, temalt, teda] ══════════════════════════════

  {
    sentence: "___ on uus äge auto.",
    options: ["Talle", "Tal", "Temalt", "Teda"],
    correctAnswer: "Tal",
    rule: "kellel on",
    explanation: "omamine: kellel on auto? → Tal on auto = he/she has a car"
  },
  {
    sentence: "Ma tõesti armastan ___, aga ta ei tea seda.",
    options: ["talle", "tal", "temalt", "teda"],
    correctAnswer: "teda",
    rule: "keda",
    explanation: "armastama + keda → armastan teda = I love him/her"
  },
  {
    sentence: "Öelge palun ___, et ma tahan temaga rääkida.",
    options: ["talle", "tal", "temalt", "teda"],
    correctAnswer: "talle",
    rule: "kellele",
    explanation: "ütlema (to tell) + kellele → öelge talle = tell him/her"
  },
  {
    sentence: "Ära sega ___, ta magab.",
    options: ["talle", "tal", "temalt", "teda"],
    correctAnswer: "teda",
    rule: "keda",
    explanation: "segama + keda → sega teda = disturb him/her"
  },
  {
    sentence: "Sain ___ vastuse, et ta ei tule.",
    options: ["talle", "tal", "temalt", "teda"],
    correctAnswer: "temalt",
    rule: "kellelt",
    explanation: "saama (to receive from) + kellelt → sain temalt = I got from him/her"
  },
  {
    sentence: "___ sõbral on uus suvila, sõidame sinna!",
    options: ["Tema", "Talle", "Temalt", "Teda"],
    correctAnswer: "Tema",
    rule: "kelle (omastav)",
    explanation: "omastav ees nimisõna: whose friend? → Tema sõber = his/her friend"
  },

  // ══ MEIE: options = [meile, meil, meilt, meid] ══════════════════════════════

  {
    sentence: "___ helistab igal õhtul mingi võõras mees.",
    options: ["Meile", "Meil", "Meilt", "Meid"],
    correctAnswer: "Meile",
    rule: "kellele",
    explanation: "helistama (to call) + kellele → helistab meile = calls us"
  },
  {
    sentence: "Kas sa näed ___? Me oleme puu taga!",
    options: ["meile", "meil", "meilt", "meid"],
    correctAnswer: "meid",
    rule: "keda",
    explanation: "nägema (to see) + keda → näed meid = you see us"
  },
  {
    sentence: "Naabrid küsivad ___ raha uue basseini jaoks.",
    options: ["meile", "meil", "meilt", "meid"],
    correctAnswer: "meilt",
    rule: "kellelt",
    explanation: "küsima + kellelt → küsivad meilt = ask from us"
  },
  {
    sentence: "___ on lõbus koos õppida!",
    options: ["Meile", "Meil", "Meilt", "Meid"],
    correctAnswer: "Meil",
    rule: "kellel on",
    explanation: "seisundid: kellel on lõbus? → Meil on lõbus = we're having fun"
  },
  {
    sentence: "___ naabrile meeldib meil külas käia.",
    options: ["Meie", "Meile", "Meilt", "Meid"],
    correctAnswer: "Meie",
    rule: "kelle (omastav)",
    explanation: "omastav: whose neighbor? → Meie naaber = our neighbor"
  },

  // ══ TEIE: options = [teile, teil, teilt, teid] ══════════════════════════════

  {
    sentence: "___ vist ei meeldi see, mida ma räägin.",
    options: ["Teile", "Teil", "Teilt", "Teid"],
    correctAnswer: "Teile",
    rule: "kellele",
    explanation: "meeldima + kellele → Teile ei meeldi = you (pl.) don't like it"
  },
  {
    sentence: "Kas ___ on aega minuga natuke rääkida?",
    options: ["teile", "teil", "teilt", "teid"],
    correctAnswer: "teil",
    rule: "kellel on",
    explanation: "omamine: kellel on aega? → teil on aega = you (pl.) have time"
  },
  {
    sentence: "Kas ma tohin ___ suhkrut paluda?",
    options: ["teile", "teil", "teilt", "teid"],
    correctAnswer: "teilt",
    rule: "kellelt",
    explanation: "paluma (to request from) + kellelt → teilt paluda = request from you"
  },
  {
    sentence: "Ma räägin ___, kuidas on võimalik ruttu rikkaks saada.",
    options: ["teile", "teil", "teilt", "teid"],
    correctAnswer: "teile",
    rule: "kellele",
    explanation: "rääkima (to tell) + kellele → räägin teile = I'll tell you (pl.)"
  },

  // ══ NEMAD: options = [neile, neil, neilt, neid] + [nende] ═══════════════════

  {
    sentence: "___ on alati imelikud palved.",
    options: ["Neile", "Neil", "Neilt", "Neid"],
    correctAnswer: "Neil",
    rule: "kellel on",
    explanation: "omamine: kellel on palved? → Neil on palved = they have requests"
  },
  {
    sentence: "Aidake ___, nad ei jõua ise seda kotti tõsta!",
    options: ["neile", "neil", "neilt", "neid"],
    correctAnswer: "neid",
    rule: "keda",
    explanation: "aitama (to help) + keda → aidake neid = help them"
  },
  {
    sentence: "Sain ___ vastuse, et nad ei tule.",
    options: ["neile", "neil", "neilt", "neid"],
    correctAnswer: "neilt",
    rule: "kellelt",
    explanation: "saama (to receive from) + kellelt → sain neilt = I got from them"
  },
  {
    sentence: "Kirjutan ___ homme.",
    options: ["neile", "neil", "neilt", "neid"],
    correctAnswer: "neile",
    rule: "kellele",
    explanation: "kirjutama (to write to) + kellele → kirjutan neile = I'll write to them"
  },
  {
    sentence: "___ pojal on alati hea tuju.",
    options: ["Nende", "Neile", "Neilt", "Neid"],
    correctAnswer: "Nende",
    rule: "kelle (omastav)",
    explanation: "omastav: whose son? → Nende poeg = their son"
  },
];

export default pronounQuestions;
