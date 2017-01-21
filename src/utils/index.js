const RUN_MAP = {
  "WD": 1,
  "NB": 1,
}


export function getOvers(balls){
  const overs = parseInt(balls / 6);
  const bowled = parseInt(balls % 6);
  return `${overs}.${bowled}`;
}

export function getOverInfo(figures){
  const mappedFigurs = figures.map((fig) => fig.extra && fig.extra != "WICKET" ? {
    balls: fig.extra in RUN_MAP ? 0 : 1,
    runs: parseInt(fig.runs) + fig.extra in RUN_MAP ? 0 : 1
  } : {
    balls: 1,
    runs: parseInt(fig.runs)
  });

  return mappedFigurs.reduce(function(a, b){
    return {
      balls: a.balls + b.balls,
      runs: a.runs + b.runs
    }
  });
}

export function getRuns(res){
  console.log(res);
  const runs = res.extra in RUN_MAP ? 1: 0;
  return parseInt(res.runs) + parseInt(runs);
}

export function isExtra(run){
  return run.extra in RUN_MAP;
}

export function getUnplayedBatsman(players){
  return players.filter((men) => (men.inPavilion));
}

export function getPlayedBatsman(players){
  return players.filter((men) => (!men.inPavilion));
}

export function getActiveBatsman(players){
  return players.filter((men) => (!men.isOut && !men.inPavilion));
}
