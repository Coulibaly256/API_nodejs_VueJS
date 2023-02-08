const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const mysql = require('mysql2');
const bodyParser = require('body-parser')
app.use(express.json())
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gestion_universite',
  port:3306
});
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connection.connect((error) => {
  if (error) console.error(error);
  else console.log('Connexion à la base de données réussie.');
});


// Création d'un nouveau ou nouvelle etudiant (e)
app.post('/', (req, res) => {
  let query="INSERT INTO etudiant SET ?";
  console.log(req.body);
  let donnee={
    idEtudiant:req.body.idEtudiant,
    nomEtudiant:req.body.nomEtudiant,
    prenomEtudiant:req.body.prenomEtudiant,
    genre:req.body.genre,
    date_naissance:req.body.date_naissance
  };
    // const newProduct = {content: req.body.content};
    connection.query(query,donnee,(error, results) => {
      if (error)res.json({msg:error});
      else {
        res.json({msg:"Publication bien Executée"});
      }
    });
  });


// Création d'une nouvelle inscription
app.post('/test', (req, res) => {
  let query="INSERT inscription SET?";
  console.log(req.body);
  let donnee={
    idInscription:req.body.idInscription,
    date_naissance:req.body.date_naissance,
    idEtudiant:req.body.idEtudiant,
    idPromotion:req.body.idPromotion,
    idUtilisateur:req.body.idUtilisateur
 
  };
    // const newProduct = {content: req.body.content};
    connection.query(query,donnee,(error, results) => {
      if (error)res.json({msg:error});
      else {
        res.json({msg:"Publication bien Executée"});
      }
    });
  });



  // Création d'une nouvelle promotion
app.post('/etud', (req, res) => {
  let query="INSERT INTO promotion SET ?";
  console.log(req.body);
  let donnee={
    idPromotion:req.body.idPromotion,
    intitule:req.body.intitule
  };

    // const newProduct = {content: req.body.content};
    connection.query(query,donnee,(error, results) => {
      if (error)res.json({msg:error});
      else {
        res.json({msg:"Publication bien Executée"});
      }
    });
  });



  // Création d'un nouvel utilisateur
app.post('/module', (req, res) => {
  let query="INSERT INTO utilisateur SET ?";
  console.log(req.body);
  let donnee={
    idUtilisateur:req.body.idUtilisateur,
    nom_utilisateur:req.body.nom_utilisateur,
    mot_de_passe:req.body.mot_de_passe
  };
  
    // const newProduct = {content: req.body.content};
    connection.query(query,donnee,(error, results) => {
      if (error)res.json({msg:error});
      else {
        res.json({msg:"Publication bien Executée"});
      }
    });
  });


// lecture de toutes les etudiants 
  app.get('/actif', (req, res) => {
    let query="SELECT * FROM etudiant";
    console.log(req.body);
    
      // const newProduct = {content: req.body.content};
      connection.query(query,(error, results) => {
        if (error)res.json({msg:error});
        else {
          res.json(results);
        }
      });
    });


// lecture de tous les inscrits
app.get('/emploid', (req, res) => {
  let   query="SELECT * FROM inscription";
  console.log(req.body);
  
    // const newProduct = {content: req.body.content};
    connection.query(query,(error, results) => {
      if (error)res.json({msg:error});
      else {
        res.json(results);
      }
    });
  });

  
// lecture de tous les promotions
app.get('/etudiant', (req, res) => {
  let   query="SELECT * FROM promotion";
  console.log(req.body);
  
    // const newProduct = {content: req.body.content};
    connection.query(query,(error, results) => {
      if (error)res.json({msg:error});
      else {
        res.json(results);
      }
    });
  });

  // lecture de tous les utilisateurs
app.get('/module', (req, res) => {
  let   query="SELECT * FROM utilisateur";
  console.log(req.body);
  
    // const newProduct = {content: req.body.content};
    connection.query(query,(error, results) => {
      if (error)res.json({msg:error});
      else {
        res.json(results);
      }
    });
  });

 
  // Modification de etudiant
  app.put('/:id', (req,res) => {
    let query=`UPDATE etudiant SET nomEtudiant='${req.body.nomEtudiant}',prenomEtudiant='${req.body.prenomEtudiant}',genre='${req.body.genre}' WHERE idEtudiant='${req.params.id}'`;
    console.log(req.body);
    
      // const newProduct = {content: req.body.content};
      connection.query(query,(error, results) => {
        if (error)res.json({msg:error});
        else {
          res.json({msg:"Publication bien été modifié"});
        }
      });
    });

  // Modification de etudiant
  app.put('/:re', (req,res) => {
    let query=`UPDATE inscription SET date_inscription='${req.body.date_inscription}' WHERE idInscription='${req.params.id}'`;
    console.log(req.body);
    
      // const newProduct = {content: req.body.content};
      connection.query(query,(error, results) => {
        if (error)res.json({msg:error});
        else {
          res.json({msg:"Publication bien été modifié"});
        }
      });
    });

  
app.listen(port, () => {
  console.log(`L'application écoute sur le port ${port}.`);
});
