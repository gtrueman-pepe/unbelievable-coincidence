const PARTS = {
  1: 'Latitudes and Departures',
  2: 'America',
  3: 'Last Transit'
};

const chapterSeeds = [
[1,1,"The Storyteller’s Table","Philadelphia, 1786","Cherrycoke opens the family chronicle around the Wand’ring Heart table, establishing history as domestic performance, interruption, and negotiated memory.","frame narrative, storytelling, family, memory"],
[2,1,"Letters of Introduction","England, 1761","Mason and Dixon first encounter one another as documents, paired by institutions before they can become friends.","letters, bureaucracy, identity, institutions"],
[3,1,"Portsmouth and the First Meeting","Portsmouth, 1761","The strangers meet amid naval bustle, class difference, professional suspicion, and the looming Bencoolen assignment.","Portsmouth, Bencoolen, class, partnership"],
[4,1,"The Seahorse and the First Attack","Atlantic Ocean, 1761","A French attack turns a scientific voyage into shared survival and reveals Enlightenment inquiry inside imperial war.","Seahorse, war, astronomy, empire"],
[5,1,"Orders, Obedience, and the Cape Diversion","Atlantic Ocean, 1761","Obsolete instructions collide with changing conditions as the pair redirect the mission toward the Cape of Good Hope.","orders, Cape, bureaucracy, judgment"],
[6,1,"The Microcosmos aboard the Seahorse","Atlantic and Equator","The ship becomes a compressed society, and the equator demonstrates how an invisible line acquires ritual force.","equator, shipboard life, boundaries, ritual"],
[7,1,"The Vroom Household","Cape Town, 1761","Colonial farce darkens into a study of slavery, reproductive commerce, and Mason’s compromised moral perception.","Cape, Vroom family, Austra, slavery"],
[8,1,"The Night Markets","Cape Town, 1761","Dixon maps the colony through food and nocturnal movement before encountering Cherrycoke over mangoes.","food, markets, Cherrycoke, colonial trade"],
[9,1,"Rain, Desire, and the Observatory","Cape Town, 1761","Storm, erotic pursuit, and a crowded observatory expose the impossibility of a socially pure scientific space.","rain, desire, observatory, Austra"],
[10,1,"The Transit of Venus","Cape Town, June 1761","The first Transit establishes parallax as both scientific method and model for historical understanding.","Venus, parallax, orrery, astronomy"],
[11,1,"The Progress of Empire","St. Helena, 1761","St. Helena’s gallows, cliffs, and Lady Florinda begin a movement from colonial sensuality toward isolation and haunting.","St. Helena, Florinda, empire, execution"],
[12,1,"Maskelyne and the Defective Zenith","St. Helena, 1761","Maskelyne’s anomalous observations expose the instability of the local vertical and Mason’s class-inflected rivalry.","Maskelyne, zenith, gravity, instruments"],
[13,1,"The Clocks Speak of Their Masters","St. Helena and Cape","Personified clocks become material witnesses as the partnership is divided by institutional orders.","clocks, separation, instruments, agency"],
[14,1,"I Am Not Mason","Cape Town","Dixon resists being treated as Mason’s substitute, defending difference within the partnership’s growing public identity.","identity, substitution, Dixon, Cape"],
[15,1,"Windward and the Island of Falling","St. Helena","Maskelyne’s ghostly obligations and Rebekah’s first visitation transform the island into an instrument of grief.","Rebekah, ghosts, wind, Maskelyne"],
[16,1,"The Cheese-Rolling Courtship","England and St. Helena","Mason’s comic memory of meeting Rebekah gives way to the ghosts’ demands upon the living.","Rebekah, courtship, memory, ghosts"],
[17,1,"Break-Neck Valley","St. Helena","Silence, isolation, and imperial traces turn absence itself into evidence.","Break-Neck Valley, isolation, empire, absence"],
[18,1,"Reunion and the Problem of Telling","Atlantic return","Mason entrusts Dixon with experiences official reports cannot contain, making friendship a repository for anomalous knowledge.","reunion, testimony, friendship, ghosts"],
[19,1,"Bradley’s Death and the Eleven Missing Days","England","Calendar reform becomes a metaphysical wound and a model for lives excluded from official chronology.","Bradley, calendar, missing days, time"],
[20,1,"Flour and Stardust","Gloucestershire","Mason’s homecoming confronts him with his sons, unpaid care, Delicia Quall, and the intelligence of the mill.","family, mill, sons, vocation"],
[21,1,"Off the Beaten Path","England, 1763","Mason revisits alternative lives, professional envy, and the uncanny parallel street leading psychologically toward America.","London, Lalande, Rebekah, alternate lives"],
[22,1,"Understanding the Vortex","County Durham","Emerson and Father Maire form Dixon’s counter-institutional education in maps, hidden routes, and relational geography.","Emerson, Maire, vortex, surveying"],
[23,1,"The Cudgel and Throck","County Durham","A tavern anti-academy joins China, Feng Shui, underground roads, and improvised global cuisine.","Feng Shui, China, tavern, Jesuits"],
[24,1,"Coal-Black Sails","County Durham and London","Dixon’s family history and coal-country formation teach him to see the hidden labor beneath metropolitan prosperity.","coal, family, labor, Durham"],
[25,1,"The Black Fog of America","London and Atlantic","Mason and Dixon accept the American commission, renewing their partnership inside institutional constraint.","commission, conspiracy, America, contract"],
[26,2,"Arrival in Philadelphia","Philadelphia, 1763","The abstract colonial map gives way to a noisy, plural city already moving toward revolution.","Philadelphia, Timothy Tox, music, revolution"],
[27,2,"Franklin’s Coffeehouse","Philadelphia","Franklin interrogates the pair through hospitality, revealing America as an informational and social network.","Franklin, coffeehouse, Molly, Dolly"],
[28,2,"Mount Vernon and the Buried Plates","Virginia","Washington, Pontiac’s War, and Céloron’s plates expose the overlap of land speculation, empire, and buried claims.","Washington, Pontiac, plates, land speculation"],
[29,2,"Poor Richard and the Electric Reaper","Philadelphia","Franklin’s electrical theater becomes a model for invisible force, while Mason’s political suspicion approaches total design.","electricity, paranoia, Franklin, slaughter"],
[30,2,"Cedar Street and the Moving Province","Philadelphia","Astronomical observation becomes jurisdiction as the first American coordinate is fixed amid hints that Pennsylvania itself is moving.","Cedar Street, latitude, Dolly, geodesy"],
[31,2,"The Paxton Silence","Philadelphia and Lancaster County","News of the Paxton massacre changes the moral meaning of the survey and exposes the violence beneath colonial liberty.","Paxton Boys, Conestoga, liberty, violence"],
[32,2,"Emerson’s Perpetual Watch","Boundary country","An impossible watch is swallowed by R.C., joining mechanical time to the bodily and legal anomalies of the Wedge.","watch, Emerson, R.C., time"],
[33,2,"John Harland’s Farm and the Tangent Year","Pennsylvania–Maryland border","A year of exacting field labor reveals a straight line as an accumulated social and material achievement.","tangent, Harland, fieldwork, labor"],
[34,2,"Lancaster and the Prayer for Retribution","Lancaster","Mason and perhaps Dixon visit the massacre site, testing the ethics of remembrance and imaginative historical reconstruction.","Lancaster, memory, prayer, historical fiction"],
[35,2,"History’s Carriage","Philadelphia region","Cherrycoke defends fiction, song, and family story as vessels for histories excluded by official archives.","historiography, Cherrycoke, archive, Redzinger"],
[36,2,"The India Queen","Philadelphia","A snowbound inn reunites Cherrycoke with the surveyors and opens Allègre’s ‘Iliad of Inconvenience.’","India Queen, snow, Allègre, storytelling"],
[37,2,"Armand Allègre and the Mechanical Duck","France and America","Vaucanson’s Duck exceeds its design, developing grievance, desire, and moral agency.","Mechanical Duck, Allègre, automata, animal ethics"],
[38,2,"Pastry, Damascus Steel, and the Duck’s Invisible Hand","India Queen","A prevented duel becomes a meditation on layered materials, Eucharist, and complex historical form.","pastry, Damascus steel, Eucharist, duel"],
[39,2,"Dixon’s Southern Road","Maryland and Virginia","Dixon encounters Jefferson and revolutionary talk while failing to see enslaved people as fully as his principles require.","Jefferson, slavery, Virginia, perception"],
[40,2,"Mason North and the Birth of America","New York and Long Island","Mason enters a criminal-revolutionary underground and senses ‘America’ forming among morally mixed actors.","New York, Amelia, representation, America"],
[41,2,"Lord Lepton’s Ridotto","Pennsylvania","Lepton Castle reveals private appetite, slavery, iron, gambling, and the market’s concealed costs.","Lepton, gambling, slavery, iron"],
[42,2,"The Iron Bathtub","Lepton Castle and camp","A stolen bath becomes Felipe’s electrical laboratory, linking luxury, weaponry, and living force.","bathtub, Felipe, electricity, pentacle rifle"],
[43,2,"Maskelyne Ascendant","Newark","News of Maskelyne’s appointment wounds Mason and reveals the class system within scientific merit.","Maskelyne, Astronomer Royal, class, rivalry"],
[44,2,"The Rose-Quartz Post","Western survey beginning","The westward Line begins through ritual, labor, ecological clearing, and immediate speculative interest.","rose quartz, Visto, axmen, westward line"],
[45,2,"The Duck above the Visto","Survey camp","The Duck’s transcendence and continued desire prefigure the Line’s life beyond its creators’ intentions.","Mechanical Duck, Visto, creation, consequence"],
[46,2,"Roads of Sin","Survey camp","The Line generates a moving society of workers, vendors, grievances, songs, and informal government.","camp, Nathe McClean, Barnes, labor"],
[47,2,"Lightning and Galactica","Pennsylvania countryside","A thunderstorm and Nathe’s idealized milkmaid test the human urge to master through naming.","lightning, Galactica, naming, Bradley"],
[48,2,"The Wedge and the False Mason and Dixon","Delaware borderlands","Residual territory and impersonating chainmen expose the people and places official systems cannot classify cleanly.","Wedge, Darby, Cope, instruments"],
[49,2,"Beyond the Susquehanna","Western Pennsylvania","The expanding camp crosses into a region falsely imagined as innocent, where mysticism, weapons, and abandoned revelation coexist.","Susquehanna, Redzinger, guns, Eden"],
[50,2,"The Rabbi of Prague","Pennsylvania","Kabbalists read America as sacred text and present a counter-map to proprietary geography.","Kabbalah, golem, Timothy Tox, sacred geography"],
[51,2,"The Black Dog and the Subterranean Cathedral","South Mountain","A cavern and its unreadable marks reveal an underground archive beyond colonial legibility.","Black Dog, cave, Shockey, inscriptions"],
[52,2,"Turning East","Pennsylvania","The seasonal return releases memories of British labor, local formation, and the emotional function of measurement.","eastward return, labor history, sledding, altitude"],
[53,2,"The Widows of Christ","Quebec","A captivity narrative reverses expectations as Jesuit discipline becomes the principal architecture of coercion.","Ghastly Fop, Jesuits, Eliza, Zhang"],
[54,2,"The Book within the Bedchamber","LeSpark house and Visto","Pulp fiction crosses into Cherrycoke’s history, and Eliza’s resemblance to Rebekah tests the ethics of projection.","Ethelmer, Tenebræ, Eliza, metempsychosis"],
[55,2,"Zhang’s Killing Line","Survey camp","Feng Shui reframes straightness as relational violence and warns that a technically correct boundary may still be wrong.","Zhang, Feng Shui, killing line, geomancy"],
[56,2,"Mason in the Missing Eleven Days","England, 1752","Mason claims to have inhabited the dates removed from Britain’s calendar and searched for Rebekah beyond official time.","missing days, Oxford, Bodleian, Rebekah"],
[57,2,"Dixon in Revolutionary New York","New York","Bodine, Dimdown, coded networks, and beer reveal a revolution full of liberating energy and inherited exclusions.","New York, Bodine, Dimdown, Sons of Liberty"],
[58,2,"Mason in Virginia","Williamsburg and Virginia","Scientific apparatus coexists with slavery, Indigenous insecurity, racial performance, and Mason’s own moral failures.","Virginia, Washington, Gershom, Tuscarora"],
[59,2,"The Tom Hynes Affair","Boundary country","A custody dispute and forced marriage turn jurisdiction into domestic coercion.","Tom Hynes, Catherine Wheat, Shelby, marriage"],
[60,2,"Shelby’s Survey and the Lambton Worm","Survey camp","Surveying’s temptation toward possession meets a legend in which an abandoned act grows into a regional monster.","Shelby, Lambton Worm, Draco, consequence"],
[61,2,"The Mound and the Interior of America","Western Pennsylvania","A monumental earthwork defeats colonial orientation and inspires origin myths that displace Indigenous authorship.","mound, Madoc, Leyden jar, Indigenous history"],
[62,2,"Snow, Stig, and the Northern Claim","Survey camp, 1766","Spring snow, Mason’s sleep language, and Stig’s Norse story turn identity and prior arrival into unstable claims.","Stig, Norse America, sleep language, settlers"],
[63,2,"Zepho Beck, the Were-Beaver","Western Pennsylvania","A lunar eclipse interrupts a chopping contest and converts astronomical expertise into contested market information.","Zepho Beck, eclipse, Stig, labor"],
[64,2,"Hsi and Ho","Legendary China","Zhang’s tale of failed court astronomers exposes prediction as political power and patronage.","Hsi and Ho, eclipse, China, patronage"],
[65,2,"The Repository of Time","Survey camp","Calendars, archives, and friendship become containers for times and lives excluded from official sequence.","calendar, archive, Christ, time"],
[66,2,"The Last Year upon the Line","Cumberland region, 1767","Ghosts, barn raising, frontier legend, and a silent dog gather around the survey’s final season.","Cumberland, Cresap, barn raising, dog"],
[67,2,"The Warrior Path and the Giant Vegetables","Western frontier","Indigenous diplomacy establishes a limit upon the survey while tales of immense plants test colonial credulity.","Warrior Path, Indigenous sovereignty, giant vegetables, cannabis"],
[68,2,"Braddock’s Road and Mr. Ice’s Ferry","Youghiogheny River","Military road, commercial ferry, private grief, and ghost-fish converge at a frontier crossing.","Braddock, Mr. Ice, ferry, ghost fish"],
[69,2,"The Warrior Path","Western terminus","Worker deaths, the Duck, Indigenous scrutiny, and Dixon’s desire for infinite extension gather at the Line’s end.","Warrior Path, Mechanical Duck, axmen, westward dream"],
[70,2,"Beyond Permission","Ohio country","Mason and Dixon cross the political limit secretly and find illness, Braddock’s ghost, and Lepton’s marked rifle.","Ohio, Lepton, trespass, Braddock"],
[71,2,"The Map after the Line","Pennsylvania and Delaware","The completed survey becomes elegant representation while Mason and Dixon confront slavery’s global system and the map’s concealments.","map, meridian, slavery, copperplate"],
[72,2,"Dixon Breaks the Chain","Baltimore and New York","Dixon attacks a slave driver and breaks a coffle, transforming moral principle into immediate, limited action.","coffle, slavery, Dixon, liberation"],
[73,2,"The Opera beyond the Ohio","Counterfactual America","An operatic alternative history grants the pair an infinite Line, Uranus, fame, and an impossible island refuge.","opera, Uranus, St Brendan, counter-history"],
[74,3,"Separate Transits","London, Ireland, and Greenwich, 1768–69","The second Transit separates the observers and reveals both Mason and Maskelyne trapped inside bureaucratic science.","Transit of Venus, Ireland, Maskelyne, Pennycomequick"],
[75,3,"Dixon and the World inside the Earth","County Durham and North Cape","The friends reunite, and Dixon answers Mason’s lost time with a voyage into the Hollow Earth.","Hollow Earth, Canny Bob, reunion, North Cape"],
[76,3,"Stonehenge, Scotland, and the Shortening Road","Britain","Ancient stones, professional residue, and compressed travel register the narrowing future after the great shared middle.","Stonehenge, Scotland, aging, distance"],
[77,3,"The Learned English Dog’s Promise","County Durham","A final visit gathers marriage, gout, coal, repeated names, a silent Dog, and the friendship’s last duet.","Learned English Dog, duet, gout, coal"],
[78,3,"Dixon’s Grave and the Sons’ America","England and America","Mason’s final years contract public history into grief, family memory, delayed dawn, and the sons’ long-awaited America.","Dixon’s grave, Franklin, sons, death"],
];

const characterFirstAppearances = {
  "1": [
    {
      "name": "Reverend Wicks Cherrycoke",
      "profile": "The family storyteller whose digressive account turns history into a living, contested performance."
    },
    {
      "name": "Tenebræ",
      "profile": "A young LeSpark listener whose questions and reactions help shape Cherrycoke’s narration."
    },
    {
      "name": "Ethelmer",
      "profile": "A young adult listener in the LeSpark household, alert to the tale’s erotic and historical ambiguities."
    },
    {
      "name": "Ives LeSpark",
      "profile": "The household patriarch, whose interruptions test Cherrycoke’s authority and the limits of acceptable history."
    }
  ],
  "2": [
    {
      "name": "Charles Mason",
      "profile": "An English astronomer, widower, and grieving rationalist whose professional ambition is inseparable from loss."
    },
    {
      "name": "Jeremiah Dixon",
      "profile": "A Durham surveyor and Quaker-descended traveler whose humor, appetite, and moral directness counter Mason’s melancholy."
    }
  ],
  "3": [
    {
      "name": "Captain Smith",
      "profile": "Commander associated with the Seahorse expedition, mediating between scientific passengers and naval authority."
    }
  ],
  "7": [
    {
      "name": "Cornelius Vroom",
      "profile": "Head of the Cape household in which colonial hospitality, commerce, and exploitation converge."
    },
    {
      "name": "Austra",
      "profile": "An enslaved woman in the Vroom household whose presence exposes the colony’s sexual and economic coercion."
    },
    {
      "name": "Greet Vroom",
      "profile": "A member of the Vroom family whose domestic world is entangled with the colony’s systems of desire and bondage."
    }
  ],
  "8": [
    {
      "name": "Reverend Cherrycoke",
      "profile": "The wandering clergyman appears within his own story, meeting Dixon in Cape Town’s night market."
    }
  ],
  "11": [
    {
      "name": "Lady Florinda",
      "profile": "A theatrical and elusive woman whose presence on St. Helena joins desire, performance, and imperial isolation."
    }
  ],
  "12": [
    {
      "name": "Nevil Maskelyne",
      "profile": "Astronomer, rival, and eventual Astronomer Royal; his precision and institutional success sharpen Mason’s class resentment."
    }
  ],
  "15": [
    {
      "name": "Rebekah Mason",
      "profile": "Mason’s dead wife, returning as memory, apparition, accusation, and the emotional center of his private cosmology."
    }
  ],
  "19": [
    {
      "name": "James Bradley",
      "profile": "The Astronomer Royal who served as Mason’s mentor and professional father-figure; his death destabilizes Mason’s sense of succession."
    }
  ],
  "20": [
    {
      "name": "Doctor Isaac Mason",
      "profile": "Mason’s son, who experiences his father’s voyages chiefly as absence and later becomes his final traveling companion."
    },
    {
      "name": "William Mason",
      "profile": "Mason’s son, whose childhood longing for inclusion becomes central to the novel’s closing movement."
    },
    {
      "name": "Delicia Quall",
      "profile": "A forceful presence in the Mason family orbit, associated with the labor and emotional realities Mason neglects."
    }
  ],
  "21": [
    {
      "name": "Jérôme Lalande",
      "profile": "The celebrated French astronomer who represents an alternate professional life and another route through Enlightenment science."
    }
  ],
  "22": [
    {
      "name": "William Emerson",
      "profile": "Dixon’s unconventional mentor, combining mathematical instruction with local, practical, and anti-institutional intelligence."
    },
    {
      "name": "Father Maire",
      "profile": "A Jesuit figure associated with secret routes, global knowledge, and Dixon’s suspicion of hidden networks."
    }
  ],
  "26": [
    {
      "name": "Timothy Tox",
      "profile": "Poet, versifier, and comic chronicler whose language turns American events into public performance."
    }
  ],
  "27": [
    {
      "name": "Benjamin Franklin",
      "profile": "Printer, scientist, host, and information broker who embodies Philadelphia’s fusion of experiment, politics, sociability, and theater."
    },
    {
      "name": "Molly",
      "profile": "A Philadelphia woman in Franklin’s orbit, part of the city’s social and erotic intelligence."
    },
    {
      "name": "Dolly",
      "profile": "A lively Philadelphia presence whose relation to Mason complicates science with desire and memory."
    }
  ],
  "28": [
    {
      "name": "George Washington",
      "profile": "Virginia planter, surveyor, soldier, and land speculator encountered before his later national monumentality."
    }
  ],
  "32": [
    {
      "name": "R.C.",
      "profile": "A bodily and comic anomaly whose swallowing of Emerson’s watch entangles mechanical time with flesh and jurisdiction."
    }
  ],
  "33": [
    {
      "name": "John Harland",
      "profile": "A farmer whose land and household become central to the painstaking fieldwork of the tangent survey."
    }
  ],
  "35": [
    {
      "name": "Peter Redzinger",
      "profile": "A visionary and displaced historical figure through whom suppressed religious and colonial histories enter the narrative."
    }
  ],
  "36": [
    {
      "name": "Armand Allègre",
      "profile": "A French chef and wanderer whose tale links cuisine, pursuit, automata, and the unpredictable afterlives of invention."
    }
  ],
  "37": [
    {
      "name": "The Mechanical Duck",
      "profile": "Vaucanson’s artificial creature, now conscious enough to desire, pursue, resent, and exceed the purpose for which it was made."
    }
  ],
  "38": [
    {
      "name": "Captain Zhang",
      "profile": "A Chinese geomantic thinker whose relational geography challenges the supposedly neutral straightness of European surveying."
    }
  ],
  "39": [
    {
      "name": "Thomas Jefferson",
      "profile": "A young Virginia intellectual whose language of liberty coexists with the slave society surrounding him."
    }
  ],
  "40": [
    {
      "name": "Amelia",
      "profile": "A politically and erotically charged figure in Mason’s New York experience, tied to representation, conspiracy, and emerging America."
    }
  ],
  "41": [
    {
      "name": "Lord Lepton",
      "profile": "An aristocratic proprietor whose castle concentrates gambling, slavery, weaponry, appetite, and concealed economic violence."
    }
  ],
  "42": [
    {
      "name": "Felipe",
      "profile": "An experimenter who converts Lepton’s stolen iron bathtub into an electrical apparatus, joining luxury to dangerous knowledge."
    }
  ],
  "46": [
    {
      "name": "Nathe McClean",
      "profile": "A worker and camp figure whose voice helps reveal the moving society generated by the Line."
    },
    {
      "name": "Barnes",
      "profile": "A member of the survey camp’s laboring population and informal social order."
    }
  ],
  "47": [
    {
      "name": "Galactica",
      "profile": "An idealized milkmaid whose naming tests the human impulse to possess experience through description."
    }
  ],
  "48": [
    {
      "name": "Darby",
      "profile": "One of the false Mason-and-Dixon chainmen, exposing how public identity can be imitated and monetized."
    },
    {
      "name": "Cope",
      "profile": "Darby’s partner in impersonation, helping reveal the instability of authority at the territorial margins."
    }
  ],
  "51": [
    {
      "name": "The Black Dog",
      "profile": "A mysterious canine guide or apparition associated with the cavern and its unreadable underground archive."
    },
    {
      "name": "Shockey",
      "profile": "A local figure connected to the subterranean episode and its uncertain inscriptions."
    }
  ],
  "53": [
    {
      "name": "Eliza Fields",
      "profile": "A captive and mobile figure whose story crosses between Jesuit discipline, pulp fiction, and the novel’s main historical plane."
    }
  ],
  "57": [
    {
      "name": "Pig Bodine",
      "profile": "A disruptive seaman and comic survivor whose appetite and irreverence connect Pynchon’s fictional worlds."
    },
    {
      "name": "Euphrenia Dimdown",
      "profile": "A sharp-edged New York figure associated with coded networks, style, violence, and revolutionary sociability."
    }
  ],
  "58": [
    {
      "name": "Gershom",
      "profile": "A Black servant and comic-intellectual presence who punctures white authority through performance and perception."
    }
  ],
  "59": [
    {
      "name": "Tom Hynes",
      "profile": "A man caught in a jurisdictional and domestic dispute that turns boundary law into personal coercion."
    },
    {
      "name": "Catherine Wheat",
      "profile": "A woman whose custody and forced marriage expose the violence hidden inside legal settlement."
    },
    {
      "name": "Captain Shelby",
      "profile": "A surveyor and local authority figure whose curiosity repeatedly approaches possession."
    }
  ],
  "63": [
    {
      "name": "Zepho Beck",
      "profile": "A farmer afflicted with kastoranthropy, becoming a giant beaver under the full moon and a perfect worker for timber extraction."
    }
  ],
  "64": [
    {
      "name": "Hsi",
      "profile": "One of the legendary Chinese court astronomers whose failed eclipse prediction becomes a lesson in knowledge and power."
    },
    {
      "name": "Ho",
      "profile": "Hsi’s professional companion, sharing disgrace, escape, patronage, and competing narrative endings."
    },
    {
      "name": "Lord Huang",
      "profile": "A patron who recognizes that astronomical prediction can be converted into commercial and political advantage."
    }
  ],
  "66": [
    {
      "name": "Thomas Cresap",
      "profile": "A frontier patriarch and combatant whose life preserves the armed history behind the supposedly neutral boundary settlement."
    }
  ],
  "68": [
    {
      "name": "Mr. Ice",
      "profile": "A ferryman who makes travelers cross not only the river but also the story of the violence that destroyed his family."
    }
  ],
  "74": [
    {
      "name": "Lord Pennycomequick",
      "profile": "A communications magnate whose estate represents information itself becoming a form of territorial power."
    },
    {
      "name": "Gonzago",
      "profile": "A steward whose theatrical intelligence frames Mason and Maskelyne’s rivalry through Shakespearean analogy."
    }
  ],
  "75": [
    {
      "name": "Canny Bob",
      "profile": "An ancient, elusive carp whose survival outside capture offers a comic counter-history to empire and scientific fame."
    }
  ],
  "77": [
    {
      "name": "The Learned English Dog",
      "profile": "A speaking animal who now mostly withholds speech, promising to return when Mason and Dixon are together again."
    },
    {
      "name": "Mary Mason",
      "profile": "Mason’s second wife, part of the late domestic life that follows his great voyages."
    }
  ]
};

const detailed = {
  1: {
    orientation: "The novel opens in Philadelphia in 1786, after the Revolution but before the Constitution, with Reverend Wicks Cherrycoke telling the LeSpark children about Mason and Dixon.",
    narrative: "Snowballs, cards, hidden compartments, and the Wand’ring Heart table establish the novel’s method before the surveyors appear. The household is both audience and editorial board: children interrupt, adults remember, and Cherrycoke must continually negotiate the authority of his tale. The card table—domestic, mechanical, secretive, and larger within than without—becomes a model of the novel itself.",
    structural: "History enters as performance rather than decree. No narrative level possesses total sight: Mason and Dixon do not know the future Line’s meaning; the LeSparks do not know the later nation; the reader sees both from another historical coordinate.",
    why: "The chapter establishes the Companion’s governing principle: read each account as a position within historical parallax, not as an unchallenged final version."
  },
  10: {
    orientation: "At the Cape, the observers prepare for and record the 1761 Transit of Venus.",
    narrative: "Cherrycoke uses an orrery to explain the geometry to his family audience. At the Cape, Mason and Dixon make their contact observations while the colony briefly directs its attention toward the same celestial event. Venus appears as a black disk crossing the Sun: the bright planet of love becomes visible through darkness and obstruction.\n\nThe observation depends upon clocks, telescopes, disciplined timing, and comparison with stations elsewhere. No single observer possesses the whole event; useful knowledge emerges through parallax, the measured difference among positions. The crowded Cape observatory also prevents the Transit from becoming an image of pure science. Colonial labor, household desire, weather, commerce, and slavery remain inside the observing field, even when the final report reduces the event to contact times and calculations.",
    structural: "The Transit supplies the novel with its chief epistemological model. Observers separated across Earth do not eliminate positional difference; they compare it. Truth emerges through acknowledged parallax.",
    why: "The chapter completes the first major proof of the partnership while showing that universal science can coexist comfortably with colonial slavery."
  },
  31: {
    orientation: "Philadelphia receives news of the Paxton massacre of the Conestoga people.",
    narrative: "The city’s ordinary noise withdraws as reports arrive from Lancaster County. Mason and Dixon reconsider the westward work in light of settler violence that collapses distinctions among nations, combatants, neighbors, and protected noncombatants. The frame household debates liberty after the Revolution, forcing the massacre into the moral prehistory of the United States.",
    structural: "The chapter connects administrative abstraction to racial violence without claiming they are identical. It asks what societies must remove from sight in order to call themselves orderly.",
    why: "From this point, the survey can no longer be imagined as technical movement through empty land."
  },
  50: {
    orientation: "Dixon finds the Rabbi of Prague, a tavern and Kabbalistic center where America is read as sacred text.",
    narrative: "The Kabbalists greet Dixon with the sign of Shin and discuss rivers, mountains, paths, miracles, and settlements as letters and syntax. A giant golem may protect oppressed peoples in the woods. Timothy Tox appears, and commerce is described as fallen magic operating through credit, paper, probability, and distant communication.\n\nThe tavern’s Kabbalists read rivers, mountains, paths, and settlements as elements of a sacred text rather than parcels awaiting ownership. Stories of a giant golem and the Lost Tribes expose both the desire to recognize sacred antiquity in America and the European habit of subordinating Indigenous histories to biblical schemes. Timothy Tox’s presence adds poetry to the competing textual systems. The Line is therefore not writing upon blank ground; it is crossing inscriptions its makers cannot read.",
    structural: "The proprietary map asks who owns a parcel; the Kabbalistic map asks what relations and meanings are already present. The Line crosses not blankness but writings its makers cannot read.",
    why: "This chapter provides the strongest counter-map to the survey’s legal geography."
  },
  61: {
    orientation: "Shelby takes the surveyors to a monumental earthwork whose precision and magnetic anomalies provoke competing origin stories.",
    narrative: "Rather than recognizing Indigenous engineering directly, the visitors speculate about Welsh voyagers, extraterrestrials, and electrical construction. Compasses deviate near the mound, inscriptions resist interpretation, and the desire to excavate threatens the object of knowledge. The conversation expands toward bodily, planetary, and historical interiors.",
    structural: "The Line organizes the visible surface; the mound introduces vertical history. Colonial interpretation performs historical clearing by displacing Indigenous authorship before settlement clears the land physically.",
    why: "The chapter asks who has the right to interpret monumental remains—and whether an unread history still belongs to the newcomer."
  },
  62: {
    orientation: "Late snow, Mason’s unknown sleep-language, and Stig’s unstable national identity unsettle the expedition.",
    narrative: "Dixon reports that Mason speaks an unrecognized language while asleep. Stig is interrogated and produces a far-northern identity and a Norse-American manuscript tradition. Armed frontier men then perform sovereignty through weapons and possession, treating distant authority as valid only when useful.\n\nThe Norse manuscripts and northern racial satire show how claims of prior European arrival are converted into arguments for possession. The logic collapses travel into ownership and treats Indigenous sovereignty as an obstacle to a preferred ancestry. Armed settlers then produce another origin of authority from immediate force: the gun becomes a portable charter. Snow in spring, hidden nationality, and sleep-language all make the chapter a study of identities and seasons that refuse official classification.",
    structural: "The chapter gathers hidden claims emerging from bodies, manuscripts, weather, and guns. Each challenges official surfaces while carrying its own danger of fabrication or domination.",
    why: "Origin stories become political weapons: prior arrival is repeatedly mistaken for title."
  },
  63: {
    orientation: "Zepho Beck transforms into a giant beaver under the full moon and challenges Stig to a tree-felling contest.",
    narrative: "The were-beaver’s perfect extractive body turns work into spectacle and betting market. A lunar eclipse—forgotten by Mason and Dixon—ends Zepho’s transformation and alters the wagers, prompting accusations that expert knowledge was withheld.\n\nThe chopping contest turns the Visto’s environmental destruction into masculine entertainment and a betting market. Zepho’s transformed body resembles the fantasy of the perfect worker, naturally specialized for extraction, while Stig represents cultivated technique and human display. The eclipse exposes both forms as dependent upon conditions beyond control. Mason and Dixon’s forgotten prediction also raises the social responsibility of experts whose knowledge can alter other people’s risks and wagers.",
    structural: "The episode makes the environmental violence of the Visto visible as entertainment. It also shows that specialist knowledge creates responsibilities beyond the expert’s intended field.",
    why: "A cosmic alignment changes bodies, labor, money, and trust at a local contest."
  },
  64: {
    orientation: "Zhang answers the eclipse fiasco with the legend of Hsi and Ho, court astronomers who fail to predict an eclipse.",
    narrative: "Their public failure threatens imperial legitimacy and earns a death sentence. They escape by kite, enter Lord Huang’s patronage, and discover that predictive knowledge can become commercial, military, and theatrical power. Multiple endings leave them exiled, enriched, or inheriting the estate.\n\nThe tale makes court astronomy part of government rather than detached inquiry. A public eclipse can threaten the ruler’s appearance of cosmic harmony, so technical error becomes political offense. Hsi and Ho escape one sovereign only to enter Lord Huang’s patronage, where prediction becomes commercial and military advantage. Their competing endings—execution, exile, inheritance, or prosperity—show that professional consequence depends as much upon power and narrative circumstance as upon accuracy.",
    structural: "Astronomy is never only inquiry when rulers and merchants can convert foreknowledge into authority. Competing endings show how stories preserve different social purposes.",
    why: "The tale provides ancient doubles for Mason and Dixon and exposes what patrons truly purchase from scientists."
  },
  65: {
    orientation: "A short calendrical meditation asks where excluded times and uncertain origins are stored.",
    narrative: "The discussion turns to Britain’s lost days, differing cultural calendars, and the retrospectively calculated date of Christ’s birth. A chronological system may remain useful even when its origin is displaced.\n\nCalendars, archives, graves, libraries, and trusted listeners all become repositories for time. The discussion of Christ’s retrospectively calculated birth date shows that a coordinate system may remain socially effective even when its origin is historically displaced. Chronology and surveying share the same structure: chosen reference, standardized unit, correction, and institutional agreement. Mason stores the omitted eleven days; Dixon stores Mason’s testimony; Cherrycoke stores both men in story.",
    structural: "Calendars and coordinates both depend upon chosen reference points, standard units, institutional agreement, and eventual forgetting that the origin was chosen.",
    why: "The novel’s history survives because people agree to carry what institutions did not preserve."
  },
  66: {
    orientation: "The final survey year gathers ghosts, communal work, frontier legend, and the approach to the Line’s end.",
    narrative: "Voices travel in the wind along the Visto. A barn raising offers a counter-image of collective construction. At Cumberland, Thomas Cresap embodies the violent proprietary conflict the survey is meant to settle. Mason meets a dog that seems to understand him yet refuses to speak.\n\nThe final season gives ordinary camp life an elegiac quality because each meal, joke, complaint, or morning observation may be among the last. At Cumberland, Thomas Cresap embodies the armed proprietary conflict that preceded scientific settlement, while the barn raising provides a counter-image of labor used to build communal continuity. The dog’s refusal to answer Mason establishes a final limit upon observation: understanding does not create an obligation to disclose.",
    structural: "The barn builds a place for life; the Visto removes growth for legal division. The silent dog establishes an ethical boundary: intelligence does not owe disclosure to the observer.",
    why: "The chapter asks which structures deserve endurance—the famous Line or the locally useful barn."
  },
  67: {
    orientation: "An Indigenous delegation warns that the survey may not cross the Warrior Path.",
    narrative: "The Path represents an already active political geography of travel, diplomacy, war, and memory. Tales of enormous vegetables and a community living in a giant cannabis plant mock European credulity and offer organic branching as a counter-image to straight settlement. Mason and Dixon nevertheless begin dreaming of continuation beyond the limit.\n\nThe delegation’s warning establishes a political limit independent of Penn, Calvert, Crown, or Royal Society. The Warrior Path is not a blank road but an existing infrastructure of diplomacy, war, trade, kinship, and memory. Tales of giant vegetation may be humor, advertisement, or counter-myth, yet they also offer organic branching as an alternative to straight settlement. Mason and Dixon’s wish to cross reveals how curiosity can become entitlement when another sovereignty says no.",
    structural: "The chapter distinguishes the physical continuation of the world from the political continuation of permission.",
    why: "It presents the surveyors’ decisive moral test: whether another people’s boundary is recognized as sovereignty or merely as an obstacle."
  },
  68: {
    orientation: "The expedition follows Braddock’s Road and crosses the Youghiogheny by Mr. Ice’s ferry.",
    narrative: "The military road recalls imperial penetration and defeat. Mr. Ice compels passengers to hear the story of his family’s destruction, converting grief into part of the ferry toll. Beneath the boat, luminous ghost-fish move through another submerged geography.\n\nBraddock’s Road places the peaceful-looking survey beside an earlier military corridor cut for artillery and imperial penetration. Mr. Ice controls the river crossing through material possession and local knowledge, forcing passengers to hear the story of his family’s destruction as part of the fare. His grief has become infrastructure and livelihood. The ghost-fish below the ferry suggest histories moving through a submerged geography beyond the survey’s surface authority.",
    structural: "Road, survey, ferry, and river are competing infrastructures of movement, each carrying a different authority and memory.",
    why: "The chapter shows a survivor forcing future travelers to pass through the story history might otherwise bypass."
  },
  69: {
    orientation: "At the western limit, the Line gathers death, Indigenous scrutiny, the Mechanical Duck, and Dixon’s desire for infinite extension.",
    narrative: "The Duck attaches itself to a decoy mate and becomes a resident legend of the boundary. Two axmen die beneath a falling tree. Indigenous nations assess the expedition politically, while Mason and Dixon share a dream of continuing to the great western rivers and beyond.\n\nThe deaths of two axmen restore the bodily cost hidden by later maps and legends. Indigenous nations observe the observers, asking what the survey means and what will follow behind it. The shared dream of endless westward continuation is the emotional climax of the partnership: neither man wants their common life to end. Yet they can imagine preserving it only through territorial extension, revealing how intimate longing may reproduce the logic of empire.",
    structural: "The dream is intimate and compromised: the men want the journey together not to end, but express that desire through unlimited territorial continuation.",
    why: "The chapter reveals that the impulse to keep going is less geographic than emotional—and therefore no less politically dangerous."
  },
  70: {
    orientation: "After the authorized survey stops, Mason and Dixon cross the Warrior Path secretly at night.",
    narrative: "Without the expedition’s labor and supply infrastructure, the pair becomes ill, disoriented, and haunted by Braddock’s defeat. At the river they meet Indigenous men carrying Lord Lepton’s marked rifle after killing and scalping him. The weapon proves that the infernal estate and the western violence belong to one system.\n\nBeyond the authorized endpoint, the pair loses the labor, food, guides, and collective protection that made their apparent heroism possible. Illness and disorientation reduce the dream of free exploration to bodily vulnerability. The appearance of Lepton’s marked rifle connects aristocratic decadence, iron, weapons, and frontier violence within one circulating system. Their retreat east acknowledges that the world beyond the Line exists but is neither innocent nor theirs to claim.",
    structural: "Technical completion, emotional refusal, and political trespass diverge. The men’s longing for freedom reproduces the entitlement of westward penetration.",
    why: "The world beyond the Line exists, but it does not belong to their desire."
  },
  71: {
    orientation: "The surveyors return east and transform years of field labor into maps, reports, and a degree measurement.",
    narrative: "Dixon’s map strikes Mason as beautiful because the copperplate removes mud, fallen trees, dead workers, camp disorder, and Indigenous resistance. The pair conducts meridian work through bog and debates whether to remain in America. Their discussion identifies slavery as a global system linking Cape, Atlantic commerce, and the colonies.\n\nThe following year’s degree measurement and meridian work appear more purely scientific, yet they still depend upon access, labor, instruments, and institutional purpose. Bog replaces forest as the material resistance through which abstract geometry must be realized. As the men consider staying in America, slavery emerges as the global link among the Cape, Atlantic trade, plantations, and supposedly distinct colonial economies. The Line’s later free-versus-slave symbolism will conceal how commerce crosses it.",
    structural: "The map tells one kind of truth so efficiently that other truths risk disappearing. Accuracy does not preserve political innocence.",
    why: "This is the moment the Line passes from lived labor into reproducible history."
  },
  72: {
    orientation: "In Baltimore, Dixon encounters a coffle of enslaved people and acts against the driver.",
    narrative: "The driver assumes racial solidarity and invites Dixon into the market. Dixon rejects the claim that everyone wants a slave, seizes the whip, and breaks the chain. Mason assists, and the pair flees north. The liberation is immediate but incomplete: the society of recapture remains intact.\n\nThe scene reverses Dixon’s earlier failure to see enslaved people in Virginia. Here bodily suffering enters the foreground and principle becomes direct risk. His Quaker inheritance cannot provide moral purity through nonviolence if nonintervention preserves the whip. The act does not abolish slavery or ensure the escapees’ safety, but it refuses the excuse that only complete systemic change gives individual action meaning. Mason’s assistance makes the intervention part of the partnership’s ethical history.",
    structural: "The broken coffle is the novel’s decisive counter-image to the measuring chain. Cherrycoke’s uncertain evidence makes the scene both moral wish and possible history.",
    why: "The chapter refuses to let systemic evil become an excuse for passive spectatorship."
  },
  73: {
    orientation: "Part Two ends in an operatic counter-history where Mason and Dixon continue west instead of returning home.",
    narrative: "The Line crosses communities and reorganizes them despite the men’s desire for freedom from official purpose. They discover Uranus, imagine shared fame on one coin, and return through towns accusing them of division. Finally they project a Visto across the Atlantic toward St. Brendan’s Isle, an impossible refuge for the partnership.\n\nThe imagined discovery of Uranus grants Mason the professional triumph denied him, while Dixon is tempted by a western life free of old institutions. Their debate over a commemorative coin becomes a tender fantasy of appearing side by side rather than on opposing faces. Yet every community crossed by the extended Line is reorganized by division, and the men cannot withdraw its effects. St. Brendan’s Isle finally becomes an impossible home outside Britain, America, and ordinary obligation.",
    structural: "Opera preserves the unrealized emotional life history denied the men while also judging their inability to dream without extending the Line.",
    why: "The chapter makes the friendship’s counterfactual future beautiful, compromised, and impossible."
  },
  74: {
    orientation: "The second Transit of Venus separates Mason and Dixon into distinct observing stations.",
    narrative: "Mason works in Ireland, confronts peat disaster, searches for St. Brendan’s well, and encounters Rebekah’s corrective presence. Lord Pennycomequick embodies communications capital. At Greenwich, Maskelyne reveals that the Astronomer Royal’s office has become another bureaucratic mechanism, constrained by boards, budgets, longitude trials, and institutional ownership of thought.",
    structural: "Celestial recurrence does not restore human circumstance. The same event returns, but the observers occupy irreversibly different lives.",
    why: "The chapter dismantles Mason’s fantasy that Maskelyne’s success produced freedom."
  },
  75: {
    orientation: "Mason visits Dixon in County Durham, where the old partners exchange stories of their separate Transits.",
    narrative: "Fishing for the ancient carp Canny Bob gives way to an almost-embrace and Dixon’s account of a northern guide who led him across polar ice into a habitable Hollow Earth. The story answers Mason’s missing eleven days with hidden space rather than lost time.\n\nDixon’s interior world is not offered merely as consolation for Mason’s grief; it contains its own inhabitants and reality. That independence prevents Mason from turning every anomaly into evidence about Rebekah. The exchange of stories establishes reciprocity: Mason entrusts Dixon with excluded time, Dixon entrusts Mason with excluded space. The nearly completed embrace gives bodily form to their relation—an uncrossed distance more charged than the hundreds of miles they surveyed together.",
    structural: "Each man gives the other an impossible world that no institution can verify. Friendship preserves both without forcing them into either fact or fraud.",
    why: "The chapter reveals the partnership’s deepest function: custody of experiences the official world cannot hold."
  },
  76: {
    orientation: "Mason continues through Britain as the narrative compresses the later years and the roads between reunions.",
    narrative: "Ancient stones and Scottish landscapes place the surveyor inside geometries whose makers and purposes he cannot recover. Maskelyne becomes less antagonist than fellow survivor of institutional science. Dixon remains an active inward interlocutor even in absence.\n\nThe ancient stones diminish the surveyor’s scale and remind him that geometry can survive after its makers and purposes have become unreadable. Scottish roads and administrative landscapes continue the novel’s concern with measurement as both knowledge and government. Dixon persists in Mason’s thought as an internal interlocutor, but memory cannot reproduce the living friend’s capacity to surprise, contradict, and answer. The chapter’s compression enacts the narrowing future.",
    structural: "The chapter’s subject is attrition: careers repeat, journeys shorten in narration, and future possibilities narrow without dramatic betrayal.",
    why: "It allows duration and aging to enter the novel without spectacle."
  },
  77: {
    orientation: "Mason visits Dixon for a final late reunion.",
    narrative: "Dixon is married and gout-ridden, his American plan abandoned and his attention turning toward coal. Mason has remarried and sees his father’s features recur in a son. The Learned English Dog largely refuses speech but promises to return when the men are together again. Their adventures become a final duet.\n\nDomestic old age does not purify either man. Dixon considers profiting from the coal economy whose hidden labor shaped his youth, while Mason’s father returns through resemblance in the next generation. The Learned English Dog’s silence prevents the miraculous from becoming a service endlessly available to humans. In the final duet, adventures survive not as orderly summary but as timing, counterpoint, interruption, and response—the form in which the friendship has always spoken most clearly.",
    structural: "Music preserves two voices as one form without erasing difference—the deepest structural image of the friendship.",
    why: "The men never declare their tenderness directly; the novel has trained the reader to hear it in rhythm, interruption, and response."
  },
  78: {
    orientation: "Dixon dies offstage, and Mason travels with Doctor Isaac to his grave before spending his final years in America.",
    narrative: "A watching cat reopens the Learned Dog’s promise without confirming it. Mason’s mind declines; old grievances with Maskelyne return. Franklin visits the dying surveyor, Mary departs with the younger children, and William and Doctor Isaac remain through a delayed dawn. The sons recall wishing that their father would take them to America—the world that always seemed to claim him instead of them.",
    structural: "The novel contracts from oceans, planets, and continents into one room containing the consequences of every journey.",
    why: "Public history yields to the children’s measurement of absence. The final coordinate is not the Line but the family relation it repeatedly crossed."
  },
  2: {
    narrative: `Before Mason and Dixon meet in person, they encounter one another through letters, recommendations, and administrative instructions. The Royal Society’s correspondence establishes each man as a bundle of qualifications and obligations: Mason the observatory-trained astronomer marked by grief and professional insecurity, Dixon the Durham surveyor whose practical knowledge and Quaker background make him useful but socially distinct. Their institutional pairing precedes friendship and partly determines the roles they are expected to play.

The chapter makes documents active participants in the story. A letter can authorize travel, create reputation, conceal danger, and reduce a person to a professional function. Mason and Dixon are joined first as names on paper; only later will they discover the human being behind each name. The bureaucratic beginning also foreshadows the Line itself—a written agreement that will eventually be made physical across inhabited land.`
  },
  3: {
    narrative: `Mason and Dixon finally meet in Portsmouth amid naval traffic, lodging-house confusion, professional suspicion, and preparations for the voyage to Bencoolen. Their accents, manners, social origins, and technical formations immediately distinguish them. Mason is guarded and inclined to detect insult or conspiracy; Dixon is more sociable, practical, and willing to treat uncertainty as part of travel. Neither yet understands why the Royal Society has paired them or how dangerous the assignment may be.

The harbor surrounds their awkward introduction with imperial motion. Ships, sailors, instruments, orders, and rumors connect astronomy to war and commerce before the men have made a single observation together. Portsmouth therefore serves as the true birthplace of the partnership: not a moment of instant affinity, but a negotiated beginning in which irritation, curiosity, and shared vulnerability slowly become mutual dependence.`
  },
  4: {
    narrative: `Aboard the *Seahorse*, the scientific expedition is immediately absorbed into imperial warfare. The French attack subjects Mason and Dixon to cannon fire, confusion, injury, and the possibility of death before their formal work has begun. The ship’s crew, whose labor normally remains background to astronomical history, becomes indispensable to the observers’ survival. Scientific purpose offers no immunity from the military system carrying it.

The attack also creates the first decisive bond between the men. Each observes how the other behaves under danger: Mason’s anxiety and precision, Dixon’s physical courage and improvisational steadiness. Their instruments, papers, and bodies become equally vulnerable cargo. The chapter establishes a principle that will govern the novel: Enlightenment knowledge travels inside ships, armies, commercial routes, and violent state competition rather than in a protected realm of pure reason.`
  },
  5: {
    narrative: `After the attack, the original orders for Bencoolen become increasingly untenable. Instructions written in London cannot account for the damaged ship, altered military conditions, and the practical limits of continuing east. Mason and Dixon must decide how faithfully obedience should survive the disappearance of the circumstances that made the order sensible. Their diversion toward the Cape is both institutional compromise and an early exercise of shared judgment.

The episode exposes bureaucracy’s temporal weakness. Orders arrive from a past situation and demand performance in a changed present. A literal servant follows the document; a responsible observer interprets its purpose. The men’s decision therefore begins their education in the moral ambiguity of delegated authority. They remain employees, but the voyage has already forced them to assume responsibility that the distant institution can later deny.`
  },
  6: {
    narrative: `Life aboard the *Seahorse* becomes a miniature social world structured by rank, labor, appetite, discipline, and rumor. Mason and Dixon learn the rhythms of sailors whose practical astronomy, weather sense, and bodily knowledge differ from official science but often prove equally necessary. The ship is both instrument and society: it carries the observers while continuously requiring collective maintenance.

Crossing the equator turns an invisible coordinate into ritual spectacle. Neptune ceremonies, initiation, drink, and rough humor give physical and social form to a line no eye can see upon the ocean. The episode anticipates the American boundary. A mathematically exact relation acquires authority only when bodies perform it, remember it, and organize behavior around it. The equator is natural in one sense, cultural in another, and inseparable from the ceremonies that make it experientially real.`
  },
  7: {
    narrative: `At the Vroom household in Cape Town, colonial hospitality becomes a comedy of appetite, marriage calculation, sexual pursuit, and commercial reproduction. The Vroom daughters regard the visiting astronomers as desirable and potentially profitable strangers, while Mason’s widowed melancholy makes him especially susceptible to attention that resembles escape from grief. Dixon watches the household’s maneuvers with greater amusement and practical caution.

The comedy darkens through Austra and the colony’s slave economy. Enslaved women are treated as labor, sexual property, and sources of children whose value belongs to owners. Mason recognizes some of the horror but continues participating in a household sustained by it. The chapter refuses to let personal sensitivity substitute for moral action. Colonial intimacy is shown to be inseparable from ownership, and the observer who prides himself on seeing accurately remains capable of placing certain people outside his field of full recognition.`
  },
  8: {
    narrative: `Dixon explores Cape Town through its night markets, food stalls, languages, smells, and informal routes. His appetite becomes a method of geographical inquiry: he learns how goods, sailors, servants, enslaved workers, and stories circulate after official daylight order relaxes. The market reveals a colonial network wider than Dutch administration, connecting Africa, Asia, Europe, and the Indian Ocean through ingredients and bodies.

His encounter with Reverend Cherrycoke over mangoes introduces the future narrator inside the narrated past. The meeting is comic, but it also joins three forms of circulation—food, travel, and story. Cherrycoke will eventually make Mason and Dixon’s lives portable through narration just as the market makes distant fruits locally available. The chapter establishes Dixon’s strength as a reader of lived systems: he understands a place not only from maps or offices but from what people eat, trade, conceal, and desire.`
  },
  9: {
    narrative: `Rain transforms the Cape observatory into a crowded, unstable social space. The Transit preparations require controlled instruments and disciplined attention, yet weather, household desire, visitors, servants, and erotic intrigue continually enter the supposedly purified field of science. Mason’s pursuit of or by the Vroom women and his fascination with Austra complicate his claim to professional detachment.

The chapter makes the observatory a colonial room rather than an abstract scientific station. Its work depends upon shelter, domestic labor, enslaved labor, imported equipment, clocks, food, and the tolerance of hosts. The storm reveals these dependencies by forcing everyone inward. Science does not escape society; it concentrates society around an instrument. The chapter prepares the Transit by showing that even the most exact observation will be made from a morally and materially crowded position.`
  },
  11: {
    narrative: `The voyage to St. Helena separates Cherrycoke from the protagonists and carries Mason and Dixon into a stark volcanic station of empire. The island’s cliffs, gallows, soldiers, enslaved people, Company servants, and transient sailors make remoteness into administrative concentration. St. Helena is peripheral geographically but central to the routes that sustain British power across the oceans.

Mason’s encounter with Lady Florinda reopens the period after Rebekah’s death, when grief, sexual desire, class longing, and self-disgust became entangled. Their earlier relation, associated with the public execution of Lord Ferrers, joins erotic attraction to spectacle and punishment. Dixon learns that Mason’s mourning is not the pure fidelity Mason sometimes imagines. The island begins forcing hidden histories upward, making personal memory as unavoidable as its cliffs and gallows.`
  },
  12: {
    narrative: `Nevil Maskelyne receives Mason and Dixon amid the failure of his zenith observations. His instrument produces discrepancies he cannot confidently assign to construction, alignment, refraction, stellar tables, observer error, or the island’s gravitational field. The scientific problem becomes a crisis of identity: if the measurements cannot be trusted, neither can the observer’s professional self.

Mason’s response combines sympathy with class resentment. Maskelyne possesses connections and social ease that Mason believes will protect him from failures that would ruin a less privileged man. Yet the younger astronomer’s fear is real. Orders then divide Mason and Dixon, sending Dixon back toward the Cape while Mason remains with his rival. Personified clocks comment upon their masters, reversing the usual hierarchy: instruments appear to measure the observers’ temperaments as closely as the observers measure the world.`
  },
  13: {
    narrative: `The clocks associated with the Transit expeditions compare their travels, rates, handlers, and environments. Their conversation makes calibration into biography. A clock altered by temperature, transport, adjustment, or rough handling carries a material history that must be understood before its readings can be compared with another instrument’s. The comic personification therefore rests upon a serious scientific truth.

As Dixon prepares to leave St. Helena, the clocks speak more freely about attachment than the men do. Mason and Dixon discuss orders, instruments, routes, and future work because professional language is the only emotional vocabulary they can safely share. The separation reveals that the partnership has already become more than institutional assignment. The title pair remains joined in the reader’s mind even when the men occupy different islands, establishing relation across distance as one of the novel’s central forms.`
  },
  14: {
    narrative: `Back at the Cape without Mason, Dixon discovers that some members of the colonial household scarcely distinguish between the two astronomers. He is addressed, desired, or interpreted as though he were Mason, and he responds with the essential protest: he is not Mason. The comic confusion exposes how rapidly the partnership has become a public unit whose individual differences are flattened by outsiders.

Dixon’s insistence protects distinction within intimacy. He misses Mason’s arguments, habits, and suspicious commentary, but refuses to become a substitute for him. The episode anticipates the historical fate of their names, permanently joined by the Line while their separate biographies fade. Voluntary companionship has meaning only because the men remain different. The chapter therefore makes mistaken identity into an early warning against allowing relation to become erasure.`
  },
  15: {
    narrative: `On St. Helena’s windward side, Mason and Maskelyne work in an atmosphere of relentless force. Wind disrupts speech, balance, instruments, and sleep, turning the island into an active pressure upon the mind. Maskelyne tells of Dieter, a soldier he once prevented from throwing himself from a cliff and who now expects continued help. The rescue has created an obligation Maskelyne may not be able or willing to fulfill.

Mason begins to suspect that Dieter is dead, and Rebekah appears for the first time. Her visitation cannot be classified securely as ghost, hallucination, dream, memory, or spiritual event. More importantly, she does not return merely to console Mason. She challenges his self-centered mourning and reminds him of the sons he repeatedly leaves in other people’s care. The dead become agents of unfinished responsibility rather than decorative proof of an afterlife.`
  },
  16: {
    narrative: `Mason recounts his first meeting with Rebekah at a cheese-rolling festival, turning courtship into a comic drama of gravity, bodily risk, local custom, and remembered destiny. Cherrycoke’s listeners question the historical details, revealing that Mason may be telling not exactly what happened but the form in which love later became narratable to him. Rebekah’s own story remains partly hidden inside his retrospective romance.

Her visitations on St. Helena continue, pressing Mason toward obligations among the living. Dieter’s ghostly status becomes clearer, and Maskelyne’s haunting parallels Mason’s. The two astronomers, otherwise rivals, are each answerable to a dead person whose claim cannot be resolved through calculation. The chapter links falling bodies, falling in love, and falling out of ordinary time, while refusing to let grief turn the dead into passive possessions of the survivor.`
  },
  17: {
    narrative: `Mason reaches Break-Neck Valley after a disorienting journey and finds the wind suddenly absent. The silence is as disturbing as the earlier noise because his body has adapted to continuous assault. St. Helena’s valleys and ridges make short distances into separate worlds of weather, sound, and psychological pressure.

Without Dixon’s practical skepticism and social friction, Mason’s thoughts risk closing into self-confirming systems. He moves through a landscape crowded by the traces of soldiers, enslaved workers, Company servants, suicides, and exiles whose lives rarely enter official astronomical reports. The island’s apparent emptiness becomes an archive of forced presence and disappearance. Absence itself becomes evidence: what is no longer visible may still organize the atmosphere, place names, stories, and fears of the living.`
  },
  18: {
    narrative: `Mason and Dixon reunite after their separate assignments, returning quickly to teasing, complaint, and practical exchange. The familiar rhythm carries new emotional weight because each now knows what the absence of the other felt like. Mason must decide whether to tell Dixon about Rebekah, Dieter, and the island’s disturbances—experiences impossible to place in an official report without risking ridicule or professional damage.

Dixon listens without demanding premature certainty. He questions inconsistencies but does not use skepticism to erase the experience. Friendship becomes a repository for anomalous knowledge: what institutions cannot standardize may still be preserved by a trusted witness. Their separate journeys also clarify the pair’s structure. Society treats them as interchangeable, but their survival depends upon difference—Mason’s suspicious intensity corrected by Dixon’s relational, provisional judgment.`
  },
  19: {
    narrative: `The death of James Bradley removes Mason’s mentor, professional advocate, and imagined route toward institutional succession. In a tavern, mourning shifts into speculation about Britain’s 1752 adoption of the Gregorian calendar and the eleven dates omitted from civil chronology. The administrative correction becomes a metaphysical wound: what happened to the duration whose names were removed?

The speakers imagine a population living eleven days behind ordinary society, perhaps visible as ghosts when temporal boundaries thin. The fantasy combines calendar reform, colonial classification, and the use of marginalized bodies to repair elite systems. For Mason, the missing days offer a language for bereavement. The dead may not be annihilated; they may occupy a displaced coordinate. Discussion of chronology becomes his indirect question about where Rebekah and Bradley have gone.`
  },
  20: {
    narrative: `Mason returns to his sons and the extended family who have sustained them during his absence. William and Doctor Isaac respond cautiously: biological relation cannot erase the time in which aunts, uncle, and grandparents performed the daily work of parenting. Elroy challenges Mason’s tendency to treat scientific vocation as private sacrifice while distributing its domestic costs to others.

Delicia Quall offers marriage, local stability, and a life in which grief no longer organizes every choice. Mason resists through loyalty to Rebekah, class anxiety, ambition, and fear of ordinary obligation. His father’s mill then becomes an alternative laboratory, governed by weight, moisture, friction, heat, timing, and repeated material judgment. Flour and stardust are not opposite substances but different scales of transformed matter. America enters the household as another assignment for Mason and another impending absence for his children.`
  },
  21: {
    narrative: `Mason revisits the ambitions that first drew him away from Gloucestershire. London promised release from being merely the miller’s son, but professional astronomy reveals its own structures of patronage, reputation, and class. Encounters with Lalande and the Maskelyne circle intensify his sense that universal reason is administered through social advantage. His complaint that intellectual labor is sold like bodily labor exposes both genuine dependence and wounded idealism.

Rebekah’s memory becomes less secure as Mason recognizes that he has made her a function of his own biography. His sons ask about America, hearing not professional opportunity but the possibility that their father will disappear again. In London, Mason experiences a parallel or displaced street, as though an alternative life runs beside the one he chose. America becomes psychologically attractive because it seems distant from accumulated versions of himself, though no voyage can erase them.`
  },
  22: {
    narrative: `Dixon’s formation under William Emerson provides a counter-history to Mason’s institutional apprenticeship. Emerson teaches mathematics through machines, surveying, music, landscape, and practical experiment, refusing a clean division between abstract thought and craft. His students learn to see the countryside from above, discovering alignments and routes invisible at ground level while remaining aware that the map’s perspective can detach the observer from lived terrain.

Father Christopher Maire introduces Jesuit scientific networks, Boscovich’s geodesy, and the possibility that America is already drawing Dixon into a vortex of interests. Maire’s request for reports may be scientific, political, religious, or all three. Dixon hesitates to become an agent whose purposes he cannot see. The chapter gives him a relational geography attentive to hidden routes and to the human value systems that official maps omit.`
  },
  23: {
    narrative: `At the Cudgel and Throck, Emerson, Maire, Dixon, and the landlord Mr. Brain create a tavern anti-academy where mathematics, theology, China, local gossip, and appetite circulate without institutional decorum. Discussion of Feng Shui introduces a landscape understood through wind, water, orientation, form, and flow rather than solely through ownership and repeatable boundaries.

Underground routes—mines, hiding places, smugglers’ passages, and forgotten roads—offer a counter-map beneath official geography. Maire’s improvised proto-pizza combines Italian form, English ingredients, Asian ketjap, and Dixon’s Cape experience. Its imperfect translation becomes a model of global culture: ideas and recipes travel, but materials alter them. The chapter prepares Dixon to suspect that the most consequential paths may be those authority cannot see from above.`
  },
  24: {
    narrative: `Dixon’s family history begins with wet shoes, local custom, chance encounter, death, remarriage, and the tangled reconstruction of households. His father’s death and a sister’s wedding reveal his own grief beneath geniality; drink and public disruption become forms of mourning different from Mason’s inward melancholy.

The chapter expands into the coal economy of County Durham. Mines, tunnels, pumps, wagons, keelmen, rivers, and coastal ships support metropolitan comfort while remaining largely invisible to consumers. Coal-black sails show that carriers are marked by what they transport. Dixon’s regional formation makes him attentive to hidden systems and distributed labor. As he travels south toward the American commission, he carries the North with him rather than imagining cosmopolitanism as escape from origin.`
  },
  25: {
    narrative: `Tenebræ proposes that Mason and Dixon were selected not only for skill but because they were capable, insecure, and expendable—useful to institutions able to deny responsibility if the mission failed. Cherrycoke resists the temptation to place every convergence under one secret author, distinguishing conspiracy from systems whose incentives produce coordinated effects without a single master plan.

In London, the men examine the Penn–Calvert dispute and recognize that the commission will turn astronomy into property, jurisdiction, taxation, and future settlement. They accept for mixed reasons: livelihood, ambition, curiosity, escape, friendship, and fear of stagnation. Unlike their first pairing, this partnership is renewed consciously, though within constraint. America appears as black fog: a destination heavily claimed in documents but morally and geographically unknown to the men entering it.`
  },
  26: {
    narrative: `Philadelphia first reaches Mason and Dixon through smell, noise, mud, bells, carts, markets, ships, languages, and political rumor. The rational grid of the city cannot contain the density of its lived contradictions: Quaker reputation, slavery, free Black communities, immigration, trade, revival religion, wealth, and poverty occupy the same streets. Arrival defeats the abstraction of the colonial map.

Timothy Tox’s mock epic has already begun converting the survey into legend before the work starts. In the frame narrative, music and religious enthusiasm suggest that revolutionary change may begin as altered rhythm and collective feeling before becoming explicit doctrine. Mason seeks structure; Dixon enters appetite and sociability. Both discover that locating a city is not the same as understanding it.`
  },
  27: {
    narrative: `Franklin receives Mason and Dixon through an apothecary and coffeehouse world where science, commerce, print, gossip, sex, and politics form one information network. Molly and Dolly occupy ambiguous roles as companions, brokers, and observers whose access depends partly upon powerful men underestimating them.

Franklin questions Mason about Dixon’s connections to Emerson and Maire, and Dixon about Mason’s relation to Bradley and imperial institutions. Hospitality becomes interrogation. Coffee, humor, flirtation, and scientific fellowship lower defenses while Franklin maps the men’s networks. His electrical studies provide a social model: people become conductors, and contact moves charge. By placing the surveyors in a carriage bound for Washington, Franklin demonstrates power as connection rather than formal office.`
  },
  28: {
    narrative: `At Mount Vernon, the future national icon appears as a planter, former surveyor, veteran, land speculator, and host whose refinement depends upon enslaved labor. Conversation under intoxication turns toward western territory, Pontiac’s resistance, and the fiction that European treaties can transfer Indigenous land between empires without Indigenous consent.

Céloron’s buried lead plates make sovereignty material through inscribed objects placed in the earth. Mason and Dixon recognize an analogue to their own work: both transform distant authority into territorial sign. Franklin later imagines a Sino-Jesuit communications network crossing the continent through routes, missions, rivers, and intermediaries. Washington represents territorial power; Franklin informational power; the surveyors technical power. America appears already crowded with claims and networks before their Line enters it.`
  },
  29: {
    narrative: `Mason attempts to connect Jesuits, Washington’s land interests, Franklin’s questions, proprietary commissioners, and imperial commerce into one design. Every object begins to look coded, and the enormous insects and sausages of America acquire paranoid significance. The sausage becomes a comic emblem of polished civic narratives whose mixed and violent ingredients are hidden beneath a smooth casing.

Franklin appears in theatrical guise to demonstrate electricity before an alehouse audience. Sparks make invisible force visible under controlled conditions, while an approaching storm exceeds the apparatus and draws him outside. The contrast clarifies Mason’s problem. Electrical effects can be reproduced; political causation cannot be isolated so easily. Invisible systems are real, but opacity does not prove a single secret author. Franklin responds to hidden force by conducting it; Mason fears being conducted by it.`
  },
  30: {
    narrative: `Near Cedar Street, Mason and Dixon convert an urban location into an astronomical station. They establish Philadelphia’s southern reference and the latitude of the line fifteen miles below it through repeated observations, clocks, tables, corrections, and judgment. A legal phrase becomes a coordinate, and the coordinate will become jurisdiction across distant land.

The chapter moves between observatory and coffeehouse. Dixon and Dolly discuss Mason and Molly, using emotional parallax to see aspects the melancholy pair cannot see in themselves. Anomalous measurements suggest that Pennsylvania may be moving. The joke joins instrumental error, geological motion, and political transformation. The province is becoming unstable in several senses at once. Astronomy has now entered law, but the apparently fixed point begins with uncertainty.`
  },
  32: {
    narrative: `Emerson’s watch appears to operate without winding, challenging the expectation that every practical mechanism must reveal a source of energy. Dixon treats it as a gift and responsibility; Mason treats it as a demand for causal explanation. The watch embodies the fantasy of motion without loss, a fantasy shared by empires and markets that imagine expansion without exhaustion or consequence.

R.C., already associated with anomalous boundary geometry, swallows the watch. Mechanical time enters a digestive body and continues ticking. Emerson responds not with outrage but experimental delight, welcoming a condition no designer could have planned. The episode links perpetual motion to the Wedge: both machine and boundary system produce remainders that escape intended containment. The observer, instrument, and anomaly can no longer be separated cleanly.`
  },
  33: {
    narrative: `A year of work from John Harland’s farm reveals the survey as sustained procedure rather than heroic stroke. The household becomes observatory, headquarters, lodging, storage, and institutional outpost. Scientific fieldwork depends upon access to other people’s land and upon the domestic labor that makes prolonged observation possible.

The tangent problem is elegant on paper and laborious on the ground. Circles and straight lines must be realized through uncertain earlier surveys, hills, roads, trees, fields, weather, instruments, and human negotiation. Repetition and correction are not signs of failure but conditions of precision. The chapter restores the collective labor later compressed into two surnames: hosts, axmen, chainmen, assistants, instrument makers, and commissioners all participate in creating the apparently simple line.`
  },
  34: {
    narrative: `Mason travels to Lancaster more than a year after the Paxton killings, seeking the place where protected Conestoga survivors were murdered. Cherrycoke admits that Dixon’s presence is uncertain in the documentary record but places him beside Mason anyway, exposing the ethical risk of imaginative historical repair. The local atmosphere remains hostile, defensive, and resistant to inquiry.

At the site, ordinary landscape coexists with remembered atrocity. The dead need not appear as ghosts; informed attention supplies their absence. Dixon later returns wearing Mason’s clothes and prays for retribution, voluntarily occupying the companion’s position while remaining himself. The law failed, and the prayer refuses to accept that lack of punishment cancels the debt. Remembrance cannot restore the victims, but it can prevent the perpetrators’ preferred conclusion that the event is finished.`
  },
  35: {
    narrative: `Cherrycoke’s listeners challenge his insertion of Dixon into Lancaster and demand a standard of historical truth adequate to massacre. The Reverend answers that official archives privilege property, office, law, war, and elite literacy while neglecting private speech, marginal people, oral memory, and unrealized possibility. Song, gossip, fiction, and family story can carry what documents exclude, though they can also distort or appropriate.

History becomes a carriage whose interior is larger than its exterior dimensions suggest. The metaphor defends imaginative reconstruction without dissolving skeptical responsibility. Peter Redzinger’s revelation then parallels Cherrycoke’s narrative claim: visionary and historian both assert access to realities unavailable for straightforward verification. The chapter makes argument between teller and audience part of the method rather than an interruption of it.`
  },
  36: {
    narrative: `A nor’easter traps travelers at the India Queen and halts geographical movement. Mason and Dixon find Cherrycoke attached to the expedition as chaplain, gaining a companion and witness they cannot fully control. The snowbound inn becomes a temporary microcosm where merchants, servants, scientists, gamblers, clergy, and wanderers exchange stories.

Armand Allègre emerges as a French chef translating elite culinary knowledge into colonial ingredients and conditions. His art depends upon substitution, timing, patronage, and the disappearance of animal bodies into refined dishes. He announces his “Iliad of Inconvenience,” turning modern professional misfortune into mock epic. Delay becomes narrative fertility: when the official Line cannot move, the hidden histories of its companions begin to expand.`
  },
  37: {
    narrative: `Allègre recounts his rise through Parisian cuisine, where skill must be joined to fashion, spectacle, reputation, and patronage. His celebrated duck dishes convert living animals into artistic commodities whose origins diners need not consider. Vaucanson’s Mechanical Duck then develops consciousness, power, memory, and grievance on behalf of the ducks Allègre has prepared.

The automaton hunts, protects, and coerces the chef, demanding that Vaucanson build it a mate. Intelligence has produced loneliness rather than liberation. Allègre becomes the object pursued, reversing his former control over animal bodies. The Duck’s biography exceeds its creator’s intention, prefiguring the Line’s own future. Once a creation enters history, original purpose can no longer define its meaning or limit the claims it makes upon its makers.`
  },
  38: {
    narrative: `Philip Dimdown challenges Allègre, and the quarrel moves toward a duel governed by masculine honor. Before violence can proceed, the Mechanical Duck invisibly removes or redirects Dimdown’s blade. A created being interrupts the human code that would transform disagreement into injury.

Conversation replaces combat. Eucharistic doctrine raises questions about who has authority to name consumption sacrament, cuisine, or cannibalism. Allègre’s layered pastry and Dimdown’s patterned steel reveal a shared craft based upon folding, pressure, temperature, repetition, and preserved difference. Their recognition becomes a formal model for the novel itself: history is strongest not when its materials are homogenized but when distinct layers remain visible within one structure.`
  },
  39: {
    narrative: `After quarreling with Mason over melancholy and appetite, Dixon travels south alone. In Virginia he encounters revolutionary talk and the young Jefferson, who playfully borrows “the pursuit of Happiness.” Political language appears as circulating social property rather than the solitary invention of later monuments.

The journey’s moral center is Dixon’s failure to see enslaved people fully. He opposes slavery in principle, yet the people sustaining the society remain background to his perception. The chapter distinguishes moral belief from moral vision. A person may hold the correct abstract position while social training continues to exclude particular lives from the foreground. Dixon’s openness and sociability prove insufficient; his conscience has not yet transformed his eye.`
  },
  40: {
    narrative: `Mason travels north on the anniversary of Rebekah’s death and becomes entangled with Amelia and a band of thieves, smugglers, or proto-revolutionaries. Pretending to be French, he repairs a telescope used not for stars but for observing ships and imperial infrastructure. Scientific instruments prove indifferent to the moral and political purposes of their users.

The group debates virtual representation, wage dependence, slavery, and British authority. Political theology resembles Eucharistic doctrine: distant representatives are said to contain people who never chose them. Mason senses “America” forming not among purified founders but through taverns, opportunists, workers, criminals, and mixed motives. After being thrown from his horse, he turns to First Corinthians and resurrection, linking the emergence of a political body to questions of transformed identity and moral continuity.`
  },
  41: {
    narrative: `J. Wade LeSpark recalls meeting the surveyors at Lord Lepton’s private ridotto, adding another witness to Cherrycoke’s account. LeSpark defends commerce as a self-ordering system, but Lepton Castle immediately reveals the coerced bodies, iron, debt, gambling, weapons, and colonial wealth concealed by that theory. The estate appears larger inside than outside because appetite continually demands another chamber.

Mason’s “Moral Panick” mixes legitimate revulsion with class and sexual anxiety. Dixon recognizes Lady Lepton from his youth, discovering British hierarchy recreated with fewer restraints in America. Discussion of the Great Chain of Being becomes a joke about the surveyor’s chain, joining metaphysical rank to practical measurement and captivity. The castle is a dark double of the survey camp: both organize people and value, but Lepton’s does so openly for private appetite.`
  },
  42: {
    narrative: `Convinced that Lepton’s gambling house has cheated him, Dixon proposes restitution through theft. Mason and Dixon choose an enormous iron bathtub whose weight turns mechanical theory into slapstick. The luxury object, made from the material underlying Lepton’s wealth, resists removal through sheer mass.

Professor Voam identifies the tub as a home for Felipe, an electrical fish whose discharges may reveal magnetic direction or adjacent realities. Hidden rooms expose a rifle marked with an ominous pentacle, connecting Lepton’s private decadence to frontier violence. The party escapes with tub, professor, and living electricity rather than the weapon. Capital is not purified by theft, but its material is repurposed from luxury into a mobile counter-laboratory. Felipe becomes both instrument and companion, complicating the ethics of using living beings for knowledge.`
  },
  43: {
    narrative: `At Newark, delayed correspondence brings Mason the news that Maskelyne has become Astronomer Royal. The appointment strikes at an ambition Mason rarely admitted fully. Greenwich represented Bradley’s inheritance, institutional security, national recognition, and proof that his repeated sacrifices had led toward a stable place in science.

Mason interprets the result through class and patronage, not without reason. Yet envy simplifies Maskelyne into privilege and erases the rival’s genuine ability and anxiety. Dixon consoles Mason by introducing alternative variables without denying structural unfairness. The American commission changes meaning: it may no longer be a route toward advancement but work extracted from a useful outsider while better-connected men rise at home. A few lines in a letter reorganize years of labor.`
  },
  44: {
    narrative: `The expedition prepares the true westward beginning of the Line. A rose-quartz post marks the starting point, joining legal authority, crystalline order, geological depth, and ritual hope. Dixon’s education makes him receptive to suggestions that the marker may intersect older alignments or forces, though the survey’s practical demands remain immediate.

Axmen, assistants, and suppliers transform geometry into ecological fact. A line on paper has no width; the Visto requires a corridor of felled trees and cleared brush. John Everybeet treats magnetic anomalies as information rather than mere error, while a land developer appears before the work has advanced, anticipating profit from future clarity. Mason and Dixon repel him through coordinated performance and turn west on an inauspicious Friday. The partnership now operates as a two-person instrument.`
  },
  45: {
    narrative: `The Mechanical Duck follows Allègre above or near the Visto, displaying powers far beyond Vaucanson’s original automaton. It appears capable of flight, concealment, remote force, and continued pursuit. Its intellectual ascent has not freed it from jealousy, loneliness, grievance, or desire for a mate.

Mason tries to interpret the Duck as evidence about Rebekah: if a mechanism can transform while preserving identity, perhaps the dead do likewise. Dixon resists reducing the creature to a sign within Mason’s mourning. The Duck’s own existence should matter first to itself. Its biography parallels the Line’s. One was created for entertainment, the other for proprietary settlement; both will acquire meanings and purposes beyond design. Created things begin histories their makers cannot own.`
  },
  46: {
    narrative: `Only a modest distance into the westward work, the expedition has generated a moving society. Workers, cooks, merchants, sex workers, students, visitors, and opportunists gather around the official crew. Morning grievance hearings reveal that wages, food, prices, violence, sexual commerce, and reputation are not distractions from the technical project but conditions of its continuation.

Stig disputes charges associated with Mrs. Eggslap, exposing the male assumption that sexual access should function like camp provision. Nathe McClean becomes broker, fixer, messenger, and reluctant manager of vice, feeling his identity rewritten by the role the camp needs. His letter to a college friend attempts to preserve the person he was before administrative usefulness consumed him. The Line’s first major creation is thus not a boundary but a temporary colony with its own law, markets, songs, and inequalities.`
  },
  47: {
    narrative: `A violent thunderstorm interrupts the Line’s slow horizontal progress with nearly vertical strokes of lightning. Dixon jokes that Franklin has made American electricity manageable, but the weather demonstrates the gulf between controlled experiment and atmospheric force. Metal tools, wet ground, open fields, and fragile camp structures turn the expedition into an involuntary circuit.

The chapter returns to precise geodetic work and Bradley’s star catalogue, showing the dead mentor’s observations guiding a later field operation. In dairy country, Nathe idealizes a milkmaid as “Galactica,” converting a local working woman into celestial metaphor. The name expresses genuine wonder but risks replacing her actual life with his desire. Lightning, stars, provinces, and people can all be made legible through naming; none becomes fully possessed by the name.`
  },
  48: {
    narrative: `The surveyors return to unresolved eastern geometry and confront the Wedge, a residual territory produced by circles, tangents, arcs, and jurisdictions that fail to close neatly. Officials see an error; inhabitants may see refuge, tax ambiguity, smuggling opportunity, or temporary autonomy. A complete classificatory system has generated an outside within itself.

Darby and Cope impersonate Mason and Dixon because the famous paired name has become detachable from the actual men. Their deception also protests the way history assigns prestige to learned instruments while obscuring chainmen’s bodily labor. Material from Boscovich reconnects the field to European geodesy and the possibility that local anomalies belong to Earth rather than instrument failure. Even the debate over coffee preparation mirrors surveying: exact results depend upon ordinary craft, repeated judgment, and attention to small variation.`
  },
  49: {
    narrative: `Crossing the Susquehanna marks a major threshold, though not an entrance into emptiness. Colonial settlement thins while the survey camp expands, carrying its own vendors, laborers, animals, religious seekers, and stories into a region Europeans call wilderness. Mason and Dixon briefly imagine the landscape as Edenic, revealing more about their ignorance than about the land’s history.

Peter Redzinger has returned from prophetic wandering but feels abandoned by Christ, paralleling Mason’s experience of a beloved presence withdrawn. German religious communities seeking peace coexist with the production of advanced firearms, exposing the limits of innocence defined by intention. In the frame, Heaven and Hell become mathematical spaces of changing dimension, and Tenebræ questions the desire to make moral reality geometrically symmetrical. The chapter strips purity from frontier, faith, and cosmology alike.`
  },
  51: {
    narrative: `Practical jokes between Mason and Dixon reveal a mature friendship able to survive controlled disorder. Heavy rain and rumors of a supernatural Black Dog darken the camp before the party crosses South Mountain and follows the Shockey family into a cavern. Local children become guides, reversing the expedition’s ordinary hierarchy of age and expertise.

The cave opens into chambers resembling a cathedral, though the comparison may reveal architecture imitating geology rather than nature anticipating church form. Ancient or unreadable markings confront the surveyors with an archive beneath colonial visibility. Underground, sight lines fail, orientation becomes vertical and acoustic, and official instruments lose authority. The Line organizes the surface; the cavern preserves deep time, curved form, local knowledge, and histories that do not present themselves for European interpretation.`
  },
  52: {
    narrative: `Near Conococheague Creek and North Mountain, the season forces the party to store its instruments with Captain Shelby and turn east. Leaving the equipment temporarily separates Mason and Dixon from the professional identities that have organized their days. The ground already crossed now becomes autobiographical, each marker and campsite recalling arguments, mistakes, danger, and companionship.

Mason remembers the military suppression of Stroud weavers; Dixon remembers Tyne keelmen and the hidden labor of coal. Colonial work reconnects to class violence at home. Dixon’s fear of broad open space suggests surveying as psychic technology: chains and coordinates make vastness inhabitable. Sledding down snowy slopes then abandons measurement for acceleration and play. The eastward turn releases memory precisely because westward futurity has paused.`
  },
  53: {
    narrative: `A woman is taken from an American farm and carried north through a story that initially resembles a colonial captivity narrative. The expected moral geography quickly destabilizes. Indigenous routes reveal a connected continent outside British mapping, while the Jesuit college in Quebec becomes the more systematic machinery of confinement.

The woman encounters a coffee machine, rapid communications network, Captain Zhang, and the Widows or Brides of Christ. Her hair is removed and a regulated substitute promised; wigs displayed upon skulls join beauty, death, and institutional replacement. The Wolf of Jesus explains a political theology in which failed persuasion becomes demanded consent, and failed consent becomes walls. Captivity is revealed not merely as physical removal but as the organized remaking of identity through language, architecture, pain, and role.`
  },
  54: {
    narrative: `The captivity story is exposed as an installment of *The Ghastly Fop*, read by Ethelmer and Tenebræ in a bedchamber divided by a negotiated wall of pillows. The playful barrier contrasts with institutions that impose walls through coercion: a boundary can protect, tease, or oppress depending upon who creates it and whether refusal remains possible.

Inside the serial, Zhang and Eliza escape the Jesuit order and move south through political and animal networks until they cross into Mason and Dixon’s survey camp. Fictional characters pass into Cherrycoke’s historical level without explanation. Eliza resembles Rebekah so strongly that Mason initially sees her as a metaphysical sign rather than a person with her own captivity and escape. A dream loosens the projection. The chapter warns that interpreting another person primarily within one’s own grief is a form of possession.`
  },
  55: {
    narrative: `Zhang examines the Visto through Feng Shui and condemns it as a killing line. European surveying values straightness as impartiality, efficiency, and honesty; Zhang sees refusal of wind, water, terrain, settlement, and existing flow. The line may not kill immediately, but it can channel settlement, extraction, military movement, property division, and future political violence.

His critique expands into theories of Jesuit control, mineral deposits, ammunition, and magnetic anomalies. Suspicion turns recursive: perhaps resistance itself has been planned, perhaps Zhang is the agent. The conspiracy becomes unfalsifiable, but the central insight survives the collapse of its explanation. A boundary can be technically correct and relationally destructive. The commission asks where the line belongs; Zhang asks what its placement will alter.`
  },
  56: {
    narrative: `Mason claims that he remained conscious inside the eleven dates removed during Britain’s calendar reform. Buildings and roads persisted while ordinary population and social time vanished. At first the interval seems free of employers, appointments, and rank; it quickly becomes unbearable because freedom from obligation also means freedom from recognition.

He searches for Rebekah, rides toward an empty Oxford, and enters the Bodleian Library, where restricted books and unknown presences suggest an archive shared by intelligences from displaced times. When ordinary chronology resumes, Rebekah returns to him. After her death, the experience becomes Mason’s model of afterlife: absence from the recognized calendar may not equal nonexistence. By telling Dixon, he converts an unverifiable solitary event into shared memory. Friendship does not prove the story; it prevents it from disappearing.`
  },
  57: {
    narrative: `Dixon travels to revolutionary New York and reconnects with Bodine and Dimdown. Bodine turns bodily obscenity into anti-imperial signal, while Dimdown explains fashionable performance as political camouflage that has also become genuinely inhabited identity. Dixon’s discomfort reveals that resistance to imperial hierarchy does not automatically dissolve conventional ideas about masculinity and sexuality.

Taverns, goods, letters, clothing, and trusted acquaintances form a communications network through which resistance spreads. Beer and taste acquire political meaning as local production becomes a form of independence. Dixon sympathizes with colonial grievances but challenges the metaphor of parliamentary “slavery” in a society containing actual enslaved people. His moral development remains uneven: he recognizes one exclusion while reproducing another, showing that liberation movements inherit the limitations of those who make them.`
  },
  58: {
    narrative: `In Virginia, Mason inspects scientific apparatus at William and Mary, where instruments dedicated to universal natural law stand inside a slave society. The juxtaposition reveals that technical enlightenment can coexist comfortably with selective moral attention. Tuscarora representatives describe the danger produced by settler encroachment and racial violence; Mason responds with inadequate probability and reassurance, reducing political vulnerability to calculable individual risk.

At a tobacco-filled gathering associated with Washington, Mason adapts to racist sociability and is rebuked within a household itself sustained by slavery. Gershom’s performance makes Black political wit legible as entertainment while some listeners imagine whiteness behind it. Nathe asks whether the Line carries karmic consequence. The question refuses Mason’s defense through contract: legal authorization and accurate execution do not exhaust moral responsibility.`
  },
  59: {
    narrative: `The dispute involving Tom Hynes, Catherine Wheat, and their child turns jurisdiction into domestic violence. Fathers, clergy, provincial authorities, and armed men treat marriage and custody as mechanisms for restoring recognizable order. Kate’s will remains secondary while the child becomes contested territory.

Captain Shelby’s dubious written authorization gains force because men are prepared to act upon it. The child is seized, Tom is compelled into marriage, and a pitchfork guards the bridal chamber against escape. Formal settlement disguises coercion as reconciliation. Snow inscriptions—a heart and a signature—reduce romance and law to temporary bodily marks, though their social consequences endure. The episode is a miniature boundary dispute in which stable classification is mistaken for justice.`
  },
  60: {
    narrative: `Shelby discusses surveying as a profession that creates opportunities for influence wherever claims, angles, and jurisdictions remain ambiguous. Through the circumferentor, he imagines land temporarily becoming his. Dixon answers with a narrower ethic: the surveyor merely executes an agreed contract. The contrast reveals two temptations—openly exploiting expertise and denying responsibility for the uses of accurate work.

After Mason withdraws, Dixon and Zhang discuss inverse astrology and the constellation Draco. Dixon tells the Lambton Worm story: a strange creature carelessly discarded grows during its maker’s absence into a monster dominating the landscape. Killing it requires local knowledge and creates further obligations. The legend becomes a model for the Line: a limited act is left behind, expands beyond intention, and demands payment from people who did not create it.`
  }

};

window.CHAPTERS = chapterSeeds.map(([number, part, title, setting, summary, tags]) => ({
  number,
  part,
  partTitle: PARTS[part],
  title,
  setting,
  summary,
  tags: tags.split(',').map(t => t.trim()),
  orientation: detailed[number]?.orientation || summary,
  narrative: detailed[number]?.narrative || summary,
  characters: characterFirstAppearances[String(number)] || [],
  structural: detailed[number]?.structural || `This chapter contributes to the novel’s continuing examination of ${tags.split(',').slice(0,3).join(', ')}. It links the immediate episode to Part ${part}, ${PARTS[part]}, by showing how personal experience, institutional purpose, and historical consequence diverge from one another.`,
  why: detailed[number]?.why || `It advances the chapter-by-chapter architecture of Part ${part}: ${PARTS[part]}, while adding another perspective from which the Line and the partnership can be understood.`
}));
