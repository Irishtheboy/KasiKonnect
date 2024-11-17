// Function to translate the text in the hero section
function translateText() {
    const targetLang = document.getElementById('languageSelect').value;
    const heroTitle = document.getElementById('hero-title').innerText;
    const heroDescription = document.getElementById('hero-description').innerText;

    // Prepare the request payload for both the title and description
    const translations = {
        title: heroTitle,
        description: heroDescription
    };

    // Make the API call to LibreTranslate
    fetch('https://libretranslate.com/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: translations.title,
            source: 'en', // Source language (English)
            target: targetLang // Target language selected by the user
        })
    })
    .then(response => response.json())
    .then(data => {
        // Update the translated title in the hero section
        document.getElementById('hero-title').innerText = data.translatedText;

        // Translate the description as well
        return fetch('https://libretranslate.com/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                q: translations.description,
                source: 'en',
                target: targetLang
            }),
        })
    })
    .then(response => response.json())
    .then(data => {
        // Update the translated description in the hero section
        document.getElementById('hero-description').innerText = data.translatedText;
    })
    .catch(error => {
        console.error('Error translating text:', error);
    });
}
