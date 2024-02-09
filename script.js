document.addEventListener('DOMContentLoaded', function () {
    let userLinks = document.querySelectorAll('.user-link');

    userLinks.forEach(function (userLink) {
        let userNameElement = userLink.querySelector('.user-link-name');

        if (userNameElement) {
            let userName = userNameElement.textContent.trim();

            if (userName.length > 0) {
                let firstLetter = userName.charAt(0).toUpperCase();

                let initLetterElement = userLink.querySelector('.user-init-letter');

                if (initLetterElement) {
                    initLetterElement.textContent = firstLetter;
                }
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var gradients = [
        'linear-gradient(to bottom right, rgb(104, 247, 216), rgb(79, 79, 197))',
        'linear-gradient(to bottom right, rgb(255, 173, 173), rgb(255, 102, 102))',
        'linear-gradient(to bottom right, rgb(255, 200, 87), rgb(255, 150, 87))',
        'linear-gradient(to bottom right, rgb(164, 204, 255), rgb(117, 117, 255))',
        
        'linear-gradient(to bottom right, rgb(146, 232, 173), rgb(84, 190, 136))'
    ];

    var gradientDivs = document.querySelectorAll('.gradient-div');

    gradientDivs.forEach(function (div, index) {
        var gradientIndex = index % gradients.length;
        div.style.backgroundImage = gradients[gradientIndex];
    });
});