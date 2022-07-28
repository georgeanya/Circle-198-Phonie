function startApp() {
  // Your entire app should not necessarily be coded inside this
  // single function (though there's no penalty for that),
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!

  const myInput = document.getElementById("my-num-input");
  const myCountry = document.getElementById("my-country-input");
  const myName = document.getElementById("my-name-input");
  const container = document.querySelector(".mtn-container");
  myInput.addEventListener("input", function (e) {
    e.preventDefault();
    let text = myInput.value.toString();
    if (
      (myCountry.value =
        "nig" & text.includes("803") ||
        text.includes("706") ||
        text.includes("7025") ||
        text.includes("7026") ||
        text.includes("703") ||
        text.includes("704") ||
        text.includes("810") ||
        text.includes("813") ||
        text.includes("816") ||
        text.includes("814") ||
        text.includes("806") ||
        text.includes("906") ||
        text.includes("903"))
    ) {
      let netImage = `<img src="https://res.cloudinary.com/seyitunde/image/upload/v1658828502/mtn.png" alt="mtn logo" id="mtn-logo"></img>`;
      container.innerHTML = netImage;
      document.getElementById("demo").innerHTML =
        "Hi " + myName.value + ", your network service provider is MTN Nigeria";
    } else if (
      (myCountry.value =
        "nig" & text.includes("805") ||
        text.includes("807") ||
        text.includes("705") ||
        text.includes("815") ||
        text.includes("811") ||
        text.includes("905"))
    ) {
      let netImage = `<img src="https://res.cloudinary.com/seyitunde/image/upload/v1658828503/glo.png" id="glo-logo"></img>`;
      container.innerHTML = netImage;
      document.getElementById("demo").innerHTML =
        "Hi " +
        myName.value +
        ", your network  service provider is GLO Nigeria";
    } else if (
      (myCountry.value =
        "nig" & text.includes("802") ||
        text.includes("808") ||
        text.includes("708") ||
        text.includes("812") ||
        text.includes("701") ||
        text.includes("902"))
    ) {
      let netImage = `<img src="https://res.cloudinary.com/seyitunde/image/upload/v1658828507/airtel.png"airtel logo" id="airtel-logo"></img>`;
      container.innerHTML = netImage;
      document.getElementById("demo").innerHTML =
        "Hi " +
        myName.value +
        ", your network  service provider is Airtel Nigeria";
    } else if (
      (myCountry.value =
        "nig" & text.includes("809") ||
        text.includes("818") ||
        text.includes("817") ||
        text.includes("909"))
    ) {
      let netImage = `<img src="https://res.cloudinary.com/seyitunde/image/upload/v1658828503/ninemobile.png" alt="9mobile logo" id="ninemobile-logo"></img>`;
      container.innerHTML = netImage;
      document.getElementById("demo").innerHTML =
        "Hi " +
        myName.value +
        ", your network  service provider is 9mobile Nigeria";
    } else if (
      (myCountry.value =
        "gha" & text.includes("024") ||
        text.includes("054") ||
        text.includes("055") ||
        text.includes("059"))
    ) {
      let netImage = `<img src="https://res.cloudinary.com/seyitunde/image/upload/v1658828503/ninemobile.png" alt="9mobile logo" id="ninemobile-logo"></img>`;
      container.innerHTML = netImage;
      document.getElementById("demo").innerHTML =
        "Hi " + myName.value + ", your network  service provider is MTN Ghana";
    } else if (
      (myCountry.value =
        "gha" & text.includes("026") ||
        text.includes("056") ||
        text.includes("027") ||
        text.includes("057"))
    ) {
      let netImage = `<img src="https://res.cloudinary.com/seyitunde/image/upload/v1658828503/ninemobile.png" alt="9mobile logo" id="ninemobile-logo"></img>`;
      container.innerHTML = netImage;
      document.getElementById("demo").innerHTML =
        "Hi " + myName.value + ", your network  service provider is Tigo Ghana";
    } else if (
      (myCountry.value = "gha" & text.includes("020") || text.includes("050"))
    ) {
      let netImage = `<img src="https://res.cloudinary.com/seyitunde/image/upload/v1658828503/ninemobile.png" alt="9mobile logo" id="ninemobile-logo"></img>`;
      container.innerHTML = netImage;
      document.getElementById("demo").innerHTML =
        "Hi " +
        myName.value +
        ", your network  service provider is Vodafone Ghana";
    } else if ((myCountry.value = "nig" & text.includes("028"))) {
      let netImage = `<img src="https://res.cloudinary.com/seyitunde/image/upload/v1658828503/ninemobile.png" alt="9mobile logo" id="ninemobile-logo"></img>`;
      container.innerHTML = netImage;
      document.getElementById("demo").innerHTML =
        "Hi " +
        myName.value +
        ", your network  service provider is Expresso Ghana";
    } else if (
      (myCountry.value =
        "cam" & text.includes("745") ||
        text.includes("746") ||
        text.includes("747") ||
        text.includes("75") ||
        text.includes("77") ||
        text.includes("748"))
    ) {
      let netImage = `<img src="https://res.cloudinary.com/seyitunde/image/upload/v1658828503/ninemobile.png" alt="9mobile logo" id="ninemobile-logo"></img>`;
      container.innerHTML = netImage;
      document.getElementById("demo").innerHTML =
        "Hi " +
        myName.value +
        ", your network  service provider is MTN Cameroon";
    } else if (
      (myCountry.value =
        "cam" & text.includes("940") ||
        text.includes("941") ||
        text.includes("942") ||
        text.includes("943") ||
        text.includes("944") ||
        text.includes("99") ||
        text.includes("96"))
    ) {
      let netImage = `<img src="https://res.cloudinary.com/seyitunde/image/upload/v1658828503/ninemobile.png" alt="9mobile logo" id="ninemobile-logo"></img>`;
      container.innerHTML = netImage;
      document.getElementById("demo").innerHTML =
        "Hi " +
        myName.value +
        ", your network  service provider is Orange Cameroon";
    } else if (
      (myCountry.value = "cam" & text.includes("22") || text.includes("33"))
    ) {
      let netImage = `<img src="https://res.cloudinary.com/seyitunde/image/upload/v1658828503/ninemobile.png" alt="9mobile logo" id="ninemobile-logo"></img>`;
      container.innerHTML = netImage;
      document.getElementById("demo").innerHTML =
        "Hi " + myName.value + ", your network  service provider is CAMTEL";
    } else if (
      (myCountry.value =
        "ken" & text.includes("11") ||
        text.includes("701") ||
        text.includes("702") ||
        text.includes("703") ||
        text.includes("704") ||
        text.includes("705") ||
        text.includes("706") ||
        text.includes("708") ||
        text.includes("709") ||
        text.includes("710") ||
        text.includes("711") ||
        text.includes("712") ||
        text.includes("713") ||
        text.includes("714") ||
        text.includes("715") ||
        text.includes("716") ||
        text.includes("707") ||
        text.includes("717") ||
        text.includes("718") ||
        text.includes("719") ||
        text.includes("720") ||
        text.includes("721") ||
        text.includes("722") ||
        text.includes("723") ||
        text.includes("724") ||
        text.includes("725") ||
        text.includes("726") ||
        text.includes("727") ||
        text.includes("728") ||
        text.includes("740") ||
        text.includes("741") ||
        text.includes("742") ||
        text.includes("743") ||
        text.includes("745") ||
        text.includes("746") ||
        text.includes("748") ||
        text.includes("790") ||
        text.includes("729"))
    ) {
      let netImage = `<img src="https://res.cloudinary.com/seyitunde/image/upload/v1658828503/ninemobile.png" alt="9mobile logo" id="ninemobile-logo"></img>`;
      container.innerHTML = netImage;
      document.getElementById("demo").innerHTML =
        "Hi " +
        myName.value +
        ", your network  service provider is Safaricom Kenya";
    } else if (
      (myCountry.value =
        "ken" & text.includes("10") ||
        text.includes("731") ||
        text.includes("732") ||
        text.includes("733") ||
        text.includes("734") ||
        text.includes("735") ||
        text.includes("736") ||
        text.includes("738") ||
        text.includes("739") ||
        text.includes("737") ||
        text.includes("751") ||
        text.includes("752") ||
        text.includes("753") ||
        text.includes("754") ||
        text.includes("755") ||
        text.includes("756") ||
        text.includes("750") ||
        text.includes("757") ||
        text.includes("758") ||
        text.includes("759") ||
        text.includes("780") ||
        text.includes("781") ||
        text.includes("782") ||
        text.includes("783") ||
        text.includes("784") ||
        text.includes("785") ||
        text.includes("786") ||
        text.includes("787") ||
        text.includes("788") ||
        text.includes("789"))
    ) {
      let netImage = `<img src="https://res.cloudinary.com/seyitunde/image/upload/v1658828503/ninemobile.png" alt="9mobile logo" id="ninemobile-logo"></img>`;
      container.innerHTML = netImage;
      document.getElementById("demo").innerHTML =
        "Hi " +
        myName.value +
        ", your network  service provider is Airtel Kenya";
      } else if (
        (myCountry.value =
          "ken" & text.includes("940") ||
          text.includes("771") ||
          text.includes("772") ||
          text.includes("773") ||
          text.includes("774") ||
          text.includes("775") ||
          text.includes("776") ||
          text.includes("777") ||
          text.includes("778") ||
          text.includes("779"))
      ) {
        let netImage = `<img src="https://res.cloudinary.com/seyitunde/image/upload/v1658828503/ninemobile.png" alt="9mobile logo" id="ninemobile-logo"></img>`;
        container.innerHTML = netImage;
        document.getElementById("demo").innerHTML =
          "Hi " +
          myName.value +
          ", your network  service provider is Telkom Kenya";
    } else {
      document.getElementById("demo").innerHTML = "Invalid service provider";
      container.innerHTML = "";
      console.log("invalid");
    }
  });
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
