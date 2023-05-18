/*==================================
- Animation apres click sur bouton -
====================================*/
/*==============
-   VARIABLES  - 
================*/

let bouton = document.querySelector('header'); //le bouton fait avec le header
let interieurClick = document.querySelector('div.remplissage'); //Recuperation div a masquer avec clip-path

/*====================================
--      Ecouteurs d'evenements      --
======================================*/
//On ecoute si le bouton est clique
bouton.addEventListener('mousedown', animer);
//Ecouteur pour la fin de l'animation
bouton.addEventListener('animationend', arretAnim);

/*===============================
-           FONCTIONS           -
=================================*/

/*Fonction qui anime la div .remplissage*/
function animer(event) {
    //Donne classe clique a la div interieur pour animer le clip-path
    interieurClick.classList.add('clique');
}

/*Fonction pour arreter l'animation*/
function arretAnim() {
    //On enleve la classe .clique apres que l'animation ait pris fin
    interieurClick.classList.remove('clique');
}