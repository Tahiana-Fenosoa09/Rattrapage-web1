/* =========================
   GET ELEMENTS
========================= */

const languageFilter =
    document.getElementById("languageFilter");

const technologyFilter =
    document.getElementById("technologyFilter");

const levelFilter =
    document.getElementById("levelFilter");

const minPrice =
    document.getElementById("minPrice");

const maxPrice =
    document.getElementById("maxPrice");

const searchInput =
    document.getElementById("searchInput");

const clearFilters =
    document.getElementById("clearFilters");

const courses =
    document.querySelectorAll(".course-card");

const courseCount =
    document.getElementById("courseCount");

const noResults =
    document.getElementById("noResults");

const priceValue =
    document.getElementById("priceValue");


/* =========================
   FILTER FUNCTION
========================= */

function filterCourses() {

    /*
        Get current values
    */

    const selectedLanguage =
        languageFilter.value;

    const selectedTechnology =
        technologyFilter.value;

    const selectedLevel =
        levelFilter.value;

    const minimumPrice =
        Number(minPrice.value);

    const maximumPrice =
        Number(maxPrice.value);

    const searchText =
        searchInput.value.toLowerCase().trim();


    /*
        Keep track of how many
        courses are visible.
    */

    let visibleCourses = 0;


    /* =========================
       CHECK EVERY COURSE
    ========================== */

    courses.forEach(course => {

        /*
            Read the data attributes
            from the HTML.
        */

        const language =
            course.dataset.language;

        const technology =
            course.dataset.technology;

        const level =
            course.dataset.level;

        const price =
            Number(course.dataset.price);


        /*
            Search inside the course
            title + description.
        */

        const courseText =
            course.textContent.toLowerCase();


        /* =========================
           CHECK FILTERS
        ========================== */

        const matchesLanguage =
            selectedLanguage === "all" ||
            language === selectedLanguage;


        const matchesTechnology =
            selectedTechnology === "all" ||
            technology === selectedTechnology;


        const matchesLevel =
            selectedLevel === "all" ||
            level === selectedLevel;


        const matchesPrice =
            price >= minimumPrice &&
            price <= maximumPrice;


        const matchesSearch =
            searchText === "" ||
            courseText.includes(searchText);


        /*
            Course is visible only if
            ALL filters match.
        */

        const shouldDisplay =
            matchesLanguage &&
            matchesTechnology &&
            matchesLevel &&
            matchesPrice &&
            matchesSearch;


        /* =========================
           SHOW / HIDE COURSE
        ========================== */

        if (shouldDisplay) {

            course.style.display = "block";

            visibleCourses++;

        } else {

            course.style.display = "none";
        }

    });


    /* =========================
       UPDATE COURSE COUNT
    ========================== */

    courseCount.textContent =
        visibleCourses;


    /* =========================
       NO RESULTS MESSAGE
    ========================== */

    if (visibleCourses === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";
    }


    /* =========================
       UPDATE PRICE TEXT
    ========================== */

    priceValue.textContent =
        `${formatPrice(minimumPrice)} - ${formatPrice(maximumPrice)} MGA`;
}


/* =========================
   PRICE FORMAT
========================= */

function formatPrice(price) {

    return price.toLocaleString("en-US");
}


/* =========================
   FILTER EVENTS
========================= */

languageFilter.addEventListener(
    "change",
    filterCourses
);

technologyFilter.addEventListener(
    "change",
    filterCourses
);

levelFilter.addEventListener(
    "change",
    filterCourses
);

minPrice.addEventListener(
    "input",
    filterCourses
);

maxPrice.addEventListener(
    "input",
    filterCourses
);

searchInput.addEventListener(
    "input",
    filterCourses
);


/* =========================
   CLEAR ALL FILTERS
========================= */

clearFilters.addEventListener(
    "click",
    function () {

        languageFilter.value = "all";

        technologyFilter.value = "all";

        levelFilter.value = "all";

        minPrice.value = 0;

        maxPrice.value = 300000;

        searchInput.value = "";

        filterCourses();
    }
);

filterCourses();