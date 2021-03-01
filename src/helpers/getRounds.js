export const getRounds = ( results, rounds ) => {
    let { ia_rounds, player_rounds } = rounds;
    switch (results) {
        case null:
            return {
                ia_rounds,
                player_rounds
            };
        case true:
            return {
                ia_rounds,
                player_rounds: player_rounds + 1
            };
        case false:
            return {
                ia_rounds: ia_rounds + 1,
                player_rounds
            };
        default:
            return rounds;
    }
}