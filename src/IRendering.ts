module Manifesto {
    export interface IRendering extends IManifestResource {
        getFormat(): RenderingFormat;
    }
}