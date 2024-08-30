const idealWeightTable = [
    {
      height: "4′ 6″",
      heightCm: 137,
      female: { min: "63 lb", max: "77 lb", minKg: "28.5 kg", maxKg: "34.9 kg" },
      male: { min: "63 lb", max: "77 lb", minKg: "28.5 kg", maxKg: "34.9 kg" },
    },
    {
      height: "4′ 7″",
      heightCm: 140,
      female: { min: "68 lb", max: "83 lb", minKg: "30.8 kg", maxKg: "37.6 kg" },
      male: { min: "68 lb", max: "84 lb", minKg: "30.8 kg", maxKg: "38.1 kg" },
    },
    {
      height: "4′ 8″",
      heightCm: 142,
      female: { min: "72 lb", max: "88 lb", minKg: "32.6 kg", maxKg: "39.9 kg" },
      male: { min: "74 lb", max: "90 lb", minKg: "33.5 kg", maxKg: "40.8 kg" },
    },
    {
      height: "4′ 9″",
      heightCm: 145,
      female: { min: "77 lb", max: "94 lb", minKg: "34.9 kg", maxKg: "42.6 kg" },
      male: { min: "79 lb", max: "97 lb", minKg: "35.8 kg", maxKg: "43.9 kg" },
    },
    {
      height: "4′ 10″",
      heightCm: 147,
      female: { min: "81 lb", max: "99 lb", minKg: "36.4 kg", maxKg: "44.9 kg" },
      male: { min: "85 lb", max: "103 lb", minKg: "38.5 kg", maxKg: "46.7 kg" },
    },
    {
      height: "4′ 11″",
      heightCm: 150,
      female: { min: "86 lb", max: "105 lb", minKg: "39 kg", maxKg: "47.6 kg" },
      male: { min: "90 lb", max: "110 lb", minKg: "40.8 kg", maxKg: "49.9 kg" },
    },
    {
      height: "5′ 0″",
      heightCm: 152,
      female: { min: "90 lb", max: "110 lb", minKg: "40.8 kg", maxKg: "49.9 kg" },
      male: { min: "95 lb", max: "117 lb", minKg: "43.1 kg", maxKg: "53 kg" },
    },
    {
      height: "5′ 1″",
      heightCm: 155,
      female: { min: "95 lb", max: "116 lb", minKg: "43.1 kg", maxKg: "52.6 kg" },
      male: { min: "101 lb", max: "123 lb", minKg: "45.8 kg", maxKg: "55.8 kg" },
    },
    {
      height: "5′ 2″",
      heightCm: 157,
      female: { min: "99 lb", max: "121 lb", minKg: "44.9 kg", maxKg: "54.9 kg" },
      male: { min: "106 lb", max: "130 lb", minKg: "48.1 kg", maxKg: "58.9 kg" },
    },
    {
      height: "5′ 3″",
      heightCm: 160,
      female: { min: "104 lb", max: "127 lb", minKg: "47.2 kg", maxKg: "57.6 kg" },
      male: { min: "112 lb", max: "136 lb", minKg: "50.8 kg", maxKg: "61.6 kg" },
    },
    {
      height: "5′ 4″",
      heightCm: 163,
      female: { min: "108 lb", max: "132 lb", minKg: "49 kg", maxKg: "59.9 kg" },
      male: { min: "117 lb", max: "143 lb", minKg: "53 kg", maxKg: "64.8 kg" },
    },
    {
      height: "5′ 5″",
      heightCm: 165,
      female: { min: "113 lb", max: "138 lb", minKg: "51.2 kg", maxKg: "62.6 kg" },
      male: { min: "122 lb", max: "150 lb", minKg: "55.3 kg", maxKg: "68 kg" },
    },
    {
      height: "5′ 6″",
      heightCm: 168,
      female: { min: "117 lb", max: "143 lb", minKg: "53 kg", maxKg: "64.8 kg" },
      male: { min: "128 lb", max: "156 lb", minKg: "58 kg", maxKg: "70.7 kg" },
    },
    {
      height: "5′ 7″",
      heightCm: 170,
      female: { min: "122 lb", max: "149 lb", minKg: "55.3 kg", maxKg: "67.6 kg" },
      male: { min: "133 lb", max: "163 lb", minKg: "60.3 kg", maxKg: "73.9 kg" },
    },
    {
      height: "5′ 8″",
      heightCm: 173,
      female: { min: "126 lb", max: "154 lb", minKg: "57.1 kg", maxKg: "69.8 kg" },
      male: { min: "139 lb", max: "169 lb", minKg: "63 kg", maxKg: "76.6 kg" },
    },
    {
      height: "5′ 9″",
      heightCm: 175,
      female: { min: "131 lb", max: "160 lb", minKg: "59.4 kg", maxKg: "72.6 kg" },
      male: { min: "144 lb", max: "176 lb", minKg: "65.3 kg", maxKg: "79.8 kg" },
    },
    {
      height: "5′ 10″",
      heightCm: 178,
      female: { min: "135 lb", max: "165 lb", minKg: "61.2 kg", maxKg: "74.8 kg" },
      male: { min: "149 lb", max: "183 lb", minKg: "67.6 kg", maxKg: "83 kg" },
    },
    {
      height: "5′ 11″",
      heightCm: 180,
      female: { min: "140 lb", max: "171 lb", minKg: "63.5 kg", maxKg: "77.5 kg" },
      male: { min: "155 lb", max: "189 lb", minKg: "70.3 kg", maxKg: "85.7 kg" },
    },
    {
      height: "6′ 0″",
      heightCm: 183,
      female: { min: "144 lb", max: "176 lb", minKg: "65.3 kg", maxKg: "79.8 kg" },
      male: { min: "160 lb", max: "196 lb", minKg: "72.6 kg", maxKg: "88.9 kg" },
    },
    {
      height: "6′ 1″",
      heightCm: 185,
      female: { min: "149 lb", max: "182 lb", minKg: "67.6 kg", maxKg: "82.5 kg" },
      male: { min: "166 lb", max: "202 lb", minKg: "75.3 kg", maxKg: "91.6 kg" },
    },
    {
      height: "6′ 2″",
      heightCm: 188,
      female: { min: "153 lb", max: "187 lb", minKg: "69.4 kg", maxKg: "84.8 kg" },
      male: { min: "171 lb", max: "209 lb", minKg: "77.5 kg", maxKg: "94.8 kg" },
    },
    {
      height: "6′ 3″",
      heightCm: 191,
      female: { min: "158 lb", max: "193 lb", minKg: "71.6 kg", maxKg: "87.5 kg" },
      male: { min: "176 lb", max: "216 lb", minKg: "79.8 kg", maxKg: "98 kg" },
    },
    {
      height: "6′ 4″",
      heightCm: 193,
      female: { min: "162 lb", max: "198 lb", minKg: "73.5 kg", maxKg: "89.8 kg" },
      male: { min: "182 lb", max: "222 lb", minKg: "82.5 kg", maxKg: "100.6 kg" },
    },
    {
      height: "6′ 5″",
      heightCm: 195,
      female: { min: "167 lb", max: "204 lb", minKg: "75.7 kg", maxKg: "92.5 kg" },
      male: { min: "187 lb", max: "229 lb", minKg: "84.8 kg", maxKg: "103.8 kg" },
    }
  ];

const heightRanges = [
    {min: 137, max: 140, result: 137},
    {min: 140, max: 142, result: 140},
    {min: 142, max: 145, result: 142},
    {min: 145, max: 147, result: 145},
    {min: 147, max: 150, result: 147},
    {min: 150, max: 152, result: 150},
    {min: 152, max: 155, result: 152},
    {min: 155, max: 157, result: 155},
    {min: 157, max: 160, result: 157},
    {min: 160, max: 163, result: 160},
    {min: 163, max: 165, result: 163},
    {min: 165, max: 168, result: 165},
    {min: 168, max: 170, result: 168},
    {min: 170, max: 173, result: 170},
    {min: 173, max: 175, result: 173},
    {min: 175, max: 178, result: 175},
    {min: 178, max: 180, result: 178},
    {min: 180, max: 183, result: 180},
    {min: 183, max: 185, result: 183},
    {min: 185, max: 188, result: 185},
    {min: 188, max: 191, result: 188},
    {min: 191, max: 193, result: 191},
    {min: 193, max: 195, result: 193},
    {min: 195, max: 198, result: 195},
];
  
export const idealWeightChecker = (userHeight: number) => {
    // Find if 'userHeight' is within the height range.
    function getHeightRange(value: number) {
        const foundRange = heightRanges.find(range => value >= range.min && value < range.max);
        return foundRange ? foundRange.result : console.log("Height not in Range");}
    
    // Find in idealWeightTable the result in 'geHeightRange function'
    const result = idealWeightTable.find((item) => item.heightCm === getHeightRange(userHeight));
    console.log(result)
    if (result) {        
        return `${result.male.min} to ${result.male.max}`
    } else {
        return 'height not found'
    }

}