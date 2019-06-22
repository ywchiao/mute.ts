module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true
    },
  },
  "rules": {
    "array-bracket-newline": [
      "error",
      "consistent"
    ],
    "array-element-newline": [
      "error",
      "consistent"
    ],
    "arrow-body-style": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "stroustrup"
    ],
    "dot-location": [
      "error",
      "property"
    ],
    "eqeqeq": [
      "error",
      "smart"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "quote-props": [
      "error",
      "consistent"
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "default-case": "error",
    "dot-notation": "error",
    "no-console": "off",
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "prefer-template": "error"
  }
}

// .eslintrc.js
