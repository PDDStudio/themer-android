var xml = require('xml');

const render = (colors, options) => {
    const colorSets = [
      { name: 'dark', colors: colors.dark },
      { name: 'light', colors: colors.light },  
    ].filter(colorSet => !!colorSet.colors);

    return colorSets.map(colorSet => {
        const {
            shade0,
            shade1,
            shade2,
            shade3,
            shade4,
            shade5,
            shade6,
            shade7,
            accent0,
            accent1,
            accent2,
            accent3,
            accent4,
            accent5,
            accent6,
            accent7,
          } = colorSet.colors;
          var data = [ { resources: [
              { color: [ { _attr: { name: `color_shade0_${colorSet.name}`} }, shade0 ] },
              { color: [ { _attr: { name: `color_shade1_${colorSet.name}`} }, shade1 ] },
              { color: [ { _attr: { name: `color_shade2_${colorSet.name}`} }, shade2 ] },
              { color: [ { _attr: { name: `color_shade3_${colorSet.name}`} }, shade3 ] },
              { color: [ { _attr: { name: `color_shade4_${colorSet.name}`} }, shade4 ] },
              { color: [ { _attr: { name: `color_shade5_${colorSet.name}`} }, shade5 ] },
              { color: [ { _attr: { name: `color_shade6_${colorSet.name}`} }, shade6 ] },
              { color: [ { _attr: { name: `color_shade7_${colorSet.name}`} }, shade7 ] },

              { color: [ { _attr: { name: `color_accent0_${colorSet.name}`} }, accent0 ] },
              { color: [ { _attr: { name: `color_accent1_${colorSet.name}`} }, accent1 ] },
              { color: [ { _attr: { name: `color_accent2_${colorSet.name}`} }, accent2 ] },
              { color: [ { _attr: { name: `color_accent3_${colorSet.name}`} }, accent3 ] },
              { color: [ { _attr: { name: `color_accent4_${colorSet.name}`} }, accent4 ] },
              { color: [ { _attr: { name: `color_accent5_${colorSet.name}`} }, accent5 ] },
              { color: [ { _attr: { name: `color_accent6_${colorSet.name}`} }, accent6 ] },
              { color: [ { _attr: { name: `color_accent7_${colorSet.name}`} }, accent7 ] },
            ]}];
          return Promise.resolve({
              name: `themer-android-${colorSet.name}.xml`,
              contents: Buffer.from(xml(data, { declaration: true, indent: true })),
          });
    });
};

module.exports = {render};