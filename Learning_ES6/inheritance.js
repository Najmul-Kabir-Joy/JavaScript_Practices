class TeamMemberInfo {
    name;
    id;
    dept;
    address;
    constructor(name, id, dept, address) {
        this.name = name;
        this.id = id;
        this.dept = dept;
        this.address = address;
    }
}

class supports extends TeamMemberInfo {
    totalProjects;

    constructor(name, id, dept, address, totalProjects) {
        super(name, id, dept, address);
        this.totalProjects = totalProjects;
    }
    printer() {
        console.log(this.name, this.id, this.address, this.dept, this.totalProjects);
    }
}

const runner = new supports('najmul', 123, 551, 'bba', 10);
runner.printer();