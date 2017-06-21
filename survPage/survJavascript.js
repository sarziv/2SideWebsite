$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
var theImages = new Array();

theImages[0] = "../PerksIcons/survivalPerks/120px-IconPerks_aceInTheHole.png";
theImages[1] = "../PerksIcons/survivalPerks/120px-IconPerks_alert.png";
theImages[2] = "../PerksIcons/survivalPerks/120px-IconPerks_balancedLanding.png";
theImages[3] ="../PerksIcons/survivalPerks/120px-IconPerks_bond.png";
theImages[4] ="../PerksIcons/survivalPerks/120px-IconPerks_borrowedTime.png";
theImages[5] ="../PerksIcons/survivalPerks/120px-IconPerks_botanyKnowledge.png";
theImages[6] ="../PerksIcons/survivalPerks/120px-IconPerks_calmSpirit.png";
theImages[7] ="../PerksIcons/survivalPerks/120px-IconPerks_decisiveStrike.png";
theImages[8] ="../PerksIcons/survivalPerks/120px-IconPerks_dejaVu.png";
theImages[9] ="../PerksIcons/survivalPerks/120px-IconPerks_empathy.png";
theImages[10] = "../PerksIcons/survivalPerks/120px-IconPerks_hope.png";
theImages[11] ="../PerksIcons/survivalPerks/120px-IconPerks_ironWill.png";
theImages[12] ="../PerksIcons/survivalPerks/120px-IconPerks_leader.png";
theImages[13] = "../PerksIcons/survivalPerks/120px-IconPerks_leftBehind.png";
theImages[14] ="../PerksIcons/survivalPerks/120px-IconPerks_lightweight.png";
theImages[15] ="../PerksIcons/survivalPerks/120px-IconPerks_lithe.png";
theImages[16] ="../PerksIcons/survivalPerks/120px-IconPerks_noOneLeftBehind.png";
theImages[17] ="../PerksIcons/survivalPerks/120px-IconPerks_objectOfObsession.png";
theImages[18] ="../PerksIcons/survivalPerks/120px-IconPerks_openHanded.png";
theImages[19] ="../PerksIcons/survivalPerks/120px-IconPerks_plunderersInstinct.png";
theImages[20] ="../PerksIcons/survivalPerks/120px-IconPerks_premonition.png";
theImages[21] ="../PerksIcons/survivalPerks/120px-IconPerks_proveThyself.png";
theImages[22] ="../PerksIcons/survivalPerks/120px-IconPerks_quickAndQuiet.png";
theImages[23] ="../PerksIcons/survivalPerks/120px-IconPerks_resilience.png";
theImages[24] ="../PerksIcons/survivalPerks/120px-IconPerks_saboteur.png";
theImages[25] ="../PerksIcons/survivalPerks/120px-IconPerks_selfCare.png";
theImages[26] ="../PerksIcons/survivalPerks/120px-IconPerks_slipperyMeat.png";
theImages[27] ="../PerksIcons/survivalPerks/120px-IconPerks_smallGame.png";
theImages[28] ="../PerksIcons/survivalPerks/120px-IconPerks_soleSurvivor.png";
theImages[29] ="../PerksIcons/survivalPerks/120px-IconPerks_spineChill.png";
theImages[30] ="../PerksIcons/survivalPerks/120px-IconPerks_sprintBurst.png";
theImages[31] ="../PerksIcons/survivalPerks/120px-IconPerks_streetwise.png";
theImages[32] ="../PerksIcons/survivalPerks/120px-IconPerks_technician.png";
theImages[33] ="../PerksIcons/survivalPerks/120px-IconPerks_thisIsNotHappening.png";
theImages[34] ="../PerksIcons/survivalPerks/120px-IconPerks_unbreakable.png";
theImages[35] ="../PerksIcons/survivalPerks/120px-IconPerks_upTheAnte.png";
theImages[36] ="../PerksIcons/survivalPerks/120px-IconPerks_urbanEvasion.png";
theImages[37] ="../PerksIcons/survivalPerks/120px-IconPerks_wellMakeIt.png";
theImages[38] ="../PerksIcons/survivalPerks/120px-Kindred_Icon.png";
theImages[39] ="../PerksIcons/survivalPerks/120px-IconPerks_darkSense.png";
theImages[40] ="../PerksIcons/survivalPerks/120px-IconPerks_adrenaline.png";


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

            $("#perk1").append("<img src='../Image/PerkBackgroundIcon.jpg'>");
            $("#perk2").append("<img src='../Image/PerkBackgroundIcon.jpg'>");
            $("#perk3").append("<img src='../Image/PerkBackgroundIcon.jpg'>");
            $("#perk4").append("<img src='../Image/PerkBackgroundIcon.jpg'>");

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
