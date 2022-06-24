class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandartMembership {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory {
    static count = 0;
    static list ={
        simple: SimpleMembership,
        standard: StandartMembership,
        premium: PremiumMembership
    }
    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list['simple'];
        const member = new Membership(name);
        member.type = type;
        MemberFactory.count++;
        return member;
    }
}


const factory = new MemberFactory()

const members = [
    factory.create('Sasha', 'premium'),
    factory.create('Max', 'simple'),
    factory.create('Sveta', 'standard')
]
console.log(MemberFactory.count)

console.log(members);