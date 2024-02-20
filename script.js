const userGroup = document.querySelector('.user-group')
console.log(userGroup);

const userData = [
    { "userName": "John", "link": "https://example.com/john" },
    { "userName": "Alice", "link": "https://example.com/alice" },
];



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


const usersData = [
    { "userName": "Siddhant Deshmukh", "link": "https://github.com/SiddhantA9L/Beyond" },
    { "userName": "Manorath Bhatt", "link": "https://github.com/manorath833/ml-new" },
    { "userName": "Luckyraj Nandkishor Yemul", "link": "https://github.com/networkcracker/ML-project-2.git" },
    { "userName": "Snehal Patil", "link": "https://github.com/Patil5276/ML-campaign-model" },
    { "userName": "Tanuja Solunke", "link": "https://github.com/tanusoul/ML" },
    { "userName": "Vaishnavi Ambrale", "link": "https://github.com/16vaishnavi/ML-Mania" },
    { "userName": "SIDDHANT S KALE", "link": "https://github.com/siddhantkale7/Sk1" },
    { "userName": "SADIK SALIM SHAIKH", "link": "https://github.com/Humanity007/huamity" },
    { "userName": "Adinath khadap", "link": "https://github.com/freeadinath/ad_pune_flat_price_pred" },
    { "userName": "Yash Mishra", "link": "https://github.com/Yashmishra55/Machine-Learning-Pune-Price-Prediction-Application.git" },
    { "userName": "Yash Sachin Pardeshi", "link": "https://github.com/ypardeshi/Yash" },
    { "userName": "Sheikh Wasif Raza", "link": "https://github.com/WasifRaza16/HouseML.git" },
    { "userName": "Ashish Patil ", "link": "https://github.com/Amp1005/ML_REPO_05" },
    { "userName": "Vaishnavi Vikas Gaikwad", "link": "https://github.com/vcybersecurity01/ML-campain.git" },
    { "userName": "Yash Sanjay Ingle", "link": "https://github.com/Yashingle1307/housingprice.git" },
    { "userName": "Shubham Girase", "link": "https://github.com/Shubhamgirase2004/ml" },
    { "userName": "Vigneya Bhatt", "link": "https://github.com/Vigb123/ML-project/tree/main" },
    { "userName": "Narendra Ganesh Patne", "link": "https://github.com/NarendraPatne/GDSC-Machine-Learning-/tree/main" },
    { "userName": "Bhakti Sonone", "link": "https://github.com/Bhaktisonone/housing.git1" },
    { "userName": "Nidhi Agrawal", "link": "https://github.com/AgrawalNidhi5/NAGLSC.git" },
    { "userName": "Pragati Jangbahadur Saroj", "link": "https://github.com/pragatisaroj1608/pragati.git" },
    { "userName": "Yukti patle", "link": "https://github.com/yuktipatle2005/yukisfirst.git" },
    { "userName": "KESHAVSINGH PAVANSINGH THAKUR", "link": "https://github.com/kestha30/house-price-predictor.git" },
    { "userName": "Pavan Chikatwar", "link": "https://github.com/pavanchikatwar" },
    { "userName": "Yashraj Dudhe", "link": "https://github.com/yashraj-dudhe/machine-learning-model" },
    { "userName": "Shreyas mukurne", "link": "https://github.com/Shreyas0504/myprojects" },
    { "userName": "Palak Singh ", "link": "https://github.com/probalkar/ML-Campaign" },
    { "userName": "Samyak Sudhir Kamble", "link": "https://github.com/SAMYAK009" },
    { "userName": "Rohan Ramdas Pimparkar", "link": "https://github.com/rohanpimparkar26/ML-Testing" },
    { "userName": "Shravani Pankaj Bhalerao", "link": "https://github.com/smilinngg/mlcampaign" },
    { "userName": "Saif Shikalgar", "link": "https://github.com/Reality373/Machine-Learning/tree/main" },
    { "userName": "Harshwardhan Datar", "link": "https://github.com/harshwardhan911/Pune-Housing-Guide1" },
    { "userName": "Pratik Sawant", "link": "https://github.com/Pssawant2004/Pune-house-price-tracking.git" },
    { "userName": "Pratiksha Pramod Kadam", "link": "https://github.com/pratiksha0105/ml" },
    { "userName": "Yashraj Yogesh Wakadkar ", "link": "https://github.com/yash30000/Housing-Price.git" },
    { "userName": "Bilal Aamer", "link": "https://github.com/bilal-aamer" },
    { "userName": "Niral Sachin Firke ", "link": "https://github.com/niralfirke26/niral_pune_flat_price_pred" },
    { "userName": "Shravani Sunil Mundhe ", "link": "https://github.com/ShravaniMundhe04/House-price-predictor/tree/main" },
    { "userName": "Pratik Anpat", "link": "https://github.com/pratikanpat/house-price-predictor" },
    
];

function generateUserHTML(userData) {
    return `
      <div class="user-link">
        <div class="user-link-icon gradient-div">
          <h1 class="user-init-letter"></h1>
        </div>
        <h2 class="user-link-name">${userData.userName}</h2>
        <a href="${userData.link}" class="user-link-button">
          <img src="./github.png" alt="">
        </a>
      </div>
    `;
}


const container = userGroup; 
usersData.forEach(userData => {
  const userHTML = generateUserHTML(userData);
  container.innerHTML += userHTML;
});