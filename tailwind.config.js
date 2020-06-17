module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/**/*.html", "./src/**/*.vue"],
    whitelistPatterns: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!(|.*?:)cursor-move).+-move$/,
      /^router-link(|-exact)-active$/
    ]
  },
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 20px 25px -5px rgba(0, 0, 0, 0.8), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }
    },
    container: {
      padding: "1rem"
    }
  },
  variants: {},
  plugins: []
};
