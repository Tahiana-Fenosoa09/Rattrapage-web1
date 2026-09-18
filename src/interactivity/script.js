import { coursesData, translations } from "./data.js";

const coursesContainer = document.getElementById("coursesContainer");
const technologyFilter = document.getElementById("technologyFilter");
const levelFilter = document.getElementById("levelFilter");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const priceValue = document.getElementById("priceValue");
const searchInput = document.getElementById("searchInput");
const clearFilters = document.getElementById("clearFilters");
const courseCount = document.getElementById("courseCount");
const noResults = document.getElementById("noResults");
const languageButtons = document.querySelectorAll(".language-button");

let currentLanguage = "en";

function displayCourses(courses) {
    coursesContainer.innerHTML = "";

    courses.forEach(course => {
        const card = document.createElement("article");

        card.className = "course-card";

        card.dataset.technology = course.technology;
        card.dataset.level = course.level;
        card.dataset.price = course.price;

        card.innerHTML = `
            <div class="course-image"
                 style="background-image: url('${course.image}')">

                <span class="technology-badge">
                    ${course.technology}
                </span>

                <span class="level-badge">
                    ${course.level}
                </span>

            </div>

            <div class="course-content">

                <h2>
                    ${course.title[currentLanguage]}
                </h2>

                <p class="price">
                    MGA ${course.price.toLocaleString("en-US")}
                </p>

                <p class="description">
                    ${course.description[currentLanguage]}
                </p>

                <div class="card-buttons">

                    <button class="learn-button">
                        ${translations[currentLanguage].learnMore}
                    </button>

                    <button class="cart-button">
                        ${translations[currentLanguage].addToCart}
                    </button>

                </div>

            </div>
        `;

        coursesContainer.appendChild(card);
    });
}

function filterByTechnology(courses) {
    const technology = technologyFilter.value;

    if (technology === "all") {
        return courses;
    }

    return courses.filter(course =>
        course.technology === technology
    );
}

function filterByLevel(courses) {
    const level = levelFilter.value;

    if (level === "all") {
        return courses;
    }

    return courses.filter(course =>
        course.level === level
    );
}

function filterByPrice(courses) {
    const minimum = Number(minPrice.value);
    const maximum = Number(maxPrice.value);

    return courses.filter(course =>
        course.price >= minimum &&
        course.price <= maximum
    );
}

function filterBySearch(courses) {
    const search = searchInput.value
        .toLowerCase()
        .trim();

    if (search === "") {
        return courses;
    }

    return courses.filter(course => {
        const title =
            course.title[currentLanguage].toLowerCase();

        const description =
            course.description[currentLanguage].toLowerCase();

        const technology =
            course.technology.toLowerCase();

        return (
            title.includes(search) ||
            description.includes(search) ||
            technology.includes(search)
        );
    });
}

function updatePriceDisplay() {
    const minimum = Number(minPrice.value);
    const maximum = Number(maxPrice.value);

    priceValue.textContent =
        `${minimum.toLocaleString()} - ${maximum.toLocaleString()} MGA`;
}

function updateCourseCount(count) {
    courseCount.textContent = count;

    if (count === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

function applyFilters() {
    let filteredCourses = [...coursesData];

    filteredCourses =
        filterByTechnology(filteredCourses);

    filteredCourses =
        filterByLevel(filteredCourses);

    filteredCourses =
        filterByPrice(filteredCourses);

    filteredCourses =
        filterBySearch(filteredCourses);

    displayCourses(filteredCourses);

    updateCourseCount(filteredCourses.length);

    updatePriceDisplay();
}

function updateInterface() {
    const language =
        translations[currentLanguage];

    document.querySelector(
        'label[for="technologyFilter"]'
    ).textContent = language.technology;

    document.querySelector(
        'label[for="levelFilter"]'
    ).textContent = language.level;

    document.querySelector(
        ".price-filter label"
    ).childNodes[0].textContent =
        language.priceRange;

    document.querySelector(
        'label[for="searchInput"]'
    ).textContent = language.search;

    searchInput.placeholder =
        language.keywords;

    clearFilters.textContent =
        language.clearAll;
}

function changeLanguage(language) {
    currentLanguage = language;

    updateInterface();

    applyFilters();
}

technologyFilter.addEventListener(
    "change",
    applyFilters
);

levelFilter.addEventListener(
    "change",
    applyFilters
);

minPrice.addEventListener(
    "input",
    applyFilters
);

maxPrice.addEventListener(
    "input",
    applyFilters
);

searchInput.addEventListener(
    "input",
    applyFilters
);

clearFilters.addEventListener(
    "click",
    () => {
        technologyFilter.value = "all";
        levelFilter.value = "all";
        minPrice.value = 0;
        maxPrice.value = 300000;
        searchInput.value = "";

        applyFilters();
    }
);

languageButtons.forEach(button => {
    button.addEventListener(
        "click",
        () => {
            changeLanguage(
                button.dataset.language
            );
        }
    );
});

displayCourses(coursesData);
updateInterface();
updatePriceDisplay();
updateCourseCount(coursesData.length);