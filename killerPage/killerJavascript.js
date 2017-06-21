$(document).ready(function(){

    var theImages = new Array();

    theImages[0] = "../PerksIcons/killerPerks/120px-IconPerks_bitterMurmur.png";
    theImages[1] = "../PerksIcons/killerPerks/120px-IconPerks_aNursesCalling.png";
    theImages[2] = "../PerksIcons/killerPerks/120px-IconPerks_agitation.png";
    theImages[3] ="../PerksIcons/killerPerks/120px-IconPerks_bloodhound.png";
    theImages[4] ="../PerksIcons/killerPerks/120px-IconPerks_brutalStrength.png";
    theImages[5] ="../PerksIcons/killerPerks/120px-IconPerks_deerstalker.png";
    theImages[6] ="../PerksIcons/killerPerks/120px-IconPerks_devourHope.png";
    theImages[7] ="../PerksIcons/killerPerks/120px-IconPerks_distressing.png";
    theImages[8] ="../PerksIcons/killerPerks/120px-IconPerks_dyingLight.png";
    theImages[9] ="../PerksIcons/killerPerks/120px-IconPerks_enduring.png";
    theImages[10] ="../PerksIcons/killerPerks/120px-IconPerks_generatorOvercharge.png";
    theImages[11] ="../PerksIcons/killerPerks/120px-IconPerks_insidious.png";
    theImages[12] ="../PerksIcons/killerPerks/120px-IconPerks_ironGrasp.png";
    theImages[13] ="../PerksIcons/killerPerks/120px-IconPerks_lightborn.png";
    theImages[14] ="../PerksIcons/killerPerks/120px-IconPerks_monitorAndAbuse.png";
    theImages[15] ="../PerksIcons/killerPerks/120px-IconPerks_monstrousShrine.png";
    theImages[16] ="../PerksIcons/killerPerks/120px-IconPerks_noOneEscapesDeath.png";
    theImages[17] ="../PerksIcons/killerPerks/120px-IconPerks_playWithYourFood.png";
    theImages[18] ="../PerksIcons/killerPerks/120px-IconPerks_overwhelmingPresence.png";
    theImages[19] ="../PerksIcons/killerPerks/120px-IconPerks_predator.png";
    theImages[20] ="../PerksIcons/killerPerks/120px-IconPerks_ruin.png";
    theImages[21] ="../PerksIcons/killerPerks/120px-IconPerks_saveTheBestForLast.png";
    theImages[22] ="../PerksIcons/killerPerks/120px-IconPerks_shadowborn.png";
    theImages[23] ="../PerksIcons/killerPerks/120px-IconPerks_sloppyButcher.png";
    theImages[24] ="../PerksIcons/killerPerks/120px-IconPerks_spiesFromTheShadows.png";
    theImages[25] ="../PerksIcons/killerPerks/120px-IconPerks_stridor.png";
    theImages[26] ="../PerksIcons/killerPerks/120px-IconPerks_thatanophobia.png";
    theImages[27] ="../PerksIcons/killerPerks/120px-IconPerks_theThirdSeal.png";
    theImages[28] ="../PerksIcons/killerPerks/120px-IconPerks_thrillOfTheHunt.png";
    theImages[29] ="../PerksIcons/killerPerks/120px-IconPerks_tinkerer.png";
    theImages[30] ="../PerksIcons/killerPerks/120px-IconPerks_unnervingPresence.png";
    theImages[31] ="../PerksIcons/killerPerks/120px-IconPerks_unrelenting.png";
    theImages[32] ="../PerksIcons/killerPerks/120px-IconPerks_whispers.png";



    var j = 0;
    var p = theImages.length;
    var preBuffer = new Array();


    for (i = 0; i < p; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i];
    }



    $("button").click(function(){

        perkGenerating();

    });

    function perkGenerating() {

        var whichImage1 = Math.round(Math.random() * (p - 1));
        var whichImage2 = Math.round(Math.random() * (p - 1));
        var whichImage3 = Math.round(Math.random() * (p - 1));
        var whichImage4 = Math.round(Math.random() * (p - 1));

        if (whichImage1 != whichImage2 && whichImage1 != whichImage3 &&
            whichImage1 != whichImage4 && whichImage2 != whichImage3 &&
            whichImage2 != whichImage4 && whichImage3 != whichImage4) {

            function showImage() {

                $("#perk1").append("<img src='../Image/PerkBackgroundIcon.png'>");
                $("#perk2").append("<img src='../Image/PerkBackgroundIcon.png'>");
                $("#perk3").append("<img src='../Image/PerkBackgroundIcon.png'>");
                $("#perk4").append("<img src='../Image/PerkBackgroundIcon.png'>");

                $("#perk1").append("<img src='"+theImages[whichImage1]+"'>").hide().fadeIn(2000);
                $("#perk2").append("<img src='"+theImages[whichImage2]+"'>").hide().fadeIn(3000);
                $("#perk3").append("<img src='"+theImages[whichImage3]+"'>").hide().fadeIn(4000);
                $("#perk4").append("<img src='"+theImages[whichImage4]+"'>").hide().fadeIn(5000);

            }
            showImage();

        }
        else {
            location.reload();
        }
    }




})
