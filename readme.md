# 🚴‍♂️ Vélib' Extractor

Un script JavaScript à exécuter dans la console de votre navigateur pour :

- Naviguer automatiquement sur les pages de votre historique Vélib’  
- Extraire les trajets (date, vélo, distance, durée, vitesse, coût, CO2 économisé)  
- Télécharger les résultats sous forme de fichier **CSV** encodé en **UTF-8** compatible Excel/Google Sheets

---

## 🔧 Fonctionnalités

- 🔁 Navigation automatique jusqu'à **15 pages**
- ⏱️ Pause de **1 seconde** entre chaque page pour laisser le site charger
- 📦 Extraction structurée de chaque trajet
- 🧾 Génération et **téléchargement automatique** du fichier `velib_trajets.csv`

---

## 🧠 Prérequis

- Un compte Vélib’ actif
- Google Chrome (ou tout navigateur avec console JavaScript)
- Avoir accédé à la page **Mes trajets** sur [https://mon-compte.velib-metropole.fr](https://mon-compte.velib-metropole.fr)

---

## 🚀 Utilisation

1. Connectez-vous à [https://mon-compte.velib-metropole.fr](https://mon-compte.velib-metropole.fr)
2. Allez dans **"Mes trajets"**
3. Appuyez sur `F12` pour ouvrir les outils de développement
4. Allez dans l'onglet **Console**
5. Collez le contenu du fichier [`script.js`](./script.js) dans la console
6. Appuyez sur **Entrée**
7. Attendez quelques secondes : le fichier `velib_trajets.csv` sera automatiquement téléchargé à la fin

---

## 📁 Exemple de données extraites

| Date              | Vélo     | Distance | Durée         | Vitesse     | Coût | CO2 économisé |
|------------------|----------|----------|---------------|-------------|------|----------------|
| 03/12/2024 - 06:26 | N°35234 | 1,2km    | 4min 41sec    | 14.7 km/h   | 0 €  | 128 g          |
| 02/12/2024 - 19:27 | N°19294 | 2,9km    | 14min 52sec   | 11.8 km/h   | 0 €  | 325 g          |

---

## 📜 Licence

Ce projet est open source, sous licence [MIT](./LICENSE).

---

## ✨ Contributions

Les suggestions, corrections et améliorations sont les bienvenues via [Issues](https://github.com/votre-nom/velib-extractor/issues) ou Pull Requests.
