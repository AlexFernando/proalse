const settings = {
  "name": "proalse",
  "state": {
    "frontity": {
      "url": "https://proalse.wildfreewalkingtours.com/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },

  "packages": [
    {
      "name": "proalse",

      "state": {
        "theme": {
          "menu": [
            ["About", "/"],
            ["Products", "/products/"],
            ["Contact", "/contact"]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "hover"
        }
      }
    },

    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://proalse.wildfreewalkingtours.com/wp-json/",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7"
  ]
};

export default settings;
