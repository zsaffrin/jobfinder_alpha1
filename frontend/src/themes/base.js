const base = (baseFontSize = 16) => ({
  colors: {
    // Generated with Palx
    // https://palx.jxnblk.com/07990c
    gray: [
      '#f8f9f8',
      '#ebedec',
      '#dee1de',
      '#cfd4cf',
      '#bec5be',
      '#acb5ac',
      '#97a298',
      '#7e8c7f',
      '#5f7060',
      '#344234'
    ],
    green: [
      '#e4f4e5',
      '#c7e8c8',
      '#a6daa8',
      '#7fca81',
      '#4db651',
      '#07990c',
      '#068a0a',
      '#057809',
      '#046307',
      '#034705'
    ],
    teal: [
      '#e4f3ec',
      '#c6e7d8',
      '#a4d9c0',
      '#7cc9a5',
      '#4bb583',
      '#079955',
      '#068a4c',
      '#057843',
      '#046337',
      '#034727'
    ],
    cyan: [
      '#e3f3f3',
      '#c5e6e7',
      '#a3d7d9',
      '#7bc6c8',
      '#4ab1b4',
      '#079499',
      '#06858a',
      '#057478',
      '#046063',
      '#034447'
    ],
    blue: [
      '#e7edf5',
      '#ccdaea',
      '#adc3dd',
      '#88a9ce',
      '#5886ba',
      '#074b99',
      '#064389',
      '#053a76',
      '#042f60',
      '#032042'
    ],
    indigo: [
      '#ebeaf6',
      '#d5d4ed',
      '#bbbae2',
      '#9c9ad5',
      '#716ec3',
      '#0c0799',
      '#0a0689',
      '#090577',
      '#070461',
      '#050343'
    ],
    violet: [
      '#f0e9f6',
      '#e0d2ec',
      '#cdb6e1',
      '#b695d3',
      '#9767c0',
      '#550799',
      '#4c0689',
      '#420577',
      '#360461',
      '#250343'
    ],
    fuschia: [
      '#f6e9f5',
      '#ecd1eb',
      '#e0b5df',
      '#d293d0',
      '#bf65bc',
      '#990794',
      '#8a0685',
      '#780574',
      '#630460',
      '#460344'
    ],
    pink: [
      '#f6e9ef',
      '#ecd1de',
      '#e0b5ca',
      '#d394b1',
      '#c06690',
      '#99074b',
      '#890643',
      '#78053b',
      '#630430',
      '#450322'
    ],
    red: [
      '#f6eae9',
      '#ecd2d1',
      '#e1b7b6',
      '#d39694',
      '#c06966',
      '#990c07',
      '#890a06',
      '#780905',
      '#620704',
      '#450503'
    ],
    orange: [
      '#f4ede4',
      '#e8d9c7',
      '#dac2a6',
      '#caa77f',
      '#b6864f',
      '#995507',
      '#894c06',
      '#774205',
      '#623604',
      '#442603'
    ],
    yellow: [
      '#f2f2e0',
      '#e3e5c0',
      '#d4d69b',
      '#c2c572',
      '#adb142',
      '#949907',
      '#858a06',
      '#747805',
      '#606304',
      '#444703'
    ],
    lime: [
      '#eaf3e2',
      '#d3e6c3',
      '#bad8a0',
      '#9cc777',
      '#79b346',
      '#4b9907',
      '#438a06',
      '#3b7805',
      '#306304',
      '#224603'
    ]
  },
  space: {
    thin: '2px',
    sm: `${baseFontSize / 4}px`,
    md: `${baseFontSize / 2}px`,
    lg: `${baseFontSize}px`,
    xl: `${baseFontSize * 1.25}px`,
    xxl: `${baseFontSize * 2.5}px`
  }
});

export default base(16);
