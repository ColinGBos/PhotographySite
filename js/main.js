function filter(index) {
    "use strict";
    var galleryItems = document.getElementsByClassName("galleryItem"),
        filters = document.getElementsByClassName("filter-button"),
        display,
        i,
        j;

    for (i = 0; i < filters.length; i++) {
        if (filters[i].className.includes("is-checked")) {
            filters[i].className = filters[i].className.replace(" is-checked", "");
        }
    }

    filters[index].className += " is-checked";
    
    for (i = 0; i < galleryItems.length; i++) {
        display = false;
        for (j = 0; j < filters.length; j++) {
            if ((galleryItems[i].className.includes("nature")) && (filters[j].textContent === "Nature") && (filters[j].className.includes("is-checked"))) {
                display = true;
            }
            if ((galleryItems[i].className.includes("landscape")) && (filters[j].textContent === "Landscape") && (filters[j].className.includes("is-checked"))) {
                display = true;
            }
            if ((galleryItems[i].className.includes("urban")) && (filters[j].textContent === "Urban") && (filters[j].className.includes("is-checked"))) {
                display = true;
            }
            if ((filters[j].textContent === "All") && (filters[j].className.includes("is-checked"))) {
                display = true;
            }
        }
        if (display === false) {
            galleryItems[i].style.display = "none";
        } else {
            galleryItems[i].style.display = "block";
        }
    }
}