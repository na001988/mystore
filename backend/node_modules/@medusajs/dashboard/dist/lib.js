"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/exports/lib.ts
var lib_exports = {};
__export(lib_exports, {
  createTableAdapter: () => createTableAdapter,
  defineCellRenderer: () => defineCellRenderer
});
module.exports = __toCommonJS(lib_exports);

// src/lib/table/cell-renderers.tsx
var import_react2 = __toESM(require("react"));
var import_ui6 = require("@medusajs/ui");
var import_react_country_flag = __toESM(require("react-country-flag"));
var import_icons2 = require("@medusajs/icons");

// src/lib/data/countries.ts
function getCountryByIso2(iso2) {
  if (!iso2) {
    return;
  }
  return countries.find((c) => c.iso_2.toLowerCase() === iso2.toLowerCase());
}
var countries = [
  {
    iso_2: "af",
    iso_3: "afg",
    num_code: "4",
    name: "AFGHANISTAN",
    display_name: "Afghanistan"
  },
  {
    iso_2: "al",
    iso_3: "alb",
    num_code: "8",
    name: "ALBANIA",
    display_name: "Albania"
  },
  {
    iso_2: "dz",
    iso_3: "dza",
    num_code: "12",
    name: "ALGERIA",
    display_name: "Algeria"
  },
  {
    iso_2: "as",
    iso_3: "asm",
    num_code: "16",
    name: "AMERICAN SAMOA",
    display_name: "American Samoa"
  },
  {
    iso_2: "ad",
    iso_3: "and",
    num_code: "20",
    name: "ANDORRA",
    display_name: "Andorra"
  },
  {
    iso_2: "ao",
    iso_3: "ago",
    num_code: "24",
    name: "ANGOLA",
    display_name: "Angola"
  },
  {
    iso_2: "ai",
    iso_3: "aia",
    num_code: "660",
    name: "ANGUILLA",
    display_name: "Anguilla"
  },
  {
    iso_2: "aq",
    iso_3: "ata",
    num_code: "10",
    name: "ANTARCTICA",
    display_name: "Antarctica"
  },
  {
    iso_2: "ag",
    iso_3: "atg",
    num_code: "28",
    name: "ANTIGUA AND BARBUDA",
    display_name: "Antigua and Barbuda"
  },
  {
    iso_2: "ar",
    iso_3: "arg",
    num_code: "32",
    name: "ARGENTINA",
    display_name: "Argentina"
  },
  {
    iso_2: "am",
    iso_3: "arm",
    num_code: "51",
    name: "ARMENIA",
    display_name: "Armenia"
  },
  {
    iso_2: "aw",
    iso_3: "abw",
    num_code: "533",
    name: "ARUBA",
    display_name: "Aruba"
  },
  {
    iso_2: "au",
    iso_3: "aus",
    num_code: "36",
    name: "AUSTRALIA",
    display_name: "Australia"
  },
  {
    iso_2: "at",
    iso_3: "aut",
    num_code: "40",
    name: "AUSTRIA",
    display_name: "Austria"
  },
  {
    iso_2: "az",
    iso_3: "aze",
    num_code: "31",
    name: "AZERBAIJAN",
    display_name: "Azerbaijan"
  },
  {
    iso_2: "bs",
    iso_3: "bhs",
    num_code: "44",
    name: "BAHAMAS",
    display_name: "Bahamas"
  },
  {
    iso_2: "bh",
    iso_3: "bhr",
    num_code: "48",
    name: "BAHRAIN",
    display_name: "Bahrain"
  },
  {
    iso_2: "bd",
    iso_3: "bgd",
    num_code: "50",
    name: "BANGLADESH",
    display_name: "Bangladesh"
  },
  {
    iso_2: "bb",
    iso_3: "brb",
    num_code: "52",
    name: "BARBADOS",
    display_name: "Barbados"
  },
  {
    iso_2: "by",
    iso_3: "blr",
    num_code: "112",
    name: "BELARUS",
    display_name: "Belarus"
  },
  {
    iso_2: "be",
    iso_3: "bel",
    num_code: "56",
    name: "BELGIUM",
    display_name: "Belgium"
  },
  {
    iso_2: "bz",
    iso_3: "blz",
    num_code: "84",
    name: "BELIZE",
    display_name: "Belize"
  },
  {
    iso_2: "bj",
    iso_3: "ben",
    num_code: "204",
    name: "BENIN",
    display_name: "Benin"
  },
  {
    iso_2: "bm",
    iso_3: "bmu",
    num_code: "60",
    name: "BERMUDA",
    display_name: "Bermuda"
  },
  {
    iso_2: "bt",
    iso_3: "btn",
    num_code: "64",
    name: "BHUTAN",
    display_name: "Bhutan"
  },
  {
    iso_2: "bo",
    iso_3: "bol",
    num_code: "68",
    name: "BOLIVIA",
    display_name: "Bolivia"
  },
  {
    iso_2: "bq",
    iso_3: "bes",
    num_code: "535",
    name: "BONAIRE, SINT EUSTATIUS AND SABA",
    display_name: "Bonaire, Sint Eustatius and Saba"
  },
  {
    iso_2: "ba",
    iso_3: "bih",
    num_code: "70",
    name: "BOSNIA AND HERZEGOVINA",
    display_name: "Bosnia and Herzegovina"
  },
  {
    iso_2: "bw",
    iso_3: "bwa",
    num_code: "72",
    name: "BOTSWANA",
    display_name: "Botswana"
  },
  {
    iso_2: "bv",
    iso_3: "bvd",
    num_code: "74",
    name: "BOUVET ISLAND",
    display_name: "Bouvet Island"
  },
  {
    iso_2: "br",
    iso_3: "bra",
    num_code: "76",
    name: "BRAZIL",
    display_name: "Brazil"
  },
  {
    iso_2: "io",
    iso_3: "iot",
    num_code: "86",
    name: "BRITISH INDIAN OCEAN TERRITORY",
    display_name: "British Indian Ocean Territory"
  },
  {
    iso_2: "bn",
    iso_3: "brn",
    num_code: "96",
    name: "BRUNEI DARUSSALAM",
    display_name: "Brunei Darussalam"
  },
  {
    iso_2: "bg",
    iso_3: "bgr",
    num_code: "100",
    name: "BULGARIA",
    display_name: "Bulgaria"
  },
  {
    iso_2: "bf",
    iso_3: "bfa",
    num_code: "854",
    name: "BURKINA FASO",
    display_name: "Burkina Faso"
  },
  {
    iso_2: "bi",
    iso_3: "bdi",
    num_code: "108",
    name: "BURUNDI",
    display_name: "Burundi"
  },
  {
    iso_2: "kh",
    iso_3: "khm",
    num_code: "116",
    name: "CAMBODIA",
    display_name: "Cambodia"
  },
  {
    iso_2: "cm",
    iso_3: "cmr",
    num_code: "120",
    name: "CAMEROON",
    display_name: "Cameroon"
  },
  {
    iso_2: "ca",
    iso_3: "can",
    num_code: "124",
    name: "CANADA",
    display_name: "Canada"
  },
  {
    iso_2: "cv",
    iso_3: "cpv",
    num_code: "132",
    name: "CAPE VERDE",
    display_name: "Cape Verde"
  },
  {
    iso_2: "ky",
    iso_3: "cym",
    num_code: "136",
    name: "CAYMAN ISLANDS",
    display_name: "Cayman Islands"
  },
  {
    iso_2: "cf",
    iso_3: "caf",
    num_code: "140",
    name: "CENTRAL AFRICAN REPUBLIC",
    display_name: "Central African Republic"
  },
  {
    iso_2: "td",
    iso_3: "tcd",
    num_code: "148",
    name: "CHAD",
    display_name: "Chad"
  },
  {
    iso_2: "cl",
    iso_3: "chl",
    num_code: "152",
    name: "CHILE",
    display_name: "Chile"
  },
  {
    iso_2: "cn",
    iso_3: "chn",
    num_code: "156",
    name: "CHINA",
    display_name: "China"
  },
  {
    iso_2: "cx",
    iso_3: "cxr",
    num_code: "162",
    name: "CHRISTMAS ISLAND",
    display_name: "Christmas Island"
  },
  {
    iso_2: "cc",
    iso_3: "cck",
    num_code: "166",
    name: "COCOS (KEELING) ISLANDS",
    display_name: "Cocos (Keeling) Islands"
  },
  {
    iso_2: "co",
    iso_3: "col",
    num_code: "170",
    name: "COLOMBIA",
    display_name: "Colombia"
  },
  {
    iso_2: "km",
    iso_3: "com",
    num_code: "174",
    name: "COMOROS",
    display_name: "Comoros"
  },
  {
    iso_2: "cg",
    iso_3: "cog",
    num_code: "178",
    name: "CONGO",
    display_name: "Congo"
  },
  {
    iso_2: "cd",
    iso_3: "cod",
    num_code: "180",
    name: "CONGO, THE DEMOCRATIC REPUBLIC OF THE",
    display_name: "Congo, the Democratic Republic of the"
  },
  {
    iso_2: "ck",
    iso_3: "cok",
    num_code: "184",
    name: "COOK ISLANDS",
    display_name: "Cook Islands"
  },
  {
    iso_2: "cr",
    iso_3: "cri",
    num_code: "188",
    name: "COSTA RICA",
    display_name: "Costa Rica"
  },
  {
    iso_2: "ci",
    iso_3: "civ",
    num_code: "384",
    name: "COTE D'IVOIRE",
    display_name: "Cote D'Ivoire"
  },
  {
    iso_2: "hr",
    iso_3: "hrv",
    num_code: "191",
    name: "CROATIA",
    display_name: "Croatia"
  },
  {
    iso_2: "cu",
    iso_3: "cub",
    num_code: "192",
    name: "CUBA",
    display_name: "Cuba"
  },
  {
    iso_2: "cw",
    iso_3: "cuw",
    num_code: "531",
    name: "CURA\xC7AO",
    display_name: "Cura\xE7ao"
  },
  {
    iso_2: "cy",
    iso_3: "cyp",
    num_code: "196",
    name: "CYPRUS",
    display_name: "Cyprus"
  },
  {
    iso_2: "cz",
    iso_3: "cze",
    num_code: "203",
    name: "CZECH REPUBLIC",
    display_name: "Czech Republic"
  },
  {
    iso_2: "dk",
    iso_3: "dnk",
    num_code: "208",
    name: "DENMARK",
    display_name: "Denmark"
  },
  {
    iso_2: "dj",
    iso_3: "dji",
    num_code: "262",
    name: "DJIBOUTI",
    display_name: "Djibouti"
  },
  {
    iso_2: "dm",
    iso_3: "dma",
    num_code: "212",
    name: "DOMINICA",
    display_name: "Dominica"
  },
  {
    iso_2: "do",
    iso_3: "dom",
    num_code: "214",
    name: "DOMINICAN REPUBLIC",
    display_name: "Dominican Republic"
  },
  {
    iso_2: "ec",
    iso_3: "ecu",
    num_code: "218",
    name: "ECUADOR",
    display_name: "Ecuador"
  },
  {
    iso_2: "eg",
    iso_3: "egy",
    num_code: "818",
    name: "EGYPT",
    display_name: "Egypt"
  },
  {
    iso_2: "sv",
    iso_3: "slv",
    num_code: "222",
    name: "EL SALVADOR",
    display_name: "El Salvador"
  },
  {
    iso_2: "gq",
    iso_3: "gnq",
    num_code: "226",
    name: "EQUATORIAL GUINEA",
    display_name: "Equatorial Guinea"
  },
  {
    iso_2: "er",
    iso_3: "eri",
    num_code: "232",
    name: "ERITREA",
    display_name: "Eritrea"
  },
  {
    iso_2: "ee",
    iso_3: "est",
    num_code: "233",
    name: "ESTONIA",
    display_name: "Estonia"
  },
  {
    iso_2: "et",
    iso_3: "eth",
    num_code: "231",
    name: "ETHIOPIA",
    display_name: "Ethiopia"
  },
  {
    iso_2: "fk",
    iso_3: "flk",
    num_code: "238",
    name: "FALKLAND ISLANDS (MALVINAS)",
    display_name: "Falkland Islands (Malvinas)"
  },
  {
    iso_2: "fo",
    iso_3: "fro",
    num_code: "234",
    name: "FAROE ISLANDS",
    display_name: "Faroe Islands"
  },
  {
    iso_2: "fj",
    iso_3: "fji",
    num_code: "242",
    name: "FIJI",
    display_name: "Fiji"
  },
  {
    iso_2: "fi",
    iso_3: "fin",
    num_code: "246",
    name: "FINLAND",
    display_name: "Finland"
  },
  {
    iso_2: "fr",
    iso_3: "fra",
    num_code: "250",
    name: "FRANCE",
    display_name: "France"
  },
  {
    iso_2: "gf",
    iso_3: "guf",
    num_code: "254",
    name: "FRENCH GUIANA",
    display_name: "French Guiana"
  },
  {
    iso_2: "pf",
    iso_3: "pyf",
    num_code: "258",
    name: "FRENCH POLYNESIA",
    display_name: "French Polynesia"
  },
  {
    iso_2: "tf",
    iso_3: "atf",
    num_code: "260",
    name: "FRENCH SOUTHERN TERRITORIES",
    display_name: "French Southern Territories"
  },
  {
    iso_2: "ga",
    iso_3: "gab",
    num_code: "266",
    name: "GABON",
    display_name: "Gabon"
  },
  {
    iso_2: "gm",
    iso_3: "gmb",
    num_code: "270",
    name: "GAMBIA",
    display_name: "Gambia"
  },
  {
    iso_2: "ge",
    iso_3: "geo",
    num_code: "268",
    name: "GEORGIA",
    display_name: "Georgia"
  },
  {
    iso_2: "de",
    iso_3: "deu",
    num_code: "276",
    name: "GERMANY",
    display_name: "Germany"
  },
  {
    iso_2: "gh",
    iso_3: "gha",
    num_code: "288",
    name: "GHANA",
    display_name: "Ghana"
  },
  {
    iso_2: "gi",
    iso_3: "gib",
    num_code: "292",
    name: "GIBRALTAR",
    display_name: "Gibraltar"
  },
  {
    iso_2: "gr",
    iso_3: "grc",
    num_code: "300",
    name: "GREECE",
    display_name: "Greece"
  },
  {
    iso_2: "gl",
    iso_3: "grl",
    num_code: "304",
    name: "GREENLAND",
    display_name: "Greenland"
  },
  {
    iso_2: "gd",
    iso_3: "grd",
    num_code: "308",
    name: "GRENADA",
    display_name: "Grenada"
  },
  {
    iso_2: "gp",
    iso_3: "glp",
    num_code: "312",
    name: "GUADELOUPE",
    display_name: "Guadeloupe"
  },
  {
    iso_2: "gu",
    iso_3: "gum",
    num_code: "316",
    name: "GUAM",
    display_name: "Guam"
  },
  {
    iso_2: "gt",
    iso_3: "gtm",
    num_code: "320",
    name: "GUATEMALA",
    display_name: "Guatemala"
  },
  {
    iso_2: "gg",
    iso_3: "ggy",
    num_code: "831",
    name: "GUERNSEY",
    display_name: "Guernsey"
  },
  {
    iso_2: "gn",
    iso_3: "gin",
    num_code: "324",
    name: "GUINEA",
    display_name: "Guinea"
  },
  {
    iso_2: "gw",
    iso_3: "gnb",
    num_code: "624",
    name: "GUINEA-BISSAU",
    display_name: "Guinea-Bissau"
  },
  {
    iso_2: "gy",
    iso_3: "guy",
    num_code: "328",
    name: "GUYANA",
    display_name: "Guyana"
  },
  {
    iso_2: "ht",
    iso_3: "hti",
    num_code: "332",
    name: "HAITI",
    display_name: "Haiti"
  },
  {
    iso_2: "hm",
    iso_3: "hmd",
    num_code: "334",
    name: "HEARD ISLAND AND MCDONALD ISLANDS",
    display_name: "Heard Island And Mcdonald Islands"
  },
  {
    iso_2: "va",
    iso_3: "vat",
    num_code: "336",
    name: "HOLY SEE (VATICAN CITY STATE)",
    display_name: "Holy See (Vatican City State)"
  },
  {
    iso_2: "hn",
    iso_3: "hnd",
    num_code: "340",
    name: "HONDURAS",
    display_name: "Honduras"
  },
  {
    iso_2: "hk",
    iso_3: "hkg",
    num_code: "344",
    name: "HONG KONG",
    display_name: "Hong Kong"
  },
  {
    iso_2: "hu",
    iso_3: "hun",
    num_code: "348",
    name: "HUNGARY",
    display_name: "Hungary"
  },
  {
    iso_2: "is",
    iso_3: "isl",
    num_code: "352",
    name: "ICELAND",
    display_name: "Iceland"
  },
  {
    iso_2: "in",
    iso_3: "ind",
    num_code: "356",
    name: "INDIA",
    display_name: "India"
  },
  {
    iso_2: "id",
    iso_3: "idn",
    num_code: "360",
    name: "INDONESIA",
    display_name: "Indonesia"
  },
  {
    iso_2: "ir",
    iso_3: "irn",
    num_code: "364",
    name: "IRAN, ISLAMIC REPUBLIC OF",
    display_name: "Iran, Islamic Republic of"
  },
  {
    iso_2: "iq",
    iso_3: "irq",
    num_code: "368",
    name: "IRAQ",
    display_name: "Iraq"
  },
  {
    iso_2: "ie",
    iso_3: "irl",
    num_code: "372",
    name: "IRELAND",
    display_name: "Ireland"
  },
  {
    iso_2: "im",
    iso_3: "imn",
    num_code: "833",
    name: "ISLE OF MAN",
    display_name: "Isle Of Man"
  },
  {
    iso_2: "il",
    iso_3: "isr",
    num_code: "376",
    name: "ISRAEL",
    display_name: "Israel"
  },
  {
    iso_2: "it",
    iso_3: "ita",
    num_code: "380",
    name: "ITALY",
    display_name: "Italy"
  },
  {
    iso_2: "jm",
    iso_3: "jam",
    num_code: "388",
    name: "JAMAICA",
    display_name: "Jamaica"
  },
  {
    iso_2: "jp",
    iso_3: "jpn",
    num_code: "392",
    name: "JAPAN",
    display_name: "Japan"
  },
  {
    iso_2: "je",
    iso_3: "jey",
    num_code: "832",
    name: "JERSEY",
    display_name: "Jersey"
  },
  {
    iso_2: "jo",
    iso_3: "jor",
    num_code: "400",
    name: "JORDAN",
    display_name: "Jordan"
  },
  {
    iso_2: "kz",
    iso_3: "kaz",
    num_code: "398",
    name: "KAZAKHSTAN",
    display_name: "Kazakhstan"
  },
  {
    iso_2: "ke",
    iso_3: "ken",
    num_code: "404",
    name: "KENYA",
    display_name: "Kenya"
  },
  {
    iso_2: "ki",
    iso_3: "kir",
    num_code: "296",
    name: "KIRIBATI",
    display_name: "Kiribati"
  },
  {
    iso_2: "kp",
    iso_3: "prk",
    num_code: "408",
    name: "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
    display_name: "Korea, Democratic People's Republic of"
  },
  {
    iso_2: "kr",
    iso_3: "kor",
    num_code: "410",
    name: "KOREA, REPUBLIC OF",
    display_name: "Korea, Republic of"
  },
  {
    iso_2: "xk",
    iso_3: "xkx",
    num_code: "900",
    name: "KOSOVO",
    display_name: "Kosovo"
  },
  {
    iso_2: "kw",
    iso_3: "kwt",
    num_code: "414",
    name: "KUWAIT",
    display_name: "Kuwait"
  },
  {
    iso_2: "kg",
    iso_3: "kgz",
    num_code: "417",
    name: "KYRGYZSTAN",
    display_name: "Kyrgyzstan"
  },
  {
    iso_2: "la",
    iso_3: "lao",
    num_code: "418",
    name: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
    display_name: "Lao People's Democratic Republic"
  },
  {
    iso_2: "lv",
    iso_3: "lva",
    num_code: "428",
    name: "LATVIA",
    display_name: "Latvia"
  },
  {
    iso_2: "lb",
    iso_3: "lbn",
    num_code: "422",
    name: "LEBANON",
    display_name: "Lebanon"
  },
  {
    iso_2: "ls",
    iso_3: "lso",
    num_code: "426",
    name: "LESOTHO",
    display_name: "Lesotho"
  },
  {
    iso_2: "lr",
    iso_3: "lbr",
    num_code: "430",
    name: "LIBERIA",
    display_name: "Liberia"
  },
  {
    iso_2: "ly",
    iso_3: "lby",
    num_code: "434",
    name: "LIBYA",
    display_name: "Libya"
  },
  {
    iso_2: "li",
    iso_3: "lie",
    num_code: "438",
    name: "LIECHTENSTEIN",
    display_name: "Liechtenstein"
  },
  {
    iso_2: "lt",
    iso_3: "ltu",
    num_code: "440",
    name: "LITHUANIA",
    display_name: "Lithuania"
  },
  {
    iso_2: "lu",
    iso_3: "lux",
    num_code: "442",
    name: "LUXEMBOURG",
    display_name: "Luxembourg"
  },
  {
    iso_2: "mo",
    iso_3: "mac",
    num_code: "446",
    name: "MACAO",
    display_name: "Macao"
  },
  {
    iso_2: "mg",
    iso_3: "mdg",
    num_code: "450",
    name: "MADAGASCAR",
    display_name: "Madagascar"
  },
  {
    iso_2: "mw",
    iso_3: "mwi",
    num_code: "454",
    name: "MALAWI",
    display_name: "Malawi"
  },
  {
    iso_2: "my",
    iso_3: "mys",
    num_code: "458",
    name: "MALAYSIA",
    display_name: "Malaysia"
  },
  {
    iso_2: "mv",
    iso_3: "mdv",
    num_code: "462",
    name: "MALDIVES",
    display_name: "Maldives"
  },
  {
    iso_2: "ml",
    iso_3: "mli",
    num_code: "466",
    name: "MALI",
    display_name: "Mali"
  },
  {
    iso_2: "mt",
    iso_3: "mlt",
    num_code: "470",
    name: "MALTA",
    display_name: "Malta"
  },
  {
    iso_2: "mh",
    iso_3: "mhl",
    num_code: "584",
    name: "MARSHALL ISLANDS",
    display_name: "Marshall Islands"
  },
  {
    iso_2: "mq",
    iso_3: "mtq",
    num_code: "474",
    name: "MARTINIQUE",
    display_name: "Martinique"
  },
  {
    iso_2: "mr",
    iso_3: "mrt",
    num_code: "478",
    name: "MAURITANIA",
    display_name: "Mauritania"
  },
  {
    iso_2: "mu",
    iso_3: "mus",
    num_code: "480",
    name: "MAURITIUS",
    display_name: "Mauritius"
  },
  {
    iso_2: "yt",
    iso_3: "myt",
    num_code: "175",
    name: "MAYOTTE",
    display_name: "Mayotte"
  },
  {
    iso_2: "mx",
    iso_3: "mex",
    num_code: "484",
    name: "MEXICO",
    display_name: "Mexico"
  },
  {
    iso_2: "fm",
    iso_3: "fsm",
    num_code: "583",
    name: "MICRONESIA, FEDERATED STATES OF",
    display_name: "Micronesia, Federated States of"
  },
  {
    iso_2: "md",
    iso_3: "mda",
    num_code: "498",
    name: "MOLDOVA, REPUBLIC OF",
    display_name: "Moldova, Republic of"
  },
  {
    iso_2: "mc",
    iso_3: "mco",
    num_code: "492",
    name: "MONACO",
    display_name: "Monaco"
  },
  {
    iso_2: "mn",
    iso_3: "mng",
    num_code: "496",
    name: "MONGOLIA",
    display_name: "Mongolia"
  },
  {
    iso_2: "me",
    iso_3: "mne",
    num_code: "499",
    name: "MONTENEGRO",
    display_name: "Montenegro"
  },
  {
    iso_2: "ms",
    iso_3: "msr",
    num_code: "500",
    name: "MONTSERRAT",
    display_name: "Montserrat"
  },
  {
    iso_2: "ma",
    iso_3: "mar",
    num_code: "504",
    name: "MOROCCO",
    display_name: "Morocco"
  },
  {
    iso_2: "mz",
    iso_3: "moz",
    num_code: "508",
    name: "MOZAMBIQUE",
    display_name: "Mozambique"
  },
  {
    iso_2: "mm",
    iso_3: "mmr",
    num_code: "104",
    name: "MYANMAR",
    display_name: "Myanmar"
  },
  {
    iso_2: "na",
    iso_3: "nam",
    num_code: "516",
    name: "NAMIBIA",
    display_name: "Namibia"
  },
  {
    iso_2: "nr",
    iso_3: "nru",
    num_code: "520",
    name: "NAURU",
    display_name: "Nauru"
  },
  {
    iso_2: "np",
    iso_3: "npl",
    num_code: "524",
    name: "NEPAL",
    display_name: "Nepal"
  },
  {
    iso_2: "nl",
    iso_3: "nld",
    num_code: "528",
    name: "NETHERLANDS",
    display_name: "Netherlands"
  },
  {
    iso_2: "nc",
    iso_3: "ncl",
    num_code: "540",
    name: "NEW CALEDONIA",
    display_name: "New Caledonia"
  },
  {
    iso_2: "nz",
    iso_3: "nzl",
    num_code: "554",
    name: "NEW ZEALAND",
    display_name: "New Zealand"
  },
  {
    iso_2: "ni",
    iso_3: "nic",
    num_code: "558",
    name: "NICARAGUA",
    display_name: "Nicaragua"
  },
  {
    iso_2: "ne",
    iso_3: "ner",
    num_code: "562",
    name: "NIGER",
    display_name: "Niger"
  },
  {
    iso_2: "ng",
    iso_3: "nga",
    num_code: "566",
    name: "NIGERIA",
    display_name: "Nigeria"
  },
  {
    iso_2: "nu",
    iso_3: "niu",
    num_code: "570",
    name: "NIUE",
    display_name: "Niue"
  },
  {
    iso_2: "nf",
    iso_3: "nfk",
    num_code: "574",
    name: "NORFOLK ISLAND",
    display_name: "Norfolk Island"
  },
  {
    iso_2: "mk",
    iso_3: "mkd",
    num_code: "807",
    name: "NORTH MACEDONIA",
    display_name: "North Macedonia"
  },
  {
    iso_2: "mp",
    iso_3: "mnp",
    num_code: "580",
    name: "NORTHERN MARIANA ISLANDS",
    display_name: "Northern Mariana Islands"
  },
  {
    iso_2: "no",
    iso_3: "nor",
    num_code: "578",
    name: "NORWAY",
    display_name: "Norway"
  },
  {
    iso_2: "om",
    iso_3: "omn",
    num_code: "512",
    name: "OMAN",
    display_name: "Oman"
  },
  {
    iso_2: "pk",
    iso_3: "pak",
    num_code: "586",
    name: "PAKISTAN",
    display_name: "Pakistan"
  },
  {
    iso_2: "pw",
    iso_3: "plw",
    num_code: "585",
    name: "PALAU",
    display_name: "Palau"
  },
  {
    iso_2: "ps",
    iso_3: "pse",
    num_code: "275",
    name: "PALESTINIAN TERRITORY, OCCUPIED",
    display_name: "Palestinian Territory, Occupied"
  },
  {
    iso_2: "pa",
    iso_3: "pan",
    num_code: "591",
    name: "PANAMA",
    display_name: "Panama"
  },
  {
    iso_2: "pg",
    iso_3: "png",
    num_code: "598",
    name: "PAPUA NEW GUINEA",
    display_name: "Papua New Guinea"
  },
  {
    iso_2: "py",
    iso_3: "pry",
    num_code: "600",
    name: "PARAGUAY",
    display_name: "Paraguay"
  },
  {
    iso_2: "pe",
    iso_3: "per",
    num_code: "604",
    name: "PERU",
    display_name: "Peru"
  },
  {
    iso_2: "ph",
    iso_3: "phl",
    num_code: "608",
    name: "PHILIPPINES",
    display_name: "Philippines"
  },
  {
    iso_2: "pn",
    iso_3: "pcn",
    num_code: "612",
    name: "PITCAIRN",
    display_name: "Pitcairn"
  },
  {
    iso_2: "pl",
    iso_3: "pol",
    num_code: "616",
    name: "POLAND",
    display_name: "Poland"
  },
  {
    iso_2: "pt",
    iso_3: "prt",
    num_code: "620",
    name: "PORTUGAL",
    display_name: "Portugal"
  },
  {
    iso_2: "pr",
    iso_3: "pri",
    num_code: "630",
    name: "PUERTO RICO",
    display_name: "Puerto Rico"
  },
  {
    iso_2: "qa",
    iso_3: "qat",
    num_code: "634",
    name: "QATAR",
    display_name: "Qatar"
  },
  {
    iso_2: "re",
    iso_3: "reu",
    num_code: "638",
    name: "REUNION",
    display_name: "Reunion"
  },
  {
    iso_2: "ro",
    iso_3: "rom",
    num_code: "642",
    name: "ROMANIA",
    display_name: "Romania"
  },
  {
    iso_2: "ru",
    iso_3: "rus",
    num_code: "643",
    name: "RUSSIAN FEDERATION",
    display_name: "Russian Federation"
  },
  {
    iso_2: "rw",
    iso_3: "rwa",
    num_code: "646",
    name: "RWANDA",
    display_name: "Rwanda"
  },
  {
    iso_2: "bl",
    iso_3: "blm",
    num_code: "652",
    name: "SAINT BARTH\xC9LEMY",
    display_name: "Saint Barth\xE9lemy"
  },
  {
    iso_2: "sh",
    iso_3: "shn",
    num_code: "654",
    name: "SAINT HELENA",
    display_name: "Saint Helena"
  },
  {
    iso_2: "kn",
    iso_3: "kna",
    num_code: "659",
    name: "SAINT KITTS AND NEVIS",
    display_name: "Saint Kitts and Nevis"
  },
  {
    iso_2: "lc",
    iso_3: "lca",
    num_code: "662",
    name: "SAINT LUCIA",
    display_name: "Saint Lucia"
  },
  {
    iso_2: "mf",
    iso_3: "maf",
    num_code: "663",
    name: "SAINT MARTIN (FRENCH PART)",
    display_name: "Saint Martin (French part)"
  },
  {
    iso_2: "pm",
    iso_3: "spm",
    num_code: "666",
    name: "SAINT PIERRE AND MIQUELON",
    display_name: "Saint Pierre and Miquelon"
  },
  {
    iso_2: "vc",
    iso_3: "vct",
    num_code: "670",
    name: "SAINT VINCENT AND THE GRENADINES",
    display_name: "Saint Vincent and the Grenadines"
  },
  {
    iso_2: "ws",
    iso_3: "wsm",
    num_code: "882",
    name: "SAMOA",
    display_name: "Samoa"
  },
  {
    iso_2: "sm",
    iso_3: "smr",
    num_code: "674",
    name: "SAN MARINO",
    display_name: "San Marino"
  },
  {
    iso_2: "st",
    iso_3: "stp",
    num_code: "678",
    name: "SAO TOME AND PRINCIPE",
    display_name: "Sao Tome and Principe"
  },
  {
    iso_2: "sa",
    iso_3: "sau",
    num_code: "682",
    name: "SAUDI ARABIA",
    display_name: "Saudi Arabia"
  },
  {
    iso_2: "sn",
    iso_3: "sen",
    num_code: "686",
    name: "SENEGAL",
    display_name: "Senegal"
  },
  {
    iso_2: "rs",
    iso_3: "srb",
    num_code: "688",
    name: "SERBIA",
    display_name: "Serbia"
  },
  {
    iso_2: "sc",
    iso_3: "syc",
    num_code: "690",
    name: "SEYCHELLES",
    display_name: "Seychelles"
  },
  {
    iso_2: "sl",
    iso_3: "sle",
    num_code: "694",
    name: "SIERRA LEONE",
    display_name: "Sierra Leone"
  },
  {
    iso_2: "sg",
    iso_3: "sgp",
    num_code: "702",
    name: "SINGAPORE",
    display_name: "Singapore"
  },
  {
    iso_2: "sx",
    iso_3: "sxm",
    num_code: "534",
    name: "SINT MAARTEN",
    display_name: "Sint Maarten"
  },
  {
    iso_2: "sk",
    iso_3: "svk",
    num_code: "703",
    name: "SLOVAKIA",
    display_name: "Slovakia"
  },
  {
    iso_2: "si",
    iso_3: "svn",
    num_code: "705",
    name: "SLOVENIA",
    display_name: "Slovenia"
  },
  {
    iso_2: "sb",
    iso_3: "slb",
    num_code: "90",
    name: "SOLOMON ISLANDS",
    display_name: "Solomon Islands"
  },
  {
    iso_2: "so",
    iso_3: "som",
    num_code: "706",
    name: "SOMALIA",
    display_name: "Somalia"
  },
  {
    iso_2: "za",
    iso_3: "zaf",
    num_code: "710",
    name: "SOUTH AFRICA",
    display_name: "South Africa"
  },
  {
    iso_2: "gs",
    iso_3: "sgs",
    num_code: "239",
    name: "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
    display_name: "South Georgia and the South Sandwich Islands"
  },
  {
    iso_2: "ss",
    iso_3: "ssd",
    num_code: "728",
    name: "SOUTH SUDAN",
    display_name: "South Sudan"
  },
  {
    iso_2: "es",
    iso_3: "esp",
    num_code: "724",
    name: "SPAIN",
    display_name: "Spain"
  },
  {
    iso_2: "lk",
    iso_3: "lka",
    num_code: "144",
    name: "SRI LANKA",
    display_name: "Sri Lanka"
  },
  {
    iso_2: "sd",
    iso_3: "sdn",
    num_code: "729",
    name: "SUDAN",
    display_name: "Sudan"
  },
  {
    iso_2: "sr",
    iso_3: "sur",
    num_code: "740",
    name: "SURINAME",
    display_name: "Suriname"
  },
  {
    iso_2: "sj",
    iso_3: "sjm",
    num_code: "744",
    name: "SVALBARD AND JAN MAYEN",
    display_name: "Svalbard and Jan Mayen"
  },
  {
    iso_2: "sz",
    iso_3: "swz",
    num_code: "748",
    name: "SWAZILAND",
    display_name: "Swaziland"
  },
  {
    iso_2: "se",
    iso_3: "swe",
    num_code: "752",
    name: "SWEDEN",
    display_name: "Sweden"
  },
  {
    iso_2: "ch",
    iso_3: "che",
    num_code: "756",
    name: "SWITZERLAND",
    display_name: "Switzerland"
  },
  {
    iso_2: "sy",
    iso_3: "syr",
    num_code: "760",
    name: "SYRIAN ARAB REPUBLIC",
    display_name: "Syrian Arab Republic"
  },
  {
    iso_2: "tw",
    iso_3: "twn",
    num_code: "158",
    name: "TAIWAN, PROVINCE OF CHINA",
    display_name: "Taiwan, Province of China"
  },
  {
    iso_2: "tj",
    iso_3: "tjk",
    num_code: "762",
    name: "TAJIKISTAN",
    display_name: "Tajikistan"
  },
  {
    iso_2: "tz",
    iso_3: "tza",
    num_code: "834",
    name: "TANZANIA, UNITED REPUBLIC OF",
    display_name: "Tanzania, United Republic of"
  },
  {
    iso_2: "th",
    iso_3: "tha",
    num_code: "764",
    name: "THAILAND",
    display_name: "Thailand"
  },
  {
    iso_2: "tl",
    iso_3: "tls",
    num_code: "626",
    name: "TIMOR LESTE",
    display_name: "Timor Leste"
  },
  {
    iso_2: "tg",
    iso_3: "tgo",
    num_code: "768",
    name: "TOGO",
    display_name: "Togo"
  },
  {
    iso_2: "tk",
    iso_3: "tkl",
    num_code: "772",
    name: "TOKELAU",
    display_name: "Tokelau"
  },
  {
    iso_2: "to",
    iso_3: "ton",
    num_code: "776",
    name: "TONGA",
    display_name: "Tonga"
  },
  {
    iso_2: "tt",
    iso_3: "tto",
    num_code: "780",
    name: "TRINIDAD AND TOBAGO",
    display_name: "Trinidad and Tobago"
  },
  {
    iso_2: "tn",
    iso_3: "tun",
    num_code: "788",
    name: "TUNISIA",
    display_name: "Tunisia"
  },
  {
    iso_2: "tr",
    iso_3: "tur",
    num_code: "792",
    name: "TURKEY",
    display_name: "Turkey"
  },
  {
    iso_2: "tm",
    iso_3: "tkm",
    num_code: "795",
    name: "TURKMENISTAN",
    display_name: "Turkmenistan"
  },
  {
    iso_2: "tc",
    iso_3: "tca",
    num_code: "796",
    name: "TURKS AND CAICOS ISLANDS",
    display_name: "Turks and Caicos Islands"
  },
  {
    iso_2: "tv",
    iso_3: "tuv",
    num_code: "798",
    name: "TUVALU",
    display_name: "Tuvalu"
  },
  {
    iso_2: "ug",
    iso_3: "uga",
    num_code: "800",
    name: "UGANDA",
    display_name: "Uganda"
  },
  {
    iso_2: "ua",
    iso_3: "ukr",
    num_code: "804",
    name: "UKRAINE",
    display_name: "Ukraine"
  },
  {
    iso_2: "ae",
    iso_3: "are",
    num_code: "784",
    name: "UNITED ARAB EMIRATES",
    display_name: "United Arab Emirates"
  },
  {
    iso_2: "gb",
    iso_3: "gbr",
    num_code: "826",
    name: "UNITED KINGDOM",
    display_name: "United Kingdom"
  },
  {
    iso_2: "us",
    iso_3: "usa",
    num_code: "840",
    name: "UNITED STATES",
    display_name: "United States"
  },
  {
    iso_2: "um",
    iso_3: "umi",
    num_code: "581",
    name: "UNITED STATES MINOR OUTLYING ISLANDS",
    display_name: "United States Minor Outlying Islands"
  },
  {
    iso_2: "uy",
    iso_3: "ury",
    num_code: "858",
    name: "URUGUAY",
    display_name: "Uruguay"
  },
  {
    iso_2: "uz",
    iso_3: "uzb",
    num_code: "860",
    name: "UZBEKISTAN",
    display_name: "Uzbekistan"
  },
  {
    iso_2: "vu",
    iso_3: "vut",
    num_code: "548",
    name: "VANUATU",
    display_name: "Vanuatu"
  },
  {
    iso_2: "ve",
    iso_3: "ven",
    num_code: "862",
    name: "VENEZUELA",
    display_name: "Venezuela"
  },
  {
    iso_2: "vn",
    iso_3: "vnm",
    num_code: "704",
    name: "VIET NAM",
    display_name: "Viet Nam"
  },
  {
    iso_2: "vg",
    iso_3: "vgb",
    num_code: "92",
    name: "VIRGIN ISLANDS, BRITISH",
    display_name: "Virgin Islands, British"
  },
  {
    iso_2: "vi",
    iso_3: "vir",
    num_code: "850",
    name: "VIRGIN ISLANDS, U.S.",
    display_name: "Virgin Islands, U.S."
  },
  {
    iso_2: "wf",
    iso_3: "wlf",
    num_code: "876",
    name: "WALLIS AND FUTUNA",
    display_name: "Wallis and Futuna"
  },
  {
    iso_2: "eh",
    iso_3: "esh",
    num_code: "732",
    name: "WESTERN SAHARA",
    display_name: "Western Sahara"
  },
  {
    iso_2: "ye",
    iso_3: "yem",
    num_code: "887",
    name: "YEMEN",
    display_name: "Yemen"
  },
  {
    iso_2: "zm",
    iso_3: "zmb",
    num_code: "894",
    name: "ZAMBIA",
    display_name: "Zambia"
  },
  {
    iso_2: "zw",
    iso_3: "zwe",
    num_code: "716",
    name: "ZIMBABWE",
    display_name: "Zimbabwe"
  },
  {
    iso_2: "ax",
    iso_3: "ala",
    num_code: "248",
    name: "\xC5LAND ISLANDS",
    display_name: "\xC5land Islands"
  }
];

// src/components/table/table-cells/product/product-cell/product-cell.tsx
var import_react_i18next = require("react-i18next");

// src/components/common/thumbnail/thumbnail.tsx
var import_icons = require("@medusajs/icons");
var import_ui = require("@medusajs/ui");
var import_jsx_runtime = require("react/jsx-runtime");
var Thumbnail = ({ src, alt, size = "base" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: (0, import_ui.clx)(
        "bg-ui-bg-component border-ui-border-base flex items-center justify-center overflow-hidden rounded border",
        {
          "h-8 w-6": size === "base",
          "h-5 w-4": size === "small"
        }
      ),
      children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "img",
        {
          src,
          alt,
          className: "h-full w-full object-cover object-center"
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_icons.Photo, { className: "text-ui-fg-subtle" })
    }
  );
};

// src/components/common/truncated-text/truncated-text.tsx
var import_ui2 = require("@medusajs/ui");
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var TruncatedText = ({ text, className }) => {
  const ref = (0, import_react.useRef)(null);
  const [overflow, setOverflow] = (0, import_react.useState)(false);
  const check = () => {
    const el2 = ref.current;
    if (el2) {
      setOverflow(el2.scrollWidth > el2.clientWidth);
    }
  };
  return (
    // Cap the tooltip's width and break long unbroken strings so the text
    // wraps inside the bubble instead of overflowing it.
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_ui2.Tooltip,
      {
        content: text,
        hidden: !overflow,
        className: "max-w-[360px] break-words",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "span",
          {
            ref,
            onMouseEnter: check,
            className: (0, import_ui2.clx)("min-w-0 truncate", className),
            children: text
          }
        )
      }
    )
  );
};

// src/components/table/table-cells/product/product-cell/product-cell.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var ProductCell = ({ product }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex h-full w-full max-w-[250px] items-center gap-x-3 overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-fit flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Thumbnail, { src: product.thumbnail }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TruncatedText, { text: product.title })
  ] });
};

// src/components/table/table-cells/product/collection-cell/collection-cell.tsx
var import_react_i18next2 = require("react-i18next");

// src/components/table/table-cells/common/placeholder-cell/placeholder-cell.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var PlaceholderCell = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex h-full w-full items-center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-ui-fg-muted", children: "-" }) });
};

// src/components/table/table-cells/product/collection-cell/collection-cell.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var CollectionCell = ({ collection }) => {
  if (!collection) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(PlaceholderCell, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "truncate", children: collection.title }) });
};

// src/components/table/table-cells/product/variant-cell/variant-cell.tsx
var import_react_i18next3 = require("react-i18next");
var import_jsx_runtime6 = require("react/jsx-runtime");
var VariantCell = ({ variants }) => {
  const { t } = (0, import_react_i18next3.useTranslation)();
  if (!variants || !variants.length) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PlaceholderCell, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "truncate", children: t("products.variantCount", { count: variants.length }) }) });
};

// src/components/table/table-cells/product/product-status-cell/product-status-cell.tsx
var import_react_i18next4 = require("react-i18next");

// src/components/data-table/components/data-table-status-cell/data-table-status-cell.tsx
var import_ui3 = require("@medusajs/ui");
var import_jsx_runtime7 = require("react/jsx-runtime");
var DataTableStatusIndicator = ({
  color,
  className,
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      className: (0, import_ui3.clx)(
        "txt-compact-small text-ui-fg-subtle flex h-full items-center gap-x-2",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "div",
          {
            role: "presentation",
            className: "flex h-5 w-2 items-center justify-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "div",
              {
                className: (0, import_ui3.clx)(
                  "h-2 w-2 rounded-sm shadow-[0px_0px_0px_1px_rgba(0,0,0,0.12)_inset]",
                  {
                    "bg-ui-tag-neutral-icon": color === "grey",
                    "bg-ui-tag-green-icon": color === "green",
                    "bg-ui-tag-red-icon": color === "red",
                    "bg-ui-tag-blue-icon": color === "blue",
                    "bg-ui-tag-orange-icon": color === "orange",
                    "bg-ui-tag-purple-icon": color === "purple"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "truncate", children })
      ]
    }
  );
};

// src/components/table/table-cells/product/product-status-cell/product-status-cell.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var ProductStatusCell = ({ status }) => {
  const { t } = (0, import_react_i18next4.useTranslation)();
  const variant = {
    draft: ["grey", t("products.productStatus.draft")],
    proposed: ["orange", t("products.productStatus.proposed")],
    published: ["green", t("products.productStatus.published")],
    rejected: ["red", t("products.productStatus.rejected")]
  }[status];
  if (!variant) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PlaceholderCell, {});
  }
  const [color, text] = variant;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(DataTableStatusIndicator, { className: "w-[92px]", color, children: text });
};

// src/components/table/table-cells/common/date-cell/date-cell.tsx
var import_ui4 = require("@medusajs/ui");
var import_react_i18next6 = require("react-i18next");

// src/hooks/use-date.tsx
var import_date_fns = require("date-fns");
var import_locale2 = require("date-fns/locale");
var import_react_i18next5 = require("react-i18next");

// src/i18n/languages.ts
var import_locale = require("date-fns/locale");
var languages = [
  {
    code: "bs",
    display_name: "Bosanski",
    ltr: true,
    date_locale: import_locale.bs
  },
  {
    code: "bg",
    display_name: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438",
    ltr: true,
    date_locale: import_locale.bg
  },
  {
    code: "en",
    display_name: "English",
    ltr: true,
    date_locale: import_locale.enUS
  },
  {
    code: "enGB",
    display_name: "English (UK)",
    ltr: true,
    date_locale: import_locale.enGB
  },
  {
    code: "es",
    display_name: "Espa\xF1ol",
    ltr: true,
    date_locale: import_locale.es
  },
  {
    code: "el",
    display_name: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
    ltr: true,
    date_locale: import_locale.el
  },
  {
    code: "de",
    display_name: "Deutsch",
    ltr: true,
    date_locale: import_locale.de
  },
  {
    code: "fr",
    display_name: "Fran\xE7ais",
    ltr: true,
    date_locale: import_locale.fr
  },
  {
    code: "he",
    display_name: "\u05E2\u05D1\u05E8\u05D9\u05EA",
    ltr: false,
    date_locale: import_locale.he
  },
  {
    code: "hr",
    display_name: "Hrvatski",
    ltr: true,
    date_locale: import_locale.hr
  },
  {
    code: "hu",
    display_name: "Magyar",
    ltr: true,
    date_locale: import_locale.hu
  },
  {
    code: "it",
    display_name: "Italiano",
    ltr: true,
    date_locale: import_locale.it
  },
  {
    code: "ja",
    display_name: "\u65E5\u672C\u8A9E",
    ltr: true,
    date_locale: import_locale.ja
  },
  {
    code: "pl",
    display_name: "Polski",
    ltr: true,
    date_locale: import_locale.pl
  },
  {
    code: "ptBR",
    display_name: "Portugu\xEAs (Brasil)",
    ltr: true,
    date_locale: import_locale.ptBR
  },
  {
    code: "ptPT",
    display_name: "Portugu\xEAs (Portugal)",
    ltr: true,
    date_locale: import_locale.pt
  },
  {
    code: "tr",
    display_name: "T\xFCrk\xE7e",
    ltr: true,
    date_locale: import_locale.tr
  },
  {
    code: "th",
    display_name: "\u0E44\u0E17\u0E22",
    ltr: true,
    date_locale: import_locale.th
  },
  {
    code: "uk",
    display_name: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
    ltr: true,
    date_locale: import_locale.uk
  },
  {
    code: "ro",
    display_name: "Rom\xE2n\u0103",
    ltr: true,
    date_locale: import_locale.ro
  },
  {
    code: "mk",
    display_name: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438",
    ltr: true,
    date_locale: import_locale.mk
  },
  {
    code: "mn",
    display_name: "\u041C\u043E\u043D\u0433\u043E\u043B",
    ltr: true,
    date_locale: import_locale.mn
  },
  {
    code: "ar",
    display_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    ltr: false,
    date_locale: import_locale.ar
  },
  {
    code: "zhCN",
    display_name: "\u7B80\u4F53\u4E2D\u6587",
    ltr: true,
    date_locale: import_locale.zhCN
  },
  {
    code: "fa",
    display_name: "\u0641\u0627\u0631\u0633\u06CC",
    ltr: false,
    date_locale: import_locale.faIR
  },
  {
    code: "cs",
    display_name: "\u010Ce\u0161tina",
    ltr: true,
    date_locale: import_locale.cs
  },
  {
    code: "ru",
    display_name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    ltr: true,
    date_locale: import_locale.ru
  },
  {
    code: "lt",
    display_name: "Lietuvi\u0161kai",
    ltr: true,
    date_locale: import_locale.lt
  },
  {
    code: "vi",
    display_name: "Ti\u1EBFng Vi\u1EC7t",
    ltr: true,
    date_locale: import_locale.vi
  },
  {
    code: "id",
    display_name: "Bahasa Indonesia",
    ltr: true,
    date_locale: import_locale.id
  },
  {
    code: "ko",
    display_name: "\uD55C\uAD6D\uC5B4",
    ltr: true,
    date_locale: import_locale.ko
  },
  {
    code: "nl",
    display_name: "Nederlands",
    ltr: true,
    date_locale: import_locale.nl
  },
  {
    code: "zhTW",
    display_name: "\u7E41\u9AD4\u4E2D\u6587(\u81FA\u7063)",
    ltr: true,
    date_locale: import_locale.zhTW
  }
];

// src/hooks/use-date.tsx
var useDate = () => {
  const { i18n } = (0, import_react_i18next5.useTranslation)();
  const locale = languages.find((l) => l.code === i18n.language)?.date_locale || import_locale2.enUS;
  const getFullDate = ({
    date,
    includeTime = false
  }) => {
    const ensuredDate = new Date(date);
    if (isNaN(ensuredDate.getTime())) {
      return "";
    }
    const timeFormat = includeTime ? "p" : "";
    return (0, import_date_fns.format)(ensuredDate, `PP ${timeFormat}`, {
      locale
    });
  };
  function getRelativeDate(date) {
    const now = /* @__PURE__ */ new Date();
    return (0, import_date_fns.formatDistance)((0, import_date_fns.sub)(new Date(date), { minutes: 0 }), now, {
      addSuffix: true,
      locale
    });
  }
  return {
    getFullDate,
    getRelativeDate
  };
};

// src/components/table/table-cells/common/date-cell/date-cell.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var DateCell = ({ date }) => {
  const { getFullDate } = useDate();
  if (!date) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(PlaceholderCell, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    import_ui4.Tooltip,
    {
      className: "z-10",
      content: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-pretty", children: `${getFullDate({
        date,
        includeTime: true
      })}` }),
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "truncate", children: getFullDate({ date, includeTime: false }) })
    }
  ) });
};

// src/components/table/table-cells/order/display-id-cell/display-id-cell.tsx
var import_react_i18next7 = require("react-i18next");
var import_jsx_runtime10 = require("react/jsx-runtime");
var DisplayIdCell = ({ displayId }) => {
  if (!displayId) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(PlaceholderCell, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "text-ui-fg-subtle txt-compact-small flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: "truncate", children: [
    "#",
    displayId
  ] }) });
};

// src/components/table/table-cells/order/total-cell/total-cell.tsx
var import_react_i18next8 = require("react-i18next");

// src/components/table/table-cells/common/money-amount-cell/money-amount-cell.tsx
var import_ui5 = require("@medusajs/ui");

// src/lib/data/currencies.ts
var currencies = {
  USD: {
    code: "USD",
    name: "US Dollar",
    symbol_native: "$",
    decimal_digits: 2
  },
  CAD: {
    code: "CAD",
    name: "Canadian Dollar",
    symbol_native: "$",
    decimal_digits: 2
  },
  EUR: {
    code: "EUR",
    name: "Euro",
    symbol_native: "\u20AC",
    decimal_digits: 2
  },
  AED: {
    code: "AED",
    name: "United Arab Emirates Dirham",
    symbol_native: "\u062F.\u0625.\u200F",
    decimal_digits: 2
  },
  AFN: {
    code: "AFN",
    name: "Afghan Afghani",
    symbol_native: "\u060B",
    decimal_digits: 0
  },
  ALL: {
    code: "ALL",
    name: "Albanian Lek",
    symbol_native: "Lek",
    decimal_digits: 0
  },
  AMD: {
    code: "AMD",
    name: "Armenian Dram",
    symbol_native: "\u0564\u0580.",
    decimal_digits: 0
  },
  AOA: {
    code: "AOA",
    name: "Angolan Kwanza",
    symbol_native: "Kz",
    decimal_digits: 2
  },
  ARS: {
    code: "ARS",
    name: "Argentine Peso",
    symbol_native: "$",
    decimal_digits: 2
  },
  AUD: {
    code: "AUD",
    name: "Australian Dollar",
    symbol_native: "$",
    decimal_digits: 2
  },
  AZN: {
    code: "AZN",
    name: "Azerbaijani Manat",
    symbol_native: "\u043C\u0430\u043D.",
    decimal_digits: 2
  },
  BAM: {
    code: "BAM",
    name: "Bosnia-Herzegovina Convertible Mark",
    symbol_native: "KM",
    decimal_digits: 2
  },
  BDT: {
    code: "BDT",
    name: "Bangladeshi Taka",
    symbol_native: "\u09F3",
    decimal_digits: 2
  },
  BGN: {
    code: "BGN",
    name: "Bulgarian Lev",
    symbol_native: "\u043B\u0432.",
    decimal_digits: 2
  },
  BHD: {
    code: "BHD",
    name: "Bahraini Dinar",
    symbol_native: "\u062F.\u0628.\u200F",
    decimal_digits: 3
  },
  BIF: {
    code: "BIF",
    name: "Burundian Franc",
    symbol_native: "FBu",
    decimal_digits: 0
  },
  BND: {
    code: "BND",
    name: "Brunei Dollar",
    symbol_native: "$",
    decimal_digits: 2
  },
  BOB: {
    code: "BOB",
    name: "Bolivian Boliviano",
    symbol_native: "Bs",
    decimal_digits: 2
  },
  BRL: {
    code: "BRL",
    name: "Brazilian Real",
    symbol_native: "R$",
    decimal_digits: 2
  },
  BWP: {
    code: "BWP",
    name: "Botswanan Pula",
    symbol_native: "P",
    decimal_digits: 2
  },
  BYN: {
    code: "BYN",
    name: "Belarusian Ruble",
    symbol_native: "\u0440\u0443\u0431.",
    decimal_digits: 2
  },
  BZD: {
    code: "BZD",
    name: "Belize Dollar",
    symbol_native: "$",
    decimal_digits: 2
  },
  CDF: {
    code: "CDF",
    name: "Congolese Franc",
    symbol_native: "FrCD",
    decimal_digits: 2
  },
  CHF: {
    code: "CHF",
    name: "Swiss Franc",
    symbol_native: "CHF",
    decimal_digits: 2
  },
  CLP: {
    code: "CLP",
    name: "Chilean Peso",
    symbol_native: "$",
    decimal_digits: 0
  },
  CNY: {
    code: "CNY",
    name: "Chinese Yuan",
    symbol_native: "CN\xA5",
    decimal_digits: 2
  },
  COP: {
    code: "COP",
    name: "Colombian Peso",
    symbol_native: "$",
    decimal_digits: 0
  },
  CRC: {
    code: "CRC",
    name: "Costa Rican Col\xF3n",
    symbol_native: "\u20A1",
    decimal_digits: 0
  },
  CVE: {
    code: "CVE",
    name: "Cape Verdean Escudo",
    symbol_native: "CV$",
    decimal_digits: 2
  },
  CZK: {
    code: "CZK",
    name: "Czech Republic Koruna",
    symbol_native: "K\u010D",
    decimal_digits: 2
  },
  DJF: {
    code: "DJF",
    name: "Djiboutian Franc",
    symbol_native: "Fdj",
    decimal_digits: 0
  },
  DKK: {
    code: "DKK",
    name: "Danish Krone",
    symbol_native: "kr",
    decimal_digits: 2
  },
  DOP: {
    code: "DOP",
    name: "Dominican Peso",
    symbol_native: "RD$",
    decimal_digits: 2
  },
  DZD: {
    code: "DZD",
    name: "Algerian Dinar",
    symbol_native: "\u062F.\u062C.\u200F",
    decimal_digits: 2
  },
  EEK: {
    code: "EEK",
    name: "Estonian Kroon",
    symbol_native: "kr",
    decimal_digits: 2
  },
  EGP: {
    code: "EGP",
    name: "Egyptian Pound",
    symbol_native: "\u062C.\u0645.\u200F",
    decimal_digits: 2
  },
  ERN: {
    code: "ERN",
    name: "Eritrean Nakfa",
    symbol_native: "Nfk",
    decimal_digits: 2
  },
  ETB: {
    code: "ETB",
    name: "Ethiopian Birr",
    symbol_native: "Br",
    decimal_digits: 2
  },
  GBP: {
    code: "GBP",
    name: "British Pound Sterling",
    symbol_native: "\xA3",
    decimal_digits: 2
  },
  GEL: {
    code: "GEL",
    name: "Georgian Lari",
    symbol_native: "GEL",
    decimal_digits: 2
  },
  GHS: {
    code: "GHS",
    name: "Ghanaian Cedi",
    symbol_native: "GH\u20B5",
    decimal_digits: 2
  },
  GMD: {
    code: "GMD",
    name: "Gambian Dalasi",
    symbol_native: "D",
    decimal_digits: 2
  },
  GNF: {
    code: "GNF",
    name: "Guinean Franc",
    symbol_native: "FG",
    decimal_digits: 0
  },
  GTQ: {
    code: "GTQ",
    name: "Guatemalan Quetzal",
    symbol_native: "Q",
    decimal_digits: 2
  },
  HKD: {
    code: "HKD",
    name: "Hong Kong Dollar",
    symbol_native: "$",
    decimal_digits: 2
  },
  HNL: {
    code: "HNL",
    name: "Honduran Lempira",
    symbol_native: "L",
    decimal_digits: 2
  },
  HRK: {
    code: "HRK",
    name: "Croatian Kuna",
    symbol_native: "kn",
    decimal_digits: 2
  },
  HUF: {
    code: "HUF",
    name: "Hungarian Forint",
    symbol_native: "Ft",
    decimal_digits: 0
  },
  IDR: {
    code: "IDR",
    name: "Indonesian Rupiah",
    symbol_native: "Rp",
    decimal_digits: 0
  },
  ILS: {
    code: "ILS",
    name: "Israeli New Sheqel",
    symbol_native: "\u20AA",
    decimal_digits: 2
  },
  INR: {
    code: "INR",
    name: "Indian Rupee",
    symbol_native: "\u20B9",
    decimal_digits: 2
  },
  IQD: {
    code: "IQD",
    name: "Iraqi Dinar",
    symbol_native: "\u062F.\u0639.\u200F",
    decimal_digits: 0
  },
  IRR: {
    code: "IRR",
    name: "Iranian Rial",
    symbol_native: "\uFDFC",
    decimal_digits: 0
  },
  IRT: {
    code: "IRT",
    name: "Iranian Toman",
    symbol_native: "\u062A\u0648\u0645\u0627\u0646",
    decimal_digits: 0
  },
  ISK: {
    code: "ISK",
    name: "Icelandic Kr\xF3na",
    symbol_native: "kr",
    decimal_digits: 0
  },
  JMD: {
    code: "JMD",
    name: "Jamaican Dollar",
    symbol_native: "$",
    decimal_digits: 2
  },
  JOD: {
    code: "JOD",
    name: "Jordanian Dinar",
    symbol_native: "\u062F.\u0623.\u200F",
    decimal_digits: 3
  },
  JPY: {
    code: "JPY",
    name: "Japanese Yen",
    symbol_native: "\uFFE5",
    decimal_digits: 0
  },
  KES: {
    code: "KES",
    name: "Kenyan Shilling",
    symbol_native: "Ksh",
    decimal_digits: 2
  },
  KHR: {
    code: "KHR",
    name: "Cambodian Riel",
    symbol_native: "\u17DB",
    decimal_digits: 2
  },
  KMF: {
    code: "KMF",
    name: "Comorian Franc",
    symbol_native: "FC",
    decimal_digits: 0
  },
  KRW: {
    code: "KRW",
    name: "South Korean Won",
    symbol_native: "\u20A9",
    decimal_digits: 0
  },
  KWD: {
    code: "KWD",
    name: "Kuwaiti Dinar",
    symbol_native: "\u062F.\u0643.\u200F",
    decimal_digits: 3
  },
  KZT: {
    code: "KZT",
    name: "Kazakhstani Tenge",
    symbol_native: "\u0442\u04A3\u0433.",
    decimal_digits: 2
  },
  LBP: {
    code: "LBP",
    name: "Lebanese Pound",
    symbol_native: "\u0644.\u0644.\u200F",
    decimal_digits: 0
  },
  LKR: {
    code: "LKR",
    name: "Sri Lankan Rupee",
    symbol_native: "SL Re",
    decimal_digits: 2
  },
  LTL: {
    code: "LTL",
    name: "Lithuanian Litas",
    symbol_native: "Lt",
    decimal_digits: 2
  },
  LVL: {
    code: "LVL",
    name: "Latvian Lats",
    symbol_native: "Ls",
    decimal_digits: 2
  },
  LYD: {
    code: "LYD",
    name: "Libyan Dinar",
    symbol_native: "\u062F.\u0644.\u200F",
    decimal_digits: 3
  },
  MAD: {
    code: "MAD",
    name: "Moroccan Dirham",
    symbol_native: "\u062F.\u0645.\u200F",
    decimal_digits: 2
  },
  MDL: {
    code: "MDL",
    name: "Moldovan Leu",
    symbol_native: "MDL",
    decimal_digits: 2
  },
  MGA: {
    code: "MGA",
    name: "Malagasy Ariary",
    symbol_native: "MGA",
    decimal_digits: 0
  },
  MKD: {
    code: "MKD",
    name: "Macedonian Denar",
    symbol_native: "MKD",
    decimal_digits: 2
  },
  MMK: {
    code: "MMK",
    name: "Myanma Kyat",
    symbol_native: "K",
    decimal_digits: 0
  },
  MNT: {
    code: "MNT",
    name: "Mongolian Tugrig",
    symbol_native: "\u20AE",
    decimal_digits: 0
  },
  MOP: {
    code: "MOP",
    name: "Macanese Pataca",
    symbol_native: "MOP$",
    decimal_digits: 2
  },
  MUR: {
    code: "MUR",
    name: "Mauritian Rupee",
    symbol_native: "MURs",
    decimal_digits: 0
  },
  MWK: {
    code: "MWK",
    name: "Malawian Kwacha",
    symbol_native: "K",
    decimal_digits: 2
  },
  MXN: {
    code: "MXN",
    name: "Mexican Peso",
    symbol_native: "$",
    decimal_digits: 2
  },
  MYR: {
    code: "MYR",
    name: "Malaysian Ringgit",
    symbol_native: "RM",
    decimal_digits: 2
  },
  MZN: {
    code: "MZN",
    name: "Mozambican Metical",
    symbol_native: "MTn",
    decimal_digits: 2
  },
  NAD: {
    code: "NAD",
    name: "Namibian Dollar",
    symbol_native: "N$",
    decimal_digits: 2
  },
  NGN: {
    code: "NGN",
    name: "Nigerian Naira",
    symbol_native: "\u20A6",
    decimal_digits: 2
  },
  NIO: {
    code: "NIO",
    name: "Nicaraguan C\xF3rdoba",
    symbol_native: "C$",
    decimal_digits: 2
  },
  NOK: {
    code: "NOK",
    name: "Norwegian Krone",
    symbol_native: "kr",
    decimal_digits: 2
  },
  NPR: {
    code: "NPR",
    name: "Nepalese Rupee",
    symbol_native: "\u0928\u0947\u0930\u0942",
    decimal_digits: 2
  },
  NZD: {
    code: "NZD",
    name: "New Zealand Dollar",
    symbol_native: "$",
    decimal_digits: 2
  },
  OMR: {
    code: "OMR",
    name: "Omani Rial",
    symbol_native: "\u0631.\u0639.\u200F",
    decimal_digits: 3
  },
  PAB: {
    code: "PAB",
    name: "Panamanian Balboa",
    symbol_native: "B/.",
    decimal_digits: 2
  },
  PEN: {
    code: "PEN",
    name: "Peruvian Nuevo Sol",
    symbol_native: "S/.",
    decimal_digits: 2
  },
  PHP: {
    code: "PHP",
    name: "Philippine Peso",
    symbol_native: "\u20B1",
    decimal_digits: 2
  },
  PKR: {
    code: "PKR",
    name: "Pakistani Rupee",
    symbol_native: "\u20A8",
    decimal_digits: 0
  },
  PLN: {
    code: "PLN",
    name: "Polish Zloty",
    symbol_native: "z\u0142",
    decimal_digits: 2
  },
  PYG: {
    code: "PYG",
    name: "Paraguayan Guarani",
    symbol_native: "\u20B2",
    decimal_digits: 0
  },
  QAR: {
    code: "QAR",
    name: "Qatari Rial",
    symbol_native: "\u0631.\u0642.\u200F",
    decimal_digits: 2
  },
  RON: {
    code: "RON",
    name: "Romanian Leu",
    symbol_native: "RON",
    decimal_digits: 2
  },
  RSD: {
    code: "RSD",
    name: "Serbian Dinar",
    symbol_native: "\u0434\u0438\u043D.",
    decimal_digits: 0
  },
  RUB: {
    code: "RUB",
    name: "Russian Ruble",
    symbol_native: "\u20BD.",
    decimal_digits: 2
  },
  RWF: {
    code: "RWF",
    name: "Rwandan Franc",
    symbol_native: "FR",
    decimal_digits: 0
  },
  SAR: {
    code: "SAR",
    name: "Saudi Riyal",
    symbol_native: "\u0631.\u0633.\u200F",
    decimal_digits: 2
  },
  SDG: {
    code: "SDG",
    name: "Sudanese Pound",
    symbol_native: "SDG",
    decimal_digits: 2
  },
  SEK: {
    code: "SEK",
    name: "Swedish Krona",
    symbol_native: "kr",
    decimal_digits: 2
  },
  SGD: {
    code: "SGD",
    name: "Singapore Dollar",
    symbol_native: "$",
    decimal_digits: 2
  },
  SOS: {
    code: "SOS",
    name: "Somali Shilling",
    symbol_native: "Ssh",
    decimal_digits: 0
  },
  SYP: {
    code: "SYP",
    name: "Syrian Pound",
    symbol_native: "\u0644.\u0633.\u200F",
    decimal_digits: 0
  },
  THB: {
    code: "THB",
    name: "Thai Baht",
    symbol_native: "\u0E3F",
    decimal_digits: 2
  },
  TND: {
    code: "TND",
    name: "Tunisian Dinar",
    symbol_native: "\u062F.\u062A.\u200F",
    decimal_digits: 3
  },
  TOP: {
    code: "TOP",
    name: "Tongan Pa\u02BBanga",
    symbol_native: "T$",
    decimal_digits: 2
  },
  TJS: {
    code: "TJS",
    name: "Tajikistani Somoni",
    symbol_native: "\u0441.",
    decimal_digits: 2
  },
  TRY: {
    code: "TRY",
    name: "Turkish Lira",
    symbol_native: "TL",
    decimal_digits: 2
  },
  TTD: {
    code: "TTD",
    name: "Trinidad and Tobago Dollar",
    symbol_native: "$",
    decimal_digits: 2
  },
  TWD: {
    code: "TWD",
    name: "New Taiwan Dollar",
    symbol_native: "NT$",
    decimal_digits: 2
  },
  TZS: {
    code: "TZS",
    name: "Tanzanian Shilling",
    symbol_native: "TSh",
    decimal_digits: 0
  },
  UAH: {
    code: "UAH",
    name: "Ukrainian Hryvnia",
    symbol_native: "\u20B4",
    decimal_digits: 2
  },
  UGX: {
    code: "UGX",
    name: "Ugandan Shilling",
    symbol_native: "USh",
    decimal_digits: 0
  },
  UYU: {
    code: "UYU",
    name: "Uruguayan Peso",
    symbol_native: "$",
    decimal_digits: 2
  },
  UZS: {
    code: "UZS",
    name: "Uzbekistan Som",
    symbol_native: "UZS",
    decimal_digits: 0
  },
  VEF: {
    code: "VEF",
    name: "Venezuelan Bol\xEDvar",
    symbol_native: "Bs.F.",
    decimal_digits: 2
  },
  VND: {
    code: "VND",
    name: "Vietnamese Dong",
    symbol_native: "\u20AB",
    decimal_digits: 0
  },
  XAF: {
    code: "XAF",
    name: "CFA Franc BEAC",
    symbol_native: "FCFA",
    decimal_digits: 0
  },
  XOF: {
    code: "XOF",
    name: "CFA Franc BCEAO",
    symbol_native: "CFA",
    decimal_digits: 0
  },
  XPF: {
    code: "XPF",
    name: "CFP Franc",
    symbol_native: "\u20A3",
    decimal_digits: 0
  },
  YER: {
    code: "YER",
    name: "Yemeni Rial",
    symbol_native: "\u0631.\u064A.\u200F",
    decimal_digits: 0
  },
  ZAR: {
    code: "ZAR",
    name: "South African Rand",
    symbol_native: "R",
    decimal_digits: 2
  },
  ZMK: {
    code: "ZMK",
    name: "Zambian Kwacha",
    symbol_native: "ZK",
    decimal_digits: 0
  },
  ZWL: {
    code: "ZWL",
    name: "Zimbabwean Dollar",
    symbol_native: "ZWL$",
    decimal_digits: 0
  }
};

// src/lib/money-amount-helpers.ts
var getDecimalDigits = (currency) => {
  return currencies[currency.toUpperCase()]?.decimal_digits ?? 0;
};
var getNativeSymbol = (currencyCode) => {
  const formatted = new Intl.NumberFormat([], {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "narrowSymbol"
  }).format(0);
  return formatted.replace(/\d/g, "").replace(/[.,]/g, "").trim();
};
var getStylizedAmount = (amount, currencyCode) => {
  const symbol = getNativeSymbol(currencyCode);
  const decimalDigits = getDecimalDigits(currencyCode);
  const lessThanRoundingPrecission = isAmountLessThenRoundingError(
    amount,
    currencyCode
  );
  const total = amount.toLocaleString(void 0, {
    minimumFractionDigits: decimalDigits,
    maximumFractionDigits: decimalDigits,
    signDisplay: lessThanRoundingPrecission ? "exceptZero" : "auto"
  });
  return `${symbol} ${total} ${currencyCode.toUpperCase()}`;
};
var isAmountLessThenRoundingError = (amount, currencyCode) => {
  const decimalDigits = getDecimalDigits(currencyCode);
  return Math.abs(amount) < 1 / 10 ** decimalDigits / 2;
};

// src/components/table/table-cells/common/money-amount-cell/money-amount-cell.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var MoneyAmountCell = ({
  currencyCode,
  amount,
  align = "left",
  className
}) => {
  if (typeof amount === "undefined" || amount === null) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PlaceholderCell, {});
  }
  const formatted = getStylizedAmount(amount, currencyCode);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      className: (0, import_ui5.clx)(
        "flex h-full w-full items-center overflow-hidden",
        {
          "justify-start text-left": align === "left",
          "justify-end text-right": align === "right"
        },
        className
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "truncate", children: formatted })
    }
  );
};

// src/components/table/table-cells/order/total-cell/total-cell.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var TotalCell = ({
  currencyCode,
  total,
  className
}) => {
  if (!total) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PlaceholderCell, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    MoneyAmountCell,
    {
      currencyCode,
      amount: total,
      className,
      align: "right"
    }
  );
};

// src/lib/order-helpers.ts
var getOrderPaymentStatus = (t, status) => {
  const [label, color] = {
    not_paid: [t("orders.payment.status.notPaid"), "red"],
    authorized: [t("orders.payment.status.authorized"), "orange"],
    partially_authorized: [
      t("orders.payment.status.partiallyAuthorized"),
      "red"
    ],
    awaiting: [t("orders.payment.status.awaiting"), "orange"],
    captured: [t("orders.payment.status.captured"), "green"],
    refunded: [t("orders.payment.status.refunded"), "red"],
    partially_refunded: [
      t("orders.payment.status.partiallyRefunded"),
      "orange"
    ],
    partially_captured: [
      t("orders.payment.status.partiallyCaptured"),
      "orange"
    ],
    canceled: [t("orders.payment.status.canceled"), "red"],
    requires_action: [t("orders.payment.status.requiresAction"), "orange"]
  }[status];
  return { label, color };
};
var getOrderFulfillmentStatus = (t, status) => {
  const [label, color] = {
    not_fulfilled: [t("orders.fulfillment.status.notFulfilled"), "red"],
    partially_fulfilled: [
      t("orders.fulfillment.status.partiallyFulfilled"),
      "orange"
    ],
    fulfilled: [t("orders.fulfillment.status.fulfilled"), "green"],
    partially_shipped: [
      t("orders.fulfillment.status.partiallyShipped"),
      "orange"
    ],
    shipped: [t("orders.fulfillment.status.shipped"), "green"],
    delivered: [t("orders.fulfillment.status.delivered"), "green"],
    partially_delivered: [
      t("orders.fulfillment.status.partiallyDelivered"),
      "orange"
    ],
    partially_returned: [
      t("orders.fulfillment.status.partiallyReturned"),
      "orange"
    ],
    returned: [t("orders.fulfillment.status.returned"), "green"],
    canceled: [t("orders.fulfillment.status.canceled"), "red"],
    requires_action: [t("orders.fulfillment.status.requiresAction"), "orange"]
  }[status];
  return { label, color };
};

// src/lib/is-empty.ts
var isEmpty = (value) => {
  return value === null || value === void 0 || typeof value === "string" && value.trim() === "";
};

// src/lib/table/cell-renderers.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var cellRenderers = /* @__PURE__ */ new Map();
var cellResolvers = /* @__PURE__ */ new Map();
function registerCellResolver(key, resolver) {
  cellResolvers.set(key, resolver);
}
function getCellResolver(key) {
  return key ? cellResolvers.get(key) : void 0;
}
var getNestedValue = (obj, path) => {
  return path.split(".").reduce((current, key) => current?.[key], obj);
};
var TextRenderer = (value, _row, _column, _t) => {
  if (isEmpty(value)) {
    return "-";
  }
  return String(value);
};
var HandleRenderer = (value, _row, _column, _t) => {
  if (isEmpty(value)) {
    return "-";
  }
  return `/${value}`;
};
var CountRenderer = (value, row, column, t) => {
  let resolvedValue = value;
  const listField = column?.metadata?.list_field;
  const showItemsLabel = column?.metadata?.show_items_label === true;
  if (listField) {
    const relation = row[listField];
    resolvedValue = Array.isArray(relation) ? relation.length : relation;
  }
  if (Array.isArray(resolvedValue)) {
    return showItemsLabel ? t("general.items", { count: resolvedValue.length }) : resolvedValue.length;
  }
  if (typeof resolvedValue === "number") {
    return showItemsLabel ? t("general.items", { count: resolvedValue }) : resolvedValue;
  }
  return showItemsLabel ? t("general.items", { count: 0 }) : 0;
};
var renderStatusPill = (variant, fallbackLabel, t) => {
  const label = variant.label_key ? t(variant.label_key, variant.label ?? fallbackLabel) : variant.label ?? fallbackLabel;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DataTableStatusIndicator, { color: variant.color ?? "grey", children: label });
};
var StatusRenderer = (value, row, column, t) => {
  const metadata = column.metadata ?? {};
  const rawValue = metadata.value_field !== void 0 ? getNestedValue(row, metadata.value_field) : value;
  const resolver = getCellResolver(metadata.resolver);
  if (resolver) {
    const resolved = resolver(rawValue, row, t);
    if (isEmpty(resolved)) {
      return "-";
    }
    if (import_react2.default.isValidElement(resolved)) {
      return resolved;
    }
    return renderStatusPill(
      resolved,
      String(rawValue ?? ""),
      t
    );
  }
  const variants = metadata.status_variants;
  if (variants) {
    const variant = variants[String(rawValue)];
    if (variant) {
      return renderStatusPill(variant, String(rawValue), t);
    }
  }
  if (isEmpty(rawValue)) {
    return "-";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DataTableStatusIndicator, { color: "grey", children: String(rawValue) });
};
var BadgesRenderer = (value, row, column, t) => {
  const metadata = column.metadata ?? {};
  const maxVisible = typeof metadata.max_visible === "number" ? metadata.max_visible : 2;
  const resolveLabel = (item) => {
    if (isEmpty(item)) {
      return "";
    }
    if (typeof item === "string" || typeof item === "number") {
      return String(item);
    }
    if (metadata.display_field) {
      return item[metadata.display_field] ?? "";
    }
    return item.name || item.title || item.value || "";
  };
  const resolved = metadata.list_field ? row[metadata.list_field] : value;
  if (!Array.isArray(resolved)) {
    const label = resolveLabel(resolved);
    return label ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex min-w-0", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_ui6.Badge, { size: "xsmall", className: "min-w-0", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TruncatedText, { text: label }) }) }) : "-";
  }
  const items = resolved.filter((item) => item !== null && item !== void 0);
  if (items.length === 0) {
    return "-";
  }
  const visible = items.slice(0, maxVisible);
  const remaining = items.length - maxVisible;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex min-w-0 items-center gap-1", children: [
    visible.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_ui6.Badge, { size: "xsmall", className: "min-w-0", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TruncatedText, { text: resolveLabel(item) }) }, index)),
    remaining > 0 && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      import_ui6.Tooltip,
      {
        content: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("ul", { children: items.slice(maxVisible).map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { children: resolveLabel(item) }, index)) }),
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_ui6.Badge, { size: "xsmall", color: "grey", className: "shrink-0", children: t ? t("general.plusCountMore", "+ {{count}} more", {
          count: remaining
        }) : `+${remaining}` })
      }
    )
  ] });
};
var ProductInfoRenderer = (_, row, _column, _t) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ProductCell, { product: row });
};
var CollectionRenderer = (_, row, _column, _t) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CollectionCell, { collection: row.collection });
};
var VariantsRenderer = (_, row, _column, _t) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(VariantCell, { variants: row.variants });
};
var NameRenderer = (_, row, column, t) => {
  const metadata = column.metadata ?? {};
  const source = metadata.name_source ? getNestedValue(row, metadata.name_source) : row;
  const name = [source?.first_name, source?.last_name].filter(Boolean).join(" ").trim();
  if (name) {
    return name;
  }
  const fallbackFields = metadata.fallback_fields ?? [];
  for (const path of fallbackFields) {
    const fallbackValue = getNestedValue(row, path);
    if (fallbackValue) {
      return fallbackValue;
    }
  }
  if (metadata.empty_label_key && t) {
    return t(metadata.empty_label_key, metadata.empty_label ?? "-");
  }
  return "-";
};
var AddressRenderer = (_, row, column, _t) => {
  const address = column.metadata?.address_field ? getNestedValue(row, column.metadata.address_field) : void 0;
  if (!address || typeof address !== "object") {
    return "-";
  }
  const separator = column.metadata?.separator ?? " \u2022 ";
  const parts = [];
  if (address.address_1) {
    parts.push(address.address_1);
  }
  if (address.address_2) {
    parts.push(address.address_2);
  }
  const locality = [address.city, address.province, address.postal_code].filter(Boolean).join(", ");
  if (locality) {
    parts.push(locality);
  }
  if (address.country_code) {
    parts.push(address.country_code.toUpperCase());
  }
  const full = parts.join(separator);
  if (!full) {
    return "-";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TruncatedText, { text: full, className: "max-w-[220px]" });
};
var CountryCodeRenderer = (_, row, column, _t) => {
  const countryCode = getNestedValue(
    row,
    column.metadata?.country_code_field ?? ""
  );
  if (!countryCode) {
    return "-";
  }
  const country = getCountryByIso2(countryCode);
  const displayName = country?.display_name || countryCode.toUpperCase();
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_ui6.Tooltip, { content: displayName, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex size-4 items-center justify-center overflow-hidden rounded-sm", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    import_react_country_flag.default,
    {
      countryCode: countryCode.toUpperCase(),
      svg: true,
      style: {
        width: "16px",
        height: "16px"
      },
      "aria-label": displayName
    }
  ) }) });
};
var DateRenderer = (value, _row, _column, _t) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DateCell, { date: value });
};
var DisplayIdRenderer = (value, _row, _column, _t) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DisplayIdCell, { displayId: value });
};
var CurrencyRenderer = (value, row, _column, _t) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TotalCell, { currencyCode: row.currency_code || "USD", total: value });
};
var NumberRenderer = (value, _row, _column, _t) => {
  if (isEmpty(value)) {
    return "-";
  }
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) {
    return "-";
  }
  return num.toLocaleString();
};
var BooleanRenderer = (value, _row, _column, t) => {
  if (isEmpty(value)) {
    return "-";
  }
  const label = value ? t ? t("fields.yes", "Yes") : "Yes" : t ? t("fields.no", "No") : "No";
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_ui6.Badge, { size: "xsmall", color: value ? "green" : "grey", children: label });
};
var IdRenderer = (value, _row, _column, _t) => {
  return TextRenderer(value, _row, _column, _t);
};
var EmailRenderer = (value, _row, _column, _t) => {
  if (!value) {
    return "-";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "a",
    {
      href: `mailto:${value}`,
      className: "text-ui-fg-interactive hover:text-ui-fg-interactive-hover",
      onClick: (e) => e.stopPropagation(),
      children: value
    }
  );
};
var PhoneRenderer = (value, _row, _column, _t) => {
  if (!value) {
    return "-";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "a",
    {
      href: `tel:${value}`,
      className: "text-ui-fg-interactive hover:text-ui-fg-interactive-hover",
      onClick: (e) => e.stopPropagation(),
      children: value
    }
  );
};
var UrlRenderer = (value, _row, _column, _t) => {
  if (!value) {
    return "-";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "a",
    {
      href: value,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-ui-fg-interactive hover:text-ui-fg-interactive-hover flex items-center gap-1",
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TruncatedText, { text: value, className: "max-w-[200px]" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_icons2.ArrowUpRightOnBox, { className: "h-3 w-3 flex-shrink-0" })
      ]
    }
  );
};
var ImageRenderer = (value, _row, _column, _t) => {
  if (!value) {
    return "-";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "img",
    {
      src: value,
      alt: "",
      className: "h-8 w-8 rounded object-cover",
      onError: (e) => {
        ;
        e.target.style.display = "none";
      }
    }
  );
};
var JsonRenderer = (value, _row, _column, _t) => {
  if (isEmpty(value)) {
    return "-";
  }
  const jsonString = typeof value === "string" ? value : JSON.stringify(value);
  const truncated = jsonString.length > 50 ? jsonString.substring(0, 47) + "..." : jsonString;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    import_ui6.Tooltip,
    {
      content: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("pre", { className: "max-w-[400px] overflow-auto text-xs", children: JSON.stringify(value, null, 2) }),
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-ui-fg-subtle cursor-help font-mono text-xs", children: truncated })
    }
  );
};
cellRenderers.set("text", { render: TextRenderer });
cellRenderers.set("handle", { render: HandleRenderer });
cellRenderers.set("count", { render: CountRenderer });
cellRenderers.set("status", { render: StatusRenderer, truncateTooltip: false });
cellRenderers.set("date", { render: DateRenderer });
cellRenderers.set("timestamp", { render: DateRenderer });
cellRenderers.set("currency", { render: CurrencyRenderer, align: "right" });
cellRenderers.set("number", { render: NumberRenderer, align: "right" });
cellRenderers.set("boolean", {
  render: BooleanRenderer,
  align: "center",
  truncateTooltip: false
});
cellRenderers.set("id", { render: IdRenderer });
cellRenderers.set("email", { render: EmailRenderer });
cellRenderers.set("phone", { render: PhoneRenderer });
cellRenderers.set("url", { render: UrlRenderer, truncateTooltip: false });
cellRenderers.set("image", {
  render: ImageRenderer,
  align: "center",
  truncateTooltip: false
});
cellRenderers.set("json", { render: JsonRenderer, truncateTooltip: false });
cellRenderers.set("datetime", { render: DateRenderer });
cellRenderers.set("badges", { render: BadgesRenderer, truncateTooltip: false });
cellRenderers.set("name", { render: NameRenderer });
cellRenderers.set("address", {
  render: AddressRenderer,
  truncateTooltip: false
});
cellRenderers.set("country_code", {
  render: CountryCodeRenderer,
  align: "center",
  truncateTooltip: false
});
cellRenderers.set("product_info", {
  render: ProductInfoRenderer,
  truncateTooltip: false
});
cellRenderers.set("collection", {
  render: CollectionRenderer,
  truncateTooltip: false
});
cellRenderers.set("variants", {
  render: VariantsRenderer,
  truncateTooltip: false
});
cellRenderers.set("display_id", { render: DisplayIdRenderer });
registerCellResolver("product_status", (value) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ProductStatusCell, { status: value }));
registerCellResolver("order_payment_status", (value, _row, t) => {
  return value ? getOrderPaymentStatus(t, value) : null;
});
registerCellResolver("order_fulfillment_status", (value, _row, t) => {
  return value ? getOrderFulfillmentStatus(t, value) : null;
});
function defineCellRenderer(type, def) {
  cellRenderers.set(type, {
    render: def.render,
    align: def.align,
    truncateTooltip: def.truncateTooltip
  });
}

// src/lib/table/table-adapters.ts
function createTableAdapter(adapter) {
  return {
    // Provide smart defaults
    getRowId: (row) => row.id,
    pageSize: 20,
    queryPrefix: "",
    ...adapter
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTableAdapter,
  defineCellRenderer
});
