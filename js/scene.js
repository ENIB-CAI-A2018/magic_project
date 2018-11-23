

// Scène contenant : 
//	- 1 source ponctuelle
//	- 1 sol
//	- 1 sphere



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
				"nom" : "poster01",
				"type" : "poster",
				"params" : {
					"largeur" : 3,
					"hauteur" : 3,
					"url"     : "assets/images/brest0/LaGrandeGrue.jpg"
					}
			},
			{
				"nom" : "poster02",
				"type" : "poster",
				"params" : {
					"largeur" : 3,
					"hauteur" : 2,
					"url"     : "assets/images/brest0/LaPorteNationale.jpg"
					}
			},
			{
				"nom" : "poster03",
				"type" : "poster",
				"params" : {
					"largeur" : 3,
					"hauteur" : 2,
					"url"     : "assets/images/brest0/LaRueDeSiam.jpg"
					}
			},
			{
				"nom" : "poster04",
				"type" : "poster",
				"params" : {
					"largeur" : 3,
					"hauteur" : 2,
					"url"     : "assets/images/brest0/LesGares.jpg"
					}
			},
		{
				"nom" : "poster05",
				"type" : "poster",
				"params" : {
					"largeur" : 3,
					"hauteur" : 2,
					"url"     : "assets/images/brest0/LesGlacisEtLaRueDeParis.jpg"
					}
			},
			{
				"nom" : "poster06",
				"type" : "poster",
				"params" : {
					"largeur" : 3,
					"hauteur" : 2,
					"url"     : "assets/images/brest0/LHotelDeVille.jpg"
					}
			},
			{
				"nom" : "poster07",
				"type" : "poster",
				"params" : {
					"largeur" : 3,
					"hauteur" : 2,
					"url"     : "assets/images/brest0/PlaceDesPortes.jpg"
					}
			},
			{
				"nom" : "poster08",
				"type" : "poster",
				"params" : {
					"largeur" : 3,
					"hauteur" : 2,
					"url"     : "assets/images/brest0/PontNational.jpg"
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

			{"type":"placer","objet":"poster01","params":{"x":4, "y":2, "z":0.1,"angle":0}},
			{"type":"placer","objet":"poster02","params":{"x":-8, "y":2, "z":0.1,"angle":0}},
			{"type":"placer","objet":"poster03","params":{"x":-4,"y":2,"z":0.1,"angle":0}},
			{"type":"placer","objet":"poster04","params":{"x":0,"y":2,"z":0.1,"angle":0}},

			{"type":"placerSous", "objet":"poster01","params":{"parent":"cloison02"}},
			{"type":"placerSous", "objet":"poster02","params":{"parent":"cloison02"}},
			{"type":"placerSous", "objet":"poster03","params":{"parent":"cloison02"}},
			{"type":"placerSous", "objet":"poster04","params":{"parent":"cloison02"}},

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

} ; 
*/

var materiaux = {} ; 
var noeuds    = {} ;
var listeIntersection = [] ; 

var pointeur ; 
var mire ; 

var monde       = {}
monde.entites   = {} ; 
monde.materiaux = {} ; 
monde.textures  = {} ; 

// ======
// Parser
// ======


function parser1(data,scene){


	// Création des entités
	var entites = data.entites ; 
	console.log(entites)
	for(var i = 0; i < entites.length; i++){
		var entite = entites[i] ; 
		var _nom   = entite.nom ; 
		var _type  = entite.type ; 
		var params = entite.params ;
		console.log(_nom) ;  
		console.log(params) ; 
		     if (_type == "texLambert"){
				monde.materiaux[_nom] = creerLambertTexture(params.texture,0xaaaaaaa,params.nx,params.ny) ; 
			}
        else if (_type == "lambert"){
                monde.materiaux[_nom] = creerLambert(params.couleur) ; 
        }
		else if (_type == "groupe"){
				monde.entites[_nom] = creerGroupe(_nom) ; 
			}
		else if (_type == "poster"){
				monde.entites[_nom] = creerPoster1(_nom,params.largeur,params.hauteur,params.url) ; 
			}
		else if (_type == "cloison"){
			monde.entites[_nom] = creerCloison(
								_nom,
								params.largeur,
								params.hauteur,
								params.epaisseur,
								monde.materiaux[params.materiau]
							  ) ; 
			}
		else if (_type == "boite"){
			monde.entites[_nom] = creerBoite(
								_nom,
								params.largeur,
								params.hauteur,
								params.epaisseur,
								monde.materiaux[params.materiau]
							  ) ; 
			}
		else if (_type == "sol"){
			monde.entites[_nom] = creerSol(_nom,params.largeur,params.profondeur,monde.materiaux[params.materiau]) ; 
		}
		else if (_type == "lumiere"){
			monde.entites[_nom] = creerSourcePonctuelle(new THREE.Vector3(params.x,params.y,params.z),params.couleur,params.intensite,params.portee,params.attenuation) ; 
		}
		if(_type == "obj"){
			console.log(params.repertoire) ; 
			console.log(params.fichier) ; 
			var o = chargerObj(_nom,params.repertoire, params.repertoire,params.repertoire,params.fichier+".obj",params.fichier+".mtl") ; 
			monde.entites[_nom] = o ; 
			console.log("monde" + monde) ; 
			monde.entites[params.parent].add(o) ; 
			//scene.add(o)
		}

		else {} ;  
	}

	// Application de fonctions aux entités
	var fonctions = data.fun ; 

	for(var i=0; i< fonctions.length; i++){
		var _foo   = fonctions[i] ; 
		var _type  = _foo.type ; 
		var _obj   = _foo.objet ; 
		var _params = _foo.params ;  

		if (_type == "lierScene"){
			scene.add(monde.entites[_obj]) ; 
		}
		else if  (_type == "placer"){
			monde.entites[_obj].position.set(_params.x,_params.y,_params.z) ;
			monde.entites[_obj].rotation.y = _params.angle ; 
		}
		else if (_type == "placerSous"){
			(monde.entites[_params.parent]).add(monde.entites[_obj]) ; 

		}
		else {} 
	} ; 

	console.log(monde.entites) ; 
	


}





function creerScene(){
			
	var scene = new THREE.Scene() ; 
	scene.visiteurs=[];
	monde.entites["scene"] = scene ;

	// Ajoût de sources lumineuses à la scène
	// ======================================

	var l1 = creerSourcePonctuelle(new THREE.Vector3(5,5,2),0xffffff,1,30,2) ; 
	scene.add(l1) ; 

	var l3 = creerSourcePonctuelle(new THREE.Vector3(0,2,5),0xffffff,1,30,2) ; 
	scene.add(l3) ; 

	var l2 = creerSoleil() ; 
	scene.add(l2) ; 

	// Peuplement des objets de la scène
	// =================================

	var mat1 = creerLambert(0xff00ff) ; 
	var mat2 = creerLambert(0xffff00) ; 
	var mat3 = creerLambertTexture("assets/textures/sols_plafonds/sol.jpg",0xffffff,50,50) ; 


    	// Création d'un pointeur à utiliser pour visualiser un objet sélectionné
    	
    	pointeur = creerSphere("pointeur",0.05,16, mat2) ; 
    	scene.add(pointeur) ; 

    grille = new Grille("nom",8,8);
    scene.add(grille.groupe);
    placerXYZ(grille.groupe,5,2,5.5) ;
    orienterY(grille.groupe,Math.PI/2)

/*
	var sph1 = creerSphere("sph1",0.5,16,mat2) ;
	placerXYZ(sph1,10,1.5,5) ;  
	parentDe(scene,sph1) ; 	

	var sph2 = creerSphere("sph2",0.5,16,mat3) ;
	placerXYZ(sph2,10,1.5,7) ;  
	parentDe(scene,sph2) ; 	*/

	// parser(data,scene) ; 
	parser1(data,scene) ; 
	tux=new pingouin("jean",0.05)
	scene.add(tux.objet)
	scene.visiteurs.push(tux)
	tux.placerXYZ(2,0,5)
	stair=creerEscalier(14,0.1,-7.5,20,7.6,5,2,Math.pi/2,mat3)
	scene.add(stair)
	// FIN
	// =================================

	return scene ; 
}
