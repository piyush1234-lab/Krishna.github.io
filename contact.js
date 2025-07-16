     //Touch effect handlers
    function tou1(elem) {
      elem.style.background = "white";
      elem.style.color = "#111";
      elem.style.transform = "scale(1.05)";
    }

    function touend1(elem) {
      elem.style.background = "rgba(255, 255, 255, 0.15)";
      elem.style.color = "white";
      elem.style.transform = "scale(1)";
    }
    function tou11(elem) {
      elem.style.background = "white";
      elem.style.color = "#111";
      
    }

    function touend11(elem) {
      elem.style.background = "rgba(255, 255, 255, 0.15)";
      elem.style.color = "white";
    }
    function inpu(elem){
        elem.style.background="white"
        elem.style.color="black"
    }
    function deinpu(elem){
        elem.style.background="transparent"
        elem.style.color="white"
    }
    function shad(elem){
        elem.style.boxShadow="0px 0px 20px 15px rgba(255,255,255,0.5)"
        elem.style.border="2px solid black"
    }
    function deshad(elem){
        elem.style.boxShadow="none"
        elem.style.border="none"
    }
     function deshad1(elem){
        elem.style.transform="scale(1.1)"
    }
    function deshad2(elem){
        elem.style.transform="scale(1)"
    }
    function validation(){
    const form = document.getElementById("contact");
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const purpose = form.purpose.value.trim();

    if (name === "" || phone === "" || email === "" || purpose === "") {
      event.preventDefault();
      alert("Please fill all the fields!");
    }
  }