import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import plugin from "windicss/plugin";

export default defineConfig({
  extract: {
    include: ["src/**/*.{html,sass,pug,jade,js}"],
  },
  attributify: true,
  theme: {
    extend: {},
  },
  alias: {
    hstack: "flex items-center",
  },
});
