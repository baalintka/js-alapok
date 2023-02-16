window.addEventListener("load", init);
function init() {
  console.log("hahó");
  var valt1 = "2";
  let valt2 = 2.45;
  const VALT3 = 3;

  atalakitott = parseInt(valt1);
  console.log("valt1", parseInt(valt1), typeof parseInt(valt1));
  console.log("valt2", parseInt(valt2), typeof parseInt(valt2));
  console.log("valt3", typeof VALT3);

  let logikai = 3 < 5;
  console.log("logikai", logikai, typeof logikai);

  let eredmeny = valt1 + valt2;
  console.log("eredmeny", eredmeny, typeof eredmeny);

  elagazasok();
}

function elagazasok() {
  console.log("Elagazaaasooook");
  var szam = 19;
  if (szam % 2 == 0 && szam % 3 == 0) {
    console.log("2ves és 3al is osztható");
  } else if (szam % 2 == 0) {
    console.log("paros");
  } else if (szam % 3 == 0) {
    console.log("3al osztható");
  } else {
    console.log("Egyikkel sem osztható");
  }

  var nap = parseInt(Math.random() * 7) + 1;

  switch (nap) {
    case 1:
      console.log("Hétfő");
      break;
    case 2:
      console.log("Kedd");
      break;

    case 3:
      console.log("Szerda");
      break;
    case 4:
      console.log("Csütörtök");
      break;

    case 5:
      console.log("Péntek");
      break;
    case 6:
      console.log("Szombat");
      break;
    case 7:
      console.log("Vasárnap");
      break;
    default:
      console.log("Ez nem egy hét napja");
  }
}

function cikludok(){
    console.log("ciklusok");
    for (let index = 0; index < 10; index++) {
        var vszam = parseInt(Math.random()*401)+100;
        console.log(vszam);
        
    }

    /**gener veletlen szamokat-20 és +10 zart intervallumban */
    /** addig generaljuk amig poztiv szamot nem kapunk */
    

    do {
        var vszam = parseInt(Math.random()*31)-20;
        console.log(vszam)
     } while (vszam <=0);


    }


