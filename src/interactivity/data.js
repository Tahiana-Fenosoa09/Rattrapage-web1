export const coursesData = [
    {
        id: 1,
        technology: "javascript",
        level: "beginner",
        price: 120000,
        image: "images/javascript.jpg",
        title: {
            en: "Javascript for beginners",
            fr: "Javascript pour débutants"
        },
        description: {
            en: "Learn JavaScript and build your first interactive web applications. Discover variables, functions, loops and conditions.",
            fr: "Apprenez JavaScript et créez vos premières applications web interactives. Découvrez les variables, fonctions, boucles et conditions."
        }
    },
    {
        id: 2,
        technology: "java",
        level: "beginner",
        price: 220000,
        image: "images/java.jpg",
        title: {
            en: "Java for beginners",
            fr: "Java pour débutants"
        },
        description: {
            en: "A simple course for beginners in Java. Learn object-oriented programming, classes, objects and inheritance.",
            fr: "Un cours simple pour les débutants en Java. Apprenez la programmation orientée objet, les classes, les objets et l'héritage."
        }
    },
    {
        id: 3,
        technology: "sql",
        level: "intermediate",
        price: 180000,
        image: "images/sql.jpg",
        title: {
            en: "Relational Databases",
            fr: "Bases de données relationnelles"
        },
        description: {
            en: "Understand relational databases, primary keys, foreign keys, constraints and normalization.",
            fr: "Comprenez les bases de données relationnelles, les clés primaires, les clés étrangères, les contraintes et la normalisation."
        }
    },
    {
        id: 4,
        technology: "git",
        level: "beginner",
        price: 95000,
        image: "images/git.jpg",
        title: {
            en: "Git & Version Control",
            fr: "Git & Contrôle de version"
        },
        description: {
            en: "Master Git from scratch. Learn repositories, commits, branches, merging and collaboration.",
            fr: "Maîtrisez Git depuis zéro. Apprenez les dépôts, commits, branches, fusions et la collaboration."
        }
    }
];

export const translations = {
    en: {
        language: "LANGUAGE",
        technology: "TECHNOLOGY",
        level: "LEVEL",
        priceRange: "PRICE RANGE",
        search: "SEARCH",
        keywords: "Keywords...",
        clearAll: "CLEAR ALL",
        allTechnologies: "All technologies",
        allLevels: "All levels",
        coursesFound: "COURSES FOUND",
        learnMore: "Learn more",
        addToCart: "Add to cart",
        noCourses: "No courses found"
    },

    fr: {
        language: "LANGUE",
        technology: "TECHNOLOGIE",
        level: "NIVEAU",
        priceRange: "TRANCHE DE PRIX",
        search: "RECHERCHE",
        keywords: "Mots-clés...",
        clearAll: "TOUT EFFACER",
        allTechnologies: "Toutes les technologies",
        allLevels: "Tous les niveaux",
        coursesFound: "COURS TROUVÉS",
        learnMore: "En savoir plus",
        addToCart: "Ajouter au panier",
        noCourses: "Aucun cours trouvé"
    }
};