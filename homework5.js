const soldiers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const killing = soldiers => {
  let killingSoldiers = [...soldiers];
  let killer;
  let killed;
  let i = 0;
  while (i < soldiers.length) {
    killer = killingSoldiers[i];
    killed = killingSoldiers[i + 1];
    if (killingSoldiers.length == 1) {
      console.log(
        `Soldier nr ${killingSoldiers[killingSoldiers.length - 1]} is alive`
      );
      break;
    } else {
      killingSoldiers.push(killer);
      killingSoldiers.splice(killingSoldiers.indexOf(killed), 1);
      killingSoldiers.splice(killingSoldiers.indexOf(killer), 1);
      console.log(`Soldier ${killer} kills soldier nr ${killed}`);
      console.log(killingSoldiers);
    }
  }
};

killing(soldiers);
