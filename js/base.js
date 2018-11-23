
function creerGroupe(nom){
	var groupe  = new THREE.Group() ; 
	groupe.name = nom ; 
	return groupe ; 
}
	

function creerSol(nom,largeur,hauteur,materiau){
	var geo   = new THREE.PlaneGeometry(
					largeur,hauteur,
					Math.floor(largeur/10.0)+1, Math.floor(hauteur/10)+1) ; 
	var geo2   = new THREE.PlaneGeometry(
					largeur,hauteur,
					Math.floor(largeur/10.0)+1, Math.floor(hauteur/10)+1) ; 
	var mesh  = new THREE.Mesh(geo,materiau) ;
	var mesh2  = new THREE.Mesh(geo2,materiau) ;
	var groupe = new THREE.Group() ;  
	groupe.name = nom ;
	groupe.add(mesh) ; 
	groupe.add(mesh2) ; 
	mesh.rotation.x = - Math.PI / 2 ;
	mesh2.rotation.x = Math.PI / 2 ;
	return groupe ;   
}

function creerCloison(nom,largeur, hauteur, epaisseur, materiau){
	var geo  = new THREE.BoxGeometry(largeur, hauteur, epaisseur) ; 
	var mesh = new THREE.Mesh(geo, materiau) ;
	var groupe = new THREE.Group() ; 
	groupe.name = nom ;
	groupe.add(mesh) ; 
	mesh.position.set(0,hauteur/2.0,0) ;  
	return groupe ;  	
}

function creerEscalier(x,y,z,marches,longueur, hauteur,epaisseur,angle,materiau){
	var stair=new THREE.Object3D();
	for(var varMarches=0;varMarches<marches;varMarches++){
		var geo  = new THREE.BoxGeometry(epaisseur, hauteur/(marches*2), longueur/marches) ; 
		var mesh = new THREE.Mesh(geo, materiau) ;
		var groupe = new THREE.Object3D(); 
		groupe.add(mesh) ;
		
		mesh.position.set(x,y+varMarches*hauteur/marches,z+varMarches*longueur/marches) ;   	
		stair.add(groupe);
	}
	//stair.rotateY(angle)
	console.log(stair.position)
	return stair
}

function creerBoite(nom,largeur, hauteur, epaisseur, materiau){
	var geo  = new THREE.BoxGeometry(largeur, hauteur, epaisseur) ; 
	var mesh = new THREE.Mesh(geo, materiau) ;
	var groupe = new THREE.Group() ; 
	groupe.name = nom ;
	groupe.add(mesh) ; 
	mesh.position.set(0,hauteur/2.0,0) ;  
	return groupe ;  	
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pingouin(nom,vitesse)
{	
	_nom="pingouin"
	repertoire="assets/obj/pingouin/"
	fichier="penguin"
	this.objet = chargerObj(_nom,repertoire, repertoire,repertoire,fichier+".obj",fichier+".mtl");
	this.objectif= new THREE.Vector3 (0,0,0);
	this.vitesse=vitesse;
	this.position=new THREE.Vector3(0,0,0);
	this.update = function(){
		var  direction = new THREE.Vector3(0,0,0);
		direction.subVectors(this.objectif,this.position);
		if (direction.length()>this.vitesse){
			direction.setLength(vitesse);
		}
		this.position.addVectors(this.position,direction);
		this.objet.lookAt(this.objectif)
		placerXYZ(this.objet,this.position.x,this.position.y,this.position.z);
	}
	
	this.placerXYZ=function(x,y,z)
	{
		placerXYZ(this.objet,x,y,z);
		this.position.set(x,y,z);
		this.objectif.set(x,y,z)
	}


	

	
}
function creerSphere(nom,rayon, subdivisions, materiau)
{
	var geo = new THREE.SphereGeometry(rayon, subdivisions, subdivisions) ; 
	var mesh = new THREE.Mesh(geo, materiau) ; 
	var groupe = creerGroupe(name);
	groupe.add(mesh);
	return groupe;

}
function Sphere(nom,rayon, subdivisions, materiau1,materiau2){
	this.mat1 = materiau1 ; 
	this.mat2 = materiau2 ; 
	this.nom = nom;
	this.state =getRandomInt(2);
	this.nextState=0;
	var geo  = new THREE.SphereGeometry(rayon, subdivisions, subdivisions) ; 
	if(this.state==0)
	{
		this.mesh = new THREE.Mesh(geo, this.mat1) ; 
	}
	else
	{
		this.mesh = new THREE.Mesh(geo, this.mat2) ; 
	}
	
	this.neighbour = [];
	this.checkState = function()
	{
		var somme =0;
		for(k=0;k<this.neighbour.length;k++)
		{
			somme += this.neighbour[k].state;
		}
		if (somme==0||somme==4)
		{
			this.nextState=0;
		}
		else if(somme==3)
		{
			this.nextState=1;
		}
		else 
		{
			this.nextState=this.state;
		}
	}
	this.update = function ()
	{
		if(this.nextState==1)
		{
			this.mesh.material=this.mat2;
		}
		else
		{
			this.mesh.material=this.mat1;
		}
		if (this.state==this.nextState)
		{
			return 0;
		}
		else
		{
			this.state=this.nextState
			return 1;
		}
	}
}


function creerPoster(nom,largeur, hauteur, nomImage){
	var geo   = new THREE.PlaneGeometry(largeur, hauteur) ; 
	var mat   = creerLambertTexture(nomImage, 0xffffff) ; 
	var mesh  = new THREE.Mesh(geo, mat) ; 
	mesh.name = nom ;
	return mesh ;   
}

function creerPoster1(nom,largeur, hauteur, nomImage){
	var geo    = new THREE.PlaneGeometry(largeur, hauteur) ; 
	var mat    = creerLambertTexture(nomImage, 0xffffff) ; 
	var mesh   = new THREE.Mesh(geo, mat) ; 
    mesh.name  = nom ; 
	var dos    = new THREE.Mesh(geo, materiauBlanc) ; 
	dos.rotation.y = Math.PI ; 
	dos.position.z = -0.01 ; 
	mesh.position.z = 0.01 ; 

    listeIntersection.push(mesh) ; 

	var groupe = new THREE.Group() ; 
	groupe.add(mesh) ; 
	groupe.add(dos) ;  
	groupe.name  = "tableau:"+nom ;
	mesh.chose = "poster"
	return groupe ;   
}

function Grille(nom,colonne,ligne)
{
	this.mat1 = creerLambert(0xff00ff) ; 
	this.mat2 = creerLambert(0xffff00) ; 
	this.colonne=colonne;
	this.ligne=ligne;
	this.groupe = creerGroupe(nom);
	this.tableauSphere=[];
	var size = 0.1;
	for (i=0;i<colonne;i++)
	{
		this.tableauSphere[i]=[];
		for(j=0;j<ligne;j++)
		{
			var sph = new Sphere("sphere "+i+" "+j,size,16,this.mat1,this.mat2);
			placerXYZ(sph.mesh,i*size*2,j*size*2,0) ; 
			this.groupe.add(sph.mesh);
			this.tableauSphere[i][j]=sph;
			if(i>0)
			{
				this.tableauSphere[i-1][j].neighbour.push(sph); 
				sph.neighbour.push(this.tableauSphere[i-1][j]);
			}
			if(j>0)
			{
				this.tableauSphere[i][j-1].neighbour.push(sph);
				sph.neighbour.push(this.tableauSphere[i][j-1]);
			}
		}
	}
	this.verifierEtat =function() 
	{

		for (i=0;i<this.colonne;i++)
		{
			for(j=0;j<this.ligne;j++)
			{
				this.tableauSphere[i][j].checkState();
			}
		}
	}
	this.update =function()
	{
		var somme =0;
		for (i=0;i<this.colonne;i++)
		{
			
			for(j=0;j<this.ligne;j++)
			{
				somme += this.tableauSphere[i][j].update();
			}
		}
		if (somme == 0)
		{
			this.randomize();
		}
	}

	this.randomize = function()
	{
		for (i=0;i<this.colonne;i++)
		{
			
			for(j=0;j<this.ligne;j++)
			{
				this.tableauSphere[i][j].state=getRandomInt(2)
			}
		}
	}
}

// var mtlLoader = new THREE.MTLLoader() ; 
// var objLoader = new THREE.OBJLoader() ; 


function chargerObj(nom,repertoireObj,repertoireMtl,repertoireTex,nomObj,nomMtl){
			var mtlLoader = new THREE.MTLLoader() ; 
			var objLoader = new THREE.OBJLoader() ; 
			var groupe    = new THREE.Group() ; 
			groupe.name = nom ; 
			mtlLoader.setTexturePath(repertoireTex);
			mtlLoader.setPath(repertoireMtl);
			mtlLoader.load(nomMtl, function (materials) {
 
    				materials.preload();
 
    				objLoader.setMaterials(materials);
    				objLoader.setPath(repertoireObj);
    				objLoader.load(nomObj, function (object) {
        				groupe.add(object); 
					object.name = nom ; 
					listeIntersection.push(object) ; 
					return groupe ; 
 
    				});
 
			});
			
			return groupe ; 
		
}


// ===================
// Création de sources
// ===================

function creerSourcePonctuelle(position,couleur, intensite, portee, attenuation){
	var light = new THREE.PointLight(couleur,intensite,portee,attenuation) ; 
	light.position.copy(position) ; 
	return light ; 
}

function creerSoleil(){
	var h = new THREE.HemisphereLight(0xffffbb,0x080820,1) ; 
	return h ; 
}



// =====================
// Création de matériaux
// =====================

var textureLoader = new THREE.TextureLoader() ; 

var materiauBlanc  = creerLambert(0xffffff) ; 
var materiauRouge  = creerLambert(0xff0000) ;

function creerLambert(couleur){
  	var mat = new THREE.MeshLambertMaterial({color:couleur}) ; 
	return mat ; 
}

function creerLambertTexture(nomImage,couleur,nx,ny){
	var texture = textureLoader.load(nomImage) ; 
	var mat = new THREE.MeshLambertMaterial({color:couleur,map:texture}) ; 
	nx = nx ||   1 ; 
	ny = ny ||   1 ; 
	mat.map.wrapS = THREE.RepeatWrapping ;
	mat.map.wrapT = THREE.RepeatWrapping ;
	mat.map.repeat.set(nx,ny) ; 
	return mat ; 
}


// ======================
// Traitements des meshes
// ======================

function placerXYZ(mesh,x,y,z){
	//mesh.translateX(x) ; 
	//mesh.translateY(y) ; 
	//mesh.translateZ(z) ;
	mesh.position.set(x,y,z) ;  
}

function orienterY(mesh,y){
	//mesh.rotateY(y) ; 
	mesh.rotation.y = y ;

}

function parentDe(pere,fils){
	pere.add(fils) ; 
}




// =============================
// Sélection par lancer de rayon
// =============================

var projector   = new THREE.Projector() ;
var listeIntersection = [] ;  

function mouseDown(event){
	var vector = new THREE.Vector3(
			 (event.clientX / window.innerWidth)*2-1,
                        -(event.clientY / window.innerHeight)*2+1,
			0.5) ; 
	projector.unprojectVector(vector, camera) ; 

	var raycaster = new THREE.Raycaster(
				camera.position, 
				vector.sub(camera.position).normalize()) ; 
	// var intersects = raycaster.intersectObjects(listeIntersection,true) ; 
	var intersects = raycaster.intersectObjects(scene.children,true) ;
	if(intersects.length > 0){
		intersects[0].object.material.transparent = true ; 
		//alert("HIT sur : " + intersects[0].object.name) ; 
		//alert( intersects[0].point.x+" , "+intersects[0].point.y+" , "+intersects[0].point.z) ; 
        
        pointeur.position.set(intersects[0].point.x,intersects[0].point.y,+intersects[0].point.z) ; 
        objectif = new THREE.Vector3(intersects[0].point.x,intersects[0].point.y,+intersects[0].point.z)
        
        //if(intersects[0].object.chose=="poster"){
        //	console.log(intersects[0].object.angle)
        //	objectif.add(new THREE.Vector3(0,0,1).applyAxisAngle(new THREE.Vector3(0,0,1),intersects[0].object.rotation.y))
    	//}
    	for (l=0;l<scene.visiteurs.length;l++)
        	{
        		scene.visiteurs[l].objectif=objectif
        	}
	}
}

var oldX = 0
var deltaX ; 

function mouseMove(event){


}

function keyDown(event){
	switch(event.keyCode){
		case 33 : // HAUT
			controls.plusHaut = true ; 
			break ; 
		case 34 : // BAS
			controls.plusBas = true ;
			break ; 
		case 37 : // GAUCHE
			controls.aGauche = true ; 
			break ; 
		case 38 : // HAUT
			controls.enAvant = true ;
			break ; 
		case 39 : // DROITE
			controls.aDroite = true ;
			break ; 
		case 40 : // BAS
			controls.enArriere = true ;
			break ; 
	}
}

function keyUp(event){
	switch(event.keyCode){
		case 33 : // HAUT
			controls.plusHaut = false ; 
			break ; 
		case 34 : // BAS
			controls.plusBas = false ;
			break ; 
		case 37 : // GAUCHE
			controls.aGauche = false ; 
			break ; 
		case 38 : // HAUT
			controls.enAvant = false ;
			break ; 
		case 39 : // DROITE
			controls.aDroite = false ;
			break ; 
		case 40 : // BAS
			controls.enArriere = false ;
			break ; 
	}
}

var KeyboardControls = function(object){
	this.object    = object ; 

	this.position  = new THREE.Vector3(1,1.7,5) ; 

	this.angle     = 0.0 ; 
	this.direction = new THREE.Vector3(1,0,0) ; 
	this.cible     = new THREE.Vector3(2,1.7,5) ; 

	this.vitesse   = 10 ; 

	this.plusHaut  = false ; 
	this.plusBas   = false ; 
	this.enAvant   = false ; 
	this.enArriere = false ; 
	this.aGauche   = false ; 
	this.aDroite   = false ; 
}

KeyboardControls.prototype.update = function(dt){


	if(this.plusHaut)
		this.position.y += this.vitesse * dt ; 

	if(this.plusBas)
		this.position.y -= this.vitesse * dt ; 

	if(this.aGauche)
		this.angle += 0.05 ; 


	if(this.aDroite)
		this.angle -= 0.05 ; 

	if(this.enAvant){
		this.position.x +=  this.vitesse * dt * Math.cos(this.angle) ; 
		this.position.z += -this.vitesse * dt * Math.sin(this.angle) ;  
	}

	if(this.enArriere){
		this.position.x -=  this.vitesse * dt * Math.cos(this.angle) ; 
		this.position.z -= -this.vitesse * dt * Math.sin(this.angle) ;  
	}
	
	this.object.position.copy(this.position) ; 

	this.direction.set(Math.cos(this.angle),0.0,-Math.sin(this.angle)) ; 
	
	this.cible.x = this.position.x + Math.cos(this.angle) ; 
	this.cible.y = this.position.y ; 
	this.cible.z = this.position.z - Math.sin(this.angle) ; 

	this.object.lookAt(this.cible) ; 
	
}

	
                         



