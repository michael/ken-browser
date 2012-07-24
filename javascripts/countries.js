var countries_fixture = {
    "properties": {
        "title": {
            "name": "Country Name",
            "type": "string",
            "unique": true
        },
        "official_language": {
            "name": "Official Language",
            "type": "string",
            "unique": false,
            "meta": {
                "facet": true
            }
        },
        "currency_used": {
            "name": "Currency used",
            "type": "string",
            "unique": false,
            "meta": {
                "facet": true
            }
        },
        "gdp_nominal_per_capita": {
            "name": "GDP (Nominal, per capita)",
            "type": "number",
            "unique": true,
            "meta": {
                "unit": "US$"
            }
        },
        "population": {
            "name": "Population",
            "type": "number",
            "unique": true,
            "meta": {
                "unit": "people"
            }
        },
        "image": {
            "name": "Image URL",
            "type": "string",
            "unique": true
        }
    },
    "items": {
        "/en/algeria": {
            "title": "Algeria",
            "official_language": [
                "Arabic Language",
                "Algerian Arabic",
                "French Language"
            ],
            "currency_used": [
                "Algerian dinar"
            ],
            "gdp_nominal_per_capita": 7100,
            "population": 34895000,
            "image": "images/kevin.png"
        },
        "/en/austria": {
            "title": "Austria",
            "official_language": [
                "Croatian language",
                "Slovenian language",
                "Austrian German",
                "German Language",
                "Hungarian"
            ],
            "currency_used": [
                "Euro",
                "Austrian schilling",
                "Austrian krone"
            ],
            "gdp_nominal_per_capita": 39200,
            "population": 8356700,
            "image": "images/kevin.png"
        },
        "/en/american_samoa": {
            "title": "American Samoa",
            "official_language": [
                "Samoan Language",
                "English Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 8000,
            "population": 67000
        },
        "/en/aruba": {
            "title": "Aruba",
            "official_language": [
                "Dutch Language",
                "Papiamento language",
                "Spanish Language",
                "English Language"
            ],
            "currency_used": [
                "Aruban florin",
                "Euro"
            ],
            "gdp_nominal_per_capita": 21800,
            "population": 107000
        },
        "/en/angola": {
            "title": "Angola",
            "official_language": [
                "Portuguese Language"
            ],
            "currency_used": [
                "Angolan kwanza",
                "Angolan escudo"
            ],
            "gdp_nominal_per_capita": 9100,
            "population": 18498000,
            "image": "images/kevin.png"
        },
        "/en/afghanistan": {
            "title": "Afghanistan",
            "official_language": [
                "Persian Language",
                "Dari",
                "Pashto language"
            ],
            "currency_used": [
                "Afghan afghani"
            ],
            "gdp_nominal_per_capita": 800,
            "population": 28150000
        },
        "/en/albania": {
            "title": "Albania",
            "official_language": [
                "Albanian language"
            ],
            "currency_used": [
                "Albanian lek"
            ],
            "gdp_nominal_per_capita": 6400,
            "population": 3155271
        },
        "/en/argentina": {
            "title": "Argentina",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Argentinian Peso",
                "Argentine peso",
                "Argentine real",
                "Argentine peso argentino",
                "Argentina peso ley"
            ],
            "gdp_nominal_per_capita": 14500,
            "population": 40091359
        },
        "/en/armenia": {
            "title": "Armenia",
            "official_language": [
                "Armenian Language"
            ],
            "currency_used": [
                "Armenian dram"
            ],
            "gdp_nominal_per_capita": 6600,
            "population": 3082951
        },
        "/en/azerbaijan": {
            "title": "Azerbaijan",
            "official_language": [
                "Azerbaijani language"
            ],
            "currency_used": [
                "Azerbaijani manat"
            ],
            "gdp_nominal_per_capita": 9500,
            "population": 8781100
        },
        "/en/antigua_and_barbuda": {
            "title": "Antigua and Barbuda",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 19100,
            "population": 88000
        },
        "/en/anguilla": {
            "title": "Anguilla",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 8800,
            "population": 15000
        },
        "/en/belgium": {
            "title": "Belgium",
            "official_language": [
                "Dutch Language",
                "German Language",
                "French Language"
            ],
            "currency_used": [
                "Euro",
                "Belgian franc",
                "Dutch gulden"
            ],
            "gdp_nominal_per_capita": 38300,
            "population": 10741000,
            "image": "images/kevin.png"
        },
        "/en/berlin": {
            "title": "Berlin",
            "official_language": [],
            "currency_used": [],
            "gdp_nominal_per_capita": 24473,
            "population": 3442675
        },
        "/en/brazil": {
            "title": "Brazil",
            "official_language": [
                "Portuguese Language"
            ],
            "currency_used": [
                "Brazilian real"
            ],
            "gdp_nominal_per_capita": 10300,
            "population": 254100000
        },
        "/en/bulgaria": {
            "title": "Bulgaria",
            "official_language": [
                "Bulgarian Language"
            ],
            "currency_used": [
                "Bulgarian lev"
            ],
            "gdp_nominal_per_capita": 13200,
            "population": 7602100
        },
        "/en/the_bahamas": {
            "title": "The Bahamas",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Bahamian dollar"
            ],
            "gdp_nominal_per_capita": 29900,
            "population": 342000
        },
        "/en/bahrain": {
            "title": "Bahrain",
            "official_language": [
                "Arabic Language",
                "English Language"
            ],
            "currency_used": [
                "Bahraini dinar"
            ],
            "gdp_nominal_per_capita": 37200,
            "population": 791000
        },
        "/en/bangladesh": {
            "title": "Bangladesh",
            "official_language": [
                "Bengali Language"
            ],
            "currency_used": [
                "Bangladeshi taka"
            ],
            "gdp_nominal_per_capita": 1500,
            "population": 162221000
        },
        "/en/barbados": {
            "title": "Barbados",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Barbados dollar"
            ],
            "gdp_nominal_per_capita": 20200,
            "population": 256000
        },
        "/en/belarus": {
            "title": "Belarus",
            "official_language": [
                "Belarusian language",
                "Russian Language"
            ],
            "currency_used": [
                "Belarusian ruble"
            ],
            "gdp_nominal_per_capita": 12000,
            "population": 9663000
        },
        "/en/belize": {
            "title": "Belize",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Belize dollar"
            ],
            "gdp_nominal_per_capita": 8500,
            "population": 333200
        },
        "/en/benin": {
            "title": "Benin",
            "official_language": [
                "French Language"
            ],
            "currency_used": [
                "CFA franc",
                "West African CFA franc"
            ],
            "gdp_nominal_per_capita": 1500,
            "population": 8935000
        },
        "/en/bermuda": {
            "title": "Bermuda",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Bermuda dollar",
                "Bermuda pound"
            ],
            "gdp_nominal_per_capita": 69900,
            "population": 65000
        },
        "/en/bolivia": {
            "title": "Bolivia",
            "official_language": [
                "Spanish Language",
                "Quechua",
                "Puquina Language",
                "Sirionó language",
                "Itonama Language",
                "Tapieté Language",
                "Araona Language",
                "Baure Language",
                "Mòoré Language",
                "Cavineña Language",
                "Pacahuara language",
                "Ayoreo language",
                "Canichana language",
                "Kallawaya",
                "Uru language",
                "Chiquitano language",
                "Leco language",
                "Reyesano language",
                "Wichí Lhamtés Nocten",
                "Chácobo language",
                "Aymara language",
                "Movima language",
                "Cayubaba language",
                "Tacana language"
            ],
            "currency_used": [
                "Bolivian boliviano",
                "Bolivian peso",
                "US$"
            ],
            "gdp_nominal_per_capita": 4700,
            "population": 9863000
        },
        "/en/bosnia_and_herzegovina": {
            "title": "Bosnia and Herzegovina",
            "official_language": [
                "Bosnian language",
                "Serbian language",
                "Croatian language",
                "Serbo-Croatian"
            ],
            "currency_used": [
                "Bosnia and Herzegovina convertible mark",
                "Bosnia and Herzegovina dinar"
            ],
            "gdp_nominal_per_capita": 6600,
            "population": 3767000
        },
        "/en/botswana": {
            "title": "Botswana",
            "official_language": [
                "Tswana Language",
                "English Language"
            ],
            "currency_used": [
                "Botswana pula"
            ],
            "gdp_nominal_per_capita": 15800,
            "population": 1950000
        },
        "/en/brunei": {
            "title": "Brunei",
            "official_language": [
                "Malay Language",
                "English Language"
            ],
            "currency_used": [
                "Brunei dollar"
            ],
            "gdp_nominal_per_capita": 54100,
            "population": 400000
        },
        "/en/british_virgin_islands": {
            "title": "British Virgin Islands",
            "official_language": [],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 38500,
            "population": 23000
        },
        "/en/burkina_faso": {
            "title": "Burkina Faso",
            "official_language": [
                "French Language"
            ],
            "currency_used": [
                "West African CFA franc"
            ],
            "gdp_nominal_per_capita": 1300,
            "population": 15757000
        },
        "/en/burundi": {
            "title": "Burundi",
            "official_language": [
                "Kanuri language",
                "Kirundi language",
                "Swahili Language",
                "French Language"
            ],
            "currency_used": [
                "Burundian franc"
            ],
            "gdp_nominal_per_capita": 400,
            "population": 8303000
        },
        "/en/colombia": {
            "title": "Colombia",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Colombian peso"
            ],
            "gdp_nominal_per_capita": 9000,
            "population": 44830423
        },
        "/en/czech_republic": {
            "title": "Czech Republic",
            "official_language": [
                "Czech Language"
            ],
            "currency_used": [
                "CZK",
                "Czech koruna"
            ],
            "gdp_nominal_per_capita": 26800,
            "population": 10474600
        },
        "/en/comoros": {
            "title": "Comoros",
            "official_language": [
                "Arabic Language",
                "Comorian language",
                "Swahili Language",
                "French Language"
            ],
            "currency_used": [
                "Comorian franc"
            ],
            "gdp_nominal_per_capita": 1100,
            "population": 676000
        },
        "/en/cameroon": {
            "title": "Cameroon",
            "official_language": [
                "English Language",
                "French Language"
            ],
            "currency_used": [
                "Central African CFA franc"
            ],
            "gdp_nominal_per_capita": 2400,
            "population": 19522000
        },
        "/en/cape_verde": {
            "title": "Cape Verde",
            "official_language": [
                "Portuguese Language"
            ],
            "currency_used": [
                "Cape Verdean escudo"
            ],
            "gdp_nominal_per_capita": 4200,
            "population": 506000
        },
        "/en/central_african_republic": {
            "title": "Central African Republic",
            "official_language": [
                "Sango Language",
                "French Language"
            ],
            "currency_used": [
                "Central African CFA franc"
            ],
            "gdp_nominal_per_capita": 700,
            "population": 4422000
        },
        "/en/chad": {
            "title": "Chad",
            "official_language": [
                "Arabic Language",
                "French Language"
            ],
            "currency_used": [
                "Central African CFA franc"
            ],
            "gdp_nominal_per_capita": 1600,
            "population": 11206000
        },
        "/en/chile": {
            "title": "Chile",
            "official_language": [
                "Spanish Language",
                "Languages of Chile",
                "German Language",
                "Chilean Spanish",
                "Mapudungun Language",
                "English Language"
            ],
            "currency_used": [
                "Chilean peso",
                "Unidad de Fomento"
            ],
            "gdp_nominal_per_capita": 15400,
            "population": 16886000
        },
        "/en/costa_rica": {
            "title": "Costa Rica",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Costa Rican colón"
            ],
            "gdp_nominal_per_capita": 11900,
            "population": 4579000
        },
        "/en/croatia": {
            "title": "Croatia",
            "official_language": [
                "Croatian language"
            ],
            "currency_used": [
                "Croatian kuna",
                "Croatian dinar"
            ],
            "gdp_nominal_per_capita": 16900,
            "population": 4432000
        },
        "/en/cyprus": {
            "title": "Cyprus",
            "official_language": [
                "Greek Language",
                "Turkish Language"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 29200,
            "population": 801600
        },
        "/en/republic_of_the_congo": {
            "title": "Republic of the Congo",
            "official_language": [
                "Lingala Language",
                "Kituba",
                "French Language"
            ],
            "currency_used": [
                "Central African CFA franc"
            ],
            "gdp_nominal_per_capita": 3800,
            "population": 3683000
        },
        "/en/cook_islands": {
            "title": "Cook Islands",
            "official_language": [
                "Rarotongan Language",
                "English Language"
            ],
            "currency_used": [
                "New Zealand dollar",
                "Cook Islands dollar",
                "New Zealand pound"
            ],
            "gdp_nominal_per_capita": 9100,
            "population": 20000
        },
        "/en/djibouti": {
            "title": "Djibouti",
            "official_language": [
                "Arabic Language",
                "French Language"
            ],
            "currency_used": [
                "Djiboutian franc"
            ],
            "gdp_nominal_per_capita": 3800,
            "population": 864000
        },
        "/en/dominica": {
            "title": "Dominica",
            "official_language": [
                "English Language",
                "Antillean Creole",
                "French Language"
            ],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 9500,
            "population": 67000
        },
        "/en/dominican_republic": {
            "title": "Dominican Republic",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Dominican peso"
            ],
            "gdp_nominal_per_capita": 8800,
            "population": 10090000
        },
        "/en/european_union": {
            "title": "European Union",
            "official_language": [],
            "currency_used": [
                "Euro",
                "European Currency Unit"
            ],
            "gdp_nominal_per_capita": 34000,
            "population": 490426060
        },
        "/en/ecuador": {
            "title": "Ecuador",
            "official_language": [
                "Spanish Language",
                "Quechua"
            ],
            "currency_used": [
                "US$",
                "Ecuadorian sucre"
            ],
            "gdp_nominal_per_capita": 7700,
            "population": 13938115
        },
        "/en/egypt": {
            "title": "Egypt",
            "official_language": [
                "Arabic Language",
                "English Language",
                "Modern Standard Arabic",
                "French Language"
            ],
            "currency_used": [
                "Egyptian pound"
            ],
            "gdp_nominal_per_capita": 5500,
            "population": 76030000
        },
        "/en/el_salvador": {
            "title": "El Salvador",
            "official_language": [
                "Spanish Language",
                "Nahuatl language"
            ],
            "currency_used": [
                "US$",
                "Salvadoran colón",
                "El Salvadoran peso"
            ],
            "gdp_nominal_per_capita": 6400,
            "population": 6163000
        },
        "/en/equatorial_guinea": {
            "title": "Equatorial Guinea",
            "official_language": [
                "Spanish Language",
                "Portuguese Language",
                "French Language"
            ],
            "currency_used": [
                "Central African CFA franc",
                "Equatorial Guinean ekwele",
                "Equatorial Guinean peseta"
            ],
            "gdp_nominal_per_capita": 30200,
            "population": 676000
        },
        "/en/eritrea": {
            "title": "Eritrea",
            "official_language": [
                "Arabic Language",
                "Tigrigna Language",
                "English Language",
                "Tigre language",
                "Italian Language"
            ],
            "currency_used": [
                "Eritrean nakfa"
            ],
            "gdp_nominal_per_capita": 700,
            "population": 5073000
        },
        "/en/estonia": {
            "title": "Estonia",
            "official_language": [
                "Estonian Language"
            ],
            "currency_used": [
                "Estonian kroon"
            ],
            "gdp_nominal_per_capita": 21900,
            "population": 1340341
        },
        "/en/east_timor": {
            "title": "East Timor",
            "official_language": [
                "Tetun Language",
                "Portuguese Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 2500,
            "population": 3500000
        },
        "/en/finland": {
            "title": "Finland",
            "official_language": [
                "Finnish Language",
                "Swedish Language",
                "Sami languages"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 38400,
            "population": 5331096
        },
        "/en/faroe_islands": {
            "title": "Faroe Islands",
            "official_language": [
                "Danish Language",
                "Faroese"
            ],
            "currency_used": [
                "Faroese króna",
                "Danish krone"
            ],
            "gdp_nominal_per_capita": 31000,
            "population": 48797
        },
        "/en/fiji": {
            "title": "Fiji",
            "official_language": [
                "Fijian Language",
                "Hindustani language",
                "English Language",
                "Fiji Hindi"
            ],
            "currency_used": [
                "Fijian dollar",
                "Fijian pound"
            ],
            "gdp_nominal_per_capita": 3700,
            "population": 849000
        },
        "/en/french_polynesia": {
            "title": "French Polynesia",
            "official_language": [
                "Tahitian Language",
                "French Language"
            ],
            "currency_used": [
                "CFP franc"
            ],
            "gdp_nominal_per_capita": 18000,
            "population": 269043
        },
        "/en/federated_states_of_micronesia": {
            "title": "Federated States of Micronesia",
            "official_language": [
                "Yapese Language",
                "Pohnpeian language",
                "Kosraean language",
                "Ulithian Language",
                "Chuukese Language",
                "English Language",
                "Woleaian Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 2200,
            "population": 111000
        },
        "/en/germany": {
            "title": "Germany",
            "official_language": [
                "German Language"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 34800,
            "population": 82062200
        },
        "/en/guatemala": {
            "title": "Guatemala",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Guatemalan quetzal"
            ],
            "gdp_nominal_per_capita": 5400,
            "population": 14027000
        },
        "/en/guyana": {
            "title": "Guyana",
            "official_language": [
                "English Language",
                "Hindi Language",
                "Arawak"
            ],
            "currency_used": [
                "Guyanese dollar"
            ],
            "gdp_nominal_per_capita": 4000,
            "population": 762000
        },
        "/en/guam": {
            "title": "Guam",
            "official_language": [
                "Chamorro Language",
                "English Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 21000,
            "population": 178000
        },
        "/en/gabon": {
            "title": "Gabon",
            "official_language": [
                "Spanish Language",
                "French Language"
            ],
            "currency_used": [
                "CFA franc",
                "Central African CFA franc"
            ],
            "gdp_nominal_per_capita": 14900,
            "population": 1475000
        },
        "/en/gaza_strip": {
            "title": "Gaza Strip",
            "official_language": [
                "Arabic Language"
            ],
            "currency_used": [
                "Israeli new sheqel",
                "Egyptian pound"
            ],
            "gdp_nominal_per_capita": 2900,
            "population": 1482405
        },
        "/en/ghana": {
            "title": "Ghana",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Ghanaian cedi"
            ],
            "gdp_nominal_per_capita": 1500,
            "population": 23837000
        },
        "/en/gibraltar": {
            "title": "Gibraltar",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Gibraltar pound"
            ],
            "gdp_nominal_per_capita": 38200,
            "population": 31000
        },
        "/en/greece": {
            "title": "Greece",
            "official_language": [
                "Greek Language"
            ],
            "currency_used": [
                "Euro",
                "Greek drachma"
            ],
            "gdp_nominal_per_capita": 32800,
            "population": 11262500
        },
        "/en/greenland": {
            "title": "Greenland",
            "official_language": [
                "Danish Language",
                "Greenlandic language"
            ],
            "currency_used": [
                "Danish krone"
            ],
            "gdp_nominal_per_capita": 20000,
            "population": 57000
        },
        "/en/grenada": {
            "title": "Grenada",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 13600,
            "population": 104000
        },
        "/en/guernsey": {
            "title": "Guernsey",
            "official_language": [],
            "currency_used": [],
            "gdp_nominal_per_capita": 44600,
            "population": 65573
        },
        "/en/guinea": {
            "title": "Guinea",
            "official_language": [
                "French Language"
            ],
            "currency_used": [
                "Guinean franc",
                "Guinean syli"
            ],
            "gdp_nominal_per_capita": 1100,
            "population": 10069000
        },
        "/en/guinea-bissau": {
            "title": "Guinea-Bissau",
            "official_language": [
                "Portuguese Language"
            ],
            "currency_used": [
                "CFA franc",
                "West African CFA franc",
                "Guinea Bissau peso"
            ],
            "gdp_nominal_per_capita": 600,
            "population": 1611000
        },
        "/en/hungary": {
            "title": "Hungary",
            "official_language": [
                "Hungarian",
                "Hungarian Sign Language"
            ],
            "currency_used": [
                "Hungarian forint"
            ],
            "gdp_nominal_per_capita": 20500,
            "population": 10029900
        },
        "/en/haiti": {
            "title": "Haiti",
            "official_language": [
                "Haitian Creole French Language",
                "French Language"
            ],
            "currency_used": [
                "Haitian gourde",
                "Hanoi"
            ],
            "gdp_nominal_per_capita": 1400,
            "population": 10033000
        },
        "/en/honduras": {
            "title": "Honduras",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Honduran lempira"
            ],
            "gdp_nominal_per_capita": 3700,
            "population": 7466000
        },
        "/en/hong_kong": {
            "title": "Hong Kong",
            "official_language": [],
            "currency_used": [
                "Hong Kong dollar"
            ],
            "gdp_nominal_per_capita": 45300,
            "population": 7003700
        },
        "/en/iceland": {
            "title": "Iceland",
            "official_language": [
                "Icelandic Language"
            ],
            "currency_used": [
                "Icelandic króna"
            ],
            "gdp_nominal_per_capita": 42600,
            "population": 320500
        },
        "/en/italy": {
            "title": "Italy",
            "official_language": [
                "Italian Language"
            ],
            "currency_used": [
                "Euro",
                "San Marinese lira"
            ],
            "gdp_nominal_per_capita": 31000,
            "population": 60090400
        },
        "/en/india": {
            "title": "India",
            "official_language": [
                "Hindi Language",
                "English Language"
            ],
            "currency_used": [
                "Indian rupee"
            ],
            "gdp_nominal_per_capita": 2900,
            "population": 1161240000
        },
        "/en/republic_of_ireland": {
            "title": "Republic of Ireland",
            "official_language": [
                "Irish",
                "English Language"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 47800,
            "population": 4517800
        },
        "/en/indonesia": {
            "title": "Indonesia",
            "official_language": [
                "Indonesian Language"
            ],
            "currency_used": [
                "Indonesian rupiah"
            ],
            "gdp_nominal_per_capita": 3900,
            "population": 229850000
        },
        "/en/iran": {
            "title": "Iran",
            "official_language": [
                "Persian Language",
                "Azerbaijani language",
                "Kurdish language",
                "Caspian languages",
                "Gilaki Language",
                "Mazanderani Language"
            ],
            "currency_used": [
                "Iranian rial"
            ],
            "gdp_nominal_per_capita": 13100,
            "population": 72903921
        },
        "/en/israel": {
            "title": "Israel",
            "official_language": [
                "Arabic Language",
                "Hebrew Language"
            ],
            "currency_used": [
                "Israeli new sheqel"
            ],
            "gdp_nominal_per_capita": 28900,
            "population": 7382200
        },
        "/en/isle_of_man": {
            "title": "Isle of Man",
            "official_language": [
                "English Language",
                "Manx Language"
            ],
            "currency_used": [
                "UK £",
                "Manx pound"
            ],
            "gdp_nominal_per_capita": 35000,
            "population": 80000
        },
        "/en/japan": {
            "title": "Japan",
            "official_language": [
                "Japanese Language"
            ],
            "currency_used": [
                "Japanese yen"
            ],
            "gdp_nominal_per_capita": 35300,
            "population": 127630000
        },
        "/en/jamaica": {
            "title": "Jamaica",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Jamaican dollar",
                "Jamaican pound"
            ],
            "gdp_nominal_per_capita": 7700,
            "population": 2719000
        },
        "/en/jersey": {
            "title": "Jersey",
            "official_language": [
                "English Language",
                "French Language"
            ],
            "currency_used": [
                "UK £",
                "Jersey pound"
            ],
            "gdp_nominal_per_capita": 57000,
            "population": 91321
        },
        "/en/jordan": {
            "title": "Jordan",
            "official_language": [
                "Arabic Language",
                "English Language"
            ],
            "currency_used": [
                "Jordanian dinar"
            ],
            "gdp_nominal_per_capita": 5000,
            "population": 6316000
        },
        "/en/kazakhstan": {
            "title": "Kazakhstan",
            "official_language": [
                "Kazakh Language",
                "Russian Language"
            ],
            "currency_used": [
                "Kazakhstani tenge"
            ],
            "gdp_nominal_per_capita": 12000,
            "population": 15888000
        },
        "/en/kiribati": {
            "title": "Kiribati",
            "official_language": [
                "Kiribati language",
                "English Language"
            ],
            "currency_used": [
                "Kiribati dollar",
                "Australian dollar"
            ],
            "gdp_nominal_per_capita": 3700,
            "population": 98000
        },
        "/en/kuwait": {
            "title": "Kuwait",
            "official_language": [
                "Arabic Language",
                "English Language"
            ],
            "currency_used": [
                "Kuwaiti dinar"
            ],
            "gdp_nominal_per_capita": 60800,
            "population": 2985000
        },
        "/en/kosovo": {
            "title": "Kosovo",
            "official_language": [],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 2300,
            "population": 1805000
        },
        "/en/latvia": {
            "title": "Latvia",
            "official_language": [
                "Latvian Language"
            ],
            "currency_used": [
                "Latvian lats"
            ],
            "gdp_nominal_per_capita": 17800,
            "population": 2260000
        },
        "/en/luxembourg": {
            "title": "Luxembourg",
            "official_language": [
                "Luxembourgish language",
                "German Language",
                "French Language"
            ],
            "currency_used": [
                "Euro",
                "Belgian franc",
                "Dutch gulden"
            ],
            "gdp_nominal_per_capita": 85100,
            "population": 491700
        },
        "/en/libya": {
            "title": "Libya",
            "official_language": [
                "Arabic Language",
                "Italian Language"
            ],
            "currency_used": [
                "Libyan dinar"
            ],
            "gdp_nominal_per_capita": 14900,
            "population": 6420000
        },
        "/en/lithuania": {
            "title": "Lithuania",
            "official_language": [
                "Lithuanian language"
            ],
            "currency_used": [
                "Lithuanian litas"
            ],
            "gdp_nominal_per_capita": 18400,
            "population": 3350400
        },
        "/en/laos": {
            "title": "Laos",
            "official_language": [
                "Lao Language",
                "French Language"
            ],
            "currency_used": [
                "Lao kip"
            ],
            "gdp_nominal_per_capita": 2100,
            "population": 6320000
        },
        "/en/lebanon": {
            "title": "Lebanon",
            "official_language": [
                "Arabic Language",
                "Lebanese Arabic",
                "French Language"
            ],
            "currency_used": [
                "Lebanese lira"
            ],
            "gdp_nominal_per_capita": 11100,
            "population": 4224000
        },
        "/en/lesotho": {
            "title": "Lesotho",
            "official_language": [
                "Sotho, Southern Language",
                "English Language"
            ],
            "currency_used": [
                "Lesotho loti"
            ],
            "gdp_nominal_per_capita": 1600,
            "population": 2067000
        },
        "/en/liberia": {
            "title": "Liberia",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Liberian dollar"
            ],
            "gdp_nominal_per_capita": 500,
            "population": 3955000
        },
        "/en/liechtenstein": {
            "title": "Liechtenstein",
            "official_language": [
                "German Language"
            ],
            "currency_used": [
                "Swiss franc",
                "Austro-Hungarian krone",
                "Austrian krone"
            ],
            "gdp_nominal_per_capita": 118000,
            "population": 35700
        },
        "/en/madagascar": {
            "title": "Madagascar",
            "official_language": [
                "Malagasy language",
                "English Language",
                "French Language"
            ],
            "currency_used": [
                "Malagasy ariary"
            ],
            "gdp_nominal_per_capita": 1100,
            "population": 19625000
        },
        "/en/macau": {
            "title": "Macau",
            "official_language": [
                "Standard Cantonese",
                "Portuguese Language",
                "Chinese language",
                "Standard Mandarin",
                "Cantonese"
            ],
            "currency_used": [
                "Macanese pataca"
            ],
            "gdp_nominal_per_capita": 30000,
            "population": 537972
        },
        "/en/malawi": {
            "title": "Malawi",
            "official_language": [
                "Chewa language",
                "English Language"
            ],
            "currency_used": [
                "Malawian kwacha",
                "Malawian pound"
            ],
            "gdp_nominal_per_capita": 800,
            "population": 15263000
        },
        "/en/maldives": {
            "title": "Maldives",
            "official_language": [
                "Dhivehi language",
                "Mahl language"
            ],
            "currency_used": [
                "Maldivian rufiyaa"
            ],
            "gdp_nominal_per_capita": 4500,
            "population": 309000
        },
        "/en/mali": {
            "title": "Mali",
            "official_language": [
                "Bambara language",
                "French Language"
            ],
            "currency_used": [
                "CFA franc",
                "West African CFA franc",
                "Malian franc"
            ],
            "gdp_nominal_per_capita": 1200,
            "population": 13010000
        },
        "/en/malta": {
            "title": "Malta",
            "official_language": [
                "Maltese Language",
                "English Language"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 24200,
            "population": 412600
        },
        "/en/marshall_islands": {
            "title": "Marshall Islands",
            "official_language": [
                "Marshallese Language",
                "English Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 2500,
            "population": 62000
        },
        "/en/mauritania": {
            "title": "Mauritania",
            "official_language": [
                "Arabic Language",
                "French Language"
            ],
            "currency_used": [
                "Mauritanian ouguiya"
            ],
            "gdp_nominal_per_capita": 1900,
            "population": 3291000
        },
        "/en/mauritius": {
            "title": "Mauritius",
            "official_language": [
                "English Language",
                "French Language"
            ],
            "currency_used": [
                "Mauritian rupee"
            ],
            "gdp_nominal_per_capita": 12400,
            "population": 1288000
        },
        "/en/moldova": {
            "title": "Moldova",
            "official_language": [
                "Moldovan language",
                "Romanian Language"
            ],
            "currency_used": [
                "Moldovan leu",
                "Moldovan cupon"
            ],
            "gdp_nominal_per_capita": 2500,
            "population": 3603506
        },
        "/en/monaco": {
            "title": "Monaco",
            "official_language": [
                "Monégasque language",
                "Italian Language",
                "French Language"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 30000,
            "population": 33000
        },
        "/en/mongolia": {
            "title": "Mongolia",
            "official_language": [
                "Mongolian language"
            ],
            "currency_used": [
                "Mongolian tögrög"
            ],
            "gdp_nominal_per_capita": 3300,
            "population": 2671000
        },
        "/en/morocco": {
            "title": "Morocco",
            "official_language": [
                "Arabic Language",
                "French Language",
                "Berber languages",
                "Moroccan Arabic"
            ],
            "currency_used": [
                "Moroccan dirham"
            ],
            "gdp_nominal_per_capita": 4000,
            "population": 31394044
        },
        "/en/mozambique": {
            "title": "Mozambique",
            "official_language": [
                "Portuguese Language"
            ],
            "currency_used": [
                "Mozambican metical",
                "Mozambican escudo"
            ],
            "gdp_nominal_per_capita": 900,
            "population": 39100000
        },
        "/en/myanmar": {
            "title": "Burma",
            "official_language": [
                "Burmese Language"
            ],
            "currency_used": [
                "Myanma kyat"
            ],
            "gdp_nominal_per_capita": 1200,
            "population": 50020000
        },
        "/en/montenegro": {
            "title": "Montenegro",
            "official_language": [
                "Serbian language",
                "Bosnian language",
                "Albanian language",
                "Montenegrin language",
                "Croatian language"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 10600,
            "population": 624000
        },
        "/en/netherlands": {
            "title": "Netherlands",
            "official_language": [
                "Dutch Language"
            ],
            "currency_used": [
                "Euro",
                "Aruban florin",
                "Netherlands Antillean gulden"
            ],
            "gdp_nominal_per_capita": 41300,
            "population": 16492476
        },
        "/en/niue": {
            "title": "Niue",
            "official_language": [
                "Niue Language",
                "English Language"
            ],
            "currency_used": [
                "New Zealand dollar"
            ],
            "gdp_nominal_per_capita": 5800,
            "population": 1500
        },
        "/en/norway": {
            "title": "Norway",
            "official_language": [
                "Nynorsk",
                "Bokmål",
                "Norwegian Language",
                "Sami languages"
            ],
            "currency_used": [
                "Norwegian krone"
            ],
            "gdp_nominal_per_capita": 57500,
            "population": 4810122
        },
        "/en/north_korea": {
            "title": "North Korea",
            "official_language": [
                "Korean Language"
            ],
            "currency_used": [
                "North Korean won"
            ],
            "gdp_nominal_per_capita": 1800,
            "population": 23906000
        },
        "/en/namibia": {
            "title": "Namibia",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Namibian dollar"
            ],
            "gdp_nominal_per_capita": 5500,
            "population": 2171000
        },
        "/en/new_caledonia": {
            "title": "New Caledonia",
            "official_language": [
                "French Language"
            ],
            "currency_used": [
                "CFP franc",
                "French franc"
            ],
            "gdp_nominal_per_capita": 15000,
            "population": 221943
        },
        "/en/nicaragua": {
            "title": "Nicaragua",
            "official_language": [
                "Spanish Language",
                "Mískito Language"
            ],
            "currency_used": [
                "Nicaraguan córdoba"
            ],
            "gdp_nominal_per_capita": 3000,
            "population": 5743000
        },
        "/en/niger": {
            "title": "Niger",
            "official_language": [
                "Hausa Language",
                "Fula language",
                "Zarma Language",
                "Tuareg languages",
                "Kanuri language",
                "French Language"
            ],
            "currency_used": [
                "CFA franc",
                "West African CFA franc"
            ],
            "gdp_nominal_per_capita": 700,
            "population": 15290000
        },
        "/en/nigeria": {
            "title": "Nigeria",
            "official_language": [
                "English Language",
                "Hausa Language",
                "Igbo Language",
                "Yoruba Language",
                "Pidgin, Nigerian Language"
            ],
            "currency_used": [
                "Nigerian naira",
                "Nigerian pound"
            ],
            "gdp_nominal_per_capita": 2200,
            "population": 154729000
        },
        "/en/northern_mariana_islands": {
            "title": "Northern Mariana Islands",
            "official_language": [
                "Chamorro Language",
                "Carolinian Language",
                "English Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 12500,
            "population": 87000
        },
        "/en/oman": {
            "title": "Oman",
            "official_language": [
                "Arabic Language"
            ],
            "currency_used": [
                "Omani rial"
            ],
            "gdp_nominal_per_capita": 20400,
            "population": 2845415
        },
        "/en/poland": {
            "title": "Poland",
            "official_language": [
                "Polish Language"
            ],
            "currency_used": [
                "Polish złoty"
            ],
            "gdp_nominal_per_capita": 17800,
            "population": 38130300
        },
        "/en/papua_new_guinea": {
            "title": "Papua New Guinea",
            "official_language": [
                "Hiri Motu language",
                "Tok Pisin Language",
                "English Language"
            ],
            "currency_used": [
                "Papua New Guinean kina"
            ],
            "gdp_nominal_per_capita": 2300,
            "population": 6732000
        },
        "/en/panama": {
            "title": "Panama",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Panamanian balboa",
                "US$"
            ],
            "gdp_nominal_per_capita": 11900,
            "population": 3454000
        },
        "/en/portugal": {
            "title": "Portugal",
            "official_language": [
                "Portuguese Language"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 22000,
            "population": 10631800
        },
        "/en/puerto_rico": {
            "title": "Puerto Rico",
            "official_language": [
                "Spanish Language",
                "English Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 18700,
            "population": 3982000
        },
        "/en/pakistan": {
            "title": "Pakistan",
            "official_language": [
                "English Language",
                "Seraiki Language",
                "Sindhi Language",
                "Pashto language",
                "Balochi language",
                "Punjabi language",
                "Urdu Language"
            ],
            "currency_used": [
                "Pakistani rupee"
            ],
            "gdp_nominal_per_capita": 2600,
            "population": 167762000
        },
        "/en/palau": {
            "title": "Palau",
            "official_language": [
                "Japanese Language",
                "Palauan Language",
                "English Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 8100,
            "population": 20000
        },
        "/en/paraguay": {
            "title": "Paraguay",
            "official_language": [
                "Paraguayan Guaraní",
                "Spanish Language",
                "Guaraní language"
            ],
            "currency_used": [
                "Paraguayan guaraní",
                "Paraguayan peso"
            ],
            "gdp_nominal_per_capita": 4300,
            "population": 6349000
        },
        "/en/philippines": {
            "title": "Philippines",
            "official_language": [
                "Filipino language",
                "English Language",
                "Tagalog language"
            ],
            "currency_used": [
                "Philippine peso"
            ],
            "gdp_nominal_per_capita": 3400,
            "population": 92226600
        },
        "/en/quebec": {
            "title": "Québec",
            "official_language": [],
            "currency_used": [],
            "gdp_nominal_per_capita": 37278,
            "population": 7750504
        },
        "/en/qatar": {
            "title": "Qatar",
            "official_language": [
                "Arabic Language"
            ],
            "currency_used": [
                "Qatari riyal"
            ],
            "gdp_nominal_per_capita": 101000,
            "population": 1409423
        },
        "/en/russia": {
            "title": "Russia",
            "official_language": [
                "Russian Language"
            ],
            "currency_used": [
                "Russian ruble"
            ],
            "gdp_nominal_per_capita": 15800,
            "population": 141850000
        },
        "/en/romania": {
            "title": "Romania",
            "official_language": [
                "Romanian Language"
            ],
            "currency_used": [
                "Romanian leu"
            ],
            "gdp_nominal_per_capita": 12500,
            "population": 21496700
        },
        "/en/rwanda": {
            "title": "Rwanda",
            "official_language": [
                "Kinyarwanda language",
                "English Language",
                "French Language"
            ],
            "currency_used": [
                "Rwandan franc"
            ],
            "gdp_nominal_per_capita": 900,
            "population": 9998000
        },
        "/en/republic_of_china": {
            "title": "Republic of China (Taiwan)",
            "official_language": [
                "Taiwanese Mandarin"
            ],
            "currency_used": [
                "New Taiwan dollar",
                "Old Taiwan dollar",
                "Chinese customs gold unit"
            ],
            "gdp_nominal_per_capita": 31900,
            "population": 23027672
        },
        "/en/spain": {
            "title": "Spain",
            "official_language": [
                "Spanish Language",
                "Basque Language",
                "Catalan language",
                "Galician Language",
                "Aranese language",
                "Occitan language",
                "Asturian language",
                "Aragonese Language",
                "Valencian"
            ],
            "currency_used": [
                "Euro",
                "Spanish peseta"
            ],
            "gdp_nominal_per_capita": 36500,
            "population": 45957671
        },
        "/en/switzerland": {
            "title": "Switzerland",
            "official_language": [
                "Romansh language",
                "Schwyzerdütsch Language",
                "German Language",
                "Italian Language",
                "French Language"
            ],
            "currency_used": [
                "Swiss franc"
            ],
            "gdp_nominal_per_capita": 40900,
            "population": 7731167
        },
        "/en/sri_lanka": {
            "title": "Sri Lanka",
            "official_language": [
                "Tamil Language",
                "Sinhala Language",
                "English Language",
                "Sinhala Language, English and Tamil also used"
            ],
            "currency_used": [
                "Sri Lankan rupee"
            ],
            "gdp_nominal_per_capita": 4400,
            "population": 20238000
        },
        "/en/suriname": {
            "title": "Suriname",
            "official_language": [
                "Dutch Language",
                "Sranan Tongo"
            ],
            "currency_used": [
                "Suriname dollar",
                "Surinamese gulden",
                "Dutch gulden"
            ],
            "gdp_nominal_per_capita": 8900,
            "population": 520000
        },
        "/en/slovakia": {
            "title": "Slovakia",
            "official_language": [
                "Slovak Language"
            ],
            "currency_used": [
                "Slovak koruna",
                "Euro"
            ],
            "gdp_nominal_per_capita": 22600,
            "population": 5411100
        },
        "/en/scotland": {
            "title": "Scotland",
            "official_language": [
                "Scottish English",
                "Goidelic languages",
                "Scottish Gaelic language"
            ],
            "currency_used": [
                "UK £"
            ],
            "gdp_nominal_per_capita": 16944,
            "population": 5168000
        },
        "/en/south_korea": {
            "title": "South Korea",
            "official_language": [
                "Korean Language"
            ],
            "currency_used": [
                "South Korean won ₩",
                "South Korean hwan",
                "South Korean won"
            ],
            "gdp_nominal_per_capita": 26000,
            "population": 48333000
        },
        "/en/saint_kitts_and_nevis": {
            "title": "Saint Kitts and Nevis",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 20000,
            "population": 52000
        },
        "/en/saint_lucia": {
            "title": "Saint Lucia",
            "official_language": [
                "Antillean Creole",
                "Spanish Language",
                "English Language",
                "French-based creole languages"
            ],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 11300,
            "population": 172000
        },
        "/en/saint_vincent_and_the_grenadines": {
            "title": "Saint Vincent and the Grenadines",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 9200,
            "population": 109000
        },
        "/en/samoa": {
            "title": "Samoa",
            "official_language": [
                "Samoan Language",
                "English Language"
            ],
            "currency_used": [
                "Samoan tala"
            ],
            "gdp_nominal_per_capita": 5000,
            "population": 179000
        },
        "/en/san_marino": {
            "title": "San Marino",
            "official_language": [
                "Italian Language"
            ],
            "currency_used": [
                "Euro",
                "San Marinese lira"
            ],
            "gdp_nominal_per_capita": 41900,
            "population": 31451
        },
        "/en/senegal": {
            "title": "Senegal",
            "official_language": [
                "French Language"
            ],
            "currency_used": [
                "CFA franc",
                "West African CFA franc"
            ],
            "gdp_nominal_per_capita": 1800,
            "population": 12534000
        },
        "/en/seychelles": {
            "title": "Seychelles",
            "official_language": [
                "English Language",
                "Seselwa Creole French Language",
                "French Language"
            ],
            "currency_used": [
                "Seychelles rupee"
            ],
            "gdp_nominal_per_capita": 18700,
            "population": 84000
        },
        "/en/sierra_leone": {
            "title": "Sierra Leone",
            "official_language": [
                "English Language",
                "Bengali Language"
            ],
            "currency_used": [
                "Sierra Leonean leone"
            ],
            "gdp_nominal_per_capita": 700,
            "population": 5696000
        },
        "/en/singapore": {
            "title": "Singapore",
            "official_language": [
                "Tamil Language",
                "Standard Mandarin",
                "Chinese language",
                "Malay Language",
                "English Language"
            ],
            "currency_used": [
                "Singapore dollar"
            ],
            "gdp_nominal_per_capita": 52000,
            "population": 4839400
        },
        "/en/slovenia": {
            "title": "Slovenia",
            "official_language": [
                "Slovenian language"
            ],
            "currency_used": [
                "Euro",
                "Slovenian tolar"
            ],
            "gdp_nominal_per_capita": 30800,
            "population": 2053355
        },
        "/en/somalia": {
            "title": "Somalia",
            "official_language": [
                "Somali Language",
                "Arabic Language",
                "Italian Language"
            ],
            "currency_used": [
                "Somali shilling"
            ],
            "gdp_nominal_per_capita": 600,
            "population": 9133000
        },
        "/en/sudan": {
            "title": "Sudan",
            "official_language": [
                "Arabic Language",
                "English Language"
            ],
            "currency_used": [
                "Sudanese pound",
                "Sudanese dinar"
            ],
            "gdp_nominal_per_capita": 2200,
            "population": 42272435
        },
        "/en/swaziland": {
            "title": "Swaziland",
            "official_language": [
                "Swati Language",
                "Zulu Language",
                "English Language"
            ],
            "currency_used": [
                "Swazi lilangeni"
            ],
            "gdp_nominal_per_capita": 5100,
            "population": 1185000
        },
        "/en/syria": {
            "title": "Syria",
            "official_language": [
                "Arabic Language"
            ],
            "currency_used": [
                "Syrian pound",
                "Turkish new lira",
                "Turkish lira"
            ],
            "gdp_nominal_per_capita": 4900,
            "population": 21906000
        },
        "/en/serbia": {
            "title": "Serbia",
            "official_language": [
                "Serbian language"
            ],
            "currency_used": [
                "Serbian dinar"
            ],
            "gdp_nominal_per_capita": 8200,
            "population": 9850000
        },
        "/en/tajikistan": {
            "title": "Tajikistan",
            "official_language": [
                "Persian Language",
                "Tajiki Language",
                "Russian Language"
            ],
            "currency_used": [
                "Tajikistani somoni"
            ],
            "gdp_nominal_per_capita": 1800,
            "population": 6952000
        },
        "/en/tanzania": {
            "title": "Tanzania",
            "official_language": [
                "Swahili Language",
                "English Language"
            ],
            "currency_used": [
                "East African shilling",
                "Tanzanian shilling"
            ],
            "gdp_nominal_per_capita": 1400,
            "population": 43739000
        },
        "/en/thailand": {
            "title": "Thailand",
            "official_language": [
                "Thai Language"
            ],
            "currency_used": [
                "Thai baht"
            ],
            "gdp_nominal_per_capita": 8700,
            "population": 63389730
        },
        "/en/togo": {
            "title": "Togo",
            "official_language": [
                "French Language"
            ],
            "currency_used": [
                "CFA franc",
                "West African CFA franc"
            ],
            "gdp_nominal_per_capita": 900,
            "population": 6619000
        },
        "/en/tonga": {
            "title": "Tonga",
            "official_language": [
                "Tongan Language",
                "English Language",
                "French Language"
            ],
            "currency_used": [
                "Tongan pa'anga"
            ],
            "gdp_nominal_per_capita": 4400,
            "population": 104000
        },
        "/en/tunisia": {
            "title": "Tunisia",
            "official_language": [
                "Arabic Language",
                "Berber languages",
                "Modern Standard Arabic",
                "French Language"
            ],
            "currency_used": [
                "Tunisian dinar",
                "Tunisian franc"
            ],
            "gdp_nominal_per_capita": 8000,
            "population": 10432500
        },
        "/en/tuvalu": {
            "title": "Tuvalu",
            "official_language": [
                "Tuvaluan Language",
                "English Language"
            ],
            "currency_used": [
                "Tuvaluan dollar",
                "Australian dollar"
            ],
            "gdp_nominal_per_capita": 1600,
            "population": 10000
        },
        "/en/united_kingdom": {
            "title": "United Kingdom",
            "official_language": [
                "English Language",
                "Welsh Language",
                "Scottish Gaelic language"
            ],
            "currency_used": [
                "UK £",
                "Euro",
                "Falkland Islands pound",
                "Cayman Islands dollar",
                "Bermuda dollar",
                "East Caribbean dollar",
                "Saint Helena pound",
                "New Zealand dollar"
            ],
            "gdp_nominal_per_capita": 37400,
            "population": 61612300
        }
    }
}