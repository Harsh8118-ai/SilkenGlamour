const fs = require('fs');
const path = require('path');

const serviceFiles = [
  'Bleach.json', 'Bridal.json', 'Cleanup.json', 'Dtan.json',
  'Engagement.json', 'FaceWaxing.json', 'Facial.json', 'HairCare.json',
  'HairColour.json', 'Mani.json', 'Massage.json', 'NailArtWork.json',
  'NailExtension.json', 'Party.json', 'Pedi.json', 'Polishing.json',
  'Threading.json', 'WaxingNormal.json', 'WaxingRica.json'
];

const loadServiceData = () => {
  try {
    let allServices = [];
    serviceFiles.forEach(file => {
      const filePath = path.join(__dirname, '..', 'public', 'Json Files', file);
      if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        allServices = allServices.concat(data);
      }
    });
    return allServices;
  } catch (error) {
    console.error('Service loading error:', error);
    return [];
  }
};

module.exports = {
  loadServiceData
};
