import * as Waterline from ".";
const waterline = new Waterline();
const userCollection = Waterline.Collection.extend({
    identity: "user",
    connection: "default",
    attributes: {
        firstName: "string",
        lastName: "string",

        // Add a reference to Pets
        pets: {
            collection: "pet",
            via: "owner",
        },
    },
});
const petCollection = Waterline.Collection.extend({
    identity: "pet",
    connection: "default",
    attributes: {
        breed: "string",
        type: "string",
        name: "string",

        // Add a reference to User
        owner: {
            model: "user",
        },
    },
});

waterline.loadCollection(userCollection);
waterline.loadCollection(petCollection);

const config: Waterline.Config = {
    adapters: {
        memory: {}
    },
    connections: {
        default: {
            adapter: "memory",
        },
    },
};

waterline.initialize(config, (err, ontology) => {
    if (err) {
        return console.error(err);
    }

    // Tease out fully initialised models.
    const User: Waterline.Model = ontology.collections.user;
    const Pet: Waterline.Model = ontology.collections.pet;

    User.create({ // First we create a user.
        firstName: "Neil",
        lastName: "Armstrong"
    }).then((user) => { // Then we create the pet
        return Pet.create({
            breed: "beagle",
            type: "dog",
            name: "Astro",
            owner: user.id
        });

    }).then((pet) => { // Then we grab all users and their pets
        return User.find().populate("pets");

    }).then((users) => { // Results of the previous then clause are passed to the next
        console.dir(users);

    }).catch((err) => { // If any errors occur execution jumps to the catch block.
        console.error(err);
    });
});
