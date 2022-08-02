const fs = require('fs').promises;

const TALKERS_FILE = 'talker.json';

const getTalkers = async () => {
  try {
    const talker = await fs.readFile(TALKERS_FILE, 'utf-8');
    const talkers = JSON.parse(talker);
    return talkers;
  } catch (error) {
    return ({ message: error.message });
  }
};

module.exports = { getTalkers };