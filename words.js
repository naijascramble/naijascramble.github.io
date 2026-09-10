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
  {w:"AFROBEATS",  cat:"Sound", d:3, hint:"The modern Naija pop sound taking over the world", ex:"___ dey every chart now", alt:["AFROBEAT"]},

  /* ===== batch 2 ===== */

  /* ---- Easy (d:1) ---- */
  {w:"DODO",   cat:"Chop",    d:1, hint:"Fried ripe plantain", ex:"Rice without ___ no complete", alt:[]},
  {w:"OKRO",   cat:"Chop",    d:1, hint:"The slimy 'draw' soup", ex:"___ soup with plenty seafood", alt:["OKRA"]},
  {w:"PURE",   cat:"Streets", d:1, hint:"Sachet water sold in traffic", ex:"Buy ___ water, my throat dry", alt:[]},
  {w:"JARE",   cat:"Pidgin",  d:1, hint:"Softens a statement, 'please now'", ex:"Leave me ___", alt:[]},
  {w:"KOLO",   cat:"Gist",    d:1, hint:"Crazy, gone in the head", ex:"This heat go make person ___", alt:[]},
  {w:"GENG",   cat:"Gist",    d:1, hint:"'Agreed', or your crew", ex:"We dey together, ___!", alt:[]},
  {w:"WAKA",   cat:"Gist",    d:1, hint:"To walk, or 'get lost'", ex:"___! I no send you", alt:[]},
  {w:"GBESE",  cat:"Gist",    d:1, hint:"Debt, money wahala", ex:"Him don enter ___ with that deal", alt:[]},
  {w:"TUALE",  cat:"Owambe",  d:1, hint:"A shout of hail and respect", ex:"___! The big man don enter", alt:[]},

  /* ---- Difficult (d:2) ---- */
  {w:"OYINBO",   cat:"Gist",    d:2, hint:"A white person or foreigner", ex:"The ___ dey learn how to dance", alt:["OYIBO"]},
  {w:"ALAYE",    cat:"Gist",    d:2, hint:"Street-smart guy, a boss", ex:"Big ___, how far now?", alt:[]},
  {w:"MAGA",     cat:"Gist",    d:2, hint:"A scam victim", ex:"The ___ don pay the money", alt:["MUGU"]},
  {w:"YAHOO",    cat:"Gist",    d:2, hint:"Internet fraud", ex:"Him dey do ___ since school", alt:[]},
  {w:"SHAYO",    cat:"Owambe",  d:2, hint:"Heavy drinking", ex:"After the wedding na pure ___", alt:[]},
  {w:"KABASH",   cat:"Naija",   d:2, hint:"To pray hard, in tongues", ex:"Choir dey ___ for the corner", alt:[]},
  {w:"BRODA",    cat:"Pidgin",  d:2, hint:"Brother, a term of address", ex:"___, abeg help me hold this", alt:[]},
  {w:"KOBOKO",   cat:"Streets", d:2, hint:"The horsewhip", ex:"Soldier flog am with ___", alt:[]},
  {w:"CHINCHIN", cat:"Chop",    d:2, hint:"Crunchy fried pastry cubes", ex:"Pack ___ for the party bag", alt:["CHINCHIN"]},
  {w:"KILISHI",  cat:"Chop",    d:2, hint:"Dried spiced meat, northern jerky", ex:"Buy ___ from the mallam", alt:[]},
  {w:"AGIDI",    cat:"Chop",    d:2, hint:"Cornmeal jelly for stew", ex:"___ and moin moin dey go together", alt:["EKO"]},
  {w:"EWEDU",    cat:"Chop",    d:2, hint:"The jute-leaf 'draw' soup", ex:"Amala and ___ na Ibadan special", alt:[]},
  {w:"KUNU",     cat:"Chop",    d:2, hint:"Millet or tigernut drink", ex:"Cold ___ for the afternoon heat", alt:["KUNUN"]},
  {w:"UGBA",     cat:"Chop",    d:2, hint:"Oil-bean slivers in the salad", ex:"Add plenty ___ for the abacha", alt:[]},

  /* ---- Hard (d:3) ---- */
  {w:"BOLEKAJA",   cat:"Streets", d:3, hint:"The old 'jump down and fight' wooden bus", ex:"___ don disappear from the roads", alt:[]},
  {w:"ORISIRISI",  cat:"Owambe",  d:3, hint:"Assorted, a spread of varieties", ex:"The buffet get ___", alt:[]},
  {w:"GBAGAUN",    cat:"Gist",    d:3, hint:"A grammar blunder", ex:"Him tweet full of ___", alt:[]},
  {w:"AGBALUMO",   cat:"Chop",    d:3, hint:"African star apple, sweet and sour", ex:"___ season don start", alt:["UDARA"]},
  {w:"OFADA",      cat:"Chop",    d:3, hint:"Local unpolished rice with green stew", ex:"___ rice and designer stew", alt:[]},
  {w:"AYAMASE",    cat:"Chop",    d:3, hint:"The fiery green-pepper stew", ex:"___ go clear your sinus", alt:[]},
  {w:"OGOGORO",    cat:"Naija",   d:3, hint:"Local gin, very strong", ex:"One shot of ___ go warm you", alt:["KAIKAI"]},
  {w:"PALMWINE",   cat:"Naija",   d:3, hint:"Fresh sap tapped from the palm", ex:"Cold ___ straight from the bush", alt:[]},
  {w:"ISIEWU",     cat:"Chop",    d:3, hint:"Goat-head pepper delicacy", ex:"Order ___ for the bar", alt:[]},
  {w:"OKPA",       cat:"Chop",    d:3, hint:"Steamed Bambara-nut pudding, Enugu staple", ex:"Morning ___ from the woman for junction", alt:[]},
  {w:"SUFFERHEAD", cat:"Gist",    d:3, hint:"Chronic, grinding hardship (Fela's word)", ex:"Him dey sing about ___", alt:[]},

  /* ===== batch 3 ===== */

  /* ---- Chop ---- */
  {w:"AMALA",      cat:"Chop", d:2, hint:"Dark-brown yam-flour swallow", ex:"", alt:[]},
  {w:"FUFU",       cat:"Chop", d:1, hint:"Cassava swallow, soft and stretchy", ex:"", alt:["FOOFOO"]},
  {w:"NSALA",      cat:"Chop", d:3, hint:"White pepper soup from the east", ex:"", alt:["OFENSALA"]},
  {w:"BANGA",      cat:"Chop", d:2, hint:"Palm-fruit soup, Delta style", ex:"", alt:[]},
  {w:"UZIZA",      cat:"Chop", d:3, hint:"Peppery leaf and seed for soups", ex:"", alt:[]},
  {w:"ASARO",      cat:"Chop", d:2, hint:"Yam pottage, everything in one pot", ex:"", alt:[]},
  {w:"GBEGIRI",    cat:"Chop", d:3, hint:"Smooth bean soup, pairs with ewedu", ex:"", alt:[]},
  {w:"EFORIRO",    cat:"Chop", d:3, hint:"Fried vegetable stew, Yoruba style", ex:"", alt:["EFO"]},
  {w:"DUNDUN",     cat:"Chop", d:2, hint:"Fried yam slices", ex:"", alt:[]},
  {w:"BOLI",       cat:"Chop", d:1, hint:"Roasted plantain from the roadside", ex:"", alt:[]},
  {w:"KULIKULI",   cat:"Chop", d:3, hint:"Hard groundnut snack twists", ex:"", alt:[]},
  {w:"KOKORO",     cat:"Chop", d:2, hint:"Crunchy fried corn-stick snack", ex:"", alt:[]},
  {w:"AKAMU",      cat:"Chop", d:2, hint:"Fermented corn pap", ex:"", alt:["OGI"]},
  {w:"BURUKUTU",   cat:"Chop", d:3, hint:"Millet beer from the north", ex:"", alt:[]},
  {w:"SHAWARMA",   cat:"Chop", d:2, hint:"Wrap from the street stand, a Lagos night staple", ex:"", alt:[]},
  {w:"CRAYFISH",   cat:"Chop", d:2, hint:"Ground dried shrimp, in nearly every soup", ex:"", alt:[]},
  {w:"CATFISH",    cat:"Chop", d:1, hint:"Point-and-kill for the pepper soup", ex:"", alt:[]},
  {w:"OKPOROKO",   cat:"Chop", d:3, hint:"Stockfish, prized in Igbo soups", ex:"", alt:["PANLA"]},
  {w:"DAWADAWA",   cat:"Chop", d:3, hint:"Fermented locust-bean seasoning", ex:"", alt:["IRU","OGIRI"]},
  {w:"ATARODO",    cat:"Chop", d:3, hint:"Scotch bonnet, the real heat", ex:"", alt:["RODO"]},
  {w:"PEPPERSOUP", cat:"Chop", d:3, hint:"Hot clear broth for cold nights", ex:"", alt:[]},
  {w:"GOATMEAT",   cat:"Chop", d:2, hint:"The default meat for pepper soup", ex:"", alt:[]},

  /* ---- Gist ---- */
  {w:"PARIWO",     cat:"Gist", d:2, hint:"Noise, a loud scene", ex:"", alt:[]},
  {w:"ODOGWU",     cat:"Gist", d:2, hint:"A big man, a heavyweight", ex:"", alt:[]},
  {w:"JAGAJAGA",   cat:"Gist", d:3, hint:"Scattered, in a mess", ex:"", alt:[]},
  {w:"KATAKATA",   cat:"Gist", d:2, hint:"Chaos, trouble everywhere", ex:"", alt:[]},
  {w:"YAWA",       cat:"Gist", d:1, hint:"Trouble; 'yawa don gas'", ex:"", alt:[]},
  {w:"GBEGE",      cat:"Gist", d:2, hint:"Heavy trouble", ex:"", alt:[]},
  {w:"OMOGE",      cat:"Gist", d:2, hint:"A young lady", ex:"", alt:[]},
  {w:"TOASTER",    cat:"Gist", d:2, hint:"A guy chasing a girl", ex:"", alt:[]},
  {w:"FORMING",    cat:"Gist", d:2, hint:"Pretending, acting up", ex:"", alt:[]},
  {w:"YEYE",       cat:"Gist", d:1, hint:"Useless, nonsense", ex:"", alt:[]},
  {w:"PADDY",      cat:"Gist", d:1, hint:"A close friend", ex:"", alt:["PADI"]},
  {w:"KOLOMENTAL", cat:"Gist", d:3, hint:"Completely mad, unhinged", ex:"", alt:[]},
  {w:"SCATTER",    cat:"Gist", d:2, hint:"To wreck it — or dance hard", ex:"", alt:[]},
  {w:"HAMMER",     cat:"Gist", d:2, hint:"To hit it big, make serious money", ex:"", alt:[]},

  /* ---- Pidgin ---- */
  {w:"NAWA",       cat:"Pidgin", d:1, hint:"Expression of wonder; 'nawa o'", ex:"", alt:[]},
  {w:"YANSH",      cat:"Pidgin", d:2, hint:"Backside", ex:"", alt:[]},
  {w:"BELLE",      cat:"Pidgin", d:2, hint:"Stomach — or a pregnancy", ex:"", alt:[]},
  {w:"FLOG",       cat:"Pidgin", d:1, hint:"To beat thoroughly", ex:"", alt:[]},
  {w:"TAYA",       cat:"Pidgin", d:1, hint:"To be tired, fed up", ex:"", alt:[]},
  {w:"WELLA",      cat:"Pidgin", d:1, hint:"Well done, nicely", ex:"", alt:[]},
  {w:"KAMPE",      cat:"Pidgin", d:2, hint:"Solid, standing strong", ex:"", alt:[]},

  /* ---- Streets & places ---- */
  {w:"MARWA",     cat:"Streets", d:2, hint:"Another name for the keke tricycle", ex:"", alt:[]},
  {w:"WHARF",     cat:"Streets", d:2, hint:"The port where tokunbo cars land", ex:"", alt:[]},
  {w:"APAPA",     cat:"Streets", d:2, hint:"Lagos port district, tanker country", ex:"", alt:[]},
  {w:"OSHODI",    cat:"Streets", d:2, hint:"Lagos transport hub, always moving", ex:"", alt:[]},
  {w:"YABA",      cat:"Streets", d:1, hint:"Lagos mainland district, tech and market", ex:"", alt:[]},
  {w:"IKEJA",     cat:"Streets", d:1, hint:"Lagos State capital, computer village", ex:"", alt:[]},
  {w:"SURULERE",  cat:"Streets", d:3, hint:"Mainland Lagos district; 'patience pays'", ex:"", alt:[]},
  {w:"MUSHIN",    cat:"Streets", d:2, hint:"Tough, dense Lagos mainland area", ex:"", alt:[]},
  {w:"AJEGUNLE",  cat:"Streets", d:3, hint:"The 'Jungle City' of Lagos", ex:"", alt:["AJCITY"]},
  {w:"LEKKI",     cat:"Streets", d:1, hint:"Lagos peninsula, toll gates and estates", ex:"", alt:[]},
  {w:"IKOYI",     cat:"Streets", d:1, hint:"Old-money Lagos island district", ex:"", alt:[]},
  {w:"MARINA",    cat:"Streets", d:2, hint:"Lagos Island's banking waterfront", ex:"", alt:[]},
  {w:"IBADAN",    cat:"Streets", d:2, hint:"Sprawling city of brown rooftops", ex:"", alt:[]},
  {w:"ENUGU",     cat:"Streets", d:1, hint:"Coal City in the south-east", ex:"", alt:[]},
  {w:"CALABAR",   cat:"Streets", d:2, hint:"South-south city known for its carnival", ex:"", alt:[]},
  {w:"KADUNA",    cat:"Streets", d:2, hint:"Northern city on the river", ex:"", alt:[]},
  {w:"HOLDUP",    cat:"Streets", d:2, hint:"A traffic jam", ex:"", alt:["GOSLOW"]},
  {w:"POTHOLE",   cat:"Streets", d:2, hint:"The crater that swallows a tyre", ex:"", alt:[]},
  {w:"MONKEYPOST", cat:"Streets", d:3, hint:"Street-football goalpost of stones or slippers", ex:"", alt:[]},

  /* ---- Owambe ---- */
  {w:"ISIAGU",    cat:"Owambe", d:3, hint:"Lion-head shirt for Igbo chiefs", ex:"", alt:[]},
  {w:"GEORGE",    cat:"Owambe", d:2, hint:"Rich wrapper fabric for big occasions", ex:"", alt:[]},
  {w:"ADIRE",     cat:"Owambe", d:2, hint:"Indigo tie-and-dye cloth", ex:"", alt:[]},
  {w:"SENATOR",   cat:"Owambe", d:2, hint:"Men's matching top-and-trouser style", ex:"", alt:[]},
  {w:"DASHIKI",   cat:"Owambe", d:2, hint:"Loose embroidered pullover top", ex:"", alt:[]},
  {w:"KAFTAN",    cat:"Owambe", d:2, hint:"Flowing robe, northern cut", ex:"", alt:[]},
  {w:"FILA",      cat:"Owambe", d:1, hint:"The Yoruba man's cap", ex:"", alt:[]},
  {w:"CORAL",     cat:"Owambe", d:2, hint:"Red beads for chiefs and brides", ex:"", alt:[]},
  {w:"COOLER",    cat:"Owambe", d:2, hint:"The rice container you carry home from a party", ex:"", alt:[]},
  {w:"TAKEAWAY",  cat:"Owambe", d:2, hint:"The pack of party food to go", ex:"", alt:[]},
  {w:"ALANTA",    cat:"Owambe", d:2, hint:"An energetic street dance", ex:"", alt:[]},
  {w:"SHOKI",     cat:"Owambe", d:1, hint:"Once-everywhere dance move", ex:"", alt:[]},
  {w:"ZANKU",     cat:"Owambe", d:1, hint:"Legwork dance; 'legwork'", ex:"", alt:["LEGWORK"]},

  /* ---- Naija (money, life) ---- */
  {w:"ALERT",     cat:"Naija", d:1, hint:"The bank SMS that says money entered", ex:"", alt:[]},
  {w:"ESUSU",     cat:"Naija", d:2, hint:"Rotating group savings", ex:"", alt:["AJO"]},
  {w:"SAPA",      cat:"Naija", d:1, hint:"Sudden, total brokenness", ex:"", alt:[]},
  {w:"HUSTLE",    cat:"Naija", d:2, hint:"The daily grind for money", ex:"", alt:[]},
  {w:"ALLAWEE",   cat:"Naija", d:3, hint:"The small monthly NYSC allowance", ex:"", alt:[]},
  {w:"SUBSIDY",   cat:"Naija", d:3, hint:"The fuel-price cushion that keeps ending", ex:"", alt:[]},
  {w:"SCARCITY",  cat:"Naija", d:3, hint:"When fuel or cash suddenly can't be found", ex:"", alt:[]},
  {w:"BLACKOUT",  cat:"Naija", d:2, hint:"No light, sometimes for days", ex:"", alt:[]},
  {w:"GENERATOR", cat:"Naija", d:3, hint:"The machine that hums when NEPA fails", ex:"", alt:["GEN"]},
  {w:"INVERTER",  cat:"Naija", d:3, hint:"Battery backup for the blackout", ex:"", alt:[]},
  {w:"LANDLORD",  cat:"Naija", d:2, hint:"Wants two years' rent upfront", ex:"", alt:[]},
  {w:"FACEME",    cat:"Naija", d:2, hint:"Face-me-I-face-you shared-corridor housing", ex:"", alt:[]},
  {w:"GATEMAN",   cat:"Naija", d:2, hint:"Opens the gate, knows everybody's business", ex:"", alt:["MAIGUARD"]},
  {w:"BOREHOLE",  cat:"Naija", d:2, hint:"Private water well when there's no tap", ex:"", alt:[]},

  /* ---- Market ---- */
  {w:"HAGGLE",    cat:"Market", d:2, hint:"To price it down hard", ex:"", alt:["PRICEDOWN"]},
  {w:"CUSTOMER",  cat:"Market", d:2, hint:"What the trader calls you to reel you in", ex:"", alt:[]},
  {w:"CONGO",     cat:"Market", d:2, hint:"A tin cup used to measure grain", ex:"", alt:[]},
  {w:"MUDU",      cat:"Market", d:2, hint:"A northern measuring bowl for grain", ex:"", alt:[]},
  {w:"NYLON",     cat:"Market", d:1, hint:"The thin plastic bag for your goods", ex:"", alt:[]},
  {w:"HAWKER",    cat:"Market", d:2, hint:"Sells through the car window in traffic", ex:"", alt:[]},
  {w:"UMBRELLA",  cat:"Market", d:2, hint:"Shades the roadside stall", ex:"", alt:[]},
  {w:"DISCOUNT",  cat:"Market", d:2, hint:"'Add something' — what you beg for", ex:"", alt:[]},
  {w:"TOPUP",     cat:"Market", d:1, hint:"To add airtime, or a bit more of anything", ex:"", alt:["RECHARGE"]},

  /* ---- Sound (music) ---- */
  {w:"AMAPIANO",  cat:"Sound", d:3, hint:"Log-drum sound from SA, now everywhere here", ex:"", alt:[]},
  {w:"ALUJO",     cat:"Sound", d:2, hint:"Yoruba celebration dance music", ex:"", alt:[]},
  {w:"SAKARA",    cat:"Sound", d:2, hint:"Old Yoruba style with a clay-frame drum", ex:"", alt:[]},
  {w:"GANGAN",    cat:"Sound", d:2, hint:"The talking drum that 'speaks'", ex:"", alt:[]},
  {w:"SEKERE",    cat:"Sound", d:2, hint:"Beaded gourd shaker", ex:"", alt:["SHEKERE"]},
  {w:"OGENE",     cat:"Sound", d:2, hint:"Igbo metal gong", ex:"", alt:[]},
  {w:"KAKAKI",    cat:"Sound", d:3, hint:"Long metal trumpet of northern royalty", ex:"", alt:[]},
  {w:"AGIDIGBO",  cat:"Sound", d:3, hint:"Big thumb-piano that carries the bass", ex:"", alt:[]},

  /* ---- Screen (Nollywood & lore) ---- */
  {w:"NOLLYWOOD", cat:"Screen", d:3, hint:"The film industry itself", ex:"", alt:[]},
  {w:"KANNYWOOD", cat:"Screen", d:3, hint:"Hausa-language cinema out of Kano", ex:"", alt:[]},
  {w:"SKIT",      cat:"Screen", d:1, hint:"Short comedy clip for the internet", ex:"", alt:[]},
  {w:"COMEDIAN",  cat:"Screen", d:2, hint:"Fills the space between owambe performances", ex:"", alt:[]},
  {w:"PREMIERE",  cat:"Screen", d:2, hint:"Red-carpet first screening", ex:"", alt:[]},
  {w:"SEQUEL",    cat:"Screen", d:2, hint:"Part 2 — Nollywood loves them", ex:"", alt:[]},
  {w:"BABALAWO",  cat:"Screen", d:3, hint:"The diviner every village film has", ex:"", alt:[]},
  {w:"DIBIA",     cat:"Screen", d:2, hint:"Igbo medicine man of the movies", ex:"", alt:[]},
  {w:"OGBANJE",   cat:"Screen", d:3, hint:"A child spirit that keeps dying and returning", ex:"", alt:["ABIKU"]},
  {w:"MAMIWATA",  cat:"Screen", d:3, hint:"The water spirit, half woman half fish", ex:"", alt:[]},
  {w:"RITUAL",    cat:"Screen", d:2, hint:"The money plot in half of Nollywood", ex:"", alt:[]},
  {w:"MASQUERADE", cat:"Screen", d:3, hint:"Ancestral spirit in costume; 'egungun'", ex:"", alt:["EGUNGUN"]},
  {w:"IGWE",      cat:"Screen", d:1, hint:"The Igbo king on his throne", ex:"", alt:[]},
  {w:"PALACE",    cat:"Screen", d:2, hint:"Where the Igwe hears the village matter", ex:"", alt:[]},

  /* ---- Faith (church & mosque) ---- */
  {w:"HALLELUJAH", cat:"Faith", d:3, hint:"The Sunday shout of praise", ex:"", alt:[]},
  {w:"CRUSADE",   cat:"Faith", d:2, hint:"Big open-ground gospel gathering", ex:"", alt:[]},
  {w:"VIGIL",     cat:"Faith", d:2, hint:"All-night prayer meeting", ex:"", alt:[]},
  {w:"ANOINTING", cat:"Faith", d:3, hint:"Oil, and the power that goes with it", ex:"", alt:[]},
  {w:"TITHE",     cat:"Faith", d:2, hint:"The tenth you bring on Sunday", ex:"", alt:[]},
  {w:"TESTIMONY", cat:"Faith", d:3, hint:"'This time last year...' at the mic", ex:"", alt:[]},
  {w:"MALLAM",    cat:"Faith", d:2, hint:"A learned man; also the corner kiosk owner", ex:"", alt:[]},
  {w:"RAMADAN",   cat:"Faith", d:2, hint:"The month of fasting", ex:"", alt:[]},
  {w:"SALLAH",    cat:"Faith", d:2, hint:"The festival with rams and new clothes", ex:"", alt:[]},
  {w:"TASBIH",    cat:"Faith", d:3, hint:"Prayer beads counted in the hand", ex:"", alt:[]},
  {w:"CHOIR",     cat:"Faith", d:1, hint:"Robes, harmonies, the front of the church", ex:"", alt:[]},
  {w:"SERMON",    cat:"Faith", d:2, hint:"The message from the pulpit", ex:"", alt:[]},

  /* ---- People (roles & family) ---- */
  {w:"AUNTY",     cat:"People", d:1, hint:"Any older woman you respect", ex:"", alt:[]},
  {w:"UNCLE",     cat:"People", d:1, hint:"Any older man you respect", ex:"", alt:[]},
  {w:"LANDLADY",  cat:"People", d:2, hint:"The one who owns the compound", ex:"", alt:[]},
  {w:"NEIGHBOUR", cat:"People", d:2, hint:"Shares your fence and your generator noise", ex:"", alt:[]},
  {w:"INLAW",     cat:"People", d:1, hint:"Family you married into", ex:"", alt:[]},
  {w:"COWIFE",    cat:"People", d:2, hint:"Your husband's other wife", ex:"", alt:[]},
  {w:"LASTBORN",  cat:"People", d:2, hint:"The spoiled one of the house", ex:"", alt:[]},
  {w:"UMUNNA",    cat:"People", d:3, hint:"The extended kindred, Igbo", ex:"", alt:[]},
  {w:"HOUSEBOY",  cat:"People", d:2, hint:"Live-in domestic help, male", ex:"", alt:[]},
  {w:"STEWARD",   cat:"People", d:2, hint:"Serves the food and drinks at the event", ex:"", alt:[]},
  {w:"APPRENTICE", cat:"People", d:3, hint:"Learning a trade under 'oga' for years", ex:"", alt:[]},
  {w:"WIDOW",     cat:"People", d:1, hint:"She wears black and endures the rites", ex:"", alt:[]},

  /* ---- School ---- */
  {w:"JAMB",      cat:"School", d:1, hint:"The exam board between you and university", ex:"", alt:[]},
  {w:"WAEC",      cat:"School", d:1, hint:"The senior secondary certificate exam", ex:"", alt:[]},
  {w:"NECO",      cat:"School", d:1, hint:"The other big secondary exam body", ex:"", alt:[]},
  {w:"POSTUTME",  cat:"School", d:3, hint:"The screening after JAMB", ex:"", alt:[]},
  {w:"CARRYOVER", cat:"School", d:3, hint:"A failed course you must repeat", ex:"", alt:[]},
  {w:"HANDOUT",   cat:"School", d:2, hint:"Lecture notes you're 'advised' to buy", ex:"", alt:[]},
  {w:"LECTURER",  cat:"School", d:3, hint:"Sets the exam, signs the result", ex:"", alt:[]},
  {w:"HOSTEL",    cat:"School", d:2, hint:"Bunk beds, buckets, and no light", ex:"", alt:[]},
  {w:"PREFECT",   cat:"School", d:2, hint:"Student with a whistle and a little power", ex:"", alt:[]},
  {w:"ASSEMBLY",  cat:"School", d:2, hint:"Morning line-up, anthem and pledge", ex:"", alt:[]},
  {w:"UNIFORM",   cat:"School", d:2, hint:"Same colour for the whole school", ex:"", alt:[]},
  {w:"CANE",      cat:"School", d:1, hint:"The teacher's tool of correction", ex:"", alt:[]},

  /* ---- Animal ---- */
  {w:"TORTOISE",  cat:"Animal", d:2, hint:"The trickster of every folktale", ex:"", alt:["MBE","IJAPA"]},
  {w:"AGAMA",     cat:"Animal", d:2, hint:"Orange-headed wall lizard", ex:"", alt:[]},
  {w:"PYTHON",    cat:"Animal", d:2, hint:"The big snake of the shrine scenes", ex:"", alt:[]},
  {w:"BUSHMEAT",  cat:"Animal", d:2, hint:"Grasscutter and friends, from the bush", ex:"", alt:[]},
  {w:"PERIWINKLE", cat:"Animal", d:3, hint:"Little spiral shellfish in the soup", ex:"", alt:[]},
  {w:"CAMEL",     cat:"Animal", d:1, hint:"Beast of the far north", ex:"", alt:[]},
  {w:"DONKEY",    cat:"Animal", d:2, hint:"Carries the load up north", ex:"", alt:[]},
  {w:"VULTURE",   cat:"Animal", d:2, hint:"Circles the abattoir", ex:"", alt:[]},
  {w:"COCKROACH", cat:"Animal", d:3, hint:"Runs when the light comes on", ex:"", alt:[]},
  {w:"MOSQUITO",  cat:"Animal", d:2, hint:"The reason for the net and the coil", ex:"", alt:[]},
  {w:"TERMITE",   cat:"Animal", d:2, hint:"'Aku' — swarms after the first rain", ex:"", alt:["AKU"]},
  {w:"CRICKET",   cat:"Animal", d:2, hint:"Chirps all night in the grass", ex:"", alt:[]},
  {w:"CROCODILE",  cat:"Animal", d:3, hint:"Lurks still in the muddy river", ex:"", alt:[]},
  {w:"ANTELOPE",  cat:"Animal", d:2, hint:"'Nchi' — the swift one of the forest", ex:"", alt:[]},

  /* ---- Home ---- */
  {w:"BUCKET",    cat:"Home", d:1, hint:"How you bathe when there's no running water", ex:"", alt:[]},
  {w:"BROOM",     cat:"Home", d:1, hint:"Bundle of palm ribs for sweeping", ex:"", alt:[]},
  {w:"PACKER",    cat:"Home", d:2, hint:"The dustpan for the swept dirt", ex:"", alt:[]},
  {w:"KEROSENE",  cat:"Home", d:3, hint:"Fuel for the stove and the lantern", ex:"", alt:[]},
  {w:"LANTERN",   cat:"Home", d:2, hint:"Light for reading during blackout", ex:"", alt:[]},
  {w:"TORCHLIGHT", cat:"Home", d:3, hint:"Handheld light for the dark corridor", ex:"", alt:[]},
  {w:"AIRTIME",   cat:"Home", d:2, hint:"Credit for calls and data", ex:"", alt:[]},
  {w:"STABILIZER", cat:"Home", d:3, hint:"Guards the fridge from voltage swings", ex:"", alt:[]},
  {w:"BLENDER",   cat:"Home", d:2, hint:"Grinds pepper and tomatoes at 6am", ex:"", alt:[]},
  {w:"MORTAR",    cat:"Home", d:2, hint:"Wooden bowl you pound the fufu in", ex:"", alt:[]},
  {w:"PESTLE",    cat:"Home", d:2, hint:"The heavy club that pounds", ex:"", alt:[]},
  {w:"FIREWOOD",  cat:"Home", d:2, hint:"Cooks the big party pots", ex:"", alt:[]},
  {w:"COALPOT",   cat:"Home", d:2, hint:"Charcoal stove for slow cooking", ex:"", alt:[]},
  {w:"JERRYCAN",  cat:"Home", d:2, hint:"Yellow container for fuel or water", ex:"", alt:["GEEPEE"]},
  {w:"WARDROBE",  cat:"Home", d:2, hint:"Where the aso ebi is kept", ex:"", alt:[]},
  {w:"MATTRESS",  cat:"Home", d:2, hint:"'Mouka foam' on the floor for guests", ex:"", alt:["FOAM"]},

  /* ===== batch 4 ===== */

  /* ---- Chop ---- */
  {w:"OGBONO",    cat:"Chop", d:2, hint:"Wild-mango seed for the drawing soup", ex:"", alt:["APON"]},
  {w:"AFANG",     cat:"Chop", d:3, hint:"Efik vegetable soup, rich and green", ex:"", alt:[]},
  {w:"UGWU",      cat:"Chop", d:1, hint:"Pumpkin leaf, in the soup and the juice", ex:"", alt:[]},
  {w:"OKAZI",     cat:"Chop", d:2, hint:"Tough forest leaf, shredded thin", ex:"", alt:["UKAZI"]},
  {w:"GROUNDNUT", cat:"Chop", d:2, hint:"Roasted and sold in bottles by the road", ex:"", alt:["EPA"]},
  {w:"TIGERNUT",  cat:"Chop", d:2, hint:"Chewy tuber, blended into a milk drink", ex:"", alt:["OFIO"]},
  {w:"PLANTAIN",  cat:"Chop", d:2, hint:"Fry it ripe for dodo, roast it green for boli", ex:"", alt:[]},
  {w:"COCOYAM",   cat:"Chop", d:2, hint:"Thickens the soup, or eaten boiled", ex:"", alt:[]},
  {w:"SOURSOP",   cat:"Chop", d:2, hint:"Spiky green fruit, soft white inside", ex:"", alt:[]},
  {w:"CHAPMAN",   cat:"Chop", d:2, hint:"Red mocktail with cucumber and bitters", ex:"", alt:[]},

  /* ---- Gist ---- */
  {w:"TATAFO",    cat:"Gist", d:2, hint:"A gossip, a busybody", ex:"", alt:["OFOFO"]},
  {w:"OLOSHI",    cat:"Gist", d:2, hint:"An unlucky, jinxed person", ex:"", alt:[]},
  {w:"OJORO",     cat:"Gist", d:2, hint:"Cheating in a game", ex:"", alt:[]},
  {w:"SHINE",     cat:"Gist", d:1, hint:"To show off, be seen", ex:"", alt:[]},
  {w:"BALLING",   cat:"Gist", d:2, hint:"Living large, spending free", ex:"", alt:[]},
  {w:"AJEBOTA",   cat:"Gist", d:3, hint:"Soft, sheltered, city-raised", ex:"", alt:["AJEBUTTER"]},
  {w:"AJEPAKO",   cat:"Gist", d:3, hint:"Streetwise, rough around the edges", ex:"", alt:[]},
  {w:"LEVELS",    cat:"Gist", d:1, hint:"Status, how far you've come", ex:"", alt:[]},
  {w:"SETUP",     cat:"Gist", d:1, hint:"A staged trap to catch someone", ex:"", alt:[]},
  {w:"BLOW",      cat:"Gist", d:1, hint:"To suddenly become famous or rich", ex:"", alt:[]},

  /* ---- Pidgin ---- */
  {w:"GBADUN",    cat:"Pidgin", d:2, hint:"To enjoy, to vibe with", ex:"", alt:[]},
  {w:"YIMU",      cat:"Pidgin", d:1, hint:"The mouth-twist of disdain", ex:"", alt:[]},
  {w:"SHIKENA",   cat:"Pidgin", d:2, hint:"That's all, case closed", ex:"", alt:[]},
  {w:"OGINI",     cat:"Pidgin", d:2, hint:"Igbo for 'what is it?'", ex:"", alt:[]},
  {w:"DRAG",      cat:"Pidgin", d:1, hint:"To pull, or to argue over", ex:"", alt:[]},

  /* ---- Streets & places ---- */
  {w:"ABEOKUTA",  cat:"Streets", d:3, hint:"Ogun State capital, city under the rock", ex:"", alt:[]},
  {w:"AKURE",     cat:"Streets", d:2, hint:"Ondo State capital", ex:"", alt:[]},
  {w:"OSOGBO",    cat:"Streets", d:2, hint:"Osun State capital, the sacred grove", ex:"", alt:[]},
  {w:"ILORIN",    cat:"Streets", d:2, hint:"Kwara State capital, the gateway", ex:"", alt:[]},
  {w:"LOKOJA",    cat:"Streets", d:2, hint:"Where the Niger and Benue meet", ex:"", alt:[]},
  {w:"MAKURDI",   cat:"Streets", d:3, hint:"Benue State capital on the river", ex:"", alt:[]},
  {w:"KATSINA",   cat:"Streets", d:2, hint:"Ancient northern trading city", ex:"", alt:[]},
  {w:"NSUKKA",    cat:"Streets", d:2, hint:"University town in Enugu State", ex:"", alt:[]},
  {w:"UMUAHIA",   cat:"Streets", d:3, hint:"Abia State capital", ex:"", alt:[]},
  {w:"YENAGOA",   cat:"Streets", d:3, hint:"Bayelsa State capital, creeks all around", ex:"", alt:[]},
  {w:"BADAGRY",   cat:"Streets", d:2, hint:"Coastal town, slave-trade history", ex:"", alt:[]},
  {w:"IKORODU",   cat:"Streets", d:2, hint:"Fast-growing Lagos mainland town", ex:"", alt:[]},
  {w:"FESTAC",    cat:"Streets", d:2, hint:"Planned Lagos estate from the '77 festival", ex:"", alt:[]},
  {w:"AGEGE",     cat:"Streets", d:1, hint:"Lagos suburb famous for its bread", ex:"", alt:[]},

  /* ---- Owambe & style ---- */
  {w:"ABAYA",     cat:"Owambe", d:2, hint:"Long flowing robe for women", ex:"", alt:[]},
  {w:"HIJAB",     cat:"Owambe", d:1, hint:"Headscarf covering the hair and neck", ex:"", alt:[]},
  {w:"ILEKE",     cat:"Owambe", d:2, hint:"Waist beads worn under the wrapper", ex:"", alt:[]},
  {w:"OLEKU",     cat:"Owambe", d:2, hint:"Short-sleeved iro-and-buba style", ex:"", alt:[]},
  {w:"SHUKU",     cat:"Owambe", d:2, hint:"Cornrows gathered up into a crest", ex:"", alt:[]},
  {w:"PATEWO",    cat:"Owambe", d:2, hint:"Cornrows curved to meet in the middle", ex:"", alt:[]},
  {w:"DIDI",      cat:"Owambe", d:1, hint:"Cornrows woven flat to the scalp", ex:"", alt:[]},
  {w:"WEAVON",    cat:"Owambe", d:2, hint:"Hair extension sewn or glued in", ex:"", alt:["WEAVE"]},
  {w:"BANGLE",    cat:"Owambe", d:2, hint:"Stiff bracelet, stacked up the wrist", ex:"", alt:[]},

  /* ---- Naija (money, life, weather) ---- */
  {w:"EGUNJE",    cat:"Naija", d:2, hint:"A bribe, quietly given", ex:"", alt:["KOLA"]},
  {w:"KOLANUT",   cat:"Naija", d:2, hint:"Broken and shared to welcome a guest", ex:"", alt:[]},
  {w:"DRIZZLE",   cat:"Naija", d:2, hint:"Light rain that still stops the market", ex:"", alt:[]},
  {w:"DOWNPOUR",  cat:"Naija", d:2, hint:"Heavy rain that floods the road fast", ex:"", alt:[]},
  {w:"FLOODING",  cat:"Naija", d:2, hint:"When the gutter overflows into the house", ex:"", alt:[]},
  {w:"GUTTER",    cat:"Naija", d:2, hint:"The open roadside drain", ex:"", alt:[]},
  {w:"EROSION",   cat:"Naija", d:2, hint:"Gullies eating the land, big in the south-east", ex:"", alt:[]},
  {w:"BALLOT",    cat:"Naija", d:2, hint:"The paper you thumbprint on election day", ex:"", alt:[]},
  {w:"THUMBPRINT", cat:"Naija", d:3, hint:"How you mark your choice at the poll", ex:"", alt:[]},
  {w:"CHECKPOINT", cat:"Naija", d:3, hint:"Where the road is blocked and 'anything for the boys'", ex:"", alt:[]},

  /* ---- Faith ---- */
  {w:"PASTOR",    cat:"Faith", d:1, hint:"Leads the church, the 'daddy G.O.' of the branch", ex:"", alt:[]},
  {w:"PROPHET",   cat:"Faith", d:2, hint:"Sees visions, gives words", ex:"", alt:[]},
  {w:"BISHOP",    cat:"Faith", d:2, hint:"Senior clergy over many churches", ex:"", alt:[]},
  {w:"REVIVAL",   cat:"Faith", d:2, hint:"Nights of preaching to stir the church", ex:"", alt:[]},
  {w:"FELLOWSHIP", cat:"Faith", d:3, hint:"Mid-week gathering, or a campus group", ex:"", alt:[]},
  {w:"HARVEST",   cat:"Faith", d:2, hint:"The Sunday of pledges and bidding", ex:"", alt:[]},
  {w:"JUMMAH",    cat:"Faith", d:2, hint:"The Friday congregational prayer", ex:"", alt:["JUMAT"]},
  {w:"MINARET",   cat:"Faith", d:3, hint:"The tower the call to prayer comes from", ex:"", alt:[]},
  {w:"ZAKAT",     cat:"Faith", d:2, hint:"The alms every Muslim owes yearly", ex:"", alt:[]},

  /* ---- School ---- */
  {w:"TUTORIAL",  cat:"School", d:3, hint:"Extra evening coaching for the exam", ex:"", alt:["LESSON"]},
  {w:"PROMOTION", cat:"School", d:3, hint:"Moving up to the next class", ex:"", alt:[]},
  {w:"REGISTRAR", cat:"School", d:3, hint:"Keeps the records, signs the transcript", ex:"", alt:[]},
  {w:"PROVOST",   cat:"School", d:2, hint:"Head of a college of education", ex:"", alt:[]},
  {w:"FACULTY",   cat:"School", d:2, hint:"A cluster of related departments", ex:"", alt:[]},
  {w:"RUSTICATE", cat:"School", d:3, hint:"To be sent away from school for a term", ex:"", alt:[]},
  {w:"SIWES",     cat:"School", d:2, hint:"The industrial-training placement", ex:"", alt:["IT"]},
  {w:"MOCK",      cat:"School", d:1, hint:"The practice exam before the real one", ex:"", alt:[]},

  /* ---- Animal ---- */
  {w:"GECKO",     cat:"Animal", d:1, hint:"Pale wall lizard that hunts at night", ex:"", alt:[]},
  {w:"CHAMELEON", cat:"Animal", d:3, hint:"Changes colour, walks like it's thinking", ex:"", alt:[]},
  {w:"SCORPION",  cat:"Animal", d:2, hint:"Sting in the tail, hides in firewood", ex:"", alt:[]},
  {w:"MILLIPEDE", cat:"Animal", d:3, hint:"Curls into a coil when touched", ex:"", alt:[]},
  {w:"EARTHWORM", cat:"Animal", d:3, hint:"Comes up when the rain soaks the ground", ex:"", alt:[]},
  {w:"HORNBILL",  cat:"Animal", d:3, hint:"Big-beaked forest bird", ex:"", alt:[]},
  {w:"EGRET",     cat:"Animal", d:1, hint:"White bird that follows the cattle", ex:"", alt:[]},
  {w:"GUINEAFOWL", cat:"Animal", d:3, hint:"Speckled bird, wilder cousin of the chicken", ex:"", alt:[]},

  /* ---- Home ---- */
  {w:"SIEVE",     cat:"Home", d:1, hint:"Strains the pap and the bean skins", ex:"", alt:[]},
  {w:"COLANDER",  cat:"Home", d:3, hint:"Perforated bowl for draining rice", ex:"", alt:[]},
  {w:"FLASK",     cat:"Home", d:1, hint:"Keeps the hot water for the tea", ex:"", alt:[]},
  {w:"KETTLE",    cat:"Home", d:2, hint:"Boils water, also used for ablution", ex:"", alt:[]},
  {w:"LADLE",     cat:"Home", d:1, hint:"Deep spoon for serving soup", ex:"", alt:[]},
  {w:"GRATER",    cat:"Home", d:2, hint:"Shreds the cassava or the coconut", ex:"", alt:[]},
  {w:"DUSTBIN",   cat:"Home", d:2, hint:"Where the wrapper and peels go", ex:"", alt:[]},
  {w:"CUPBOARD",  cat:"Home", d:2, hint:"Holds the plates and the garri", ex:"", alt:[]},

  /* ---- Market ---- */
  {w:"BARGAIN",   cat:"Market", d:2, hint:"The back-and-forth over the price", ex:"", alt:[]},
  {w:"WHOLESALE", cat:"Market", d:3, hint:"Buying by the carton to resell", ex:"", alt:[]},
  {w:"RETAIL",    cat:"Market", d:2, hint:"Selling one or two at a time", ex:"", alt:[]},
  {w:"CARTON",    cat:"Market", d:2, hint:"The box things come packed in", ex:"", alt:[]},
  {w:"DOZEN",     cat:"Market", d:1, hint:"Twelve — or 'give me half'", ex:"", alt:[]},
  {w:"BALE",      cat:"Market", d:1, hint:"A pressed bundle of okrika clothes", ex:"", alt:[]},

  /* ---- Sound ---- */
  {w:"BATA",      cat:"Sound", d:1, hint:"Set of talking drums for Sango worship", ex:"", alt:[]},
  {w:"OMELE",     cat:"Sound", d:2, hint:"The small support drum in the ensemble", ex:"", alt:[]},
  {w:"AGOGO",     cat:"Sound", d:2, hint:"Hand-held metal bell struck for rhythm", ex:"", alt:[]},

  /* ---- Screen ---- */
  {w:"SUBTITLE",  cat:"Screen", d:2, hint:"Text at the bottom for the Yoruba film", ex:"", alt:[]},
  {w:"REMAKE",    cat:"Screen", d:2, hint:"Shooting an old classic again", ex:"", alt:[]},
  {w:"TRAILER",   cat:"Screen", d:2, hint:"The teaser that drops before the film", ex:"", alt:[]},
  {w:"BOXOFFICE", cat:"Screen", d:3, hint:"What the cinema run earns", ex:"", alt:[]},

  /* ---- People ---- */
  {w:"TENANT",    cat:"People", d:2, hint:"Pays the landlord and prays the rent holds", ex:"", alt:[]},
  {w:"CARETAKER", cat:"People", d:3, hint:"Manages the compound for an absent owner", ex:"", alt:[]},
  {w:"MECHANIC",  cat:"People", d:2, hint:"Works under the car at the roadside", ex:"", alt:["MEKANIK"]},
  {w:"VULCANIZER", cat:"People", d:3, hint:"Patches and pumps your flat tyre", ex:"", alt:[]},
  {w:"TAILOR",    cat:"People", d:1, hint:"Sews your aso ebi — 'come tomorrow'", ex:"", alt:[]},
  {w:"KINSMAN",   cat:"People", d:2, hint:"A man of your extended family or town", ex:"", alt:[]},

  /* ============================================================
     BATCH 5 — toward 600
     ============================================================ */

  /* ---- Chop ---- */
  {w:"SEMO",       cat:"Chop", d:1, hint:"Smooth swallow made from semolina", ex:"", alt:[]},
  {w:"WARA",       cat:"Chop", d:2, hint:"Soft Fulani cheese, fried golden", ex:"", alt:[]},
  {w:"NUNU",       cat:"Chop", d:2, hint:"Fulani fermented milk, sold in a calabash", ex:"", alt:[]},
  {w:"FURA",       cat:"Chop", d:2, hint:"Millet dough balls stirred into nunu", ex:"", alt:[]},
  {w:"MASA",       cat:"Chop", d:2, hint:"Spongy northern rice cakes", ex:"", alt:["MASSA"]},
  {w:"KOSAI",      cat:"Chop", d:2, hint:"The North's word for akara", ex:"", alt:[]},
  {w:"TUWO",       cat:"Chop", d:2, hint:"Northern swallow of rice or corn", ex:"", alt:[]},
  {w:"KUKA",       cat:"Chop", d:2, hint:"Baobab-leaf soup from up North", ex:"", alt:[]},
  {w:"ADALU",      cat:"Chop", d:2, hint:"Beans and corn cooked in one pot", ex:"", alt:[]},
  {w:"EKURU",      cat:"Chop", d:2, hint:"Plain white steamed bean pudding", ex:"", alt:[]},
  {w:"OJOJO",      cat:"Chop", d:2, hint:"Water-yam fritters, Yoruba", ex:"", alt:[]},
  {w:"IKOKORE",    cat:"Chop", d:3, hint:"Ijebu water-yam pottage", ex:"", alt:[]},
  {w:"STARCH",     cat:"Chop", d:2, hint:"Warri's orange swallow, eaten with banga", ex:"", alt:[]},
  {w:"PITO",       cat:"Chop", d:2, hint:"Fermented cereal drink of the Middle Belt", ex:"", alt:[]},
  {w:"UDARA",      cat:"Chop", d:2, hint:"Igbo name for the star apple", ex:"", alt:[]},
  {w:"OGIRI",      cat:"Chop", d:2, hint:"Pungent fermented condiment for soup", ex:"", alt:[]},
  {w:"ATAMA",      cat:"Chop", d:2, hint:"Aromatic leaf that flavours banga soup", ex:"", alt:[]},
  {w:"KAIKAI",     cat:"Chop", d:2, hint:"Raw local gin, cousin to ogogoro", ex:"", alt:[]},
  {w:"PALMOIL",    cat:"Chop", d:1, hint:"Red oil, the base of nearly every pot", ex:"", alt:[]},
  {w:"GALA",       cat:"Chop", d:1, hint:"Sausage roll bought through the car window", ex:"", alt:[]},
  {w:"KPEKERE",    cat:"Chop", d:2, hint:"Crunchy plantain chips in a nylon", ex:"", alt:[]},
  {w:"EDIKAIKONG", cat:"Chop", d:3, hint:"Rich Efik soup thick with vegetables", ex:"", alt:[]},

  /* ---- Streets & places ---- */
  {w:"KANO",       cat:"Streets", d:1, hint:"The North's biggest commercial city", ex:"", alt:[]},
  {w:"WARRI",      cat:"Streets", d:1, hint:"Delta city that no dey carry last", ex:"", alt:[]},
  {w:"OWERRI",     cat:"Streets", d:1, hint:"Imo capital, city of endless hotels", ex:"", alt:[]},
  {w:"SOKOTO",     cat:"Streets", d:2, hint:"Seat of the Caliphate, far northwest", ex:"", alt:[]},
  {w:"MAIDUGURI",  cat:"Streets", d:2, hint:"Borno capital in the northeast", ex:"", alt:[]},
  {w:"ZARIA",      cat:"Streets", d:2, hint:"Ancient walled city near Kaduna", ex:"", alt:[]},
  {w:"BAUCHI",     cat:"Streets", d:2, hint:"Northeast state and its capital", ex:"", alt:[]},
  {w:"MINNA",      cat:"Streets", d:2, hint:"Niger State capital on the rail line", ex:"", alt:[]},
  {w:"ASABA",      cat:"Streets", d:1, hint:"Delta capital across the Niger from Onitsha", ex:"", alt:[]},
  {w:"AWKA",       cat:"Streets", d:2, hint:"Anambra capital, town of blacksmiths", ex:"", alt:[]},
  {w:"NNEWI",      cat:"Streets", d:2, hint:"Anambra's auto-parts manufacturing town", ex:"", alt:[]},
  {w:"OJUELEGBA",  cat:"Streets", d:2, hint:"Lagos junction Fela made famous", ex:"", alt:[]},
  {w:"OBALENDE",   cat:"Streets", d:2, hint:"Lagos Island motor park and buka strip", ex:"", alt:[]},
  {w:"NYANYA",     cat:"Streets", d:2, hint:"Satellite town on the Abuja–Keffi road", ex:"", alt:[]},
  {w:"KUBWA",      cat:"Streets", d:2, hint:"Big Abuja suburb on the Kaduna road", ex:"", alt:[]},
  {w:"WUSE",       cat:"Streets", d:2, hint:"Abuja district with the big market", ex:"", alt:[]},
  {w:"MAITAMA",    cat:"Streets", d:2, hint:"Abuja's embassy and old-money district", ex:"", alt:[]},
  {w:"EXPRESSWAY", cat:"Streets", d:2, hint:"The wide road everybody just calls 'express'", ex:"", alt:[]},
  {w:"FLYOVER",    cat:"Streets", d:1, hint:"The bridge that lifts you over the go-slow", ex:"", alt:[]},
  {w:"ROUNDABOUT", cat:"Streets", d:2, hint:"Circle where six roads argue", ex:"", alt:[]},
  {w:"KABUKABU",   cat:"Streets", d:2, hint:"Unpainted, unofficial taxi", ex:"", alt:[]},
  {w:"PASSENGER",  cat:"Streets", d:1, hint:"You, squeezed four-to-a-row in the danfo", ex:"", alt:[]},

  /* ---- Gist (slang) ---- */
  {w:"CHOP",       cat:"Gist", d:1, hint:"To eat — or to enjoy money that isn't yours", ex:"", alt:[]},
  {w:"CHOKE",      cat:"Gist", d:1, hint:"So good it almost hurts — 'this jollof choke'", ex:"", alt:[]},
  {w:"CRASE",      cat:"Gist", d:2, hint:"Your head don crase — you've lost it", ex:"", alt:[]},
  {w:"WEREY",      cat:"Gist", d:2, hint:"Madman — said with fondness or fury", ex:"", alt:["WERE"]},
  {w:"MUGU",       cat:"Gist", d:2, hint:"A fool lined up to be scammed", ex:"", alt:[]},
  {w:"GASKIYA",    cat:"Gist", d:2, hint:"Hausa for 'truth' — 'gaskiya, I'm tired'", ex:"", alt:[]},
  {w:"GBEBORUN",   cat:"Gist", d:3, hint:"A gossip who runs to spread the news", ex:"", alt:[]},
  {w:"FAAJI",      cat:"Gist", d:2, hint:"Enjoyment, the whole vibe of a good time", ex:"", alt:[]},
  {w:"OLOFOFO",    cat:"Gist", d:2, hint:"The compound informant, always watching", ex:"", alt:[]},
  {w:"MADAM",      cat:"Gist", d:1, hint:"The woman in charge, of the house or the shop", ex:"", alt:[]},
  {w:"OGBENYE",    cat:"Gist", d:3, hint:"A wretch, someone with nothing", ex:"", alt:[]},
  {w:"OSHEY",      cat:"Gist", d:2, hint:"Thank-you shout, also mock praise", ex:"", alt:["OSHE"]},
  {w:"CHAIRMAN",   cat:"Gist", d:1, hint:"Respect title for any big man — 'chairman!'", ex:"", alt:[]},
  {w:"BIGMAN",     cat:"Gist", d:1, hint:"Somebody with money and the urge to show it", ex:"", alt:[]},
  {w:"PEPPER",     cat:"Gist", d:2, hint:"To spray cash and stunt — 'pepper dem'", ex:"", alt:[]},
  {w:"CARRYGO",    cat:"Gist", d:2, hint:"Keep going, forget it — 'no wahala, carry go'", ex:"", alt:[]},
  {w:"LONGTHROAT", cat:"Gist", d:2, hint:"Greed, wanting every good thing at once", ex:"", alt:[]},
  {w:"SIDDON",     cat:"Gist", d:2, hint:"Sit down — 'siddon look' means mind your business", ex:"", alt:[]},
  {w:"CONFAM",     cat:"Gist", d:2, hint:"Confirmed, for sure — stronger than 'sure'", ex:"", alt:[]},
  {w:"TURNUP",     cat:"Gist", d:1, hint:"When the party finally catches fire", ex:"", alt:[]},
  {w:"VAWULENCE",  cat:"Gist", d:2, hint:"Playful online trouble-making, mock violence", ex:"", alt:[]},
  {w:"PALLIATIVE", cat:"Gist", d:2, hint:"Government relief food — the word turned bitter", ex:"", alt:[]},

  /* ---- Pidgin ---- */
  {w:"HOWFAR",     cat:"Pidgin", d:1, hint:"The standard hello — 'how far?'", ex:"", alt:[]},
  {w:"WALAHI",     cat:"Pidgin", d:2, hint:"I swear — borrowed through Hausa", ex:"", alt:["WALLAHI"]},
  {w:"SEBI",       cat:"Pidgin", d:2, hint:"Isn't it so? — 'sebi I told you'", ex:"", alt:["SHEBI"]},
  {w:"GHENGHEN",   cat:"Pidgin", d:2, hint:"Sound-effect for drama — 'and then, ghen ghen'", ex:"", alt:[]},
  {w:"YAKATA",     cat:"Pidgin", d:2, hint:"Flat on the ground — 'he fall yakata'", ex:"", alt:[]},
  {w:"TORI",       cat:"Pidgin", d:1, hint:"Story, news — 'wetin be the tori?'", ex:"", alt:[]},
  {w:"EFIZZY",     cat:"Pidgin", d:2, hint:"Showing off, flamboyance", ex:"", alt:[]},
  {w:"PIKIN",      cat:"Pidgin", d:1, hint:"A child — 'that pikin sabi book'", ex:"", alt:[]},
  {w:"MAKA",       cat:"Pidgin", d:2, hint:"Because — Igbo 'maka gini?' means why", ex:"", alt:[]},
  {w:"GOSLOW",     cat:"Pidgin", d:1, hint:"A traffic jam — Lagos calls it this", ex:"", alt:[]},
  {w:"LASGIDI",    cat:"Pidgin", d:2, hint:"Fond nickname for Lagos", ex:"", alt:[]},
  {w:"NASO",       cat:"Pidgin", d:2, hint:"That's how it is — 'na so we see am'", ex:"", alt:[]},
  {w:"KPATAKPATA",  cat:"Pidgin", d:2, hint:"Completely, totally — 'e spoil kpatakpata'", ex:"", alt:[]},
  {w:"FIAM",       cat:"Pidgin", d:3, hint:"Instantly, in a flash — 'e disappear fiam'", ex:"", alt:[]},

  /* ---- Naija (money, life, weather) ---- */
  {w:"FUELQUEUE",  cat:"Naija", d:2, hint:"The line at the filling station that never moves", ex:"", alt:[]},
  {w:"PETROL",     cat:"Naija", d:1, hint:"What you queue for while the price keeps jumping", ex:"", alt:[]},
  {w:"DIESEL",     cat:"Naija", d:1, hint:"Runs the big gen when there's no light", ex:"", alt:[]},
  {w:"TRANSFER",   cat:"Naija", d:1, hint:"How you pay now — 'I've done the transfer'", ex:"", alt:[]},
  {w:"RECHARGE",   cat:"Naija", d:1, hint:"Buy credit for the phone", ex:"", alt:[]},
  {w:"INFLATION",  cat:"Naija", d:2, hint:"Why the same market money now buys half", ex:"", alt:[]},
  {w:"CAUTION",    cat:"Naija", d:2, hint:"Deposit the landlord keeps 'for repairs'", ex:"", alt:[]},
  {w:"TENEMENT",   cat:"Naija", d:3, hint:"Face-me-I-face-you rooms off one corridor", ex:"", alt:[]},
  {w:"QUARTERS",   cat:"Naija", d:2, hint:"Staff housing that comes with the job — 'BQ'", ex:"", alt:[]},
  {w:"PENSION",    cat:"Naija", d:2, hint:"The money retirees queue in the sun to verify", ex:"", alt:[]},
  {w:"GRATUITY",   cat:"Naija", d:3, hint:"Lump sum owed at retirement, often unpaid", ex:"", alt:[]},
  {w:"UPNEPA",     cat:"Naija", d:2, hint:"The shout when the power suddenly returns", ex:"", alt:[]},
  {w:"GENSET",     cat:"Naija", d:2, hint:"The generator, in one word", ex:"", alt:[]},
  {w:"PREPAID",    cat:"Naija", d:2, hint:"The meter you load before you can burn light", ex:"", alt:[]},
  {w:"THUNDER",    cat:"Naija", d:1, hint:"Wetin dem go take swear for you", ex:"", alt:[]},
  {w:"FLASHFLOOD", cat:"Naija", d:3, hint:"Water that fills the street in one downpour", ex:"", alt:[]},

  /* ---- Owambe & style ---- */
  {w:"BUBA",       cat:"Owambe", d:1, hint:"The loose blouse worn with an iro", ex:"", alt:[]},
  {w:"KEMBE",      cat:"Owambe", d:2, hint:"Wide three-quarter trousers, Yoruba style", ex:"", alt:[]},
  {w:"AKWETE",     cat:"Owambe", d:2, hint:"Handwoven cloth from Aba, bold stripes", ex:"", alt:[]},
  {w:"OKENE",      cat:"Owambe", d:2, hint:"Ebira handwoven cloth, rich and heavy", ex:"", alt:[]},
  {w:"ETIBO",      cat:"Owambe", d:2, hint:"Long shirt of the Niger Delta chiefs", ex:"", alt:[]},
  {w:"HOLLANDIS",  cat:"Owambe", d:3, hint:"Real Dutch wax, the wrapper you save for big days", ex:"", alt:[]},
  {w:"BROCADE",    cat:"Owambe", d:2, hint:"Shiny raised-pattern fabric for kaftans", ex:"", alt:[]},
  {w:"LACE",       cat:"Owambe", d:1, hint:"The party fabric — French, Swiss, dry or soft", ex:"", alt:[]},
  {w:"IPELE",      cat:"Owambe", d:2, hint:"Shoulder sash worn over the buba", ex:"", alt:[]},
  {w:"ABETIAJA",   cat:"Owambe", d:3, hint:"'Dog-ear' cap that folds at the sides", ex:"", alt:[]},
  {w:"GOBI",       cat:"Owambe", d:2, hint:"Tall straight-up cap worn with agbada", ex:"", alt:[]},
  {w:"HEADTIE",    cat:"Owambe", d:1, hint:"Cloth wrapped for church, plainer than gele", ex:"", alt:[]},
  {w:"AUTOGELE",   cat:"Owambe", d:2, hint:"The ready-made gele you just slip on", ex:"", alt:[]},
  {w:"DAMASK",     cat:"Owambe", d:2, hint:"Heavy self-patterned cloth, 'first lady' material", ex:"", alt:[]},

  /* ---- Home ---- */
  {w:"SLIPPERS",   cat:"Home", d:1, hint:"Rubber 'pafuka' for the house and beyond", ex:"", alt:[]},
  {w:"PILLOW",     cat:"Home", d:1, hint:"What you fight your sibling for at night", ex:"", alt:[]},
  {w:"BLANKET",    cat:"Home", d:1, hint:"Comes out only in Harmattan", ex:"", alt:[]},
  {w:"CURTAIN",    cat:"Home", d:1, hint:"Doubles as the door in many rooms", ex:"", alt:[]},
  {w:"HURRICANE",  cat:"Home", d:2, hint:"Old kerosene lamp with a glass chimney", ex:"", alt:[]},
  {w:"STOVE",      cat:"Home", d:1, hint:"Kerosene one you pump before it lights", ex:"", alt:[]},
  {w:"WARMER",     cat:"Home", d:1, hint:"Where the soup waits between meals", ex:"", alt:[]},
  {w:"WRAPPER",    cat:"Home", d:1, hint:"Blanket, towel and baby-carrier in one cloth", ex:"", alt:[]},
  {w:"BURGLARY",   cat:"Home", d:2, hint:"The welded bars over every window — 'burglary proof'", ex:"", alt:[]},
  {w:"PARLOUR",    cat:"Home", d:1, hint:"The sitting room kept nice for visitors", ex:"", alt:[]},
  {w:"VERANDAH",   cat:"Home", d:1, hint:"The front porch where evenings are spent", ex:"", alt:["VERANDA"]},
  {w:"SOAKAWAY",   cat:"Home", d:2, hint:"The pit that takes the house's waste water", ex:"", alt:[]},
  {w:"STANDPIPE",  cat:"Home", d:2, hint:"Public tap the whole street queues at", ex:"", alt:[]},
  {w:"RAFFIA",     cat:"Home", d:2, hint:"Palm-fibre for brooms and mats", ex:"", alt:[]},

  /* ---- Market ---- */
  {w:"BENDDOWN",   cat:"Market", d:2, hint:"Second-hand clothes spread on the ground", ex:"", alt:[]},
  {w:"LASTPRICE",  cat:"Market", d:2, hint:"'How much last?' — the real starting point", ex:"", alt:[]},
  {w:"JARA",       cat:"Market", d:1, hint:"The little extra the seller tops your measure with", ex:"", alt:[]},
  {w:"MEASURE",    cat:"Market", d:1, hint:"The cup or tin the grains are sold by", ex:"", alt:[]},
  {w:"TRADER",     cat:"Market", d:1, hint:"The woman who owns the stall and the last word", ex:"", alt:[]},
  {w:"IYALOJA",    cat:"Market", d:2, hint:"The market's mother, head of the women traders", ex:"", alt:[]},
  {w:"BABALOJA",   cat:"Market", d:3, hint:"The market's chief, counterpart to iyaloja", ex:"", alt:[]},
  {w:"LOADER",     cat:"Market", d:1, hint:"Fills the bus at the park and shouts the fare", ex:"", alt:[]},
  {w:"SUPPLIER",   cat:"Market", d:2, hint:"The one 'wey dey supply', a rung above retail", ex:"", alt:[]},
  {w:"CREDIT",     cat:"Market", d:1, hint:"'Write am for book' — pay after payday", ex:"", alt:[]},
  {w:"STOCKFISH",  cat:"Market", d:2, hint:"Dried cod traded by the carton", ex:"", alt:[]},
  {w:"PROVISIONS", cat:"Market", d:1, hint:"Milk, sugar, tea — the kiosk shelf staples", ex:"", alt:[]},

  /* ---- Animal ---- */
  {w:"HYENA",      cat:"Animal", d:1, hint:"Laughs in the northern bush at night", ex:"", alt:[]},
  {w:"WARTHOG",    cat:"Animal", d:2, hint:"Bush pig with tusks, tail up when it runs", ex:"", alt:[]},
  {w:"BABOON",     cat:"Animal", d:1, hint:"Rock-climbing monkey, big and bold", ex:"", alt:[]},
  {w:"LEOPARD",    cat:"Animal", d:2, hint:"The bush cat on Nigeria's coat of arms", ex:"", alt:[]},
  {w:"HIPPO",      cat:"Animal", d:1, hint:"River horse of the Niger and Benue", ex:"", alt:[]},
  {w:"MANATEE",    cat:"Animal", d:2, hint:"Gentle 'sea cow' of the delta creeks", ex:"", alt:[]},
  {w:"PANGOLIN",   cat:"Animal", d:3, hint:"Scaly anteater that rolls into a ball", ex:"", alt:[]},
  {w:"MONGOOSE",   cat:"Animal", d:2, hint:"Quick and low, will fight a snake", ex:"", alt:[]},
  {w:"LOCUST",     cat:"Animal", d:1, hint:"Comes in a cloud and finishes the farm", ex:"", alt:[]},
  {w:"WEAVERBIRD", cat:"Animal", d:2, hint:"Yellow bird that knots hanging nests in the palm", ex:"", alt:[]},
  {w:"FRUITBAT",   cat:"Animal", d:2, hint:"Hangs in the iroko tree, screeches at dusk", ex:"", alt:[]},
  {w:"DUIKER",     cat:"Animal", d:2, hint:"Small forest antelope, common bushmeat", ex:"", alt:[]},
  {w:"BUSHFOWL",   cat:"Animal", d:2, hint:"Wild francolin, flushed from the grass", ex:"", alt:[]},
  {w:"LIZARD",     cat:"Animal", d:1, hint:"Red-headed agama doing press-ups on the wall", ex:"", alt:[]},
  {w:"VIPER",      cat:"Animal", d:2, hint:"Fat, slow, and why you carry a torch at night", ex:"", alt:[]},
  {w:"TSETSE",     cat:"Animal", d:2, hint:"The fly that carries sleeping sickness", ex:"", alt:[]},

  /* ---- Faith ---- */
  {w:"ALTAR",      cat:"Faith", d:1, hint:"Where you go forward for prayer", ex:"", alt:[]},
  {w:"OFFERING",   cat:"Faith", d:1, hint:"The second collection, after the tithe", ex:"", alt:[]},
  {w:"WATCHNIGHT", cat:"Faith", d:2, hint:"The 31st December service into the new year", ex:"", alt:[]},
  {w:"DEACON",     cat:"Faith", d:2, hint:"Ordained helper, a step below the pastor", ex:"", alt:[]},
  {w:"APOSTLE",    cat:"Faith", d:2, hint:"Title many Nigerian church founders take", ex:"", alt:[]},
  {w:"IMAM",       cat:"Faith", d:1, hint:"Leads the prayer and the Friday sermon", ex:"", alt:[]},
  {w:"MUEZZIN",    cat:"Faith", d:2, hint:"Calls the faithful five times a day", ex:"", alt:[]},
  {w:"SUHUR",      cat:"Faith", d:2, hint:"The pre-dawn meal before the fast", ex:"", alt:["SAHUR"]},
  {w:"IFTAR",      cat:"Faith", d:2, hint:"The meal that breaks the Ramadan fast", ex:"", alt:[]},
  {w:"ALMAJIRI",   cat:"Faith", d:3, hint:"A boy sent far from home to study the Qur'an", ex:"", alt:[]},
  {w:"HALAL",      cat:"Faith", d:1, hint:"Permitted, especially the meat", ex:"", alt:[]},
  {w:"HARAM",      cat:"Faith", d:1, hint:"Forbidden — 'that thing na haram'", ex:"", alt:[]},

  /* ---- School ---- */
  {w:"JAMBITE",    cat:"School", d:2, hint:"A fresh undergraduate, still finding classes", ex:"", alt:[]},
  {w:"MATRIC",     cat:"School", d:2, hint:"The gown-and-oath ceremony for new students", ex:"", alt:[]},
  {w:"ACADA",      cat:"School", d:2, hint:"Slang for a bookish, serious student", ex:"", alt:[]},
  {w:"BURSARY",    cat:"School", d:2, hint:"The office that pays, and the small grant itself", ex:"", alt:[]},
  {w:"DEPARTMENT", cat:"School", d:1, hint:"Your course's home — 'which department?'", ex:"", alt:[]},
  {w:"SANDWICH",   cat:"School", d:2, hint:"Part-time degree run in the long vacation", ex:"", alt:[]},
  {w:"CORPER",     cat:"School", d:1, hint:"A youth-service member in khaki for a year", ex:"", alt:["KOPA"]},
  {w:"KHAKI",      cat:"School", d:1, hint:"The NYSC uniform — 'off your khaki'", ex:"", alt:[]},
  {w:"REDEMPTION", cat:"School", d:2, hint:"The final NYSC clearance date", ex:"", alt:[]},
  {w:"EXPO",       cat:"School", d:2, hint:"Leaked answers passed round the exam hall", ex:"", alt:[]},
  {w:"CHALKBOARD", cat:"School", d:1, hint:"Green board, white chalk, dusty duster", ex:"", alt:[]},
  {w:"BOARDING",   cat:"School", d:1, hint:"School you sleep in — 'boarding house'", ex:"", alt:[]},

  /* ---- Screen (Nollywood) ---- */
  {w:"SCRIPT",     cat:"Screen", d:1, hint:"What the actor is supposed to have learned", ex:"", alt:[]},
  {w:"LOCATION",   cat:"Screen", d:1, hint:"Where filming happens — 'we're on location'", ex:"", alt:[]},
  {w:"TEASER",     cat:"Screen", d:1, hint:"The short clip that drops before the trailer", ex:"", alt:[]},
  {w:"CROSSOVER",  cat:"Screen", d:2, hint:"A film pairing Nollywood and Ghallywood stars", ex:"", alt:[]},
  {w:"MARKETER",   cat:"Screen", d:2, hint:"The Idumota man who funds and sells the film", ex:"", alt:[]},
  {w:"IDUMOTA",    cat:"Screen", d:3, hint:"Lagos market that was Nollywood's distribution hub", ex:"", alt:[]},
  {w:"VOICEOVER",  cat:"Screen", d:2, hint:"The narrator explaining what you can already see", ex:"", alt:[]},
  {w:"SOUNDTRACK", cat:"Screen", d:2, hint:"The song under every emotional scene", ex:"", alt:[]},
  {w:"CINEMA",     cat:"Screen", d:1, hint:"Where you watch it big, with popcorn prices", ex:"", alt:[]},
  {w:"CAMEO",      cat:"Screen", d:2, hint:"A star's quick one-scene appearance", ex:"", alt:[]},

  /* ---- People (roles & family) ---- */
  {w:"FIRSTBORN",  cat:"People", d:1, hint:"The one who carries the family's hopes", ex:"", alt:[]},
  {w:"NAMESAKE",   cat:"People", d:1, hint:"You carry their name — 'my namesake'", ex:"", alt:[]},
  {w:"SUITOR",     cat:"People", d:1, hint:"The man 'coming to see' the family", ex:"", alt:[]},
  {w:"GRANNY",     cat:"People", d:1, hint:"'Mama', the elder everybody defers to", ex:"", alt:[]},
  {w:"GUARDIAN",   cat:"People", d:1, hint:"The relative a child is 'kept with' in the city", ex:"", alt:[]},
  {w:"HOUSEGIRL",  cat:"People", d:1, hint:"The live-in help, counterpart to houseboy", ex:"", alt:[]},
  {w:"ARTISAN",    cat:"People", d:1, hint:"Any hands-on tradesman, carpenter to mason", ex:"", alt:[]},
  {w:"WELDER",     cat:"People", d:1, hint:"Sparks flying at the roadside workshop", ex:"", alt:[]},
  {w:"CARPENTER",  cat:"People", d:1, hint:"Makes the wardrobe and the coffin", ex:"", alt:[]},
  {w:"BRICKLAYER", cat:"People", d:1, hint:"Lays the blocks — everyone says this, not mason", ex:"", alt:[]},
  {w:"OKADAMAN",   cat:"People", d:1, hint:"Rides you through the traffic on two wheels", ex:"", alt:[]},
  {w:"SECURITY",   cat:"People", d:1, hint:"The 'mai guard' at the gate", ex:"", alt:[]},
  {w:"ALFA",       cat:"People", d:2, hint:"A Yoruba Muslim cleric and prayer-writer", ex:"", alt:[]},
  {w:"KABIYESI",   cat:"People", d:3, hint:"'Your highness', how you hail an oba", ex:"", alt:[]},

  /* ---- Sound (music) ---- */
  {w:"GALALA",     cat:"Sound", d:2, hint:"Gritty Ajegunle street sound and dance, '90s", ex:"", alt:[]},
  {w:"KONTO",      cat:"Sound", d:2, hint:"Ajegunle dance craze that followed galala", ex:"", alt:[]},
  {w:"MAKOSSA",    cat:"Sound", d:2, hint:"Cameroonian groove that ruled Lagos parties", ex:"", alt:[]},
  {w:"SHAKU",      cat:"Sound", d:2, hint:"'Shaku shaku', the arms-crossed street dance", ex:"", alt:[]},
  {w:"LEGWORK",    cat:"Sound", d:2, hint:"Fast fancy footwork dance from the streets", ex:"", alt:[]},
  {w:"IGBIN",      cat:"Sound", d:2, hint:"Sacred Yoruba drum played for Obatala", ex:"", alt:[]},
  {w:"KALANGU",    cat:"Sound", d:2, hint:"The Hausa talking drum, squeezed under the arm", ex:"", alt:[]},
  {w:"MOLO",       cat:"Sound", d:2, hint:"Northern plucked lute, ancestor of the banjo", ex:"", alt:[]}
];

/* ------------------------------------------------------------
   GROWING THE BANK
   ------------------------------------------------------------
   This file is the offline fallback. The live bank is a Google
   Sheet: "Naija Scramble Words", tab "Words", columns
        w | cat | d | hint | ex | alt | status
   ("alt" = other accepted spellings, "|"-separated; only rows
   with status = live are used).

   play.html reads it as CSV via SHEET_URL (a gviz "out:csv"
   link on the shared sheet). Add a row in the sheet -> it shows
   up in the game within a few minutes. No code change, no
   redeploy. If the sheet is unreachable the game uses this file.

   To keep this file roughly in sync, re-export the sheet to CSV
   now and then, or just let it be the safety net.
   ------------------------------------------------------------ */
