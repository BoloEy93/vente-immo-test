# Application de Gestion de Contractualisation des Transactions Immobilieres

## Outils et Technologies utilisées

- Solidity (Ecriture des Contrats Intelligents & Tests)
- Javascript (React & Tests)
- [Hardhat](https://hardhat.org/) (Framework de Developpement )
- [Ethers.js](https://docs.ethers.io/v5/) (Interactions Blockchain)
- [React.js](https://reactjs.org/) (Framework FrontEnd)

## Conditions requises pour la configuration initiale
- Install [NodeJS](https://nodejs.org/en/)

## Configuration
### 1. Cloner/Telecharger le Depot

### 2. Installation des Dependances:
`$ npm install`

### 3. Execution des tests
`$ npx hardhat test`

### 4. Demarrage noeud Hardhat
`$ npx hardhat node`

### 5. Exécuter le script de déploiement
Dans un terminal (invite de commandes) distinct executer:
`$ npx hardhat run ./scripts/deploy.js --network localhost`

### 7. Démarrer l'interface Utilisateur
`$ npm run start`


### 8. Installer le gestionnaire de portefeuille Blockchain MetaMask (extension Firefox/Chrome)
    - creer un compte
### 9. Configurer un nouveau reseau sur MetaMask avec les données suivantes: 

    - Network name     : Hardhat
    - New RPC URL      : http://127.0.0.1:8545/
    - Chain ID         : 31337
    - Currency symbol  : ETH

### 10. Creer des profils (3/4comptes) Tests sur MetaMask: 
  - Add Account or hardware wallet > Import Account
  - Pour la clé Privées demandée :
    - Allez dans l'invite de commandes creer a l'etape 4 et copier/coller
    - S'assurer que cet invite soit toujours actif lors des tests
    - Renommer les comptes comme Hardhat #i (i=1,2,3,4)
    - Connecter ces comptes au sites
   

### Documentation

### Répertoire racine

1. **README.md** : fichier de documentation, contenant généralement un aperçu du projet, des instructions d'installation, des directives d'utilisation et éventuellement des informations sur l'objectif et l'architecture du projet.

2. **hardhat.config.js** : fichier de configuration pour Hardhat, un environnement de développement pour le logiciel Ethereum. Il contient probablement des paramètres pour les réseaux, les chemins et les versions du compilateur.

3. **package-lock.json** : fichier généré automatiquement qui verrouille les versions des dépendances du projet comme spécifié dans `package.json`.

4. **package.json** : contient des métadonnées sur le projet, notamment les dépendances, les scripts et les informations sur le projet. Ce fichier est essentiel pour les projets Node.js.

### Répertoire des contrats

5. **contracts/Escrow.sol** : un contrat intelligent Solidity, qui gère le mécanisme d'entiercement pour les transactions immobilières. Les contrats d'entiercement sont généralement utilisés pour conserver les fonds en toute sécurité jusqu'à ce que certaines conditions soient remplies.

6. **contracts/RealEstate.sol** : un autre contrat intelligent Solidity, qui traite des fonctionnalités immobilières de base telles que les listes de propriétés, le transfert de propriété, etc.

### Répertoire des métadonnées
7. **metadata/1.json, 2.json, 3.json** : fichiers JSON contenant  des métadonnées pour les propriétés immobilières ou les NFT représentant les propriétés. Chaque fichier correspond à une propriété spécifique.

### Répertoire public
8. **public/favicon.ico** : fichier d'icône pour l'onglet du navigateur.

9. **public/index.html** : le fichier HTML principal pour le frontend de l'application Web.

10. **public/logo192.png, logo512.png** : images de logo utilisées dans l'application frontend.

11. **public/manifest.json** : fichier de configuration pour une application Web progressive (PWA), définissant le comportement de l'application lorsqu'elle est installée sur l'appareil d'un utilisateur.

12. **public/robots.txt** : fichier indiquant aux robots d'exploration Web quelles parties du site ne doivent pas être indexées.

### Répertoire des scripts
13. **scripts/deploy.js** : fichier JavaScript utilisé pour déployer les contrats intelligents sur un réseau blockchain, à l'aide de l'environnement Hardhat.

### Répertoire source (src)
14. **src/App.js** : le composant React principal qui agit comme point d'entrée pour l'application frontend.

15. **src/App.test.js** : fichier de test pour `App.js`, utilisé pour garantir que le frontend se comporte comme prévu.

16. **src/config.json** : fichier de configuration contenant des paramètres importants ou des clés API pour l'application frontend.

17. **src/index.css** : fichier CSS principal pour le style du frontend React.

18. **src/index.js** : point d'entrée de l'application React, responsable du rendu du composant principal `App`.

19. **src/logo.svg** : logo SVG utilisé dans l'application.

20. **src/reportWebVitals.js** : fichier utilisé pour mesurer et signaler les performances de l'application Web.

21. **src/setupTests.js** : fichier de configuration pour la configuration de l'environnement de test de l'application React.

22. **src/abis/Escrow.json, RealEstate.json** : fichiers ABI (Application Binary Interface) générés après la compilation des contrats intelligents. Ces fichiers sont utilisés par le frontend pour interagir avec les contrats intelligents déployés.

23. **src/assets/close.svg, houses.png, logo.svg** : ressources (images, icônes) utilisées dans le frontend.

24. **src/components/Home.js, Navigation.js, Search.js** : composants React qui composent les différentes parties de l'interface utilisateur du frontend. `Home.js` représente la page d'accueil, `Navigation.js` la barre de navigation et `Search.js` la fonctionnalité de recherche.

### Répertoire de tests
25. **test/Escrow.js** : fichier JavaScript contenant des cas de test pour le contrat intelligent `Escrow.sol`, garantissant qu'il fonctionne comme prévu.













