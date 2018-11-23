var data = {

	"entites" : [
	{
				"nom"  : "mat_parquet",
				"type" : "texLambert",
				"params" : {
					"texture" : "assets/textures/sols_plafonds/parquet1.jpg",
					"nx" : 5,
					"ny" : 5
				}
			},
	{
				"nom"  : "mat_brique_10",
				"type" : "texLambert",
				"params" : {
					"texture" : "assets/textures/murs/bricks3.jpg",
					"nx" : 30,
					"ny" : 5
				}

			},
	{
				"nom"  : "escalier",
				"type" : "texLambert",
				"params" : {
					"texture" : "assets/textures/sols_plafonds/Grass.jpg",
					"nx" : 1,
					"ny" : 1
				}
			},
	{
				"nom"  : "texPanneau1",
				"type" : "texLambert",
				"params" : {
					"texture" : "assets/dessin.png",
					"nx" : 1,
					"ny" : 1
				}

			},
	{
				"nom"  : "solPlafondAscenseur",
				"type" : "texLambert",
				"params" : {
					"texture" : "assets/textures/sols_plafonds/roofpainting.jpg",
					"nx" : 1,
					"ny" : 1
				}

			},
	{
				"nom"  : "murAscenseur",
				"type" : "texLambert",
				"params" : {
					"texture" : "assets/textures/sols_plafonds/ascenseur.jpg",
					"nx" : 1,
					"ny" : 1
				}

			},
	{
				"nom"  : "mat_brique_20",
				"type" : "texLambert",
				"params" : {
					"texture" : "assets/textures/murs/bricks3.jpg",
					"nx" : 5,
					"ny" : 5
				}

			},
	{
				"nom"  : "texBoite",
				"type" : "texLambert",
				"params" : {
					"texture" : "assets/textures/sols_plafonds/sol.jpg",
					"nx" : 4,
					"ny" : 4
				}

			},
	{
				"nom" : "panneau1",
				"type": "cloison",
				"params" : {
					"largeur" : 2,
					"hauteur" : 1.5,
					"epaisseur" : 0.1,
					"materiau" : "texPanneau1"
				}
			},
	{
				"nom"  : "sol",
				"type" : "sol",
				"params" : {
					"largeur"    : 30,
					"profondeur" : 30,
					"materiau"   : "mat_parquet"
				}
			},
	{
				"nom"  : "sol2",
				"type" : "sol",
				"params" : {
					"largeur"    : 30,
					"profondeur" : 15,
					"materiau"   : "mat_parquet"
				}
			},
	{
				"nom"  : "solAsBas",
				"type" : "sol",
				"params" : {
					"largeur"    : 2,
					"profondeur" : 2,
					"materiau"   : "solPlafondAscenseur"
				}
			},
	{
				"nom"  : "solAsMid",
				"type" : "sol",
				"params" : {
					"largeur"    : 2,
					"profondeur" : 2,
					"materiau"   : "solPlafondAscenseur"
				}
			},
	{
				"nom"  : "solAsHaut",
				"type" : "sol",
				"params" : {
					"largeur"    : 2,
					"profondeur" : 2,
					"materiau"   : "solPlafondAscenseur"
				}
			},
	{
				"nom" : "cloisonAsN",
				"type": "cloison",
				"params" : {
					"largeur" : 2,
					"hauteur" : 5,
					"epaisseur" : 0.1,
					"materiau" : "murAscenseur"
				}
			},
	{
				"nom" : "cloisonAsW",
				"type": "cloison",
				"params" : {
					"largeur" : 2,
					"hauteur" : 10,
					"epaisseur" : 0.1,
					"materiau" : "murAscenseur"
				}
			},
	{
				"nom" : "cloisonAsE",
				"type": "cloison",
				"params" : {
					"largeur" : 2,
					"hauteur" : 10,
					"epaisseur" : 0.1,
					"materiau" : "murAscenseur"
				}
			},
	{
				"nom" : "cloisonAsS",
				"type": "cloison",
				"params" : {
					"largeur" : 2,
					"hauteur" : 5,
					"epaisseur" : 0.1,
					"materiau" : "murAscenseur"
				}
			},

	{
				"nom" : "cloisonN",
				"type": "cloison",
				"params" : {
					"largeur" : 30,
					"hauteur" : 10,
					"epaisseur" : 0.1,
					"materiau" : "mat_brique_10"
				}
			},
	{
				"nom" : "cloisonW",
				"type": "cloison",
				"params" : {
					"largeur" : 30,
					"hauteur" : 10,
					"epaisseur" : 0.1,
					"materiau" : "mat_brique_10"
				}
			},
	{
				"nom" : "cloisonE",
				"type": "cloison",
				"params" : {
					"largeur" : 30,
					"hauteur" : 10,
					"epaisseur" : 0.1,
					"materiau" : "mat_brique_10"
				}
			},
	{
				"nom" : "cloisonS",
				"type": "cloison",
				"params" : {
					"largeur" : 30,
					"hauteur" : 10,
					"epaisseur" : 0.1,
					"materiau" : "mat_brique_10"
				}
			},
	{
				"nom" : "cloisonMid1",
				"type": "cloison",
				"params" : {
					"largeur" : 5,
					"hauteur" : 5,
					"epaisseur" : 0.1,
					"materiau" : "mat_brique_20"
				}
			},
	{
				"nom" : "cloisonMid2",
				"type": "cloison",
				"params" : {
					"largeur" : 5,
					"hauteur" : 5,
					"epaisseur" : 0.1,
					"materiau" : "mat_brique_20"
				}
			},
	{
				"nom" : "cloisonMid3",
				"type": "cloison",
				"params" : {
					"largeur" : 5,
					"hauteur" : 5,
					"epaisseur" : 0.1,
					"materiau" : "mat_brique_20"
				}
			},
	{
				"nom" : "cloisonMid4",
				"type": "cloison",
				"params" : {
					"largeur" : 5,
					"hauteur" : 5,
					"epaisseur" : 0.1,
					"materiau" : "mat_brique_20"
				}
			},
	{
				"nom" : "cloisonSalle1",
				"type": "cloison",
				"params" : {
					"largeur" : 15,
					"hauteur" : 5,
					"epaisseur" : 0.1,
					"materiau" : "mat_brique_10"
				}
			},
	{
				"nom" : "cloisonSalle2",
				"type": "cloison",
				"params" : {
					"largeur" : 15,
					"hauteur" : 5,
					"epaisseur" : 0.1,
					"materiau" : "mat_brique_10"
				}
			},
	{
				"nom" : "poster01",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/textures/posters/brest0001.jpg"
					}
			},
	{
				"nom" : "poster02",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/brest0002.jpg"
					}
			},
	{
				"nom" : "poster03",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/brest0003.jpg"
					}
			},
	{
				"nom" : "poster04",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/brest0004.jpg"
					}
			},
	{
				"nom" : "poster05",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/Caserne2emeDepot.jpg"
					}
			},
	{
				"nom" : "poster06",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/Caserne2emeDepot1.jpg"
					}
			},
	{
				"nom" : "poster07",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/CaserneduZemeRIC.jpg"
					}
			},
	{
				"nom" : "poster08",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/corps_de_garde_du_Bouguen.jpg"
					}
			},
	{
				"nom" : "poster09",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/CorveeDesVivresAuPetitPont.jpg"
					}
			},
	{
				"nom" : "poster10",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/coursDAjot.jpg"
					}
			},
	{
				"nom" : "poster11",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/coursDAjot1.jpg"
					}
			},
	{
				"nom" : "poster12",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/coursDAjot2.jpg"
					}
			},
	{
				"nom" : "poster13",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/coursDAjot3.jpg"
					}
			},
	{
				"nom" : "poster14",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/coursDAjot4.jpg"
					}
			},
	{
				"nom" : "poster15",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/CoursDajot5.jpg"
					}
			},
	{
				"nom" : "poster16",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/DescenteVersLaRade.jpg"
					}
			},
	{
				"nom" : "poster17",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/EcoleDesMecaniciens.jpg"
					}
			},
	{
				"nom" : "poster18",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/EcoleDesMecaniciens1.jpg"
					}
			},
	{
				"nom" : "poster19",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/EgliseSaintLouis1.jpg"
					}
			},
	{
				"nom" : "poster20",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/EgliseSaintLouis2.jpg"
					}
			},
	{
				"nom" : "poster21",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/EgliseSaintLouisEtLeMarche.jpg"
					}
			},
	{
				"nom" : "poster22",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/EntreeRueDeParis.jpg"
					}
			},
	{
				"nom" : "poster23",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/FortDuChateauEtLeParcAuDuc.jpg"
					}
			},
	{
				"nom" : "poster24",
				"type" : "poster",
				"params" : {
					"largeur" : 2.5,
					"hauteur" : 2,
					"url"     : "assets/brest0/FossesDuChateau.jpg"
					}
			},
	{
				"nom" : "boite1",
				"type": "boite",
				"params" : {
					"largeur" : 4,
					"hauteur" : 4,
					"epaisseur" : 2,
					"materiau" : "texBoite"
				}
			},
	{
				"nom" : "boite2",
				"type": "boite",
				"params" : {
					"largeur" : 4,
					"hauteur" : 4,
					"epaisseur" : 2,
					"materiau" : "texBoite"
				}
			},
	/*{
				"nom" : "escalier1",
				"type": "boite",
				"params" : {
					"largeur" : 2,
					"hauteur" : 1,
					"epaisseur" : 0.5,
					"materiau" : "escalier"
				}
			},
	{
				"nom" : "escalier2",
				"type": "boite",
				"params" : {
					"largeur" : 2,
					"hauteur" : 1,
					"epaisseur" : 0.5,
					"materiau" : "escalier"
				}
			},
	{
				"nom" : "escalier3",
				"type": "boite",
				"params" : {
					"largeur" : 2,
					"hauteur" : 1,
					"epaisseur" : 0.5,
					"materiau" : "escalier"
				}
			},
	{
				"nom" : "escalier4",
				"type": "boite",
				"params" : {
					"largeur" : 2,
					"hauteur" : 1,
					"epaisseur" : 0.5,
					"materiau" : "escalier"
				}
			},
	{
				"nom" : "escalier5",
				"type": "boite",
				"params" : {
					"largeur" : 2,
					"hauteur" : 1,
					"epaisseur" : 0.5,
					"materiau" : "escalier"
				}
			},
	{
				"nom" : "lum1",
				"type": "lumiere",
				"params" : {
					"x" : 2,
					"y" : 1,
					"z" : 0.5,
					"couleur" : "0xffffff"
					"intensite" : 2
					"portee" : 30
					"attenuation" : 5
				}
			},*/

	],
	"fun"     : [
	{"type":"lierScene", "objet":"sol"},
	{"type":"lierScene", "objet":"sol2"},
	{"type":"lierScene", "objet":"cloisonN"},
	{"type":"lierScene", "objet":"cloisonW"},
	{"type":"lierScene", "objet":"cloisonE"},
	{"type":"lierScene", "objet":"cloisonS"},
	{"type":"lierScene", "objet":"cloisonMid1"},
	{"type":"lierScene", "objet":"cloisonMid2"},
	{"type":"lierScene", "objet":"cloisonMid3"},
	{"type":"lierScene", "objet":"cloisonMid4"},
	{"type":"lierScene", "objet":"cloisonSalle1"},
	{"type":"lierScene", "objet":"cloisonSalle2"},
	{"type":"lierScene", "objet":"poster01"},
	{"type":"lierScene", "objet":"poster02"},
	{"type":"lierScene", "objet":"poster03"},
	{"type":"lierScene", "objet":"poster04"},
	{"type":"lierScene", "objet":"poster05"},
	{"type":"lierScene", "objet":"poster06"},
	{"type":"lierScene", "objet":"poster07"},
	{"type":"lierScene", "objet":"poster08"},
	{"type":"lierScene", "objet":"poster09"},
	{"type":"lierScene", "objet":"poster10"},
	{"type":"lierScene", "objet":"poster11"},
	{"type":"lierScene", "objet":"poster12"},
	{"type":"lierScene", "objet":"poster13"},
	{"type":"lierScene", "objet":"poster14"},
	{"type":"lierScene", "objet":"poster15"},
	{"type":"lierScene", "objet":"poster16"},
	{"type":"lierScene", "objet":"poster17"},
	{"type":"lierScene", "objet":"poster18"},
	{"type":"lierScene", "objet":"poster19"},
	{"type":"lierScene", "objet":"poster20"},
	{"type":"lierScene", "objet":"poster21"},
	{"type":"lierScene", "objet":"poster22"},
	{"type":"lierScene", "objet":"poster23"},
	{"type":"lierScene", "objet":"poster24"},
	{"type":"lierScene", "objet":"boite1"},
	{"type":"lierScene", "objet":"boite2"},
	{"type":"lierScene", "objet":"solAsBas"},
	{"type":"lierScene", "objet":"solAsMid"},
	{"type":"lierScene", "objet":"solAsHaut"},
	{"type":"lierScene", "objet":"cloisonAsN"},
	{"type":"lierScene", "objet":"cloisonAsW"},
	{"type":"lierScene", "objet":"cloisonAsE"},
	{"type":"lierScene", "objet":"cloisonAsS"},
	{"type":"lierScene", "objet":"panneau1"},

	{"type":"placer","objet":"panneau1","params":{"x":10,"y":1.5,"z":7.5,"angle":0}},
	{"type":"placer","objet":"cloisonAsN","params":{"x":5,"y":0,"z":-0.1,"angle":0}},
	{"type":"placer","objet":"cloisonAsW","params":{"x":4,"y":0,"z":-1.1,"angle":Math.PI/2}},
	{"type":"placer","objet":"cloisonAsE","params":{"x":6,"y":0,"z":-1.1,"angle":Math.PI/2}},
	{"type":"placer","objet":"cloisonAsS","params":{"x":5,"y":5,"z":-2.1,"angle":0}},
	{"type":"placer","objet":"solAsBas","params":{"x":5,"y":0.01,"z":-1.1,"angle":0}},
	{"type":"placer","objet":"solAsMid","params":{"x":5,"y":5,"z":-1.1,"angle":0}},
	{"type":"placer","objet":"solAsHaut","params":{"x":5,"y":10,"z":-1.1,"angle":0}},
	{"type":"placer","objet":"cloisonN","params":{"x":0,"y":0,"z":-15,"angle":0}},
	{"type":"placer","objet":"cloisonW","params":{"x":-15,"y":0,"z":0,"angle":Math.PI/2}},
	{"type":"placer","objet":"cloisonE","params":{"x":0,"y":0,"z":15,"angle":0}},
	{"type":"placer","objet":"cloisonS","params":{"x":15,"y":0,"z":0,"angle":Math.PI/2}},
	{"type":"placer","objet":"cloisonMid1","params":{"x":-15,"y":0,"z":0,"angle":0}},
	{"type":"placer","objet":"cloisonMid2","params":{"x":-5,"y":0,"z":0,"angle":0}},
	{"type":"placer","objet":"cloisonMid3","params":{"x":5,"y":0,"z":0,"angle":0}},
	{"type":"placer","objet":"cloisonMid4","params":{"x":15,"y":0,"z":0,"angle":0}},
	{"type":"placer","objet":"cloisonSalle1","params":{"x":5,"y":0,"z":7.5,"angle":Math.PI/2}},
	{"type":"placer","objet":"cloisonSalle2","params":{"x":-5,"y":0,"z":7.5,"angle":Math.PI/2}},
	{"type":"placer","objet":"sol2","params":{"x":0,"y":5,"z":7.5,"angle":0}},
	{"type":"placer","objet":"poster01","params":{"x":-12.5,"y":3,"z":14.9,"angle":Math.PI}},
	{"type":"placer","objet":"poster02","params":{"x":-7.5,"y":3,"z":14.9,"angle":Math.PI}},
	{"type":"placer","objet":"poster03","params":{"x":-14.9,"y":3,"z":12.5,"angle":Math.PI/2}},
	{"type":"placer","objet":"poster04","params":{"x":-14.9,"y":3,"z":7.5,"angle":Math.PI/2}},
	{"type":"placer","objet":"poster05","params":{"x":-14.9,"y":3,"z":2.5,"angle":Math.PI/2}},
	{"type":"placer","objet":"poster06","params":{"x":-5.1,"y":3,"z":12.5,"angle":-Math.PI/2}},
	{"type":"placer","objet":"poster07","params":{"x":-5.1,"y":3,"z":7.5,"angle":-Math.PI/2}},
	{"type":"placer","objet":"poster08","params":{"x":-5.1,"y":3,"z":2.5,"angle":-Math.PI/2}},
	{"type":"placer","objet":"poster09","params":{"x":-2.5,"y":3,"z":14.9,"angle":Math.PI}},
	{"type":"placer","objet":"poster10","params":{"x":2.5,"y":3,"z":14.9,"angle":Math.PI}},
	{"type":"placer","objet":"poster11","params":{"x":-4.9,"y":3,"z":12.5,"angle":Math.PI/2}},
	{"type":"placer","objet":"poster12","params":{"x":-4.9,"y":3,"z":7.5,"angle":Math.PI/2}},
	{"type":"placer","objet":"poster13","params":{"x":-4.9,"y":3,"z":2.5,"angle":Math.PI/2}},
	{"type":"placer","objet":"poster14","params":{"x":4.9,"y":3,"z":12.5,"angle":-Math.PI/2}},
	{"type":"placer","objet":"poster15","params":{"x":4.9,"y":3,"z":7.5,"angle":-Math.PI/2}},
	{"type":"placer","objet":"poster16","params":{"x":4.9,"y":3,"z":2.5,"angle":-Math.PI/2}},
	{"type":"placer","objet":"poster17","params":{"x":12.5,"y":3,"z":14.9,"angle":Math.PI}},
	{"type":"placer","objet":"poster18","params":{"x":7.5,"y":3,"z":14.9,"angle":Math.PI}},
	{"type":"placer","objet":"poster19","params":{"x":14.9,"y":3,"z":12.5,"angle":-Math.PI/2}},
	{"type":"placer","objet":"poster20","params":{"x":14.9,"y":3,"z":7.5,"angle":-Math.PI/2}},
	{"type":"placer","objet":"poster21","params":{"x":14.9,"y":3,"z":2.5,"angle":-Math.PI/2}},
	{"type":"placer","objet":"poster22","params":{"x":5.1,"y":3,"z":12.5,"angle":Math.PI/2}},
	{"type":"placer","objet":"poster23","params":{"x":5.1,"y":3,"z":7.5,"angle":Math.PI/2}},
	{"type":"placer","objet":"poster24","params":{"x":5.1,"y":3,"z":2.5,"angle":Math.PI/2}},
	{"type":"placer","objet":"boite1","params":{"x":7.5,"y":0,"z":-7.5,"angle":0}},
	{"type":"placer","objet":"boite2","params":{"x":-7.5,"y":0,"z":-7.5,"angle":Math.PI/2}},
	]
};

/*
var data = {

	"entites" : [
			{
				"nom"  : "mat_rouge",
				"type" : "lambert",
				"params" : {
					"couleur" : 0xff0000
				}
			},
			{
				"nom"  : "mat_parquet",
				"type" : "texLambert",
				"params" : {
					"texture" : "assets/textures/sols_plafonds/parquet1.jpg",
					"nx" : 10,
					"ny" : 10
				}
			},
			{
				"nom"  : "mat_dante",
				"type" : "texLambert",
				"params" : {
					"texture" : "assets/textures/murs/dante.jpg",
					"nx" : 1,
					"ny" : 1
				}

			},
			{
				"nom"  : "mat_brique_10",
				"type" : "texLambert",
				"params" : {
					"texture" : "assets/textures/murs/bricks3.jpg",
					"nx" : 20,
					"ny" : 5
				}

			},
			{
				"nom" : "cloison01",
				"type": "cloison",
				"params" : {
					"largeur" : 20,
					"hauteur" : 5,
					"epaisseur" : 0.1,
					"materiau" : "mat_brique_10"
				}
			},
			{
				"nom" : "cloison02",
				"type": "cloison",
				"params" : {
					"largeur" : 20,
					"hauteur" : 5,
					"epaisseur" : 0.1,
					"materiau" : "mat_dante"
				}
			},
			{
				"nom"  : "sol",
				"type" : "sol",
				"params" : {
					"largeur"    : 100,
					"profondeur" :  100,
					"materiau"   : "mat_parquet"
				}
			},

		{
				"nom" : "poster05",
				"type" : "poster",
				"params" : {
					"largeur" : 3,
					"hauteur" : 2,
					"url"     : "assets/textures/posters/1.JPG"
					}
			},
			{
				"nom" : "poster06",
				"type" : "poster",
				"params" : {
					"largeur" : 3,
					"hauteur" : 2,
					"url"     : "assets/textures/posters/2.JPG"
					}
			},
			{
				"nom" : "poster07",
				"type" : "poster",
				"params" : {
					"largeur" : 3,
					"hauteur" : 2,
					"url"     : "assets/textures/posters/3.JPG"
					}
			},
			{
				"nom" : "poster08",
				"type" : "poster",
				"params" : {
					"largeur" : 3,
					"hauteur" : 2,
					"url"     : "assets/textures/posters/4.JPG"
					}
			},
			{
				"nom" : "salle",
				"type" : "obj",
				"params" : {"parent":"scene","repertoire":"assets/obj/salle/","fichier":"salle"}
			},
			{
				"nom" : "tux01",
				"type" : "obj",
				"params" : {"parent":"scene","repertoire":"assets/obj/pingouin/","fichier":"penguin"}
			},
			{
				"nom" : "tux02",
				"type" : "obj",
				"params" : {"parent":"scene","repertoire":"assets/obj/pingouin/","fichier":"penguin"}
			},
			{
				"type" : "fin"
			}
		],
	"fun"     : [
			{"type":"lierScene", "objet":"sol"},
			{"type":"lierScene", "objet":"cloison01"},
			{"type":"lierScene", "objet":"cloison02"},

			{"type":"placer","objet":"cloison01","params":{"x":0,"y":0,"z":-5,"angle":0}},
			{"type":"placer","objet":"cloison02","params":{"x":-10,"y":0,"z":5,"angle":Math.PI/2}},


			{"type":"placer","objet":"tux02","params":{"x":0,"y":0,"z":5,"angle":0}},


			{"type":"placer","objet":"poster05","params":{"x":4, "y":2,"z":0.1,"angle":0}},
			{"type":"placer","objet":"poster06","params":{"x":-8,"y":2,"z":0.1,"angle":0.0}},
			{"type":"placer","objet":"poster07","params":{"x":-4,"y":2,"z":0.1,"angle":0.0}},
			{"type":"placer","objet":"poster08","params":{"x":0, "y":2,"z":0.1,"angle":0.0}},

			{"type":"placerSous", "objet":"poster05","params":{"parent":"cloison01"}},
			{"type":"placerSous", "objet":"poster06","params":{"parent":"cloison01"}},
			{"type":"placerSous", "objet":"poster07","params":{"parent":"cloison01"}},
			{"type":"placerSous", "objet":"poster08","params":{"parent":"cloison01"}},

			{"type":"fin"}
		]

} ; */

