Project Barycentre
==================
Le projet Barycentre fournit une d'API permet REST de calculer le point GPS optimal central d'un ensemble de coordonnées GPS.

US1:
----

En tant qu'utilisateur de l'API, je souhaite fournir une liste de coordonnées GPS, afin d'avoir en retour le point central de ces points.

### Critères d'acceptance:
    - Si la liste est vide, ne rien envoyer
    - Si la liste contient un seul élément x, renvoyer le seul élément 
        * b : { center: x }
    - Si la liste contient 2 éléments, renvoyer la coordonnée médiane
    - Si la liste contient plus de 2 éléments, calculer le barycentre et le renvoyer

