# TP 3 : Navigation, Rendu Conditionnel et Intégration des Ressources dans React

Ce projet est une Single Page Application (SPA) développée dans le cadre du TP3 React. Il illustre la navigation multi-pages avec React Router, le rendu conditionnel dynamique, la gestion d'état local via `useState`, l'itération avec la méthode `.map()` ainsi que l'intégration de ressources multimédias locales (images et fichiers audio).

---

##  Fonctionnalités Principales

- **Navigation SPA (`react-router-dom`)** :
  - Routage côté client entre les pages **Accueil**, **À propos** et **Contact** sans rechargement de la page.
  
- **Rendu Conditionnel (`useState` & Opérateurs logiques)** :
  - **Connexion / Déconnexion** : Alternance dynamique de l'affichage avec l'opérateur ternaire `condition ? A : B`.
  - **Gestion des Notifications** : Affichage conditionnel selon le compteur via l'opérateur logique `&&`.
  - **Panneau d'Administration (Exercice 1)** : Affichage d'une zone d'administration sécurisée restreinte au rôle `admin`.

- **Listes Dynamiques & État (Exercice 2)** :
  - Génération dynamique d'une liste d'éléments avec la méthode `.map()` et attribution de clés uniques (`key`).
  - Ajout interactif de nouvelles tâches via un formulaire relié au hook `useState`.

- **Intégration Multimédia** :
  - Importation et affichage dynamique d'une image locale (`berkane3.jpg`).
  - Intégration d'un lecteur audio HTML5 natif lisant un fichier audio local (`La diabla (jdr-Remix).mp3`).

---

##  Structure du Projet

```text
tp-navigation/
├── public/
├── src/
│   ├── Accueil.js                 # Centralisation des composants de la page d'accueil
│   ├── AdminPanel.js              # Composant d'administration (Exercice 1)
│   ├── Apropos.js                 # Page d'information À propos
│   ├── App.css                    # Styles CSS de l'application
│   ├── App.js                     # Composant racine, barre de navigation et routes
│   ├── Contact.js                 # Page de Contact (Exercice 3)
│   ├── Connexion.js               # Composant de gestion de l'état de connexion
│   ├── LecteurAudio.js            # Composant lecteur audio multimédia
│   ├── ListeTaches.js             # Liste dynamique de tâches avec formulaire (Exercice 2)
│   ├── Logo.js                    # Composant d'affichage de l'image
│   ├── Notification.js            # Composant d'affichage du compteur de notifications
│   ├── berkane3.jpg               # Image locale
│   ├── La diabla (jdr-Remix).mp3  # Fichier audio local
│   ├── index.css                  # Style global basique
│   └── index.js                   # Enveloppement de l'application avec BrowserRouter
├── package.json
└── README.md
```

<img width="1912" height="916" alt="image" src="https://github.com/user-attachments/assets/74da3001-93cb-4d22-92cc-4b2cdf76a399" />
<img width="1911" height="593" alt="image" src="https://github.com/user-attachments/assets/36c9373e-3c61-4fe1-8136-011d2b435130" />
<img width="1897" height="791" alt="image" src="https://github.com/user-attachments/assets/f451ec38-5da1-4a07-9dfe-d34f58de1a72" />
<img width="1919" height="777" alt="image" src="https://github.com/user-attachments/assets/b23e5516-a169-498f-88db-6bf3ae116744" />
<img width="558" height="111" alt="image" src="https://github.com/user-attachments/assets/05bab36b-a241-4a74-81d4-ce07b047805e" />
<img width="482" height="110" alt="image" src="https://github.com/user-attachments/assets/c2025a98-44c7-4bf1-b4c0-e82f54091ef1" />
<img width="401" height="239" alt="image" src="https://github.com/user-attachments/assets/b9d984d3-eed1-4e3b-8404-dd112504f314" />
<img width="835" height="314" alt="image" src="https://github.com/user-attachments/assets/b64bc079-a96c-4215-8ad0-9eb6f8e61e65" />
<img width="506" height="165" alt="image" src="https://github.com/user-attachments/assets/ef23e43c-c146-4785-a59c-03958bd0d164" />
