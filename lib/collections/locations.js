Locations = new Mongo.Collection("locations");


if (Locations.find().count() == 0) {
    Locations.insert({
        city: 'Lviv',
    });

    Locations.insert({
        city: 'Kyiv',
    });

    Locations.insert({
        city: 'Odesa',
    });

    Locations.insert({
        city: 'Dnipro',
    });
}
