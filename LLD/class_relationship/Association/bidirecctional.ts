class Developer {
    private team?: Team;

    setTeam(team: Team): void {
        if (this.team && this.team !== team) {
            throw new Error("Developer already assigned to another team");
        }
        this.team = team;
    }

    getTeam(): Team | undefined {
        return this.team;
    }
}

class Team {
    private developers: Developer[] = [];

    addDeveloper(dev: Developer): void {
        if (this.developers.includes(dev)) {
            console.log("Developer already in team");
            return;
        }

        this.developers.push(dev);
        dev.setTeam(this);
    }

    getDevelopers(): Developer[] {
        return this.developers;
    }
}

const teamA = new Team();
const dev1 = new Developer();

teamA.addDeveloper(dev1);

console.log(teamA.getDevelopers().length); // 1
console.log(dev1.getTeam() === teamA);     // true
