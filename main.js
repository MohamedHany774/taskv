const monsterRange = document.getElementById('monster-range');
    const humanRange = document.getElementById('human-range');
    const monsterRangeValue = document.getElementById('monster-range-value');
    const humanRangeValue = document.getElementById('human-range-value');
    const attackBtn = document.getElementById('attack-btn');

    attackBtn.addEventListener('click', () => {
      const humanDecrease = Math.floor(Math.random() * 20) + 1;
      const monsterDecrease = Math.floor(Math.random() * 30) + 10;

      let newHumanValue = parseInt(humanRange.value) - humanDecrease;
      newHumanValue = Math.max(newHumanValue, 0);

      let newMonsterValue = parseInt(monsterRange.value) - monsterDecrease;
      newMonsterValue = Math.max(newMonsterValue, 0);

      humanRange.value = newHumanValue;
      monsterRange.value = newMonsterValue;

      humanRangeValue.textContent = newHumanValue + '%';
      monsterRangeValue.textContent = newMonsterValue + '%';
    });