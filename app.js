const design = document.querySelector('#input-design');
const score = document.querySelector('#input-score');
const boutonConfirmer = document.querySelector('#btn-confirm');

const liste_Series = document.querySelector('#listeSeries');


const alertCtrl = document.querySelector('ion-alert-controller');





boutonConfirmer.addEventListener( 'click' , () => {

    const designation_recup = design.value;
    const score_recup = score.value;

    if(designation_recup.trim().length <= 0 ){

        //console.log("erreur de designation ou montant");

        alertCtrl.create({
                message: 'Veuillez entrez un film ou une note correcte',
                header: 'Erreur',
                buttons: ["Ok"]
        }).then(alertElement => {
            alertElement.present();
        });

        return;
    }



    newItem = document.createElement('ion-item');
    newItem.innerHTML = `<ion-avatar slot="start"><img src= "star_icon.png"></ion-avatar> <h3><strong>${designation_recup}</strong></h3> &nbsp; <p>note</p>&nbsp;${score_recup} / 5</p>`;
    liste_Series.appendChild(newItem);

    
    
});