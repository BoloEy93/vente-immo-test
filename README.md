# Application de Vente de Biens Immobilier

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












