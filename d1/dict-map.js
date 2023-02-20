{
    let Cephalopods;
    (function (Cephalopods) {
        Cephalopods["OctopusVulgaris"] = "OctopusVulgaris";
        Cephalopods["Loligo"] = "Loligo";
    })(Cephalopods || (Cephalopods = {}));
    const dictionary = {};
    // Common octopus
    dictionary[Cephalopods.OctopusVulgaris] = {
        hasInk: true,
        arms: 8,
        tentacles: 0,
    };
    // A kind of squid
    dictionary[Cephalopods.Loligo] = {
        hasInk: true,
        arms: 8,
        tentacles: 2,
    };
}
const brick = {
    backlight: false,
    material: 'brick',
};
const marble = {
    backlight: true,
    material: 'marble',
};
const bark = {
    backlight: false,
    material: 'bark',
};
