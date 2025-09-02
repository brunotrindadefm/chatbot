import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const languageMap: Record<string, () => Promise<any>> = {
    javascript: () => import("prismjs/components/prism-javascript"),
    js: () => import("prismjs/components/prism-javascript"),
    typescript: () => import("prismjs/components/prism-typescript"),
    ts: () => import("prismjs/components/prism-typescript"),
    python: () => import("prismjs/components/prism-python"),
    py: () => import("prismjs/components/prism-python"),
    java: () => import("prismjs/components/prism-java"),
    cpp: () => import("prismjs/components/prism-cpp"),
    cplusplus: () => import("prismjs/components/prism-cpp"),
    c: () => import("prismjs/components/prism-c"),
    csharp: () => import("prismjs/components/prism-csharp"),
    cs: () => import("prismjs/components/prism-csharp"),
    go: () => import("prismjs/components/prism-go"),
    golang: () => import("prismjs/components/prism-go"),
    rust: () => import("prismjs/components/prism-rust"),
    rs: () => import("prismjs/components/prism-rust"),
    ruby: () => import("prismjs/components/prism-ruby"),
    rb: () => import("prismjs/components/prism-ruby"),
    php: () => import("prismjs/components/prism-php"),
    swift: () => import("prismjs/components/prism-swift"),
    kotlin: () => import("prismjs/components/prism-kotlin"),
    kt: () => import("prismjs/components/prism-kotlin"),
    scala: () => import("prismjs/components/prism-scala"),

    html: () => import("prismjs/components/prism-markup"),
    css: () => import("prismjs/components/prism-css"),
    sass: () => import("prismjs/components/prism-sass"),
    scss: () => import("prismjs/components/prism-sass"),
    less: () => import("prismjs/components/prism-less"),
    markdown: () => import("prismjs/components/prism-markdown"),
    md: () => import("prismjs/components/prism-markdown"),

    json: () => import("prismjs/components/prism-json"),
    yaml: () => import("prismjs/components/prism-yaml"),
    yml: () => import("prismjs/components/prism-yaml"),
    toml: () => import("prismjs/components/prism-toml"),

    sql: () => import("prismjs/components/prism-sql"),
    mongodb: () => import("prismjs/components/prism-mongodb"),
    graphql: () => import("prismjs/components/prism-graphql"),
    gql: () => import("prismjs/components/prism-graphql"),

    bash: () => import("prismjs/components/prism-bash"),
    shell: () => import("prismjs/components/prism-bash"),
    sh: () => import("prismjs/components/prism-bash"),
    zsh: () => import("prismjs/components/prism-bash"),
    powershell: () => import("prismjs/components/prism-powershell"),
    ps1: () => import("prismjs/components/prism-powershell"),
    docker: () => import("prismjs/components/prism-docker"),
    dockerfile: () => import("prismjs/components/prism-docker"),

    regex: () => import("prismjs/components/prism-regex"),
    regexp: () => import("prismjs/components/prism-regex"),
    julia: () => import("prismjs/components/prism-julia"),
    jl: () => import("prismjs/components/prism-julia"),
    r: () => import("prismjs/components/prism-r"),
    matlab: () => import("prismjs/components/prism-matlab"),
    haskell: () => import("prismjs/components/prism-haskell"),
    hs: () => import("prismjs/components/prism-haskell"),
    elixir: () => import("prismjs/components/prism-elixir"),
    ex: () => import("prismjs/components/prism-elixir"),
    exs: () => import("prismjs/components/prism-elixir"),
    clojure: () => import("prismjs/components/prism-clojure"),
    clj: () => import("prismjs/components/prism-clojure"),
    perl: () => import("prismjs/components/prism-perl"),
    pl: () => import("prismjs/components/prism-perl"),
};

export async function loadLanguage(language: string) {
    const loader = languageMap[language.toLowerCase()];
    if (loader) {
        try {
            await loader();
        } catch (err) {
            console.warn(`Erro ao carregar linguagem ${language}`, err);
        }
    }
}

export default Prism;
