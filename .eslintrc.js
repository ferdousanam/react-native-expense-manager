module.exports = {
    root: true,
    extends: '@react-native-community',
    plugins: ['react-hooks'],
    rules: {
        quotes: [1, 'single'],
        // indent: ['error', 4, {SwitchCase: 1}],
        'react-native/no-inline-styles': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'no-shadow': 'off',
        'max-len': [
            'error',
            {
                code: 120,
                tabWidth: 4,
                ignoreComments: true, //"comments": 80
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
    },
};
