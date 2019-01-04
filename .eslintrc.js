module.exports = {
    parser: "babel-eslint",
    "extends": "airbnb",
    "plugins": ["react", "jsx-a11y", "import"],
    rules: {
        "indent": ["error", 4],
        "linebreak-style": 0,
        "react/jsx-indent": ["error", 4],
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}]
    }
};