'use strict';

const WIZARDS_ARRAY_LENGTH = 4;
const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');
const similarListElement = userDialog.querySelector('.setup-similar-list'); // список, куда будем вставлять похожих персоонажей
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // шаблон, который будем использовать для похожих персоонажей
const wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const wizardsCoatsColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const wizardsEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
const wizards = [];
const fragment = document.createDocumentFragment();


const getRandomNumber = (wizardsArray) => wizardsArray[Math.floor(Math.random() * wizardsArray.length)];

const renderWizards = () => {
  for (let i = 0; i < WIZARDS_ARRAY_LENGTH; i++) {
    wizards.push({
      name: getRandomNumber(wizardsNames) + ' ' + getRandomNumber(wizardsSurnames),
      coatColor: getRandomNumber(wizardsCoatsColors),
      eyesColor: getRandomNumber(wizardsEyesColors)
    })
  }
};

renderWizards();

const renderSimilarWizards = (wizards) => {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;

  return wizardElement;
};


for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderSimilarWizards(wizards[i]));
};

similarListElement.appendChild(fragment);

