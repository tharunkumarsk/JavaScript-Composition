var MapAndFilter = require("../mapAndFilter");

it("should retun name with !", () => {

    expect(MapAndFilter.mapping(['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler'])).toEqual(['Amanda!', 'Farrin!', 'Geoff!', 'Karen!', 'Richard!', 'Tyler!']);
});

it("should retun name with more than 6 characters", () => {

    expect(MapAndFilter.filter(['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler'])).toEqual(['Richard']);
});