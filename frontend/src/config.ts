const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

const protocol = isLocal ? "http" : window.location.protocol.replace(":", "");
const baseRoute = isLocal ? "localhost:3000" : window.location.host;

export const config = {
  backend: {
    protocol,
    baseRoute,
  },
};


/*
const config = {
    backend: {
        protocol: "http",
        baseRoute: "localhost:3000"
    }
}

*/

export default config
