import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "INVER Turismo Uruguay",
        short_name: "INVER",
        description: "Tours, transfers y experiencias únicas en Uruguay desde 2009.",
        start_url: "/",
        display: "standalone",
        background_color: "#FBF6EC",
        theme_color: "#1A1209",
        icons: [
            {
                src: "/icons/icon-192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable",
            },
            {
                src: "/icons/icon-512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any",
            },
        ],
    };
}
