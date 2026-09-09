/* ============================================================
   Naija Scramble — word bank
   ------------------------------------------------------------
   This is the file that keeps the game alive. Add rows here,
   OR (recommended) replace this with a feed from a Google Sheet
   that outputs the same shape — see the note at the bottom.

   Fields:
     w    letters only, A-Z, 4-10 chars   (the answer)
     cat  category label                  (used by Category mode)
     d    difficulty 1 (easy) .. 3 (hard) (used by Marathon ramp)
     hint one short line, plain Naija
     ex   example sentence, with ___ where the word goes
     alt  array of other spellings that should also be accepted
   ============================================================ */

window.NS_WORDS = [
  /* ---- Chop (food & drink) ---- */
  {w:"JOLLOF",  cat:"Chop", d:1, hint:"The rice that starts arguments", ex:"Naija ___ pass Ghana own, abeg", alt:[]},
  {w:"SUYA",    cat:"Chop", d:1, hint:"Peppered meat off the mallam's grill", ex:"Buy ___ for me for that junction", alt:[]},
  {w:"ZOBO",    cat:"Chop", d:1, hint:"Deep-red hibiscus drink", ex:"Cold ___ for this hot afternoon", alt:[]},
  {w:"AKARA",   cat:"Chop", d:2, hint:"Bean cake, fried golden", ex:"Morning ___ and pap na correct combo", alt:[]},
  {w:"EGUSI",   cat:"Chop", d:2, hint:"Melon-seed soup, lumpy and correct", ex:"She cook ___ soup with plenty meat", alt:[]},
  {w:"GARRI",   cat:"Chop", d:2, hint:"Soak am with groundnut and sugar", ex:"No money, na ___ we go soak tonight", alt:["GARI"]},
  {w:"PONMO",   cat:"Chop", d:2, hint:"Chewy cow skin in the stew", ex:"Add ___ for my plate abeg", alt:["POMO"]},
  {w:"MOIMOI",  cat:"Chop", d:2, hint:"Steamed bean pudding", ex:"Party rice without ___? Nonsense", alt:["MOINMOIN","MOIMOIN"]},
  {w:"NKWOBI",  cat:"Chop", d:3, hint:"Spicy cow-foot delicacy, Igbo style", ex:"We order ___ for the bar", alt:[]},
  {w:"ABACHA",  cat:"Chop", d:3, hint:"African salad from shredded cassava", ex:"___ dey sweet with plenty ugba", alt:[]},

  /* ---- Gist (slang) ---- */
  {w:"JAPA",    cat:"Gist", d:1, hint:"To relocate abroad, sharply", ex:"Him don ___ go Canada", alt:[]},
  {w:"MUMU",    cat:"Gist", d:1, hint:"A fool, someone easily deceived", ex:"Dem take am for ___", alt:[]},
  {w:"YARN",    cat:"Gist", d:1, hint:"To talk or chat", ex:"Make we ___ small before you go", alt:[]},
  {w:"FLEX",    cat:"Gist", d:1, hint:"To enjoy yourself or show off", ex:"Weekend don come, time to ___", alt:[]},
  {w:"WAHALA",  cat:"Gist", d:2, hint:"Trouble, and plenty of it", ex:"I no want any ___ this year", alt:[]},
  {w:"CRUISE",  cat:"Gist", d:2, hint:"Playful banter, not serious", ex:"Calm down, na ___ I dey", alt:[]},
  {w:"AMEBO",   cat:"Gist", d:2, hint:"A nosy gossip", ex:"This ___ don carry my matter go outside", alt:["AMEEBO"]},
  {w:"GBEDU",   cat:"Gist", d:2, hint:"Heavy danceable beat", ex:"DJ, put the ___ loud", alt:[]},
  {w:"PALAVA",  cat:"Gist", d:2, hint:"A quarrel or dispute", ex:"No bring ___ come my house", alt:["PALAVER"]},
  {w:"SHAKARA", cat:"Gist", d:3, hint:"Showing off, forming", ex:"Stop the ___ and greet person", alt:[]},

  /* ---- Pidgin ---- */
  {w:"ABEG",    cat:"Pidgin", d:1, hint:"Please, or 'come on now'", ex:"___ shift small", alt:[]},
  {w:"SABI",    cat:"Pidgin", d:1, hint:"To know, or to know how", ex:"You ___ drive this kind car?", alt:[]},
  {w:"BIKO",    cat:"Pidgin", d:1, hint:"Please (Igbo, used everywhere)", ex:"___ help me hold this bag", alt:[]},
  {w:"DASH",    cat:"Pidgin", d:1, hint:"A gift or tip, or to give freely", ex:"Him ___ me extra plantain", alt:[]},
  {w:"WETIN",   cat:"Pidgin", d:2, hint:"What, or what is it", ex:"___ happen for road today?", alt:[]},
  {w:"COMOT",   cat:"Pidgin", d:2, hint:"Get out, or remove", ex:"___ for road before car jam you", alt:[]},
  {w:"WAYO",    cat:"Pidgin", d:2, hint:"Trickery, a con", ex:"That man na ___ person, careful", alt:[]},
  {w:"GBAM",    cat:"Pidgin", d:2, hint:"Exactly, spot on", ex:"Your answer correct, ___!", alt:[]},

  /* ---- Streets (transport & places) ---- */
  {w:"KEKE",     cat:"Streets", d:1, hint:"Three-wheeled tricycle taxi", ex:"Take ___ from junction to house", alt:["KEKENAPEP"]},
  {w:"LAGOS",    cat:"Streets", d:1, hint:"Centre of Excellence, never sleeps", ex:"___ go humble you or make you", alt:[]},
  {w:"ABUJA",    cat:"Streets", d:1, hint:"Planned capital, wide roads", ex:"Him move to ___ for the government work", alt:[]},
  {w:"DANFO",    cat:"Streets", d:2, hint:"Yellow bus, no shock absorbers", ex:"Enter ___ for Oshodi go CMS", alt:[]},
  {w:"OKADA",    cat:"Streets", d:2, hint:"Motorbike taxi, one prayer", ex:"___ fit pass this traffic quick", alt:[]},
  {w:"AGBERO",   cat:"Streets", d:2, hint:"Motor-park tout collecting levies", ex:"___ dey disturb driver for park", alt:[]},
  {w:"MOLUE",    cat:"Streets", d:3, hint:"The old rickety mass-transit bus", ex:"___ don almost finish for Lagos now", alt:[]},
  {w:"CONDUCTOR",cat:"Streets", d:3, hint:"The one shouting the route and collecting fare", ex:"Give ___ the correct change", alt:[]},

  /* ---- Owambe (party & fashion) ---- */
  {w:"GELE",    cat:"Owambe", d:1, hint:"Head-tie folded like architecture", ex:"Her ___ tall pass everybody own", alt:[]},
  {w:"SPRAY",   cat:"Owambe", d:1, hint:"Sticking cash on a dancing celebrant", ex:"Dem ___ the couple plenty money", alt:[]},
  {w:"ANKARA",  cat:"Owambe", d:2, hint:"Bright wax-print fabric", ex:"She sew new ___ gown for the party", alt:[]},
  {w:"AGBADA",  cat:"Owambe", d:2, hint:"Flowing three-piece robe for the men", ex:"Uncle wear white ___ come the wedding", alt:[]},
  {w:"ALAGA",   cat:"Owambe", d:2, hint:"The MC-hostess running the engagement", ex:"___ collect the list before the ceremony start", alt:[]},
  {w:"OWAMBE",  cat:"Owambe", d:3, hint:"Big Saturday party, aso ebi compulsory", ex:"We get three ___ this weekend", alt:[]},
  {w:"ASOEBI",  cat:"Owambe", d:3, hint:"Matching fabric the guests all wear", ex:"The ___ this year cost like gold", alt:[]},
  {w:"ASOOKE",  cat:"Owambe", d:3, hint:"Hand-woven Yoruba ceremonial cloth", ex:"The bride ___ na family heirloom", alt:[]},

  /* ---- Naija (money, life, seasons) ---- */
  {w:"NAIRA",    cat:"Naija", d:1, hint:"The currency, always under pressure", ex:"___ don fall against dollar again", alt:[]},
  {w:"KOBO",     cat:"Naija", d:1, hint:"The coin nobody uses anymore", ex:"E no get even one ___ for hand", alt:[]},
  {w:"NEPA",     cat:"Naija", d:1, hint:"'They have taken the light'", ex:"___ don carry light since morning", alt:["PHCN"]},
  {w:"BUKA",     cat:"Naija", d:1, hint:"Cheap local eatery", ex:"Lunch na that ___ behind office", alt:["BUKATERIA"]},
  {w:"OPAY",     cat:"Naija", d:2, hint:"Fintech app for transfers and airtime", ex:"Send the money go my ___ account", alt:[]},
  {w:"JAND",     cat:"Naija", d:2, hint:"The UK, or abroad in general", ex:"Him people dey ___ since 2010", alt:[]},
  {w:"TOKUNBO",  cat:"Naija", d:3, hint:"Foreign-used, especially cars", ex:"Him buy ___ Camry from the wharf", alt:[]},
  {w:"HARMATTAN",cat:"Naija", d:3, hint:"The dry dusty season, cracked lips", ex:"___ don come, rub cream well well", alt:["HAMATTAN"]},

  /* ---- Market ---- */
  {w:"OKRIKA",   cat:"Market", d:2, hint:"Imported second-hand clothing", ex:"This ___ jean strong pass new one", alt:[]},
  {w:"DERICA",   cat:"Market", d:2, hint:"The tin cup used to measure rice and beans", ex:"Give me three ___ of beans", alt:[]},
  {w:"BALOGUN",  cat:"Market", d:2, hint:"Lagos Island market for fabric", ex:"I buy the lace for ___ market", alt:[]},
  {w:"OYINGBO",  cat:"Market", d:3, hint:"Mainland market, sells everything", ex:"___ price better pass supermarket", alt:[]},
  {w:"ONITSHA",  cat:"Market", d:3, hint:"South-east city, one of Africa's biggest markets", ex:"Spare parts? Na ___ dem dey get am", alt:[]},

  /* ---- Sound (music styles) ---- */
  {w:"JUJU",       cat:"Sound", d:1, hint:"Guitar-and-talking-drum style of King Sunny Ade", ex:"Elders still love ___ music for party", alt:[]},
  {w:"FUJI",       cat:"Sound", d:1, hint:"Percussion-heavy style, Barrister and Kwam 1", ex:"___ dey wake the whole street on Sunday", alt:[]},
  {w:"APALA",      cat:"Sound", d:2, hint:"Older Yoruba drum-and-vocal style", ex:"___ come before fuji", alt:[]},
  {w:"HIGHLIFE",   cat:"Sound", d:3, hint:"Horns and guitar dance music, big in the east", ex:"Osadebe ___ still dey sweet", alt:[]},
  {w:"AFROBEATS",  cat:"Sound", d:3, hint:"The modern Naija pop sound taking over the world", ex:"___ dey every chart now", alt:["AFROBEAT"]}
];

/* ------------------------------------------------------------
   GROWING THE BANK WITHOUT TOUCHING CODE
   ------------------------------------------------------------
   This file is the offline fallback. To load words from a
   Google Sheet instead:

   1. Sheet with a "Words" tab, columns:
        w | cat | d | hint | ex | alt | status
      ("alt" = other accepted spellings, "|"-separated;
       only rows with status = live are served.)
   2. Add an Apps Script doGet() that returns those rows as
      JSON, then Deploy > Web app (Access: Anyone).
   3. Paste the /exec URL into  SHEET_URL  near the top of the
      <script> in play.html. That's it — play.html fetches the
      Sheet on load and falls back to this file if it can't.

   A second "Submissions" tab can receive the site's
   "Suggest a word" form; approve rows there and paste the
   good ones into "Words" with status = live.
   ------------------------------------------------------------ */
