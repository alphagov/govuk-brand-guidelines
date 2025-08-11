// This file doesn't include RGB colours as these are directly translatable
// from hex, so we can just do that when needed. CMYK and Pantone are only
// defined where the colour is approved for print use.

export default function () {
  return [
    {
      group: 'blue',
      hex: '#1D70B8',
      cmyk: [84, 39, 0, 28],
      pantone: '7461 C',
      label: 'Primary blue',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'blue',
      hex: '#5694CA',
      cmyk: [57, 27, 0, 21],
      pantone: '7688 C',
      label: 'Blue tint 25%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'blue',
      hex: '#8EB8DC',
      cmyk: [35, 16, 0, 14],
      pantone: '278 C',
      label: 'Blue tint 50%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'blue',
      hex: '#D2E2F1',
      cmyk: [13, 6, 0, 5],
      pantone: '545 C',
      label: 'Blue tint 80%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'blue',
      hex: '#F4F8FB',
      label: 'Blue tint 95%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'blue',
      hex: '#16548A',
      label: 'Blue shade 25%',
      uses: ['app', 'social']
    },
    {
      group: 'blue',
      hex: '#0F385C',
      cmyk: [84, 39, 0, 64],
      pantone: '7694 C',
      label: 'Blue shade 50%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'blue',
      hex: '#11E0F1',
      label: 'Accent blue',
      uses: ['app', 'social']
    },
    {
      group: 'blue',
      hex: '#37A3FF',
      label: 'Dark mode primary blue',
      uses: ['app']
    },
    {
      group: 'blue',
      hex: '#061625',
      label: 'Dark mode blue shade 80%',
      uses: ['app']
    },
    {
      group: 'green',
      hex: '#11875A',
      cmyk: [87, 0, 33, 47],
      pantone: '7725 C',
      label: 'Primary green',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'green',
      hex: '#4DA583',
      cmyk: [57, 27, 0, 21],
      pantone: '7688 C',
      label: 'Green tint 25%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'green',
      hex: '#88C3AD',
      cmyk: [30, 0, 11, 24],
      pantone: '564 C',
      label: 'Green tint 50%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'green',
      hex: '#CFE7DE',
      cmyk: [5, 0, 2, 5],
      pantone: '621 C',
      label: 'Green tint 80%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'green',
      hex: '#F3F9F7',
      label: 'Green tint 95%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'green',
      hex: '#0D6544',
      label: 'Green shade 25%',
      uses: ['app', 'social']
    },
    {
      group: 'green',
      hex: '#09442D',
      label: 'Green shade 50%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'green',
      hex: '#66F39E',
      label: 'Accent green',
      uses: ['app', 'social']
    },
    {
      group: 'teal',
      hex: '#158187',
      cmyk: [84, 4, 0, 47],
      pantone: '7716 C',
      label: 'Primary teal',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'teal',
      hex: '#50A1A5',
      cmyk: [52, 2, 0, 35],
      pantone: '2235 C',
      label: 'Teal tint 25%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'teal',
      hex: '#8AC0C3',
      cmyk: [29, 2, 0, 24],
      pantone: '7472 C',
      label: 'Teal tint 50%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'teal',
      hex: '#D0E6E7',
      cmyk: [10, 0, 0, 9],
      pantone: '7464 C',
      label: 'Teal tint 80%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'teal',
      hex: '#F3F9F9',
      label: 'Teal tint 95%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'teal',
      hex: '#106165',
      label: 'Teal shade 25%',
      uses: ['app', 'social']
    },
    {
      group: 'teal',
      hex: '#0B4144',
      label: 'Teal shade 50%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'teal',
      hex: '#00FFE0',
      cmyk: [100, 0, 12, 0],
      pantone: '3255 C',
      label: 'Accent teal',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'purple',
      hex: '#54319F',
      cmyk: [47, 69, 0, 38],
      pantone: '2103 C',
      label: 'Primary purple',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'purple',
      hex: '#7F65B7',
      cmyk: [31, 45, 0, 28],
      pantone: '2101 C',
      label: 'Purple tint 25%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'purple',
      hex: '#AA98CF',
      cmyk: [18, 27, 0, 19],
      pantone: '2100 C',
      label: 'Purple tint 50%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'purple',
      hex: '#DDD6EC',
      cmyk: [6, 9, 0, 7],
      pantone: '7444 C',
      label: 'Purple tint 80%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'purple',
      hex: '#F6F5FA',
      label: 'Purple tint 95%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'purple',
      hex: '#3F2577',
      label: 'Purple shade 25%',
      uses: ['app', 'social']
    },
    {
      group: 'purple',
      hex: '#2A1950',
      label: 'Purple shade 50%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'purple',
      hex: '#BA4AFF',
      label: 'Accent purple',
      uses: ['app', 'social']
    },
    {
      group: 'magenta',
      hex: '#CA357C',
      cmyk: [0, 74, 39, 21],
      pantone: '213 C',
      label: 'Primary magenta',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'magenta',
      hex: '#D7689D',
      cmyk: [0, 52, 27, 16],
      pantone: '2038 C',
      label: 'Magenta tint 25%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'magenta',
      hex: '#E59ABE',
      cmyk: [0, 33, 17, 10],
      pantone: '2037 C',
      label: 'Magenta tint 50%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'magenta',
      hex: '#F4D7E5',
      cmyk: [0, 12, 6, 4],
      pantone: '217 C',
      label: 'Magenta tint 80%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'magenta',
      hex: '#FCF5F8',
      label: 'Magenta tint 95%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'magenta',
      hex: '#98285D',
      label: 'Magenta shade 25%',
      uses: ['app', 'social']
    },
    {
      group: 'magenta',
      hex: '#651B3E',
      label: 'Magenta shade 50%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'magenta',
      hex: '#FF52EE',
      label: 'Accent magenta',
      uses: ['app', 'social']
    },
    {
      group: 'red',
      hex: '#CA3535',
      cmyk: [0, 74, 74, 21],
      pantone: '1795 C',
      label: 'Primary red',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'red',
      hex: '#D76868',
      cmyk: [0, 52, 52, 16],
      pantone: '2032 C',
      label: 'Red tint 25%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'red',
      hex: '#E59A9A',
      cmyk: [0, 33, 33, 10],
      pantone: '2029 C',
      label: 'Red tint 50%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'red',
      hex: '#F4D7D7',
      cmyk: [0, 12, 12, 4],
      pantone: '4064 C',
      label: 'Red tint 80%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'red',
      hex: '#FCF5F5',
      label: 'Red tint 95%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'red',
      hex: '#982828',
      label: 'Red shade 25%',
      uses: ['app', 'social']
    },
    {
      group: 'red',
      hex: '#651B1B',
      label: 'Red shade 50%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'red',
      hex: '#FF5E5E',
      label: 'Accent red',
      uses: ['app', 'social']
    },
    {
      group: 'orange',
      hex: '#F47738',
      cmyk: [0, 51, 77, 4],
      pantone: '2026 C',
      label: 'Primary orange',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'orange',
      hex: '#F7996A',
      cmyk: [0, 38, 57, 3],
      pantone: '2023 C',
      label: 'Orange tint 25%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'orange',
      hex: '#FABB9C',
      cmyk: [0, 25, 38, 2],
      pantone: '162 C',
      label: 'Orange tint 50%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'orange',
      hex: '#FDE4D7',
      cmyk: [0, 10, 15, 1],
      pantone: '2015 C',
      label: 'Orange tint 80%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'orange',
      hex: '#FEF8F5',
      label: 'Orange tint 95%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'orange',
      hex: '#B7592A',
      label: 'Orange shade 25%',
      uses: ['app', 'social']
    },
    {
      group: 'orange',
      hex: '#7A3C1C',
      label: 'Orange shade 50%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'orange',
      hex: '#FFAF4A',
      label: 'Accent orange',
      uses: ['app', 'social']
    },
    {
      group: 'yellow',
      hex: '#FFDD00',
      cmyk: [0, 13, 100, 0],
      pantone: 'Yellow C',
      label: 'Primary yellow',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'yellow',
      hex: '#FFE640',
      cmyk: [0, 3, 49, 5],
      pantone: '100 C',
      label: 'Yellow tint 25%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'yellow',
      hex: '#FFEE80',
      cmyk: [0, 10, 75, 0],
      pantone: '2003 C',
      label: 'Yellow tint 50%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'yellow',
      hex: '#FFF8CC',
      cmyk: [0, 3, 20, 0],
      pantone: '2001 C',
      label: 'Yellow tint 80%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'yellow',
      hex: '#FFFDF2',
      label: 'Yellow tint 95%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'yellow',
      hex: '#BFA600',
      label: 'Yellow shade 25%',
      uses: ['app', 'social']
    },
    {
      group: 'yellow',
      hex: '#806F00',
      label: 'Yellow shade 50%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'yellow',
      hex: '#FCFF52',
      label: 'Accent yellow',
      uses: ['app', 'social']
    },
    {
      group: 'brown',
      hex: '#99704A',
      label: 'Primary brown',
      uses: ['web']
    },
    {
      group: 'brown',
      hex: '#B39477',
      label: 'Brown tint 25%',
      uses: ['web']
    },
    {
      group: 'brown',
      hex: '#CCB8A5',
      label: 'Brown tint 50%',
      uses: ['web']
    },

    {
      group: 'brown',
      hex: '#FAF8F6',
      label: 'Brown tint 95%',
      uses: ['web']
    },
    {
      group: 'neutral',
      hex: '#0B0C0C',
      cmyk: [8, 0, 0, 95],
      pantone: 'Black 3 C',
      label: 'Black',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'neutral',
      hex: '#484949',
      cmyk: [1, 0, 0, 71],
      pantone: '418 C',
      label: 'Black tint 25%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'neutral',
      hex: '#858686',
      cmyk: [1, 0, 0, 47],
      pantone: '415 C',
      label: 'Black tint 50%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'neutral',
      hex: '#CECECE',
      cmyk: [0, 0, 0, 19],
      pantone: '413 C',
      label: 'Black tint 80%',
      uses: ['app', 'social', 'web', 'print']
    },
    {
      group: 'neutral',
      hex: '#F3F3F3',
      label: 'Black tint 95%',
      uses: ['app', 'social', 'web']
    },
    {
      group: 'neutral',
      hex: '#FFFFFF',
      label: 'White',
      uses: ['app', 'social', 'web', 'print']
    }
  ]
}
