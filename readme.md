# Ecoride
Ce site est un site de covooiturage écologique et écoresponsable
#Comment lancer mon projet

# Conception Front HTML et JS
nous allons utiliser un système de routage basique codé en JavaScript. Il est composé de 3 fichiers :

Le fichier Route.js définit une classe Route qui représente une route de l'application. Chaque route a une URL, un titre, un chemin vers un fichier HTML, un chemin vers un fichier JavaScript facultatif.

Le fichier allRoutes.js crée un tableau « allRoutes » contenant toutes les routes de l'application. Chaque route est créée en utilisant la classe « Route » avec les paramètres appropriés. Il définit également la variable « websiteName », qui représente le nom du site web.

Le fichier router.js importe la classe Route et les variables « allRoutes » et « websiteName » du fichier allRoutes.js. C’est lui qui contient la logique de routage.

 Les routes sont définies dans un fichier allRoutes.js, où chaque route est créée à l'aide d'une classe Route. Cette classe contient des propriétés telles que l'URL, le titre et les chemins vers les fichiers HTML et JavaScript de la vue.

    getRouteByUrl : qui compare l'URL avec les URL définies dans les routes.

    LoadContentPage : Cette fonction récupère le chemin du fichier HTML de la vue correspondante à partir de la route, puis utilise la fonction <fetch></fetch> pour obtenir le contenu HTML du fichier.


# Installation

# déploiement


# Objectif du site