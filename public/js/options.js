function showInfo(sectionId) {
    // Oculta todas las secciones de información
    var infoContainers = document.getElementsByClassName("info-container");
    for (var i = 0; i < infoContainers.length; i++) {
      infoContainers[i].classList.remove("info-container--show");
    }
  
    // Muestra la sección correspondiente
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add("info-container--show");
  }