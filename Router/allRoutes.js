import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/Covoiturage", "Covoiturage", "/pages/covoiturage.html", "/js/covoiturage.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Ecoride Project";