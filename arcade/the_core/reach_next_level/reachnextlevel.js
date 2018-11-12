function reachNextLevel(experience, threshold, reward) {
    if (experience + reward >= threshold) {
        //console.log(reward);
        return true;
    } else {
        return false;
    }
}

// reachNextLevel(10, 15, 5);